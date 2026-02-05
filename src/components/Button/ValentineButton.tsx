import { ReactNode, ButtonHTMLAttributes } from 'react';
import '../../styles/animations.css';

interface ValentineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'yes' | 'no';
    scale?: number;
    width?: string;
}

const ValentineButton = ({ children, variant = 'yes', scale = 1, style, ...props }: ValentineButtonProps) => {
    const isYes = variant === 'yes';

    // Base values
    const baseFontSize = 18;
    const basePaddingVertical = 12;
    const basePaddingHorizontal = 24;

    return (
        <button
            style={{
                background: isYes
                    ? 'linear-gradient(135deg, #ff4f9a 0%, #d6005b 100%)'
                    : 'rgba(255, 255, 255, 0.8)',
                color: isYes ? '#ffffff' : '#d6005b',
                // Scale font size and padding to ensure layout flows correctly
                fontSize: `${baseFontSize * scale}px`,
                padding: `${basePaddingVertical * scale}px ${basePaddingHorizontal * scale}px`,
                fontWeight: '700',
                borderRadius: '50px',
                border: isYes ? 'none' : '2px solid rgba(214, 0, 91, 0.3)',
                boxShadow: isYes
                    ? '0 10px 25px rgba(255, 79, 154, 0.5), inset 0 2px 2px rgba(255, 255, 255, 0.3)'
                    : '0 4px 10px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                userSelect: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                minWidth: 'min-content',
                backdropFilter: isYes ? 'none' : 'blur(4px)',
                width: props.width ? props.width : 'auto', // Allow prop override if needed
                ...style
            }}
            className={isYes ? 'animate-pulse' : ''}
            {...props}
        >
            {children}
        </button>
    );
};

export default ValentineButton;
