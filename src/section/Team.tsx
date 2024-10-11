import FaDoctor1 from '../../public/assets/img/team/doctor-1.png';
import FaDoctor2 from '../../public/assets/img/team/doctor-2.png';
import FaDoctor3 from '../../public/assets/img/team/doctor-3.png';
import FaDoctor4 from '../../public/assets/img/team/doctor-4.png';
import { FaYoutube, FaFacebook, FaInstagram, FaPinterest  } from "react-icons/fa";
import Image from 'next/image';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export const Team = () => {
  return (
    <section className="team section" id='/doctors'>
      <div className="container mx-auto">
        {/* title */}
        <h2 className='team__title h2 mb-[50px] text-center xl:text-left'>Our Team</h2>
        {/* slider */}
        <div className='team__slider swiper min-h-[400px]'>
            {/* <!-- Slider main container --> */}
            <Swiper 
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper sm:h-[700px] xl:h-[450px] h-[1400px]"
            >
            {/* slide 1 */} 
                <SwiperSlide className='swiper-slide'>
                  <div className='flex flex-col md:flex-row gap-9'>
                    {/* item 1*/}
                    <div className='flex-1 flex flex-col xl:flex-row'>
                      <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                        {/* img */}
                        <div className='flex-1'>
                          <Image src={FaDoctor1} alt="" />
                        </div>
                        {/* info */}
                        <div className='flex-1 flex flex-col'>
                          {/* name */}
                          <h4 className='h4 mb-[10px]'>Dr. Zenny Ramos</h4>
                          {/* job */}
                        <div className='font-medium uppercase tracking-[2.24px]
                        text-[#9ab4b7] mb-[20px]'>Pediatrician</div>
                        {/* descriptio */}
                        <p className='font-light mb-[26px] max-w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        {/* socials */}
                        <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                          <a href="#something" className='cursor-pointer hover:text-[#CD201F] transition-all'><FaYoutube/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#1877F2] transition-all'><FaFacebook/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#E4405F] transition-all'><FaInstagram/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#BD081C] transition-all'><FaPinterest/></a>
                        </div>
                        </div>
                      </div>
                    </div>
                    {/* item 2*/}
                    <div className='flex-1 flex flex-col xl:flex-row'>
                      <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                        {/* img */}
                        <div className='flex-1'>
                          <Image src={FaDoctor2} alt="" />
                        </div>
                        {/* info */}
                        <div className='flex-1 flex flex-col'>
                          {/* name */}
                          <h4 className='h4 mb-[10px]'>Dr. Albert Chua</h4>
                          {/* job */}
                        <div className='font-medium uppercase tracking-[2.24px]
                        text-[#9ab4b7] mb-[20px]'>Cadiologist</div>
                        {/* descriptio */}
                        <p className='font-light mb-[26px] max-w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        {/* socials */}
                        <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                          <a href="#something" className='cursor-pointer hover:text-[#CD201F] transition-all'><FaYoutube/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#1877F2] transition-all'><FaFacebook/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#E4405F] transition-all'><FaInstagram/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#BD081C] transition-all'><FaPinterest/></a>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            {/* slide 2 */} 
                <SwiperSlide className='swiper-slide'>
                  <div className='flex flex-col md:flex-row gap-9'>
                    {/* item 1*/}
                    <div className='flex-1 flex flex-col xl:flex-row'>
                      <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                        {/* img */}
                        <div className='flex-1'>
                          <Image src={FaDoctor3} alt="" className='h-[335px] w-[310px] rounded-xl'/>
                        </div>
                        {/* info */}
                        <div className='flex-1 flex flex-col'>
                          {/* name */}
                          <h4 className='h4 mb-[10px]'>Dr. Marco Chua</h4>
                          {/* job */}
                        <div className='font-medium uppercase tracking-[2.24px]
                        text-[#9ab4b7] mb-[20px]'>Orthodontist</div>
                        {/* descriptio */}
                        <p className='font-light mb-[26px] max-w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        {/* socials */}
                        <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                          <a href="#something" className='cursor-pointer hover:text-[#CD201F] transition-all'><FaYoutube/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#1877F2] transition-all'><FaFacebook/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#E4405F] transition-all'><FaInstagram/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#BD081C] transition-all'><FaPinterest/></a>
                        </div>
                        </div>
                      </div>
                    </div>
                    {/* item 2*/}
                    <div className='flex-1 flex flex-col xl:flex-row'>
                      <div className='flex flex-col xl:flex-row items-center gap-[30px]'>
                        {/* img */}
                        <div className='flex-1'>
                          <Image src={FaDoctor4} alt="" className='h-[335px] w-[310px] rounded-xl'/>
                        </div>
                        {/* info */}
                        <div className='flex-1 flex flex-col'>
                          {/* name */}
                          <h4 className='h4 mb-[10px]'>Dr. Rhea Swift</h4>
                          {/* job */}
                        <div className='font-medium uppercase tracking-[2.24px]
                        text-[#9ab4b7] mb-[20px]'>Prosthodontist</div>
                        {/* descriptio */}
                        <p className='font-light mb-[26px] max-w-[320px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        {/* socials */}
                        <div className='flex items-center text-[30px] gap-x-5 text-accent-tertiary'>
                          <a href="#something" className='cursor-pointer hover:text-[#CD201F] transition-all'><FaYoutube/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#1877F2] transition-all'><FaFacebook/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#E4405F] transition-all'><FaInstagram/></a>
                          <a href="#something" className='cursor-pointer hover:text-[#BD081C] transition-all'><FaPinterest/></a>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </section>
  )
}

