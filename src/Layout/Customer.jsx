import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'
import Navbar from '../components/Common/Navbar'
import AboutPage from '../containers/AboutPage'
import Login from '../containers/Auth/Login'
import ContactPage from '../containers/ContactPage'
import HomePage from '../containers/HomePage'
import PostPage from '../containers/PostPage'
import ProductPage from '../containers/ProductPage'

function Customer() {
    return (
        <div className='app'>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="san-pham" element={<ProductPage />} />
                <Route path="lien-he" element={<ContactPage />} />
                <Route path="gioi-thieu" element={<AboutPage />} />
                <Route path="bai-viet" element={<PostPage />} />
                <Route path="dang-nhap" element={ !localStorage.getItem("jwt") ? <Login /> : <Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Customer
