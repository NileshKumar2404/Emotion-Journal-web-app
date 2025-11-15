"use client";

export default function StatusToast({ message, type = "info", onClose }) {
  if (!message) return null;

  return (
    <div className={`toast toast--${type}`}>
      <span>{message}</span>
      <button onClick={onClose} aria-label="Dismiss">
        ×
      </button>
    </div>
  );
}
