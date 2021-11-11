import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';

function App() {
    return (
        <section className="container-main">
            <Header />

            <Routes>
                {/* <Route exact path="/" component={ } />
                <Route exact path="/posts" component={ } />
                <Route exact path="/about" component={ } />
                <Route exact path="/contact" component={ } />
                <Route exact path="/login" component={ } />
                <Route exact path="/register" component={ } /> */}
            </Routes>

            <main>
                <p>Welcome, this is main.</p>
            </main>
            <footer className="container-footer">
                <p>&copy; relify is a property of github/enrilos. All rights reserved.</p>
            </footer>
        </section>
    );
}

export default App;