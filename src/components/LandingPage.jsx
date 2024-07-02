
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';

import ContactForm from './ContactForm';
import Footer from './Footer';
import EducationExperience from './EducationExperience';


const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <EducationExperience/>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
