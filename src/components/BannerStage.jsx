import React, { useEffect, useRef, useState } from "react";
import RN_EKOTI_Edit_06 from '../assets/banners/RN_EKOTI_Edit_06.mp4';

export default function RadioBanner() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 } // Só considera visível quando 50% estiver visível
    );

    const container = containerRef.current; // Evita problemas no cleanup
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (isVisible) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="banner-video">
      <video
        ref={videoRef}
        loop
        playsInline
        preload="auto"
        className="w-100"
      >
        <source src={RN_EKOTI_Edit_06} type="video/mp4" />
        Teu browser não suporta vídeo em HTML5.
      </video>
    </div>
  );
}
