import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Stories from './components/stories/Stories';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
    return (
        <section className="container-main">
            <Header />

            <section className="container-main-content">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/stories" element={<Stories />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </section>

            <Footer />
        </section>
    );
}

export default App;