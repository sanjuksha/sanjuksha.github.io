import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import nightingaleLogo from '../../../images/logos/nightingale-logo.jpeg';
import clearpathLogo from '../../../images/logos/Clearpath-logo.jpg';
import openroboticsLogo from '../../../images/logos/openrobotics-logo.jpg';
import symboticLogo from '../../../images/logos/symbotic-logo.png';

const experiences = [
  {
    company: 'Nightingale Security',
    role: 'Autonomy Technical Lead',
    period: '2024 – Present',
    location: 'Newark, CA',
    description:
      'Architect and deploy autonomous aerial systems that operate in high-stakes, real-world environments.  My work spans behavior planning, simulation, mission-critical integrations, and end-to-end drone deployment for 24/7 security operations.',
    link: 'https://nightingalesecurity.com/',
    logo: nightingaleLogo,
    current: true,
  },
  {
    company: 'ClearPath Robotics',
    role: 'Senior Simulation Developer',
    period: '2023',
    location: 'Mountain View, CA',
    description:
      'Developed high-fidelity robotics simulations using Gazebo and ROS for autonomous mobile robots and unmanned ground vehicles.',
    link: 'https://clearpathrobotics.com/',
    logo: clearpathLogo,
    current: false,
  },
  {
    company: 'Open Robotics',
    role: 'Software Engineer – Robotics',
    period: '2022',
    location: 'Mountain View, CA',
    description:
      'Contributed to the Gazebo development team and the NASA Viper lunar rover simulation project. Worked on robotics middleware and simulation infrastructure.',
    link: 'https://www.openrobotics.org/',
    logo: openroboticsLogo,
    current: false,
  },
  {
    company: 'Symbotic LLC',
    role: 'Advanced Controls Engineer',
    period: '2019 – 2022',
    location: 'Wilmington, MA',
    description:
      'Developed control algorithms and behavior planning systems for autonomous warehouse mobile robots operating in high-throughput logistics environments.',
    link: 'https://www.symbotic.com/',
    logo: symboticLogo,
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Track record of technical leadership across robotics simulation, autonomous systems, and advanced controls
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              className="mb-12 relative"
            >
              <div className="flex items-start gap-6">
                {/* Company logo */}
                <div className="hidden md:flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white p-1.5 shadow-lg border border-gray-200">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 flex-1 min-h-12 bg-gray-200" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl mb-1 text-gray-900">{exp.role}</h3>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-blue-600 hover:text-blue-500 inline-flex items-center gap-2 transition-colors"
                      >
                        {exp.company}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-gray-500 mb-3 text-sm">
                    {exp.period} · {exp.location}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}