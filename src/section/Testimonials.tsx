'use client'
import FaTestimonial from '../../public/assets/img/testimonials/img.png';
import Image from 'next/image';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { testimonials } from '@/test-apis/testimonials';
const Testimonials = () => {
  return (
    <section className="testimonial bg-testimonials bg-cover bg-right bg-no-repeat py-12
    xl:min-h-[595px] xl:pu-0">
      <div className=" testimonial__container container mx-auto">
        <div className='flex flex-col items-center gap-x-14 xl:flex-row'>
          {/* img */}
          <div className='hidden xl:flex'>
            <Image src={FaTestimonial} alt="" />
          </div>
          {/* slider */}
          <div className='max-w-[98%] xl:max-w-[710px]'>
            {/* <!-- Slider main container --> */}
            <div className="h-[450px] mx-auto flex">
            {/* Additional required wrapper */} 
            <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {
                  testimonials.map((item)=>(
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className='h-full flex flex-col justify-center items-start'>
                      <div className='max-w-[680px] mx-auto text-center xl:text-left'>
                        <p className='font-light relative text-[22px] text-[#4c5354] leading-[190%]
                        text-center xl:text-left before:bg-qouteLeft before:bg-contain before:bg-bottom
                        before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat
                        after:bg-qouteRight after:bg-contain after:bg-bottom after:inline-block 
                        after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7'>
                          {/* message */}
                          <span className='mx-2'>
                            {item.message}
                          </span>
                        </p>
                        {/* name */}
                        <div className='text-[26px] text-[#4c5354] font-semibold'>{item.name}</div>
                        {/* job */}
                        <div className='text-[#9ab4b7] font-medium uppercase tracking-[2.24px]'>{item.job}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                  ))
                }
              </Swiper>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
