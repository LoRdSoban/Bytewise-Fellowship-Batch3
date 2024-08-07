const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name value"],
    },
    email: {
        type: String,
        required: [true, "Please add an email value"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please add a password value"],
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);