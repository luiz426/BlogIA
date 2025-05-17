import { motion } from 'framer-motion';

interface Tip {
  id: number;
  title: string;
  description: string;
  color: string;
}

const TIPS: Tip[] = [
  {
    id: 1,
    title: 'Seja específico nas suas perguntas',
    description: 'Quanto mais detalhes você fornecer na sua pergunta, mais precisa será a resposta da IA. Inclua contexto e seja claro sobre o que você precisa.',
    color: 'bg-blue-100'
  },
  {
    id: 2,
    title: 'Refine suas respostas',
    description: 'Se a primeira resposta não for satisfatória, peça à IA para refinar ou expandir sobre pontos específicos. A interação contínua melhora os resultados.',
    color: 'bg-green-100'
  },
  {
    id: 3,
    title: 'Use prompts de sistema',
    description: 'Defina o papel que você quer que a IA assuma. Por exemplo: "Atue como um professor de matemática explicando álgebra para um estudante do ensino médio".',
    color: 'bg-purple-100'
  },
  {
    id: 4,
    title: 'Verifique as informações',
    description: 'Sempre verifique as informações fornecidas pela IA com fontes confiáveis, especialmente para dados importantes ou decisões críticas.',
    color: 'bg-red-100'
  }
];

const QuickTips = () => {
  return (
    <section id="quick-tips" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Dicas Rápidas para Usar IA
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TIPS.map((tip) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: tip.id * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 flex items-start"
            >
              <div className={`flex-shrink-0 rounded-full ${tip.color} w-10 h-10 flex items-center justify-center mr-5 text-lg font-medium`}>
                {tip.id}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickTips; 