import React from "react";

// inline svg icons
const BackIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" strokeWidth="2">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);
const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
  </svg>
);

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <button className="icon-btn"><BackIcon /></button>
        <div className="title">Magazines</div>
      </div>
      <div className="nav-right">
        <span className="categories">Categories</span>
        <button className="icon-btn"><SearchIcon /></button>
        <button className="icon-btn"><BookmarkIcon /></button>
      </div>
    </header>
  );
}
