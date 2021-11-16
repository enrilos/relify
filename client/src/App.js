import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Stories from './components/stories/Stories';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
    return (
        <section className="container-main">
            <Header />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/stories" element={<Stories />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>

            <Footer />
        </section>
    );
}

export default App;