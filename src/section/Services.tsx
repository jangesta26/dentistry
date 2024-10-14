import { services } from '@/test-apis/services';
import Image from 'next/image';

const Services = () => {
  return (
    <section className='services mb-20' id='/services'>
      {/* backgorund */}
      <div className='bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto
      rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center
      xl:items-start -z-10'>
        <div className='container mx-auto p-1'>
          {/* text */}
          <div className='services__top flex items-center flex-col xl:flex-row xl:mb-[60px]'>
            <h2 className='h2 text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left'>Our best services for your solutions</h2>
            <p className='text-white flex-1 xl:text-left max-w-2xl
            xl:max-w-none text-justify'>Maintaining good oral health is linked to overall health, as poor oral hygiene can lead to serious conditions like heart disease, diabetes, and respiratory issues. Regular oral health care fosters a healthy smile, boosts confidence, and enhances quality of life.</p>
          </div>
        </div>
      </div>
      {/* grid container */}
      <div className="container mx-auto mt-8 xl:-mt-[144px]">
        <div className='grid xl:grid-cols-4 gap-5 px-8 xl:px-0'>
          {/* grid item */}
          {
            services.map((item)=>(
              <div key={item.id}  className='services__item bg-white p-[30px] rounded-[10px] shadow-custom2
              min-h-[288px] flex flex-col items-center text-center'>
                {/* grid item icon */}
                <div className='mb-[15px]'>
                    <Image 
                    key={item.id}
                    src={item.imgSrc} 
                    alt={item.title} 
                    width={50}
                    height={50}
                    />
                </div>
                {/* grid item title */}
                <h3 className='h3 mb-[10px]'>{item.title}</h3>
                {/* grid item description */}
                <p className='font-light leading-normal max-w-[300px]'>{item.description}</p>
              </div>
            ))
          }

          {/* end grid item */}
        </div>
        <div className='w-full flex items-center justify-center mt-4'>
        <button className='mx-auto bg-accent rounded-full w-auto text-white px-6 hover:bg-accent-tertiary'>View All Services</button>
        </div>
      </div>
     
    </section>

  )
}
export default Services