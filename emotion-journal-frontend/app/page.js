"use client";

import { useEffect, useState } from "react";
import EmotionForm from "./components/EmotionForm";
import EntryList from "./components/EntryList";
import StatusToast from "./components/StatusToast";
import { fetchEntries, createEntry } from "./lib/api";

export default function HomePage() {
  const [entries, setEntries] = useState([]);
  const [loadingEntries, setLoadingEntries] = useState(false);
  const [creating, setCreating] = useState(false);
  const [listError, setListError] = useState("");

  const [toast, setToast] = useState(null); // { type: 'success' | 'error', text: string }

  // load entries
  useEffect(() => {
    async function load() {
      setLoadingEntries(true);
      setListError("");

      try {
        const data = await fetchEntries();
        setEntries(data || []);
      } catch (err) {
        console.error(err);
        const text =
          err.message || "Could not load entries. Please try again.";
        setListError(text);
        setToast({ type: "error", text });
      } finally {
        setLoadingEntries(false);
      }
    }
    load();
  }, []);

  const handleCreate = async ({ emotion, note }) => {
    setCreating(true);
    try {
      const created = await createEntry({ emotion, note });
      setEntries((prev) => [created, ...prev]);
      setToast({ type: "success", text: "Emotion saved to your journal." });
    } catch (err) {
      console.error(err);
      setToast({
        type: "error",
        text: err.message || "Failed to save emotion. Please try again.",
      });
      throw err; // let the form show its inline error too
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Emotion Journal</h1>
        <p className="subtitle">
          A simple space to notice, name, and reflect on your emotions.
        </p>
      </header>

      <main className="layout">
        <section className="layout-main">
          <EmotionForm onCreate={handleCreate} creating={creating} />
        </section>
        <section className="layout-side">
          <EntryList
            entries={entries}
            loading={loadingEntries}
            error={listError}
          />
        </section>
      </main>

      <StatusToast
        message={toast?.text}
        type={toast?.type}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
