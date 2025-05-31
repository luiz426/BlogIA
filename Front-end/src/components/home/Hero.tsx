import { motion } from 'framer-motion';
import aiHero from '../../assets/ai-hero.png.png';

const Hero = () => {
  return (
    <div id="home" className="w-full bg-gradient-to-br from-indigo-600 to-indigo-400 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white text-start mb-6">
              Inteligência Artificial para o seu dia a dia
            </h1>
            <p className="text-lg text-indigo-100 mb-8 text-start">
              Aprenda a usar IA para resolver problemas cotidianos, aumentar
              sua produtividade e expandir seus conhecimentos.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium"
              >
                Começar agora
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium"
                onClick={() => {
                  const el = document.getElementById('newsletter');
                  if (el) {
                    window.scrollTo({
                      top: el.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Receber novidades
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6 aspect-square max-w-md mx-auto flex items-center justify-center">
              <img
                src={aiHero}
                alt="Inteligência Artificial"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 