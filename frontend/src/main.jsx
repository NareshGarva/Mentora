
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
import Dashboard from './pages/ProfileModule/Profile/Dashboard'


//import contexts and providers
import {AuthProvider} from './context/auth.context'
import MentorContext  from "./context/mentor.context";
import FavoriteMentors from "./pages/ProfileModule/Profile/components/FavoriteMentors";
import Settings from "./pages/ProfileModule/components/Settings";
import MySession from "./pages/ProfileModule/Profile/components/MySession";
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
import PaymentSuccess from "./pages/BookSession/PaymentSuccess";
import Earnings from "./pages/ProfileModule/Profile/components/Earnings";



createRoot(document.getElementById("root")).render(
  <StrictMode>
  <BrowserRouter> 
    <AuthProvider> 
      <MentorContext>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/browse-mentor" element={<Browse_mentor />}>
            <Route path="all-mentors" element={<SearchResult />} />
            <Route path="search-mentors" element={<SearchSection />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view-mentor/:username" element={<ViewMentor />} />
          <Route path="/book-session/:username/:Id" element={<BookSession />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />


          {/* Setup profile nested routes */}
          <Route path="/setup-profile/" element={<SetupProfile />}>
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="work-experience" element={<WorkExperience />} />
            <Route path="education-info" element={<EducationInfo />} />
            <Route path="expertise-info" element={<Expertise />} />
            <Route path="social-link" element={<SocialLinks />} />
            <Route path="availability-info" element={<WeeklyAvailability />} />
            <Route path="rates-info" element={<SetYourRate />} />
          </Route>


          {/* Mentee Dashboard */}
          <Route path="/:username" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="my-session" element={<MySession />} />
            <Route path="my-favorite-mentor" element={<FavoriteMentors />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<h2>404 - Page Not Found 😢</h2>} />
        </Routes>

        <Footer />
      </MentorContext>
    </AuthProvider>
  </BrowserRouter>
</StrictMode>

);

