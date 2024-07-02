

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Header = () => {


  return (
    <header className="bg-gray-100 p-4 rounded-full shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <nav className="flex space-x-6">
          <a href="#home" className="text-black hover:text-teal-500">Home</a>
          <a href="#projects" className="text-black hover:text-teal-500">Projects</a>
          <a href="#team" className="text-black hover:text-teal-500">Team</a>
        </nav>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <FontAwesomeIcon icon={faLayerGroup} className="w-6 h-6 text-black" />
          <span className="text-black font-bold">Adirek Nuansri</span>
        </div>
        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center mt-4 md:mt-0">
          <a href="#about" className="text-black hover:text-teal-500">About</a>
          <a href="#linkedin" className="text-black hover:text-teal-500">LinkedIn</a>
          <a href="#contact" className="text-black hover:text-teal-500">Contact</a>
         
        </nav>
      </div>
    </header>
  );
};

export default Header;
