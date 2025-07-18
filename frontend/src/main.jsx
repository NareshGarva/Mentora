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

// Learner Imports
import LearnerLayout from "./pages/LearnerModule/LearnerLayout"
import Sessions from "./pages/LearnerModule/Sessions";
import LearnerSidebar from "./pages/LearnerModule/LearnerSidebar";
import { Heading } from "lucide-react";
import LearnerDashboard from "./pages/LearnerModule/LearnerDashboard";
import ViewMentor from "./pages/LearnerModule/ViewMentor/ViewMentor";
import LearnerProfile from "./pages/LearnerModule/Profile/LearnerProfile";

// Mentor Imports
import MentorDashboard from "./pages/MentorModule/MentorDashboard";
import MentorAvailability from "./pages/LearnerModule/ViewMentor/components/MentorAvailability";

const sampleDataForSessions = {
  heading: "Resume Building",
  mentor_name: "Prof. John Doe",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
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
        <Route path="*" element={<h2>404 - Page Not Found 😢</h2>} />
        {/* Learner module */}
        <Route path="/learner" element={<LearnerLayout />} >
          <Route index element={<LearnerDashboard />} />
          <Route path="/learner/sessions" element={<Sessions {...sampleDataForSessions} />} />
          <Route path="/learner/profile" element={<LearnerProfile />} />
          <Route path="/learner/view-mentor" element={<ViewMentor />} />
        </Route>

        {/* Mentor module */}
        <Route path="/mentor/dashboard" element={<MentorDashboard />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
