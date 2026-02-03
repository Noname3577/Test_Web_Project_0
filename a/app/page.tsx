'use cache'

import { cacheLife } from 'next/cache'
import { Suspense } from 'react'
import FullPageHorizontalScroll from "@/component/FullPageHorizontalScroll"

export const metadata = {
  title: 'Home | Next.js 16 App',
  description: 'Next.js 16 with Full Page Horizontal Scroll',
}

function SplineLoadingFallback() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-zinc-900 dark:border-white mb-4"></div>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg">กำลังเตรียม หน้าเว็บไซค์...</p>
      </div>
    </div>
  )
}

export default async function Home() {
  cacheLife('hours')

  return (
    <div>
      <Suspense fallback={<SplineLoadingFallback />}>
        <FullPageHorizontalScroll />
      </Suspense>
    </div>
  );
}
