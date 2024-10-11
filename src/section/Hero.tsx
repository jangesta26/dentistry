import heroImg from '../../public/assets/img/hero/img.png';
import { LiaHeartbeatSolid } from "react-icons/lia";
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='hero bg-grey py-12 xl:pt-12 xl:pb-0 overflow-hidden' id='/home'>
      <div className='container mx-auto h-full'>
        {/* text & image */}
        <div className='flex flex-col xl:flex-row items-center justify-between h-full'>
        
          {/* text */}
          <div className='hero__text xl:w-[48%] text-center xl:text-left'>
            {/* badge */}
              <div className='flex items-center bg-white py-[10px] w-max px-[20px] gap-x-2
              mb-[26px] rounded-full mx-auto xl:mx-0'>
                {/* badge icon */}
                <LiaHeartbeatSolid  className='text-2xl text-accent'/>
                <div className='uppercase text-base font-medium text-[#9ab4b7]
                tracking-[2.24px]'>
                  Live your life
                  </div>
              </div>
              {/* title */}
              <h1 className='h1 mb-6'>We care about your health</h1>
              {/* description */}
              <div className='mb-[42px] md:max-w-xl'>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Dictumst quisque sagittis purus sit amet volutpat 
              consequat.</div>
              <button className='btn btn-lg btn-accent mx-auto xl:mx-0'>Contact us</button>
          </div>

          {/* image */}
          <div className='hero__img hidden xl:flex max-w-[814px] seld-end'>
            <Image src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

 Hero
