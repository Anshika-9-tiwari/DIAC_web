"use client";

import Slider from "react-slick";
import { UserRound, Star } from "lucide-react";

const reviews = [
  {
    name: "Saurabh Kumar",
    text: "I completed Full Industrial Automation Training at DIAC and had a great experience. The course is practical and industry-oriented, covering PLC, SCADA, HMI, VFD, sensors, and panel designing. Trainers are supportive and explain everything clearly. Highly recommended for anyone starting a career in automation!",
  },
  {
    name: "Jogindra Singh",
    text: "I joined DIAC for PLC & SCADA training and my experience was very good. Faculty is knowledgeable and always ready to help. Practical sessions helped me understand real industrial work. Best institute for automation training with job-oriented courses.",
  },
  {
    name: "Shivanand Thakur",
    text: "DIAC is one of the best institutes for Industrial Automation training. Trainers explain PLC and SCADA concepts in a very simple and practical way. Labs are well-equipped and focus is fully on job-oriented skills.",
  },
  {
    name: "Sumit Maurya",
    text: "I completed Industrial Automation Training at DIAC Institute, Noida with hands-on learning in PLC, SCADA, HMI, VFD, AutoCAD, and Networking. After training, I got placed in a reputed company.",
  },
  {
    name: "Ankit Vats",
    text: "I did the PLC, SCADA, and HMI training at DIAC, and it was great. The teacher was best and super helpful. Highly recommend for PLC SCADA training.",
  },
  {
    name: "Abhi Gautam",
    text: "The summer training on industrial automation gave me exposure to real-world industrial systems. Every session included practicals, which made learning more effective.",
  },
  {
    name: "Deepak Kumar",
    text: "Learning PLC ladder logic, SCADA visualization, and HMI interfacing gave me a clear understanding of how automation works in industries.",
  },
  {
    name: "Prachi Parjapati",
    text: "Dynamic Institute of Automation provides an exceptional learning experience. The instructors are highly knowledgeable and the practical training is excellent.",
  },
  {
    name: "Shashi Kumar",
    text: "I have done my Industrial Automation Training from DIAC Noida and trainers are good in knowledge. It was a pleasure doing this course.",
  },
  {
    name: "Aarti Aggarwal",
    text: "Placement oriented training institute. Good place for those who are seeking a good institute to enhance their skills.",
  },
  {
    name: "Hina Kalra",
    text: "Nice experience. Their online classes and live sessions are of good quality. Value for money and placement assistance is excellent.",
  },
];

export default function Testimonials() {
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
        breakpoint: 1024,
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
    <section className="py-20 bg-[#fafafa]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-[#801717] font-semibold uppercase tracking-widest mb-5">
            Student Reviews
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a] mb-6">
            What Our Students Say
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Real feedback from students who completed Industrial Automation,
            PLC, SCADA, HMI, Robotics and other training programs at DIAC.
          </p>

        </div>

        {/* Carousel */}
        <Slider {...settings}>

          {reviews.map((review, index) => (
            <div key={index} className="px-3">

              <div className="bg-white border border-gray-200 rounded-2xl p-7 h-[320px] flex flex-col">

                {/* Stars */}
                <div className="flex gap-1 text-[#801717] mb-4">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                    />
                  ))}

                </div>

                {/* User */}
                <div className="flex items-center gap-4 mt-4">

                  <div className="w-12 h-12 rounded-full bg-[#801717] flex items-center justify-center">

                    <UserRound
                      size={20}
                      className="text-white"
                    />

                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0b1f3a]">
                      {review.name}
                    </h4>

                    <p className="text-xs text-gray-500">
                      Verified Student
                    </p>
                  </div>

                </div>

                {/* Review */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 overflow-hidden mt-6">
                  "{review.text}"
                </p>

              </div>

            </div>
          ))}

        </Slider>

      </div>

    </section>
  );
}