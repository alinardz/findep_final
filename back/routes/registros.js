const router = require('express').Router();
const Registro = require('../models/Registro');
const User = require('../models/User');

//VERIFÍCAME SI EL USUARIO ESTÁ AUTENTICADO
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(403);
    res.send("No estás autorizado");
}

//NUEVO REGISTRO
router.post('/new', (req, res, next) => {
    console.log(req.body);
    req.body.user = req.user._id;
    console.log(req.body);
    Registro.create(req.body)
        .then(registro => {
            console.log("registro", registro)
            User.findByIdAndUpdate(req.user._id, { $push: { registros: registro._id } }, { new: true })
                .then(user => {
                    console.log("soy el usuario", user);
                    res.json(registro)
                    console.log("soy el registro", registro);
                })
        }).catch(e => {
            res.send(e);
        })
});

//GET ME ALL LOS REGISTROS
router.get('/', (req, res) => {
    Registro.find()
        .populate("user", "name")
        .then(registros => {
            res.json(registros);
        })
        .catch(e => {
            console.log(e);
            res.send("No sirvo :(")
        })
});

//BÓRRAME ESTE REGISTRO
router.delete('/borrar/:id', (req, res) => {
    Registro.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json(doc)
    })
})

module.exports = router;