export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Guru Pembimbing RPL",
      role: "Pendidik",
      text: "Jibriel adalah siswa yang teliti dalam penulisan logika backend dan selalu bersemangat mempelajari framework baru.",
    },
    {
      name: "Rekan Tim Project",
      role: "Siswa RPL",
      text: "Sangat terbantu ketika bekerja sama dalam project web. API yang dibuat rapi dan mudah diintegrasikan.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070913] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Apa Kata <span className="text-indigo-400">Mereka</span>
          </h1>
          <p className="text-gray-400">Ulasan dari guru dan rekan tim tentang hasil kerja saya.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-gray-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl space-y-4">
              <p className="text-gray-300 italic text-sm leading-relaxed">"{item.text}"</p>
              <div className="border-t border-gray-800/80 pt-3">
                <h2 className="font-bold text-white text-base">{item.name}</h2>
                <p className="text-xs text-indigo-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}