import { Routes, Route } from 'react-router';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Internships } from './components/Internships';
import { Leadership } from './components/Leadership';
import { Projects } from './components/Projects';
import { Robocon } from './components/Robocon';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectPage } from './pages/ProjectPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Internships />
      <Leadership />
      <Projects />
      <Robocon />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:projectId" element={<ProjectPage />} />
    </Routes>
  );
}
