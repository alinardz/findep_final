const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiagnosticoSchema = new Schema({

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

module.exports = mongoose.model("Diagnostico", DiagnosticoSchema);