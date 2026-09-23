"use client";

import { useState } from "react";
import "@/app/book.css";

export default function Book() {
  const [open, setOpen] = useState(false);

  return (
    <div className="book-container">
      <div
        className={`book ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="page page-left">
          <h2>Food Memories</h2>
          <p>A collection of memories, recipes and stories.</p>
        </div>

        <div className="page page-right">
          <h2>Chapter 1</h2>
          <p>Every dish has a story...</p>
        </div>

        <div className="cover">
          <h1>Food<br />Memory</h1>
          <p>Archive</p>
        </div>
      </div>
    </div>
  );
}