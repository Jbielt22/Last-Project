import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070913] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Tentang <span className="text-indigo-400">Saya</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat siapa saya, latar belakang, dan dedikasi saya di dunia pengkodean.
          </p>
        </div>

        {/* Section Foto Profil */}
        <div className="flex justify-center">
          <Image
            src="/profile.png"
            width={300}
            height={100}
            alt="Foto M. Jibriel"
            className="rounded-2xl object-cover border border-gray-800/80 shadow-lg"
          />
        </div>

        {/* Content Card */}
        <div className="bg-gray-900/50 border border-gray-800/80 rounded-2xl p-8 sm:p-10 backdrop-blur-sm shadow-xl space-y-8">
          {/* Bio Singkat */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-100 border-b border-gray-800 pb-3">
              Halo, Saya M. Jibriel
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Saya adalah seorang siswa jurusan{' '}
              <span className="text-indigo-400 font-semibold">Rekayasa Perangkat Lunak (RPL)</span>{' '}
              yang memiliki ketertarikan mendalam pada pengembangan perangkat lunak, khususnya di bagian{' '}
              <span className="text-indigo-400 font-semibold">Backend Development</span> dan ekosistem modern web.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Saya terbiasa membangun RESTful API, mengelola basis data, serta mengimplementasikan sistem autentikasi yang aman. Saya selalu antusias untuk mempelajari teknologi baru dan menyelesaikan berbagai tantangan logika dalam pemrograman.
            </p>
          </div>

          {/* Grid Informasi Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-gray-950/60 border border-gray-800/80">
              <h3 className="text-indigo-400 font-semibold mb-2">Pendidikan</h3>
              <p className="text-white font-medium">SMK - Rekayasa Perangkat Lunak</p>
              <p className="text-gray-400 text-sm mt-1">
                Fokus pada Software Engineering & Web Development
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gray-950/60 border border-gray-800/80">
              <h3 className="text-indigo-400 font-semibold mb-2">Fokus Utama</h3>
              <p className="text-white font-medium">Backend & Fullstack Web</p>
              <p className="text-gray-400 text-sm mt-1">
                Node.js, Express, Next.js, & Database Management
              </p>
            </div>
          </div>

          {/* Section Social Links & Repository */}
          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Tautan & Media Sosial</h3>
            <div className="flex flex-wrap gap-4">
              {/* LinkedIn */}
              <a
                href="https://id.linkedin.com/in/jibril-pratama-80aa03426"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-950/80 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <svg className="w-5 h-5 fill-current text-indigo-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jbrielprtama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-950/80 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <svg className="w-5 h-5 stroke-current text-indigo-400 fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-sm font-medium">Instagram</span>
              </a>

              {/* GitHub Proyek */}
              <a
                href="https://github.com/Jbielt22/Last-Project.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-950/80 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <svg className="w-5 h-5 fill-current text-indigo-400" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
                <span className="text-sm font-medium">Proyek Terakhir (GitHub)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}