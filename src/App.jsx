import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import FloatingBlogButton from "./components/FloatingBlogButton";
import CaseStudy from "./components/CaseStudy";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

const HomePage = () => {
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        {/* <Testimonials /> */}
        <CaseStudy />
        <AboutMe />
        <Footer />
      </div>
      <FloatingBlogButton onClick={() => setIsBlogOpen(true)} />
      <Blog isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
};

export default App;
