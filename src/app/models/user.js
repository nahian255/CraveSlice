const { Schema, model, models } = require("mongoose");
// import * as models from "./../models/user"

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

export const User = models?.User || model('User', userSchema);