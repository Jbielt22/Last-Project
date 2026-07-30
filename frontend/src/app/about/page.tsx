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

        <div className='w-full'>
            <Image src='/profile.png' width='200' height='200' alt='foto' className='mx-auto rounded-2xl' />
        </div>

        {/* Content Card */}
        <div className="bg-gray-900/50 border border-gray-800/80 rounded-2xl p-8 sm:p-10 backdrop-blur-sm shadow-xl space-y-8">
          {/* Bio Singkat */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-100 border-b border-gray-800 pb-3">
              Halo, Saya M. Jibriel
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Saya adalah seorang siswa jurusan <span className="text-indigo-400 font-semibold">Rekayasa Perangkat Lunak (RPL)</span> yang memiliki ketertarikan mendalam pada pengembangan perangkat lunak, khususnya di bagian <span className="text-indigo-400 font-semibold">Backend Development</span> dan ekosistem modern web.
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
              <p className="text-gray-400 text-sm mt-1">Fokus pada Software Engineering & Web Development</p>
            </div>

            <div className="p-5 rounded-xl bg-gray-950/60 border border-gray-800/80">
              <h3 className="text-indigo-400 font-semibold mb-2">Fokus Utama</h3>
              <p className="text-white font-medium">Backend & Fullstack Web</p>
              <p className="text-gray-400 text-sm mt-1">Node.js, Express, Next.js, & Database Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}