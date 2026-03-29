"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function SignUpPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container/30 min-h-screen flex flex-col">

      <main className="flex-grow pt-32 pb-12 px-6 flex items-center justify-center">
        {/* Main Layout: Asymmetric Bento Grid Concept */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Branding and Intro */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary-container/10 text-primary font-label text-xs font-semibold tracking-wider uppercase rounded-full">{t("auth.tag")}</span>
              <h1 className="text-5xl lg:text-6xl font-headline font-bold tracking-tight text-on-surface leading-none">
                {t("auth.signup_title1")}<br/><span className="text-primary">{t("auth.signup_title2")}</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-md break-keep">
                {t("auth.signup_sub")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-xl text-on-primary shadow-sm">
                  <span className="material-symbols-outlined">biotech</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface">{t("auth.cp_title")}</h3>
                  <p className="text-sm text-on-surface-variant break-keep">{t("auth.cp_desc")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-tertiary-container rounded-xl text-on-tertiary-container shadow-sm">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface">{t("auth.ef_title")}</h3>
                  <p className="text-sm text-on-surface-variant break-keep">{t("auth.ef_desc")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col h-full border border-outline-variant/15">
              {/* Progress Header */}
              <div className="bg-surface-container-high px-8 py-6 flex justify-between items-center">
                <div className="space-y-1">
                  <h2 className="font-headline font-bold text-xl text-on-surface">{t("auth.portal")}</h2>
                  <p className="text-sm text-on-surface-variant">{t("auth.step1")}</p>
                </div>
                <div className="flex gap-1">
                  <div className="w-8 h-1.5 rounded-full bg-primary"></div>
                  <div className="w-8 h-1.5 rounded-full bg-outline-variant/30"></div>
                  <div className="w-8 h-1.5 rounded-full bg-outline-variant/30"></div>
                </div>
              </div>
              
              <form className="p-8 space-y-8" autoComplete="off">
                <input style={{ opacity: 0, position: 'absolute', zIndex: -1, width: 0, height: 0 }} tabIndex={-1} aria-hidden="true" type="email" name="fake_email_hidden" autoComplete="email" />
                <input style={{ opacity: 0, position: 'absolute', zIndex: -1, width: 0, height: 0 }} tabIndex={-1} aria-hidden="true" type="password" name="fake_password_hidden" autoComplete="current-password" />
                {/* Section: Account Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-xl">account_circle</span>
                    <h3 className="font-headline font-bold tracking-tight">{t("auth.credentials")}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider">{t("auth.prof_email")}</label>
                      <input className="w-full px-4 py-3 bg-surface rounded-xl border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary/40 transition-all outline-none text-on-surface placeholder:text-on-surface-variant/40" placeholder={t("auth.prof_email_ph")} type="text" required name="new_email_address" autoComplete="new-password" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider">{t("auth.access_pw")}</label>
                      <input className="w-full px-4 py-3 bg-surface rounded-xl border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary/40 transition-all outline-none text-on-surface placeholder:text-on-surface-variant/40" placeholder={t("auth.access_pw_ph")} type="password" required name="new_password_code" autoComplete="new-password" />
                    </div>
                  </div>
                </div>

                {/* Section: Personal Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-xl">badge</span>
                    <h3 className="font-headline font-bold tracking-tight">{t("auth.personal_details")}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider">{t("auth.first_name")}</label>
                      <input className="w-full px-4 py-3 bg-surface rounded-xl border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary/40 transition-all outline-none text-on-surface placeholder:text-on-surface-variant/40" placeholder={t("auth.first_name_ph")} type="text" required autoComplete="off" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider">{t("auth.last_name")}</label>
                      <input className="w-full px-4 py-3 bg-surface rounded-xl border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary/40 transition-all outline-none text-on-surface placeholder:text-on-surface-variant/40" placeholder={t("auth.last_name_ph")} type="text" required autoComplete="off" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider">{t("auth.affiliation")}</label>
                      <input className="w-full px-4 py-3 bg-surface rounded-xl border-none ring-1 ring-outline-variant/30 focus:ring-2 focus:ring-primary/40 transition-all outline-none text-on-surface placeholder:text-on-surface-variant/40" placeholder={t("auth.affiliation_ph")} type="text" autoComplete="off" />
                    </div>
                  </div>
                </div>

                {/* Section: Areas of Interest */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-xl">analytics</span>
                    <h3 className="font-headline font-bold tracking-tight">{t("auth.ecosystems")}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <label className="cursor-pointer group">
                      <input className="hidden peer" type="checkbox" defaultChecked />
                      <div className="p-4 rounded-xl bg-surface ring-1 ring-outline-variant/30 peer-checked:ring-primary peer-checked:bg-primary-container/10 transition-all h-full">
                        <div className="w-8 h-8 rounded-lg bg-surface-variant mb-2 flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                          <span className="material-symbols-outlined text-lg">medical_services</span>
                        </div>
                        <p className="font-headline font-bold text-sm text-on-surface">{t("auth.health")}</p>
                      </div>
                    </label>
                    <label className="cursor-pointer group">
                      <input className="hidden peer" type="checkbox" />
                      <div className="p-4 rounded-xl bg-surface ring-1 ring-outline-variant/30 peer-checked:ring-primary peer-checked:bg-primary-container/10 transition-all h-full">
                        <div className="w-8 h-8 rounded-lg bg-surface-variant mb-2 flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                          <span className="material-symbols-outlined text-lg">hourglass_empty</span>
                        </div>
                        <p className="font-headline font-bold text-sm text-on-surface">{t("auth.anti_aging")}</p>
                      </div>
                    </label>
                    <label className="cursor-pointer group">
                      <input className="hidden peer" type="checkbox" />
                      <div className="p-4 rounded-xl bg-surface ring-1 ring-outline-variant/30 peer-checked:ring-primary peer-checked:bg-primary-container/10 transition-all h-full">
                        <div className="w-8 h-8 rounded-lg bg-surface-variant mb-2 flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                          <span className="material-symbols-outlined text-lg">science</span>
                        </div>
                        <p className="font-headline font-bold text-sm text-on-surface">{t("auth.clinical")}</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="pt-4 flex flex-col gap-4">
                  <button className="w-full bg-gradient-to-r from-primary to-primary-container py-4 rounded-xl text-on-primary font-headline font-bold text-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20" type="submit">
                    {t("auth.create_account")}
                  </button>
                  <p className="text-xs text-center text-on-surface-variant break-keep">
                    {t("auth.agreement")}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 bg-slate-50 dark:bg-slate-900 mt-auto border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-headline font-extrabold text-slate-900 dark:text-slate-100 text-xl">{t("footer.brand")}</span>
            <p className="font-body text-sm tracking-wide text-slate-500 dark:text-slate-400">{t("footer.copyright")}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors duration-200 font-body text-sm tracking-wide" href="#">{t("footer.privacy")}</Link>
            <Link className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors duration-200 font-body text-sm tracking-wide" href="#">{t("footer.terms")}</Link>
            <Link className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors duration-200 font-body text-sm tracking-wide" href="#">{t("footer.ethics")}</Link>
            <Link className="text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors duration-200 font-body text-sm tracking-wide" href="#">{t("footer.offices")}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
