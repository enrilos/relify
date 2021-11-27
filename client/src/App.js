import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Stories from './components/stories/Stories';
import CreateStory from './components/createStory/CreateStory';
import EditStory from './components/editStory/EditStory';
import Details from './components/details/Details';
import MyStories from './components/myStories/MyStories';
import MyLikes from './components/myLikes/MyLikes';
import AuthForm from './components/authForm/AuthForm';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';

import './App.css';
import { useState } from 'react';

// Route guarding?

function App() {

    // NOTE:
    // Using both server.js (with localStorage) and a local state in this component for storing email.
    // Local email state was the adequate solution (in this case) specifically for the dynamic change in the auth header render.
    // Thanks to rerendering functionality by changing the state.
    // It also means that refreshing the page would result in the local state's (App.js) email to be reset (will equal header guest menu) but not the data in the localStorage.
    // However, since this defense project will be tested as a SPA app (no manual refreshing), it should work correctly.

    // Apparently, only email property is required in order for the header to render dynamically.
    // Other required data is stored in localstorage.

    const [email, setEmail] = useState('');

    const getEmail = (email) => {
        setEmail(email);
    }

    return (
        <section>
            <Header email={email} />
            <section className="container-main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stories" element={<Stories />} />
                    <Route path="/create" element={<CreateStory />} />
                    <Route path="/edit/:storyId" element={<EditStory />} />
                    <Route path="/details/:storyId" element={<Details />} />
                    <Route path="/myStories" element={<MyStories />} />
                    <Route path="/myLikes" element={<MyLikes />} />
                    <Route path="/login" element={<AuthForm formType="Login" sendEmail={getEmail} />} />
                    <Route path="/register" element={<AuthForm formType="Register" sendEmail={getEmail} />} />
                    <Route path="/logout" element={<Logout sendEmail={getEmail} />} />
                    {/* Add NotFound page */}
                </Routes>
            </section>
            <Footer />
        </section>
    );
}

export default App;