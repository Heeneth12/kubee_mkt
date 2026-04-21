"use client";

import React from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Decorational Geometric Shapes
────────────────────────────────────────────── */
function BackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Hollow Square */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[2%] w-16 h-24 border border-white/20 transform -skew-y-12"
      />

      {/* Top Left Light Blue Block */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[35%] left-[8%] w-12 h-20 bg-[#60A5FA] opacity-80 transform -skew-y-12"
      />

      {/* Bottom Left Yellow Block */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[10%] left-[2%] w-24 h-24 bg-[#FDE047] transform -skew-y-12"
      />

      {/* Right Yellow Small Block */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] right-[6%] w-10 h-14 bg-[#FDE047] transform -skew-y-12"
      />

      {/* Right Hollow Square */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -5, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[40%] right-[1%] w-20 h-28 border border-white/20 transform -skew-y-12"
      />

      {/* Bottom Right Light Blue Block */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[20%] right-[3%] w-20 h-24 bg-[#60A5FA] opacity-80 transform -skew-y-12"
      />
    </div>
  );
}


/* ─────────────────────────────────────────────
   Line Chart SVG Mock
────────────────────────────────────────────── */
function DashboardChart() {
  return (
    <div className="relative w-full h-36 mt-6 border-l border-b border-slate-200 pb-2 pl-2">
      {/* Y-axis labels */}
      <div className="absolute -left-6 top-0 text-[10px] text-slate-400">30</div>
      <div className="absolute -left-6 top-[33%] text-[10px] text-slate-400">20</div>
      <div className="absolute -left-6 top-[66%] text-[10px] text-slate-400">10</div>
      <div className="absolute -left-4 bottom-0 text-[10px] text-slate-400">0</div>

      {/* X-axis labels */}
      <div className="absolute -bottom-6 left-2 w-full flex justify-between text-[10px] text-slate-400 pr-4">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>

      <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid lines */}
        <line x1="0" y1="33" x2="400" y2="33" stroke="#f1f5f9" strokeWidth="1" />
        <line x1="0" y1="66" x2="400" y2="66" stroke="#f1f5f9" strokeWidth="1" />
        
        {/* Green Line */}
        <path
          d="M 0 80 Q 100 95 200 85 T 400 90"
          fill="none"
          stroke="#4ADE80"
          strokeWidth="2"
        />
        {/* Light Blue Wave Background */}
        <path
          d="M 0 50 C 150 50 200 65 280 15 C 320 -5 360 10 400 10 L 400 100 L 0 100 Z"
          fill="#EEF2FF"
          opacity="0.6"
        />
        {/* Dark Blue Line */}
        <path
          d="M 0 50 C 150 50 200 65 280 15 C 320 -5 360 10 400 10"
          fill="none"
          stroke="#2548E6"
          strokeWidth="2.5"
        />
        {/* Medium Blue Line */}
        <path
          d="M 0 65 C 100 70 150 75 250 55 C 320 40 380 40 400 40"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Dashboard Mockup
────────────────────────────────────────────── */
function DashboardMockup() {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-5xl mx-auto mt-36"
    >
      
      {/* Outer Glass Layer: Frosted, spread out, catching the background light */}
      <div className="absolute -left-16 -right-16 -top-16 bottom-0 bg-linear-to-br from-white/10 to-white/0 rounded-t-3xl backdrop-blur-md border border-white/20 z-0" />
      
      {/* Inner Glass Layer: Slightly more opaque, tighter blur, strong edge reflection */}
      <div className="absolute -left-8 -right-8 -top-8 bottom-0 bg-linear-to-b from-white/20 to-white/5 rounded-t-3xl backdrop-blur-lg border border-white/30 z-0" />

      {/* Main White Window */}
      <div className="relative z-10 bg-white rounded-t-xl overflow-visible text-slate-800">
        
        {/* Window Controls */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
        </div>

        {/* Dashboard Header */}
        <div className="flex items-center px-8 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2 mr-12">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#2548E6]">
              <path d="M12 2L2 22H6.5L12 11L17.5 22H22L12 2Z" fill="currentColor" />
            </svg>
            <span className="font-bold text-lg tracking-tight">Avenue</span>
          </div>
          
          <div className="flex gap-8 text-sm font-semibold text-slate-500">
            <span className="text-[#2548E6] border-b-[3px] border-[#2548E6] pb-5 -mb-5 relative top-[1px]">Dashboard</span>
            <span className="hover:text-slate-800 cursor-pointer transition-colors">Teams</span>
            <span className="hover:text-slate-800 cursor-pointer transition-colors">Data sources</span>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="w-8 h-2 rounded-full bg-slate-300" />
            </div>
            {/* Black Placeholder */}
            <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-100 shadow-sm" />
          </div>
        </div>

        {/* Dashboard Body Grid */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          
          <div className="grid grid-cols-12 gap-8">
            
            {/* Left Column: Statistics */}
            <div className="col-span-12 md:col-span-7">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800">Statistics</h3>
                <div className="flex gap-2">
                  <span className="w-12 h-3 bg-slate-200 rounded-full" />
                  <span className="w-6 h-3 bg-slate-800 rounded-full" />
                </div>
              </div>
              
              <div className="flex gap-6">
                {/* Stat Numbers */}
                <div className="flex flex-col justify-between py-6 gap-4 text-sm font-medium text-slate-500">
                  <div className="flex items-center justify-between w-20">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-400 rounded-full"/> Open</span>
                    <span className="font-bold text-slate-800 text-base">25</span>
                  </div>
                  <div className="flex items-center justify-between w-20">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-700 rounded-full"/> Completed</span>
                    <span className="font-bold text-slate-800 text-base">22</span>
                  </div>
                  <div className="flex items-center justify-between w-20">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full"/> Active</span>
                    <span className="font-bold text-slate-800 text-base">3</span>
                  </div>
                </div>
                {/* Chart Area */}
                <div className="flex-1">
                  <DashboardChart />
                </div>
              </div>
            </div>

            {/* Right Column: Signal Templates */}
            <div className="col-span-12 md:col-span-5 relative">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800">Signal templates</h3>
                <div className="flex gap-1">
                   <span className="w-3 h-3 bg-slate-200 rounded-sm" />
                   <span className="w-3 h-3 bg-slate-200 rounded-sm" />
                </div>
              </div>

              <div className="flex gap-4">
                {/* Card 1 */}
                <div className="flex-1 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-lg p-5 transition-transform hover:-translate-y-1 duration-300">
                  <h4 className="font-bold text-xs mb-3">Customer churn risk</h4>
                  <div className="space-y-2 mb-4">
                    <div className="w-full h-1.5 bg-slate-200 rounded-full" />
                    <div className="w-4/5 h-1.5 bg-slate-200 rounded-full" />
                    <div className="w-3/4 h-1.5 bg-slate-200 rounded-full" />
                  </div>
                  <div className="w-10 h-1.5 bg-slate-800 rounded-full mt-6" />
                </div>
                {/* Card 2 */}
                <div className="flex-1 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-lg p-5 transition-transform hover:-translate-y-1 duration-300">
                  <h4 className="font-bold text-xs mb-3">Warehouse stockout</h4>
                  <div className="space-y-2 mb-4">
                    <div className="w-full h-1.5 bg-slate-200 rounded-full" />
                    <div className="w-4/5 h-1.5 bg-slate-200 rounded-full" />
                    <div className="w-5/6 h-1.5 bg-slate-200 rounded-full" />
                  </div>
                  <div className="w-10 h-1.5 bg-slate-800 rounded-full mt-6" />
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Grid: Signals & Teams */}
          <div className="grid grid-cols-12 gap-8 mt-12 pb-16">
            
            {/* Signals List */}
            <div className="col-span-12 md:col-span-7">
              <h3 className="font-bold text-slate-800 mb-4">Signals</h3>
              
              <div className="flex items-center gap-3 mb-6 bg-slate-50 p-2 rounded-lg">
                <div className="bg-white px-4 py-2 border border-slate-100 rounded text-xs text-slate-400 w-32 flex justify-between">
                  <span className="w-16 h-1.5 bg-slate-200 rounded-full" />
                </div>
                <div className="bg-white px-4 py-2 border border-slate-100 rounded text-xs text-slate-400 w-24 flex justify-between">
                  <span className="w-10 h-1.5 bg-slate-200 rounded-full" />
                </div>
                <div className="bg-white px-4 py-2 border border-slate-100 rounded text-xs text-slate-400 w-24 flex justify-between">
                  <span className="w-10 h-1.5 bg-slate-200 rounded-full" />
                </div>
                <div className="ml-auto w-10 h-6 bg-[#2548E6] rounded flex items-center justify-center shadow-sm">
                  <span className="w-4 h-0.5 bg-white rounded-full" />
                </div>
              </div>

              {/* List Items */}
              <div className="space-y-4">
                {[
                  { icon: 'bg-blue-100 text-blue-600', char: 'A' },
                  { icon: 'bg-yellow-100 text-yellow-600', char: '!' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 pb-4 border-b border-slate-50">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${item.icon}`}>
                      {item.char}
                    </div>
                    <div className="w-40 h-2 bg-slate-200 rounded-full" />
                    <div className="ml-auto flex items-center gap-4">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full" />
                      <div className="w-8 h-1.5 bg-green-200 rounded-full" />
                      <div className="w-3 h-3 bg-slate-200 rounded-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teams List */}
            <div className="col-span-12 md:col-span-5">
               <h3 className="font-bold text-slate-800 mb-4">Teams</h3>
               
               <div className="flex items-center gap-3 mb-6 bg-slate-50 p-2 rounded-lg">
                <div className="bg-white px-4 py-2 border border-slate-100 rounded text-xs text-slate-400 w-32 flex justify-between">
                  <span className="w-16 h-1.5 bg-slate-200 rounded-full" />
                </div>
                <div className="bg-white px-4 py-2 border border-slate-100 rounded text-xs text-slate-400 w-24 flex justify-between">
                  <span className="w-10 h-1.5 bg-slate-200 rounded-full" />
                </div>
                <div className="ml-auto w-10 h-6 bg-[#2548E6] rounded flex items-center justify-center shadow-sm">
                  <span className="w-4 h-0.5 bg-white rounded-full" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: 'bg-green-100' },
                  { icon: 'bg-blue-100' },
                  { icon: 'bg-indigo-100' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 pb-4 border-b border-slate-50">
                    <div className={`w-8 h-8 rounded-lg ${item.icon}`} />
                    <div className="w-24 h-2 bg-slate-200 rounded-full" />
                    <div className="ml-auto flex items-center gap-2">
                       <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white shadow-sm" />
                          <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white shadow-sm" />
                       </div>
                       <div className="w-3 h-3 bg-slate-200 rounded-sm ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
/* ─────────────────────────────────────────────
   Main Page Wrapper
────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section className="relative min-h-[140vh] bg-white font-sans">
      
      <div className="absolute top-0 left-0 right-0  md:h-180 bg-brand-blue" />

      {/* 3D Floating Shapes (Contained within the blue area logic via absolute positioning) */}
      <div className="absolute top-0 left-0 w-full h-150 z-0 overflow-hidden pointer-events-none">
        <BackgroundShapes/>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 mb-12 text-center text-white">
        <h1 className="text-5xl md:text-[64px] font-bold tracking-tight leading-[1.1] mb-6">
          Modern inventory software <br /> for Indian businesse 
        </h1>
        <p className="text-sm md:text-md text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed">
          Real-time tracking, AI-powered forecasting, and automated reordering. <br className="hidden md:block" /> 
          Built to scale your operations effortlessly.
        </p>
      </div>

      {/* Mockup Container bridging Blue and White backgrounds */}
      <div className="relative z-10 px-4 pb-20 mt-10">
        <DashboardMockup/>
      </div>
      
    </section>
  );
}