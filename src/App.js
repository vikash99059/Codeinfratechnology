import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Telecast from "./pages/Telecast";
import Donations from "./pages/Donations";
import News from "./pages/News";
import Bookings from "./pages/Bookings";
import ContactBanner from "./pages/modules/ContactBanner";
import Navbar from "./layouts/Navbar";
import './App.css';
import Mainsidebar from "./layouts/Mainsidebar";
import About from "./pages/About";
import ServiceDetails from "./pages/modules/ServiceDetails.jsx";
import { LoaderProvider } from "./Context/LoaderContext.jsx";
import ScrollToTop from "./pages/modules/Scrolltop.jsx";
import Servicespage from "./pages/modules/Servicespage.jsx";  
import Watchdemo from "./pages/modules/Watchdemo.jsx";  
import Careers from "./pages/modules/Career.jsx";
import InternshipDetails from "./pages/modules/InternshipDetails.jsx";

function Layout() {
  const location = useLocation();

  const showLayout =
    location.pathname === "/" ||
    location.pathname === "/telecast" ||
    location.pathname === "/donations" ||
    location.pathname === "/news" ||
    location.pathname === "/events" ||
    location.pathname === "/bookings" ||
    location.pathname === "/About" ||
    location.pathname.startsWith("/services") || // handle dynamic routes
    location.pathname === "/ContactBanner"||
    location.pathname === "/Servicespage"||
    location.pathname === "/Watchdemo"||
    location.pathname === "/Careers"||
    location.pathname.startsWith("/InternshipDetails"); // for service details pages
  

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {showLayout && <Navbar />}
      <div style={{ display: "flex", flexGrow: 1 }}>
        {/* {showLayout && <Mainsidebar />} */}
        <div style={{ flexGrow: 1 }}>
          <LoaderProvider>
            {/* ScrollToTop should be ABOVE Routes */}
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/telecast" element={<Telecast />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/news" element={<News />} />
              <Route path="/ContactBanner" element={<ContactBanner />} />
              <Route path="/About" element={<About />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/Servicespage" element={<Servicespage />} />
              <Route path="/Watchdemo" element={<Watchdemo />} />
              <Route path="/Careers" element={<Careers />} />
              <Route path="/InternshipDetails/:id" element={<InternshipDetails />} />
            </Routes>
          </LoaderProvider>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;