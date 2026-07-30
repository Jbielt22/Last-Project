export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#070913] text-white px-4 text-center">
      <main className="flex flex-col items-center justify-center max-w-3xl py-20">
        {/* Badge Status */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/60 text-sm text-slate-300 mb-8 shadow-inner">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for projects
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Halo, saya <span className="text-purple-400">BrielPitt</span>
        </h1>

        {/* Deskripsi */}
        <p className="max-w-2xl text-lg text-slate-300 leading-relaxed mb-10">
          Siswa XII RPL 1 yang passionate dalam{" "}
          <span className="text-purple-400 font-medium">Web Development</span>.{" "}
          Membangun pengalaman melalui project nyata dan terus belajar
          teknologi terbaru.
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all shadow-lg shadow-purple-500/25 active:scale-95"
          >
            Lihat Portfolio
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900/40 text-slate-200 font-medium transition-all active:scale-95"
          >
            Hubungi Saya
          </a>
        </div>
      </main>
    </div>
  );
}