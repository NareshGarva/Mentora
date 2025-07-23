
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
import Dashboard from './pages/ProfileModule/MenteeProfile/Dashboard'

// Mentor Imports
import MentorLayout from "./pages/MentorModule/MentorLayout";
import MentorDashboard from "./pages/MentorModule/MentorDashboard/MentorDashboard";

//import contexts and providers
import AuthProvider from './context/auth.context'
import FavouriteMentors from "./pages/ProfileModule/MenteeProfile/components/FavoriteMentors";
import Settings from "./pages/ProfileModule/components/Settings";
import MySession from "./pages/ProfileModule/MenteeProfile/components/MySession";
import Overview from "./pages/ProfileModule/components/Overview";
import SetupProfile from "./pages/SetupProfile/SetupProfile";
import PersonalInfo from "./pages/SetupProfile/Components/PersonalInfo";
import WorkExperience from "./pages/SetupProfile/Components/WorkExperience";
import EducationInfo from "./pages/SetupProfile/Components/EducationInfo";
import SetYourRate from "./pages/SetupProfile/Components/SetYourRate";
import WeeklyAvailability from "./pages/SetupProfile/Components/WeeklyAvailability";
import SocialLinks from "./pages/SetupProfile/Components/SocialLinks";
import Expertise from "./pages/SetupProfile/Components/Expertise";
import ViewMentor from './pages/ProfileModule/VIewProfile/ViewMentor'
import BookSession from "./pages/BookSession/BookSession";


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


          <Route path="/view-mentor/@:username" element={<ViewMentor />}></Route>

          <Route path="/book-session/:id" element={<BookSession />}></Route>

          {/* setup profile */}
          <Route path="/setup-profile" element={<SetupProfile />}>
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="work-experience" element={<WorkExperience />} />
            <Route path="education-info" element={<EducationInfo />} />
            <Route path="expertise-info" element={<Expertise />} />
            <Route path="social-link" element={<SocialLinks />} />
            <Route path="availability-info" element={<WeeklyAvailability />} />
            <Route path="rates-info" element={<SetYourRate />} />
          </Route>


          {/* Mentee module */}
          <Route path="/profile/username" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="my-session" element={<MySession />} />
            <Route path="my-favorite-mentor" element={<FavouriteMentors />} />
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

