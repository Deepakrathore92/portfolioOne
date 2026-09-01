import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner = ({ text = 'Loading data...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 space-y-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin"></div>
        <Loader2 className="w-6 h-6 text-blue-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>
      <p className="text-sm font-medium text-zinc-400 tracking-wide">{text}</p>
    </div>
  );
};

export const ProjectCardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0F0F12] overflow-hidden animate-pulse">
      <div className="h-52 bg-zinc-200 dark:bg-zinc-800/80 w-full"></div>
      <div className="p-6 space-y-4">
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3"></div>
        <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3.5 bg-zinc-200/80 dark:bg-zinc-800/60 rounded w-full"></div>
          <div className="h-3.5 bg-zinc-200/80 dark:bg-zinc-800/60 rounded w-5/6"></div>
        </div>
        <div className="flex gap-2 pt-2">
          <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full w-16"></div>
          <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full w-20"></div>
          <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full w-14"></div>
        </div>
        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex justify-between gap-3">
          <div className="h-9 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-1/3"></div>
          <div className="h-9 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export const ServiceCardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0F0F12] p-6 space-y-4 animate-pulse">
      <div className="w-12 h-12 rounded-xl bg-zinc-200 dark:bg-zinc-800"></div>
      <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3"></div>
      <div className="space-y-2">
        <div className="h-3.5 bg-zinc-200/80 dark:bg-zinc-800/60 rounded w-full"></div>
        <div className="h-3.5 bg-zinc-200/80 dark:bg-zinc-800/60 rounded w-4/5"></div>
      </div>
      <div className="h-9 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-1/2 pt-2"></div>
    </div>
  );
};

export default LoadingSpinner;
