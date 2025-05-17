import { motion } from 'framer-motion';
import PostCard from '../posts/PostCard';
import type { Post } from '../posts/PostCard';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'Como usar o ChatGPT para estudar melhor',
    description: 'Aprenda técnicas eficientes para utilizar IA como assistente de estudos e melhorar seu aprendizado.',
    category: 'Tutorial',
    date: '17 May 2025',
    icon: '📚',
    slug: 'como-usar-chatgpt-estudar'
  },
  {
    id: '2',
    title: '5 ferramentas de IA para aumentar sua produtividade',
    description: 'Conheça as melhores ferramentas de IA que podem ajudar você a otimizar seu tempo e trabalhar melhor.',
    category: 'Guia',
    date: '17 May 2025',
    icon: '⚡',
    slug: 'ferramentas-ia-produtividade'
  },
  {
    id: '3',
    title: 'Como usar IA para resolver problemas do dia a dia',
    description: 'Descubra como a inteligência artificial pode ajudar em tarefas cotidianas e simplificar sua vida.',
    category: 'Dicas',
    date: '17 May 2025',
    icon: '💡',
    slug: 'ia-problemas-dia-a-dia'
  }
];

const FeaturedPosts = () => {
  return (
    <section id="featured-posts" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Destaques da Semana</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">
          {MOCK_POSTS.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts; 