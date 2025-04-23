import React from "react";

const menuItems = [
  "NOTÍCIAS",
  "ENTREVISTAS",
  "DOCUMENTÁRIOS",
  "RADIONOVELA",
  "SÉRIES",
  "SHOWS"
];

export default function CircularHeader() {
  return (
    <div className="circle-container">
      {menuItems.map((item, index) => {
        const angle = (360 / menuItems.length) * index;
        return (
          <div
            key={index}
            className="circle-item"
            style={{
              transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
