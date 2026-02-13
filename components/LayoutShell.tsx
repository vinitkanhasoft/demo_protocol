"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen"> {/* ✅ FULL SCREEN */}

      {/* ✅ Sidebar (Fixed) */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* ✅ Right Section */}
      <div className="flex flex-col flex-1">

        {/* ✅ Fixed Top Area */}
        <Navbar toggleSidebar={() => setOpen(!open)} />
        <Header />

        {/* ✅ ONLY THIS PART SCROLLS 🔥 */}
        <main className="flex-1 overflow-y-auto p-5">
          {children}
        </main>

        {/* ✅ Optional Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
