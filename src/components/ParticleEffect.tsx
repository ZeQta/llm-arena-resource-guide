
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  opacity: number;
  rotation: number;
  shape: "circle" | "square" | "triangle";
  blur: number;
};

export function ParticleEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [nextId, setNextId] = useState(0);

  // Create particles on click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Theme-consistent colors
      const colors = [
        "hsl(var(--primary))", 
        "hsl(var(--secondary))", 
        "hsl(var(--accent))",
        "hsl(217.2, 91.2%, 59.8%)", // Primary blue
        "hsl(250, 95%, 76%)",       // Secondary purple
      ];
      
      const shapes: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"];
      
      const newParticles = Array.from({ length: 12 }, (_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 3;
        const size = 4 + Math.random() * 8;
        return {
          id: nextId + i,
          x: e.clientX,
          y: e.clientY,
          size,
          color: colors[Math.floor(Math.random() * colors.length)],
          velocity: {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed - 1, // Initial upward bias
          },
          opacity: 1,
          rotation: Math.random() * 360,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          blur: Math.random() > 0.7 ? 3 : 0, // Some particles have blur effect
        };
      });

      setParticles((prev) => [...prev, ...newParticles]);
      setNextId(nextId + 12);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [nextId]);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const animationFrame = requestAnimationFrame(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.velocity.x,
            y: p.y + p.velocity.y,
            velocity: {
              x: p.velocity.x * 0.97, // More realistic friction
              y: p.velocity.y * 0.97 + 0.12, // More realistic gravity
            },
            opacity: p.opacity - 0.016, // Slower fade for longer visibility
            rotation: p.rotation + p.velocity.x * 2,
            size: p.size * 0.995, // Gradually shrink
          }))
          .filter((p) => p.opacity > 0)
      );
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [particles]);

  // Render the appropriate shape based on particle.shape
  const renderParticle = (particle: Particle) => {
    const baseStyles = {
      left: particle.x,
      top: particle.y,
      opacity: particle.opacity,
      transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
      filter: particle.blur ? `blur(${particle.blur}px)` : "none",
      transition: "opacity 150ms ease-out",
    };

    switch (particle.shape) {
      case "circle":
        return (
          <div
            className="absolute"
            style={{
              ...baseStyles,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderRadius: "50%",
              boxShadow: `0 0 ${particle.size/2}px ${particle.color}80`,
            }}
          />
        );
      case "square":
        return (
          <div
            className="absolute"
            style={{
              ...baseStyles,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderRadius: "2px",
              boxShadow: `0 0 ${particle.size/2}px ${particle.color}80`,
            }}
          />
        );
      case "triangle":
        return (
          <div
            className="absolute"
            style={{
              ...baseStyles,
              width: 0,
              height: 0,
              borderLeft: `${particle.size / 2}px solid transparent`,
              borderRight: `${particle.size / 2}px solid transparent`,
              borderBottom: `${particle.size}px solid ${particle.color}`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => renderParticle(particle))}
    </div>
  );
}
