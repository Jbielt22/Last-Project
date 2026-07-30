export default function PortfolioPage() {
  const projects = [
    {
      title: "Vintage Store E-Commerce",
      category: "Fullstack / Backend",
      desc: "Aplikasi toko online baju vintage lengkap dengan sistem autentikasi JWT dan manajemen produk.",
      tech: ["Node.js", "Express", "Next.js", "MySQL"],
    },
    {
      title: "REST API Authentication System",
      category: "Backend Development",
      desc: "Backend API khusus untuk registrasi, login, penanganan token, dan enkripsi password aman.",
      tech: ["Node.js", "JWT", "Bcrypt", "Postman"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#070913] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Project <span className="text-indigo-400">Portofolio</span>
          </h1>
          <p className="text-gray-400">Kumpulan project nyata yang pernah saya bangun.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-gray-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl space-y-4">
              <span className="text-xs text-indigo-400 font-medium">{proj.category}</span>
              <h2 className="text-2xl font-bold text-white">{proj.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs px-2.5 py-1 rounded bg-gray-950 text-gray-300 border border-gray-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}