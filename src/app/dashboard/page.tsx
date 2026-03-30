"use client";
import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function DashboardPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-background text-on-background font-body min-h-screen pt-12">
      <main className="pt-24 pb-12 px-6 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-4">
            {t("dashboard.h1")}<span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary-fixed-dim">{t("dashboard.h2")}</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl font-body text-lg leading-relaxed">
            {t("dashboard.hd")}
          </p>
        </header>
        
        {/* Bento Grid Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Main Asset Card */}
          <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4 sm:gap-0">
                <div className="w-full">
                  <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-2 block">{t("dashboard.gvl")}</span>
                  <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-on-surface break-words">100,000,000 <span className="text-primary-container">RWA</span></h2>
                </div>
                <div className="bg-primary/5 px-4 py-2 rounded-full border border-primary/10 shrink-0">
                  <span className="text-primary font-bold font-label">+12.4% <span className="material-symbols-outlined align-middle text-sm">trending_up</span></span>
                </div>
              </div>
              {/* Chart Placeholder */}
              <div className="w-full h-48 bg-surface-container-low rounded-lg relative overflow-hidden group">
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full h-full opacity-20 bg-gradient-to-t from-primary-container to-transparent"></div>
                  <svg className="w-full h-full text-primary-container" preserveAspectRatio="none" viewBox="0 0 100 40">
                    <path d="M0,40 L0,30 Q10,25 20,28 T40,20 T60,25 T80,10 T100,5 L100,40 Z" fill="currentColor" fillOpacity="0.1"></path>
                    <path d="M0,30 Q10,25 20,28 T40,20 T60,25 T80,10 T100,5" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                </div>
                <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between text-[10px] text-outline font-label uppercase">
                    <span>{t("dashboard.ci")}</span>
                    <span>{t("dashboard.cl")}</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-outline font-label">
                    <span>Q1 2024</span>
                    <span>Q4 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="border-l-2 border-surface-variant pl-4">
                <p className="text-xs font-label text-on-surface-variant uppercase tracking-wider">{t("dashboard.tl")}</p>
                <p className="text-xl font-headline font-bold">$100.0M</p>
              </div>
              <div className="border-l-2 border-surface-variant pl-4">
                <p className="text-xs font-label text-on-surface-variant uppercase tracking-wider">{t("dashboard.yl")}</p>
                <p className="text-xl font-headline font-bold">8.2% APY</p>
              </div>
              <div className="border-l-2 border-surface-variant pl-4">
                <p className="text-xs font-label text-on-surface-variant uppercase tracking-wider">{t("dashboard.hl")}</p>
                <p className="text-xl font-headline font-bold">14,802</p>
              </div>
            </div>
          </div>
          
          {/* Mobile Preview Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-inverse-surface rounded-[2.5rem] p-3 lg:p-4 h-[560px] lg:h-[630px] w-full max-w-[280px] lg:max-w-[315px] mx-auto relative overflow-hidden shadow-2xl border-[6px] border-slate-800 shrink-0">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 lg:w-28 h-5 lg:h-6 bg-slate-800 rounded-b-2xl z-20"></div>
              <div className="bg-background h-full w-full rounded-[1.8rem] overflow-y-auto p-3 lg:p-4 flex flex-col gap-4 no-scrollbar">
                <div className="flex justify-between items-center mt-6">
                  <span className="font-headline font-black text-base text-[#ab00ff]">StemLink</span>
                  <span className="material-symbols-outlined text-lg text-on-surface">account_circle</span>
                </div>
                <div className="bg-[#ab00ff] rounded-2xl p-5 text-white shadow-[0_8px_20px_rgba(171,0,255,0.4)]">
                  <p className="text-[10px] uppercase opacity-80 mb-1">{t("dashboard.pl")}</p>
                  <h3 className="text-3xl font-bold font-headline">96,600 RWA</h3>
                  <div className="mt-5 h-12 w-full bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">query_stats</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <h4 className="text-xs font-bold text-on-surface-variant">{t("dashboard.ap")}</h4>
                    <span className="text-[9px] text-outline font-medium">{t("dashboard.sa")}</span>
                  </div>
                  {/* Mini Table inside Mobile */}
                  <div className="space-y-3">
                    {/* Item 1 */}
                    <div className="bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-black/[0.04]">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#ab00ff]/10 flex items-center justify-center text-[#ab00ff] font-bold text-[10px] shrink-0">01</div>
                          <span className="text-[11px] font-bold text-on-surface line-clamp-1">{t("dashboard.p1")}</span>
                        </div>
                        <span className="px-2 py-[2px] bg-green-50 text-green-700 text-[8px] font-bold border border-green-200 rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-1">
                        <div>
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.ths")}</p>
                          <p className="text-[10px] font-semibold">15,000,000 RWA</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thh")}</p>
                          <p className="text-[10px] font-semibold">25,000 RWA</p>
                        </div>
                        <div>
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thpr")}</p>
                          <p className="text-xs font-black text-on-surface">$1.24</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thc")}</p>
                          <p className="text-[10px] text-green-600 font-bold">+2.45% ▲</p>
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-black/[0.04]">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#ab00ff]/10 flex items-center justify-center text-[#ab00ff] font-bold text-[10px] shrink-0">02</div>
                          <span className="text-[11px] font-bold text-on-surface line-clamp-1">{t("dashboard.p2s")}</span>
                        </div>
                        <span className="px-2 py-[2px] bg-green-50 text-green-700 text-[8px] font-bold border border-green-200 rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-1">
                        <div>
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.ths")}</p>
                          <p className="text-[10px] font-semibold">10,000,000 RWA</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thh")}</p>
                          <p className="text-[10px] font-semibold">5,000 RWA</p>
                        </div>
                        <div>
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thpr")}</p>
                          <p className="text-xs font-black text-on-surface">$0.98</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thc")}</p>
                          <p className="text-[10px] text-red-600 font-bold">-1.12% ▼</p>
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-black/[0.04]">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#ab00ff]/10 flex items-center justify-center text-[#ab00ff] font-bold text-[10px] shrink-0">03</div>
                          <span className="text-[11px] font-bold text-on-surface line-clamp-1">{t("dashboard.p3")}</span>
                        </div>
                        <span className="px-2 py-[2px] bg-green-50 text-green-700 text-[8px] font-bold border border-green-200 rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-1">
                        <div>
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.ths")}</p>
                          <p className="text-[10px] font-semibold">12,000,000 RWA</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thh")}</p>
                          <p className="text-[10px] font-semibold">12,000 RWA</p>
                        </div>
                        <div>
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thpr")}</p>
                          <p className="text-xs font-black text-on-surface">$1.42</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thc")}</p>
                          <p className="text-[10px] text-green-600 font-bold">+5.12% ▲</p>
                        </div>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-black/[0.04]">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#ab00ff]/10 flex items-center justify-center text-[#ab00ff] font-bold text-[10px] shrink-0">04</div>
                          <span className="text-[11px] font-bold text-on-surface line-clamp-1">{t("dashboard.p4")}</span>
                        </div>
                        <span className="px-2 py-[2px] bg-green-50 text-green-700 text-[8px] font-bold border border-green-200 rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-1">
                        <div>
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.ths")}</p>
                          <p className="text-[10px] font-semibold">8,000,000 RWA</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thh")}</p>
                          <p className="text-[10px] font-semibold">3,500 RWA</p>
                        </div>
                        <div>
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thpr")}</p>
                          <p className="text-xs font-black text-on-surface">$1.15</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thc")}</p>
                          <p className="text-[10px] text-green-600 font-bold">+0.88% ▲</p>
                        </div>
                      </div>
                    </div>

                    {/* Item 5 */}
                    <div className="bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-black/[0.04]">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#ab00ff]/10 flex items-center justify-center text-[#ab00ff] font-bold text-[10px] shrink-0">05</div>
                          <span className="text-[11px] font-bold text-on-surface line-clamp-1">{t("dashboard.p5")}</span>
                        </div>
                        <span className="px-2 py-[2px] bg-green-50 text-green-700 text-[8px] font-bold border border-green-200 rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-1">
                        <div>
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.ths")}</p>
                          <p className="text-[10px] font-semibold">10,000,000 RWA</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thh")}</p>
                          <p className="text-[10px] font-semibold">10,000 RWA</p>
                        </div>
                        <div>
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thpr")}</p>
                          <p className="text-xs font-black text-on-surface">$0.85</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[8px] text-on-surface-variant font-medium mb-[2px] uppercase opacity-70">{t("dashboard.thc")}</p>
                          <p className="text-[10px] text-red-600 font-bold">-0.34% ▼</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-high p-4 rounded-xl">
              <p className="text-xs text-on-surface-variant font-label italic">{t("dashboard.q")}</p>
            </div>
          </div>
        </div>
        
        {/* Partner Network Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h3 className="font-headline text-3xl font-bold text-on-surface">{t("dashboard.ap")}</h3>
              <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest mt-1">{t("dashboard.ps")}</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-surface-container-high px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-variant transition-colors">{t("dashboard.be")}</button>
              <button className="bg-primary px-4 py-2 rounded-lg text-white text-sm font-medium hover:bg-on-primary-fixed-variant transition-colors">{t("dashboard.ba")}</button>
            </div>
          </div>
          <div className="overflow-x-auto bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
            <table className="w-full min-w-max text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="border-b border-surface-container">
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline">{t("dashboard.thp")}</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline">{t("dashboard.ths")}</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline">{t("dashboard.thpr")}</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline">{t("dashboard.thc")}</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline">{t("dashboard.thh")}</th>
                  <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-outline">{t("dashboard.thst")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">01</div><span className="font-bold text-on-surface">{t("dashboard.p1")}</span></div></td>
                  <td className="px-6 py-4 font-label text-sm text-on-surface-variant">15,000,000 RWA</td>
                  <td className="px-6 py-4 text-sm font-bold">$1.24</td>
                  <td className="px-6 py-4 text-sm"><span className="text-green-600 font-bold">+2.45% ▲</span></td>
                  <td className="px-6 py-4 text-sm font-medium">25,000 RWA</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span></td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">02</div><span className="font-bold text-on-surface">{t("dashboard.p2")}</span></div></td>
                  <td className="px-6 py-4 font-label text-sm text-on-surface-variant">10,000,000 RWA</td>
                  <td className="px-6 py-4 text-sm font-bold">$0.98</td>
                  <td className="px-6 py-4 text-sm"><span className="text-red-600 font-bold">-1.12% ▼</span></td>
                  <td className="px-6 py-4 text-sm font-medium">5,000 RWA</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span></td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">03</div><span className="font-bold text-on-surface">{t("dashboard.p3")}</span></div></td>
                  <td className="px-6 py-4 font-label text-sm text-on-surface-variant">12,000,000 RWA</td>
                  <td className="px-6 py-4 text-sm font-bold">$1.42</td>
                  <td className="px-6 py-4 text-sm"><span className="text-green-600 font-bold">+5.12% ▲</span></td>
                  <td className="px-6 py-4 text-sm font-medium">12,000 RWA</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span></td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">04</div><span className="font-bold text-on-surface">{t("dashboard.p4")}</span></div></td>
                  <td className="px-6 py-4 font-label text-sm text-on-surface-variant">8,000,000 RWA</td>
                  <td className="px-6 py-4 text-sm font-bold">$1.15</td>
                  <td className="px-6 py-4 text-sm"><span className="text-green-600 font-bold">+0.88% ▲</span></td>
                  <td className="px-6 py-4 text-sm font-medium">3,500 RWA</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span></td>
                </tr>
                {/* Row 5 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">05</div><span className="font-bold text-on-surface">{t("dashboard.p5")}</span></div></td>
                  <td className="px-6 py-4 font-label text-sm text-on-surface-variant">10,000,000 RWA</td>
                  <td className="px-6 py-4 text-sm font-bold">$0.85</td>
                  <td className="px-6 py-4 text-sm"><span className="text-red-600 font-bold">-0.34% ▼</span></td>
                  <td className="px-6 py-4 text-sm font-medium">10,000 RWA</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span></td>
                </tr>
                {/* Row 6 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">06</div><span className="font-bold text-on-surface">{t("dashboard.p6")}</span></div></td>
                  <td className="px-6 py-4 font-label text-sm text-on-surface-variant">7,500,000 RWA</td>
                  <td className="px-6 py-4 text-sm font-bold">$1.02</td>
                  <td className="px-6 py-4 text-sm"><span className="text-green-600 font-bold">+1.20% ▲</span></td>
                  <td className="px-6 py-4 text-sm font-medium">2,200 RWA</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span></td>
                </tr>
                {/* Row 7 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">07</div><span className="font-bold text-on-surface">{t("dashboard.p7")}</span></div></td>
                  <td className="px-6 py-4 font-label text-sm text-on-surface-variant">13,000,000 RWA</td>
                  <td className="px-6 py-4 text-sm font-bold">$1.33</td>
                  <td className="px-6 py-4 text-sm"><span className="text-green-600 font-bold">+3.75% ▲</span></td>
                  <td className="px-6 py-4 text-sm font-medium">7,800 RWA</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span></td>
                </tr>
                {/* Row 8 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">08</div><span className="font-bold text-on-surface">{t("dashboard.p8")}</span></div></td>
                  <td className="px-6 py-4 font-label text-sm text-on-surface-variant">6,500,000 RWA</td>
                  <td className="px-6 py-4 text-sm font-bold">$1.08</td>
                  <td className="px-6 py-4 text-sm"><span className="text-red-600 font-bold">-2.10% ▼</span></td>
                  <td className="px-6 py-4 text-sm font-medium">1,500 RWA</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span></td>
                </tr>
                {/* Row 9 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">09</div><span className="font-bold text-on-surface">{t("dashboard.p9")}</span></div></td>
                  <td className="px-6 py-4 font-label text-sm text-on-surface-variant">11,000,000 RWA</td>
                  <td className="px-6 py-4 text-sm font-bold">$1.50</td>
                  <td className="px-6 py-4 text-sm"><span className="text-green-600 font-bold">+6.42% ▲</span></td>
                  <td className="px-6 py-4 text-sm font-medium">18,400 RWA</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full whitespace-nowrap">{t("dashboard.sa_st")}</span></td>
                </tr>
                {/* Row 10 */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">10</div><span className="font-bold text-on-surface">{t("dashboard.p10")}</span></div></td>
                  <td className="px-6 py-4 font-label text-sm text-on-surface-variant">7,000,000 RWA</td>
                  <td className="px-6 py-4 text-sm font-bold">$1.22</td>
                  <td className="px-6 py-4 text-sm"><span className="text-green-600 font-bold">+0.15% ▲</span></td>
                  <td className="px-6 py-4 text-sm font-medium">9,200 RWA</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full">{t("dashboard.sa_st")}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Informational Cards (Editorial Feel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl transition-transform group-hover:scale-105 duration-500"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-80 object-cover rounded-xl shadow-lg relative z-10 brightness-90 contrast-110" alt="futuristic biotech laboratory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeVGMYbJrwIyCpMLCL2HrCp4feSFNjw44YkkjaVasTq5HJJtieeyO7ovadnjS6Zie4YZy2s7Ltxv-JXqLyJi882ED6utynKwlFE3P1D8CTdF9ZamTfVeKS-kNtzpBm-GNWsc8SR1kUuMjpTFl52BqCeiw68mdme8-lZ0dO1l7OOlwN8q-fQM9QX19Zp7wFdVgPHaywNXzn-vinQ7q0-e8frT0QaUWfzlabStWi5fsE_EcZauTGtab_BEFuTj1ieQKIe4G1rM-r2nMu"/>
          </div>
          <div>
            <h4 className="font-headline text-2xl font-bold mb-4">{t("dashboard.it")}</h4>
            <p className="text-on-surface-variant leading-relaxed font-body mb-6">
              {t("dashboard.id")}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">verified</span>
                <div>
                  <p className="font-bold text-sm">{t("dashboard.if1t")}</p>
                  <p className="text-xs text-on-surface-variant">{t("dashboard.if1d")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">hub</span>
                <div>
                  <p className="font-bold text-sm">{t("dashboard.if2t")}</p>
                  <p className="text-xs text-on-surface-variant">{t("dashboard.if2d")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
