export default function SkillsPage() {
  const skills = [
    { category: "Frontend", items: ["HTML/CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful API", "JWT Authentication"] },
    { category: "Database & Tools", items: ["MySQL", "PostgreSQL", "Git & GitHub", "Postman", "VS Code"] },
  ];

  return (
    <div className="min-h-screen bg-[#070913] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Keahlian <span className="text-indigo-400">Teknis</span>
          </h1>
          <p className="text-gray-400">Teknologi dan tools yang biasa saya gunakan dalam membuat aplikasi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((group, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-gray-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
              <h2 className="text-xl font-bold text-indigo-400 mb-4 pb-2 border-b border-gray-800">
                {group.category}
              </h2>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-3 py-1.5 rounded-lg bg-gray-950 border border-gray-800 text-sm text-gray-300 font-medium"
                  >
                    {item}
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