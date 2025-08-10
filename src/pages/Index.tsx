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
      <header className="container py-8" role="banner">
        <nav className="flex items-center justify-between" aria-label="Primary">
          <span className="text-sm text-muted-foreground">michelletraudt.com</span>
        </nav>
      </header>

      <main className="container min-h-[70vh] flex items-center justify-center" role="main">
        <article className="text-center" aria-label="Coming Soon">
          <h1 className="font-serif tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-[fade-in-up_700ms_ease-out_forwards] opacity-0">
            Michelle Traudt — Counselor, Author & Organizer
          </h1>
          <div className="mx-auto mt-6 accent-bar animate-[fade-in-up_800ms_ease-out_forwards] opacity-0" />
          <p className="mt-8 text-base sm:text-lg text-muted-foreground animate-[fade-in-up_900ms_ease-out_forwards] opacity-0">
            A minimal, thoughtful home is coming soon.
          </p>
          <p className="mt-2 text-sm text-muted-foreground animate-[fade-in-up_1000ms_ease-out_forwards] opacity-0">
            For updates, visit <a href="https://michelletraudt.com" className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground" aria-label="Visit michelletraudt.com">michelletraudt.com</a>
          </p>
        </article>
      </main>

      <footer className="container pb-10 text-center text-xs text-muted-foreground" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Michelle Traudt</p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Index;
