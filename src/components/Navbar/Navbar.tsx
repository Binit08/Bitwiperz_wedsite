"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollOrNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);

    if (el) {
      // If the element exists on this page, scroll smoothly
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not, navigate to landing page and add hash
      router.push(`/#${sectionId}`);
    }

    setIsOpen(false); // close mobile menu if open
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Bitwiperz</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollOrNavigate("features")} className="hover:text-indigo-600 font-medium">
            Features
          </button>
          <button onClick={() => scrollOrNavigate("about")} className="hover:text-indigo-600 font-medium">
            About
          </button>
          <button onClick={() => scrollOrNavigate("contact")} className="hover:text-indigo-600 font-medium">
            Contact
          </button>
          <a href="/check-certificates" className="hover:text-indigo-600 font-medium">Check Certificates</a>

          <Button onClick={() => scrollOrNavigate("download")} className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2">
            <Download className="h-4 w-4" /> Download
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-indigo-600">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <button onClick={() => scrollOrNavigate("features")} className="block px-6 py-3 w-full text-left hover:bg-indigo-50">
            Features
          </button>
          <button onClick={() => scrollOrNavigate("about")} className="block px-6 py-3 w-full text-left hover:bg-indigo-50">
            About
          </button>
          <button onClick={() => scrollOrNavigate("contact")} className="block px-6 py-3 w-full text-left hover:bg-indigo-50">
            Contact
          </button>
          <a href="/check-certificates" className="block px-6 py-3 hover:bg-indigo-50">Check Certificates</a>
          <Button onClick={() => scrollOrNavigate("download")} className="w-full m-4 bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center gap-2">
            <Download className="h-4 w-4" /> Download
          </Button>
        </div>
      )}
    </nav>
  );
}
