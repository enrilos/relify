import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Stories from './components/stories/Stories';
import CreateStory from './components/createStory/CreateStory';
import EditStory from './components/editStory/EditStory';
import Details from './components/details/Details';
import MyStories from './components/myStories/MyStories';
import AuthForm from './components/authForm/AuthForm';
import Logout from './components/logout/Logout';
import Footer from './components/footer/Footer';

import './App.css';

// Route guarding?

function App() {
    return (
        <section>
            <Header />
            <section className="container-main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stories" element={<Stories />} />
                    <Route path="/create" element={<CreateStory />} />
                    <Route path="/edit/:storyId" element={<EditStory />} />
                    <Route path="/details/:storyId" element={<Details />} />
                    <Route path="/myStories" element={<MyStories />} />
                    <Route path="/login" element={<AuthForm formType="Login" />} />
                    <Route path="/register" element={<AuthForm formType="Register" />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </section>
            <Footer />
        </section>
    );
}

export default App;