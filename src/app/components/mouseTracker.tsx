import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const backgroundStyle = {
    backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        background:
          "radial-gradient(circle at center, rgba(255,255,255,0.3) 20%, transparent 20%)",
        ...backgroundStyle,
      }}
    >
      {/* Your content here */}
    </div>
  );
}

export default MouseTracker;
