import mongoose from "mongoose";

const moviesSchema = mongoose.Schema({
    title: {type: String, required: true},

}, {collection: 'songs'})

export default moviesSchema