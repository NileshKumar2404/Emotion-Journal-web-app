import { Router } from "express";
import { Emotion, getEmotion } from "../controllers/entries.controller.js";

const router = Router()

router.route("/emotion").post(Emotion)
router.route("/get-emotions").get(getEmotion)

export default router