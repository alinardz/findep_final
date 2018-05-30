const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MetaSchema = new Schema({
    name: String,
    picture: String,
    dateStart: String,
    dateEnd: String,
    initialQuantity: Number,
    actualQuantity: Number,
    totalQuantity: Number,
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

module.exports = mongoose.model("Meta", MetaSchema);