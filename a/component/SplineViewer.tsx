'use client';

import { useState } from 'react';

export default function SplineViewer() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-50 dark:bg-black">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 dark:border-white mb-4"></div>
            <p className="text-zinc-600 dark:text-zinc-400">กำลังโหลด 3D Model...</p>
          </div>
        </div>
      )}
      <iframe
        src="https://my.spline.design/r4xbot-7DzALkHCjWC86AlwWp6THOEU/"
        className="w-full h-screen"
        allow="autoplay; fullscreen"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
