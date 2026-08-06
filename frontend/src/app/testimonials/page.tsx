"use client";

import { useState, useEffect } from "react";
import { testimonials, Testimonial } from "../../data/mockData";
import SkeletonCard from "../../components/SkeletonCard";

export default function TestimonialPage() {
  const [data, setData] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(testimonials);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Testimonials &{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Reviews
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Apa pendapat para guru dan rekan sejawat mengenai kodingan, keterampilan, dan etos kerja saya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <SkeletonCard key={index} variant="testimonial" />
              ))
            : data.map((test) => (
                <div
                  key={test.id}
                  className="p-6 sm:p-8 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: test.stars }).map((_, i) => (
                        <span key={i} className="text-amber-400 text-lg">
                          ★
                        </span>
                      ))}
                    </div>

                    <blockquote className="text-gray-300 text-sm leading-relaxed font-normal italic mb-8">
                      "{test.quote}"
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-800/50 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-2xl border border-indigo-500/20 shrink-0">
                      {test.avatar || "👤"}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white leading-tight">
                        {test.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {test.role} •{" "}
                        <span className="text-indigo-400">{test.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}