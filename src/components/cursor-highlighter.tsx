"use client";

import { useState, useEffect } from "react";

const CursorHighlighter = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(4, 102, 200, 0.2), transparent 450px)`,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default CursorHighlighter;
