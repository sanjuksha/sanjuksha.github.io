import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C++', 'C', 'JavaScript', 'MATLAB', 'Bash']
    },
    {
      category: 'Robotics Frameworks',
      skills: ['ROS/ROS2', 'Gazebo', 'RViz', 'MoveIt', 'Nav2', 'Isaac Sim']
    },
    {
      category: 'Computer Vision & AI',
      skills: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'Point Cloud Processing']
    },
    {
      category: 'Simulation & Modeling',
      skills: ['Gazebo', 'Isaac Sim', 'URDF', 'SDF', 'Physics Engines', 'Sensor Modeling']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Docker', 'Git', 'Linux', 'CI/CD', 'AWS', 'Kubernetes']
    },
    {
      category: 'Specialized Skills',
      skills: ['SLAM', 'Motion Planning', 'Sensor Fusion', 'Control Systems', 'Swarm Intelligence', 'Autonomous Navigation']
    }
  ];

  const categoryColors = [
    { heading: 'text-blue-600',   badge: 'bg-blue-50 border-blue-200 text-blue-700',   card: 'hover:border-blue-300 hover:bg-blue-50/50' },
    { heading: 'text-cyan-600',   badge: 'bg-cyan-50 border-cyan-200 text-cyan-700',   card: 'hover:border-cyan-300 hover:bg-cyan-50/50' },
    { heading: 'text-purple-600', badge: 'bg-purple-50 border-purple-200 text-purple-700', card: 'hover:border-purple-300 hover:bg-purple-50/50' },
    { heading: 'text-teal-600',   badge: 'bg-teal-50 border-teal-200 text-teal-700',   card: 'hover:border-teal-300 hover:bg-teal-50/50' },
    { heading: 'text-indigo-600', badge: 'bg-indigo-50 border-indigo-200 text-indigo-700', card: 'hover:border-indigo-300 hover:bg-indigo-50/50' },
    { heading: 'text-sky-600',    badge: 'bg-sky-50 border-sky-200 text-sky-700',      card: 'hover:border-sky-300 hover:bg-sky-50/50' },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = categoryColors[index % categoryColors.length];
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                className={`p-6 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 ${colors.card}`}
              >
                <h3 className={`text-lg mb-4 ${colors.heading}`}>{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className={`px-3 py-1 border rounded-full text-sm ${colors.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
