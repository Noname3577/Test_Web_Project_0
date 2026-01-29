function Header() {
  return (
    <header className="w-screen fixed top-0 left-0 flex items-center justify-between px-6 py-4 bg-transparent z-50">
      <nav className="flex gap-6">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">หน้าแรก</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">เกี่ยวกับ</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">บริการ</a>
      </nav>
      <div className="flex-1 flex justify-center">
        <img src="./logo.png" alt="โลโก้" className="h-10" />
      </div>
      <nav className="flex gap-6">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">ติดต่อ</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">บล็อก</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">เข้าสู่ระบบ</a>
      </nav>
    </header>
  )
}

export default Header