import { useEffect, useRef, useState } from 'react';

export default function CustomCursor({ mousePos }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const ringPos = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const animate = () => {
      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      // Lag ring behind dot
      ringPos.current.x += (mx - ringPos.current.x) * 0.12;
      ringPos.current.y += (my - ringPos.current.y) * 0.12;

      if (dot) {
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
      }
      if (ring) {
        ring.style.left = ringPos.current.x + 'px';
        ring.style.top = ringPos.current.y + 'px';
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cancelAnimationFrame(animRef.current);
    };
  }, [mousePos]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${isHovering ? 'expanded' : ''}`} />
    </>
  );
}