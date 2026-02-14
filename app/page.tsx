import Cta from '@/components/Homepage/Cta/Cta'
import Exclusive from '@/components/Homepage/Exclusive/Exclusive'
import Featured from '@/components/Homepage/Featured/Featured'
import Footer from '@/components/Homepage/Footer/Footer'
import Hero from '@/components/Homepage/Hero/Hero'
import Services from '@/components/Homepage/Services/Services'
import StoryTelling from '@/components/Homepage/StoryTelling/StoryTelling'
import Testimonials from '@/components/Homepage/Testimonials/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      < Hero />
      <Services />
      <Featured/>
      <StoryTelling/>
      <Exclusive/>
      <Testimonials />
      <Cta/>
      <Footer />
    </div>
  )
}

export default page
