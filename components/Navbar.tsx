type NavbarProps = {
  toggleSidebar: () => void;
};

export default function Navbar({ toggleSidebar }: NavbarProps) {
  return (
    <nav className="p-4 bg-gray-100 flex items-center shadow z-50 relative">
      {/* ✅ Toggle Button */}
      <button onClick={toggleSidebar} className="md:hidden text-2xl mr-3 block">
        ☰
      </button>

      <h2 className="text-lg font-bold">My Store</h2>
    </nav>
  );
}
