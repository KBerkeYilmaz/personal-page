import React, { useEffect } from "react";

function MouseTracker() {
  const handleMouseMove = (event: MouseEvent) => {
    document.documentElement.style.setProperty("--mouse-x", event.clientX + "px");
    document.documentElement.style.setProperty("--mouse-y", event.clientY + "px");
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="track-pad"
      style={{
        zIndex: -10,
        position: "absolute",
        width: "100vw",
        height: "100vh"
      }}
    ></div>
  );
}

export default MouseTracker;
