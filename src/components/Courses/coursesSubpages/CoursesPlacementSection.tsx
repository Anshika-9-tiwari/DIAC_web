"use client";

import Image from "next/image";
import Link from "next/link";

export default function PlacementSection() {

  /* =========================
     COMPANY LOGOS
  ========================== */
  const companies = [
    { name: "Amazon", logo: "/logos/amazon.png" },
    { name: "Microsoft", logo: "/logos/microsoft.png" },
    { name: "IBM", logo: "/logos/ibm.png" },
    { name: "KPMG", logo: "/logos/kpmg.png" },
    { name: "Google", logo: "/logos/google.png" },
    { name: "Accenture", logo: "/logos/accenture.png" },
    { name: "TCS", logo: "/logos/tcs.png" },
    { name: "EY", logo: "/logos/ey.png" },
    { name: "Capgemini", logo: "/logos/capgemini.png" },
    { name: "Genpact", logo: "/logos/genpact.png" },
    { name: "OYO", logo: "/logos/oyo.png" },
    { name: "HCL", logo: "/logos/hcl.png" },
  ];

  /* =========================
     PLACEMENT CARDS
  ========================== */
  const placements = [
    {
      name: "Rahul Sharma",
      hike: "80%",
      fromCompany: "Trainee Engineer",
      fromLogo: "/logos/hcl.png",
      toCompany: "Automation Engineer",
      toLogo: "/logos/tcs.png",
    },
    {
      name: "Priya Verma",
      hike: "100%",
      fromCompany: "Diploma Fresher",
      fromLogo: "/logos/genpact.png",
      toCompany: "PLC Engineer",
      toLogo: "/logos/accenture.png",
    },
  ];

  /* =========================
     TABLE DATA 
  ========================== */
  const tableHeaders = ["Track", "Weekdays", "Weekends", "Fast Track"];

  const tableRows = [
    {
      label: "Course Duration",
      values: ["6 Months", "8 Months", "45 Days"],
    },
    {
      label: "Hours Per Day",
      values: ["2–3 Hours", "3–4 Hours", "6 Hours"],
    },
    {
      label: "Training Mode",
      values: ["Offline/Online", "Offline/Online", "Offline/Online"],
    },
  ];

  return (
    <section className="py-22 bg-gradient-to-br from-[#eef2ff] via-white to-[#f9fafb]" id="placement">
      <div className="max-w-8xl mx-auto px-6 md:px-15 space-y-32">

        {/* =========================
           1.companyLOGOS
        ========================== */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT - STATS */}
          <div className="bg-white rounded-xl p-15 shadow-sm">
            <h3 className="text-3xl font-semibold mb-15 text-center">
              Placement Stats in Industrial Automation
            </h3>

            <div className="space-y-8 text-center">
              <div>
                <p className="text-gray-500 text-md">
                  Maximum salary hike
                </p>
                <p className="text-4xl font-bold text-[#801717]">
                  135%
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-md">
                  Average salary hike
                </p>
                <p className="text-3xl font-semibold text-[#0b1f3a]">
                  75%
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - LOGOS */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">
              Our Students Placed in Top Companies
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {companies.map((company, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={90}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* =========================
             2. PLACEMENT HIGHLIGHTS
        ========================== */}
        <div>
          <h2 className="text-4xl font-bold mb-15 ">
            Industrial Automation Placement Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {placements.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-300"
              >

                {/* TOP */}
                <div className="flex justify-between items-center p-4 bg-[#eef2f7]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                    <p className="font-semibold">{item.name}</p>
                  </div>

                  <p className="text-[#801717] font-semibold">
                    {item.hike} Hike ↗
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="grid grid-cols-3 items-center p-6 text-center">

                  {/* FROM */}
                  <div>
                    <Image
                      src={item.fromLogo}
                      alt="from"
                      width={80}
                      height={40}
                      className="mx-auto object-contain"
                    />
                    <p className="text-sm mt-2 text-gray-500">
                      {item.fromCompany}
                    </p>
                  </div>

                  {/* ARROW */}
                  <div className="text-xl text-gray-400">
                    ➜
                  </div>

                  {/* TO */}
                  <div>
                    <Image
                      src={item.toLogo}
                      alt="to"
                      width={80}
                      height={40}
                      className="mx-auto object-contain"
                    />
                    <p className="text-sm mt-2 font-medium">
                      {item.toCompany}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* =========================
            3. BATCH TABLE
        ========================== */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-10">
            Batches Timing for Industrial Automation Course
          </h2>

          <div className="bg-white rounded-xl shadow-sm p-6 overflow-x-auto">

            <table className="w-full text-sm text-center border">

              {/* HEAD */}
              <thead className="bg-gray-100">
                <tr>
                  {tableHeaders.map((head, i) => (
                    <th key={i} className="p-3 border">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i}>
                    <td className="p-3 border font-medium">
                      {row.label}
                    </td>

                    {row.values.map((val, j) => (
                      <td key={j} className="p-3 border">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>

            {/* CTA */}
            <div className="text-center mt-10">
              <Link
                href="/downloads/industrial-automation-syllabus.pdf">
                <button className="bg-[#801717] text-white px-6 py-3 rounded-lg hover:bg-red-800 transition cursor-pointer ">
                   Download Syllabus
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}