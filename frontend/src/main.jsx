import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Browse_mentor from './pages/browse-mentor/Browse_mentor'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'



createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about-us' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/browse-mentor' element={<Browse_mentor/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </StrictMode>,
)
