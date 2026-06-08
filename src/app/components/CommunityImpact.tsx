import { motion } from 'motion/react';
import { Users, Mic, Award, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CommunityImpact() {
  const events = [
    {
      title: "Women in Robotics Boston Chapter",
      role: "Organizer",
      description: "Leading the Boston chapter to create opportunities and foster community among women in robotics",
      icon: Users,
    },
    {
      title: "Technical Workshops & Talks",
      role: "Speaker & Mentor",
      description: "Speaker at robotics events/classes and mentor for aspiring robotics engineers",
      icon: Mic,
    },
    {
      title: "Community Events",
      role: "Event Host",
      description: "Organizing networking events, panel discussions, and technical workshops for Women in Robotics",
      icon: Calendar,
    },
  ];

  return (
    <section id="community" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Community Impact</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Passionate about creating inclusive spaces and mentoring the next generation of robotics engineers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-100 border border-gray-200 rounded-lg p-8 hover:bg-gray-200 transition-colors"
            >
              <event.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl mb-2 text-gray-900">{event.title}</h3>
              <p className="text-blue-600 mb-4">{event.role}</p>
              <p className="text-gray-600">{event.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center"
        >
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl mb-4 text-white">Mentor & Speaker</h3>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            Dedicated to empowering women in STEM through mentorship, speaking engagements, and community building.
            Actively involved in organizing events that connect, inspire, and support women pursuing careers in robotics and technology.
          </p>
          <a
            href="https://womeninrobotics.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Learn More About Women in Robotics
          </a>
        </motion.div>
      </div>
    </section>
  );
}
