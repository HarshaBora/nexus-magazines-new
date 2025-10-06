import React from "react";

export default function BookCard({ title, color, onClick }) {
  return (
    <div
      className="book-card"
      style={{ boxShadow: `0 0 20px ${color}`, borderColor: color }}
      onClick={onClick}
    >
      <h3>{title}</h3>
    </div>
  );
}
