import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, GraduationCap, Fingerprint } from 'lucide-react';

const contactInfo = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sanjuksha',
    link: 'https://www.linkedin.com/in/sanjuksha/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/sanjuksha',
    link: 'https://github.com/sanjuksha',
  },
  {
    icon: GraduationCap,
    label: 'Google Scholar',
    value: 'Scholar Profile',
    link: 'https://scholar.google.com/citations?user=K2IZTUgAAAAJ&hl=en',
  },
  {
    icon: Fingerprint,
    label: 'ORCID',
    value: '0009-0003-5798-264X',
    link: 'https://orcid.org/0009-0003-5798-264X',
  },
  {
    icon: Mail,
    label: 'Contact',
    value: 'via LinkedIn',
    link: 'https://www.linkedin.com/in/sanjuksha/',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'SF Bay Area, CA',
    link: null,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Get in Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Open to discussing robotics innovation, research collaboration, speaking opportunities,
            and mentorship initiatives. Let's connect to advance the field of autonomous systems together.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {contactInfo.map((item, index) => {
            const sharedMotion = {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-50px' },
              transition: { duration: 0.7, delay: index * 0.08, ease: 'easeOut' as const },
            };
            const inner = (
              <>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${item.link ? 'bg-blue-600 group-hover:bg-blue-700' : 'bg-blue-600'}`}>
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-sm text-gray-500 mb-2">{item.label}</h3>
                <p className={`break-all text-sm transition-colors ${item.link ? 'text-gray-900 group-hover:text-blue-600' : 'text-gray-900'}`}>
                  {item.value}
                </p>
              </>
            );
            return item.link ? (
              <motion.a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                {...sharedMotion}
                className="text-center group cursor-pointer"
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={item.label}
                {...sharedMotion}
                className="text-center"
              >
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}