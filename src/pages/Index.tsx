import React from "react";
import heartImage from "@/assets/heart.png";
import michellePortrait from "@/assets/michelle-portrait.jpg";

const Index = () => {
  const services = [
    { title: "Individual Counseling", desc: "Anxiety, depression, and relational struggles" },
    { title: "Couples & Marriage", desc: "Premarital and marriage counseling" },
    { title: "Post-Abortion Healing", desc: "Restoration, freedom, and peace" },
  ];

  return (
    <>
      <main role="main" className="overflow-x-hidden">

        {/* ===== DESKTOP + TABLET — single viewport ===== */}
        <div className="hidden md:flex h-screen w-screen overflow-hidden flex-col">
          <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10 xl:px-14">
            <div className="grid grid-cols-[1fr_auto] gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">

              {/* Left — Text stack */}
              <div className="animate-[fade-in-up_700ms_ease-out_forwards] opacity-0 min-w-0">
                <div className="w-fit">
                  <div className="flex justify-center">
                    <img src={heartImage} alt="" className="w-8 h-8 mb-3 opacity-80" aria-hidden="true" />
                  </div>
                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.05] text-foreground">
                    Michelle Traudt
                  </h1>
                  <p className="text-xs md:text-sm text-muted-foreground/70 mt-1.5 text-center">
                    Licensed Professional Counselor Associate
                  </p>
                </div>

                <p className="mt-3 md:mt-4 lg:mt-5 text-sm md:text-base xl:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  You don't have to carry it alone. Counseling offers a steady, compassionate
                  space to work through life's challenges — whether you're navigating anxiety,
                  relationship struggles, or a deeply personal journey toward healing.
                </p>

                <a
                  href="mailto:hope@newlifecounselingcenter.com?subject=Schedule%20an%20appt%20with%20Michelle%20Traudt"
                  className="mt-4 md:mt-5 lg:mt-6 inline-block bg-primary text-primary-foreground px-6 md:px-8 py-2.5 md:py-3 rounded-lg text-xs md:text-sm font-semibold hover:bg-primary/80 transition-colors shadow-sm"
                >
                  Schedule a Consultation
                </a>

                {/* Services */}
                <div className="mt-5 md:mt-6 lg:mt-8 flex gap-2 md:gap-3 xl:gap-4">
                  {services.map((s) => (
                    <div
                      key={s.title}
                      className="flex-1 bg-card rounded-xl px-3 py-3 md:px-4 md:py-4 xl:px-5 xl:py-5"
                    >
                      <h3 className="font-serif text-xs md:text-sm xl:text-base text-foreground leading-snug">
                        {s.title}
                      </h3>
                      <p className="text-[10px] md:text-[11px] xl:text-xs text-muted-foreground mt-1 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Address */}
                <div className="mt-4 md:mt-5 lg:mt-6 text-center">
                  <a href="https://www.newlifecounselingcenter.com/" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-semibold text-foreground/70 hover:text-foreground transition-colors">
                    New Life Counseling Center
                  </a>
                  <p className="text-[10px] md:text-[11px] xl:text-xs text-muted-foreground tracking-wide mt-0.5">
                    Southwest Location · 3355 Bee Caves Road, #101 · Austin, Texas 78746
                  </p>
                </div>
              </div>

              {/* Right — Portrait */}
              <div className="animate-[fade-in-up_900ms_ease-out_forwards] opacity-0 shrink-0 flex flex-col items-center">
                <div className="w-[180px] md:w-[220px] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={michellePortrait}
                    alt="Michelle Traudt, Licensed Counselor & Speaker"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-3 md:mt-4 text-[10px] md:text-[11px] xl:text-xs text-muted-foreground leading-relaxed text-center max-w-[180px] md:max-w-[220px] lg:max-w-[280px] xl:max-w-[320px]">
                  <p className="font-semibold text-foreground/70 mb-0.5">Education</p>
                  <p>MA in Counseling, Dallas Theological Seminary</p>
                  <p>BS in Merchandising, Texas Tech University</p>
                  <p className="font-semibold text-foreground/70 mt-2 md:mt-2.5 mb-0.5">Professional Memberships</p>
                  <p>Christian Counselors of Texas</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* ===== MOBILE only ===== */}
        <div className="md:hidden min-h-screen flex flex-col px-6 py-10">
          <div className="flex-1 flex flex-col items-center justify-center text-center animate-[fade-in-up_700ms_ease-out_forwards] opacity-0">
            {/* Portrait */}
            <div className="w-40 aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-4">
              <img src={michellePortrait} alt="Michelle Traudt" className="w-full h-full object-cover object-top" />
            </div>

            {/* Heart */}
            <img src={heartImage} alt="" className="w-7 h-7 mb-2 opacity-80" aria-hidden="true" />

            <h1 className="font-serif text-3xl tracking-tight leading-[1.1] text-foreground">
              Michelle Traudt
            </h1>
            <p className="text-xs text-muted-foreground/70 mt-1">Licensed Professional Counselor Associate</p>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              You don't have to carry it alone. Counseling offers a steady, compassionate
              space to work through life's challenges.
            </p>

            <a
              href="mailto:hope@newlifecounselingcenter.com?subject=Schedule%20an%20appt%20with%20Michelle%20Traudt"
              className="mt-4 inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-primary/80 transition-colors shadow-sm"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Address + Services at bottom */}
          <div className="text-center mt-4">
            <a href="https://www.newlifecounselingcenter.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors">
              New Life Counseling Center
            </a>
            <p className="text-[10px] text-muted-foreground mt-0.5">3355 Bee Caves Road, #101 · Austin, TX 78746</p>

            {/* Services */}
            <div className="mt-5 w-full max-w-sm mx-auto flex gap-3">
              {services.map((s) => (
                <div key={s.title} className="flex-1 bg-card rounded-xl px-4 py-4 text-center shadow-sm">
                  <h3 className="font-serif text-xs text-foreground leading-snug">{s.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
    </>
  );
};

export default Index;
