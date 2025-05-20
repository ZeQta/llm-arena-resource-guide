
import { useEffect, useState } from "react";

export function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; opacity: number; scale: number }[]>([]);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerDown = () => setIsPointerDown(true);
    const handlePointerUp = () => setIsPointerDown(false);

    // Track when user is hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.hasAttribute('role') && target.getAttribute('role') === 'button' ||
          target.closest('button') ||
          target.closest('a')) {
        setIsHoveringLink(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (!relatedTarget || 
          (relatedTarget.tagName !== 'A' && 
           relatedTarget.tagName !== 'BUTTON' && 
           (!relatedTarget.hasAttribute('role') || relatedTarget.getAttribute('role') !== 'button') &&
           !relatedTarget.closest('button') &&
           !relatedTarget.closest('a'))) {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    const trailInterval = setInterval(() => {
      setTrails((prev) => {
        // Add new position to the start of the array
        const newTrails = [
          { x: position.x, y: position.y, opacity: 1, scale: isPointerDown ? 0.7 : 1 },
          ...prev.map((trail) => ({ 
            ...trail, 
            opacity: trail.opacity - 0.08, // Faster fade out
            scale: trail.scale * 0.97 // Gradually shrink
          })),
        ].filter((trail) => trail.opacity > 0);
        
        // Limit the number of trails for performance
        return newTrails.slice(0, 8);
      });
    }, 30); // More frequent updates for smoother animation

    // Add class to HTML to hide default cursor
    document.documentElement.classList.add("using-custom-cursor");
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      clearInterval(trailInterval);
      document.documentElement.classList.remove("using-custom-cursor");
    };
  }, [position, isPointerDown]);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointerDown ? 0.8 : isHoveringLink ? 1.5 : 1})`,
        }}
      >
        <div 
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm ${
            isHoveringLink 
              ? "bg-primary/60 ring-2 ring-primary/30 scale-110" 
              : "bg-white/20 mix-blend-difference"
          }`}
        >
          {isHoveringLink && (
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          )}
        </div>
      </div>

      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-40 rounded-full bg-gradient-to-r from-primary/80 to-accent/80"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: trail.opacity,
            width: `${20 * trail.scale}px`,
            height: `${20 * trail.scale}px`,
            transform: "translate(-50%, -50%)",
            filter: "blur(2px)",
            transition: "opacity 150ms ease-out",
          }}
        />
      ))}
    </>
  );
}
