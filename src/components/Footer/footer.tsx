import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const jobCourses = [
  "Industrial Training",
  "Summer Training",
  "PLC Training",
  "SCADA & HMI Training",
  "Drives and Motor",
];

const professionalCourses = [
  "Simotion Training",
  "Robotics Training",
  "Servo Motors Training",
  "Process Instrumentation",
  "Panel Designing & AUTOCAD",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-6">
      
      {/* Container */}
      <div className="max-w-8xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-15">

        {/* Logo + About */}
        <div>
          <Image
            src="/diacwhite.png"
            alt="DIAC Logo"
            width={140}
            height={60}
            className="mb-5"
          />
          <p className="text-gray-400 text-md leading-6">
            DIAC is a premier Industrial Automation and Robotics training institute in Delhi/NCR.
          </p>
        </div>

        {/* Job Courses */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Job Oriented Courses</h3>
          <ul className="space-y-2 text-gray-400 text-md">
            {jobCourses.map((course, index) => (
              <li
                key={index}
                className="hover:text-red-900 transition duration-300 cursor-pointer"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Courses */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Professional Courses</h3>
          <ul className="space-y-2 text-gray-400 text-md">
            {professionalCourses.map((course, index) => (
              <li
                key={index}
                className="hover:text-red-900 transition duration-300 cursor-pointer"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>

          <div className="flex items-center gap-2 text-gray-400 mb-3 hover:text-red-900 transition duration-300 cursor-pointer text-md">
            <Mail size={16} className="text-white" />
            <span>training@diac.co.in</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 mb-2 hover:text-red-900 transition duration-300 cursor-pointer text-md">
            <Phone size={16} className="text-white" />
            <span>+91 99534 89987</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 mb-2 hover:text-red-900 transition duration-300 cursor-pointer text-md">
            <Phone size={16} className="text-white" />
            <span>+91 97112 87737</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 hover:text-red-900 transition duration-300 cursor-pointer text-md">
            <MapPin size={16} className="text-white" />
            <span>Noida Sector 2, India</span>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Follow Us</h3>

          <div className="flex gap-5 text-xl mb-6">
            <a href="#" className="hover:text-red-900">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-red-900">
              <FaWhatsapp />
            </a>

            <a href="#" className="hover:text-red-900">
              <FaLinkedin />
            </a>
          </div>

          <a href="/contact">
           <button className="px-5 py-2 bg-red-900 text-white rounded font-semibold hover:bg-white hover:text-black transition uppercase">
            Free Demo
          </button>
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-300 mt-10 border-t border-gray-800 pt-4 text-md">
        © 2026 DIAC. All rights reserved.
      </div>
    </footer>
  );
}