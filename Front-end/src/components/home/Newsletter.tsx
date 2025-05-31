import { motion } from 'framer-motion';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission to your backend
    console.log('Email submitted:', email);
    // Reset email field
    setEmail('');
    alert('Obrigado por se inscrever!');
  };

  return (
    <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-t from-white via-gray-50 to-white">
      {/* Grid background */}
      <div className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(to right, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.4
        }}
      />
      
      {/* Content with shadow overlay */}
      <div className="relative z-10 w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Receba nossas novidades</h2>
          <p className="text-gray-600">
            Inscreva-se para receber dicas, tutoriais e novidades sobre IA diretamente no seu email.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Inscrever-se
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter; 