const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

export async function fetchEntries() {
  const res = await fetch(
    `${API_BASE_URL}/api/v1/emotions/get-emotions`,
    {
      method: "GET", // or "POST" if your route is still POST
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }
  );

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to fetch entries");
  }

  // Your ApiResponse: { statusCode, data: { entries: [...] }, message }
  if (json?.data && Array.isArray(json.data.entries)) {
    return json.data.entries;
  }

  // Fallback if you ever return plain array
  if (Array.isArray(json)) {
    return json;
  }

  return [];
}

export async function createEntry({ emotion, note }) {
  const res = await fetch(
    `${API_BASE_URL}/api/v1/emotions/emotion`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emotion, note }),
    }
  );

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json?.message || "Failed to create entry");
  }

  // Your ApiResponse: { statusCode, data: <entry>, message }
  if (json?.data) {
    return json.data; // this should have _id, emotion, note, createdAt
  }

  // Fallback
  return json;
}
