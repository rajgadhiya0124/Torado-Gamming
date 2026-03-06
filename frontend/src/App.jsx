import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import { ToastContainer } from 'react-toastify'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import BlogCategory from './pages/BlogCategory'
import BlogTag from './pages/BlogTag'
import FaqPage from './pages/FaqPage'
import PartnerPage from './pages/PartnerPage'
import GalleryPage from './pages/GalleryPage'
import TeamPage from './pages/TeamPage'
import TeamDetails from './pages/TeamDetails'
import ScrolltoTop from './components/ScrolltoTop'

function App() {

  return (
    <>
      <ScrolltoTop />
      <ToastContainer 
        position='top-right' autoClose={3000} hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    
      <Navbar />

      <Routes >
        <Route path='/' element={<HomePage />}/>
        <Route path='/contactus' element={<ContactPage />}/>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/faqs' element= {<FaqPage />} />
        <Route path='/partner' element= {<PartnerPage />} />
        <Route path='/gallery' element= {<GalleryPage />} />

        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/details/:id' element={<BlogDetailsPage />} />
        <Route path='/blog/category/:id' element={<BlogCategory />} />
        <Route path='/blog/tag/:id' element={<BlogTag />} />

        <Route path='/team' element={<TeamPage />} />
        <Route path='/teamdetails/:id' element={<TeamDetails />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
