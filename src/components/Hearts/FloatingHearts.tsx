import { useEffect, useState } from 'react';
import '../../styles/animations.css';

interface Heart {
    id: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
    size: number;
    color?: string;
}

const FloatingHearts = () => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        // Generate richer set of hearts for background ambient effect
        const heartCount = 70; // Even more for "everywhere" feel
        const newHearts: Heart[] = [];
        const colors = ['#ffb7d2', '#ff85b3', '#ffd1e6', '#ff4f9a', '#ff1493', '#ff69b4'];

        for (let i = 0; i < heartCount; i++) {
            newHearts.push({
                id: i,
                left: Math.random() * 100, // random horizontal %
                top: Math.random() * 100,  // random vertical % (initial spread)
                duration: Math.random() * 15 + 10,
                delay: Math.random() * -20, // Negative delay so they start partly through the animation
                size: Math.random() * 20 + 8,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
        setHearts(newHearts);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        }}>
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="animate-float-up"
                    style={{
                        position: 'absolute',
                        left: `${heart.left}%`,
                        top: `${heart.top}%`,
                        fontSize: `${heart.size}px`,
                        animationDuration: `${heart.duration}s`,
                        animationDelay: `${heart.delay}s`,
                        // We use a custom property for the starting Y if needed, 
                        // but since they are absolute positioned, they will float from their top-position upwards.
                        // Wait, if they float UP, they will leave the screen faster if they start at top:10%.
                        // Better: keep them at bottom: -50px but vary the delay so it looks like they are everywhere?
                        // Or: use top and translate them.
                        // Actually, the easiest is to just vary the delay significantly or spawn them at different 'top' values and let them float towards a negative translateY.
                        opacity: Math.random() * 0.5 + 0.3,
                        color: heart.color || '#ffb7d2',
                        '--start-y': '120vh' // Reset to float from bottom for subsequent loops
                    } as any}
                >
                    💕
                </div>
            ))}
        </div>
    );
};

export default FloatingHearts;
