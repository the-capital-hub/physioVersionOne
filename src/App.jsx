
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AIFloatingButton from "./components/AIFloatingButton/AIFloatingButton";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Appointment from "./pages/Appointment/Appointment";
import Conditions from "./pages/conditions/conditions";
import Team from "./pages/Team/Team";
import Resources from "./pages/Resources/Resources";
import OnlinePhysiotherapy from "./pages/OnlinePhysiotherapy/OnlinePhysiotherapy";

// Public Website Layout
const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
      <AIFloatingButton />
      <WhatsAppButton />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />

      <Route
        path="/about"
        element={
          <PublicLayout>
            <About />
          </PublicLayout>
        }
      />

      <Route
        path="/services"
        element={
          <PublicLayout>
            <Services />
          </PublicLayout>
        }
      />

      <Route
        path="/team"
        element={
          <PublicLayout>
            <Team />
          </PublicLayout>
        }
      />

      <Route
        path="/resources"
        element={
          <PublicLayout>
            <Resources />
          </PublicLayout>
        }
      />

      <Route
        path="/conditions"
        element={
          <PublicLayout>
            <Conditions />
          </PublicLayout>
        }
      />

      <Route
        path="/online-physiotherapy"
        element={
          <PublicLayout>
            <OnlinePhysiotherapy />
          </PublicLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <PublicLayout>
            <Contact />
          </PublicLayout>
        }
      />

      <Route
        path="/appointment"
        element={
          <PublicLayout>
            <Appointment />
          </PublicLayout>
        }
      />

      <Route
        path="*"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />
    </Routes>
  );
};

export default App;
