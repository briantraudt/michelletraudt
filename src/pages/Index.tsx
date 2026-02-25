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

        {/* ─── SECTION 1 — HERO ─── */}
        <section className="min-h-screen flex items-center">
          <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 py-16 lg:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left — Copy */}
              <div className="animate-[fade-in-up_700ms_ease-out_forwards] opacity-0">
                <img
                  src={heartImage}
                  alt="Michelle Traudt Counseling"
                  className="w-10 h-10 mb-6 opacity-80"
                />
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-foreground">
                  Michelle<br />Traudt
                </h1>
                <p className="font-sans text-base sm:text-lg text-muted-foreground mt-3 tracking-wide">
                  Licensed Counselor & Speaker
                </p>
                <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Therapy is a gift, a safe space as we navigate life's challenges. Healing takes time and patience, but the freedom, growth, and transformation that come from it can truly change your life.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-block bg-primary text-primary-foreground px-7 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Schedule a Consultation
                  </a>
                  <a
                    href="#about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right — Portrait placeholder */}
              <div className="animate-[fade-in-up_900ms_ease-out_forwards] opacity-0 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm lg:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={michellePortrait}
                    alt="Michelle Traudt, Licensed Counselor & Speaker"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2 — ABOUT ─── */}
        <section id="about" className="py-24 sm:py-32 bg-card/50">
          <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-8">
              About Michelle
            </h2>
            <div className="max-w-2xl space-y-5 text-muted-foreground leading-[1.75] text-base sm:text-lg">
              <p>
                I work with individuals dealing with anxiety, depression, and relational
                struggles, and I also work with couples, offering premarital counseling as
                well as marriage counseling for the many challenges and different stages of
                marriage and family life. Whether you are feeling overwhelmed, stuck, or
                unsure how to move forward, counseling can offer a steady place to slow
                things down and gain more clarity.
              </p>
              <p>
                I also work with women who are seeking hope and healing after an abortion,
                often a deeply personal and quiet journey. I am passionate about providing
                a safe, compassionate space where grief, shame, faith questions, and complex
                emotions can be explored without judgment. Healing in this area can bring
                profound restoration, freedom, and peace.
              </p>
              <p>
                For those who wish, I am happy to incorporate Christian faith into the
                counseling process. I am currently taking clients at our South location.
              </p>
            </div>
            <div className="mt-10 bg-card rounded-2xl p-6 sm:p-8 max-w-2xl">
              <div className="mb-4">
                <h3 className="font-serif text-lg text-foreground mb-1">Education</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Master of Arts in Counseling, Dallas Theological Seminary<br />
                  BS in Merchandising, Texas Tech University
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Professional Memberships</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Christian Counselors of Texas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3 — SERVICES ─── */}
        <section className="py-24 sm:py-32">
          <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-12">
              Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Individual Counseling",
                  desc: "Support for anxiety, depression, and relational struggles. A steady place to slow things down, gain clarity, and develop practical strategies for growth.",
                },
                {
                  title: "Couples & Marriage",
                  desc: "Premarital and marriage counseling for the many challenges and different stages of marriage and family life. Build stronger connections together.",
                },
                {
                  title: "Post-Abortion Healing",
                  desc: "A safe, compassionate space to explore grief, shame, faith questions, and complex emotions without judgment — finding restoration, freedom, and peace.",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="bg-card rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <h3 className="font-serif text-xl sm:text-2xl mb-3 text-foreground">{s.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 text-sm text-primary hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4 — WHAT YOU CAN EXPECT ─── */}
        <section className="py-24 sm:py-32 bg-card/50">
          <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-12">
              What You Can Expect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
              {[
                {
                  title: "Compassionate Listening",
                  desc: "A genuinely attentive presence — no judgment, no rush. You'll feel heard from the very first conversation.",
                },
                {
                  title: "Practical Tools",
                  desc: "Evidence-based strategies you can apply in daily life — not just talk, but tangible steps forward.",
                },
                {
                  title: "Faith-Integrated",
                  desc: "For those who wish, Christian faith can be woven into the counseling process — meeting you where you are spiritually.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-serif text-xl sm:text-2xl mb-3 text-foreground">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 5 — CTA BAND ─── */}
        <section className="py-20 sm:py-24 bg-primary">
          <div className="max-w-[700px] mx-auto px-6 sm:px-10 text-center">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary-foreground leading-snug tracking-tight">
              Taking the first step can feel overwhelming.<br className="hidden sm:block" />
              You don't have to do it alone.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block bg-primary-foreground text-foreground px-8 py-3.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book a Consultation
            </a>
          </div>
        </section>

        {/* ─── SECTION 6 — CONTACT ─── */}
        <section id="contact" className="py-24 sm:py-32">
          <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left — Info */}
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-5 text-base text-muted-foreground">
                  <a
                    href="mailto:michelletraudt@gmail.com"
                    className="flex items-center gap-3 hover:text-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5 shrink-0" />
                    michelletraudt@gmail.com
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 hover:text-foreground transition-colors"
                  >
                    <Phone className="w-5 h-5 shrink-0" />
                    (123) 456-7890
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 shrink-0" />
                    Your City, State
                  </div>
                </div>
              </div>

              {/* Right — Simple form */}
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:michelletraudt@gmail.com";
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none"
                    placeholder="How can I help?"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-7 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="py-8 px-6 sm:px-10 border-t border-border">
          <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Michelle Traudt · All rights reserved
            </p>
            <img src={heartImage} alt="" className="w-5 h-5 opacity-30" aria-hidden="true" />
          </div>
        </footer>

      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default Index;
