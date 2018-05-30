const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistroSchema = new Schema({
    category: String,
    description: String,
    quantity: Number,
    date: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Registro", RegistroSchema);