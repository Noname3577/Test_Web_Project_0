"use client";

import Header from "@/component/header";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <div>
        <iframe
          src="https://my.spline.design/r4xbot-7DzALkHCjWC86AlwWp6THOEU/"
          className="w-full h-screen"
          allow="autoplay; fullscreen"
          loading="lazy"
        />
      </div>
    </div>
  );
}
