"use client";
import Link from 'next/link';
import { useLanguage } from "@/i18n/LanguageContext";

export default function RwaTokenPage() {
  const { t } = useLanguage();

  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center overflow-hidden bg-surface py-20 px-8">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="w-full h-full object-cover opacity-40 scale-105" data-alt="Futuristic laboratory with glowing teal biological sequences and blockchain data nodes floating in a dark atmospheric space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPJ92jNVonNsC_FqhNC02IlrwWsjmv75Bpo9TbNVDE4LDfg0RCihiP_GDejHNGK9yxsoGeAu7rGaBuHvv-2jmPSwBh4AQKAc2LhM2e8X7o2-qOUlqS1-W-ope0aYGV-v5LGrQ8pyJR67bSnFmfczCnRocX43Sm8JWLjSq6dGP8GdWhZlpwgY4XDHrZW4FGe45-lU8KOdt_h0byeRYwAdFzlyUl2UVdnb3AWn2wJAXuDLOE8gwZu8wvxFjAwCy57fbG-AMwdx4DiCsV" />
          </div>
          <div className="max-w-screen-2xl mx-auto w-full relative z-20 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-label text-xs font-bold tracking-widest uppercase mb-6">{t("rwa_token.hero_badge")}</span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] tracking-tight mb-8">
                {t("rwa_token.hero_title1")} <br/><span className="text-primary-container">{t("rwa_token.hero_title2")}</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light mb-10">
                {t("rwa_token.hero_desc")}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:shadow-xl transition-all">{t("rwa_token.hero_btn_explore")}</button>
                <button className="border border-outline-variant text-on-surface px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container transition-all">{t("rwa_token.hero_btn_whitepaper")}</button>
              </div>
            </div>
          </div>
        </section>

        {/* Token Utility Section */}
        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">{t("rwa_token.util_title")}</h2>
                <div className="h-1 w-24 bg-primary-container"></div>
              </div>
              <p className="font-label text-sm text-on-surface-variant tracking-widest uppercase">{t("rwa_token.util_badge")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Item 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl group hover:bg-primary transition-colors duration-500">
                <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center mb-6 group-hover:bg-white/20">
                  <span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="medical_services">medical_services</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">{t("rwa_token.util1_t")}</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed">{t("rwa_token.util1_d")}</p>
              </div>
              {/* Item 2 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl group hover:bg-primary transition-colors duration-500">
                <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center mb-6 group-hover:bg-white/20">
                  <span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="spa">spa</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">{t("rwa_token.util2_t")}</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed">{t("rwa_token.util2_d")}</p>
              </div>
              {/* Item 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl group hover:bg-primary transition-colors duration-500">
                <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center mb-6 group-hover:bg-white/20">
                  <span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="inventory_2">inventory_2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">{t("rwa_token.util3_t")}</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed">{t("rwa_token.util3_d")}</p>
              </div>
              {/* Item 4 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl group hover:bg-primary transition-colors duration-500">
                <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center mb-6 group-hover:bg-white/20">
                  <span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="corporate_fare">corporate_fare</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white">{t("rwa_token.util4_t")}</h3>
                <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed">{t("rwa_token.util4_d")}</p>
              </div>
              {/* Item 5 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl group hover:bg-primary transition-colors duration-500 lg:col-span-2">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary-container/20 flex items-center justify-center group-hover:bg-white/20">
                    <span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="hub">hub</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white">{t("rwa_token.util5_t")}</h3>
                    <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed">{t("rwa_token.util5_d")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Card Integration Section */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-screen-2xl mx-auto overflow-hidden rounded-[2rem] bg-on-background text-white relative">
            <div className="absolute inset-0 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="w-full h-full object-cover opacity-20" data-alt="Sleek black premium visa debit card floating over a grid of glowing digital transactions and global connections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWSo09w1sm1E90VQK9bbqc2vH4YVBSIMZ4x0kZ6PqAQdcOilGBSGaLykLJX2mHH5rQko2XFWXLRhZS1RAmKALMxg99uFY0YVOJyjA9oLEVR116xusownuocssqx5kD7jP10GCxnaFUdos3lnl2MT3bmkmJeJ2vWGWBVDoHbxubHU_OHBGjD7RtMAR6OlTfEqcff6pEbxPt3EalBDpcTYnOm136U8tlYaF-Gs5Hu-2ca6ZyT61iwKQJBF18iT0vuChCrp-_0PJ-4EGr" />
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 p-12 md:p-20">
              <div className="col-span-12 lg:col-span-6">
                <div className="flex items-center gap-4 mb-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Visa" className="h-8 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK1l47YcaP_uj_lUPEIFuN19Klw5_NpjfVEohpYMQvq51hnUponJxeKu1g9_OUb5h0ILPcc86YaIVDOPO-2HrMK-fzHYhDOvO6CQtL1sHBggiCeft3SicODA6Lld_vpgoOsckeaxYyQv2w8AMp5P08G3qiuHP_BZWGV01GGaqwp7azZNzX9YiPJF3XRJ2ICgTYr1qWI9hlyDdRacffH5riB6RynH_n6WaDIi01OQAek-RZwRVZq5zfpDnJsNRA71bLGVr9Kd7bry-0" />
                  <span className="w-px h-6 bg-white/30"></span>
                  <span className="font-headline font-bold tracking-widest text-primary-container uppercase">{t("rwa_token.visa_badge")}</span>
                </div>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 leading-tight">{t("rwa_token.visa_title1")} <br/>{t("rwa_token.visa_title2")}</h2>
                <p className="text-lg text-white/70 mb-12 leading-relaxed">
                  {t("rwa_token.visa_desc")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container" data-icon="currency_exchange">currency_exchange</span>
                    <div>
                      <h4 className="font-bold mb-1">{t("rwa_token.visa_box1_t")}</h4>
                      <p className="text-sm text-white/50">{t("rwa_token.visa_box1_d")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container" data-icon="account_balance_wallet">account_balance_wallet</span>
                    <div>
                      <h4 className="font-bold mb-1">{t("rwa_token.visa_box2_t")}</h4>
                      <p className="text-sm text-white/50">{t("rwa_token.visa_box2_d")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container" data-icon="speed">speed</span>
                    <div>
                      <h4 className="font-bold mb-1">{t("rwa_token.visa_box3_t")}</h4>
                      <p className="text-sm text-white/50">{t("rwa_token.visa_box3_d")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container" data-icon="no_accounts">no_accounts</span>
                    <div>
                      <h4 className="font-bold mb-1">{t("rwa_token.visa_box4_t")}</h4>
                      <p className="text-sm text-white/50">{t("rwa_token.visa_box4_d")}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 w-fit">
                  <span className="material-symbols-outlined text-primary-container" data-icon="smartphone">smartphone</span>
                  <span className="font-label text-sm font-semibold">{t("rwa_token.visa_float")}</span>
                </div>
              </div>
              <div className="hidden lg:flex col-span-6 items-center justify-center relative">
                {/* Abstract Visual Representative of Card/Wallet */}
                <div className="w-80 h-48 bg-gradient-to-br from-teal-500 to-teal-800 rounded-2xl shadow-2xl relative overflow-hidden transform rotate-12 hover:rotate-0 transition-transform duration-700">
                  <div className="absolute top-4 left-4 font-headline text-white font-bold opacity-50">{t("rwa_token.visa_card_type")}</div>
                  <div className="absolute bottom-6 left-6 text-white font-mono tracking-[0.2em]">•••• •••• •••• 8842</div>
                  <div className="absolute bottom-6 right-6 h-8 invert">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="Visa" className="h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtBTDHp90ehmwJz-ulDEMSQU3zYU9njdmmoYeCtSzEBxUpKOKnis6Nb7S25qqTfcVHVr_wbegMa72_Y7t_whBmiozOmqLBOZbcZ8diNGWBT_vdE4C2qfeWU8duSKQf03-P2oaMaXIqUSAEdDRPFfkpfWj1O_UbAZBpMedUWJ8qaG3oiw6U11ubYEqKbzjHEWK6TJ9pu-S9Qe5oPPFSJNHIWTP8wUNYsZcY5ez3ykURfM_YZZFd4gm6De9QS7CfoA9JdhYYwYtriqIa" />
                  </div>
                </div>
                <div className="absolute w-64 h-64 border border-teal-500/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap/Vision Section */}
        <section className="py-24 px-8 bg-surface-container-high relative overflow-hidden">
          <div className="max-w-screen-2xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6">{t("rwa_token.roadmap_title")}</h2>
              <p className="text-on-surface-variant leading-relaxed">
                {t("rwa_token.roadmap_desc")}
              </p>
            </div>
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 hidden lg:block -translate-y-1/2"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Step 1 */}
                <div className="relative bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
                  <div className="absolute -top-6 left-8 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold font-label uppercase">{t("rwa_token.phase1_badge")}</div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary-container" data-icon="rocket_launch">rocket_launch</span>
                    {t("rwa_token.phase1_t")}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{t("rwa_token.phase1_d")}</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase font-label">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {t("rwa_token.phase1_status")}
                  </div>
                </div>
                {/* Step 2 */}
                <div className="relative bg-surface-container-lowest p-8 rounded-2xl shadow-sm border-2 border-primary-container">
                  <div className="absolute -top-6 left-8 bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-xs font-bold font-label uppercase">{t("rwa_token.phase2_badge")}</div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary-container" data-icon="extension">extension</span>
                    {t("rwa_token.phase2_t")}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{t("rwa_token.phase2_d")}</p>
                  <div className="flex items-center gap-2 text-primary-container font-bold text-xs uppercase font-label">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                    {t("rwa_token.phase2_status")}
                  </div>
                </div>
                {/* Step 3 */}
                <div className="relative bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
                  <div className="absolute -top-6 left-8 bg-outline text-white px-4 py-1 rounded-full text-xs font-bold font-label uppercase">{t("rwa_token.phase3_badge")}</div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary-container" data-icon="language">language</span>
                    {t("rwa_token.phase3_t")}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{t("rwa_token.phase3_d")}</p>
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase font-label">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    {t("rwa_token.phase3_status")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Abstract background shape */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl"></div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 text-center bg-primary">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-primary mb-8">{t("rwa_token.cta_title1")} <br/>{t("rwa_token.cta_title2")}</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-on-primary text-primary px-10 py-4 rounded-xl font-headline font-bold uppercase tracking-widest hover:bg-primary-fixed transition-colors">{t("rwa_token.cta_btn_buy")}</button>
              <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-xl font-headline font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">{t("rwa_token.cta_btn_join")}</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 tonal-shift bg-slate-100 dark:bg-slate-900 flat no-shadows">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-screen-2xl mx-auto">
          <div className="mb-8 md:mb-0">
            <div className="font-space-grotesk font-black text-teal-900 dark:text-teal-100 text-xl uppercase mb-2">StemLink</div>
            <div className="font-manrope text-xs tracking-wide text-slate-500">© 2024 StemLink. Precision Engineering for Real World Assets.</div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="text-slate-500 hover:text-teal-500 transition-all hover:underline decoration-teal-500/30 font-manrope text-xs tracking-wide" href="#">Whitepaper</Link>
            <Link className="text-slate-500 hover:text-teal-500 transition-all hover:underline decoration-teal-500/30 font-manrope text-xs tracking-wide" href="#">Tokenomics</Link>
            <Link className="text-slate-500 hover:text-teal-500 transition-all hover:underline decoration-teal-500/30 font-manrope text-xs tracking-wide" href="#">Governance</Link>
            <Link className="text-slate-500 hover:text-teal-500 transition-all hover:underline decoration-teal-500/30 font-manrope text-xs tracking-wide" href="#">Privacy Policy</Link>
            <Link className="text-slate-500 hover:text-teal-500 transition-all hover:underline decoration-teal-500/30 font-manrope text-xs tracking-wide" href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
