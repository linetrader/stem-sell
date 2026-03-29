"use client";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ResearchPage() {
  const { t } = useLanguage();

  return (
    <>


      <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Hero Section: Deep Dive */}
        <section className="mb-32">
          <div className="editorial-grid">
            <div className="col-span-12 lg:col-span-7">
              <span className="inline-block px-4 py-1 bg-primary-container/10 text-primary font-label font-semibold rounded-full mb-6">{t("research.hero_badge")}</span>
              <h1 className="text-5xl md:text-7xl font-headline font-black text-on-surface tracking-tighter mb-8 leading-[0.9]">
                {t("research.hero_title1")} <br/><span className="text-primary">{t("research.hero_title2")}</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
                {t("research.hero_desc")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-surface-container-lowest rounded-xl border-l-4 border-primary-container">
                  <h3 className="font-headline font-bold text-lg mb-2">{t("research.hero_box1_t")}</h3>
                  <p className="text-sm text-on-surface-variant">{t("research.hero_box1_d")}</p>
                </div>
                <div className="p-8 bg-surface-container-lowest rounded-xl border-l-4 border-primary-container">
                  <h3 className="font-headline font-bold text-lg mb-2">{t("research.hero_box2_t")}</h3>
                  <p className="text-sm text-on-surface-variant">{t("research.hero_box2_d")}</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover" alt="microscopic view of glowing stem cells in a laboratory petri dish with deep teal and cyan lighting effects" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXUCDF7k_W8VhByBT8CqPNLOvJosbIM_EQGfHwULiXCM-Uo2x46DCumH17PZqunxUp27N56YzRq4YVx48Xkq2rRd2NV-Lxqnzxnlqn8qNS9FVEAXkdxGeJWgxnnPS4OVS2FRCXGU3vgd8_DzuFHXEpu6b_8QKIS2OIfFdtTK4td2l4utzXnivN_yUR9j6a6c_i_UaFY6aoWYjKGLyUloA9PHJ6Db_nbwQhzpK5atiA-1rc99DKmuXkARRpTh_4P4Hrp8eL_Y44wdgF"/>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-xl text-on-primary glass-effect shadow-xl">
                <div className="text-4xl font-headline font-black">99.8%</div>
                <div className="text-xs uppercase tracking-widest font-label font-medium opacity-80">{t("research.hero_stat")}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Comparison Table */}
        <section className="mb-32">
          <div className="mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface">{t("research.tech_title")}</h2>
            <div className="h-1 w-24 bg-primary-container mt-4"></div>
          </div>
          <div className="overflow-x-auto bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
            <table className="w-full min-w-[640px] md:min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high">
                  <th className="p-6 font-headline font-bold text-on-surface uppercase tracking-wider text-xs">{t("research.th_1")}</th>
                  <th className="p-6 font-headline font-bold text-on-surface-variant uppercase tracking-wider text-xs">{t("research.th_2")}</th>
                  <th className="p-6 font-headline font-bold text-primary uppercase tracking-wider text-xs bg-primary/5">{t("research.th_3")}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-outline-variant/10">
                  <td className="p-6 font-bold text-on-surface">{t("research.tr1_1")}</td>
                  <td className="p-6 text-on-surface-variant">{t("research.tr1_2")}</td>
                  <td className="p-6 font-semibold text-primary bg-primary/5">{t("research.tr1_3")}</td>
                </tr>
                <tr className="border-b border-outline-variant/10">
                  <td className="p-6 font-bold text-on-surface">{t("research.tr2_1")}</td>
                  <td className="p-6 text-on-surface-variant">{t("research.tr2_2")}</td>
                  <td className="p-6 font-semibold text-primary bg-primary/5">{t("research.tr2_3")}</td>
                </tr>
                <tr className="border-b border-outline-variant/10">
                  <td className="p-6 font-bold text-on-surface">{t("research.tr3_1")}</td>
                  <td className="p-6 text-on-surface-variant">{t("research.tr3_2")}</td>
                  <td className="p-6 font-semibold text-primary bg-primary/5">{t("research.tr3_3")}</td>
                </tr>
                <tr className="border-b border-outline-variant/10">
                  <td className="p-6 font-bold text-on-surface">{t("research.tr4_1")}</td>
                  <td className="p-6 text-on-surface-variant">{t("research.tr4_2")}</td>
                  <td className="p-6 font-semibold text-primary bg-primary/5">{t("research.tr4_3")}</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-on-surface">{t("research.tr5_1")}</td>
                  <td className="p-6 text-on-surface-variant">{t("research.tr5_2")}</td>
                  <td className="p-6 font-semibold text-primary bg-primary/5">{t("research.tr5_3")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 10 Major Research Projects: Bento Grid */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface">{t("research.port_title")}</h2>
              <p className="text-on-surface-variant mt-2">{t("research.port_desc")}</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold uppercase tracking-tighter">{t("research.port_badge1")}</span>
              <span className="px-3 py-1 bg-primary text-on-primary rounded-full text-[10px] font-bold uppercase tracking-tighter">{t("research.port_badge2")}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Group 1 */}
            <div className="md:col-span-2 bg-slate-900 text-white p-8 rounded-xl flex flex-col justify-between h-[320px] relative overflow-hidden">
              <div className="z-10">
                <span className="text-primary-container font-label font-bold text-xs tracking-widest uppercase">Portfolio Alpha</span>
                <h3 className="text-3xl font-headline font-bold mt-2">{t("research.alpha_t")}</h3>
              </div>
              <ul className="z-10 space-y-3 font-label text-sm opacity-90">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> {t("research.alpha_1")}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> {t("research.alpha_2")}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> {t("research.alpha_3")}</li>
              </ul>
              <div className="absolute -right-10 -bottom-10 opacity-20 transform rotate-12">
                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
              </div>
            </div>
            
            {/* Group 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <span className="text-tertiary font-label font-bold text-xs tracking-widest uppercase">Portfolio Beta</span>
                <h3 className="text-xl font-headline font-bold mt-2">{t("research.beta_t")}</h3>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-on-surface-variant">
                <li>{t("research.beta_1")}</li>
                <li>{t("research.beta_2")}</li>
                <li>{t("research.beta_3")}</li>
              </ul>
              <div className="mt-6 text-tertiary">
                <span className="material-symbols-outlined">vital_signs</span>
              </div>
            </div>
            
            {/* Group 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
              <div>
                <span className="text-primary font-label font-bold text-xs tracking-widest uppercase">Portfolio Gamma</span>
                <h3 className="text-xl font-headline font-bold mt-2">{t("research.gamma_t")}</h3>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-on-surface-variant">
                <li>{t("research.gamma_1")}</li>
                <li>{t("research.gamma_2")}</li>
                <li>{t("research.gamma_3")}</li>
              </ul>
              <div className="mt-6 text-primary">
                <span className="material-symbols-outlined">psychology</span>
              </div>
            </div>
            
            {/* Group 4 */}
            <div className="md:col-span-4 bg-primary-container text-on-primary-container p-8 md:p-12 rounded-xl flex items-center justify-between overflow-hidden relative">
              <div className="z-10 max-w-xl">
                <h3 className="text-3xl md:text-4xl font-headline font-black mb-4">{t("research.onco_t")}</h3>
                <p className="text-base md:text-lg opacity-80 leading-relaxed">{t("research.onco_d")}</p>
              </div>
              <div className="z-10 hidden lg:block">
                <button className="bg-on-primary-container text-primary-container px-8 py-4 rounded-xl font-headline font-bold">{t("research.onco_btn")}</button>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover grayscale" alt="abstract liquid medical background with floating bubbles and cells in high contrast teal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY2eGoLcAInUHdksz_YXw2c9jDItIF-DORVE6Mf_zk4e2TYoa14gg9f6KUa6_3ssH-TM5YNiSU6quB_6Ulw9sgPAFE-wt50KuuIOrE_gOnUPxl4RpQUAJL2EQV23EzSgIVjZdSzD1tKiWFEk5DlCrp48nCflM2MniKXspAdrTLXBfnqFBmCPIbSDr0N-hmHusvOeowXVYPm9T0P-x1LgxJs-gLHLBUIv1lRim5mx5hW4NOXYg3Pb9ZAM6PVb5i6MgS9wp1qQtuThpi"/>
              </div>
            </div>
          </div>
        </section>

        {/* Core Assets: Manufacturing & Products */}
        <section>
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-headline font-black text-on-surface">{t("research.infra_title")}</h2>
            <p className="text-on-surface-variant mt-2 max-w-2xl mx-auto">{t("research.infra_desc")}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Asset 1 */}
            <div className="group">
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="ultra-modern sterile pharmaceutical manufacturing facility with robotic arms and stainless steel equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4YDR9xPKh6Nl0WMaj8klahILhYKGB1tQy1tyCeVL5QgQHojwC6QRnIhoO7P6tShkaDSn_yVJ6JWgFtsk_2DZ_x0KH09NU_Yx_W01DpmW3yh9NUYu-7WGwEMQReLVo_Y5JU5ImKi12a0oyFX_fXce-9vi4EymQx81FBZ82sRHW-41_CCb1qXkorhYAjfd6AiSmcKK0FyETuz6G0QnWshe-KnE8qlYmdlpYsYzs_kBkoQQ-HQSK5iOyFSwUkIBceejJ5utPCPrwI1sd"/>
              </div>
              <h4 className="text-xl font-headline font-bold text-on-surface mb-2">{t("research.inf1_t")}</h4>
              <p className="text-sm text-on-surface-variant mb-4">{t("research.inf1_d")}</p>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold px-2 py-1 bg-surface-container-high rounded text-on-surface-variant">{t("research.inf1_b1")}</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-surface-container-high rounded text-on-surface-variant">{t("research.inf1_b2")}</span>
              </div>
            </div>
            
            {/* Asset 2 */}
            <div className="group">
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="close up of a scientific patent document with complex diagrams and blue ink stamps" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjl8_GvLi127R9t-_Y2PbuCQ95xbl1Fff4frx6pQyzCPOualBX99hUS2mOAvmQrKZoroYgGO7F3QZhD2HJnqS9TeYCrlSrR5YowCZjfNbBiIFPKiSXnpXhyorOvI_2HQLzlIimlw8uYSS4hv0YYEnYHNUBOLvKcUpC34dGryyV7Mh8KPyB_s2ONLX7rGEdXjyx9LYAk4q4T8nz7OVkkU8rXTqXjZFCPmweqs2DCnSNyDmW9Bq-pWdouZrIlnSqLw9kTF7f2FFZUV_j"/>
              </div>
              <h4 className="text-xl font-headline font-bold text-on-surface mb-2">{t("research.inf2_t")}</h4>
              <p className="text-sm text-on-surface-variant mb-4">{t("research.inf2_d")}</p>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold px-2 py-1 bg-surface-container-high rounded text-on-surface-variant">{t("research.inf2_b1")}</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-surface-container-high rounded text-on-surface-variant">{t("research.inf2_b2")}</span>
              </div>
            </div>
            
            {/* Asset 3 */}
            <div className="group">
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="luxury health product packaging with minimalist design and gold accents on a clean white surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB96i1ZlOD3IQwxLgFZlmHIUX8iVkVKfjmom-tzjszBE_yVqkV-YxQs-3bttkmzE9Q9AD2i7NJXgY08jTklWWurB_zYsKqRBOMQ6fCxwljpxDC294Pxf4sPbVSMaM8-mjK4WGjDsMh8EH6SQds7SDk2-sVQIIXype0rfBnWDgzp81Bbdvtbp51nemDl_yRb-NfycaAdo-cUqKKRtbO15mLk6IvKBawsUzjD5SLz9oRpiFGNtSB9K6Ya8bu0612HG-YvE4-b3OdIVIQl"/>
              </div>
              <h4 className="text-xl font-headline font-bold text-on-surface mb-2">{t("research.inf3_t")}</h4>
              <p className="text-sm text-on-surface-variant mb-4">{t("research.inf3_d")}</p>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold px-2 py-1 bg-surface-container-high rounded text-on-surface-variant">{t("research.inf3_b1")}</span>
                <span className="text-[10px] font-bold px-2 py-1 bg-surface-container-high rounded text-on-surface-variant">{t("research.inf3_b2")}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold text-teal-900 dark:text-teal-100 font-headline mb-6">{t("footer.brand")}</div>
            <p className="font-body text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {t("auth.tag")}. <br/>Advancing human longevity through cellular innovation.
            </p>
          </div>
          <div>
            <h5 className="text-teal-700 dark:text-teal-300 font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-body" href="#">Company Overview</Link></li>
              <li><Link className="text-teal-700 dark:text-teal-300 font-bold text-sm font-body" href="/research">Core Tech</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-body" href="#">UAE Royal Care</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-teal-700 dark:text-teal-300 font-bold mb-6 text-sm uppercase tracking-widest">Legal</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-body" href="#">{t("footer.privacy")}</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-body" href="#">{t("footer.terms")}</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-teal-700 dark:text-teal-300 font-bold mb-6 text-sm uppercase tracking-widest">Global HQ</h5>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-body leading-relaxed">
              Bio-District 7, Medical Valley<br/>Seoul, Republic of Korea<br/>+82 (0)2 1234 5678
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="font-body text-sm leading-relaxed text-slate-400">{t("footer.copyright")}</p>
        </div>
      </footer>
    </>
  );
}
