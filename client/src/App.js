import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Stories from './components/stories/Stories';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
    return (
        <section className="container-main">
            <Header />

            <Routes>
                {/* The intro page should only render 3 latest stories. Instead of making a new component only for intro stories, consider how to circumvent that smartly. */}
                {/* and reuse the same component both in the intro (3 latest stories) and Stories page (all stories) */}
                <Route exact path="/" element={<Stories />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>

            <Footer />
        </section>
    );
}

export default App;