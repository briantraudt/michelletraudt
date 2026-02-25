import React from "react";
import heartImage from "@/assets/heart.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michelle Traudt",
    url: "https://michelletraudt.com",
    jobTitle: "Counselor & Speaker",
  };

  const services = [
    { title: "Individual Counseling", desc: "A safe space to explore your thoughts and goals at your own pace." },
    { title: "Speaking & Workshops", desc: "Engaging talks for organizations, churches, and community groups." },
    { title: "Group Sessions", desc: "Connect with others in a guided group setting for shared growth." },
  ];

  return (
    <>
      <main role="main">
        {/* ===== DESKTOP: single viewport, no scroll ===== */}
        <div className="hidden lg:grid h-screen w-screen overflow-hidden grid-cols-[1fr_1.8fr] grid-rows-[1fr_auto]">
          {/* Left column – identity & photo */}
          <div className="row-span-2 flex flex-col items-center justify-center bg-muted/20 border-r border-border relative overflow-hidden">
            {/* Subtle decorative hearts */}
            <img src={heartImage} alt="" className="absolute top-8 left-8 w-6 h-6 opacity-[0.06] -rotate-12" aria-hidden="true" />
            <img src={heartImage} alt="" className="absolute bottom-12 right-10 w-8 h-8 opacity-[0.06] rotate-12" aria-hidden="true" />
            <img src={heartImage} alt="" className="absolute top-1/4 right-6 w-5 h-5 opacity-[0.04] rotate-6" aria-hidden="true" />

            <div className="flex flex-col items-center px-10">
              <img src={heartImage} alt="Heart" className="w-14 h-14 mb-5 animate-[fade-in-up_600ms_ease-out_forwards] opacity-0" />
              <h1 className="font-serif text-4xl xl:text-5xl 2xl:text-6xl tracking-tight text-center animate-[fade-in-up_700ms_ease-out_forwards] opacity-0 leading-tight">
                Michelle<br />Traudt
              </h1>
              <span className="text-base xl:text-lg 2xl:text-xl text-muted-foreground mt-2 font-serif animate-[fade-in-up_750ms_ease-out_forwards] opacity-0">
                Counselor & Speaker
              </span>
              <div className="accent-bar mt-5 animate-[fade-in-up_800ms_ease-out_forwards] opacity-0" />

              {/* Photo placeholder */}
              <div className="mt-8 w-44 xl:w-52 2xl:w-60 aspect-[3/4] rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center animate-[fade-in-up_850ms_ease-out_forwards] opacity-0">
                <div className="text-center p-4">
                  <img src={heartImage} alt="" className="w-7 h-7 mx-auto mb-2 opacity-20" aria-hidden="true" />
                  <span className="text-[11px] text-muted-foreground uppercase tracking-widest">Photo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right area – content */}
          <div className="flex flex-col justify-center px-12 xl:px-16 2xl:px-20 py-10 gap-10 xl:gap-12">
            {/* About */}
            <div className="animate-[fade-in-up_800ms_ease-out_forwards] opacity-0">
              <div className="flex items-center gap-2.5 mb-3">
                <img src={heartImage} alt="" className="w-5 h-5 opacity-40" aria-hidden="true" />
                <h2 className="font-serif text-2xl xl:text-3xl tracking-tight">About</h2>
              </div>
              <p className="text-sm xl:text-base text-muted-foreground leading-relaxed max-w-2xl">
                Michelle is a dedicated counselor and speaker helping individuals and families navigate
                life's challenges with grace and resilience. She creates a warm, judgment-free space
                where clients feel seen, heard, and empowered to make meaningful changes in their lives.
              </p>
            </div>

            {/* Services */}
            <div className="animate-[fade-in-up_900ms_ease-out_forwards] opacity-0">
              <div className="flex items-center gap-2.5 mb-4">
                <img src={heartImage} alt="" className="w-5 h-5 opacity-40" aria-hidden="true" />
                <h2 className="font-serif text-2xl xl:text-3xl tracking-tight">What I Offer</h2>
              </div>
              <div className="grid grid-cols-3 gap-4 xl:gap-5">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="group p-5 xl:p-6 rounded-2xl border border-border bg-muted/20 hover:bg-background hover:shadow-md hover:border-border/80 transition-all duration-300"
                  >
                    <img src={heartImage} alt="" className="w-5 h-5 mb-3 opacity-15 group-hover:opacity-30 transition-opacity" aria-hidden="true" />
                    <h3 className="font-serif text-sm xl:text-base mb-1.5">{s.title}</h3>
                    <p className="text-xs xl:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="animate-[fade-in-up_1000ms_ease-out_forwards] opacity-0">
              <div className="flex items-center gap-2.5 mb-4">
                <img src={heartImage} alt="" className="w-5 h-5 opacity-40" aria-hidden="true" />
                <h2 className="font-serif text-2xl xl:text-3xl tracking-tight">Get in Touch</h2>
              </div>
              <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
                <a href="mailto:michelletraudt@gmail.com" className="flex items-center gap-2.5 hover:text-foreground transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-muted/60 flex items-center justify-center group-hover:bg-muted transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  michelletraudt@gmail.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2.5 hover:text-foreground transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-muted/60 flex items-center justify-center group-hover:bg-muted transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  (123) 456-7890
                </a>
                <span className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-muted/60 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  Your City, State
                </span>
              </div>
            </div>
          </div>

          {/* Footer pinned to bottom-right */}
          <div className="px-12 xl:px-16 2xl:px-20 pb-5 flex items-end">
            <p className="text-[11px] text-muted-foreground/40">
              © {new Date().getFullYear()} Michelle Traudt · All rights reserved
            </p>
          </div>
        </div>

        {/* ===== MOBILE / TABLET: scrollable sections ===== */}
        <div className="lg:hidden">
          {/* Hero */}
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-md mx-auto">
              <img src={heartImage} alt="Heart" className="w-16 h-16 mx-auto mb-6 animate-[fade-in-up_600ms_ease-out_forwards] opacity-0" />
              <h1 className="font-serif tracking-tight text-4xl sm:text-5xl animate-[fade-in-up_700ms_ease-out_forwards] opacity-0">
                <span className="block">Michelle Traudt</span>
                <span className="block text-xl sm:text-2xl text-muted-foreground mt-2">Counselor & Speaker</span>
              </h1>
              <div className="mx-auto mt-6 accent-bar animate-[fade-in-up_800ms_ease-out_forwards] opacity-0" />
              <p className="mt-8 text-base text-muted-foreground animate-[fade-in-up_900ms_ease-out_forwards] opacity-0 leading-relaxed">
                Helping you find clarity, confidence, and connection — one conversation at a time.
              </p>
            </div>
          </section>

          {/* About + Photo */}
          <section className="py-16 px-6">
            <div className="max-w-md mx-auto">
              <div className="aspect-[3/4] max-w-[240px] mx-auto rounded-2xl bg-muted/60 border border-border flex items-center justify-center mb-8">
                <div className="text-center p-6">
                  <img src={heartImage} alt="" className="w-8 h-8 mx-auto mb-3 opacity-25" aria-hidden="true" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Photo Coming Soon</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <img src={heartImage} alt="" className="w-5 h-5 opacity-35" aria-hidden="true" />
                <h2 className="font-serif text-2xl tracking-tight">About</h2>
              </div>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                <p>Michelle is a dedicated counselor and speaker helping individuals and families navigate life's challenges with grace and resilience.</p>
                <p>She creates a warm, judgment-free space where clients feel seen, heard, and empowered to make meaningful changes.</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-16 px-6 bg-muted/30">
            <div className="max-w-md mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <img src={heartImage} alt="" className="w-5 h-5 opacity-35" aria-hidden="true" />
                <h2 className="font-serif text-2xl tracking-tight">What I Offer</h2>
              </div>
              <div className="space-y-4">
                {services.map((s) => (
                  <div key={s.title} className="p-5 rounded-xl border border-border bg-background">
                    <h3 className="font-serif text-base mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="py-16 px-6">
            <div className="max-w-md mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <img src={heartImage} alt="" className="w-5 h-5 opacity-35" aria-hidden="true" />
                <h2 className="font-serif text-2xl tracking-tight">Get in Touch</h2>
              </div>
              <div className="space-y-4">
                <a href="mailto:michelletraudt@gmail.com" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" /> michelletraudt@gmail.com
                </a>
                <a href="tel:+1234567890" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" /> (123) 456-7890
                </a>
                <span className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" /> Your City, State
                </span>
              </div>
              <div className="mt-8 accent-bar mx-auto" />
              <p className="text-[10px] text-muted-foreground/50 mt-6">© {new Date().getFullYear()} Michelle Traudt</p>
            </div>
          </section>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Index;
