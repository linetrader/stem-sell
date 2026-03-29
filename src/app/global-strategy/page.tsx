"use client";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function GlobalStrategyPage() {
  const { t } = useLanguage();

  return (
    <>


      <main className="pt-24">
        {/* Hero Section: Architectural Sophistication */}
        <section className="relative min-h-[819px] flex items-center overflow-hidden px-12 py-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent z-10"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover" alt="Modern minimalist architectural interior of a high-tech medical research facility with clean lines and soft daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJEpi5p_FIobjkjL7rpVTMgvQSQRNokR-eYo24YMoiZFVTM7-aP3kv5ZeI9KcC4_S_OmyhFPmz1cbH4mXwOqRl3Knw9A5Nh0CsfDef_SY76jduJ0NSwHRB9qdK8cae_nBPf8XYN5LcD7zv_wwECZdSoFeCjHcOaQ3hDicsC-VtcFB2cdCDq8D3joTAaY9HxVgs8cw2MXvMdTQnMYIrJjw1nXAPYvYqL1h0OrGrcN5NitVShXrdT4pZ-6yzPJDUgyvDflYW-Ydiw0Dw"/>
          </div>
          <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <span className="inline-block px-4 py-1.5 bg-primary-container/10 text-primary font-label text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
                {t("global.hero_badge")}
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-black text-on-surface tracking-tighter leading-[0.9] mb-8">
                {t("global.hero_title1")} <br/>
                <span className="text-primary-container">{t("global.hero_title2")}</span>
              </h1>
              <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
                {t("global.hero_desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Global Network: Asymmetric Bento Grid */}
        <section className="px-12 py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-6">{t("global.net_title")}</h2>
                <p className="text-on-surface-variant">{t("global.net_desc")}</p>
              </div>
              <div className="flex gap-4">
                <span className="p-4 bg-surface-container rounded-xl flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary-container rounded-full"></span>
                  <span className="font-label text-xs font-bold text-on-surface-variant">{t("global.net_badge")}</span>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Korea Hub */}
              <div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-10 overflow-hidden relative group">
                <div className="relative z-10">
                  <span className="font-label text-xs text-primary font-bold tracking-widest uppercase mb-4 block">{t("global.hub1_badge")}</span>
                  <h3 className="font-headline text-3xl font-bold mb-4">{t("global.hub1_title")}</h3>
                  <p className="text-on-surface-variant max-w-sm mb-8">{t("global.hub1_desc")}</p>
                  <div className="flex gap-4">
                    <div className="w-12 h-1 bg-primary-container"></div>
                    <div className="w-4 h-1 bg-surface-variant"></div>
                    <div className="w-4 h-1 bg-surface-variant"></div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt="Modern high-tech medical laboratory in Seoul with scientists operating robotic cell culture equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnC4qCscpZKsvV3m2ArG23zXXqwaHnCwOfK67jUzOzlJNtShQRVcQN707fU4OUJUUEfDVN4xkiBkLtGaF7AMu6o_URZOmMkji0h8i1jYP2J0wqUf2Nk3lwOFqLZBrvTRfvyspPm-tA_vXYuozB1tzkXCdIXKrTgFNM5d0lsoVGq6iD6gQphEgQWujRY2NwCtIX56fhuEHaHxtkmgjVuqMW6vraT6Jsx43zi8KZpJEG6X_HEKpeZjDpRkxfi9qTd9ikTJd0wimNy3uz"/>
                </div>
              </div>
              {/* Japan Hub */}
              <div className="md:col-span-5 bg-surface-container-high rounded-xl p-10 flex flex-col justify-between">
                <div>
                  <span className="font-label text-xs text-on-surface-variant font-bold tracking-widest uppercase mb-4 block">{t("global.hub2_badge")}</span>
                  <h3 className="font-headline text-2xl font-bold mb-4">{t("global.hub2_title")}</h3>
                  <p className="text-on-surface-variant text-sm">{t("global.hub2_desc")}</p>
                </div>
                <div className="mt-8 pt-8 border-t border-outline-variant/20">
                  <div className="flex justify-between items-center">
                    <span className="font-label text-xs font-medium">{t("global.hub2_cap")}</span>
                    <span className="font-headline font-bold text-primary">85%</span>
                  </div>
                </div>
              </div>
              {/* China Hub */}
              <div className="md:col-span-12 bg-on-background text-surface rounded-xl p-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 overflow-hidden relative">
                <div>
                  <h3 className="font-headline text-4xl font-bold mb-6">{t("global.hub3_title")}</h3>
                  <p className="text-surface-variant leading-relaxed mb-8">{t("global.hub3_desc")}</p>
                  <button className="flex items-center gap-4 font-label font-bold text-primary-container group">
                    {t("global.hub3_btn")} <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </button>
                </div>
                <div className="relative h-64 md:h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-60" alt="Aerial view of futuristic high-tech science park architecture with green integration and glowing glass facades" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ccAEuarWsix00dkSWQ5g2uUs-9L0pmgvqjY3oHAK0lMwFEh2ZConh5T64_E1BVkgu2hjfirecYniE5GT_VG-oWH3uCPXv7gAEcPLmi_Fq-P-cnN8nsML6485RDuVgxBbFOKTp1PtxYpO9P2lQRRDzGhaQAQWW-urUeYcjcr-0r1abOL_fKT6gi3zXNX4c9y9mZrP3kiT6oSDMihaEr6TQ91pkqRl5VcAefm93qpdRE9UabTq9QSYvYFNT8dNfED0acplcOjpRQDD"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UAE Royal Care: The Exclusive Sanctuary */}
        <section className="bg-surface-container-low py-32 px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-on-surface text-surface rounded-full text-xs font-bold tracking-[0.3em] uppercase">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    {t("global.royal_badge")}
                  </div>
                  <h2 className="font-headline text-5xl md:text-6xl font-black text-on-surface leading-tight">
                    {t("global.royal_title1")} <br/> <span className="italic font-light">{t("global.royal_title2")}</span>
                  </h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    {t("global.royal_desc")}
                  </p>
                  
                  {/* Program Components Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                    <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary-container">
                      <span className="material-symbols-outlined text-primary mb-4" data-icon="dna">genetics</span>
                      <h4 className="font-headline font-bold text-sm mb-2">{t("global.royal_box1_t")}</h4>
                      <p className="text-xs text-on-surface-variant">{t("global.royal_box1_d")}</p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary-container">
                      <span className="material-symbols-outlined text-primary mb-4" data-icon="medical_services">medical_services</span>
                      <h4 className="font-headline font-bold text-sm mb-2">{t("global.royal_box2_t")}</h4>
                      <p className="text-xs text-on-surface-variant">{t("global.royal_box2_d")}</p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary-container">
                      <span className="material-symbols-outlined text-primary mb-4" data-icon="clinical_notes">clinical_notes</span>
                      <h4 className="font-headline font-bold text-sm mb-2">{t("global.royal_box3_t")}</h4>
                      <p className="text-xs text-on-surface-variant">{t("global.royal_box3_d")}</p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary-container">
                      <span className="material-symbols-outlined text-primary mb-4" data-icon="security">security</span>
                      <h4 className="font-headline font-bold text-sm mb-2">{t("global.royal_box4_t")}</h4>
                      <p className="text-xs text-on-surface-variant">{t("global.royal_box4_d")}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                {/* Technical Floating Card */}
                <div className="absolute -right-8 -bottom-8 bg-on-background p-8 rounded-xl text-surface z-20 shadow-2xl max-w-xs transition-transform group-hover:-translate-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-primary-container text-sm">flight_takeoff</span>
                    </div>
                    <span className="font-label text-xs font-bold tracking-widest uppercase">{t("global.royal_float_t")}</span>
                  </div>
                  <p className="text-sm text-surface-variant leading-relaxed">
                    {t("global.royal_float_d")}
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full aspect-[4/5] object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt="Luxury private jet interior with clean clinical minimalist aesthetic and soft ambient lighting for VIP medical transport" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDcF28nxVR5hM_u4TwkScDNte9mKYIBYmUGoItW82kI8zgKrqBhQTjSWuriCSA79YM_fNUMBO8GvdGK0Ure7HUOOcQ8YNwk85sW7klKJ8ipKrH20qMgX6TH8ytwJD70P9xEWxqrZnNepknx5u5mqJX-N_d24VCSS63at3DxTw2kACqc2BOMZLnfjELu3JD0fYjva6tQJwNLVa_QNMwJzaLhaRXcUmdZaIJrPGawkGYLZ7kfYJp7_KwIGLGdRRfMXOZOoQWQP76n07E"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Excellence: Precision Data Display */}
        <section className="px-12 py-32 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <h2 className="font-headline text-4xl font-bold mb-6">{t("global.proto_title")}</h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                {t("global.proto_desc")}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-4 rounded-lg bg-surface hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-primary-container" data-icon="check_circle">check_circle</span>
                  <span className="font-label text-sm font-semibold">{t("global.proto_li1")}</span>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-lg bg-surface hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-primary-container" data-icon="check_circle">check_circle</span>
                  <span className="font-label text-sm font-semibold">{t("global.proto_li2")}</span>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-lg bg-surface hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-primary-container" data-icon="check_circle">check_circle</span>
                  <span className="font-label text-sm font-semibold">{t("global.proto_li3")}</span>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-7 bg-surface-container-high rounded-xl p-8 relative overflow-hidden">
              {/* Bio-Tech Specific: Technical Chart Placeholder */}
              <div className="aspect-video bg-on-background/5 rounded-lg border border-outline-variant/30 flex flex-col justify-end p-8 overflow-hidden">
                <div className="flex items-end gap-2 h-full">
                  <div className="flex-1 bg-primary-container/20 h-[30%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary-container/40 h-[50%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary-container/60 h-[70%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary-container/80 h-[90%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary-container h-[75%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary-container/90 h-[60%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary-container/70 h-[85%] rounded-t-sm"></div>
                </div>
                <div className="mt-4 flex justify-between border-t border-outline-variant/20 pt-4 font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                  <span>{t("global.proto_chart1")}</span>
                  <span>{t("global.proto_chart2")}</span>
                  <span>{t("global.proto_chart3")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto font-['Manrope'] text-sm leading-relaxed">
          <div className="col-span-1">
            <div className="text-xl font-bold text-teal-900 dark:text-teal-100 font-['Space_Grotesk'] mb-6">{t("footer.brand")}</div>
            <p className="text-slate-500 dark:text-slate-400 opacity-80 mb-8">
              {t("auth.tag")}. <br/> Leading the charge in regenerative longevity.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-teal-700 dark:text-teal-300 mb-6 uppercase tracking-widest text-xs">Resources</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="/about">Company Overview</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="/research">Core Tech</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-teal-700 dark:text-teal-300 mb-6 uppercase tracking-widest text-xs">Royal Portal</h5>
            <ul className="space-y-4">
              <li><Link className="text-teal-700 dark:text-teal-300 font-bold hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">UAE Royal Care</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Concierge Login</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-teal-700 dark:text-teal-300 mb-6 uppercase tracking-widest text-xs">Legal</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">{t("footer.privacy")}</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">{t("footer.terms")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 dark:text-slate-600 text-xs">{t("footer.copyright")}</p>
          <div className="flex gap-6">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
          </div>
        </div>
      </footer>
    </>
  );
}
