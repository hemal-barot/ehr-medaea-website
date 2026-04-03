import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Platform from "./pages/Platform";
import WhyUs from "./pages/WhyUs";
import Plans from "./pages/Plans";
import Legal from "./pages/Legal";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-900">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/privacy-policy" element={<Legal page="privacy" />} />
          <Route path="/disclaimer" element={<Legal page="disclaimer" />} />
          <Route path="/saas-terms-of-service" element={<Legal page="saas-terms" />} />
          <Route path="/web-terms-of-service" element={<Legal page="web-terms" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
