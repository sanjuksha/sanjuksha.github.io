import { motion } from 'motion/react';
import profilePic from '../../../images/profile_image.jpg';
import wpiLogo from '../../../images/wpi.jpg';
import spuuLogo from '../../../images/unipune.jpg';

export function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row">

      {/* ── Left: Profile image — sticky on desktop, stacked on mobile ── */}
      <div className="relative md:w-5/12 md:flex-shrink-0">
        {/* On mobile: fixed-height block. On desktop: sticky viewport-height panel. */}
        <div
          className="md:sticky md:top-0 md:h-screen overflow-hidden"
          style={{ height: 'clamp(260px, 55vw, 100vh)' }}
        >
          <img
            src={profilePic}
            alt="Sanjuksha Nirgude"
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle right-edge fade — desktop only */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent via-transparent to-white/20" />
          {/* Bottom gradient for mobile */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-white/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* ── Right: Scrollable content ── */}
      <div className="flex-1 bg-white">

        {/* About Me */}
        <div className="min-h-screen flex items-center px-8 md:px-12 lg:px-16 py-24">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-lg"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mb-6" />
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            I build autonomous systems that work in the real world.
            Nearly a decade across the full arc of robotics: warehouse automation, space simulation, and aerial drones 
            securing critical infrastructure for defense, law enforcement, and energy partners. 
            Today I'm a Autonomoy Technical Lead at Nightingale Security, architecting and deploying autonomous aerial 
            systems for 24/7 security operations. Previously at Open Robotics (NASA VIPER), Symbotic, and ClearPath Robotics.
            MS in Robotics Engineering, Worcester Polytechnic Institute.
            Beyond the technical work, I mentor and organize with Women in Robotics Bay Area, 
            judge robotics competitions, and speak at universities and industry events
            — because building a more inclusive field is part of the job.
            </p>
          </motion.div>
        </div>

        {/* Education */}
        <div className="min-h-screen flex items-center px-8 md:px-12 lg:px-16 py-24">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-lg w-full"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Education</h2>
            <div className="w-20 h-1 bg-blue-500 mb-10" />

            <div className="space-y-6">

              {/* WPI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-5 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-blue-500/40 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white p-1 shadow-lg">
                  <img
                    src={wpiLogo}
                    alt="WPI"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-gray-900 font-medium">Worcester Polytechnic Institute</h3>
                  <p className="text-blue-600 text-sm mt-0.5">Master of Science</p>
                  <p className="text-gray-600 text-sm">Robotics Engineering</p>
                </div>
              </motion.div>

              {/* Pune University */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-5 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-blue-500/40 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white p-1 shadow-lg">
                  <img
                    src={spuuLogo}
                    alt="Savitribai Phule Pune University"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-gray-900 font-medium">Savitribai Phule Pune University</h3>
                  <p className="text-blue-600 text-sm mt-0.5">Bachelor of Engineering</p>
                  <p className="text-gray-600 text-sm">Mechanical Engineering</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
