import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Mail,
  Phone,
  Github,
  Linkedin,
  ArrowUp,
  Heart,
  ChevronRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      id="main-footer-section"
      className="bg-zinc-100 dark:bg-[#0A0A0B] text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800/80 pt-16 pb-12 transition-colors no-print"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand & Introduction */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">
                Deepak<span className="text-blue-600 dark:text-blue-400">.dev</span>
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Full Stack Developer building responsive, secure, and scalable web applications with React.js, Node.js, Express.js, and MongoDB.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/deepakrathore"
                target="_blank"
                rel="noreferrer"
                id="footer-github-link"
                className="w-9 h-9 rounded-xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 shadow-xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/deepakrathore"
                target="_blank"
                rel="noreferrer"
                id="footer-linkedin-link"
                className="w-9 h-9 rounded-xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:deepakrathore9027020946@gmail.com"
                id="footer-mail-icon-link"
                className="w-9 h-9 rounded-xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 shadow-xs"
                aria-label="Email Deepak Rathore"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Deepak', path: '/about' },
                { name: 'Technical Skills', path: '/skills' },
                { name: 'Practical Experience', path: '/experience' },
                { name: 'Education & BCA', path: '/education' },
                { name: 'Printable Resume', path: '/resume' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Works & Services */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              Services & Projects
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Full Stack Development', path: '/services' },
                { name: 'React.js Web Apps', path: '/services' },
                { name: 'RESTful API Engineering', path: '/services' },
                { name: 'MongoDB Database Design', path: '/services' },
                { name: 'E-Commerce Website', path: '/projects' },
                { name: 'Contact Manager CRUD', path: '/projects' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Get In Touch
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href="mailto:deepakrathore9027020946@gmail.com"
                className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span className="break-all font-mono text-xs text-zinc-800 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">
                  deepakrathore9027020946@gmail.com
                </span>
              </a>

              <div className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400">
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-zinc-800 dark:text-zinc-300 text-xs font-mono">
                  <a href="tel:7017168400" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +91 7017168400
                  </a>
                  <a href="tel:9258446582" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +91 9258446582
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#0F0F12] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-blue-600 dark:text-blue-400 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold hover:border-blue-500/50 transition-all shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start a Project</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Back To Top */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© 2026 Deepak Rathore. All Rights Reserved.</span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
            <span>BCA Graduate & Full Stack Developer</span>
          </div>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0F0F12] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 transition-colors cursor-pointer shadow-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
