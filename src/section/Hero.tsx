'use client'
import { LiaHeartbeatSolid } from "react-icons/lia";
import HeroSlideShow from "@/components/Carousel/HeroSlideShow";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()
  return (
    <section className='hero  py-12 xl:pt-12 xl:pb-0' id='/home'>
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
              <h1 className='h2 mb-6'>We care about your oral health and well-being</h1>
              {/* description */}
              <div className='mb-10 md:max-w-xl text-justify'>Our dedicated team is committed to providing you with comprehensive dental care, ensuring a healthy smile and a positive experience at every visit.</div>
              <button 
              className='btn btn-lg btn-accent mx-auto xl:mx-0'
              onClick={()=>router.push('/appointment')}
              >
                Share Your Smile Journey!
              </button>
          </div>

          {/* image */}
          <HeroSlideShow />
        </div>
      </div>
    </section>
  )
}
export default Hero
