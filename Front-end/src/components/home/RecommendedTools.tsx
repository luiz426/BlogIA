import { motion } from 'framer-motion';
import chatgptLogo from '../../assets/chatgpt-logo.jpg';

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconColor: string;
  url: string;
}

const TOOLS: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Assistente de IA conversacional para responder perguntas e ajudar em diversas tarefas.',
    icon: '◯',
    iconColor: 'bg-blue-100',
    url: 'https://chat.openai.com'
  },
  {
    id: '2',
    name: 'Notion AI',
    description: 'Assistente de escrita integrado ao Notion para melhorar textos e gerar conteúdo.',
    icon: '◻',
    iconColor: 'bg-green-100',
    url: 'https://notion.ai'
  },
  {
    id: '3',
    name: 'DALL-E',
    description: 'Gerador de imagens baseado em IA que cria ilustrações a partir de descrições textuais.',
    icon: '▶',
    iconColor: 'bg-purple-100',
    url: 'https://openai.com/dall-e'
  },
  {
    id: '4',
    name: 'Midjourney',
    description: 'Ferramenta de geração de imagens artísticas de alta qualidade através de IA.',
    icon: '◯',
    iconColor: 'bg-red-100',
    url: 'https://midjourney.com'
  }
];

const RecommendedTools = () => {
  return (
    <section id="recommended-tools" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 mb-16"
        >
          Ferramentas de IA Recomendadas
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TOOLS.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow bg-white"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 ${tool.iconColor} rounded-full flex items-center justify-center mb-5`}>
                  {tool.name === 'ChatGPT' ? (
                    <img src={chatgptLogo} alt="ChatGPT Logo" className="w-10 h-10 object-contain rounded-full" />
                  ) : (
                    <span className="text-2xl">{tool.icon}</span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tool.name}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm">
                  {tool.description}
                </p>
                
                <a 
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-medium hover:underline transition-colors mt-auto"
                >
                  Acessar ferramenta
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedTools; 