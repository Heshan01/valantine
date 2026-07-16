import AppLayout from "../components/AppLayout";
import gifPlaceHolder from "../assets/mochicat-hug-kiss.gif";

const LovePage = () => {
    const name = "Your Love"; // Change this

    return (
        <AppLayout>
            <div
                style={{
                    textAlign: "center",
                    padding: "30px 20px",
                    maxWidth: "92vw",
                    width: "480px",
                    zIndex: 5,

                    background: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(12px) saturate(160%)",
                    WebkitBackdropFilter: "blur(12px) saturate(160%)",

                    borderRadius: "32px",
                    border: "1px solid rgba(255,255,255,0.8)",

                    boxShadow:
                        "0 20px 50px rgba(214,0,91,.15),0 10px 20px rgba(0,0,0,.03)",
                }}
            >
                <div
                    style={{
                        marginBottom: "15px",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                            width: "120px",
                            height: "120px",
                            background: "#ffb7d2",
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
                            borderRadius: "24px",
                            boxShadow:
                                "0 10px 30px rgba(255,79,154,.2)",
                        }}
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                </div>

                <h1
                    style={{
                        fontSize: "clamp(1.8rem,5vw,2.5rem)",
                        fontWeight: 800,
                        marginBottom: "12px",
                        lineHeight: 1.2,

                        background:
                            "linear-gradient(45deg,#ff4f9a,#d6005b)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Congratulations, You Said Yes! ❤️
                </h1>

                <p
                    style={{
                        fontSize: "1rem",
                        lineHeight: 1.8,
                        color: "#631d36",
                        fontWeight: 600,
                        whiteSpace: "pre-line",
                    }}
                >
                    {`Dear ${name},

Thank you for saying YES. ❤️

You are one of the most beautiful things that has ever happened in my life.

Every smile, every laugh, and every moment with you makes my world brighter.

I promise to always care for you, respect you, support you, and love you with all my heart.

Happy Valentine's Day ❤️

Forever Yours 💕`}
                </p>

                <div
                    style={{
                        marginTop: "20px",
                        fontSize: "1.5rem",
                    }}
                >
                    ❤️ 🌹 💖 🥰
                </div>
            </div>
        </AppLayout>
    );
};

export default LovePage;
