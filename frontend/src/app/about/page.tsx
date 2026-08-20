import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    { label: 'Status', value: 'Siswa XII RPL' },
    { label: 'Fokus Utama', value: 'Backend Development' },
    { label: 'Lokasi', value: 'Makassae' },
  ];

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white py-16 px-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Tentang <span className="text-purple-500">Saya</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Mengenal lebih dekat siapa saya, latar belakang, dan dedikasi saya di dunia pengkodean.
          </p>
        </div>

        {/* Content Section Grid (2 Kolom) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#131927]/60 border border-slate-800/80 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">
          
          {/* Left Column: Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-xs md:max-w-sm">
              {/* Gradient Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Photo Container */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-xl">
                <Image
                  src="/profile.png" // Sesuaikan nama file gambar foto kamu di folder /public
                  alt="M. Jibriel Profile"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">
                Siswa & Developer
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                Halo, Saya <span className="text-purple-400">M. Jibriel</span>
              </h2>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Saya adalah seorang siswa jurusan <span className="text-purple-300 font-medium">Rekayasa Perangkat Lunak (RPL)</span> yang berfokus pada <span className="text-purple-300 font-medium">Backend Development</span>. Memiliki passion yang kuat dalam merancang arsitektur server-side, membangun RESTful API yang aman, serta mengelola basis data secara efisien.
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Saya selalu antusias mempelajari teknologi web terbaru dan menerapkannya langsung ke dalam proyek nyata untuk mengasah keterampilan pengkodean saya.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[#0b0f19]/80 border border-slate-800 rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="text-sm font-semibold text-purple-300 mt-1">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-sm font-semibold transition duration-300 shadow-lg shadow-purple-600/30"
              >
                Hubungi Saya
              </a>
              <a
                href="/certificates"
                className="rounded-xl border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white px-6 py-3 text-sm font-semibold transition duration-300"
              >
                Lihat Sertifikat
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}