'use client';
import React, { useEffect, useState } from 'react';

const Stats: React.FC = () => {
  const [happyPatients, setHappyPatients] = useState<number>(0);
  const [totalBranches, setTotalBranches] = useState<number>(0);
  const [seniorDentists, setSeniorDentists] = useState<number>(0);
  const [yearsExperience, setYearsExperience] = useState<number>(0);

  useEffect(() => {
    const animateCount = (setter: React.Dispatch<React.SetStateAction<number>>, target: number, duration: number) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setter(start);
        if (start === target) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    animateCount(setHappyPatients, 2001, 2000);
    animateCount(setTotalBranches, 10, 1000);
    animateCount(setSeniorDentists, 48, 2000);
    animateCount(setYearsExperience, 15, 1500);
  }, []);

  return (
    <section className='stats section'>
      <div className='container mx-auto'>
        {/* wrapper */}
        <div className='flex flex-col xl:flex-row gap-y-6 justify-between'>
          {/* item 1 */}
          <div className='stats__item flex-1 xl:border-r flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>
              +{happyPatients}
            </div>
            <div>Happy Patients</div>
          </div>
          {/* item 2 */}
          <div className='stats__item flex-1 xl:border-r flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>
              +{totalBranches}
            </div>
            <div>Total Branches</div>
          </div>
          {/* item 3 */}
          <div className='stats__item flex-1 xl:border-r flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>
              +{seniorDentists}
            </div>
            <div>Senior Dentist</div>
          </div>
          {/* item 4 */}
          <div className='stats__item flex-1 flex flex-col items-center'>
            <div className='text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2'>
              +{yearsExperience}
            </div>
            <div>Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
