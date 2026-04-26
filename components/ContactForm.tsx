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
    <div className="min-h-screen bg-ez-white font-sans text-ez-body">
      {/* Main Content Split */}
      <div className="max-w-[1383px] mx-auto px-6 lg:px-10 py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left Column: Form */}
        <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
          <div className="mb-10">
            <h1 className="text-ez-hero font-medium text-ez-heading mb-2 leading-tight">Get in touch</h1>
            <p className="text-ez-md text-ez-secondary">Our friendly team would love to hear from you.</p>
          </div>

          {submitted ? (
            <div className="bg-ez-ash border border-ez-border p-8 text-center step-fade">
              <div className="w-12 h-12 bg-white border border-ez-border text-ez-heading flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-medium text-ez-lg text-ez-heading mb-2">Message received</h3>
              <p className="text-ez-sm text-ez-secondary mb-6">Thanks for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-ez-sm font-medium text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez outline-none"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="ez-label">First name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="ez-input ez-input--default w-full"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="ez-label">Last name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="ez-input ez-input--default w-full"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="ez-label">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="ez-input ez-input--default w-full"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="ez-label">Phone number</label>
                <div className="flex border border-ez-border focus-within:border-ez-primary transition-[border-color] duration-ez bg-white">
                  <select
                    value={form.countryCode}
                    onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                    className="appearance-none w-20 pl-3 pr-2 py-2.5 bg-ez-ash border-r border-ez-border text-ez-sm text-ez-heading outline-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23171A20' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.25rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.2em 1.2em` }}
                  >
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    <option value="IN">IN</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="flex-1 px-3 py-2.5 border-none focus:outline-none placeholder:text-ez-muted text-ez-base text-ez-heading bg-transparent"
                  />
                </div>
              </div>

              {/* User Type Selection Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Solo Creator Card */}
                <button
                  type="button"
                  onClick={() => setForm({ ...form, userType: "solo" })}
                  className={`relative flex flex-col p-5 border text-left transition-[border-color,background-color] duration-ez outline-none ${form.userType === "solo"
                    ? "border-ez-primary bg-ez-ash"
                    : "border-ez-border bg-white hover:border-ez-subtle"
                    }`}
                >
                  {form.userType === "solo" && (
                    <div className="absolute top-4 right-4 text-ez-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {form.userType !== "solo" && (
                    <div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-ez-border" />
                  )}

                  {/* Minimal Avatars */}
                  <div className="flex -space-x-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-ez-ash border border-white flex items-center justify-center text-ez-2xs font-medium text-ez-heading">1</div>
                  </div>
                  <h4 className="font-medium text-ez-heading text-ez-base mb-1">I'm a solo creator</h4>
                  <p className="text-ez-xs text-ez-secondary">Automate basic tasks and manage workflows.</p>
                </button>

                {/* Team Card */}
                <button
                  type="button"
                  onClick={() => setForm({ ...form, userType: "team" })}
                  className={`relative flex flex-col p-5 border text-left transition-[border-color,background-color] duration-ez outline-none ${form.userType === "team"
                    ? "border-ez-primary bg-ez-ash"
                    : "border-ez-border bg-white hover:border-ez-subtle"
                    }`}
                >
                  {form.userType === "team" && (
                    <div className="absolute top-4 right-4 text-ez-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {form.userType !== "team" && (
                    <div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-ez-border" />
                  )}

                  {/* Minimal Avatars */}
                  <div className="flex -space-x-1 mb-4">
                    <div className="w-8 h-8 rounded-full bg-white border border-ez-border flex items-center justify-center text-ez-2xs font-medium text-ez-heading">Z</div>
                    <div className="w-8 h-8 rounded-full bg-ez-carbon border border-white flex items-center justify-center text-ez-2xs font-medium text-white">S</div>
                    <div className="w-8 h-8 rounded-full bg-ez-ash border border-white flex items-center justify-center text-ez-2xs font-medium text-ez-heading">T</div>
                  </div>
                  <h4 className="font-medium text-ez-heading text-ez-base mb-1">I'm part of a team</h4>
                  <p className="text-ez-xs text-ez-secondary">I need multi-user business automations.</p>
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
                    className="w-4 h-4 cursor-pointer outline-none"
                    style={{ accentColor: 'var(--ez-color-primary)' }}
                  />
                </div>
                <label htmlFor="privacy" className="ml-3 text-ez-sm text-ez-secondary cursor-pointer">
                  You agree to our friendly <Link href="/privacy" className="text-ez-primary hover:text-ez-primary-hover transition-colors duration-ez">privacy policy</Link>.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="ez-btn ez-btn-primary w-full h-12 min-h-[48px] mt-2"
              >
                {isSubmitting ? (
                  <svg className="w-4 h-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.3" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                ) : (
                  "Get in touch"
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Image Placeholder */}
        {/* Flat background, no shadows, no gradients. Text relies purely on contrast. */}
        <div className="hidden lg:flex flex-1 bg-ez-carbon flex-col justify-end p-12 rounded">

          <div className="text-white">
            <h2 className="text-ez-2xl font-medium leading-normal mb-8 text-white/90">
              "Untitled UI is the perfect tool for startups to keep track of their financials. Their intuitive dashboard and reporting capabilities have saved our team hours of manual work."
            </h2>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-ez-base text-white">— Allah Lane</p>
                <p className="text-white/60 text-ez-sm mt-1">Founder, Layers.io</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="border-t border-ez-border bg-ez-ash">
        <div className="max-w-[1383px] mx-auto px-6 lg:px-10 py-14 lg:py-18 text-center">
          <h2 className="text-[40px] font-medium text-ez-heading mb-4 leading-tight">Let's get started on something great</h2>
          <p className="text-ez-md text-ez-secondary mb-10">Join over 4,000+ freelancers and teams already growing with Untitled.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="ez-btn ez-btn-primary px-8">
              Get started
            </button>
            <button className="ez-btn ez-btn-secondary px-8">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}