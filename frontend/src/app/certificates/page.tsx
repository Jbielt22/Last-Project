export default function CertificatesPage() {
  const certificates = [
    {
      title: "Backend Development with Node.js",
      issuer: "Dicoding Indonesia",
      date: "2026",
      desc: "Sertifikasi kompetensi dalam membangun REST API dan backend menggunakan Node.js.",
    },
    {
      title: "Web Development Fundamentals",
      issuer: "Dicoding Indonesia",
      date: "2025",
      desc: "Dasar-dasar pengembangan web modern meliputi HTML, CSS, dan JavaScript dasar.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070913] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Sertifikat & <span className="text-indigo-400">Pencapaian</span>
          </h1>
          <p className="text-gray-400">Beberapa sertifikasi online yang telah saya selesaikan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-gray-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl space-y-3">
              <span className="text-xs text-indigo-400 font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                {cert.date}
              </span>
              <h2 className="text-xl font-bold text-white mt-1">{cert.title}</h2>
              <p className="text-sm text-indigo-300 font-medium">{cert.issuer}</p>
              <p className="text-sm text-gray-400">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}