import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import { getServices } from '../services/api';
import { LoadingSpinner, ServiceCardSkeleton } from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import {
  Sparkles,
  Layers,
  CheckCircle2,
  Code2,
  Cpu,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const fetchServicesData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getServices();
      setServices(data.data || []);
    } catch (err) {
      console.error('Services fetch error:', err);
      setError(err.message || 'Unable to load services catalog from the server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServicesData();
  }, []);

  return (
    <div id="services-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-200 dark:border-blue-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Professional Offerings</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Development Services
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          End-to-end technical solutions designed for performance, modularity, and clean code standards.
        </p>
      </div>

      {/* Services Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <ServiceCardSkeleton key={n} />
          ))}
        </div>
      ) : error ? (
        <ErrorMessage message={error} onRetry={fetchServicesData} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id || service._id}
              service={service}
              onLearnMore={(s) => setSelectedService(s)}
            />
          ))}
        </div>
      )}

      {/* Engineering Process Steps */}
      <div className="rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 p-8 sm:p-12 space-y-8 shadow-xs">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            How I Build Web Applications
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            A structured, disciplined development workflow from conception to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Requirement Analysis',
              desc: 'Reviewing functional specifications, layout requirements, and user flow definitions.'
            },
            {
              step: '02',
              title: 'Schema & Architecture',
              desc: 'Designing MongoDB data models, REST endpoint structures, and React component hierarchies.'
            },
            {
              step: '03',
              title: 'Clean Implementation',
              desc: 'Writing modular JSX components, responsive Tailwind CSS, and robust Express route handlers.'
            },
            {
              step: '04',
              title: 'Verification & QA',
              desc: 'Testing across mobile viewports, handling edge cases, and validating server responses.'
            }
          ].map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800/80 space-y-2 relative"
            >
              <span className="font-mono text-2xl font-black text-blue-600 dark:text-blue-400/80">{item.step}</span>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};

export default Services;
