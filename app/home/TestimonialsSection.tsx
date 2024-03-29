import Testimonial from "./Testimonial"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from "swiper"

import { Navigation, Pagination, Autoplay, Virtual } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import useWindowSize from "hooks/use-window-size"

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual])

const testimonials = [
  {
    author: "Paul Smith",
    review: "Really enjoyed using the product, very user friendly.",
    date: "January 2023",
  },
  {
    author: "Pablo Ochoa",
    review:
      "This not only enhances the overall performance of the application but also promotes best coding practices.",
    date: "March 2023",
  },

  {
    author: "Jasper Chen",
    review:
      "Code Genius excels in automating the often labor-intensive process of unit test generation.",
    date: "April 2023",
  },
  {
    author: "Federico Sanchez",
    review:
      "The optimization feature has been instrumental in ensuring my code is not just functional but also runs smoothly and efficiently.",
    date: "May 2023",
  },
  {
    author: "Cesar Vin",
    review:
      "Code Genius stands out in its ability to optimize code effortlessly. The tool analyzes and refines code structures, identifying potential bottlenecks and suggesting improvements",
    date: "June 2023",
  },
  {
    author: "Paty Cabrera",
    review:
      "The chatting feature has undoubtedly enhanced my development workflow, making Code Genius a valuable asset in my toolkit.",
    date: "November 2023",
  },
  {
    author: "Sam Weits",
    review:
      "I'm particularly impressed with Code Genius for its remarkable speed and precision in generating unit tests",
    date: "December 2023",
  },
  {
    author: "Esteban Fuentes",
    review:
      "Es significante el tiempo de desarrollo que puede ahorrar esta herramienta.",
    date: "January 2024",
  },
]

export default function TestimonialsSection({ translations }) {
  const slides: React.ReactNode[] = [] // Define the type of slides as ReactNode[]
  const { isMobile } = useWindowSize()
  testimonials.map((testimonial, i) => {
    slides.push(
      <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
        <div className="slide flex justify-center">
          <Testimonial testimonial={testimonial} />
        </div>
      </SwiperSlide>,
    )
  })

  return (
    <div className="w-screen pb-28">
      <p className="mt-10 flex justify-center px-2 text-center text-4xl text-white">
        {translations?.title}
      </p>
      <p className="mt-5 flex justify-center px-4 text-center text-2xl text-white">
        {translations?.subtitle}
      </p>
      <div className="mx-auto flex w-full overflow-hidden sm:w-[90%]">
        <Swiper
          id="swiper"
          virtual
          slidesPerView={isMobile ? 1 : 4}
          spaceBetween={10}
          autoplay
          loop
          onReachEnd={() => {
            const tmp = slides.unshift()
            slides.push(tmp)
          }}
        >
          {slides}
        </Swiper>
      </div>
    </div>
  )
}
