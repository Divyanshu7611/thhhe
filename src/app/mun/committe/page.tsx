import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Faqs from '../components/Faqs'

export default function Page() {
  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Slider />
      {/* <Team /> */}
      <Contact />
      <Faqs />
    </div>
  )
}
