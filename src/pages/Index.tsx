import React from "react";

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

      <main className="container min-h-[70vh] flex items-center justify-center" role="main">
        <article className="text-center" aria-label="Coming Soon">
          <h1 className="font-serif tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-[fade-in-up_700ms_ease-out_forwards] opacity-0">
            <span className="block">Michelle Traudt</span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2">Counselor, Author & Organizer</span>
          </h1>
          <div className="mx-auto mt-6 accent-bar animate-[fade-in-up_800ms_ease-out_forwards] opacity-0" />
        </article>
      </main>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Index;
