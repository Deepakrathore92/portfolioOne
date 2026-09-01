import React, { useEffect } from 'react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Server,
  Database,
  Lightbulb,
  AlertTriangle
} from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0F0F12] text-zinc-900 dark:text-zinc-100 rounded-2xl sm:rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-y-auto my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#0F0F12]/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
              {project.category || 'Full Stack'}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Project Overview</span>
          </div>
          <button
            id="project-modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-800 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Project Featured Image Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-[#0A0A0B] aspect-video max-h-[380px] w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-black/70 text-blue-300 border border-blue-400/30 backdrop-blur-md shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Title and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{project.shortDescription}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="project-modal-github-link"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white text-sm font-semibold border border-zinc-300 dark:border-zinc-700 transition-all hover:scale-102 cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="project-modal-live-link"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-md shadow-blue-600/30 transition-all hover:scale-102 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Detailed Description
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.detailedDescription || project.shortDescription}
            </p>
          </div>

          {/* Technology Stack Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Frontend */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">
                <Cpu className="w-4 h-4" />
                <h4>Frontend Stack</h4>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                {project.frontendTechnologies && project.frontendTechnologies.length > 0 ? (
                  project.frontendTechnologies.map((t, idx) => <li key={idx}>• {t}</li>)
                ) : (
                  <li>• React.js, JSX, Tailwind CSS</li>
                )}
              </ul>
            </div>

            {/* Backend */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3">
                <Server className="w-4 h-4" />
                <h4>Backend Architecture</h4>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                {project.backendTechnologies && project.backendTechnologies.length > 0 ? (
                  project.backendTechnologies.map((t, idx) => <li key={idx}>• {t}</li>)
                ) : (
                  <li>• Node.js, Express.js, REST API</li>
                )}
              </ul>
            </div>

            {/* Database */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-3">
                <Database className="w-4 h-4" />
                <h4>Database & ODM</h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.database || 'MongoDB & Mongoose Schema Validation'}
              </p>
            </div>
          </div>

          {/* Main Key Features */}
          {project.mainFeatures && project.mainFeatures.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Key Features & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.mainFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challengesAndSolutions && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <h4>Technical Challenge</h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.challengesAndSolutions.challenge ||
                    'Optimizing responsive rendering and coordinating complex multi-step state transitions.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <h4>Implemented Solution</h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.challengesAndSolutions.solution ||
                    'Structured modular components with strict schema validation and debounced state handlers.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-zinc-50 dark:bg-[#0A0A0B] border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between mt-auto">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Deepak Rathore Portfolio Project</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
