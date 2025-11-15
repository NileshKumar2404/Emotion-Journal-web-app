"use client";

export default function EntryList({ entries = [], loading, error }) {
  if (loading && entries.length === 0) {
    return (
      <div className="card journal-card">
        <h2 className="card-title">Your emotion journal</h2>
        <div className="entry-list-wrapper">
          <div className="entry-skeleton"></div>
          <div className="entry-skeleton"></div>
          <div className="entry-skeleton"></div>
        </div>
      </div>
    );
  }

  if (!loading && entries.length === 0 && !error) {
    return (
      <div className="card journal-card">
        <h2 className="card-title">Your emotion journal</h2>
        <p className="muted">
          No entries yet. Start by logging how you feel today.
        </p>
      </div>
    );
  }

  return (
    <div className="card journal-card">
      <h2 className="card-title">Your emotion journal</h2>

      {error && <p className="error">{error}</p>}

      <div className="entry-list-wrapper">
        <ul className="entry-list">
          {entries.map((entry, index) => {
            const key =
              entry._id ||
              entry.id ||
              `${entry.emotion}-${entry.createdAt || index}`;

            return (
              <li key={key} className="entry-item">
                <div className="entry-header">
                  <span className="entry-emotion">{entry.emotion}</span>
                  <span className="entry-date">
                    {entry.createdAt
                      ? new Date(entry.createdAt).toLocaleString()
                      : ""}
                  </span>
                </div>
                <p className="entry-note">{entry.note}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
