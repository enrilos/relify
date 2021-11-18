import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Stories from './components/stories/Stories';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
    return (
        <section className="container-main">
            <Header />

            <section className="container-main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stories" element={<Stories />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </section>

            <Footer />
        </section>
    );
}

export default App;