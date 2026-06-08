import { motion } from 'motion/react';
import { FileText, ExternalLink, Users as AuthorsIcon } from 'lucide-react';

export function ResearchPapers() {
  const papers = [
    {
      title: "Collective Transport of Concave Objects",
      authors: "Sanjuksha Nirgude, et al.",
      venue: "WPI Research Project",
      year: "2020",
      description: "Occlusion-based collective transport strategy for complex concave objects using swarm robotics principles.",
      link: "https://github.com/Collective-transport-of-concave-objects",
      tags: ["Swarm Robotics", "Multi-Agent Systems", "Collective Transport"],
    },
    {
      title: "Automated Cinematography Motion Planning for UAVs",
      authors: "Sanjuksha Nirgude, et al.",
      venue: "WPI Research Project",
      year: "2020",
      description: "Motion planning algorithms for quadrotors to autonomously navigate and film in complex environments.",
      link: "https://github.com/Automated-Aerial-Cinematography/Motion-Planner",
      tags: ["UAV", "Motion Planning", "Autonomous Systems"],
    },
    {
      title: "Detection, Recognition & Pose Estimation of Tabletop Objects",
      authors: "Sanjuksha Nirgude",
      venue: "Deep Learning for Advanced Robotic Perception",
      year: "2019",
      description: "Deep neural network for detecting, recognizing, and estimating the pose of objects on tabletops for robotic manipulation tasks.",
      link: "#",
      tags: ["Deep Learning", "Computer Vision", "Robotics"],
    },
  ];

  return (
    <section id="research" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-white">Research Papers</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Published research and academic contributions in robotics, computer vision, and autonomous systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-8 hover:bg-gray-850 transition-colors border border-gray-800"
            >
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <FileText className="w-12 h-12 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-3 text-white">{paper.title}</h3>
                  <div className="flex items-center gap-2 mb-3 text-gray-400">
                    <AuthorsIcon className="w-4 h-4" />
                    <span>{paper.authors}</span>
                  </div>
                  <p className="text-gray-400 mb-2">
                    {paper.venue} • {paper.year}
                  </p>
                  <p className="text-gray-300 mb-6">{paper.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {paper.link !== "#" && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
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
