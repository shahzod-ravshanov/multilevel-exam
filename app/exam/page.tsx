"use client";

import { useState } from "react";

export default function ExamPage() {
  const [task11, setTask11] = useState("");
  const [task12, setTask12] = useState("");
  const [task2, setTask2] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/save-attempt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task11, task12, task2 }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert("Error: " + data.error);
      return;
    }

    alert("Saved! Attempt ID: " + data.id);
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Writing Mock 02</h1>

      <h2>Task 1.1</h2>
      <textarea
        value={task11}
        onChange={(e) => setTask11(e.target.value)}
        style={{ width: "100%", height: 150, marginBottom: 20 }}
        placeholder="Task 1.1 answer..."
      />

      <h2>Task 1.2</h2>
      <textarea
        value={task12}
        onChange={(e) => setTask12(e.target.value)}
        style={{ width: "100%", height: 200, marginBottom: 20 }}
        placeholder="Task 1.2 answer..."
      />

      <h2>Task 2</h2>
      <textarea
        value={task2}
        onChange={(e) => setTask2(e.target.value)}
        style={{ width: "100%", height: 250, marginBottom: 20 }}
        placeholder="Task 2 answer..."
      />

      <button onClick={handleSubmit} style={{ padding: 12, fontSize: 16 }}>
        Submit Writing
      </button>
    </main>
  );
}