import React from 'react'
import { Accordion } from '@/components/Accordion'

export const Faq = () => {
  return (
      <section className="faq">
        <div className="container mx-auto">
        <h2 className='faq__title h2 text-center mb-[50px]'>We&apos;ve got answer</h2>
          {/* item */}
          <Accordion 
          question='Why to believe in Insove Dental healthcare ?' 
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Tortor posuere ac ut consequat semper viverra nam libero. 
          Diam maecenas sed enim ut sem viverra aliquet.'
          />
          <Accordion 
          question='Why to believe in Insove Dental healthcare ?' 
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Tortor posuere ac ut consequat semper viverra nam libero. 
          Diam maecenas sed enim ut sem viverra aliquet.'
          />
          <Accordion 
          question='Why to believe in Insove Dental healthcare ?' 
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Tortor posuere ac ut consequat semper viverra nam libero. 
          Diam maecenas sed enim ut sem viverra aliquet.'
          />
          <Accordion 
          question='Why to believe in Insove Dental healthcare ?' 
          answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Tortor posuere ac ut consequat semper viverra nam libero. 
          Diam maecenas sed enim ut sem viverra aliquet.'
          />
        </div>
      </section>
  )
}

