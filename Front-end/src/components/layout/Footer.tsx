import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-[#1e2937] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and social */}
          <div className='flex flex-col items-start'>
            <Link to="/" className="flex items-start space-x-2 mb-4">
              <span className="text-white text-2xl font-bold">IA Diária</span>
            </Link>
            <p className="text-gray-400 mb-4 text-start">
              Inteligência Artificial para o seu dia a dia.
            </p>
            <div className="flex itens-start space-x-4 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className='flex flex-col items-start'>
            <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
            <nav className="flex flex-col items-start space-y-2">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none text-left">Início</button>
              <button onClick={() => scrollToSection('featured-posts')} className="text-gray-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none text-left">Tutoriais</button>
              <button onClick={() => scrollToSection('recommended-tools')} className="text-gray-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none text-left">Ferramentas</button>
              <button onClick={() => scrollToSection('quick-tips')} className="text-gray-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none text-left">Dicas</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none focus:outline-none text-left">Sobre</button>
            </nav>
          </div>

          {/* Categories */}
          <div className='flex flex-col items-start'>
            <h3 className="text-lg font-semibold text-white mb-4">Categorias</h3>
            <nav className="flex flex-col items-start space-y-2">
              <Link to="/categoria/chatgpt" className="hover:text-white transition-colors">ChatGPT</Link>
              <Link to="/categoria/geracao-imagens" className="hover:text-white transition-colors">Geração de Imagens</Link>
              <Link to="/categoria/produtividade" className="hover:text-white transition-colors">Produtividade</Link>
              <Link to="/categoria/educacao" className="hover:text-white transition-colors">Educação</Link>
              <Link to="/categoria/trabalho" className="hover:text-white transition-colors">Trabalho</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className='flex flex-col items-start'>
            <h3 className="text-lg font-semibold text-white mb-4 text-start">Contato</h3>
            <div className="flex flex-col space-y-2">
              <a href="mailto:contato@iadiaria.com.br" className="flex items-center hover:text-white transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@iadiaria.com.br
              </a>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Universidade Unigranrio Afya<br />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-center">
          <p>© {currentYear} IA Diária. Todos os direitos reservados. Projeto acadêmico.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 