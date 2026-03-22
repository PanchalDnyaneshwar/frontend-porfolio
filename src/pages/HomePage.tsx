import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-glow bg-cover">
        <div className="absolute inset-0 bg-hero-grid bg-grid opacity-20" />
        <Container className="relative grid min-h-[calc(100vh-64px)] items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Full Stack Developer
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              I build modern, scalable and premium web experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              A clean portfolio crafted with React, Tailwind CSS, NestJS and MongoDB —
              focused on beautiful UI, responsive experience and strong backend integration.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/projects"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 font-semibold text-slate-950"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="glass-card rounded-3xl p-6 shadow-soft">
              <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center">
                <p className="text-6xl font-bold text-primary">DP</p>
                <p className="mt-3 text-sm text-slate-500">Developer Portfolio</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xl font-bold text-white">React</p>
                  <p className="mt-1 text-sm text-slate-400">Frontend</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xl font-bold text-white">NestJS</p>
                  <p className="mt-1 text-sm text-slate-400">Backend</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xl font-bold text-white">MongoDB</p>
                  <p className="mt-1 text-sm text-slate-400">Database</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-xl font-bold text-white">Responsive</p>
                  <p className="mt-1 text-sm text-slate-400">All Devices</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Overview"
            title="A modern portfolio foundation is ready"
            description="Next we’ll plug in all domain sections exactly into your locked structure: home sections, about sections, skills, experience, projects, blog and contact."
          />
        </Container>
      </section>
    </>
  );
}

export default HomePage;