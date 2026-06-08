import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Github, FileText, Home, ExternalLink, BookOpen } from 'lucide-react';
import { useEffect } from 'react';
import { getProjectById } from '../data/projects';
import { projectImages, projectMainImage, soonImg } from '../data/projectImages';
import { projectVideos } from '../data/projectVideos';

export function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? getProjectById(projectId) : undefined;
  const images = projectId ? (projectImages[projectId] ?? []) : [];
  const videos = projectId ? (projectVideos[projectId] ?? []) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const goHome = (section?: string) => {
    navigate('/');
    if (section) {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-gray-900 mb-4">Project not found</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── Sticky Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => goHome()}
              className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors"
            >
              <Home size={18} />
              <span className="hidden sm:inline text-sm">Home</span>
            </button>
            <span className="text-gray-300">/</span>
            <button
              onClick={() => goHome('projects')}
              className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline text-sm">Projects</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {[
              { label: 'Overview', id: 'overview' },
              { label: 'Outline', id: 'outline' },
              { label: 'Research', id: 'research' },
              { label: 'Results', id: 'results' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 text-gray-600 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                <Github size={15} />
                Code
              </a>
            )}
            <a
              href="https://sanjuksha.github.io/Sanjuksha_Nirgude_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div className="relative h-screen flex items-end pb-20 overflow-hidden">
        <img
          src={projectMainImage[project.id] ?? soonImg}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/25" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">{project.shortDescription}</p>
          </motion.div>
        </div>
      </div>

      {/* ── Content body ── */}
      <div className="bg-white">

        {/* Overview */}
        <section id="overview" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-0.5 bg-blue-500" />
              <h2 className="text-3xl text-gray-900">Overview</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">{project.overview}</p>
          </div>
        </section>

        {/* Project image gallery */}
        {images.length > 0 && (
          <section className="pb-10 px-4">
            <div className="max-w-5xl mx-auto">
              <div className={`grid gap-4 ${images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
                {images.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-xl overflow-hidden bg-gray-100 aspect-video"
                  >
                    <img
                      src={src}
                      alt={`${project.title} — figure ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Demo Videos */}
        {videos.length > 0 && (
          <section className="pb-12 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-blue-500" />
                <h2 className="text-2xl text-gray-900">Demo Videos</h2>
              </div>
              <div className={`grid gap-5 ${videos.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                {videos.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-xl overflow-hidden bg-gray-100 shadow-sm"
                  >
                    <video
                      src={src}
                      controls
                      playsInline
                      className="w-full"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Project Outline */}
        <section id="outline" className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-0.5 bg-blue-500" />
              <h2 className="text-3xl text-gray-900">Project Outline</h2>
            </div>
            <div className="space-y-10">
              {project.outline.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mt-1">
                    <span className="text-blue-400 text-sm font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-3">{s.heading}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Aspects */}
        <section id="research" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-0.5 bg-purple-500" />
              <h2 className="text-3xl text-gray-900">Research Aspects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {project.researchAspects.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg text-gray-900 mb-3">{a.heading}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-0.5 bg-green-500" />
              <h2 className="text-3xl text-gray-900">Results</h2>
            </div>
            <div className="space-y-5">
              {project.results.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-2" />
                  <p className="text-gray-600">{r}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-0.5 bg-blue-500" />
              <h2 className="text-3xl text-gray-900">Resources</h2>
            </div>
            <div className="flex flex-wrap gap-4 mb-10">
              {project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-gray-50 transition-all duration-300 group shadow-sm"
                >
                  <Github className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  <div>
                    <p className="text-gray-900 text-sm font-medium">GitHub Repository</p>
                    <p className="text-gray-500 text-xs">Source Code</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors ml-2" />
                </a>
              )}
              {project.paper !== '#' && (
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-200 rounded-xl hover:border-purple-500 hover:bg-gray-50 transition-all duration-300 group shadow-sm"
                >
                  <FileText className="w-6 h-6 text-gray-500 group-hover:text-purple-500 transition-colors" />
                  <div>
                    <p className="text-gray-900 text-sm font-medium">Project Report</p>
                    <p className="text-gray-500 text-xs">Paper / Writeup</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors ml-2" />
                </a>
              )}
              {project.arxiv && (
                <a
                  href={project.arxiv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-200 rounded-xl hover:border-orange-500 hover:bg-gray-50 transition-all duration-300 group shadow-sm"
                >
                  <BookOpen className="w-6 h-6 text-gray-500 group-hover:text-orange-500 transition-colors" />
                  <div>
                    <p className="text-gray-900 text-sm font-medium">arXiv Preprint</p>
                    <p className="text-gray-500 text-xs">Open Access</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors ml-2" />
                </a>
              )}
            </div>
            {project.citation && (
              <div className="p-5 bg-gray-100 border border-gray-200 rounded-xl">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Citation</p>
                <p className="text-sm text-gray-600 italic">{project.citation}</p>
              </div>
            )}
          </div>
        </section>

        {/* Back to Portfolio CTA */}
        <section className="py-20 px-4 border-t border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl text-gray-900 mb-3">Explore More Projects</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Return to the portfolio to discover other research and engineering work.
            </p>
            <button
              onClick={() => goHome('projects')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 Sanjuksha Nirgude. All rights reserved.</p>
          <button
            onClick={() => goHome()}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <Home size={16} />
            Portfolio Home
          </button>
        </div>
      </footer>
    </div>
  );
}
