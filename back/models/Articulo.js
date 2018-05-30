const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticuloSchema = new Schema({
    name: String,
    body: String,
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Articulo", ArticuloSchema);