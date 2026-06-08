import { motion } from 'motion/react';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

export function Articles() {
  const articles = [
    {
      title: "Getting Started with ROS2 and Gazebo for Robotics Simulation",
      platform: "Substack",
      date: "2024",
      description: "A comprehensive guide to setting up and using ROS2 with Gazebo for robotics development and simulation.",
      link: "#",
      readTime: "8 min read",
    },
    {
      title: "Deep Learning Approaches for Robotic Perception",
      platform: "Medium",
      date: "2023",
      description: "Exploring modern deep learning techniques for computer vision in robotics applications.",
      link: "#",
      readTime: "12 min read",
    },
    {
      title: "Building Autonomous Navigation Systems for Mobile Robots",
      platform: "Dev.to",
      date: "2023",
      description: "A practical guide to implementing SLAM and path planning for autonomous mobile robots.",
      link: "#",
      readTime: "15 min read",
    },
    {
      title: "Women in Robotics: Breaking Barriers and Building Community",
      platform: "Substack",
      date: "2023",
      description: "Reflections on organizing and growing the Women in Robotics Boston chapter and creating inclusive spaces in tech.",
      link: "#",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="articles" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Articles & Writing</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Technical articles, tutorials, and thoughts on robotics, AI, and community building
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:bg-gray-50 transition-colors group shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full">
                      {article.platform}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{article.description}</p>
                  {article.link !== "#" && (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      Read Article <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            Want to read more? Check out my blog on Substack
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit My Blog
          </a>
        </motion.div>
      </div>
    </section>
  );
}
