const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    name: String,
    diagnostico: String,
    profilePic: String,
    metas: [{
        type: Schema.Types.ObjectId,
        ref: "Meta"
    }],
    registros: [{
        type: Schema.Types.ObjectId,
        ref: "Registro"
    }]
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model("User", UserSchema);