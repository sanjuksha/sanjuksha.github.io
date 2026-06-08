import { motion } from 'motion/react';
import { Github, FileText, Quote, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from '../data/projects';
import { projectMainImage, soonImg } from '../data/projectImages';

// Per-project accent: top border + hover glow color
const PROJECT_ACCENT: Record<string, { border: string; glow: string; tag: string }> = {
  'uav-cinematography':   { border: 'border-t-sky-500',    glow: 'hover:shadow-sky-100',    tag: 'bg-sky-50 text-sky-700 border-sky-200' },
  'collective-transport': { border: 'border-t-teal-500',   glow: 'hover:shadow-teal-100',   tag: 'bg-teal-50 text-teal-700 border-teal-200' },
  'fuzzy-logic-navigation':{ border: 'border-t-purple-500', glow: 'hover:shadow-purple-100', tag: 'bg-purple-50 text-purple-700 border-purple-200' },
  'pose-estimation':      { border: 'border-t-orange-500', glow: 'hover:shadow-orange-100', tag: 'bg-orange-50 text-orange-700 border-orange-200' },
  'baxter-kdl':           { border: 'border-t-cyan-500',   glow: 'hover:shadow-cyan-100',   tag: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  'facial-keypoints':     { border: 'border-t-rose-500',   glow: 'hover:shadow-rose-100',   tag: 'bg-rose-50 text-rose-700 border-rose-200' },
  'robot-learning-demo':  { border: 'border-t-indigo-500', glow: 'hover:shadow-indigo-100', tag: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  'teleoperation-imu':    { border: 'border-t-amber-500',  glow: 'hover:shadow-amber-100',  tag: 'bg-amber-50 text-amber-700 border-amber-200' },
  'face-recognition':     { border: 'border-t-red-500',    glow: 'hover:shadow-red-100',    tag: 'bg-red-50 text-red-700 border-red-200' },
  'atlas-escape':         { border: 'border-t-green-500',  glow: 'hover:shadow-green-100',  tag: 'bg-green-50 text-green-700 border-green-200' },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Selected Research Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Published research in robotics, autonomous systems, computer vision, and swarm intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              className={`bg-white border border-gray-200 border-t-2 rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 ${PROJECT_ACCENT[project.id]?.border ?? 'border-t-blue-500'} ${PROJECT_ACCENT[project.id]?.glow ?? ''}`}
            >
              {/* Clickable image → project detail page (new tab) */}
              <Link to={`/projects/${project.id}`} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={projectMainImage[project.id] ?? soonImg}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1.5 bg-blue-600/90 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <Link
                  to={`/projects/${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-3 hover:text-blue-600 transition-colors"
                >
                  <h3 className="text-xl text-gray-900">{project.title}</h3>
                </Link>

                <p className="text-gray-500 mb-4 text-sm leading-relaxed flex-1">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs border ${PROJECT_ACCENT[project.id]?.tag ?? 'bg-blue-50 text-blue-700 border-blue-200'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-3 items-center">
                    <Link
                      to={`/projects/${project.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      <ArrowRight size={16} />
                      <span>Full Details</span>
                    </Link>
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.paper !== '#' && (
                      <a
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm"
                      >
                        <FileText size={16} />
                        <span>Paper</span>
                      </a>
                    )}
                    {project.arxiv && (
                      <a
                        href={project.arxiv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm"
                      >
                        <BookOpen size={16} />
                        <span>arXiv</span>
                      </a>
                    )}
                  </div>

                  {project.citation && (
                    <div className="flex items-start gap-2 text-xs text-gray-500 bg-gray-100 p-2 rounded border border-gray-200">
                      <Quote size={12} className="mt-0.5 flex-shrink-0 text-blue-600" />
                      <span className="italic">{project.citation}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}