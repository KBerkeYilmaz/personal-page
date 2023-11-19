import React, { useState, useEffect } from 'react';

function MouseTracker() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Function to update the mouse position
    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        // Add mouse move event listener when the component mounts
        window.addEventListener('mousemove', handleMouseMove);

        // Remove event listener when the component unmounts
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <p>Mouse X position: {mousePosition.x}</p>
            <p>Mouse Y position: {mousePosition.y}</p>
        </div>
    );
}

export default MouseTracker;
