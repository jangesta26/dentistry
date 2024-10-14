
import { IoIosArrowDown  } from "react-icons/io";

const Appointment = () => {
  return (
    <section className="appointment section" id='/appointment'>
      <div className="container mx-auto">
        {/* title */}
        <h2 className='appointment__title h2 mb-5 xl:mb-[50px] text-center xl:text-left'>Book appointment or call: 
        <span className='text-accent-tertiary'>(+63) 123 4567 890</span>
        </h2>
        {/* form */}
        <form className='appointment__form flex flex-col gap-y-5'>
          {/* select wrapper*/}
          <div className='flex flex-col xl:flex-row gap-5'>
            {/* seclect 1 */}
            <div className='select relative flex items-center'>
              {/* icon */}
              <div className='absolute right-4'>
                <IoIosArrowDown className='text-[26px] text-primary'/>
              </div>
              {/* select */}
              <select className='appearance-none outline-none h-full w-full bg-transparent px-4'>
                <option value='1'>Select department</option>
                <option value='2'>department 1</option>
                <option value='3'>department 2</option>
                <option value='4'>department 3</option>
              </select>
            </div>
            {/* seclect 2 */}
            <div className='select relative flex items-center'>
              {/* icon */}
              <div className='absolute right-4'>
                <IoIosArrowDown className='text-[26px] text-primary'/>
              </div>
              {/* select */}
              <select className='appearance-none outline-none h-full w-full bg-transparent px-4'>
                <option value='1'>Select Doctor</option>
                <option value='2'>Dr. Jan Doe</option>
                <option value='2'>Dr. Kristalle Smith</option>
                <option value='2'>Dr. Vegapunk Cyborg</option>
              </select>
            </div>
          </div>
          {/* input wrapper */}
          <div className='flex flex-col xl:flex-row gap-5'>
            <input type="text" className='input' placeholder='Full Name' />
            <input type="text" className='input' placeholder='Phone Number (+63) 123 4567 890' />
          </div>
          <div className='flex flex-col xl:flex-row gap-5'>
            <input type="date" className="input"  />
            <input type="time"  className="input" />
          </div>
          {/* btn */}
          <button className='btn btn-lg btn-accent xl:self-start' type='submit'>Book an appointment</button>
        </form>
      </div>
    </section>
  )
}

export default Appointment