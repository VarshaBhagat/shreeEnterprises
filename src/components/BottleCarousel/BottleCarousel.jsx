import { useState, useRef } from "react";
import "./BottleCarousel.scss";

export default function BottleCarousel({bottles}) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const dragging = useRef(false);

  const prev = () => {
    setIndex((i) => (i === 0 ? bottles.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === bottles.length - 1 ? 0 : i + 1));
  };

  /* TOUCH */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 60) next();
    if (diff < -60) prev();
  };

  /* MOUSE */
  const onMouseDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX;
  };

  const onMouseUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;

    const diff = startX.current - e.clientX;
    if (diff > 60) next();
    if (diff < -60) prev();
  };

  return (
    <div
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <button className="nav left" onClick={prev}>❮</button>
      <div className="slide-content">
        <div className="slide">
          {bottles[index].type === "image" ? (
            <img
              src={bottles[index].src}
              alt={bottles[index].alt}
              draggable="false"
            />
          ) : (
            <video
              src={bottles[index].src}
              controls
              playsInline
              muted
            />
          )}
        </div>

        <p>{bottles[index].name}</p>
      </div>
      <button className="nav right" onClick={next}>❯</button>
    </div>
  );
}
