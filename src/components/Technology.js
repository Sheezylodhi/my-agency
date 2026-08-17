"use client";

export function Technology() {
  const technologies = [
    {
      name: "Next.js",
      description: "Modern React framework for production-grade web applications",
      svg: (
        <svg className="h-8 w-8 text-white" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M180 90C180 139.706 139.706 180 90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90ZM33.4208 141.01L130.643 30.6385H115.179L21.4367 135.597H33.4208V141.01ZM144.37 137.957H131.623V56.9697H144.37V137.957Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: "React",
      description: "Component-based architecture for interactive user interfaces",
      svg: (
        <svg className="h-8 w-8 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      description: "Strongly typed programming language for maintainable codebases",
      svg: (
        <svg className="h-8 w-8" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path fill="#3178C6" d="M0 0h128v128H0z"/>
          <path fill="#FFF" d="M79.32 89.17c0 8.04-4.8 12.6-13.08 12.6-5.88 0-10.44-2.88-12-8.04l5.16-3.12c1.2 3.12 3.6 5.16 6.84 5.16 4.32 0 6.6-2.52 6.6-6.36 0-4.68-3.12-6.72-8.52-9.48-6.12-3.12-10.44-7.44-10.44-15.36 0-7.32 5.52-12.48 13.08-12.48 5.16 0 9.24 2.16 11.16 6.84l-4.92 3.12c-1.08-2.4-3-3.84-6.24-3.84-3.36 0-5.52 1.8-5.52 4.92 0 3.72 2.52 5.28 7.8 8.04 7.2 3.72 11.16 7.44 11.16 15.56zm-36.84-25.08h6v37.08h-6z"/>
        </svg>
      ),
    },
    {
      name: "Node.js",
      description: "High-performance runtime for backend and server-side processing",
      svg: (
        <svg className="h-8 w-8 text-[#5FA04E]" viewBox="0 0 256 296" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M128 0L249.407 70.1538V210.462L128 280.615L6.59296 210.462V70.1538L128 0Z" fill="#333333"/>
          <path d="M128 15.75L235.795 77.9358V202.308L128 264.494L20.2051 202.308V77.9358L128 15.75Z" fill="#212121"/>
          <path d="M109.846 195.952V100.048L186.231 148L109.846 195.952Z" fill="#5FA04E"/>
        </svg>
      ),
    },
    {
      name: "MongoDB",
      description: "NoSQL database infrastructure for scalable application data",
      svg: (
        <svg className="h-8 w-8 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M11.992 0C11.992 0 6.002 4.5 6.002 12.188c0 4.145 2.164 7.747 5.99 9.812 3.826-2.065 5.99-5.667 5.99-9.812C17.982 4.5 11.992 0 11.992 0zm.008 20.125c-3.155-1.92-5-5.11-5-8.337 0-6.142 4.137-10.375 5-11.238.863.863 5 5.096 5 11.238 0 3.227-1.845 6.417-5 8.337zm-.5-13.437v6.313l-3.5 2 .75 1.25 4.25-2.5V6.688h-1.5z"/>
        </svg>
      ),
    },
    {
      name: "OpenAI",
      description: "Advanced artificial intelligence models for intelligent automation",
      svg: (
        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 10.591 1a6.0046 6.0046 0 0 0-5.467 3.418 6.018 6.018 0 0 0-4.163 3.568 5.9873 5.9873 0 0 0 1.034 6.368 5.9847 5.9847 0 0 0 .5157 4.9108 6.0462 6.0462 0 0 0 6.5098 2.9 6.0551 6.0551 0 0 0 4.6655 2.012 6.0046 6.0046 0 0 0 5.467-3.418 6.018 6.018 0 0 0 4.163-3.568 5.9873 5.9873 0 0 0-1.034-6.368z"/>
        </svg>
      ),
    },
    {
      name: "Stripe",
      description: "Secure payment infrastructure for digital commerce platforms",
      svg: (
        <svg className="h-8 w-8 text-[#635BFF]" viewBox="0 0 60 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M59.69 11.63h-7.98c-.12-1.07-.98-1.79-2.31-1.79-1.28 0-2.22.7-2.22 1.7 0 1.05.9 1.47 2.37 1.84l1.96.49c2.4.6 3.99 1.87 3.99 4.19 0 2.58-2.07 4.38-5.18 4.38-3.15 0-5.18-1.73-5.51-4.22h2.24c.26 1.4 1.45 2.29 3.27 2.29 1.63 0 2.82-.76 2.82-2.11 0-1.05-.8-1.51-2.4-1.92l-1.95-.49c-2.43-.6-3.95-1.89-3.95-4.24 0-2.4 2.01-4.14 4.96-4.14 2.92 0 4.88 1.61 5.16 3.98h-2.16z"/>
        </svg>
      ),
    },
    {
      name: "Cloudflare",
      description: "Global edge network ensuring security, performance, and reliability",
      svg: (
        <svg className="h-8 w-8 text-[#F38020]" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M22.04 12.87c-.43 0-.85.04-1.26.12-.91-2.85-3.56-4.93-6.73-4.93-2.91 0-5.38 1.8-6.4 4.38-1.87.5-3.23 2.22-3.23 4.26 0 2.45 1.99 4.44 4.44 4.44h13.25c2.02 0 3.67-1.65 3.67-3.67 0-1.89-1.42-3.45-3.24-3.6z"/>
        </svg>
      ),
    },
    {
      name: "Docker",
      description: "Containerization platforms for consistent application environments",
      svg: (
        <svg className="h-8 w-8 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.185m-13.626 9.53c-.354-.25-.333-.872.042-1.092 1.344-.784 4.567-1.42 7.625-1.42 1.399 0 2.748.143 3.978.397-2.617 1.258-4.303 3.324-4.303 5.673 0 1.15.358 2.228.978 3.125-2.738-.073-6.529-.684-8.293-3.683z"/>
        </svg>
      ),
    },
    {
      name: "AWS",
      description: "Cloud infrastructure for enterprise scalability and deployment",
      svg: (
        <svg className="h-8 w-8 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
    },
    {
      name: "Vercel",
      description: "Optimized cloud platform for modern frontend deployments",
      svg: (
        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M12 1L24 22H0L12 1Z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(to_bottom,#0B0F19_0%,#0E1320_50%,#101726_100%)] text-white py-28 border-t border-white/15">
      {/* Background radial atmosphere */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.15) 0%, rgba(11,15,25,0) 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
        {/* Eyebrow */}
        <p className="font-mono text-[11px] tracking-[0.34em] text-slate-400 uppercase">
          Technology & Engineering Stack
        </p>
        
        {/* Main Heading */}
        <h2 className="mt-3 text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1] font-bold tracking-[-0.03em] text-white">
          Technology That Powers Digital Products
        </h2>

        {/* Supporting Copy */}
        <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Modern digital products require more than a polished interface. We engineer scalable web applications, robust cloud infrastructure, and AI-powered systems using a proven, production-grade technology stack designed for long-term performance and maintainability.
        </p>

        {/* Clean semantic structured list for search engines and assistive tech */}
        <div className="sr-only">
          <h3>Engineering Stack Entities</h3>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>
                <strong>{tech.name}</strong>: {tech.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Infinite Scrolling Ticker Animation Container */}
        <div 
          className="mt-20 relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
          aria-hidden="true"
        >
          <div className="marquee-track flex w-max py-4">
            {/* Render items multiple times to create seamless infinite loop */}
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 group cursor-pointer select-none opacity-60 hover:opacity-100 transition-opacity duration-300 mx-8 lg:mx-12 shrink-0"
              >
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {tech.svg}
                </div>
                <span className="font-mono text-xs tracking-wider text-slate-300 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: none !important;
            flex-wrap: wrap;
            justify-content: center;
            width: 100% !important;
          }
        }
      ` }} />
    </section>
  );
}