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
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-0 sm:pt-12">
          <div className="text-center max-w-2xl mx-auto">
            <img
              src={heartImage}
              alt="Heart"
              className="w-16 h-16 mx-auto mb-6 animate-[fade-in-up_600ms_ease-out_forwards] opacity-0"
            />
            <h1 className="font-serif tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-[fade-in-up_700ms_ease-out_forwards] opacity-0">
              <span className="block">Michelle Traudt</span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2">
                Counselor & Speaker
              </span>
            </h1>
            <div className="mx-auto mt-6 accent-bar animate-[fade-in-up_800ms_ease-out_forwards] opacity-0" />
            <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-md mx-auto animate-[fade-in-up_900ms_ease-out_forwards] opacity-0 leading-relaxed">
              Helping you find clarity, confidence, and connection — one conversation at a time.
            </p>
            <a
              href="#about"
              className="mt-10 inline-block font-serif text-sm tracking-widest uppercase border-b-2 border-foreground/20 pb-1 hover:border-foreground/60 transition-colors animate-[fade-in-up_1000ms_ease-out_forwards] opacity-0"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Photo placeholder */}
              <div className="relative mx-auto md:mx-0 w-full max-w-sm">
                <div className="aspect-[3/4] rounded-2xl bg-muted/60 border-2 border-border flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <img
                      src={heartImage}
                      alt="Heart decoration"
                      className="w-10 h-10 mx-auto mb-4 opacity-30"
                    />
                    <span className="text-sm text-muted-foreground tracking-wide uppercase">
                      Photo Coming Soon
                    </span>
                  </div>
                </div>
                {/* Decorative heart accent */}
                <img
                  src={heartImage}
                  alt=""
                  className="absolute -bottom-4 -right-4 w-12 h-12 opacity-10 rotate-12"
                  aria-hidden="true"
                />
              </div>

              {/* About text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img src={heartImage} alt="" className="w-6 h-6 opacity-40" aria-hidden="true" />
                  <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">About Michelle</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Michelle Traudt is a dedicated counselor and speaker with a passion for
                    helping individuals and families navigate life's challenges with grace and resilience.
                  </p>
                  <p>
                    With years of experience in counseling and community engagement, Michelle creates
                    a warm, judgment-free space where clients feel seen, heard, and empowered
                    to make meaningful changes in their lives.
                  </p>
                  <p>
                    Whether through one-on-one sessions, group workshops, or speaking engagements,
                    Michelle brings authenticity, compassion, and a touch of humor to everything she does.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 sm:py-28 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src={heartImage} alt="" className="w-6 h-6 opacity-40" aria-hidden="true" />
              <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">What I Offer</h2>
            </div>
            <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
              Every journey is unique. Here's how we can work together.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Individual Counseling",
                  desc: "A safe, supportive space to explore your thoughts, feelings, and goals at your own pace.",
                },
                {
                  title: "Speaking & Workshops",
                  desc: "Engaging talks and interactive sessions for organizations, churches, and community groups.",
                },
                {
                  title: "Group Sessions",
                  desc: "Connect with others in a guided group setting. Shared experiences, shared growth.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={heartImage}
                    alt=""
                    className="w-8 h-8 mx-auto mb-4 opacity-25"
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-lg mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-28 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src={heartImage} alt="" className="w-6 h-6 opacity-40" aria-hidden="true" />
              <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">Get in Touch</h2>
            </div>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              Ready to take the next step? I'd love to hear from you.
            </p>
            <div className="space-y-5">
              <a
                href="mailto:michelletraudt@gmail.com"
                className="flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>michelletraudt@gmail.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>(123) 456-7890</span>
              </a>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Your City, State</span>
              </div>
            </div>
            <div className="mt-12 accent-bar mx-auto" />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 text-center">
          <img src={heartImage} alt="" className="w-8 h-8 mx-auto mb-3 opacity-20" aria-hidden="true" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Michelle Traudt. All rights reserved.
          </p>
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
