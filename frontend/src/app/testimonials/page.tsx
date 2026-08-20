import React from 'react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        '"Siswa yang memiliki etos kerja tinggi dan pemahaman koding yang sangat baik."',
      name: 'Alif Anhar',
      role: 'Guru Produktif RPL • SMK Negeri',
      avatar: '👨‍🏫',
    },
    {
      quote:
        '"Kolaborasi dalam pembuatan backend dan manajemen database sangat rapi."',
      name: 'Ali Akbar',
      role: 'Fullstack Developer • Partner Tim',
      avatar: '💻',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0f19] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Testimonials & <span className="text-indigo-400">Reviews</span>
          </h1>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Apa pendapat para guru dan rekan sejawat mengenai kodingan, keterampilan, dan etos kerja saya.
          </p>
        </div>

        {/* Testimonials Cards Container */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-1 bg-[#131927]/80 border border-slate-800/80 rounded-2xl p-6 shadow-xl hover:border-indigo-500/40 transition duration-300 flex flex-col justify-between"
            >
              {/* Rating & Quote */}
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400 text-sm">
                  {"★".repeat(5)}
                </div>
                <p className="text-slate-300 italic text-sm leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Profile / Author Section */}
              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center text-lg border border-slate-700/50">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}