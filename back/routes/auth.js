const router = require('express').Router();
const passport = require('passport');
const User = require('../models/User');

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(403);
    res.send("No estás autorizado");
}

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    res.json(req.user);
});

router.post('/signup', (req, res) => {
    /*     if (req.body.password !== req.body.password2) {
            return res.render("auth/signup", { info: "Las contraseñas no coinciden :(" })
        } */
    console.log(req.body)
    User.create(req.body, (err, user) => {
        if (err) return res.json(err);
        res.json(user);
    })
});

router.get('/logout', (req, res) => {
    req.logout();
    res.status(200);
    res.json({ message: "Cerraste sesión" });
});

router.get("/profile", isAuthenticated, (req, res) => {
    User.findById(req.user._id)
        .then(user => {
            res.json(user);
        })
});

module.exports = router;