import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        requrired: true,
    },
    email: {
        type: String,
        requrired: true,
    },
    password: {
        type: String,
        requrired: true,
    },
}, { timestamps: true }
);

const User = models.User || mongoose.model('User', userSchema);
export default User;
