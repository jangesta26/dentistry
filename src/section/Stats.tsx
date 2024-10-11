import React from 'react'

export const Stats = () => {
  return (
    <section className='stats section'>
      <div className='container mx-auto '>
        {/* wrapper */}
        <div className='flex flex-col xl:flex-row gap-y-6 justify-between'>
          {/* item 1*/}
          <div className='stats__item flex-1 xl:border-r flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary
            xl:mb-2'>
              +5001
            </div>
            <div>Happy Patients</div>
          </div>
          {/* item 2*/}
          <div className='stats__item flex-1 xl:border-r flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary
            xl:mb-2'>
              24
            </div>
            <div>Total Branches</div>
          </div>
          {/* item 3*/}
          <div className='stats__item flex-1 xl:border-r flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary
            xl:mb-2'>
              +48
            </div>
            <div>Senior Doctors</div>
          </div>
          {/* item 4*/}
          <div className='stats__item flex-1 flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary
            xl:mb-2'>
              +15
            </div>
            <div>Years Experience</div>
          </div>
        </div>
      </div>
    </section> 
  )
}

