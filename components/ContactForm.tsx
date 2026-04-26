"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  userType: "solo" | "team" | null;
  agreed: boolean;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "US",
    userType: "solo",
    agreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 mt-12">
      {/* Main Content Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left Column: Form */}
        <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
          <div className="mb-10">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3 text-gray-800">Get in touch</h1>
            <p className="text-slate-500 text-lg">Our friendly team would love to hear from you.</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Message received!</h3>
              <p className="text-slate-500 mb-6">Thanks for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">First name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Last name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone number</label>
                <div className="flex shadow-sm rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-colors bg-white overflow-hidden">
                  <div className="flex items-center border-r border-slate-300 bg-white">
                    <select
                      value={form.countryCode}
                      onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                      className="h-full py-2.5 pl-3 pr-7 bg-transparent text-slate-700 text-sm focus:outline-none appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.25rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                    >
                      <option value="US">US</option>
                      <option value="UK">UK</option>
                      <option value="IN">IN</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="flex-1 px-3.5 py-2.5 border-none focus:outline-none placeholder-slate-400 bg-transparent"
                  />
                </div>
              </div>

              {/* User Type Selection Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Solo Creator Card */}
                <button
                  type="button"
                  onClick={() => setForm({ ...form, userType: "solo" })}
                  className={`relative flex flex-col p-4 rounded-xl border text-left transition-all ${form.userType === "solo"
                    ? "border-blue-500 bg-blue-50/30 ring-1 ring-blue-500"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                >
                  {form.userType === "solo" && (
                    <div className="absolute top-4 right-4 text-blue-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {form.userType !== "solo" && (
                    <div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-slate-300" />
                  )}

                  {/* Placeholder Avatar Group */}
                  <div className="flex -space-x-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-[15px] mb-1">I'm a solo creator</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Automate basic tasks and manage workflows.</p>
                </button>

                {/* Team Card */}
                <button
                  type="button"
                  onClick={() => setForm({ ...form, userType: "team" })}
                  className={`relative flex flex-col p-4 rounded-xl border text-left transition-all ${form.userType === "team"
                    ? "border-blue-500 bg-blue-50/30 ring-1 ring-blue-500"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                >
                  {form.userType === "team" && (
                    <div className="absolute top-4 right-4 text-blue-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {form.userType !== "team" && (
                    <div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-slate-300" />
                  )}

                  {/* Placeholder Logo Group */}
                  <div className="flex -space-x-1 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-600">Z</div>
                    <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">S</div>
                    <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">S</div>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-[15px] mb-1">I'm part of a team</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">I need multi-user business automations.</p>
                </button>
              </div>

              {/* Checkbox */}
              <div className="flex items-start pt-2">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    type="checkbox"
                    required
                    checked={form.agreed}
                    onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                </div>
                <label htmlFor="privacy" className="ml-3 text-sm text-slate-600 cursor-pointer">
                  You agree to our friendly <Link href="/privacy" className="underline hover:text-slate-900">privacy policy</Link>.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-blue hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex justify-center items-center h-12 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  "Get in touch"
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Image Placeholder */}
        {/* REPLACE THIS DIV WITH YOUR NEXT/IMAGE LATER */}
        <div className="hidden lg:flex flex-1 relative bg-slate-200 rounded-xl overflow-hidden min-h-[600px] flex-col justify-end p-10">
          {/* Subtle gradient overlay to make text readable over the future image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

          <div className="relative z-20 text-white">
            <h2 className="text-2xl font-medium leading-snug mb-8">
              Untitled UI is the perfect tool for startups to keep track of their financials. Their intuitive dashboard and reporting capabilities have saved our team hours of manual work.
            </h2>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">— Allah Lane</p>
                <p className="text-white/80 text-sm">Founder, Layers.io</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-18 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Let's get started on something great</h2>
        <p className="text-slate-500 mb-8">Join over 4,000+ freelancers and teams already growing with Untitled.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="w-full sm:w-auto px-6 py-2.5 bg-brand-blue border border-transparent text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}