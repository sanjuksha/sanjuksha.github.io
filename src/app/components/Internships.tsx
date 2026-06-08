import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import waypointLogo from '../../../images/logos/waypoint.png';
import waypointImg from '../../../images/Vector.jpg';
import cerelabsLogo from '../../../images/logos/cerelabs-logo.png';
import cerelabsVideo from '../../../videos/cerelabs-video.mp4';

const internships = [
  {
    company: 'Waypoint Robotics Inc.',
    role: 'Robotics Intern',
    period: 'Fall 2018',
    location: 'Nashua, NH',
    description:
      'Contributed to the development of autonomous mobile robot software for industrial AMR platforms. Worked on navigation, localization, and ROS-based systems for warehouse environments.',
    link: 'https://waypointrobotics.com/',
    logo: waypointLogo,
    image: waypointImg as string | undefined,
    video: undefined as string | undefined,
  },
  {
    company: 'Cere Labs Pvt. Ltd.',
    role: 'Machine Learning Intern',
    period: 'Summer 2017',
    location: 'Pune, India',
    description:
      'Developed and trained machine learning models for computer vision and reinforcement learning applications. Worked on embedded systems integration and deployment of neural networks on resource-constrained hardware.',
    link: 'https://www.cerelabs.com/',
    logo: cerelabsLogo,
    image: undefined as string | undefined,
    video: cerelabsVideo,
  },
];

export function Internships() {
  return (
    <section id="internships" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Internships</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Early hands-on experience in robotics and machine learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              className="bg-white border border-gray-200 rounded-xl p-7 flex flex-col gap-5 shadow-sm"
            >
              {/* Logo + company */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white p-1.5 shadow-lg border border-gray-200">
                  <img
                    src={intern.logo}
                    alt={intern.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <a
                    href={intern.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-blue-600 hover:text-blue-500 inline-flex items-center gap-1.5 transition-colors"
                  >
                    {intern.company}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-gray-500 text-sm mt-0.5">
                    {intern.period} · {intern.location}
                  </p>
                </div>
              </div>

              {/* Role + description */}
              <div>
                <h3 className="text-xl text-gray-900 mb-3">{intern.role}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{intern.description}</p>
              </div>

              {/* Photo */}
              {intern.image && (
                <div className="rounded-xl overflow-hidden bg-gray-100">
                  <img src={intern.image} alt={intern.company} className="w-full object-cover" />
                </div>
              )}

              {/* Demo video */}
              {intern.video && (
                <div className="rounded-xl overflow-hidden bg-gray-100">
                  <video src={intern.video} controls playsInline className="w-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}