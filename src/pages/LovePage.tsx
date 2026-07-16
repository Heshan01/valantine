import AppLayout from '../components/AppLayout';
import gifPlaceHolder from '../assets/mochicat-hug-kiss.gif';

const LovePage = () => {
    return (
        <AppLayout>
            <div style={{
                textAlign: 'center',
                padding: '30px 20px', // Reduced vertical padding
                maxWidth: '92vw',
                width: '480px',
                zIndex: 5,
                transition: 'all 0.6s ease-out',

                // Premium Glassmorphism
                background: 'rgba(255, 255, 255, 0.55)',
                backdropFilter: 'blur(12px) saturate(160%)',
                WebkitBackdropFilter: 'blur(12px) saturate(160%)',
                borderRadius: '32px',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 20px 50px rgba(214, 0, 91, 0.15), 0 10px 20px rgba(0,0,0,0.03)',
                animation: 'pulse 6s infinite ease-in-out'
            }}>
                <div style={{
                    marginBottom: '15px', // Reduced margin
                    position: 'relative'
                }}>
                    {/* Soft glow behind asset */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120px',
                        height: '120px',
                        backgroundColor: '#ffb7d2',
                        filter: 'blur(50px)',
                        opacity: 0.3,
                        zIndex: -1
                    }} />

                    <img
                        src={gifPlaceHolder}
                        alt="mochicat kiss"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '220px', // Slightly smaller image
                            borderRadius: '24px',
                            boxShadow: '0 10px 30px rgba(255, 79, 154, 0.2)'
                        }}
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.setAttribute('style', 'display: block; font-size: 60px; filter: drop-shadow(0 0 15px rgba(255, 79, 154, 0.4));');
                        }}
                    />
                    <div style={{ display: 'none' }}>🐱💋🐱</div>
                </div>

                <h1 style={{
                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', // Reduced font size
                    fontWeight: 800,
                    marginBottom: '12px', // Reduced margin
                    lineHeight: 1.2,
                    fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(45deg, #ff4f9a, #d6005b)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 4px 12px rgba(255, 79, 154, 0.1)'
                }}>
                    Congratulations you said yes...
                </h1>

                <p style={{
                    fontSize: 'clamp(0.9rem, 2.2vw, 1.15rem)', // Slightly smaller font
                    lineHeight: '1.6',
                    color: '#631d36',
                    fontWeight: 600,
                    whiteSpace: 'pre-line',
                    padding: '0 5px',
                    textAlign: 'center',
                    margin: '0 auto',
                    maxWidth: '100%'
                }}>
                    Dear <name></name>,{"\n"}
                    type any msg here.
                    {"\n"}.............{"\n"}
                    Happy Valentine’s Day ❤️{"\n"}{"\n"}
                    <span style={{ fontSize: '0.8rem', opacity: 0.8, fontWeight: 400 }}>
                        ..................... මේවිදිහට හොදයිනි... hee heeeeeeeeeeee😁😁
                    </span>{"\n"}
                    <span style={{ color: '#ff4f9a', display: 'block', marginTop: '8px' }}>

                    </span>
                </p>
            </div>
        </AppLayout>
    );
};

export default LovePage;
