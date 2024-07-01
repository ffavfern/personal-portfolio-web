
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <header className="bg-gray-100 p-4 rounded-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex space-x-6">
          <a href="#home" className="text-black hover:text-teal-500">Home</a>
          <a href="#projects" className="text-black hover:text-teal-500">Projects</a>
          <a href="#team" className="text-black hover:text-teal-500">Team</a>
        </nav>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faLayerGroup} className="w-6 h-6 text-black" />
          <span className="text-black font-bold">Adirek Nuansri</span>
        </div>
        <nav className="flex space-x-6 items-center">
          <a href="#about" className="text-black hover:text-teal-500">About</a>
          <a href="#linkedin" className="text-black hover:text-teal-500">LinkedIn</a>
          <a href="#contact" className="text-black hover:text-teal-500">Contact</a>
          <button 
            onClick={handleLogin} 
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
          >
            Login
          </button>
          <button 
            onClick={handleSignUp} 
            className="bg-white text-teal-500 py-2 px-4 rounded border border-teal-500 hover:bg-teal-50"
          >
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
