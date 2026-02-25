import React from "react";
import heartImage from "@/assets/heart.png";
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

  return (
    <>
      <main role="main" className="overflow-x-hidden">

        {/* ===== DESKTOP — single viewport, zero scroll ===== */}
        <div className="hidden lg:flex h-screen w-screen overflow-hidden flex-col">
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-[1280px] mx-auto px-10 xl:px-14">
              {/* Top row: Hero + Photo */}
              <div className="grid grid-cols-[1fr_auto] gap-10 xl:gap-14 items-start">

                {/* Left — Identity + value prop + services */}
                <div className="animate-[fade-in-up_700ms_ease-out_forwards] opacity-0 min-w-0">
                  {/* Name block */}
                  <div className="flex items-end gap-4 mb-1">
                    <h1 className="font-serif text-4xl xl:text-5xl tracking-tight leading-[1.05] text-foreground">
                      Michelle Traudt
                    </h1>
                    <img src={heartImage} alt="" className="w-5 h-5 opacity-50 mb-1" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-muted-foreground/75 tracking-normal">
                    Licensed Counselor & Speaker
                  </p>

                  {/* Value statement */}
                  <p className="mt-3 text-sm xl:text-base text-muted-foreground leading-relaxed max-w-xl" style={{ fontWeight: 450 }}>
                    Therapy is a gift, a safe space as we navigate life's challenges. Healing takes time and patience, but the freedom, growth, and transformation that come from it can truly change your life.
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-4">
                    <a
                      href="mailto:michelletraudt@gmail.com"
                      className="inline-block bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary transition-colors shadow-sm"
                    >
                      Schedule a Consultation
                    </a>
                    <a href="#about-mobile" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border">
                      Learn More
                    </a>
                  </div>

                  {/* Trust signals */}
                  <p className="mt-2.5 text-[11px] text-muted-foreground/50 tracking-wide">
                    Serving Dallas–Fort Worth · In-Person & Virtual Sessions · MA, Dallas Theological Seminary
                  </p>

                  {/* Services row */}
                  <div className="mt-6 grid grid-cols-3 gap-3 xl:gap-4">
                    {[
                      { title: "Individual Counseling", desc: "Anxiety, depression, and relational struggles — a steady place to slow down and gain clarity." },
                      { title: "Couples & Marriage", desc: "Premarital and marriage counseling for every stage of marriage and family life." },
                      { title: "Post-Abortion Healing", desc: "A compassionate space to explore grief, faith questions, and complex emotions without judgment." },
                    ].map((s) => (
                      <div key={s.title} className="bg-card rounded-xl p-4 xl:p-5 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-serif text-sm xl:text-base mb-1 text-foreground">{s.title}</h3>
                        <p className="text-[11px] xl:text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* What to expect */}
                  <div className="mt-5 grid grid-cols-3 gap-3 xl:gap-4">
                    {[
                      { title: "Compassionate Listening", desc: "No judgment, no rush — feel heard from the very first conversation." },
                      { title: "Practical Tools", desc: "Evidence-based strategies you can apply in daily life." },
                      { title: "Faith-Integrated", desc: "Christian faith woven in for those who wish — meeting you where you are." },
                    ].map((item) => (
                      <div key={item.title}>
                        <h4 className="font-serif text-xs xl:text-sm text-foreground mb-0.5">{item.title}</h4>
                        <p className="text-[11px] text-muted-foreground/70 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — Portrait */}
                <div className="animate-[fade-in-up_900ms_ease-out_forwards] opacity-0 shrink-0">
                  <div className="w-[260px] xl:w-[300px] 2xl:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={michellePortrait}
                      alt="Michelle Traudt, Licensed Counselor & Speaker"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom bar: CTA band + contact */}
              <div className="mt-6 flex items-center gap-6 xl:gap-8 bg-primary/10 rounded-xl px-6 py-4 animate-[fade-in_1000ms_ease-out_forwards] opacity-0">
                <p className="font-serif text-sm xl:text-base text-foreground/80 leading-snug shrink-0">
                  Taking the first step can feel overwhelming.<br className="hidden xl:block" />
                  <span className="text-foreground font-medium">You don't have to do it alone.</span>
                </p>
                <div className="h-8 w-px bg-border shrink-0" />
                <div className="flex items-center gap-6 text-xs text-muted-foreground">
                  <a href="mailto:michelletraudt@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                    <Mail className="w-3.5 h-3.5" /> michelletraudt@gmail.com
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                    <Phone className="w-3.5 h-3.5" /> (123) 456-7890
                  </a>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Dallas–Fort Worth, TX
                  </span>
                </div>
                <a
                  href="mailto:michelletraudt@gmail.com"
                  className="ml-auto shrink-0 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-xs font-semibold hover:bg-primary/80 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="px-10 xl:px-14 py-3 flex items-center justify-between max-w-[1280px] mx-auto w-full">
            <p className="text-[10px] text-muted-foreground/40">
              © {new Date().getFullYear()} Michelle Traudt · All rights reserved
            </p>
            <p className="text-[10px] text-muted-foreground/40">
              Christian Counselors of Texas
            </p>
          </footer>
        </div>

        {/* ===== MOBILE / TABLET — scrollable ===== */}
        <div className="lg:hidden">
          {/* Hero */}
          <section className="min-h-screen flex items-center py-16 px-6 sm:px-10">
            <div className="max-w-lg mx-auto w-full">
              <div className="animate-[fade-in-up_700ms_ease-out_forwards] opacity-0">
                <img src={heartImage} alt="Michelle Traudt Counseling" className="w-8 h-8 mb-4 opacity-70" />
                <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.1] text-foreground">
                  Michelle<br />Traudt
                </h1>
                <p className="text-sm text-muted-foreground/80 mt-2">Licensed Counselor & Speaker</p>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed" style={{ fontWeight: 450 }}>
                  Therapy is a gift, a safe space as we navigate life's challenges. Healing takes time and patience, but the freedom, growth, and transformation that come from it can truly change your life.
                </p>
                <a
                  href="mailto:michelletraudt@gmail.com"
                  className="mt-6 inline-block bg-primary/90 text-primary-foreground px-7 py-3 rounded-lg text-sm font-semibold hover:bg-primary transition-colors shadow-sm"
                >
                  Schedule a Consultation
                </a>
                <p className="mt-3 text-[11px] text-muted-foreground/50 tracking-wide">
                  Dallas–Fort Worth · In-Person & Virtual
                </p>
              </div>
            </div>
          </section>

          {/* Portrait */}
          <section className="px-6 sm:px-10 pb-16">
            <div className="max-w-xs mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <img src={michellePortrait} alt="Michelle Traudt" className="w-full h-full object-cover object-top" />
            </div>
          </section>

          {/* About */}
          <section id="about-mobile" className="py-16 px-6 sm:px-10 bg-card/50">
            <div className="max-w-lg mx-auto space-y-4 text-muted-foreground leading-relaxed text-sm">
              <h2 className="font-serif text-2xl text-foreground mb-4">About Michelle</h2>
              <p>I work with individuals dealing with anxiety, depression, and relational struggles, and I also work with couples, offering premarital counseling as well as marriage counseling for the many challenges and different stages of marriage and family life.</p>
              <p>I also work with women who are seeking hope and healing after an abortion. I am passionate about providing a safe, compassionate space where grief, shame, faith questions, and complex emotions can be explored without judgment.</p>
              <p>For those who wish, I am happy to incorporate Christian faith into the counseling process.</p>
              <div className="pt-4 text-xs text-muted-foreground/60">
                <p>MA in Counseling, Dallas Theological Seminary</p>
                <p>Christian Counselors of Texas</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-16 px-6 sm:px-10">
            <div className="max-w-lg mx-auto">
              <h2 className="font-serif text-2xl text-foreground mb-6">Services</h2>
              <div className="space-y-4">
                {[
                  { title: "Individual Counseling", desc: "Anxiety, depression, and relational struggles — a steady place to gain clarity." },
                  { title: "Couples & Marriage", desc: "Premarital and marriage counseling for every stage of family life." },
                  { title: "Post-Abortion Healing", desc: "A compassionate space for grief, faith questions, and complex emotions." },
                ].map((s) => (
                  <div key={s.title} className="bg-card rounded-xl p-5 shadow-sm">
                    <h3 className="font-serif text-base mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-14 px-6 sm:px-10 bg-primary">
            <div className="max-w-lg mx-auto text-center">
              <p className="font-serif text-xl text-primary-foreground leading-snug">
                Taking the first step can feel overwhelming. You don't have to do it alone.
              </p>
              <a href="mailto:michelletraudt@gmail.com" className="mt-5 inline-block bg-primary-foreground text-foreground px-7 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Book a Consultation
              </a>
            </div>
          </section>

          {/* Contact */}
          <section className="py-14 px-6 sm:px-10">
            <div className="max-w-lg mx-auto">
              <h2 className="font-serif text-2xl text-foreground mb-5">Get in Touch</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href="mailto:michelletraudt@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" /> michelletraudt@gmail.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" /> (123) 456-7890
                </a>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Dallas–Fort Worth, TX</span>
              </div>
            </div>
          </section>

          <footer className="py-6 px-6 border-t border-border text-center">
            <p className="text-[10px] text-muted-foreground/40">© {new Date().getFullYear()} Michelle Traudt · All rights reserved</p>
          </footer>
        </div>

      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Index;
