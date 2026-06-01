"use client";

import Slider from "react-slick";
import { UserRound } from "lucide-react";

export default function CorporateTestimonials() {
  const testimonials = [
    {
      text: "I completed Full Industrial Automation Training at DIAC and had a great experience. The course is practical and industry-oriented, covering PLC, SCADA, HMI, VFD, sensors, and panel designing. Trainers are supportive and explain everything clearly. Highly recommended for anyone starting a career in automation!",
      name: "Saurabh Kumar",
      role: "Full Industrial Automation Training",
    },

    {
      text: "I joined DIAC for PLC & SCADA training and my experience was very good. Faculty is knowledgeable and always ready to help. Practical sessions helped me understand real industrial work. Best institute for automation training with job-oriented courses. Totally worth it.",
      name: "Jogindra Singh",
      role: "PLC & SCADA Training",
    },

    {
      text: "DIAC is one of the best institutes for Industrial Automation training. Trainers explain PLC and SCADA concepts in a very simple and practical way. Labs are well-equipped and focus is fully on job-oriented skills. I am very satisfied with the training and support.",
      name: "Shivanand Thakur",
      role: "Industrial Automation Training",
    },

    {
      text: "I completed Industrial Automation Training at DIAC Institute, Noida with hands-on learning in PLC, SCADA, HMI, VFD, AutoCAD, and Networking. The trainers are highly experienced and supportive. After training, I got placed in a reputed company.",
      name: "Sumit Maurya",
      role: "Placed Student",
    },

    {
      text: "I did the PLC, SCADA, and HMI training at DIAC, and it was great. The teacher was best and super helpful. All the DIAC members were really supportive too. Highly recommend for PLC SCADA training.",
      name: "Ankit Vats",
      role: "PLC, SCADA & HMI Training",
    },

    {
      text: "The summer training on industrial automation gave me exposure to real-world industrial systems. The combination of PLC, SCADA, and HMI training was perfect. Every session included practicals, which made learning more effective.",
      name: "Abhi Gautam",
      role: "Summer Training Program",
    },

    {
      text: "I am an Electrical student. I found this summer training extremely helpful. Learning PLC ladder logic, SCADA visualization, and HMI interfacing gave me a clear understanding of how automation works in industries.",
      name: "Deepak Kumar",
      role: "Electrical Engineering Student",
    },

    {
      text: "Dynamic Institute of Automation provides an exceptional learning experience in the field of automation. The instructors are highly knowledgeable, and the hands-on approach to training enhances practical skills.",
      name: "Prachi Parjapati",
      role: "Industrial Automation Training",
    },

    {
      text: "I have done my Industrial Automation Training from DIAC Noida and trainers are good in knowledge. The faculty is good and I easily learnt the detailed course from them. It was a pleasure doing this course.",
      name: "Shashi Kumar",
      role: "Industrial Automation Training",
    },

    {
      text: "Placement oriented training institute. Good place for those who are seeking a good institute to enhance their skills. DIAC is a good training and placement company. Training center is fully equipped with advanced labs.",
      name: "Aarti Aggarwal",
      role: "Placement Assistance Program",
    },

    {
      text: "Nice Experience!! Good management. Their online classes and live sessions are of good quality. Value for money. If you want to join their courses then you can join without any fear of placement assistance.",
      name: "Hina Kalra",
      role: "Online Training Program",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="reviews" className="py-20 bg-[#fbfcff]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Label */}
        <p className="text-xs tracking-widest text-[#801717] uppercase mb-5">
          Student Reviews
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a] mb-5">
          What Our Students Say
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 max-w-2xl mb-12 text-medium">
          Real experiences from students who completed Industrial Automation,
          PLC, SCADA, HMI, Robotics and other training programs at DIAC.
        </p>

        {/* Carousel */}
        <Slider {...settings}>

          {testimonials.map((item, i) => (
            <div key={i} className="px-3">

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 min-h-[330px] flex flex-col">

                {/* Stars */}
                <div className="text-[#801717] mb-3 text-sm">
                  ★★★★★
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  “{item.text}”
                </p>

                {/* User */}
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-100">

                  <div className="w-10 h-10 bg-[#801717] text-white rounded-full flex items-center justify-center">
                    <UserRound size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      {item.role}
                    </p>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </Slider>

      </div>
    </section>
  );
}