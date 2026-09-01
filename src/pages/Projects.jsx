import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { getProjects } from '../services/api';
import { LoadingSpinner, ProjectCardSkeleton } from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import {
  FolderGit2,
  Search,
  Layers,
  Sparkles,
  SlidersHorizontal,
  X
} from 'lucide-react';

const filterCategories = [
  'All',
  'Frontend',
  'React',
  'Backend',
  'Full Stack',
  'Node.js',
  'MongoDB'
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchProjectData = async (cat = activeFilter) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProjects(cat);
      setProjects(data.data || []);
    } catch (err) {
      console.error('Projects fetch error:', err);
      setError(err.message || 'Unable to load project catalog from the server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectData(activeFilter);
  }, [activeFilter]);

  // Client-side instant search filter
  const displayedProjects = projects.filter((p) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      p.title?.toLowerCase().includes(query) ||
      p.shortDescription?.toLowerCase().includes(query) ||
      p.technologies?.some((t) => t.toLowerCase().includes(query)) ||
      p.category?.toLowerCase().includes(query)
    );
  });

  return (
    <div id="projects-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-200 dark:border-blue-500/20">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Project Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Full Stack & Frontend Projects
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Explore practical applications built with React.js, Node.js, Express.js, and MongoDB. Click "View Details" on any card to inspect the full architecture.
        </p>
      </div>

      {/* Filter and Search Bar Control Strip */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="max-w-md mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            id="projects-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project name, tech (e.g. React, MongoDB)..."
            className="w-full pl-10 pr-10 py-3 rounded-2xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-600 dark:hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-white dark:bg-[#0F0F12] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800/80 shadow-xs'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Content Area */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <ProjectCardSkeleton key={n} />
          ))}
        </div>
      ) : error ? (
        <ErrorMessage message={error} onRetry={() => fetchProjectData(activeFilter)} />
      ) : displayedProjects.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 max-w-lg mx-auto shadow-xs">
          <FolderGit2 className="w-12 h-12 text-zinc-400 dark:text-zinc-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-300">No Projects Found</h3>
          <p className="text-xs text-zinc-500 mt-1">
            No projects matched the selected filter "{activeFilter}" or search query.
          </p>
          <button
            onClick={() => {
              setActiveFilter('All');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id || project._id}
              project={project}
              onViewDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      )}

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;
