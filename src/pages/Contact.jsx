import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import {
  Mail,
  Phone,
  GraduationCap,
  MapPin,
  Send,
  MessageCircle,
  Copy,
  Check,
  Sparkles,
  Clock,
  ShieldCheck
} from 'lucide-react';

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div id="contact-page-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-200 dark:border-blue-500/20">
          <Send className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Contact Deepak Rathore
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Have a project inquiry, software development opportunity, or want to discuss full-stack web engineering? Send a direct message or reach out via phone/email.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Info Card */}
          <div className="rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 p-6 sm:p-8 shadow-xl space-y-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Direct Contact Details
            </h2>

            {/* Email Box */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Email Address
                </span>
                <button
                  onClick={() => copyToClipboard('deepakrathore9027020946@gmail.com', 'email')}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center gap-1 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedItem === 'email' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href="mailto:deepakrathore9027020946@gmail.com"
                className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all block"
              >
                deepakrathore9027020946@gmail.com
              </a>
            </div>

            {/* Phone Box 1 */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Primary Phone
                </span>
                <button
                  onClick={() => copyToClipboard('7017168400', 'phone1')}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center gap-1 cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedItem === 'phone1' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href="tel:7017168400"
                className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block font-mono"
              >
                +91 7017168400
              </a>
            </div>

            {/* Phone Box 2 */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Alternate Phone
                </span>
                <button
                  onClick={() => copyToClipboard('9258446582', 'phone2')}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center gap-1 cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedItem === 'phone2' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href="tel:9258446582"
                className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block font-mono"
              >
                +91 9258446582
              </a>
            </div>

            {/* Education Badge */}
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0A0A0B] border border-zinc-200 dark:border-zinc-800/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-zinc-500">Education</p>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">
                  BCA – Completed
                </p>
              </div>
            </div>

            {/* Quick WhatsApp / Direct Action Button */}
            <a
              href="https://wa.me/917017168400?text=Hi%20Deepak,%20I%20saw%20your%20Full%20Stack%20Developer%20portfolio"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-102 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>

          {/* Availability Status Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 flex items-center gap-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                Response Time: Within 24 Hours
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                All inquiries submitted through this form are logged in the database and monitored.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form Component */}
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              Send a Direct Message
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Fill out the form below to transmit your message directly to the backend system.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
