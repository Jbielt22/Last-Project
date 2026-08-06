"use client";

import { useState, useEffect } from "react";
import { getCertificates, Certificate } from "../../data/mockData";
import SkeletonCard from "../../components/SkeletonCard";

export default function CertificatesPage() {
  const [certificatesList, setCertificatesList] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        setLoading(true);
        const data = await getCertificates();
        setCertificatesList(data);
      } catch (error) {
        console.error("Failed to fetch certificates:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCertificates();
  }, []);

  return (
    <section className="py-16 sm:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Certificates &{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Sertifikasi dan pencapaian yang telah saya dapatkan.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : certificatesList.map((cert) => (
                <div
                  key={cert.id}
                  className="group flex flex-col h-full rounded-2xl bg-gray-900/50 border border-gray-800/50 p-6 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">📜</span>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-sm font-medium text-indigo-300 mb-3">
                    {cert.issuer}
                  </p>

                  {cert.description && (
                    <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  <div className="pt-4 border-t border-gray-800/50 mt-auto">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                    >
                      Lihat Sertifikat (PDF) <span>↗</span>
                    </a>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}