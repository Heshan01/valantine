import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionPage from './pages/QuestionPage';
import LovePage from './pages/LovePage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<QuestionPage />} />
                <Route path="/love" element={<LovePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
