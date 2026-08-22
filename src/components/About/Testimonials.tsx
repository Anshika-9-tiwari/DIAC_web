"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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

export default function AboutTestimonials() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section className="py-14 md:py-20 bg-[#fafafa] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="text-center mb-10 md:mb-14">

          <span className="inline-block text-xs px-4 py-2 bg-[#801717] text-white rounded-full font-medium mb-5 tracking-widest">
            Student Review
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#07172b] mb-5">
            What Our Students Say
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto leading-7 text-sm md:text-base">
            Real feedback from students who completed Industrial Automation,
            PLC, SCADA, HMI, Robotics and other training programs at DIAC.
          </p>

        </div>

        {/* EMBLA SLIDER */}
        <div ref={emblaRef} className="overflow-hidden">

          <div className="flex">

            {reviews.map((review, index) => (

              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2 md:px-3"
              >

                <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7 min-h-[310px] md:h-[320px] flex flex-col shadow-sm">

                  {/* STARS */}
                  <div className="flex gap-1 text-yellow-400 mb-4">

                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        fill="currentColor"
                      />
                    ))}

                  </div>

                  {/* USER */}
                  <div className="flex items-center gap-3 md:gap-4">

                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#801717] flex items-center justify-center shrink-0">

                      <UserRound
                        size={19}
                        className="text-white"
                      />

                    </div>

                    <div className="min-w-0">

                      <h4 className="font-semibold text-[#071629] text-base md:text-lg truncate">
                        {review.name}
                      </h4>

                      <p className="text-xs text-gray-500">
                        Verified Student
                      </p>

                    </div>

                  </div>

                  {/* REVIEW */}
                  <p className="text-gray-600 text-sm leading-6 mt-5">
                    "{review.text}"
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}