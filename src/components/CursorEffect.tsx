
import { useEffect, useState } from "react";

export function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerDown = () => setIsPointerDown(true);
    const handlePointerUp = () => setIsPointerDown(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    const trailInterval = setInterval(() => {
      setTrails((prev) => {
        // Add new position to the start of the array
        const newTrails = [
          { x: position.x, y: position.y, opacity: 1 },
          ...prev.map((trail) => ({ ...trail, opacity: trail.opacity - 0.1 })),
        ].filter((trail) => trail.opacity > 0);
        
        // Limit the number of trails
        return newTrails.slice(0, 10);
      });
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      clearInterval(trailInterval);
    };
  }, [position]);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointerDown ? 0.8 : 1})`,
        }}
      >
        <div className="w-8 h-8 bg-white rounded-full opacity-30 animate-pulse"></div>
      </div>

      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-40 w-5 h-5 rounded-full bg-primary"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: trail.opacity,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  );
}
