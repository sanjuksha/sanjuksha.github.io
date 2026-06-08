import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import baxterImg from '../../../images/slideshow/baxter.jpg';
import ngImg from '../../../images/slideshow/ng.avif';
import openroboticsImg from '../../../images/slideshow/openrobotics_logo.png';
import profileImg from '../../../images/slideshow/profiel-portfolio.jpeg';
import robo15Img from '../../../images/slideshow/robo15.JPG';
import robo16Img from '../../../images/slideshow/robo16.JPG';
import swarmPngImg from '../../../images/slideshow/swarm.png';
import symboticImg from '../../../images/slideshow/symbotic.png';
import vectorImg from '../../../images/slideshow/Vector.jpg';

const images = [
  { src: profileImg,       alt: 'Sanjuksha Nirgude' },
  { src: ngImg,            alt: 'Nightingale Security — aerial autonomy' },
  { src: vectorImg,        alt: 'Robotics event' },
  { src: baxterImg,        alt: 'Baxter robot manipulation' },
  { src: symboticImg,      alt: 'Symbotic warehouse robotics' },
  { src: openroboticsImg,  alt: 'Open Robotics' },
  { src: robo15Img,        alt: 'ROBOCON 2015 — Badminton robot' },
  { src: robo16Img,        alt: 'ROBOCON 2016 — Hybrid eco robot' },
  { src: swarmPngImg,      alt: 'Swarm simulation' },
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 text-white">Sanjuksha Nirgude</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-3 max-w-3xl mx-auto leading-relaxed">
            Advancing Autonomous Aerial Robotics from Research to Deployment
          </p>
          <p className="text-base md:text-lg text-blue-400 mb-3">
            Speaker · Judge · Mentor · Women in Robotics Organizer
          </p>
          <p className="text-sm md:text-base text-gray-500 mb-12">
            UAS · Simulation · Autonomous Systems · Behavior Planning
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={40} />
        </motion.button>
      </div>
    </section>
  );
}