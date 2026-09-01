import React, { useState } from 'react';
import SkillCard from '../components/SkillCard';
import {
  Cpu,
  Layers,
  Server,
  Database,
  Code,
  Wrench,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const allSkills = [
  // Frontend
  {
    category: 'Frontend',
    name: 'HTML5',
    description: 'Semantic markup, accessibility (ARIA), modern form elements, and SEO-friendly document structuring.',
    level: 'Advanced',
    percentage: 90
  },
  {
    category: 'Frontend',
    name: 'CSS3',
    description: 'Flexbox, CSS Grid, media queries, keyframe animations, custom properties, and responsive layout math.',
    level: 'Advanced',
    percentage: 88
  },
  {
    category: 'Frontend',
    name: 'JavaScript',
    description: 'ES6+ syntax, asynchronous programming (Promises, async/await), DOM manipulation, closures, and event loops.',
    level: 'Advanced',
    percentage: 86
  },
  {
    category: 'Frontend',
    name: 'React.js',
    description: 'JSX components, useState/useEffect/useContext hooks, custom hooks, React Router DOM, and state architecture.',
    level: 'Advanced',
    percentage: 85
  },
  {
    category: 'Frontend',
    name: 'Tailwind CSS',
    description: 'Utility-first styling, custom theme configuration, responsive breakpoints, and dark mode class handling.',
    level: 'Advanced',
    percentage: 88
  },
  {
    category: 'Frontend',
    name: 'Bootstrap',
    description: 'Grid systems, responsive utility classes, navigation bars, modal dialogs, and component styling.',
    level: 'Proficient',
    percentage: 80
  },
  {
    category: 'Frontend',
    name: 'jQuery',
    description: 'DOM traversal, event handling, AJAX requests, and legacy JavaScript animation integration.',
    level: 'Proficient',
    percentage: 75
  },

  // Backend
  {
    category: 'Backend',
    name: 'Node.js',
    description: 'Event-driven asynchronous runtime, file system I/O, npm package ecosystem, and server process execution.',
    level: 'Proficient',
    percentage: 84
  },
  {
    category: 'Backend',
    name: 'Express.js',
    description: 'Modular routing, request/response handlers, custom middleware, error handling, and CORS configuration.',
    level: 'Proficient',
    percentage: 85
  },
  {
    category: 'Backend',
    name: 'REST API',
    description: 'Standard HTTP methods (GET, POST, PUT, DELETE), JSON formatting, status codes, query pagination, and filtering.',
    level: 'Advanced',
    percentage: 88
  },

  // Database
  {
    category: 'Database',
    name: 'MongoDB',
    description: 'NoSQL document storage, BSON format, CRUD query operations, aggregation pipelines, and indexing.',
    level: 'Proficient',
    percentage: 82
  },
  {
    category: 'Database',
    name: 'Mongoose',
    description: 'Object Data Modeling (ODM), schema design, validation rules, pre/post middleware hooks, and relationships.',
    level: 'Proficient',
    percentage: 84
  },
  {
    category: 'Database',
    name: 'MySQL',
    description: 'Relational database concepts, SQL queries (SELECT, INSERT, UPDATE, JOINs), primary keys, and table normalization.',
    level: 'Proficient',
    percentage: 76
  },

  // Programming
  {
    category: 'Programming',
    name: 'JavaScript',
    description: 'Core object-oriented and functional paradigm, array methods, data structures, and algorithmic logic.',
    level: 'Advanced',
    percentage: 86
  },
  {
    category: 'Programming',
    name: 'Java',
    description: 'Object-Oriented Programming (OOP) fundamentals: classes, inheritance, polymorphism, encapsulation, and interfaces.',
    level: 'Proficient',
    percentage: 75
  },

  // Tools
  {
    category: 'Tools',
    name: 'Git',
    description: 'Version control workflows, branching, commits, merging, pull requests, and commit history tracking.',
    level: 'Proficient',
    percentage: 85
  },
  {
    category: 'Tools',
    name: 'GitHub',
    description: 'Remote repository hosting, repository collaboration, issue tracking, and project README documentation.',
    level: 'Proficient',
    percentage: 85
  },
  {
    category: 'Tools',
    name: 'VS Code',
    description: 'Development environment, extensions configuration, multi-cursor editing, debugging, and terminal integration.',
    level: 'Advanced',
    percentage: 90
  },
  {
    category: 'Tools',
    name: 'Postman',
    description: 'API endpoint testing, request payload creation, header configuration, environment variables, and status validation.',
    level: 'Advanced',
    percentage: 88
  },
  {
    category: 'Tools',
    name: 'npm',
    description: 'Node Package Manager, dependency installation, package.json script automation, and package versioning.',
    level: 'Advanced',
    percentage: 88
  }
];

const categories = [
  { id: 'All', label: 'All Technologies', icon: Sparkles },
  { id: 'Frontend', label: 'Frontend', icon: Layers },
  { id: 'Backend', label: 'Backend', icon: Server },
  { id: 'Database', label: 'Database', icon: Database },
  { id: 'Programming', label: 'Programming', icon: Code },
  { id: 'Tools', label: 'Tools & Utilities', icon: Wrench }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <div id="skills-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-200 dark:border-blue-500/20">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Competencies</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Skills & Technologies
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Comprehensive breakdown of frontend, backend, database, programming language, and development tool proficiencies.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              id={`skills-tab-${cat.id.toLowerCase()}`}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-white dark:bg-[#0F0F12] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800/80 shadow-xs'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  isActive ? 'bg-black/20 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {cat.id === 'All'
                  ? allSkills.length
                  : allSkills.filter((s) => s.category === cat.id).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredSkills.map((skill, idx) => (
          <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
        ))}
      </div>

      {/* Summary Note Banner */}
      <div className="rounded-2xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-400 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span>
            Every listed technology is backed by practical projects, code implementations, and BCA coursework.
          </span>
        </div>
        <span className="font-mono text-blue-600 dark:text-blue-400 shrink-0 font-medium">Continuous Learning & Evolution</span>
      </div>
    </div>
  );
};

export default Skills;
