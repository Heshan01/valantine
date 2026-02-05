import { useEffect, useRef, useCallback } from 'react';
import '../../styles/animations.css';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    life: number; // 1.0 to 0.0
    color: string;
}

const InteractiveHearts = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const requestRef = useRef<number>();

    const colors = ['#ff4f9a', '#ff85b3', '#ffd1e6', '#ff0055'];

    const createHeart = (x: number, y: number) => {
        const size = Math.random() * 15 + 5;
        const speedX = (Math.random() - 0.5) * 2;
        const speedY = -Math.random() * 2 - 1; // Always float up
        const color = colors[Math.floor(Math.random() * colors.length)];

        particles.current.push({
            x,
            y,
            size,
            speedX,
            speedY,
            life: 1.0,
            color
        });
    };

    const drawHeart = (ctx: CanvasRenderingContext2D, p: Particle) => {
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.font = `${p.size}px serif`;
        ctx.fillText('❤️', p.x, p.y);
        ctx.restore();
    };

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.current.length - 1; i >= 0; i--) {
            const p = particles.current[i];
            p.x += p.speedX;
            p.y += p.speedY;
            p.life -= 0.015; // Fade out speed

            if (p.life <= 0) {
                particles.current.splice(i, 1);
            } else {
                drawHeart(ctx, p);
            }
        }

        requestRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Resize handling
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        // Mouse interaction
        const handleMouseMove = (e: MouseEvent) => {
            // Throttle creation slightly by chance
            if (Math.random() > 0.8) return;
            createHeart(e.clientX, e.clientY);
        };

        // Touch interaction
        const handleTouchMove = (e: TouchEvent) => {
            for (let i = 0; i < e.touches.length; i++) {
                if (Math.random() > 0.8) continue;
                const touch = e.touches[i];
                createHeart(touch.clientX, touch.clientY);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchstart', handleTouchMove);

        // Start loop
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [animate]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 10
            }}
        />
    );
};

export default InteractiveHearts;
