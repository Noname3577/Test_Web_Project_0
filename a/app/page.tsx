'use cache'

import { cacheLife } from 'next/cache'
import FullPageHorizontalScroll from "@/component/FullPageHorizontalScroll"

export const metadata = {
  title: 'Home | Next.js 16 App',
  description: 'Next.js 16 with Full Page Horizontal Scroll',
}

export default async function Home() {
  cacheLife('hours') 
  
  return (
    <FullPageHorizontalScroll />
  );
}
