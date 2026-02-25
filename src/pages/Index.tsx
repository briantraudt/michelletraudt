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

  return (
    <>
      <main role="main">
        {/* ===== DESKTOP: single viewport, no scroll ===== */}
        <div className="hidden lg:flex h-screen w-screen overflow-hidden">
          {/* Left column – identity & photo */}
          <div className="w-1/3 flex flex-col items-center justify-center border-r border-border px-8">
            <img src={heartImage} alt="Heart" className="w-12 h-12 mb-4 animate-[fade-in-up_600ms_ease-out_forwards] opacity-0" />
            <h1 className="font-serif text-4xl xl:text-5xl tracking-tight text-center animate-[fade-in-up_700ms_ease-out_forwards] opacity-0">
              Michelle Traudt
            </h1>
            <span className="text-lg xl:text-xl text-muted-foreground mt-1 font-serif animate-[fade-in-up_750ms_ease-out_forwards] opacity-0">
              Counselor & Speaker
            </span>
            <div className="accent-bar mt-4 animate-[fade-in-up_800ms_ease-out_forwards] opacity-0" />

            {/* Photo placeholder */}
            <div className="mt-6 w-36 xl:w-44 aspect-[3/4] rounded-2xl bg-muted/60 border border-border flex items-center justify-center animate-[fade-in-up_850ms_ease-out_forwards] opacity-0">
              <div className="text-center p-4">
                <img src={heartImage} alt="" className="w-6 h-6 mx-auto mb-2 opacity-25" aria-hidden="true" />
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Photo</span>
              </div>
            </div>
          </div>

          {/* Right area – about, services, contact */}
          <div className="flex-1 flex flex-col justify-center px-10 xl:px-16 py-8 gap-8 xl:gap-10">
            {/* About */}
            <div className="animate-[fade-in-up_800ms_ease-out_forwards] opacity-0">
              <div className="flex items-center gap-2 mb-2">
                <img src={heartImage} alt="" className="w-4 h-4 opacity-35" aria-hidden="true" />
                <h2 className="font-serif text-xl xl:text-2xl tracking-tight">About</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                Michelle is a dedicated counselor and speaker helping individuals and families navigate
                life's challenges with grace and resilience. She creates a warm, judgment-free space
                where clients feel seen, heard, and empowered.
              </p>
            </div>

            {/* Services */}
            <div className="animate-[fade-in-up_900ms_ease-out_forwards] opacity-0">
              <div className="flex items-center gap-2 mb-3">
                <img src={heartImage} alt="" className="w-4 h-4 opacity-35" aria-hidden="true" />
                <h2 className="font-serif text-xl xl:text-2xl tracking-tight">What I Offer</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: "Individual Counseling", desc: "A safe space to explore your thoughts and goals at your own pace." },
                  { title: "Speaking & Workshops", desc: "Engaging talks for organizations, churches, and community groups." },
                  { title: "Group Sessions", desc: "Connect with others in a guided group setting for shared growth." },
                ].map((s) => (
                  <div key={s.title} className="p-4 xl:p-5 rounded-xl border border-border hover:shadow-md transition-shadow">
                    <h3 className="font-serif text-sm xl:text-base mb-1">{s.title}</h3>
                    <p className="text-xs xl:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="animate-[fade-in-up_1000ms_ease-out_forwards] opacity-0">
              <div className="flex items-center gap-2 mb-3">
                <img src={heartImage} alt="" className="w-4 h-4 opacity-35" aria-hidden="true" />
                <h2 className="font-serif text-xl xl:text-2xl tracking-tight">Get in Touch</h2>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <a href="mailto:michelletraudt@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" /> michelletraudt@gmail.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" /> (123) 456-7890
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Your City, State
                </span>
              </div>
            </div>

            {/* Footer line */}
            <p className="text-[10px] text-muted-foreground/50 mt-auto">
              © {new Date().getFullYear()} Michelle Traudt
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
                {[
                  { title: "Individual Counseling", desc: "A safe space to explore your thoughts and goals at your own pace." },
                  { title: "Speaking & Workshops", desc: "Engaging talks for organizations, churches, and community groups." },
                  { title: "Group Sessions", desc: "Connect with others in a guided group setting for shared growth." },
                ].map((s) => (
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
