import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Kubee account.",
};

export default function LoginPage() {
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
          <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Sign in to Kubee</h1>
          <p className="text-sm text-slate-500">Welcome back.</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center">
          <p className="text-slate-600 text-sm mb-6">
            The Kubee app is launching soon. Join the waitlist to get early access.
          </p>
          <Link
            href="/contact"
            className="block w-full bg-brand-blue text-white font-bold py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
          >
            Join the Waitlist →
          </Link>
          <p className="text-xs text-slate-400 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-brand-blue hover:underline">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
