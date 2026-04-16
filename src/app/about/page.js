export default function About() {
  return (
    <section className="py-28 bg-white text-[#0F172A] px-6">

      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-[#1D4ED8]">Our Agency</span>
        </h1>

        <p className="mt-6 text-[#64748B] leading-relaxed">
          We are a modern digital agency focused on building high-performance
          websites, UI/UX systems, and branding solutions that help businesses
          grow in the digital world.
        </p>

        <p className="mt-4 text-[#64748B]">
          Our mission is simple: deliver clean design, fast performance, and
          conversion-focused experiences.
        </p>

        {/* stats */}
        <div className="grid grid-cols-3 gap-6 mt-12">

          <div>
            <h2 className="text-3xl font-bold text-[#1D4ED8]">100+</h2>
            <p className="text-[#64748B]">Projects</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1D4ED8]">50+</h2>
            <p className="text-[#64748B]">Clients</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1D4ED8]">5★</h2>
            <p className="text-[#64748B]">Rating</p>
          </div>

        </div>

      </div>

    </section>
  );
}