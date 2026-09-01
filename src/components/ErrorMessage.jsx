import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorMessage = ({
  message = 'Unable to load data. Please try again.',
  onRetry,
  className = ''
}) => {
  return (
    <div
      className={`rounded-2xl border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-950/20 p-6 sm:p-8 text-center max-w-lg mx-auto my-8 ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-center justify-center mx-auto mb-4 text-red-600 dark:text-red-400">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-200 mb-2">Notice</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">{message}</p>
      {onRetry && (
        <button
          id="error-retry-button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-800 text-sm font-medium transition-all duration-200 cursor-pointer shadow-xs"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
