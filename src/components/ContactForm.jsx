import React, { useState } from 'react';
import { sendContactMessage } from '../services/api';
import confetti from 'canvas-confetti';
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  User,
  Mail,
  Phone,
  HelpCircle,
  MessageSquare,
  Sparkles
} from 'lucide-react';

const ContactForm = ({ defaultSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: defaultSubject || '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState({
    success: false,
    message: '',
    error: false
  });

  // Client-side validation function
  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Your name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email address is required';
        if (!/^\S+@\S+\.\S+$/.test(value.trim())) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^[0-9+-\s()]{7,20}$/.test(value.trim())) return 'Please enter a valid phone number';
        return '';
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all as touched and validate
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setLoading(true);
    setServerStatus({ success: false, message: '', error: false });

    try {
      const response = await sendContactMessage(formData);

      setServerStatus({
        success: true,
        message: response.message || 'Thank you! Your message has been stored and received successfully.',
        error: false
      });

      // Trigger celebratory confetti effect
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Clear form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error('Contact submit error:', err);
      setServerStatus({
        success: false,
        message: err.message || 'Unable to send message to the backend. Please check connection and try again.',
        error: true
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      id="contact-submission-form"
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0F0F12] border border-zinc-200 dark:border-zinc-800/80 shadow-xl space-y-5"
    >
      {/* Success Notification Alert */}
      {serverStatus.success && (
        <div
          id="contact-success-banner"
          className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 flex items-start gap-3 animate-fade-in"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm">Message Sent Successfully!</h4>
            <p className="text-xs text-emerald-700 dark:text-emerald-300/90 mt-0.5">{serverStatus.message}</p>
          </div>
        </div>
      )}

      {/* Error Notification Alert */}
      {serverStatus.error && (
        <div
          id="contact-error-banner"
          className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-500/40 text-red-800 dark:text-red-300 flex items-start gap-3 animate-fade-in"
        >
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm">Submission Error</h4>
            <p className="text-xs text-red-700 dark:text-red-300/90 mt-0.5">{serverStatus.message}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name Field */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
          >
            Your Full Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. John Doe"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0A0A0B] border text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none transition-all ${
                errors.name && touched.name
                  ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              }`}
            />
          </div>
          {errors.name && touched.name && (
            <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
          >
            Email Address *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. john@example.com"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0A0A0B] border text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none transition-all ${
                errors.email && touched.email
                  ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              }`}
            />
          </div>
          {errors.email && touched.email && (
            <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone Field */}
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
          >
            Phone Number *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. +91 9876543210"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0A0A0B] border text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none transition-all ${
                errors.phone && touched.phone
                  ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              }`}
            />
          </div>
          {errors.phone && touched.phone && (
            <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
          >
            Subject / Purpose *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
              <HelpCircle className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Full Stack Web Project Inquiry"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0A0A0B] border text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none transition-all ${
                errors.subject && touched.subject
                  ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              }`}
            />
          </div>
          {errors.subject && touched.subject && (
            <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
        >
          Your Message *
        </label>
        <div className="relative">
          <div className="absolute top-3.5 left-3.5 text-zinc-400 dark:text-zinc-500 pointer-events-none">
            <MessageSquare className="w-4 h-4" />
          </div>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell me about your project, timeline, or inquiries..."
            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0A0A0B] border text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none resize-y transition-all ${
              errors.message && touched.message
                ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
          ></textarea>
        </div>
        {errors.message && touched.message && (
          <p className="text-xs text-red-500 dark:text-red-400 mt-1.5 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          id="contact-submit-btn"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-102 active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending to Database...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
        <span className="text-xs text-zinc-500 ml-0 sm:ml-4 block sm:inline mt-2 sm:mt-0">
          Connected to Express API & MongoDB
        </span>
      </div>
    </form>
  );
};

export default ContactForm;
