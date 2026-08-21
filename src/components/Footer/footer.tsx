import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const jobCourses = [
  {
    name: "Full Industrial Training",
    href: "/courses/industrial-automation",
  },
  {
    name: "Electrical Design",
    href: "/courses/electrical-design",
  },
  {
    name: "Servo Motors & Drive",
    href: "/courses/servo-and-drive-system",
  },
  {
    name: "Panel Design",
    href: "/courses/panel-design",
  },
  {
    name: "PLC Vender Training",
    href: "/courses/plc-vender-training",
  },
  {
    name: "Summer/Winter Training",
    href: "/courses/summer-winter-training",
  },
];

const professionalCourses = [
  {
    name: "Corporate Training",
    href: "/corporate_training",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Clients",
    href: "/clients",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blogs",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-6">

      {/* Container */}
      <div className="max-w-8xl mx-auto px-8 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-15">

        {/* ================= LOGO + ABOUT ================= */}
        <div>

          <Image
            src="/diacwhite.png"
            alt="DIAC Logo"
            width={140}
            height={60}
            className="mb-5"
          />

          <p className="text-gray-400 text-md leading-6">
            DIAC is a premier Industrial Automation and Robotics
            training institute in Delhi/NCR.
          </p>

        </div>

        {/* ================= JOB COURSES ================= */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Job Oriented Courses
          </h3>

          <ul className="space-y-3 text-gray-400 text-md">

            {jobCourses.map((course, index) => (
              <li key={index}>

                <Link
                  href={course.href}
                  className="hover:text-red-900 transition duration-300"
                >
                  {course.name}
                </Link>

              </li>
            ))}

          </ul>

        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400 text-md">

            {professionalCourses.map((course, index) => (
              <li key={index}>

                <Link
                  href={course.href}
                  className="hover:text-red-900 transition duration-300"
                >
                  {course.name}
                </Link>

              </li>
            ))}

          </ul>

        </div>

        {/* ================= CONTACT ================= */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <div className="space-y-4">

            <a
              href="mailto:training@diac.co.in"
              className="flex items-center gap-2 text-gray-400 hover:text-red-900 transition duration-300 text-md"
            >
              <Mail
                size={16}
                className="text-white shrink-0"
              />

              <span>
                training@diac.co.in
              </span>
            </a>

            <a
              href="tel:+919953489987"
              className="flex items-center gap-2 text-gray-400 hover:text-red-900 transition duration-300 text-md"
            >
              <Phone
                size={16}
                className="text-white shrink-0"
              />

              <span>
                +91 99534 89987
              </span>
            </a>

            <a
              href="tel:+919711287737"
              className="flex items-center gap-2 text-gray-400 hover:text-red-900 transition duration-300 text-md"
            >
              <Phone
                size={16}
                className="text-white shrink-0"
              />

              <span>
                +91 97112 87737
              </span>
            </a>

            <div className="flex items-center gap-2 text-gray-400 text-md">

              <MapPin
                size={16}
                className="text-white shrink-0"
              />

              <span>
                Noida Sector 2, India
              </span>

            </div>

          </div>

        </div>

        {/* ================= FOLLOW US ================= */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-5 text-xl mb-6">

            <a
              href="https://www.instagram.com/diactraining/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-red-900 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919953489987"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-red-900 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.facebook.com/DIACTRAINING"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-red-900 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.linkedin.com/school/diactraining/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-red-900 transition"
            >
              <FaLinkedin />
            </a>

          </div>

          <Link href="/contact">
            <button className="px-5 py-2 bg-red-900 text-white rounded font-semibold hover:bg-white hover:text-black transition uppercase">
              Free Demo
            </button>
          </Link>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="text-center text-gray-300 mt-10 border-t border-gray-800 pt-4 text-md">
        © 2026 DIAC. All rights reserved.
      </div>

    </footer>
  );
}