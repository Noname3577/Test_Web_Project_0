import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true, // ย้ายออกจาก experimental
  experimental: {
    // enableMCP ไม่ต้องตั้งค่า เพราะ Next.js 16 เปิดโดยอัตโนมัติ
  },
};

export default nextConfig;
