import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm w-full"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-indigo-600 text-2xl font-bold">IA Diária</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="bg-white text-gray-700 hover:text-indigo-600 cursor-pointer border-none outline-none focus:outline-none focus:border-none">Início</button>
            <button onClick={() => scrollToSection('featured-posts')} className="bg-white text-gray-700 hover:text-indigo-600 cursor-pointer border-none outline-none focus:outline-none">Tutoriais</button>
            <button onClick={() => scrollToSection('recommended-tools')} className="bg-white text-gray-700 hover:text-indigo-600 cursor-pointer border-none outline-none focus:outline-none">Ferramentas</button>
            <button onClick={() => scrollToSection('quick-tips')} className="bg-white text-gray-700 hover:text-indigo-600 cursor-pointer border-none outline-none focus:outline-none">Dicas</button>
            <button onClick={() => scrollToSection('about')} className="bg-white text-gray-700 hover:text-indigo-600 cursor-pointer border-none outline-none focus:outline-none">Sobre</button>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="w-full bg-gray-100 text-gray-700 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute right-3 top-2.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 