import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import FeaturedPosts from '../components/home/FeaturedPosts';
import RecommendedTools from '../components/home/RecommendedTools';
import QuickTips from '../components/home/QuickTips';
import Newsletter from '../components/home/Newsletter';
import AboutSection from '../components/home/AboutSection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedPosts />
      <RecommendedTools />
      <QuickTips />
      <Newsletter />
      <AboutSection />
    </motion.div>
  );
};

export default Home; 