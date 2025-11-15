import { EmotionEntry } from "../models/EmotionEntry.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"

export const Emotion = asyncHandler(async (req, res) => {
    try {
        const { emotion, note } = req.body || ""

        if(!emotion || !note || !emotion.trim() || !note.trim()) {
            return res.status(400)
            .json(new ApiResponse(
                400,
                {},
                "Emotion and note are required"
            ))
        }

        if (emotion.length > 50) {
            return res
            .status(400)
            .json(new ApiResponse(
                400,
                {},
                "Emotion is too long (max 50 characters)"
            ))
        }

        if (note.length > 1000) {
            return res
            .status(400)
            .json(new ApiResponse(
                400,
                {},
                "Note is too long (max 1000 characters)"
            ))
        }

        const newEntry = await EmotionEntry.create({
            emotion: emotion.trim(),
            note: note.trim()
        })

        return res
        .status(201)
        .json(new ApiResponse(
            201,
            {newEntry},
            "New emotion created successfully"
        ))
    } catch (error) {
        console.error("Failed to create emotion", error);
        throw new ApiError(400, "Failed to create error")
    }
})

export const getEmotion = asyncHandler(async (req, res) => {
    try {
        const entries = await EmotionEntry.find().sort({ createdAt: -1 })
        return res
        .status(200)
        .json(new ApiResponse(
            200,
            {entries},
            "All entries fetched successfully"
        ))
    } catch (error) {
        console.error("Error to fetching entries: ", error);
        throw new ApiError(500, "Error to fetching entries")
    }
})