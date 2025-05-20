
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
};

export function ParticleEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [nextId, setNextId] = useState(0);

  // Create particles on click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#6366f1", "#14b8a6"];
      const newParticles = Array.from({ length: 15 }, (_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 4;
        return {
          id: nextId + i,
          x: e.clientX,
          y: e.clientY,
          size: 5 + Math.random() * 10,
          color: colors[Math.floor(Math.random() * colors.length)],
          velocity: {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed,
          },
          opacity: 1,
          rotation: Math.random() * 360,
        };
      });

      setParticles((prev) => [...prev, ...newParticles]);
      setNextId(nextId + 15);
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
              x: p.velocity.x * 0.98,
              y: p.velocity.y * 0.98 + 0.1, // Add gravity
            },
            opacity: p.opacity - 0.02,
            rotation: p.rotation + p.velocity.x * 2,
          }))
          .filter((p) => p.opacity > 0)
      );
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [particles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? "50%" : "20%",
          }}
        />
      ))}
    </div>
  );
}
