import React from "react";
import heartImage from "@/assets/heart.png";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michelle Traudt",
    url: "https://michelletraudt.com",
    jobTitle: "Counselor, Author & Organizer",
  };

  return (
    <>

      <main className="container min-h-screen flex items-center justify-center pt-0 sm:pt-20" role="main">
        <article className="text-center" aria-label="Coming Soon">
          <img src={heartImage} alt="Heart" className="w-16 h-16 mx-auto mb-4 animate-[fade-in-up_600ms_ease-out_forwards] opacity-0" />
          <h1 className="font-serif tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-[fade-in-up_700ms_ease-out_forwards] opacity-0">
            <span className="block">Michelle Traudt</span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2">Counselor & Speaker</span>
          </h1>
            <div className="mx-auto mt-6 accent-bar animate-[fade-in-up_800ms_ease-out_forwards] opacity-0" />
            <a href="mailto:michelletraudt@gmail.com" className="mt-8 text-base sm:text-lg text-muted-foreground animate-[fade-in-up_900ms_ease-out_forwards] opacity-0 hover:text-foreground transition-colors inline-block">michelletraudt @ gmail.com</a>
        </article>
      </main>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Index;
