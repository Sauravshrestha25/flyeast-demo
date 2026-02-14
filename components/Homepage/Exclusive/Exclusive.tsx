import React from 'react'
import { ProductRevealCard } from './product-reveal-card'
import Image from 'next/image'

const Exclusive = () => {
  return (
    <section className='min-h-screen w-full bg-slate-950'>
      <div>
<h3 className='text-white text-6xl font-primary font-medium text-center pt-20'>Pouplar <span className='text-brand'>Treks</span> in Nepal </h3>
<p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed text-center">
            From the legendary trails of Everest to the mystical landscapes of Mustang, 
            discover the world’s most iconic trekking routes through the heart of the Himalayas.
          </p>
      <div className="w-[90%] mx-auto py-20">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {/* Regular cards */}
    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
      <div key={i} className="col-span-1 w-full h-full">
        <ProductRevealCard />
      </div>
    ))}

    {/* View All Treks card */}
    <div className="col-span-1 w-full h-full">
      <div
        className="
          w-80 h-96 rounded-2xl 

          flex flex-col items-center justify-center 
          text-white text-xl font-primary font-semibold
          cursor-pointer
          shadow-lg shadow-black/20
          hover:scale-105 hover:shadow-2xl hover:shadow-brand/50
          transition-all duration-300
          relative overflow-hidden
        "
      >
        <Image src="/images/trek1.png" fill alt="" className='z-0'></Image>
        {/* Optional glow animation */}
        <div className="absolute inset-0 w-full h-full bg-black/40  z-10  rounded-2xl "/>

        {/* Content */}
        <span className="relative z-20 flex items-center gap-2">
          View All Treks
          <span className="text-2xl animate-bounce">→</span>
        </span>
      </div>
    </div>
  </div>
</div>

      </div>
      <div>
<h3 className='text-white text-6xl font-primary font-medium text-center pt-20'> <span className='text-brand'>Peak Climbing</span> & Adventures</h3>
<p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed text-center">
            Take your journey higher. Our peak climbing expeditions offer a gateway 
            to the sky, blending technical challenge with the ultimate alpine reward.
          </p>
      <div className='w-[90%] mx-auto py-20'>
 <div className='grid grid-cols-1 md:grid-cols-4  gap-4' >
      {[1,2,3].map((i) => (
        
          <div key={i} className='col-span-1'>
           <ProductRevealCard/>
          </div>
         
      ))}
       <div className="col-span-1 w-full h-full">
      <div
        className="
          w-80 h-96 rounded-2xl 
          flex flex-col items-center justify-center 
          text-white text-xl font-primary font-semibold
          cursor-pointer
          shadow-lg shadow-black/20
          hover:scale-105 hover:shadow-2xl hover:shadow-brand/50
          transition-all duration-300
          relative overflow-hidden
        "
      >
        <Image src="/images/helitrek.png" fill alt="" className='z-0'></Image>
        {/* Optional glow animation */}
        <div className="absolute inset-0 w-full h-full bg-black/40  z-10  rounded-2xl "/>

        {/* Content */}
        <span className="relative z-20 flex items-center gap-2">
          View All Treks
          <span className="text-2xl animate-bounce">→</span>
        </span>
      </div>
    </div>
      </div>
   

      </div>
      </div>
      
     
    </section>
  )
}

export default Exclusive
