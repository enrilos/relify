import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Stories from './components/stories/Stories';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
    return (
        <section className="container-main">
            <Routes>
                {/* <Route exact path="/" component={ } />
                <Route exact path="/posts" component={ } />
                <Route exact path="/about" component={ } />
                <Route exact path="/contact" component={ } />
                <Route exact path="/login" component={ } />
                <Route exact path="/register" component={ } /> */}
            </Routes>

            <Header />
            
            <Stories /> {/* render latest 3 stories below intro container*/}
            <Footer />
        </section>
    );
}

export default App;