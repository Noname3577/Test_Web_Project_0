'use cache'

import { cacheLife } from 'next/cache'
import Header from "@/component/header"

export const metadata = {
  title: 'Home | Next.js 16 App',
  description: 'Next.js 16 with 3D Spline Integration',
}


export default async function Home() {
  cacheLife('hours')
  
  return (
    <div className="w-full min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
    </div>
  );
}
