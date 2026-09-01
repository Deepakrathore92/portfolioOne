import React from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Terminal,
  GitBranch,
  CheckCircle,
  FileCode,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

const iconMap = {
  HTML5: Layout,
  CSS3: Layout,
  JavaScript: Code,
  'React.js': Layers,
  Bootstrap: Layout,
  'Tailwind CSS': Sparkles,
  jQuery: Code,
  'Node.js': Server,
  'Express.js': Cpu,
  'REST API': Terminal,
  MongoDB: Database,
  Mongoose: Database,
  MySQL: Database,
  Java: FileCode,
  Git: GitBranch,
  GitHub: GitBranch,
  'VS Code': Code,
  Postman: Terminal,
  npm: Layers
};

const SkillCard = ({ skill }) => {
  const IconComponent = iconMap[skill.name] || Code;

  return (
    <div
      id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
      className="group p-5 rounded-2xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-zinc-900 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-zinc-800 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
            {skill.level || 'Proficient'}
          </span>
        </div>

        <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {skill.name}
        </h3>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
          {skill.description}
        </p>
      </div>

      {/* Visual Skill Indicator Bar */}
      <div className="pt-4 mt-2">
        <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mb-1">
          <span>Proficiency</span>
          <span className="text-blue-600 dark:text-blue-400 font-mono font-semibold">{skill.percentage || 85}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800/80 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 group-hover:from-blue-500 group-hover:to-indigo-400 transition-all duration-500"
            style={{ width: `${skill.percentage || 85}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
