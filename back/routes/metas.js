const router = require('express').Router();
const Meta = require('../models/Meta');
const User = require('../models/User');

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

var storage = cloudinaryStorage({
    cloudinary,
    folder: 'uploads',
    allowedFormats: ['jpg', 'png'],
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadCloud = multer({ storage: storage });



//VERIFÍCAME SI EL USUARIO ESTÁ AUTENTICADO
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(403);
    res.send("No estás autorizado");
}

//NUEVA META
router.post('/new', uploadCloud.single("picture"), (req, res, next) => {
    console.log(req.body);
    req.body.picture = req.file.url;
    req.body.user = req.user._id;
    Meta.create(req.body)
        .then(meta => {
            console.log("meta", meta)
            User.findByIdAndUpdate(req.user._id, { $push: { metas: meta._id } }, { new: true })
                .then(user => {
                    console.log("aasd", user);
                    res.json(meta)
                })
        }).catch(e => {
            res.send(e);
        })
});

//GET ME ALL LAS METAS
router.get('/', (req, res) => {
    Meta.find()
        .populate("user", "name")
        .then(metas => {
            res.json(metas);
        })
        .catch(e => {
            console.log(e);
            res.send("No sirvo :(")
        })
});

//BÓRRAME ESTA META
router.delete('/borrar/:id', (req, res) => {
    Meta.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json(doc)
    })
})

//DETALLE DE LA META
router.get('/:id', (req, res, next) => {
    Meta.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//EDÍTAME ESTA META
router.put('/edit/:id', (req, res, next) => {
    Meta.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(meta => {
            res.json(meta)
        })
        .catch(e => next(e))
});

module.exports = router;