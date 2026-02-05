import { ReactNode } from 'react';
import FloatingHearts from './Hearts/FloatingHearts';
import InteractiveHearts from './Hearts/InteractiveHearts';

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center content vertically
            alignItems: 'center', // Center content horizontally
            padding: '20px',
            overflow: 'hidden' // Prevent scroll from growing buttons initially
        }}>
            {/* Background Hearts */}
            <FloatingHearts />

            {/* Interactive Heart Trails */}
            <InteractiveHearts />

            {/* Main Content Area */}
            <main style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '600px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {children}
            </main>

            {/* Fixed Footer */}
            <footer style={{
                position: 'fixed',
                bottom: '10px',
                left: '10px',
                zIndex: 100,
                fontSize: '12px',
                fontWeight: 600,
                color: '#ff4f9a',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                padding: '4px 8px',
                borderRadius: '12px',
                backdropFilter: 'blur(2px)'
            }}>
                created by Heshan
            </footer>
        </div>
    );
};

export default AppLayout;
