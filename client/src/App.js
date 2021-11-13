import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Stories from './components/stories/Stories';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
    return (
        <section className="container-main">
            <Header />

            <Routes>
                <Route exact path="/" element={<Stories/>} />
            </Routes>

            <Footer />
        </section>
    );
}

export default App;