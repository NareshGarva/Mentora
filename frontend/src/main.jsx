import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Browse_mentor from './pages/Browse_mentor'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'



createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about-us' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/browse-mentor' element={<Browse_mentor/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </StrictMode>,
)
