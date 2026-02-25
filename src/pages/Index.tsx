import React from "react";
import michellePortrait from "@/assets/michelle-portrait.jpg";
import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michelle Traudt",
    url: "https://michelletraudt.com",
    jobTitle: "Licensed Counselor & Speaker",
  };

  const services = [
    { title: "Individual Counseling", desc: "Anxiety, depression, and relational struggles" },
    { title: "Couples & Marriage", desc: "Premarital and marriage counseling" },
    { title: "Post-Abortion Healing", desc: "Restoration, freedom, and peace" },
  ];

  return (
    <>
      <main role="main" className="overflow-x-hidden">

        {/* ===== DESKTOP — single viewport ===== */}
        <div className="hidden lg:flex h-screen w-screen overflow-hidden items-center">
          <div className="w-full max-w-[1200px] mx-auto px-10 xl:px-14">
            <div className="grid grid-cols-[1fr_auto] gap-12 xl:gap-16 items-center">

              {/* Left — Text stack */}
              <div className="animate-[fade-in-up_700ms_ease-out_forwards] opacity-0 min-w-0">
                <h1 className="font-serif text-5xl xl:text-6xl tracking-tight leading-[1.05] text-foreground">
                  Michelle Traudt
                </h1>
                <p className="text-sm text-muted-foreground/70 mt-1.5">
                  Licensed Counselor & Speaker
                </p>

                <p className="mt-5 text-base xl:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  You don't have to carry it alone. Counseling offers a steady, compassionate
                  space to work through life's challenges — whether you're navigating anxiety,
                  relationship struggles, or a deeply personal journey toward healing.
                </p>

                <a
                  href="mailto:michelletraudt@gmail.com"
                  className="mt-6 inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-sm font-semibold hover:bg-primary/80 transition-colors shadow-sm"
                >
                  Schedule a Consultation
                </a>

                {/* Services — integrated, not a separate section */}
                <div className="mt-8 flex gap-3 xl:gap-4">
                  {services.map((s) => (
                    <div
                      key={s.title}
                      className="flex-1 bg-card rounded-xl px-4 py-4 xl:px-5 xl:py-5"
                    >
                      <h3 className="font-serif text-sm xl:text-base text-foreground leading-snug">
                        {s.title}
                      </h3>
                      <p className="text-[11px] xl:text-xs text-muted-foreground/70 mt-1 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[11px] xl:text-xs text-muted-foreground/50 tracking-wide">
                  New Life Counseling Center · Southwest Location · 3355 Bee Caves Road, #101 · Austin, Texas 78746
                </p>
              </div>

              {/* Right — Portrait */}
              <div className="animate-[fade-in-up_900ms_ease-out_forwards] opacity-0 shrink-0 flex flex-col items-center">
                <div className="w-[280px] xl:w-[320px] 2xl:w-[360px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={michellePortrait}
                    alt="Michelle Traudt, Licensed Counselor & Speaker"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 text-[11px] xl:text-xs text-muted-foreground/60 leading-relaxed text-center max-w-[280px] xl:max-w-[320px]">
                  <p className="font-medium text-muted-foreground/70 mb-0.5">Education</p>
                  <p>MA in Counseling, Dallas Theological Seminary</p>
                  <p>BS in Merchandising, Texas Tech University</p>
                  <p className="font-medium text-muted-foreground/70 mt-2.5 mb-0.5">Professional Memberships</p>
                  <p>Christian Counselors of Texas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== MOBILE / TABLET ===== */}
        <div className="lg:hidden">
          <section className="min-h-screen flex items-center py-16 px-6 sm:px-10">
            <div className="max-w-lg mx-auto w-full animate-[fade-in-up_700ms_ease-out_forwards] opacity-0">
              <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.1] text-foreground">
                Michelle<br />Traudt
              </h1>
              <p className="text-sm text-muted-foreground/70 mt-2">Licensed Counselor & Speaker</p>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                You don't have to carry it alone. Counseling offers a steady, compassionate
                space to work through life's challenges — whether you're navigating anxiety,
                relationship struggles, or a deeply personal journey toward healing.
              </p>
              <a
                href="mailto:michelletraudt@gmail.com"
                className="mt-6 inline-block bg-primary text-primary-foreground px-7 py-3 rounded-lg text-sm font-semibold hover:bg-primary/80 transition-colors shadow-sm"
              >
                Schedule a Consultation
              </a>
            </div>
          </section>

          <section className="px-6 sm:px-10 pb-12">
            <div className="max-w-xs mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <img src={michellePortrait} alt="Michelle Traudt" className="w-full h-full object-cover object-top" />
            </div>
          </section>

          <section className="py-12 px-6 sm:px-10">
            <div className="max-w-lg mx-auto space-y-3">
              {services.map((s) => (
                <div key={s.title} className="bg-card rounded-xl p-5">
                  <h3 className="font-serif text-base text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground/70 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-12 px-6 sm:px-10 bg-card/50">
            <div className="max-w-lg mx-auto space-y-3 text-sm text-muted-foreground">
              <a href="mailto:michelletraudt@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" /> michelletraudt@gmail.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" /> (123) 456-7890
              </a>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Dallas–Fort Worth, TX</span>
            </div>
          </section>

          <footer className="py-6 px-6 text-center">
            <p className="text-[10px] text-muted-foreground/40">© {new Date().getFullYear()} Michelle Traudt</p>
          </footer>
        </div>

      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Index;
