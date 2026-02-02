'use cache'

import { cacheLife } from 'next/cache'
import { Suspense } from 'react'
import Header from "@/component/header"
import SplineViewer from "@/component/SplineViewer"

export const metadata = {
  title: 'Home | Next.js 16 App',
  description: 'Next.js 16 with 3D Spline Integration',
}

function SplineLoadingFallback() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-zinc-900 dark:border-white mb-4"></div>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg">กำลังเตรียม 3D Experience...</p>
      </div>
    </div>
  )
}

export default async function Home() {
  cacheLife('hours') // แคชหน้านี้ทุกชั่วโมง
  
  return (
    <div className="w-full min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <Suspense fallback={<SplineLoadingFallback />}>
        <SplineViewer />
      </Suspense>
    </div>
  );
}
