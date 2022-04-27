const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nama harus di isi"],
    },
    age: {
        type: Number,
        required: [true, "Umur harus di isi"],
    },
    status: {
        type: String,
        enum: ["alive", "not alive"],
        default: "not alive",
    },
});

const users = mongoose.model('users', userSchema);

module.exports = users;
