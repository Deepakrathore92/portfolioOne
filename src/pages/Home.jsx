import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import { getProjects, getServices } from '../services/api';
import { LoadingSpinner } from '../components/Loading';
import {
  FolderGit2,
  Sparkles,
  ArrowRight,
  Code2,
  CheckCircle2,
  Cpu,
  Database,
  Server,
  Layers,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const stats = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'BCA Completed',
    sub: 'Computer Applications'
  },
  {
    icon: Layers,
    label: 'Architecture',
    value: 'Full Stack Focus',
    sub: 'Frontend & Backend'
  },
  {
    icon: Cpu,
    label: 'Modern Tech Stack',
    value: 'React & Node.js',
    sub: 'Express & MongoDB'
  },
  {
    icon: Sparkles,
    label: 'Design Standard',
    value: '100% Responsive',
    sub: 'Mobile to 4K UI'
  }
];

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [projRes, servRes] = await Promise.all([
          getProjects('All'),
          getServices()
        ]);
        setFeaturedProjects(projRes.data?.slice(0, 3) || []);
        setServices(servRes.data?.slice(0, 4) || []);
      } catch (err) {
        console.error('Home data load error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="home-page-container" className="space-y-20 pb-20">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Key Developer Highlights / Statistics Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 flex items-center gap-4 hover:border-blue-500/30 transition-all shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </p>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">{stat.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Projects Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-200 dark:border-blue-500/20">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Featured Full Stack Projects
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
              Real-world web applications demonstrating frontend responsiveness, REST API integration, and MongoDB database persistence.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner text="Fetching projects from backend..." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id || project._id}
                project={project}
                onViewDetails={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        )}
      </section>

      {/* 4. Core Development Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-200 dark:border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>What I Do</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Full Stack Development Services
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
              Providing end-to-end web engineering, from responsive UI design to backend API construction and database integration.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>Browse All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id || service._id}
              service={service}
              onLearnMore={(s) => setSelectedService(s)}
            />
          ))}
        </div>
      </section>

      {/* 5. Direct Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 dark:from-blue-950/70 dark:via-[#0F0F12] dark:to-indigo-950/70 border border-blue-800 dark:border-zinc-800 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Looking for a Dedicated Full Stack Developer?
            </h2>
            <p className="text-sm sm:text-base text-zinc-200 dark:text-zinc-300 leading-relaxed">
              Whether you need a new web application built from scratch, REST API development, or frontend enhancements in React, let's connect and build something remarkable.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer"
              >
                Get In Touch Today
              </Link>
              <Link
                to="/about"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-white font-semibold text-sm border border-white/20 dark:border-zinc-800 transition-all cursor-pointer backdrop-blur-xs"
              >
                Learn More About Deepak
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};

export default Home;
