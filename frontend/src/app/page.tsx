export default function Home() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Membangun antarmuka web yang responsif dan interaktif menggunakan React, Next.js, dan Tailwind CSS.",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      iconBg: "bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Backend Development",
      description:
        "Mengembangkan API dan server-side logic dengan Express.js dan mengelola database MySQL.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "UI/UX Design",
      description:
        "Mendesain pengalaman pengguna yang intuitif dan tampilan visual yang modern dan menarik.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      iconBg: "bg-purple-500/10 border-purple-500/20",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white py-12 px-6">
      {/* Hero Section */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        {/* Status Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for projects
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Halo, saya <span className="text-purple-500">BrielPitt</span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
          Siswa XII RPL 1 yang passionate dalam{" "}
          <span className="font-medium text-purple-400">Web Development</span>. Membangun
          pengalaman melalui project nyata dan terus belajar teknologi terbaru.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center gap-4">
          <a
            href="/portfolio"
            className="rounded-lg bg-purple-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 shadow-lg shadow-purple-600/30"
          >
            Lihat Portfolio
          </a>
          <a
            href="/contact"
            className="rounded-lg border border-slate-700 px-6 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
          >
            Hubungi Saya
          </a>
        </div>
      </section>

      {/* Seksi Apa yang Saya Lakukan */}
      <section className="mt-12 max-w-6xl mx-auto pb-16">
        {/* Title Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Apa yang Saya Lakukan
          </h2>
          <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
            Beberapa keahlian dan bidang yang saya tekuni selama belajar di jurusan RPL.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#131927]/80 border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-slate-700 hover:bg-[#131927]"
            >
              {/* Icon Container */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center border ${service.iconBg} mb-5`}
              >
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}