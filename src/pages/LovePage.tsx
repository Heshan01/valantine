import AppLayout from "../components/AppLayout";
import gifPlaceHolder from "../assets/mochicat-hug-kiss.gif";

const LovePage = () => {
    const name = "Your Love"; // Change this to your partner's name

    return (
        <AppLayout>
            <div
                style={{
                    textAlign: "center",
                    padding: "30px 20px",
                    maxWidth: "92vw",
                    width: "480px",
                    zIndex: 5,
                    transition: "all 0.6s ease-out",

                    // Glassmorphism
                    background: "rgba(255, 255, 255, 0.55)",
                    backdropFilter: "blur(12px) saturate(160%)",
                    WebkitBackdropFilter: "blur(12px) saturate(160%)",
                    borderRadius: "32px",
                    border: "1px solid rgba(255,255,255,0.8)",
                    boxShadow:
                        "0 20px 50px rgba(214,0,91,0.15), 0 10px 20px rgba(0,0,0,0.03)",
                    animation: "pulse 6s infinite ease-in-out",
                }}
            >
                <div
                    style={{
                        marginBottom: "15px",
                        position: "relative",
                    }}
                >
                    {/* Glow */}
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "120px",
                            height: "120px",
                            backgroundColor: "#ffb7d2",
                            filter: "blur(50px)",
                            opacity: 0.3,
                            zIndex: -1,
                        }}
                    />

                    <img
                        src={gifPlaceHolder}
                        alt="Mochicat Hug Kiss"
                        style={{
                            width: "100%",
                            maxWidth: "220px",
                            height: "auto",
                            borderRadius: "24px",
                            boxShadow:
                                "0 10px 30px rgba(255,79,154,0.2)",
                        }}
                        onError={(e) => {
                            e.currentTarget.style.display = "none";

                            if (e.currentTarget.nextSibling) {
                                e.currentTarget.nextSibling.style.display =
                                    "block";
                            }
                        }}
                    />

                    <div
                        style={{
                            display: "none",
                            fontSize: "60px",
                            filter:
                                "drop-shadow(0 0 15px rgba(255,79,154,0.4))",
                        }}
                    >
                        🐱💋🐱
                    </div>
                </div>

                <h1
                    style={{
                        fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                        fontWeight: "800",
                        marginBottom: "12px",
                        lineHeight: 1.2,
                        fontFamily: "'Segoe UI', sans-serif",
                        letterSpacing: "-0.02em",
                        background:
                            "linear-gradient(45deg,#ff4f9a,#d6005b)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow:
                            "0 4px 12px rgba(255,79,154,0.1)",
                    }}
                >
                    Congratulations, You Said Yes! ❤️
                </h1>

                <p
                    style={{
                        fontSize: "clamp(0.9rem,2.2vw,1.15rem)",
                        lineHeight: "1.7",
                        color: "#631d36",
                        fontWeight: 600,
                        whiteSpace: "pre-line",
                        textAlign: "center",
                        margin: "0 auto",
                    }}
                >
                    {`Dear ${name},

Thank you for making this day one of the happiest moments of my life.

Every moment with you feels special, and I promise to always love, respect, and support you through every chapter of our journey.

Happy Valentine's Day ❤️

Love You Forever 💕`}
                </p>

                <p
                    style={{
                        marginTop: "20px",
                        fontSize: "0.9rem",
                        color: "#ff4f9a",
                        fontStyle: "italic",
                    }}
                >
                    ❤️ Forever & Always ❤️
                </p>
            </div>
        </AppLayout>
    );
};

export default LovePage;
