"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import Link from "next/link";

export default function Page() {
  const { t } = useLanguage();

  return (
    <>


      <main className="pt-24">
        <section className="relative h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover grayscale-[20%] brightness-[0.7]" alt="microscopic close-up of vibrant blue and teal glowing stem cells multiplying in a high-tech clinical environment with soft bokeh light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-xyO3jzYPOJPMCUWUPo8arh0eshmapulMFI3KkTKQSJe9MR8B8zB438MLX53UptwEAzDMNQYAubnBbKmM3nfm3x6L_5_6Tj88GKtw-ApHWOtod3-vioK8LdW5DFbJ4IroI8Fg4GpxHzcuCysGtSY_vYDkRLGC_dbc6DBSpCq1cuhEE-aftUfpZ6ZxCryu0brl0djV7Xq6mUoVhQxMxKaFVtfO012dXfpy4hWGzNePPH2Ab7YzoOHPfNPFwCmG4qDDQJwdwu2SkxzN"/>
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/80 via-on-background/40 to-transparent"></div>
          </div>
          <div className="container mx-auto px-12 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1 rounded-full bg-primary-container text-on-primary-container font-label text-xs font-bold uppercase tracking-widest mb-6">{t("home.hero_badge")}</span>
              <h1 className="text-white font-headline text-6xl md:text-8xl font-bold leading-[1.1] tracking-tighter mb-8">
                {t("home.hero_title1")}<br/><span className="text-primary-container">{t("home.hero_title2")}</span>
              </h1>
              <p className="text-surface-variant font-body text-xl max-w-2xl leading-relaxed mb-12">
                {t("home.hero_desc")}
              </p>
              <div className="flex gap-4">
                <Link href="/research" className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                  {t("home.hero_btn")} <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface">
          <div className="container mx-auto px-12">
            <div className="editorial-grid">
              <div className="col-span-12 md:col-span-5 mb-12 md:mb-0">
                <div className="sticky top-32">
                  <h2 className="text-primary font-headline text-5xl font-bold tracking-tighter mb-8">{t("home.philosophy_title")}</h2>
                  <div className="space-y-6">
                    <div className="p-8 bg-surface-container-low rounded-xl border-l-4 border-primary-container">
                      <div className="text-4xl font-headline font-black text-on-background mb-2">{t("home.philosophy_subtitle1")}</div>
                      <p className="text-on-surface-variant font-body text-lg italic">{t("home.philosophy_subtitle2")}</p>
                    </div>
                    <p className="text-on-surface text-xl leading-loose font-medium">
                      {t("home.philosophy_desc1")} <br/>
                      <span className="text-primary font-bold underline underline-offset-8">{t("home.philosophy_desc2")}</span>
                      {t("home.philosophy_desc3")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt="Modern laboratory with glass walls and white minimal furniture, scientists in lab coats working with high-precision medical equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-uoS_2wFYh29pHyrXeOhPJ28a9NAolReVinmrPIVEfbmveob3tWjs1qwYPgDp17Pn2koADgxA-fOI3xY-XusJBpPTPa_khPNX1f1Vau1K52pLcKkPmP3HjzOR2bmCjCIWhPD6NamsEkogPEEcW1bvC1_z7kMIdJ5YB1GvmyVpsDIKKqN8F0mz3H5oEqWT-v0hPJ9EIZgZVC6SZswpDXJUKtvZzBGSsf4tQGJjhX8GVf8FkKZEvozxkaz9418NP1_5pjVhk7tZPg8S"/>
                  <div className="absolute bottom-8 right-8 bg-white/90 glass-effect p-6 rounded-xl max-w-xs shadow-lg">
                    <p className="text-on-surface text-sm font-label uppercase tracking-widest mb-2 opacity-60">{t("home.global_presence")}</p>
                    <p className="text-on-surface font-bold text-lg">{t("home.global_presence_desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-on-background text-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-12">
            <div className="mb-20">
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6">{t("home.core_tech_title")}</h2>
              <p className="text-surface-variant text-xl max-w-3xl">{t("home.core_tech_sub")}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              <div className="bg-surface-container-highest/10 p-5 md:p-10 rounded-xl backdrop-blur-sm border border-white/5 w-full">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="p-2 bg-primary-container rounded-lg"><span className="material-symbols-outlined text-on-primary-container">science</span></span>
                  {t("home.comparison_title")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="font-label text-xs uppercase tracking-widest text-surface-variant/60">{t("home.trad_method")}</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-surface-variant/80">
                        <span className="material-symbols-outlined text-error text-sm mt-1">cancel</span>
                        {t("home.trad_1")}
                      </li>
                      <li className="flex items-start gap-2 text-surface-variant/80">
                        <span className="material-symbols-outlined text-error text-sm mt-1">cancel</span>
                        {t("home.trad_2")}
                      </li>
                      <li className="flex items-start gap-2 text-surface-variant/80">
                        <span className="material-symbols-outlined text-error text-sm mt-1">cancel</span>
                        {t("home.trad_3")}
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4 p-5 md:p-6 bg-primary-container/10 rounded-xl border border-primary-container/20">
                    <p className="font-label text-xs uppercase tracking-widest text-primary-container">{t("home.reva_innov")}</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-primary-container font-bold">
                        <span className="material-symbols-outlined text-sm mt-1">check_circle</span>
                        {t("home.reva_1")}
                      </li>
                      <li className="flex items-start gap-2 text-primary-container font-bold">
                        <span className="material-symbols-outlined text-sm mt-1">check_circle</span>
                        {t("home.reva_2")}
                      </li>
                      <li className="flex items-start gap-2 text-primary-container font-bold">
                        <span className="material-symbols-outlined text-sm mt-1">check_circle</span>
                        {t("home.reva_3")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-12 rounded-2xl w-full text-slate-900 shadow-xl border border-slate-100">
                <h3 className="text-4xl font-extrabold mb-12 tracking-tighter">{t("home.six_adv")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-teal-500 text-[28px] font-medium" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>biotech</span>
                      <h4 className="font-extrabold text-[#111] text-[22px] tracking-tight">{t("home.adv_1")}</h4>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium text-[15px]" dangerouslySetInnerHTML={{ __html: t("home.adv_desc_1") }} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-teal-500 text-[28px] font-medium" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>electric_bolt</span>
                      <h4 className="font-extrabold text-[#111] text-[22px] tracking-tight">{t("home.adv_2")}</h4>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium text-[15px]" dangerouslySetInnerHTML={{ __html: t("home.adv_desc_2") }} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-teal-500 text-[28px] font-medium" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>language</span>
                      <h4 className="font-extrabold text-[#111] text-[22px] tracking-tight">{t("home.adv_3")}</h4>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium text-[15px]" dangerouslySetInnerHTML={{ __html: t("home.adv_desc_3") }} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-teal-500 text-[28px] font-medium" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>domain</span>
                      <h4 className="font-extrabold text-[#111] text-[22px] tracking-tight">{t("home.adv_4")}</h4>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium text-[15px]" dangerouslySetInnerHTML={{ __html: t("home.adv_desc_4") }} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-teal-500 text-[28px] font-medium" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>payments</span>
                      <h4 className="font-extrabold text-[#111] text-[22px] tracking-tight">{t("home.adv_5")}</h4>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium text-[15px]" dangerouslySetInnerHTML={{ __html: t("home.adv_desc_5") }} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-teal-500 text-[28px] font-medium" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>verified_user</span>
                      <h4 className="font-extrabold text-[#111] text-[22px] tracking-tight">{t("home.adv_6")}</h4>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium text-[15px]" dangerouslySetInnerHTML={{ __html: t("home.adv_desc_6") }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface-container-low">
          <div className="container mx-auto px-12">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="flex-1 order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
                  <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-surface-container-high">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full rounded-xl grayscale hover:grayscale-0 transition-all duration-700" alt="Stylized glowing digital map of the world with lines connecting Seoul, Tokyo, Beijing, and Abu Dhabi highlighting global biotech network" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuwpYEcoRIS8p5pFXVMwY_4k0ihnlIKGv13EZeZUAb1wBFcFRmymd15pPNqvwuBMNsGvB2-vLQnsRrtQrIaJXI-zr6Ppu5zMhE-kr2CZDRbWljJ5mx40JLnJd1Fm_M1KC9uVgfxY8sfufg1cBW2gwRreMk5QvSbgAmyDvmgAT1mkBvvm9FeGY08mT_AonOLyQcO7UZC-xHXoQvt229De1zGkDlePXM4UYQ4JQasBnPa7EITmIutBUQU070KW6X1u0_3fb9pSGVRnYl"/>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary/90 text-white p-6 rounded-xl text-center glass-effect">
                        <p className="font-headline font-bold text-3xl">{t("home.hubs_title")}</p>
                        <p className="text-xs uppercase tracking-tighter opacity-80">{t("home.hubs_sub")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <span className="text-primary font-bold font-label tracking-widest text-sm uppercase mb-4 block">{t("home.intl_exp")}</span>
                <h2 className="font-headline text-5xl font-bold tracking-tighter mb-8 text-on-background">{t("home.uae_title")}</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  {t("home.uae_desc")}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-surface-container-high">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    <span className="font-bold">{t("home.uae_item1")}</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-surface-container-high">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                    <span className="font-bold">{t("home.uae_item2")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-white">
          <div className="container mx-auto px-12">
            <div className="text-center mb-20">
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6">{t("home.proj_title")}</h2>
              <p className="text-on-surface-variant text-xl">{t("home.proj_sub")}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="p-8 bg-surface-container-low rounded-xl text-center hover:bg-primary group transition-all duration-300">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-4">coronavirus</span>
                <h4 className="font-bold group-hover:text-white">{t("home.p_cancer")}</h4>
                <p className="text-xs text-on-surface-variant group-hover:text-surface-variant mt-2">{t("home.p_cancer_sub")}</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-xl text-center hover:bg-primary group transition-all duration-300">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-4">psychology</span>
                <h4 className="font-bold group-hover:text-white">{t("home.p_park")}</h4>
                <p className="text-xs text-on-surface-variant group-hover:text-surface-variant mt-2">{t("home.p_park_sub")}</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-xl text-center hover:bg-primary group transition-all duration-300">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-4">bloodtype</span>
                <h4 className="font-bold group-hover:text-white">{t("home.p_diab")}</h4>
                <p className="text-xs text-on-surface-variant group-hover:text-surface-variant mt-2">{t("home.p_diab_sub")}</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-xl text-center hover:bg-primary group transition-all duration-300">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-4">cardiology</span>
                <h4 className="font-bold group-hover:text-white">{t("home.p_heart")}</h4>
                <p className="text-xs text-on-surface-variant group-hover:text-surface-variant mt-2">{t("home.p_heart_sub")}</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-xl text-center hover:bg-primary group transition-all duration-300">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-4">accessibility_new</span>
                <h4 className="font-bold group-hover:text-white">{t("home.p_arth")}</h4>
                <p className="text-xs text-on-surface-variant group-hover:text-surface-variant mt-2">{t("home.p_arth_sub")}</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-xl text-center hover:bg-primary group transition-all duration-300">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-4">visibility</span>
                <h4 className="font-bold group-hover:text-white">{t("home.p_vision")}</h4>
                <p className="text-xs text-on-surface-variant group-hover:text-surface-variant mt-2">{t("home.p_vision_sub")}</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-xl text-center hover:bg-primary group transition-all duration-300">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-4">nephrology</span>
                <h4 className="font-bold group-hover:text-white">{t("home.p_kidney")}</h4>
                <p className="text-xs text-on-surface-variant group-hover:text-surface-variant mt-2">{t("home.p_kidney_sub")}</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-xl text-center hover:bg-primary group transition-all duration-300">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-4">respiratory_rate</span>
                <h4 className="font-bold group-hover:text-white">{t("home.p_pulm")}</h4>
                <p className="text-xs text-on-surface-variant group-hover:text-surface-variant mt-2">{t("home.p_pulm_sub")}</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-xl text-center hover:bg-primary group transition-all duration-300">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-4">healing</span>
                <h4 className="font-bold group-hover:text-white">{t("home.p_liver")}</h4>
                <p className="text-xs text-on-surface-variant group-hover:text-surface-variant mt-2">{t("home.p_liver_sub")}</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-xl text-center hover:bg-primary group transition-all duration-300">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-4">face_6</span>
                <h4 className="font-bold group-hover:text-white">{t("home.p_aging")}</h4>
                <p className="text-xs text-on-surface-variant group-hover:text-surface-variant mt-2">{t("home.p_aging_sub")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-primary-container/10 border-y border-primary-container/20">
          <div className="container mx-auto px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-full mb-8 font-bold text-sm">
                <span className="material-symbols-outlined text-lg">verified</span>
                {t("home.guar_badge")}
              </div>
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-8 text-on-background">
                {t("home.guar_title1")}<span className="text-primary">{t("home.guar_title2")}</span>
              </h2>
              <p className="text-on-surface text-xl leading-relaxed mb-12">
                {t("home.guar_desc1")}<span className="font-bold text-primary underline underline-offset-4">{t("home.guar_desc2")}</span>{t("home.guar_desc3")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h5 className="font-bold text-on-surface-variant mb-4 uppercase tracking-wider text-xs">Step 01</h5>
                  <p className="font-bold text-lg">{t("home.step1")}</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h5 className="font-bold text-on-surface-variant mb-4 uppercase tracking-wider text-xs">Step 02</h5>
                  <p className="font-bold text-lg">{t("home.step2")}</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h5 className="font-bold text-on-surface-variant mb-4 uppercase tracking-wider text-xs">Step 03</h5>
                  <p className="font-bold text-lg">{t("home.step3")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface">
          <div className="container mx-auto px-12">
            <h2 className="font-headline text-5xl font-bold tracking-tighter mb-16 text-on-background">{t("home.exp_title")}</h2>
            
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
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm" href="#">Company Overview</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm" href="#">Core Tech</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm" href="#">UAE Royal Care</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold mb-6 text-on-background">Information</h4>
            <ul className="space-y-4">
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm" href="#">{t("footer.privacy")}</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 text-sm" href="#">{t("footer.terms")}</a></li>
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
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-xs">
          {t("footer.copyright")}
        </div>
      </footer>
    </>
  );
}
