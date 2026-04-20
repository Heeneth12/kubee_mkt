"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-3xl mb-3">✅</div>
        <h3 className="font-bold text-slate-900 text-lg mb-2">Message received!</h3>
        <p className="text-sm text-slate-600">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  const field = (
    id: keyof FormState,
    label: string,
    type: string = "text",
    rows?: number
  ) => (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-700 mb-1.5">
        {label}
      </label>
      {rows ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          value={form[id]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-blue resize-none"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={form[id]}
          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
        />
      )}
      {errors[id] && <p className="text-xs text-red-500 mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {field("name", "Your Name")}
      {field("email", "Work Email", "email")}
      {field("company", "Company (optional)")}
      {field("message", "Message", "text", 5)}
      <button
        type="submit"
        className="w-full bg-brand-blue text-white font-bold py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
      >
        Send Message →
      </button>
    </form>
  );
}
