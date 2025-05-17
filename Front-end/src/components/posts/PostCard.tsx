import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  icon: string;
  slug: string;
}

interface PostCardProps {
  post: Post;
  index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <Link to={`/post/${post.slug}`} className="block">
        <div className={`h-48 ${post.icon} bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center p-6`}>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-4xl">{post.icon}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium 
              ${post.category === 'Tutorial' ? 'bg-blue-100 text-blue-800' :
                post.category === 'Guia' ? 'bg-green-100 text-green-800' :
                'bg-purple-100 text-purple-800'}`}
            >
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.date}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 text-start">{post.title}</h3>
          <p className="text-gray-600 text-start">{post.description}</p>
          <div className="mt-4 flex items-center text-indigo-600 font-medium">
            Ler mais
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PostCard; 