import Header from "@/component/header";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <iframe
      src="https://my.spline.design/r4xbot-7DzALkHCjWC86AlwWp6THOEU/"
      className="w-full h-full"
      allow="autoplay; fullscreen"
      />
    </div>
  );
}
