const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "your username is required"],
    },
    password: {
        type: String,
        required: [true, "your password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },

});

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;