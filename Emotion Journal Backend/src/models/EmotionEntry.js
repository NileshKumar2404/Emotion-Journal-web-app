import mongoose from "mongoose";

const emotionEntrySchema = new mongoose.Schema({
    emotion: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    note: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {versionKey: false})

export const EmotionEntry = mongoose.model("EmotionEntry", emotionEntrySchema);
