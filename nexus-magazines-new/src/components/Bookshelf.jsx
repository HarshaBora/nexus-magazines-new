// // import React from "react";
// // import MAGAZINES from "../data/magazines";


// // export default function Bookshelf({ selectedBook, onSelect }) {
// //   return (
// //     <section className="left">
// //       <div className="bookshelf">
// //         {MAGAZINES.map((b) => (
// //           <div
// //             key={b.id}
// //             className={`book ${selectedBook?.id === b.id ? "selected" : ""}`}
// //             onClick={() => onSelect(b)}
// //           >
// //             <span className="book-title">{b.title}</span>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }



// import React from "react";
// import MAGAZINES from "../data/magazines";

// export default function Bookshelf({ selectedBook, onSelect }) {
//   return (
//     <section className="left">
//       <div className="bookshelf">
//         {MAGAZINES.map((b) => (
//           <div
//             key={b.id}
//             className={`book ${selectedBook?.id === b.id ? "selected" : ""}`}
//             onClick={() => onSelect(b)}
//             style={{
//               backgroundImage: `url(${b.cover})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center"
//             }}
//           >
//             <div className="book-overlay">
//               <span className="book-title">{b.title}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import MAGAZINES from "../data/magazines";

export default function Bookshelf({ selectedBook, onSelect }) {
  // Split books into rows of 3
  const rows = [];
  for (let i = 0; i < MAGAZINES.length; i += 3) {
    rows.push(MAGAZINES.slice(i, i + 3));
  }

  return (
    <div className="bookshelf">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          <div className="books-row">
            {row.map((b) => (
              <div
                key={b.id}
                className={`book ${b.className || ""} ${
                  selectedBook?.id === b.id ? "selected" : ""
                }`}
                onClick={() => onSelect(b)}
              >
                <span className="book-title">{b.title}</span>
              </div>
            ))}
          </div>
          <div className="shelf"></div>
        </div>
      ))}
    </div>
  );
}
