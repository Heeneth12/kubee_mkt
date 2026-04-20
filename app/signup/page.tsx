import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your free Kubee account. No credit card required.",
};

export default function SignupPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-brand-light px-4 py-20">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center font-extrabold text-sm text-white">
              K
            </div>
            <span className="font-bold text-xl text-slate-900">Kubee</span>
          </Link>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Create your free account</h1>
          <p className="text-sm text-slate-500">No credit card required. Free forever.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center">
          <p className="text-slate-600 text-sm mb-6">
            The Kubee app is launching soon. Enter your email to join the waitlist and get early access.
          </p>
          <Link
            href="/contact"
            className="block w-full bg-brand-blue text-white font-bold py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
          >
            Join the Waitlist →
          </Link>
          <p className="text-xs text-slate-400 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-brand-blue hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
