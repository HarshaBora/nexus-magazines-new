import React from "react";

export default function OpenBook({ book }) {
  if (!book) return <div className="placeholder">Click a book to open it →</div>;

  return (
    <div className="open-book">
      <div className="page left">
        <h2>{book.title}</h2>
        <div className="line l"></div>
        <div className="line m"></div>
        <div className="line s"></div>
        <div className="line l"></div>
        <div className="line m"></div>
      </div>
      <div className="page right">
        <div className="line l"></div>
        <div className="line l"></div>
        <div className="line m"></div>
        <div className="line s"></div>
        <div className="line l"></div>
      </div>
    </div>
  );
}
