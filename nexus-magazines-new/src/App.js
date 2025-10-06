import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Bookshelf from "./components/Bookshelf";
import OpenBook from "./components/OpenBook";
import "./App.css";

export default function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <section className="left">
          <h2 className="section-title">Magazines</h2>
          <div className="search-wrap">
            <input className="search" placeholder="Search" />
          </div>
          <Bookshelf selectedBook={selectedBook} onSelect={setSelectedBook} />
        </section>
        <section className="right">
          <OpenBook book={selectedBook} />
        </section>
      </div>
    </div>
  );
}
