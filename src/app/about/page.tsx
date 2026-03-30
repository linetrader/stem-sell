"use client";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>


      <main className="pt-24">
        {/* Hero: The Architectural Vision */}
        <section className="relative min-h-[716px] flex items-center px-12 py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover opacity-20" alt="Modern laboratory with clean glass surfaces, soft blue and teal lighting, reflecting high-tech architectural biotech environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHHul4yPy_urJT73dgXikHJU9owWR6f1XYv3EHieBicHwLjxjycvaojKDFh2Lx5pDoGVqp8G_bPeVFfIUdPN1WcZiJvHLDHF-SAFP_3sFbvTZ7Tw5KAaggs2MBG4n3xY7_lQdM0fdAsfUuqqr99tCoNyH9xt8oH1Qm0_47IFfx05TEUaypkt-cYz3hRNPWyxtDMmj3nshklpsLXI24WzQaEQC2CpEEMqwqnf2awVrCEF6i4jsdXEkEGlqDaly9TM0r1Asu-mLii3pW"/>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-container/20 text-primary font-label font-bold text-xs tracking-widest uppercase mb-6">
              {t("about.hero_badge")}
            </span>
            <h1 className="text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
              {t("about.hero_title1")}<span className="text-primary italic">{t("about.hero_title2")}</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
              {t("about.hero_desc")}
            </p>
          </div>
        </section>

        {/* Leadership: Clinical Excellence */}
        <section className="px-12 py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-bold tracking-tighter mb-6">{t("about.vis_title")}</h2>
                <p className="text-on-surface-variant text-lg">{t("about.vis_desc")}</p>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-4xl text-outline-variant">science</span>
                <span className="material-symbols-outlined text-4xl text-primary-container">clinical_notes</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Expert 1 */}
              <div className="group flex flex-col md:flex-row gap-8 items-start p-10 bg-white rounded-2xl shadow-lg shadow-slate-200/40 border-t-8 border-primary hover:border-primary-container transition-all duration-300 hover:shadow-2xl">
                <div className="shrink-0 w-full md:w-48 lg:w-40 xl:w-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-64 md:h-64 object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-[1.02]" alt="Kim Mi-jeong Profile" src="/images/expert1.jpg"/>
                </div>
                
                <div className="flex-1">
                  <span className="text-primary group-hover:text-primary-container transition-colors duration-300 font-bold text-xs tracking-widest uppercase mb-2 block">{t("home.exp1_role")}</span>
                  <h3 className="text-3xl font-bold mb-4 text-slate-900">{t("home.exp1_name")} <span className="text-lg font-medium text-slate-500 ml-1">{t("home.exp1_name_kr")}</span></h3>
                  
                  <p className="text-slate-700 font-bold mb-5 leading-relaxed">
                    {t("home.exp1_spec_title")}
                  </p>
                  
                  <ul className="space-y-2 text-sm text-slate-600 font-medium mb-6">
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp1_spec1")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp1_spec2")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp1_spec3")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp1_spec4")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp1_spec5")}</span></li>
                    <li className="flex items-start pl-4 text-slate-500"><span className="leading-snug">{t("home.exp1_spec6")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp1_spec7")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp1_spec8")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp1_spec9")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp1_spec10")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp1_spec11")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp1_spec12")}</span></li>
                  </ul>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-primary group-hover:text-primary-container transition-colors duration-300 italic font-medium text-[13px] leading-relaxed" dangerouslySetInnerHTML={{__html: t("home.exp1_quote")}}></p>
                  </div>
                </div>
              </div>

              {/* Expert 2 */}
              <div className="group flex flex-col md:flex-row gap-8 items-start p-10 bg-white rounded-2xl shadow-lg shadow-slate-200/40 border-t-8 border-primary hover:border-primary-container transition-all duration-300 hover:shadow-2xl">
                <div className="shrink-0 w-full md:w-48 lg:w-40 xl:w-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-64 md:h-64 object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-[1.02]" alt="Joo Gwang-seong Profile" src="/images/expert2.jpg"/>
                </div>
                
                <div className="flex-1">
                  <span className="text-primary group-hover:text-primary-container transition-colors duration-300 font-bold text-xs tracking-widest uppercase mb-2 block">{t("home.exp2_role")}</span>
                  <h3 className="text-3xl font-bold mb-4 text-slate-900">{t("home.exp2_name")} <span className="text-lg font-medium text-slate-500 ml-1">{t("home.exp2_name_kr")}</span></h3>
                  
                  <p className="text-slate-700 font-bold mb-5 leading-relaxed">
                    {t("home.exp2_spec_title")}
                  </p>
                  
                  <ul className="space-y-2 text-sm text-slate-600 font-medium mb-6">
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp2_spec1")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp2_spec2")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp2_spec3")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp2_spec4")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp2_spec5")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp2_spec6")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp2_spec7")}</span></li>
                    <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary-container transition-colors duration-300 mt-1.5 shrink-0"></span><span className="leading-snug">{t("home.exp2_spec8")}</span></li>
                    <li className="flex items-start pl-4 gap-2 text-[13px] text-slate-500"><span className="mt-0">—</span><span className="leading-snug">{t("home.exp2_spec9")}</span></li>
                    <li className="flex items-start pl-4 gap-2 text-[13px] text-slate-500"><span className="mt-0">—</span><span className="leading-snug">{t("home.exp2_spec10")}</span></li>
                  </ul>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-primary group-hover:text-primary-container transition-colors duration-300 italic font-medium text-[13px] leading-relaxed" dangerouslySetInnerHTML={{__html: t("home.exp2_quote")}}></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee System: Bento Layout */}
        <section className="px-12 py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold tracking-tighter mb-4">{t("about.guar_title")}</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">{t("about.guar_desc")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[240px]">
              {/* Bento Card 1: Genetic Analysis */}
              <div className="md:col-span-2 md:row-span-2 bg-surface-container-low rounded-xl p-8 md:p-10 flex flex-col justify-start md:justify-end relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt="Abstract DNA sequence data visualization on a screen with teal digital highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTMM0QgTNbJLvYW-_6FINqzP9Gd71amsqDmTIthqWsBaBftGsyvoCHMGUoCqR966g_g_I9-j4ARNMgZ7-h5-r-0sGANhtqwW-cXB-WVqvMBB9O7GUMncDaSmEmRP_UVysqzxpOaxwwAHdWSreR5Cadj8I3g89lgbJDXfRkWCO6_-70a5KRxexI59goBifzcrwDeyDKNC-1sgwvG5w0cJTT6fvfpYHBNeaPKuda_v0ng5HXlyKvc2Gzih316gemBflaKkhtitRvgRuE"/>
                </div>
                <span className="material-symbols-outlined text-primary mb-6 icon-bento-1">genetics</span>
                <h3 className="text-3xl font-bold mb-4">{t("about.card1_title")}</h3>
                <p className="text-on-surface-variant max-w-md">{t("about.card1_desc")}</p>
              </div>
              
              {/* Bento Card 2: Improvement Guarantee */}
              <div className="bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-start gap-4 md:gap-0 md:justify-between">
                <span className="material-symbols-outlined mb-2 md:mb-6 icon-bento-2">verified_user</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">{t("about.card2_title")}</h4>
                  <p className="text-on-primary/80 text-sm">{t("about.card2_desc")}</p>
                </div>
              </div>
              
              {/* Bento Card 3: Refund Policy */}
              <div className="bg-surface-container-highest rounded-xl p-8 flex flex-col justify-start gap-4 md:gap-0 md:justify-between">
                <span className="material-symbols-outlined text-primary mb-2 md:mb-6 icon-bento-2">currency_exchange</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">{t("about.card3_title")}</h4>
                  <p className="text-on-surface-variant text-sm">{t("about.card3_desc")}</p>
                </div>
              </div>
              
              {/* Bento Card 4: Monitoring */}
              <div className="md:col-span-3 bg-teal-900 text-white rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden relative">
                <div className="max-w-xl relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{t("about.card4_title")}</h3>
                  <p className="text-teal-100/70">{t("about.card4_desc")}</p>
                </div>
                <span className="material-symbols-outlined icon-bento-3 text-primary-container/20 absolute -right-4 -bottom-4 md:right-10 md:top-1/2 md:-translate-y-1/2 md:bottom-auto">vital_signs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Chart */}
        <section className="px-12 py-32 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-label font-bold text-xs tracking-widest uppercase mb-6">
                Organization
              </span>
              <h2 className="text-5xl font-bold tracking-tighter mb-6 text-slate-900 dark:text-white">{t("about.org_title")}</h2>
              
              {/* Central Identity */}
              <div className="relative inline-flex items-center justify-center mt-12 mb-8 group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-teal-600 to-teal-900 p-[3px] rounded-full shadow-2xl">
                  <div className="bg-white dark:bg-slate-950 px-12 py-6 rounded-full flex items-center gap-4">
                    <span className="material-symbols-outlined text-4xl text-teal-600">hub</span>
                    <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500 dark:from-teal-400 dark:to-teal-200 tracking-tight">
                      {t("about.org_center")}
                    </h3>
                  </div>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-lg mt-6">{t("about.org_footer")}</p>
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { t_key: "org_dubai_t", items: ["org_dubai_1", "org_dubai_2"], icon: "public" },
                { t_key: "org_med_t", items: ["org_med_1", "org_med_2", "org_med_3"], icon: "local_hospital" },
                { t_key: "org_mgmt_t", items: ["org_mgmt_1", "org_mgmt_2", "org_mgmt_3"], icon: "corporate_fare" },
                { t_key: "org_tech_t", items: ["org_tech_1", "org_tech_2", "org_tech_3"], icon: "science" },
                { t_key: "org_mfg_t", items: ["org_mfg_1", "org_mfg_2", "org_mfg_3"], icon: "factory" },
                { t_key: "org_gene_t", items: ["org_gene_1", "org_gene_2", "org_gene_3"], icon: "biotech" },
                { t_key: "org_part_t", items: ["org_part_1", "org_part_2", "org_part_3"], icon: "handshake" },
                { t_key: "org_legal_t", items: ["org_legal_1", "org_legal_2", "org_legal_3"], icon: "gavel" },
              ].map((dept, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 to-teal-300 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                      <span className="material-symbols-outlined">{dept.icon}</span>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">{t(`about.${dept.t_key}`)}</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    {dept.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400/50 group-hover:bg-teal-500 transition-colors"></span>
                        {t(`about.${item}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborative Partner Section */}
        <section className="px-12 py-32 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            {/* Main Wrapper matching the image border/shadow style */}
            <div className="bg-white shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200 flex flex-col">
              
              {/* Dark Header */}
              <div className="bg-[#0f172a] px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 border-b-[5px] border-primary">
                <h2 className="text-3xl font-extrabold text-white tracking-tight">{t("about.part_title")}</h2>
                <div className="h-6 w-px bg-slate-700 hidden sm:block"></div>
                <p className="text-teal-400 font-medium tracking-wide">{t("about.part_subtitle")}</p>
              </div>

              {/* 3-Column Info Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 bg-white">
                
                {/* 1. Factory Image */}
                <div className="relative h-64 lg:h-auto border-b lg:border-b-0 lg:border-r border-slate-200 bg-teal-800 flex flex-col justify-center items-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/factory.png" alt="인성제약(주) 음성 공장" className="w-full h-full object-cover" />
                </div>

                {/* 2. Specs Table */}
                <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200 py-6 px-4 bg-slate-50/50">
                  <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] flex-1 gap-y-1.5 min-w-0">
                    {/* Row 1 */}
                    <div className="bg-teal-700 text-white font-bold flex items-center justify-center py-2.5 px-2 text-[11px] sm:text-[13px] text-center tracking-wider leading-snug">{t("about.part_est_label")}</div>
                    <div className="bg-white flex items-center px-4 py-2.5 text-[13px] sm:text-sm font-medium text-slate-800 border border-slate-100 shadow-sm leading-snug break-words min-w-0">{t("about.part_est_val")}</div>
                    
                    {/* Row 2 */}
                    <div className="bg-teal-700 text-white font-bold flex items-center justify-center py-2.5 px-2 text-[11px] sm:text-[13px] text-center tracking-wider leading-snug">{t("about.part_emp_label")}</div>
                    <div className="bg-white flex items-center px-4 py-2.5 text-[13px] sm:text-sm font-medium text-slate-800 border border-slate-100 shadow-sm leading-snug break-words min-w-0">{t("about.part_emp_val")}</div>
                    
                    {/* Row 3 */}
                    <div className="bg-teal-700 text-white font-bold flex items-center justify-center py-2.5 px-2 text-[11px] sm:text-[13px] text-center tracking-wider leading-snug">{t("about.part_biz_label")}</div>
                    <div className="bg-white flex items-center px-4 py-2.5 text-[13px] sm:text-sm font-medium text-slate-800 border border-slate-100 shadow-sm leading-snug break-words min-w-0">{t("about.part_biz_val")}</div>
                    
                    {/* Row 4 */}
                    <div className="bg-teal-700 text-white font-bold flex items-center justify-center py-2.5 px-2 text-[11px] sm:text-[13px] text-center tracking-wider leading-snug">{t("about.part_cert_label")}</div>
                    <div className="bg-white flex items-center px-4 py-2.5 text-[12px] sm:text-[13px] font-medium text-slate-800 border border-slate-100 shadow-sm leading-snug break-words min-w-0">{t("about.part_cert_val")}</div>
                    
                    {/* Row 5 */}
                    <div className="bg-teal-700 text-white font-bold flex items-center justify-center py-2.5 px-2 text-[11px] sm:text-[13px] text-center tracking-wider leading-snug">{t("about.part_url_label")}</div>
                    <div className="bg-white flex items-center px-4 py-2.5 text-[13px] sm:text-sm font-medium text-slate-800 border border-slate-100 shadow-sm leading-snug break-words min-w-0 overflow-hidden"><a href="http://www.ispharm.co.kr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block w-full truncate">{t("about.part_url_val")}</a></div>
                  </div>
                </div>

                {/* 3. Highlights */}
                <div className="bg-[#0f172a] p-8 flex flex-col justify-center">
                  <h3 className="text-teal-400 font-bold text-lg mb-4 pb-3 border-b border-slate-700">{t("about.part_high_title")}</h3>
                  <ul className="space-y-4 text-slate-200">
                    <li className="flex gap-2.5 items-start">
                      <span className="text-teal-400 font-bold tracking-wider mt-0.5 text-xs">01</span>
                      <span className="text-[13px] font-medium leading-relaxed">{t("about.part_high_1")}</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span className="text-teal-400 font-bold tracking-wider mt-0.5 text-xs">02</span>
                      <span className="text-[13px] font-medium leading-relaxed">{t("about.part_high_2")}</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span className="text-teal-400 font-bold tracking-wider mt-0.5 text-xs">03</span>
                      <span className="text-[13px] font-medium leading-relaxed">{t("about.part_high_3")}</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span className="text-teal-400 font-bold tracking-wider mt-0.5 text-xs">04</span>
                      <span className="text-[13px] font-medium leading-relaxed">{t("about.part_high_4")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Clients Section Header */}
              <div className="bg-teal-600 px-8 py-2.5 text-center border-t border-teal-700">
                <h3 className="text-white font-bold text-base">{t("about.part_client_title")}</h3>
              </div>
              
              {/* Logos Grid */}
              <div className="p-4 sm:p-8 border-t border-slate-200">
                <div className="w-full flex justify-center items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partners_grid.png" alt="주요 고객사 로고" className="w-full h-auto max-w-5xl object-contain border border-slate-200 shadow-sm" />
                </div>
              </div>

              {/* Deep Footer */}
              <div className="bg-[#0f172a] px-8 py-3.5 text-center border-t-[3px] border-primary">
                <p className="text-primary font-bold text-[13px] tracking-wide">{t("about.part_footer")}</p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact & Consultation */}
        <section className="px-12 py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
            <div className="flex-1">
              <h2 className="text-5xl font-bold tracking-tighter mb-8">{t("about.net_title")}</h2>
              <p className="text-on-surface-variant mb-12">{t("about.net_desc")}</p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Seoul HQ</h4>
                    <p className="text-on-surface-variant text-sm">123 Bio-Valley Road, Gangnam-gu, Seoul, KR</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">UAE Royal Care Hub</h4>
                    <p className="text-on-surface-variant text-sm">Innovation District, Sheikh Zayed Rd, Dubai, UAE</p>
                  </div>
                </div>
                <div className="mt-12 h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-inner">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt="Modern city skyline reflecting on glass buildings, clean and technological atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7rwNYD_TFfyb9ihnKMiwlCw2EwiGiI7hoiGdtjBG580lbv4Dz5boxt3wnmPl6M88q6_8N27Uder8uW6ZmPXmP7a1sCNbIYegu82hkxv9SSCa8Bkg2g5I5qJRDyC0ywmlc2kQuaI9E6ITCbLYHvDwZVgcuwlxxfExwC3iH9Ce043WJQVxlKwLYGvNqXQFWsT44HB7clslCMQjpbynOhdPm8SPeIXDe6KWSuRJ03L-FhD_Wnx0q9vssNdbY3PaBmQcfLTmafjwXqmGH"/>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-surface-container-lowest p-10 rounded-2xl shadow-xl shadow-primary/5">
              <h3 className="text-2xl font-bold mb-8">{t("about.form_title")}</h3>
              <form className="space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider">{t("about.f_name_l")}</label>
                    <input className="w-full bg-surface border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4" placeholder={t("about.f_name_p")} type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider">{t("about.f_int_l")}</label>
                    <select className="w-full bg-surface border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4">
                      <option>{t("about.f_int_1")}</option>
                      <option>{t("about.f_int_2")}</option>
                      <option>{t("about.f_int_3")}</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider">{t("about.f_email_l")}</label>
                  <input className="w-full bg-surface border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4" placeholder={t("about.f_email_p")} type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider">{t("about.f_msg_l")}</label>
                  <textarea className="w-full bg-surface border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4" placeholder={t("about.f_msg_p")} rows={4}></textarea>
                </div>
                <button type="submit" className="w-full bg-primary-container text-on-primary-container font-bold py-5 rounded-xl transition-all hover:brightness-110 active:scale-[0.98]">
                  {t("about.f_btn")}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-20 px-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold text-teal-900 dark:text-teal-100 font-headline mb-6">{t("footer.brand")}</div>
            <p className="text-slate-500 dark:text-slate-400 font-body text-sm leading-relaxed mb-6">
              {t("auth.tag")}. <br/>
              Leading the future of regenerative medicine through enzyme-based cellular innovation.
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold mb-6 text-on-background">Explore</h4>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-['Manrope']" href="#">Company Overview</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-['Manrope']" href="#">Core Tech</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-['Manrope']" href="#">UAE Royal Care</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold mb-6 text-on-background">Information</h4>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-['Manrope']" href="#">{t("footer.privacy")}</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-['Manrope']" href="#">{t("footer.terms")}</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold mb-6 text-on-background">Connect</h4>
            <div className="flex gap-4 mb-6">
              <span className="material-symbols-outlined text-teal-600">mail</span>
              <span className="material-symbols-outlined text-teal-600">public</span>
              <span className="material-symbols-outlined text-teal-600">call</span>
            </div>
            <p className="text-slate-500 text-sm italic">{t("footer.offices")}</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-xs">
          {t("footer.copyright")}
        </div>
      </footer>
    </>
  );
}
