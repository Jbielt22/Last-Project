import React from 'react';

export default function PortfolioPage() {
  const projects = [
    {
      title: "Vintagenshitt Store",
      category: "Web Dev",
      description:
        "Platform e-commerce pakaian/thrift vintage dengan sistem autentikasi JWT, manajemen katalog produk, RESTful API, dan validasi data server-side yang aman.",
      tags: ["Node.js", "Express.js", "JWT", "MySQL / PostgreSQL", "React / Next.js", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            My <span className="text-indigo-400">Portfolio</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Project yang telah saya kembangkan dengan fokus pada arsitektur backend yang kokoh dan antarmuka yang responsif.
          </p>
        </div>

        {/* Project Card Container - Posisi Pas di Tengah */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#131927]/80 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-indigo-500/50 transition duration-300 flex flex-col"
              >
                {/* Image / Thumbnail Container */}
                <div className="aspect-video bg-[#0e1322] flex items-center justify-center border-b border-slate-800/60 relative group">
                  <span className="text-4xl">🚀</span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 border border-indigo-800/40 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-3 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-800/70 text-slate-300 border border-slate-700/50 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60 text-xs font-semibold">
                    <a
                      href={project.demoUrl}
                      className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-slate-400 hover:text-white flex items-center gap-1 transition"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 