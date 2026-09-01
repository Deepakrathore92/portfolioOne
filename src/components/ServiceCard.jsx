import React from 'react';
import {
  Layers,
  Layout,
  Code2,
  Server,
  Cpu,
  Database,
  Smartphone,
  Wrench,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Layers,
  Layout,
  Code2,
  Server,
  Cpu,
  Database,
  Smartphone,
  Wrench
};

const ServiceCard = ({ service, onLearnMore }) => {
  const IconComponent = iconMap[service.icon] || Sparkles;

  return (
    <div
      id={`service-card-${service.id || service._id}`}
      className="group rounded-2xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 p-6 sm:p-7 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
    >
      <div>
        {/* Icon & Index Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 rounded-2xl bg-blue-50 dark:bg-zinc-900 border border-blue-100 dark:border-zinc-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-xs">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 font-semibold">
            0{service.order || 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2.5 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Tech tags */}
        {service.technologies && service.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4">
            {service.technologies.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Learn More Button */}
      <div className="pt-6 mt-4 border-t border-zinc-200 dark:border-zinc-800/80">
        <button
          onClick={() => onLearnMore(service)}
          id={`service-learn-more-btn-${service.id || service._id}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:translate-x-1 transition-all cursor-pointer"
        >
          <span>Learn More Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
