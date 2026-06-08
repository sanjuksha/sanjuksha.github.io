import { motion } from 'motion/react';
import { Trophy, ExternalLink } from 'lucide-react';
import robocon2015Img from '../../../images/projects/robocon-2015-robo15.JPG';
import robocon2016Img from '../../../images/projects/robocon-2016-robo16.JPG';
import robocon2016Video from '../../../videos/robocon-2016-badm.mp4';

const competitions = [
  {
    year: '2015',
    title: 'Badminton Playing Robot',
    subtitle: 'ROBOCON 2015 — India',
    achievement: '4th Place · Super League',
    description:
      'Designed and built two autonomous mobile robots capable of playing badminton against each other for the Asia Pacific Robot Contest. The robots used computer vision to track the shuttlecock and motor control algorithms to execute forehand and backhand strokes. The team ranked 4th in the Super League matches at the national level competition in India.',
    tech: ['Autonomous Control', 'Computer Vision', 'Embedded Systems', 'Mobile Robotics'],
    image: robocon2015Img,
    video: robocon2016Video,
  },
  {
    year: '2016',
    title: 'Hybrid Robot Driving Eco Robot',
    subtitle: 'ROBOCON 2016 — India',
    achievement: 'National Finalist',
    description:
      'Developed an underactuated eco robot guided by an autonomous hybrid robot to traverse a predefined path for the Asia Pacific Robot Contest. The hybrid robot used sensor fusion and path following algorithms to drive the eco robot through a course, demonstrating energy-efficient cooperative robotics. A technical report was published detailing the system architecture and control strategy.',
    tech: ['Underactuated Systems', 'Path Following', 'Sensor Fusion', 'Cooperative Robotics'],
    image: robocon2016Img,
    paper: 'hybrid.pdf',
    video: undefined as string | undefined,
  },
];

export function Robocon() {
  return (
    <section id="robocon" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl text-gray-900">Asia Pacific Robotics Contest</h2>
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ROBOCON — international competition where university teams build robots to compete
            in a unique engineering challenge defined fresh each year
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {competitions.map((comp, index) => (
            <motion.div
              key={comp.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={comp.image}
                  alt={comp.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                {/* Year badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full">
                  {comp.year}
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-2xl text-gray-900 leading-snug">{comp.title}</h3>
                  <span className="flex-shrink-0 px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30 whitespace-nowrap">
                    {comp.achievement}
                  </span>
                </div>
                <p className="text-blue-600 text-sm mb-4">{comp.subtitle}</p>
                <p className="text-gray-500 leading-relaxed text-sm mb-5">{comp.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {comp.tech.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-xs border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {comp.video && (
                  <div className="rounded-xl overflow-hidden bg-gray-100">
                    <video src={comp.video} controls playsInline className="w-full" />
                  </div>
                )}

                {!comp.video && comp.paper && (
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <iframe
                      src={comp.paper}
                      title="Technical Report"
                      className="w-full h-72"
                    />
                    <a
                      href={comp.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-t border-gray-200 text-sm text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink size={13} />
                      Open Technical Report
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}