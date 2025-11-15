"use client";

import { useState } from "react";

const PRESET_EMOTIONS = ["Happy", "Sad", "Angry", "Calm", "Anxious", "Excited"];

export default function EmotionForm({ onCreate, creating }) {
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [customEmotion, setCustomEmotion] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const handleChipClick = (emotion) => {
    setSelectedEmotion(emotion);
    setCustomEmotion("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emotion = (customEmotion || selectedEmotion || "").trim();
    const trimmedNote = note.trim();

    if (!emotion) {
      setError("Please select or type an emotion.");
      return;
    }
    if (!trimmedNote) {
      setError("Please write a short note about how you feel.");
      return;
    }

    try {
      await onCreate({ emotion, note: trimmedNote });
      setSelectedEmotion("");
      setCustomEmotion("");
      setNote("");
      setError("");
    } catch (err) {
      // global toast already shows error; this keeps inline message
      setError(err.message || "Something went wrong, please try again.");
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <h2 className="card-title">How are you feeling?</h2>

      <label className="label">Quick emotions</label>
      <div className="chip-row">
        {PRESET_EMOTIONS.map((emotion) => (
          <button
            key={emotion}
            type="button"
            className={
              "chip" +
              (selectedEmotion === emotion && !customEmotion
                ? " chip--active"
                : "")
            }
            onClick={() => handleChipClick(emotion)}
          >
            {emotion}
          </button>
        ))}
      </div>

      <label className="label" htmlFor="custom-emotion">
        Or type your emotion
      </label>
      <input
        id="custom-emotion"
        className="input"
        placeholder="e.g. Grateful, Overwhelmed"
        value={customEmotion}
        onChange={(e) => {
          setCustomEmotion(e.target.value);
          setSelectedEmotion("");
          setError("");
        }}
      />

      <label className="label" htmlFor="note">
        What’s going on?
      </label>
      <textarea
        id="note"
        className="textarea"
        placeholder="Write a short note about how you feel…"
        rows={4}
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
          setError("");
        }}
      />

      {error && <p className="error">{error}</p>}

      <button className="btn" type="submit" disabled={creating}>
        {creating ? "Saving…" : "Save emotion"}
      </button>
    </form>
  );
}
