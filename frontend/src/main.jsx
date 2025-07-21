
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Browse_mentor from "./pages/browse-mentor/Browse_mentor";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import SearchResult from "./pages/browse-mentor/components/SearchResult";
import SearchSection from "./pages/browse-mentor/components/SearchSection";
import ViewMentor from './pages/ViewMentor/ViewMentor'

// Learner Imports
import Dashboard from './pages/LearnerModule/Dashboard'

// Mentor Imports
import MentorLayout from "./pages/MentorModule/MentorLayout";
import MentorDashboard from "./pages/MentorModule/MentorDashboard/MentorDashboard";




//import contexts and providers
import AuthProvider from './context/auth.context'
import FavoriteMentors from "./pages/LearnerModule/components/FavoriteMentors";
import Settings from "./pages/LearnerModule/components/Settings";
import MySession from "./pages/LearnerModule/components/MySession";
import Overview from "./pages/LearnerModule/components/Overview";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/browse-mentor" element={<Browse_mentor />}>
          <Route path="all-mentors" element={<SearchResult />}></Route>
          <Route path="search-mentors" element={<SearchSection />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/view-mentor/:username" element={<ViewMentor />}></Route>

{/* mentee modeule */}
       <Route path="/profile/username" element={<Dashboard />}>
  <Route index element={<Overview />} />
  <Route path="my-session" element={<MySession />} />
  <Route path="my-favorite-mentor" element={<FavoriteMentors />} />
  <Route path="settings" element={<Settings />} />
</Route>



        {/* Mentor module */}
        <Route path="/mentor" element={<MentorLayout />} >
          <Route index element={<MentorDashboard />} />
          <Route path="/mentor/view-mentor" element={<ViewMentor />} />
        </Route>
        <Route path="*" element={<h2>404 - Page Not Found 😢</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
