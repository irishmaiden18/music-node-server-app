import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    bio: String,
    location: String,
    dateOfBirth: String,
    dateJoined: String,
    access: String,
}, {collection: 'users'})

export default usersSchema