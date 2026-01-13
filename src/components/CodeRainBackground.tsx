import { useEffect, useRef } from "react";

const codeSnippets = [
  "SELECT *", "FROM", "WHERE", "JOIN", "INSERT", "UPDATE",
  "def", "import", "class", "return", "async", "await",
  "<div>", "</div>", "const", "function", "export",
  "CREATE", "TABLE", "INDEX", "GROUP BY", "ORDER BY",
  "for", "while", "if", "else", "try", "catch",
  "python", "sql", "html", "css", "git", "api"
];

interface CodeDrop {
  x: number;
  y: number;
  speed: number;
  text: string;
  opacity: number;
  size: number;
}

const CodeRainBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<CodeDrop[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    // Initialize drops
    const dropCount = isMobile ? 15 : 30;
    dropsRef.current = Array.from({ length: dropCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: (Math.random() * 0.3 + 0.1) * (prefersReducedMotion ? 0.3 : 1),
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      opacity: Math.random() * 0.06 + 0.02,
      size: Math.random() * 8 + 10
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dropsRef.current.forEach((drop) => {
        ctx.font = `${drop.size}px 'Courier New', monospace`;
        ctx.fillStyle = `hsla(270, 60%, 70%, ${drop.opacity})`;
        ctx.fillText(drop.text, drop.x, drop.y);

        // Move drop
        drop.y += drop.speed;

        // Reset when off screen
        if (drop.y > canvas.height + 20) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
          drop.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CodeRainBackground;
