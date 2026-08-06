// src/components/SkeletonCard.tsx

interface SkeletonCardProps {
  variant?: "project" | "certificate" | "testimonial" | "default";
}

export default function SkeletonCard({ variant = "default" }: SkeletonCardProps) {
  if (variant === "testimonial") {
    return (
      <div className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800/40 animate-pulse flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-4 h-4 rounded bg-gray-800" />
            ))}
          </div>
          <div className="space-y-2 mb-6">
            <div className="h-4 bg-gray-800 rounded w-full" />
            <div className="h-4 bg-gray-800 rounded w-5/6" />
            <div className="h-4 bg-gray-800 rounded w-2/3" />
          </div>
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-gray-800/40">
          <div className="w-10 h-10 rounded-full bg-gray-800" />
          <div className="space-y-1.5 flex-1">
            <div className="h-4 bg-gray-800 rounded w-1/2" />
            <div className="h-3 bg-gray-800 rounded w-1/3" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "certificate") {
    return (
      <div className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800/40 animate-pulse flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-xl bg-gray-800 mb-6" />
          <div className="h-5 bg-gray-800 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-800 rounded w-1/2 mb-4" />
          <div className="space-y-2">
            <div className="h-3 bg-gray-800 rounded w-2/3" />
            <div className="h-3 bg-gray-800 rounded w-1/2" />
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-800/40">
          <div className="h-4 bg-gray-800 rounded w-1/3" />
        </div>
      </div>
    );
  }

  // Variant Project / Default
  return (
    <div className="rounded-2xl bg-gray-900/40 border border-gray-800/40 overflow-hidden animate-pulse flex flex-col h-full">
      <div className="aspect-video bg-gray-800" />
      <div className="p-6 flex flex-col flex-1">
        <div className="h-3 bg-gray-800 rounded w-1/4 mb-3" />
        <div className="h-6 bg-gray-800 rounded w-3/4 mb-3" />
        <div className="space-y-2 mb-6 flex-1">
          <div className="h-4 bg-gray-800 rounded w-full" />
          <div className="h-4 bg-gray-800 rounded w-4/5" />
        </div>
        <div className="flex gap-2 mb-6">
          <div className="h-6 bg-gray-800 rounded w-16" />
          <div className="h-6 bg-gray-800 rounded w-16" />
          <div className="h-6 bg-gray-800 rounded w-16" />
        </div>
        <div className="flex gap-4 pt-4 border-t border-gray-800/40">
          <div className="h-4 bg-gray-800 rounded w-20" />
          <div className="h-4 bg-gray-800 rounded w-16" />
        </div>
      </div>
    </div>
  );
}