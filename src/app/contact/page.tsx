"use client";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>


      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-8 py-20 overflow-hidden">
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-primary-container/10 text-primary font-label text-sm font-semibold tracking-wider mb-6">{t("contact.hero_badge")}</span>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface leading-tight mb-8">
                {t("contact.hero_title")}
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-xl leading-relaxed">
                {t("contact.hero_desc")}
              </p>
              <div className="mt-12 flex flex-col gap-2">
                <p className="font-headline font-bold text-primary italic text-lg">{t("contact.hero_quote")}</p>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60">{t("contact.hero_tag")}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary to-primary-container opacity-10 absolute -top-20 -right-20 blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Research Lab" className="w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJuFbHW13yeBGC9IWLYA0OXr37vTt9oOhIUzHuanezjh_s2I5G572ZmRBFbY0ddi89Elh3_7CPHuDKP76cYuzIqEUDtWlgV2dGivvxQh02Sq6BKRlZWDuv1jQ_J1tQYyZKZbqXzq0mIz2pBOZy1g5FXik8UWS5gqUSz-QozrHtAd2Q8XsF0Y7xAPDVDYUW52AO-0CKhm2WtVXQIauL5-zL7-EZ9JsN1rRYdVUwJ-tf6mRQ6LKsg11-mb8jbkTbFx1iBvksXPelPhby"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Inquiry Form & Global Network */}
        <section className="px-8 py-24 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Form Side */}
              <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm border border-outline-variant/15">
                <div className="mb-10">
                  <h2 className="font-headline text-3xl font-bold mb-4">{t("contact.form_title")}</h2>
                  <p className="text-on-surface-variant">{t("contact.form_desc")}</p>
                </div>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block font-label text-sm font-semibold text-on-surface-variant">{t("contact.f_name_l")}</label>
                      <input className="w-full bg-surface border-none focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40" placeholder={t("contact.f_name_p")} type="text"/>
                    </div>
                    <div className="space-y-2">
                      <label className="block font-label text-sm font-semibold text-on-surface-variant">{t("contact.f_email_l")}</label>
                      <input className="w-full bg-surface border-none focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40" placeholder={t("contact.f_email_p")} type="email"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-sm font-semibold text-on-surface-variant">{t("contact.f_interest_l")}</label>
                    <select className="w-full bg-surface border-none focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-on-surface appearance-none">
                      <option>{t("contact.o_1")}</option>
                      <option>{t("contact.o_2")}</option>
                      <option>{t("contact.o_3")}</option>
                      <option>{t("contact.o_4")}</option>
                      <option>{t("contact.o_5")}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-sm font-semibold text-on-surface-variant">{t("contact.f_msg_l")}</label>
                    <textarea className="w-full bg-surface border-none focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/40" placeholder={t("contact.f_msg_p")} rows={5}></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all" type="submit">
                    {t("contact.submit")}
                  </button>
                </form>
              </div>
              
              {/* Global Network Side */}
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <h2 className="font-headline text-3xl font-bold mb-8">{t("contact.hub_title")}</h2>
                  <div className="space-y-6">
                    {/* Seoul HQ */}
                    <div className="flex gap-6 p-6 bg-surface border-l-4 border-primary-container rounded-r-xl group hover:bg-surface-container-high transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">hub</span>
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-xl">{t("contact.hub1_t")}</h4>
                        <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                          15F Gangnam-daero, Seocho-gu<br/>Seoul, South Korea
                        </p>
                        <p className="text-primary font-semibold text-sm mt-2">+82 (0)2 554 1000</p>
                      </div>
                    </div>
                    {/* Dubai */}
                    <div className="flex gap-6 p-6 bg-surface border-l-4 border-primary-container rounded-r-xl group hover:bg-surface-container-high transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">health_metrics</span>
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-xl">{t("contact.hub2_t")}</h4>
                        <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                          Jumeirah Lake Towers, Cluster X<br/>Dubai, UAE
                        </p>
                        <p className="text-primary font-semibold text-sm mt-2">+971 4 456 7890</p>
                      </div>
                    </div>
                    {/* Zurich */}
                    <div className="flex gap-6 p-6 bg-surface border-l-4 border-primary-container rounded-r-xl group hover:bg-surface-container-high transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">precision_manufacturing</span>
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-xl">{t("contact.hub3_t")}</h4>
                        <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                          Technoparkstrasse 1<br/>8005 Zürich, Switzerland
                        </p>
                        <p className="text-primary font-semibold text-sm mt-2">+41 44 200 12 34</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Map Placeholder / Graphic */}
                <div className="relative bg-surface-container-highest rounded-2xl overflow-hidden h-64 shadow-inner">
                  <div className="absolute inset-0 opacity-40 mix-blend-multiply grayscale">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full h-full object-cover" alt="abstract minimalist world map with glowing nodes connecting major cities in a clean technological style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKOFqNIIIFztJxAHnTQq_wpKaBBaqaAemhv-hgN4im2s_1KeupTn0SAMoG3C6LXhrt7KOwhZkaQeOMxKUfN1JgbgyvZFnIFWFQoq079BCfrzPBk6CKuRBdi4XGX7H50s8ezCQZ2JQ9QKYVQeiBlppi2jPi-M28LFBITlbjLsKhmQ4Eyz-h58EEjdkxocx45Duztx6uRyF4Zv8SlxQLw6BRCgjOziasndO5ElVzpaz0b_aSep9UI_jplR2l9LPFUgBsKHEZsuf8ox5Z"/>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-primary/10">
                    <p className="font-headline font-bold text-on-surface leading-tight text-lg whitespace-pre-line">{t("contact.map_tag")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical FAQ / Bento Grid */}
        <section className="px-8 py-24 bg-surface">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-headline text-4xl font-bold mb-16 text-center">{t("contact.faq_title")}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">verified_user</span>
                <h3 className="font-headline font-bold text-xl mb-4">{t("contact.faq1_t")}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{t("contact.faq1_d")}</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">lock</span>
                <h3 className="font-headline font-bold text-xl mb-4">{t("contact.faq2_t")}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{t("contact.faq2_d")}</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">biotech</span>
                <h3 className="font-headline font-bold text-xl mb-4">{t("contact.faq3_t")}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{t("contact.faq3_d")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 py-24">
          <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-primary to-primary-container rounded-3xl p-12 md:p-24 relative overflow-hidden text-center text-on-primary">
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-8">{t("contact.cta_title1")}<br/>{t("contact.cta_title2")}</h2>
              <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto font-light">{t("contact.cta_desc")}</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-headline font-bold hover:bg-opacity-90 transition-all shadow-xl">{t("contact.cta_btn1")}</button>
                <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-headline font-bold hover:opacity-90 transition-all border border-white/20 shadow-xl">{t("contact.cta_btn2")}</button>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1440px] mx-auto">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold text-teal-900 dark:text-teal-100 font-['Space_Grotesk'] mb-6">{t("footer.brand")}</div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-['Manrope']">
              {t("auth.tag")}
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 font-['Space_Grotesk'] text-teal-900 dark:text-teal-100">Explore</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-['Manrope']" href="/about">Company Overview</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-['Manrope']" href="/research">Core Tech</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-['Manrope']" href="/global-strategy">UAE Royal Care</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 font-['Space_Grotesk'] text-teal-900 dark:text-teal-100">Legal</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-['Manrope']" href="#">{t("footer.privacy")}</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm font-['Manrope']" href="#">{t("footer.terms")}</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 font-['Space_Grotesk'] text-teal-900 dark:text-teal-100">Connect</h5>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-teal-600 opacity-80 hover:opacity-100 cursor-pointer">share</span>
              <span className="material-symbols-outlined text-teal-600 opacity-80 hover:opacity-100 cursor-pointer">public</span>
              <span className="material-symbols-outlined text-teal-600 opacity-80 hover:opacity-100 cursor-pointer">mail</span>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-['Manrope']">
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </>
  );
}
