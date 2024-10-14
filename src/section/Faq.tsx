import React from 'react'
import { Accordion } from '@/components/Accordion'

const Faq = () => {
  return (
      <section className="faq">
        <div className="container mx-auto">
        <h2 className='faq__title h2 text-center mb-[50px]'>We&apos;ve got answer</h2>
          {/* item */}
          <Accordion 
           question='What services does your dental center provide?' 
           answer='Our dental center offers a wide range of services, including preventive care (cleanings, exams), restorative treatments (fillings, crowns), cosmetic dentistry (teeth whitening, veneers), orthodontics (braces, Invisalign), oral surgery, and more.'
          />
          <Accordion 
          question='Do you accept HMO health insurance?' 
          answer='Currently, we do not accept HMO insurance at our dental center. Meanwhile, we gladly accept payments through cash, and fund transfer. For further details on payment options or any other inquiries, please contact our office directly.'
          />
          <Accordion 
          question='Is your dental center accredited by PhilHealth?' 
          answer='Our PhilHealth accreditation is currently in progress. We are working to meet all requirements and expect to be fully accredited soon. Please check back with us for updates or contact our office for alternative payment options and further assistance.'
          />
          <Accordion 
          question='I have particular dental needs. Where can I access a complete list of the services your dental center provides ?' 
          answer='Our PhilHealth accreditation is currently in progress. We are working to meet all requirements and expect to be fully accredited soon. Please check back with us for updates or contact our office for alternative payment options and further assistance.'
          />
        </div>
      </section>
  )
}
export default Faq
