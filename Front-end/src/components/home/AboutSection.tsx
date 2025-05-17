import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Sobre o IA Diária
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-700 mb-6"
          >
            <span className="font-medium">O IA Diária</span> é um projeto educacional criado para ajudar pessoas a entenderem e aproveitarem o potencial da inteligência artificial em suas vidas cotidianas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 mb-6"
          >
            Nossa missão é desmistificar a IA e torná-la acessível a todos, independentemente do nível de conhecimento técnico. Acreditamos que a inteligência artificial pode ser uma ferramenta poderosa para resolver problemas, aumentar a produtividade e expandir o conhecimento.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-700 mb-6"
          >
            Através de tutoriais práticos, dicas úteis e recomendações de ferramentas, queremos capacitar nossos leitores a utilizarem a IA de forma ética e eficiente em suas rotinas diárias.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-700"
          >
            Este blog é um projeto acadêmico desenvolvido por estudantes da faculdade, com o objetivo de compartilhar conhecimento e promover o uso responsável da inteligência artificial.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 