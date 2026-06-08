import { motion, AnimatePresence } from 'motion/react';
import { Users, Mic, Award, Gavel, Calendar, X, Youtube, ExternalLink, MapPin, ChevronLeft, ChevronRight, Play, Video, VideoOff } from 'lucide-react';
import { useState, useEffect } from 'react';

// ── SF Bay Area event photos ──
import sfChefRobotics from '../../../images/WiR-SF-Events/robotic-manipulation-chef-robtics.jpg';
import sfHackerDojo2   from '../../../images/WiR-SF-Events/hacker-dojo-2.png';
import sfHackerDojo4   from '../../../images/WiR-SF-Events/hacker-dojo-4.png';
import sfHackerDojo    from '../../../images/WiR-SF-Events/hacker-dojo.png';
import sfHackerDojo3   from '../../../images/WiR-SF-Events/speed-mento.JPG';
import sfMarchCoffee2  from '../../../images/WiR-SF-Events/march-24-coffee-2.jpg';
import sfDecCoffee    from '../../../images/WiR-SF-Events/coffee-dec-25.jpeg';  
import sfMarchCoffee   from '../../../images/WiR-SF-Events/March-24-coffee.jpg';
import sfOpenRobotics  from '../../../images/WiR-SF-Events/open-robot-cs-events.jpeg';
import sfUi2           from '../../../images/WiR-SF-Events/ui-2.png';
import sfUi3           from '../../../images/WiR-SF-Events/ui-3.png';
import sfUiRobotics1   from '../../../images/WiR-SF-Events/ui-robotics-1.jpg';
import aiAutonomy1     from '../../../images/WiR-SF-Events/ai-autonomy-1.jpg';
import aiAutonomy2     from '../../../images/WiR-SF-Events/ai-autonomy-2.jpg';

const SF_IMAGES = [
  sfChefRobotics, sfHackerDojo2, sfHackerDojo4, sfHackerDojo,
  sfHackerDojo3, sfMarchCoffee2, sfMarchCoffee, sfDecCoffee, sfOpenRobotics,
  sfUi2, sfUi3, sfUiRobotics1, aiAutonomy1, aiAutonomy2,
];
const BOSTON_IMAGES: string[] = [];

interface WirEvent {
  title: string;
  period: string;
  year: number;
  description: string;
  images?: string[];
  link?: string;
  linkType?: 'youtube' | 'drive';
}

interface YearGroup {
  year: number;
  items: WirEvent[];
}

interface LocationData {
  id: 'sf' | 'boston';
  name: string;
  subtitle: string;
  accentColor: string;
  images: string[];
  yearGroups: YearGroup[];
}

const locations: LocationData[] = [
  {
    id: 'sf',
    name: 'San Francisco Bay Area',
    subtitle: 'Chapter Co-organizer',
    accentColor: 'from-blue-600 to-cyan-500',
    images: SF_IMAGES,
    yearGroups: [
      {
        year: 2026,
        items: [
          {
            title: 'AI & Autonomy: From Research to Robots @ InOrbit',
            period: 'April 2026', year: 2026,
            description: 'A deep dive into how AI and autonomy research translates from lab to real-world robotic deployments. Hosted at InOrbit, featuring talks and Q&A with industry researchers and engineers.',
            images: [aiAutonomy1, aiAutonomy2],
          },
          {
            title: 'Robotics Over Coffee- Dec 2025',
            period: 'Dec 2025', year: 2025,
            description: 'Monthly informal gathering for women in robotics to connect, share updates, and discuss the latest in the field over coffee.',
            images: [sfDecCoffee],
          },
        ],
      },
      {
        year: 2025,
        items: [
          {
            title: 'WiR Day – Speed Mentoring',
            period: '2025', year: 2025,
            description: 'Annual Women in Robotics Day featuring speed mentoring sessions connecting early-career engineers with senior professionals across robotics and automation.',
            images: [sfHackerDojo, sfHackerDojo2, sfHackerDojo3, sfHackerDojo4],
          },
  
        ],
      },
      {
        year: 2024,
        items: [
          {
            title: 'Celebrating Women in Open-Source Robotics',
            period: '2024', year: 2024,
            description: 'Spotlighting contributions of women to open-source robotics with panel discussions and lightning talks from contributors to ROS, Gazebo, and more.',
            images: [sfOpenRobotics],
          },
          {
            title: 'Robotics Over Coffee - March 2024',
            period: 'March 2024', year: 2024,
            description: 'Monthly informal gathering to connect and share projects in a relaxed, coffee-shop atmosphere.',
            images: [sfMarchCoffee, sfMarchCoffee2],
          },
          {
            title: 'Robotic Manipulation in the Wild @ Chef Robotics',
            period: '2024', year: 2024,
            description: 'Hosted at Chef Robotics exploring real-world challenges in robotic manipulation for food automation, with a site tour and technical talks.',
            images: [sfChefRobotics],
          },
          {
            title: 'UI Can Handle It @ InOrbit',
            period: '2024', year: 2024,
            description: 'Focused on human-robot interaction and fleet management UX. Hosted at InOrbit with live demos of their robot operations platform.',
            images: [sfUiRobotics1, sfUi2, sfUi3],
          },
        ],
      },
      {
        year: 2023,
        items: [
          {
            title: 'Building the Future with Women in Robotics @ Hacker Dojo',
            period: '2023', year: 2023,
            description: 'A community-focused event at Hacker Dojo bringing together women building the next generation of robotic systems, with hands-on demos and networking.',
            images: [sfHackerDojo, sfHackerDojo2, sfHackerDojo4],
          },
        ],
      },
    ],
  },
  {
    id: 'boston',
    name: 'Boston',
    subtitle: 'Chapter Co-organizer',
    accentColor: 'from-purple-600 to-blue-500',
    images: BOSTON_IMAGES,
    yearGroups: [
      {
        year: 2022,
        items: [
          {
            title: 'Off the Clock with WiRB and Ava Robotics',
            period: 'July 2022', year: 2022,
            description: 'A casual summer networking event co-organized with Ava Robotics, bringing together women in the Boston robotics community for informal conversation.',
            link: 'https://youtu.be/xBAQH6oQzlw?si=EymnogAQM25kxdqo',
            linkType: 'youtube',
          },
        ],
      },
      {
        year: 2021,
        items: [
          {
            title: 'Autonomy in Aviation with GreenSight and Autodyne',
            period: 'July 2021', year: 2021,
            description: 'Technical talk on autonomy and aviation, featuring presentations from GreenSight and Autodyne on drone and aerial autonomy platforms.',
            link: 'https://youtu.be/vVJCuK5L2nQ?si=L5BJ0ItvtoJ3Cjxv',
            linkType: 'youtube',
          },
          {
            title: 'User Centered Robot Design with iRobot',
            period: 'September 2021', year: 2021,
            description: 'A conversation on human-centered design in consumer robotics with iRobot. Explored how user research shapes the development of home robots.',
            link: 'https://youtu.be/wEg_f9F1KHc?si=GyetaFtoq0-L2Q5Z',
            linkType: 'youtube',
          },
          {
            title: 'BYOB: Bring Your Own Bots – Open Mic',
            period: 'August 2021', year: 2021,
            description: 'An open mic where participants brought robots and projects to share — a community show-and-tell highlighting the breadth of robotics work across Boston.',
            link: 'https://youtu.be/wEg_f9F1KHc?si=GyetaFtoq0-L2Q5Z',
            linkType: 'youtube',
          },
          {
            title: 'Technical Talk: Situated Multi-Party Human-Robot Interactions',
            period: 'December 2021', year: 2021,
            description: 'Lecture by Dr. Marynel Vázquez (Yale) on situated multi-party HRI, exploring how robots understand and participate in group social dynamics.',
            link: 'https://youtu.be/tbUWZ_iXAXg?si=24ancu6slsFsQ1gX',
            linkType: 'youtube',
          },
          {
            title: 'Women in Robotics Speaker Series',
            period: 'May 2021', year: 2021,
            description: 'Monthly speaker series featuring women roboticists sharing their career journeys and lessons learned navigating the robotics industry.',
            link: 'https://youtu.be/x7g7JQL6U9E?si=2EiMnkCmsRyAXuqR',
            linkType: 'youtube',
          },
          {
            title: "Finding a Job in Robotics: Recruiters' Perspective",
            period: 'March 2021', year: 2021,
            description: 'Panel with recruiting professionals sharing insights on navigating the robotics job market — what companies look for and tips for early-career engineers.',
            link: 'https://youtu.be/9-YwA3cuYgM?si=FjdIcN_26YQ2lKI-',
            linkType: 'youtube',
          },
          {
            title: 'Career Pathways with Women in 6 River Systems',
            period: '2021', year: 2021,
            description: 'Conversation with women engineers at 6 River Systems exploring career paths in warehouse robotics, AMRs, and large-scale automation.',
          },
        ],
      },
      {
        year: 2020,
        items: [
          {
            title: 'Bioinspired Robotics – From Research to Technology',
            period: 'December 2020', year: 2020,
            description: 'Technical talk on how biology inspires robotic locomotion, manipulation, and sensing — featuring research-to-industry translations.',
            link: 'https://youtu.be/iahzWMIb-vU?si=IS7N9Z05b_denOUI',
            linkType: 'youtube',
          },
          {
            title: 'A Coffee Chat with Women in Robotics',
            period: 'December 2020', year: 2020,
            description: 'An informal virtual gathering celebrating the Women in Robotics community and fostering connections across academia, industry, and early-career professionals.',
            link: 'https://youtu.be/3XRbrWZhuUA?si=Vff_mOx4VGPVyCOy',
            linkType: 'youtube',
          },
        ],
      },
    ],
  },
];

// ── Speaker portfolio ──────────────────────────────────────────────────────

type RecordingStatus = 'full' | 'clip' | 'none';

interface SpeakerEvent {
  id: number;
  title: string;
  role: string;
  period: string;
  description: string;
  youtubeUrl?: string;
  status: RecordingStatus;
  noRecordingReason?: string;
}

function getYouTubeEmbedUrl(url: string): string {
  const short = url.match(/youtu\.be\/([^?&/]+)/);
  if (short) return `https://www.youtube.com/embed/${short[1]}`;
  const watch = url.match(/[?&]v=([^?&]+)/);
  if (watch) return `https://www.youtube.com/embed/${watch[1]}`;
  const live  = url.match(/youtube\.com\/live\/([^?&/]+)/);
  if (live)  return `https://www.youtube.com/embed/${live[1]}`;
  return url;
}

function roleBadgeClass(role: string): string {
  if (role.includes('Host'))     return 'bg-blue-500/25 text-blue-300 border-blue-500/30';
  if (role.includes('Moderator')) return 'bg-cyan-500/25 text-cyan-300 border-cyan-500/30';
  if (role.includes('Featured'))  return 'bg-purple-500/25 text-purple-300 border-purple-500/30';
  if (role.includes('Lecturer'))  return 'bg-orange-500/25 text-orange-300 border-orange-500/30';
  return 'bg-green-500/25 text-green-300 border-green-500/30';
}

const speakerEvents: SpeakerEvent[] = [
  {
    id: 1,
    title: 'Autonomy in Aviation Panel',
    role: 'Host & Moderator',
    period: '2021',
    description: 'Hosted and moderated a technical panel on autonomous systems in aviation for the Women in Robotics Bay Area community.',
    youtubeUrl: 'https://youtu.be/vVJCuK5L2nQ?si=ipy76S1ZmyQg1lWz',
    status: 'full',
  },
  {
    id: 2,
    title: 'Technical Talk — Situated Multi-Party Human-Robot Interactions',
    role: 'Host & Moderator',
    period: '2021',
    description: 'Hosted a technical speaker session featuring Dr. Marynel Vázquez (Yale) on situated multi-party HRI for the Women in Robotics Bay Area community.',
    youtubeUrl: 'https://youtu.be/tbUWZ_iXAXg?si=24ancu6slsFsQ1gX',
    status: 'full',
  },
  {
    id: 3,
    title: 'Bioinspired Robotics Panel',
    role: 'Host & Moderator',
    period: '2020',
    description: 'Moderated a session on biologically-inspired robotics research and applications.',
    youtubeUrl: 'https://youtu.be/iahzWMIb-vU?si=nhbhmbz810SdUtJD',
    status: 'full',
  },
  {
    id: 4,
    title: 'Coffee Chat — Vecna Robotics',
    role: 'Host',
    period: '2020',
    description: 'Hosted a fireside-style conversation with an industry professional from Vecna Robotics.',
    youtubeUrl: 'https://www.youtube.com/watch?v=3XRbrWZhuUA',
    status: 'full',
  },
  {
    id: 5,
    title: 'AMA Session — Women in Robotics',
    role: 'Featured Speaker',
    period: '2021',
    description: 'Interviewed in an Ask Me Anything format. Demonstrates on-camera presence, depth of knowledge, and ability to engage authentically on career and technical topics.',
    youtubeUrl: 'https://youtu.be/PR0yIRqstfU?si=WQXURTXb1pIW_4qA',
    status: 'full',
  },
  {
    id: 6,
    title: 'On Air with SICK Podcast',
    role: 'Speaker',
    period: '2020',
    description: "Invited as a guest on a podcast by SICK USA to discuss being a woman in a male-dominated field and ways to encourage more women to enter robotics.",
    youtubeUrl: 'https://youtu.be/GX-Yd5Il-bU?si=pL_5ftCbkMWE7LUx',
    status: 'full',
  },
  {
    id: 7,
    title: 'How to Find Jobs in Robotics',
    role: 'Speaker',
    period: '2021',
    description: 'Presented on navigating the robotics job market — knowledge-sharing and mentorship in practice.',
    youtubeUrl: 'https://youtu.be/DUebSAB34EM?si=2UUtevhxQ9D9Capr',
    status: 'full',
  },
  {
    id: 8,
    title: "Pursuing a Master's in Robotics",
    role: 'Featured Guest Speaker',
    period: '2021',
    description: 'Discussed graduate education in robotics with Kajal Gada — reflects accessibility and mentorship as a communicator.',
    youtubeUrl: 'https://www.youtube.com/live/fOzQE1TXQOo?si=DIyrHHpUyFGIy7fd',
    status: 'full',
  },
  {
    id: 9,
    title: 'Speed Mentoring with Women in Robotics',
    role: 'Moderator',
    period: '2025',
    description: 'Moderated an engaging audience Q&A at a speed mentoring event. Short clip available; no full recording due to event format.',
    status: 'clip',
  },
  {
    id: 10,
    title: 'AI & Autonomy: From Research to Robots',
    role: 'Host & Curator',
    period: 'April 2026',
    description: 'Hosted and curated a community event featuring speakers on Vision-Language Models and a live quadruped robot demo. Short clips available; no full recording.',
    status: 'clip',
  },
  {
    id: 11,
    title: 'UC Berkeley — AI Strategy & Applications',
    role: 'Guest Lecturer',
    period: '2025',
    description: 'Invited to guest lecture for an active university course, presenting on AI strategy and real-world applications from work at Nightingale Security.',
    status: 'none',
    noRecordingReason: "No recording per UC Berkeley's institutional recording policy.",
  },
];

const roles = [
  { icon: Mic,   title: 'Speaker',   description: 'Regular speaker at robotics conferences, technical workshops, and industry events' },
  { icon: Users, title: 'Mentor',    description: 'Mentoring aspiring robotics engineers and supporting career development in STEM', link: 'https://mentorship.womencodingcommunity.com/mentorship/mentors?keyword=sanjuksha' },
  { icon: Gavel, title: 'Judge',     description: 'Technical judge for robotics competitions and hackathons' },
  { icon: Award, title: 'Organizer', description: 'Co-organizer of Women in Robotics, leading community initiatives' },
];


export function Leadership() {
  const [activeLocation, setActiveLocation] = useState<'sf' | 'boston' | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tileImgIdx, setTileImgIdx] = useState<Record<number, number>>({});
  const [speakerActive, setSpeakerActive] = useState(false);
  const [flippedTile, setFlippedTile] = useState<number | null>(null);

  const activeData = locations.find(l => l.id === activeLocation) ?? null;

  const prevTileImg = (tileIdx: number, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setTileImgIdx(prev => ({ ...prev, [tileIdx]: ((prev[tileIdx] ?? 0) - 1 + total) % total }));
  };
  const nextTileImg = (tileIdx: number, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setTileImgIdx(prev => ({ ...prev, [tileIdx]: ((prev[tileIdx] ?? 0) + 1) % total }));
  };

  // Constant cycling slideshow — always runs while overlay is open
  useEffect(() => {
    if (!activeLocation) return;
    const loc = locations.find(l => l.id === activeLocation);
    if (!loc || loc.images.length === 0) return;
    setCurrentSlide(0);
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % loc.images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [activeLocation]);

  useEffect(() => {
    document.body.style.overflow = (activeLocation || speakerActive) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeLocation, speakerActive]);

  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Impact on Community</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8" />
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Driving impact through mentorship, speaking engagements, and community building in robotics
          </p>
        </motion.div>

        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {roles.map((role, index) => {
            const isSpeaker = role.title === 'Speaker';
            const hasLink = 'link' in role && role.link;
            const Tag = isSpeaker ? motion.button : hasLink ? motion.a : motion.div;
            const extraProps = isSpeaker
              ? { onClick: () => { setSpeakerActive(true); setFlippedTile(null); } }
              : hasLink
                ? { href: role.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};
            return (
              <Tag
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                className={`bg-blue-50 rounded-xl p-6 transition-all duration-300 text-center border ${
                  isSpeaker
                    ? 'border-blue-100 cursor-pointer hover:bg-green-50 hover:border-green-400/60 hover:shadow-md'
                    : hasLink
                      ? 'border-blue-100 cursor-pointer hover:bg-blue-100 hover:border-blue-400/60 hover:shadow-md'
                      : 'border-blue-100'
                }`}
                {...extraProps}
              >
                <role.icon className={`w-12 h-12 mx-auto mb-4 ${isSpeaker ? 'text-green-400' : 'text-blue-500'}`} />
                <h3 className="text-xl mb-3 text-gray-900">{role.title}</h3>
                <p className="text-gray-500 text-sm">{role.description}</p>
                {isSpeaker && <p className="text-green-600 text-xs mt-3">Click to view portfolio →</p>}
                {hasLink && <p className="text-blue-600 text-xs mt-3">View profile →</p>}
              </Tag>
            );
          })}
        </div>

        {/* Impact tiles — Speaker first, then WiR chapters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="grid md:grid-cols-2 gap-6">

            {/* WiR chapter tiles */}
            {locations.map((loc, index) => (
              <motion.button
                key={loc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => setActiveLocation(loc.id)}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-blue-500/50 transition-all duration-300 text-left w-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${loc.accentColor} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${loc.accentColor}`}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl text-gray-900">{loc.name}</h4>
                      <p className="text-blue-600 text-sm">{loc.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-6">
                    {loc.yearGroups.reduce((n, g) => n + g.items.length, 0)} events across{' '}
                    {loc.yearGroups.length} years
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-500 transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">View past events</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://womeninrobotics.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-gray-300 text-gray-600 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Learn More About Women in Robotics
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Events Overlay ── */}
      <AnimatePresence>
        {activeLocation && activeData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50"
          >
            {/* ── Full-screen slideshow ── */}
            {activeData.images.length > 0 ? (
              activeData.images.map((img, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url('${img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: i === currentSlide ? 1 : 0,
                    transition: 'opacity 1.2s ease-in-out',
                  }}
                />
              ))
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${activeData.accentColor}`} />
            )}

            {/* Medium wash so tiles are readable over the slideshow */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Close button */}
            <button
              onClick={() => setActiveLocation(null)}
              className="absolute top-5 right-5 z-30 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm text-white rounded-full border border-white/25 hover:bg-black/70 transition-all duration-200 shadow-lg"
            >
              <X className="w-4 h-4" />
              Close
            </button>

            {/* Scrollable content over the slideshow */}
            <div className="absolute inset-0 z-20 overflow-y-auto">
              <div className="min-h-full px-6 pt-6 pb-12">

                {/* Header */}
                <div className="text-center mb-8">
                  <p className="text-blue-300 text-xs uppercase tracking-widest mb-2">Women in Robotics</p>
                  <h3 className="text-3xl md:text-4xl text-white drop-shadow-lg">{activeData.name}</h3>
                </div>

                {/* Flip-card grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                  {activeData.yearGroups.flatMap(g => g.items).map((event, i) => {
                    const imgs = event.images && event.images.length > 0 ? event.images : [];
                    const imgIdx = tileImgIdx[i] ?? 0;
                    const currentImg = imgs[imgIdx] ?? null;
                    return (
                      <div key={i} className="[perspective:1000px] h-56 cursor-default">
                        <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">

                          {/* Front: event info */}
                          <div className="absolute inset-0 [backface-visibility:hidden] bg-black/45 backdrop-blur-sm border border-white/15 rounded-2xl p-5 flex flex-col gap-2">
                            <span className="text-blue-300 text-xs uppercase tracking-wide">{event.period}</span>
                            <h4 className="text-white text-sm leading-snug flex-1">{event.title}</h4>
                            <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">{event.description}</p>
                            <p className="text-white/30 text-xs mt-1">
                              {imgs.length > 0 ? `Hover · ${imgs.length} photo${imgs.length > 1 ? 's' : ''}` : 'Hover for details'}
                            </p>
                          </div>

                          {/* Back: event photos with arrow navigation */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden">
                            {currentImg ? (
                              <>
                                <img
                                  src={currentImg}
                                  alt={event.title}
                                  className="w-full h-full object-cover"
                                />
                                {/* Prev / Next arrows */}
                                {imgs.length > 1 && (
                                  <>
                                    <button
                                      onClick={(e) => prevTileImg(i, imgs.length, e)}
                                      className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
                                    >
                                      <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={(e) => nextTileImg(i, imgs.length, e)}
                                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
                                    >
                                      <ChevronRight className="w-4 h-4" />
                                    </button>
                                    {/* Dot counter */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
                                      {imgs.map((_, di) => (
                                        <div
                                          key={di}
                                          className="w-1.5 h-1.5 rounded-full transition-colors"
                                          style={{ background: di === imgIdx ? 'white' : 'rgba(255,255,255,0.35)' }}
                                        />
                                      ))}
                                    </div>
                                  </>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-4 gap-1 pointer-events-none">
                                  <h4 className="text-white text-sm leading-snug">{event.title}</h4>
                                  {event.link && (
                                    <a
                                      href={event.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-xs text-blue-300 hover:text-blue-200 transition-colors pointer-events-auto"
                                    >
                                      {event.linkType === 'youtube'
                                        ? <><Youtube className="w-3 h-3" /> Watch Recording</>
                                        : <><ExternalLink className="w-3 h-3" /> View Photos</>}
                                    </a>
                                  )}
                                </div>
                              </>
                            ) : (
                              /* No photos: gradient fallback */
                              <div className={`w-full h-full bg-gradient-to-br ${activeData.accentColor} flex flex-col items-center justify-center gap-4 p-5`}>
                                <h4 className="text-white text-sm text-center leading-snug">{event.title}</h4>
                                {event.link && (
                                  <a
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition-colors"
                                  >
                                    {event.linkType === 'youtube'
                                      ? <><Youtube className="w-4 h-4" /> Watch Recording</>
                                      : <><ExternalLink className="w-4 h-4" /> View Photos</>}
                                  </a>
                                )}
                              </div>
                            )}
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Speaker Overlay ── */}
      <AnimatePresence>
        {speakerActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-md"
          >
            {/* Close */}
            <button
              onClick={() => { setSpeakerActive(false); setFlippedTile(null); }}
              className="absolute top-5 right-5 z-30 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200 shadow-lg"
            >
              <X className="w-4 h-4" />
              Close
            </button>

            {/* Scrollable content */}
            <div className="absolute inset-0 overflow-y-auto">
              <div className="min-h-full px-6 pt-8 pb-12 max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                  <p className="text-green-400 text-xs uppercase tracking-widest mb-2">Impact</p>
                  <h3 className="text-3xl md:text-4xl text-white mb-3">Speaker Portfolio</h3>
                  <p className="text-gray-400 max-w-xl mx-auto text-sm">
                    Autonomy Technical Lead @ Nightingale Security · Women in Robotics Bay Area Organizer (5+ years).
                    Click a tile to watch.
                  </p>
                  <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5"><Video className="w-3.5 h-3.5 text-green-400" /> Full recording</span>
                    <span className="flex items-center gap-1.5"><Play className="w-3.5 h-3.5 text-yellow-400" /> Clip only</span>
                    <span className="flex items-center gap-1.5"><VideoOff className="w-3.5 h-3.5 text-gray-500" /> No recording</span>
                  </div>
                </div>

                {/* Flip-card grid — click to watch */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {speakerEvents.map((ev) => {
                    const isFlipped = flippedTile === ev.id;
                    return (
                      <div
                        key={ev.id}
                        className="[perspective:1000px] h-64 cursor-pointer"
                        onClick={() => !isFlipped && setFlippedTile(ev.id)}
                      >
                        <div
                          className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d]"
                          style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                        >
                          {/* ── Front ── */}
                          <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-800/80 border border-white/10 rounded-2xl p-4 flex flex-col gap-2">
                            {/* Role + status */}
                            <div className="flex items-start justify-between gap-1">
                              <span className={`px-2 py-0.5 text-xs rounded-full border ${roleBadgeClass(ev.role)}`}>
                                {ev.role}
                              </span>
                              {ev.status === 'full'
                                ? <Video className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                                : ev.status === 'clip'
                                  ? <Play className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                  : <VideoOff className="w-3.5 h-3.5 text-gray-500 flex-shrink-0 mt-0.5" />}
                            </div>
                            <p className="text-gray-400 text-xs">{ev.period}</p>
                            <h4 className="text-white text-sm leading-snug flex-1">{ev.title}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{ev.description}</p>
                            <p className="text-white/25 text-xs mt-auto">
                              {ev.status === 'full' ? 'Click to watch' : ev.status === 'clip' ? 'Clip available' : 'No recording'}
                            </p>
                          </div>

                          {/* ── Back ── */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden bg-gray-900">
                            {/* X to flip back */}
                            <button
                              onClick={(e) => { e.stopPropagation(); setFlippedTile(null); }}
                              className="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                            >
                              <X className="w-3 h-3" />
                            </button>

                            {ev.status === 'full' && ev.youtubeUrl ? (
                              isFlipped ? (
                                <iframe
                                  src={getYouTubeEmbedUrl(ev.youtubeUrl)}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              ) : null
                            ) : ev.status === 'clip' ? (
                              <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-5 bg-gradient-to-br from-yellow-900/40 to-gray-900">
                                <Play className="w-8 h-8 text-yellow-400" />
                                <h4 className="text-white text-sm text-center leading-snug">{ev.title}</h4>
                                <p className="text-gray-400 text-xs text-center">Short clip available · Full recording not available due to event format.</p>
                              </div>
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-5 bg-gradient-to-br from-gray-800 to-gray-900">
                                <VideoOff className="w-8 h-8 text-gray-500" />
                                <h4 className="text-white text-sm text-center leading-snug">{ev.title}</h4>
                                <p className="text-gray-400 text-xs text-center">{ev.noRecordingReason}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}