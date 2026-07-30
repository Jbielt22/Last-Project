export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#070913] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Hubungi <span className="text-indigo-400">Saya</span>
          </h1>
          <p className="text-gray-400">Kirimkan pesan untuk diskusi project atau kerja sama.</p>
        </div>

        <form className="bg-gray-900/50 border border-gray-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-indigo-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="nama@email.com"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-indigo-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Pesan</label>
            <textarea
              rows={4}
              placeholder="Tuliskan pesan Anda di sini..."
              className="w-full px-4 py-2.5 rounded-lg bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-indigo-500 text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-500/25 active:scale-95"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}