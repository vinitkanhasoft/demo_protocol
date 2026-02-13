import Link from "next/link";

type SidebarProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <>
      {/* ✅ Overlay (Mobile Only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ✅ Sidebar */}
      <aside
        className={`
          fixed md:static
          top-0 left-0
          h-screen w-36
          bg-black text-white
          p-5
          transform transition-transform duration-300
          z-40
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <ul className="space-y-2">

          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-white/10 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-white/10 transition"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-white/10 transition"
            >
              Cart
            </Link>
          </li>

        </ul>
      </aside>
    </>
  );
}
