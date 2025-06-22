import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 1, // Age must be positive
    },
    textarea: {
        type: String,
        maxLength: 500, // Optional max length
    }
}, {
    timestamps: true,
    collection: "practice" // Explicit collection name
});

// Optional: Add indexes
userSchema.index({ name: 1 });

export default mongoose.model("User", userSchema);

//This file for making the model is must as user may insert 
//any data in any field so it works as a validation.