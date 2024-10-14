import { blog } from '@/test-apis/blog'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <section id="/blog" className="bg-white mt-16 mb-10">
        <div className="max-w-6xl mx-auto p-4">
            <div className="text-center">
            <h2 className="h2 text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-accent after:rounded-lg-full">Tips for a Healthy Smile</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                {
                    blog.map((item)=>(
                        <div key={item.id} className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                        <Image 
                        src={item.imgSrc}
                        alt={item.title}
                        className="w-full h-96 object-cover" 
                        width={500}
                        height={500}
                        />
                        <div className="p-6 absolute bottom-0 left-0 right-0 bg-accent/90 opacity-90">
                        <span className="text-sm block text-white mb-2">{item.date} | BY {item.doctor}</span>
                        <h3 className="text-xl font-bold text-white">Igniting Your Imagination</h3>
                        <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                            <p className="text-white text-sm">{item.description}</p>
                        </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Blog
