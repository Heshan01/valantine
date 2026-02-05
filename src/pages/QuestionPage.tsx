import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ValentineButton from '../components/Button/ValentineButton';
import AppLayout from '../components/AppLayout';

const NO_PHRASES = [
    "No",
    "Are you sure?",
    "Please think again",
    "මම පව් නැද්ද",
    "ආය හිතන්න",
    "ඔයාට දුක නැද්ද",
    "තව චුට්ටක් හිතන්න",
    "බබාට දුක හිතෙයි",
    "Please Please",
    "Don't do this to me",
    "මගේ හිත රිදෙනවා",
    "ඔයාට sure ද?",
    "ඇයි අනේ",
    "හිත වෙනස් කරන්නකෝ",
    "You are breaking my heart",
    "I will cry",
    "අඬන්නද මම",
    "PLZZZZZZ",
    "ඔයා මගේම විතරයි",
    "හරි හරි ඔන්න ඉවරයි"
];

const QuestionPage = () => {
    const navigate = useNavigate();
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);

    // Growth rate: Start at 1, grow aggressive
    const yesScale = 1 + noCount * 1.0;

    // Keep No button stable and readable, fixed size
    const noScale = 1;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const handleYesClick = () => {
        setYesPressed(true);
        setTimeout(() => {
            navigate('/love');
        }, 400); // Wait for transition
    };

    const getNoText = () => {
        if (noCount === 0) return "No";
        // Ensure we don't exceed array length if count goes high, though we hide at 20
        const index = noCount % NO_PHRASES.length;
        return NO_PHRASES[index];
    };

    return (
        <AppLayout>
            <div style={{
                textAlign: 'center',
                padding: '50px 30px',
                maxWidth: '90vw',
                width: '600px',
                zIndex: 5,
                opacity: yesPressed ? 0 : 1,
                transition: 'opacity 0.6s ease-out',

                // Premium Glassmorphism
                background: 'rgba(255, 255, 255, 0.55)',
                backdropFilter: 'blur(12px) saturate(160%)',
                WebkitBackdropFilter: 'blur(12px) saturate(160%)',
                borderRadius: '32px',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 20px 50px rgba(214, 0, 91, 0.15), 0 10px 20px rgba(0,0,0,0.03)',
                animation: 'pulse 6s infinite ease-in-out' // Very subtle breathing
            }}>
                {/* GIF above question optional, user didn't request but often nice. 
            Request said: Page 1: Center card with question text only. */}

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    fontWeight: 800,
                    color: '#d6005b', // Deeper premium pink
                    marginBottom: '40px',
                    lineHeight: 1.2,
                    textShadow: '0 4px 12px rgba(255, 79, 154, 0.2)',
                    fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(45deg, #ff4f9a, #d6005b)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Can you be my valantine?
                </h1>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap', // Allow wrapping if it gets too wide
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    width: '100%',
                    position: 'relative',
                    minHeight: '100px' // Space for growing button
                }}>
                    <ValentineButton
                        variant="yes"
                        scale={yesScale}
                        onClick={handleYesClick}
                        style={{
                            // Ensure z-index is higher so it covers No button if it gets huge
                            zIndex: noCount > 0 ? 10 : 1,
                        }}
                    >
                        Yes
                    </ValentineButton>

                    {noCount < 20 && (
                        <ValentineButton
                            variant="no"
                            scale={noScale}
                            onClick={handleNoClick}
                        >
                            {getNoText()}
                        </ValentineButton>
                    )}
                </div>
            </div>
        </AppLayout>
    );
};

export default QuestionPage;
