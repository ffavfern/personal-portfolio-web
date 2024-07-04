import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLayerGroup} className="w-6 h-6 text-white" />
            <span className="text-white font-bold">Adirek Nuansri</span>
          </div>
          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6 text-white" />
          </button>
        </div>
        <nav className="hidden lg:flex lg:flex-row lg:space-x-6 items-center w-full lg:w-auto mt-4 lg:mt-0">
          <a href="#home" className="text-white hover:text-teal-500">Home</a>
          <a href="#projects" className="text-white hover:text-teal-500">Projects</a>
          <a href="#team" className="text-white hover:text-teal-500">Team</a>
          <a href="#about" className="text-white hover:text-teal-500">About</a>
          <a href="#linkedin" className="text-white hover:text-teal-500">LinkedIn</a>
          <a href="#contact" className="text-white hover:text-teal-500">Contact</a>
        </nav>
        {isOpen && (
          <nav className="flex flex-col lg:hidden space-y-4 items-center mt-4 bg-gray-800 w-full py-6 rounded-lg">
            <a href="#home" className="text-white text-lg hover:text-teal-500">Home</a>
            <a href="#projects" className="text-white text-lg hover:text-teal-500">Projects</a>
            <a href="#team" className="text-white text-lg hover:text-teal-500">Team</a>
            <a href="#about" className="text-white text-lg hover:text-teal-500">About</a>
            <a href="#linkedin" className="text-white text-lg hover:text-teal-500">LinkedIn</a>
            <a href="#contact" className="text-white text-lg hover:text-teal-500">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
