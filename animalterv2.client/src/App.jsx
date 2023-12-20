import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExplorerPage from './pages/ExplorerPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'
import AnimalDetailsPage from './pages/AnimalDetailsPage'
import AnimalType from './pages/AnimalType';
import AdminPanel from './pages/AdminPanel';
import SearchResult from './pages/SearchResult';
import UserProfile from './pages/UserProfile';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FAQPage from './pages/FAQPage';

function App() {

    //responsive design
    //işlemlerden sonra popup ile bilgi verilmesi (toastify kullanılabilir)
    //middleware için ne yapılmalı

    return (
        <div>
            <Header/>

            <Routes>
                
                <Route path="/" element={<HomePage/>} />
                <Route path="/explorer" element={<ExplorerPage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/animal/:animaltype/:id" element={<AnimalDetailsPage/>} />
                <Route path="/animal/:animaltype" element={<AnimalType/>} />
                <Route path="/admin/:id" element={<AdminPanel/>} />
                <Route path="/search/:filter" element={<SearchResult/>} />
                <Route path="/user/:id" element={<UserProfile/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />   
                <Route path="/faq" element={<FAQPage/>} />

            </Routes>

            <Footer/>
           
        </div>
    );
    
}

export default App;