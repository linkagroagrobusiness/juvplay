import React from "react";


export default function RadioBanner() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        Teu browser não suporta vídeo em HTML5.
      </video>


     
    </div>
  );
}

