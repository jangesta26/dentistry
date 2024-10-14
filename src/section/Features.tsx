import Video from '@/components/Video/Video';
import { features } from '@/test-apis/features';
import React from 'react';

const Features = () => {
  return (
    <section className='features mt-20 mb-6'>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="h2 text-center mb-6">Why choose us</h2>
          <p className="text-gray-600 text-md">Discover exceptional dental care tailored to your needs. Our experienced team utilizes state-of-the-art technology in a welcoming environment, ensuring you receive the highest quality treatment. With personalized plans, patient education, and flexible payment options, we&apos;re dedicated to supporting your oral health journey every step of the way.</p>
        </div>
        <div className="mt-12 bg-gray-50 lg:p-10 p-6 rounded-md">
          <div className="grid md:grid-cols-2 items-center gap-16 md:min-h-[340px]">
            <div>
              <h3 className="text-gray-800 text-2xl font-bold mb-4">Your Comfort and Safety Are Our Top Priorities.</h3>
              <p className="text-gray-600 text-sm">Choose us for your dental care and experience personalized service from our experienced professionals in a welcoming environment, all while benefiting from the latest technology and a commitment to your overall oral health.</p>
              <ul className="space-y-4 mt-8">
                {features.map((item) => (
                  <li key={item.id} className="flex items-center gap-3 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width={17} className="bg-accent fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                    </svg>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            {/* Video */}
            <Video />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
