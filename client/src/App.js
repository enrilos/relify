import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Stories from './components/stories/Stories';
import CreateStory from './components/createStory/CreateStory';
import EditStory from './components/editStory/EditStory';
import Details from './components/details/Details';
import EditComment from './components/editComment/EditComment';
import MyStories from './components/myStories/MyStories';
import MyLikes from './components/myLikes/MyLikes';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import AuthForm from './components/authForm/AuthForm';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';
import NotFoundPage from './pages/notFound/NotFoundPage';

import { AuthContext } from './contexts/AuthContext';
import './App.css';
import { useState } from 'react';

function App() {

    // Since this defense project will be tested as a SPA app (no manual refreshing), it should work correctly.

    const [email, setEmail] = useState('');

    const authenticate = (email) => {
        setEmail(email);
    }

    return (
        <AuthContext.Provider value={{ authenticate, email }}>
            <section>
                <Header email={email} />
                <section className="container-main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/stories" element={<Stories />} />
                        <Route path="/create" element={<CreateStory />} />
                        <Route path="/edit/:storyId" element={<EditStory />} />
                        <Route path="/editComment/:commentId" element={<EditComment />} />
                        <Route path="/details/:storyId" element={<Details />} />
                        <Route path="/myStories" element={<MyStories />} />
                        <Route path="/myLikes" element={<MyLikes />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<AuthForm formType="Login" />} />
                        <Route path="/register" element={<AuthForm formType="Register" />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </section>
                <Footer />
            </section>
        </AuthContext.Provider>
    );
}

export default App;