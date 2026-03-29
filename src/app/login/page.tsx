"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { useId } from "react";

export default function LoginPage() {
  const { t } = useLanguage();
  const emailId = useId();
  const passwordId = useId();

  return (
    <div className="bg-background font-body text-on-background min-h-screen flex flex-col w-full">

      {/* Main Content Area: Login Journey */}
      <main 
        className="flex-grow flex flex-col px-4 pt-32 pb-12 relative" 
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(25, 28, 30, 0.4) 0%, rgba(0, 107, 90, 0.2) 100%), url(https://lh3.googleusercontent.com/aida-public/AB6AXuAFeo1m1eZBqRS0WdRLI9vqdDJsfC-yYT1X64qVTMZidqGI82P0CJNQi6ZTyFKtrvDEjYN8mgJ3HRQiddLQjRVXgLb2ggW5LMM5zXwJAZOqnrxADACJD-ZvegQTY3ePqnV7B5DhihRLcToFaL7E6JiblaimTDS6LXnhnDGRx4eAYgn1bK28hM7V0YPUknZUthH72eu1OoNxWR2AAHzCeHcvp88QeZ3QHRYNnb-bUY89xCtLNVyw0dlANF_qKxuWCmqUtAndbZ4TPTQd)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        title="ultra-modern biological research laboratory with soft teal lighting, blurred high-tech equipment and clean clinical surfaces"
      >
        {/* Abstract Bio-Molecular Shapes (Decorative) */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-tertiary-container/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Login Card */}
        <div className="w-full max-w-md z-10 m-auto">
          <div className="bg-white/70 backdrop-blur-2xl rounded-xl shadow-2xl overflow-hidden border border-outline-variant/20">
            <div className="p-8 md:p-10">
              {/* Branding & Intro */}
              <div className="mb-10 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-6 text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
                </div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-on-surface mb-3">
                  {t("auth.login_title")}
                </h1>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed max-w-[280px] mx-auto">
                  {t("auth.login_sub")}
                </p>
              </div>

              {/* Login Form */}
              <form className="space-y-6" autoComplete="off">
                <input style={{ opacity: 0, position: 'absolute', zIndex: -1, width: 0, height: 0 }} tabIndex={-1} aria-hidden="true" type="email" name="fake_email_hidden" autoComplete="email" />
                <input style={{ opacity: 0, position: 'absolute', zIndex: -1, width: 0, height: 0 }} tabIndex={-1} aria-hidden="true" type="password" name="fake_password_hidden" autoComplete="current-password" />
                <div className="space-y-2">
                  <label className="block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="sec_auth_id_x99">
                    {t("auth.email_label")}
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                      <span className="material-symbols-outlined text-[20px]">account_circle</span>
                    </div>
                    <input 
                      className="block w-full pl-10 pr-4 py-3 bg-surface-container-lowest border-0 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all font-body text-on-surface placeholder:text-outline/50" 
                      id="sec_auth_id_x99" 
                      name={`sec_auth_id_${emailId}`} 
                      placeholder={t("auth.email_placeholder")} 
                      required 
                      type="text" 
                      autoComplete="off" 
                      readOnly
                      onFocus={(e) => e.target.removeAttribute('readonly')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant ml-1" htmlFor="sec_auth_key_v22">
                      {t("auth.password_label")}
                    </label>
                    <Link className="text-xs font-label text-primary hover:text-primary-container transition-colors" href="#">{t("auth.find_password")}</Link>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                      <span className="material-symbols-outlined text-[20px]">lock</span>
                    </div>
                    <input 
                      className="block w-full pl-10 pr-10 py-3 bg-surface-container-lowest border-0 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all font-body text-on-surface placeholder:text-outline/50" 
                      id="sec_auth_key_v22" 
                      name={`sec_auth_key_${passwordId}`} 
                      placeholder={t("auth.password_placeholder")} 
                      required 
                      type="password" 
                      autoComplete="new-password" 
                      readOnly
                      onFocus={(e) => e.target.removeAttribute('readonly')}
                    />
                    <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:opacity-95 active:scale-[0.98] transition-all duration-300" type="submit">
                  {t("auth.secure_login")}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-outline-variant/30"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-transparent px-2 text-on-surface-variant font-label font-medium">{t("auth.or_continue")}</span>
                </div>
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-lowest hover:bg-surface-container transition-colors rounded-xl border border-outline-variant/20 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Google" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASsN6bOVnChsH8d15hJHDdC0q7pipWBzOzMHJiRY_NZfzzyqrntw5fgry3rjpw3rOBI_r9buxkVXzw9DId0uS49V43sah24FiDSzowhbV6uCqMiUiQ_BMo12oeWSQbH-RxN3PEkzJWOvLtfVasHOO1wJCNFF-8H5-TdpYpPmPPeZkRGXjLPOsJ2GUfda2LoXOlGh-dCrJJEikL70vl9GvhZ_TEMPLS9vPJIKgtL3_jI_TnKIyxfAg9KK6vycVW_42-pGI1__wf7N4Z"/>
                  <span className="text-sm font-label font-medium text-on-surface-variant">Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 py-3 px-4 bg-[#FEE500] hover:bg-[#F7D600] transition-colors rounded-xl group">
                  <span className="material-symbols-outlined text-black text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                  <span className="text-sm font-label font-medium text-black">Kakao</span>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="mt-8 text-center">
                <p className="font-body text-sm text-on-surface-variant">
                  {t("auth.new_to")} 
                  <Link className="font-bold text-primary hover:underline ml-1" href="/signup">{t("nav.signUp")}</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Technical Verification Badge */}
          <div className="mt-6 flex items-center justify-center gap-4 text-[10px] font-label text-white/60 uppercase tracking-widest">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">verified_user</span>
              {t("auth.iso_badge")}
            </span>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">encrypted</span>
              {t("auth.enc_badge")}
            </span>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full py-8 px-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-headline font-extrabold text-slate-900 dark:text-slate-100">
            {t("footer.brand")}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link className="font-body text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors duration-200" href="#">{t("footer.privacy")}</Link>
            <Link className="font-body text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors duration-200" href="#">{t("footer.terms")}</Link>
            <Link className="font-body text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors duration-200" href="#">{t("footer.ethics")}</Link>
          </div>
          <div className="font-body text-sm tracking-wide text-slate-500 dark:text-slate-400">
            {t("footer.copyright")}
          </div>
        </div>
      </footer>
    </div>
  );
}
