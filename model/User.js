const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "auth", reuired: true },
    name: { type: String, required: true },
    subject: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    message: { type: String, required: true },
})
module.exports = mongoose.model("user", userSchema)