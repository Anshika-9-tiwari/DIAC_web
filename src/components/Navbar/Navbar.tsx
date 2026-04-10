"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About us", href: "/about" },
  { name: "Corporate Training", href: "/corporate-training" },
  { name: "Placement", href: "/placement" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const coursesDropdown = [
  { name: "Industrial Training", href: "/courses/industrial-training" },
  { name: "PLC Training", href: "/courses/plc-training" },
  { name: "SCADA & HMI", href: "/courses/scada" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white text-gray-700 sticky top-[40px] z-40 shadow-md">
      
      {/* Navbar */}
      <div className="max-w-8xl mx-auto px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/diacred.png"
            width={150}
            height={50}
            alt="DIAC Logo"
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-10 text-lg font-medium">

            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  href={link.href}
                  className="relative pb-1 transition duration-300 hover:text-red-900"
                >
                  {link.name}

                  {/* Underline Hover Effect */}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-800 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}

            {/* Courses Dropdown */}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer pb-1 hover:text-red-900 transition duration-300">
                Courses
                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </div>

              <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-md w-60 mt-3 p-2 shadow-lg z-50">
                {coursesDropdown.map((course, index) => (
                  <li key={index} className="p-2 hover:bg-gray-100 rounded">
                    <Link href={course.href}>{course.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

         <Link href="/contact">
           <button className="px-4 py-2 rounded-md bg-gradient-to-l from-[#801717] to-[#a11c1c] text-white font-semibold hover:bg-red-800 transition duration-300 uppercase">
             Enquiry now
           </button>
         </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={40} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white text-red-900">
          <ul className="flex flex-col">

            <li className="border-b p-4">
              <details>
                <summary className="cursor-pointer">Courses</summary>
                <ul className="mt-2 ml-4 space-y-2">
                  {coursesDropdown.map((course, index) => (
                    <li key={index}>
                      <Link href={course.href}>{course.name}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            {navLinks.map((link, index) => (
              <li key={index} className="border-b  border-b-gray-300 p-3">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}

            <li className="p-5">
              <Link href="/contact">
                <button className="w-full bg-red-900 text-white py-2 rounded-xl font-semibold uppercase">
                  enquiry now
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}