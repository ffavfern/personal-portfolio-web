
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AddPortfolioItem from './components/AddPortfolioItem';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/admin/add" element={<AddPortfolioItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
