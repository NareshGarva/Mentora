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
import Register from './pages/register/Register'
import SearchResult from './pages/browse-mentor/components/SearchResult'
import SearchSection from './pages/browse-mentor/components/SearchSection'

// Learner Imports
import Sessions from './pages/LearnerModule/Sessions'
import LearnerSidebar from './pages/LearnerModule/LearnerSidebar'

const sampleDataForSessions = {
  heading: 'Resume Building',
  mentor_name: "Prof. John Doe"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
<Header/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about-us' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/browse-mentor' element={<Browse_mentor/>}>
  <Route path='all-mentors' element={<SearchResult/>}></Route>
  <Route path='search-mentors' element={<SearchSection/>}></Route>
  </Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  {/* Learner module */}
  <Route path='/learner/sessions' element={
    <div className='sidebar-and-contents-container flex'>
      <LearnerSidebar />
      <Sessions {...sampleDataForSessions} />
    </div>
  }></Route>
  <Route path="*" element={<h2>404 - Page Not Found 😢</h2>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  </StrictMode>,
)
