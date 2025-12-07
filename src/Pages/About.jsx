import React from 'react'
import { assets } from '../assets/assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const About = () => {
    useGSAP(()=>{
        const tl=gsap.timeline({
          delay:1
        })
    
        // heading
        tl.from('#heading',{
            opacity:0,
            x:-100,
            z:-30,
            duration:1,
            ease:'bounce.out'
        })
        .fromTo("#alldes", 
            { clipPath: "circle(0% at 50% 50%)" },
            { clipPath: "circle(70% at 50% 50%)", duration: 1.5, ease: "power2.out" }
          );
          

        
    })
  return (
    <div className="w-full py-16 px-6 bg-black text-white" id="about">

      {/* Heading */}
      <div className="w-full flex items-center justify-center mb-10">
        <h2 id='heading' className="text-3xl sm:text-5xl font-montserrat font-bold">
          About Us
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 max-w-7xl mx-auto">

        {/* Description */}
        <div id='alldes' className="w-full lg:w-1/2 font-inter leading-relaxed text-base sm:text-lg">
          <p className="font-raleway font-medium">
            At <span id='des' className="font-bold">M.K. Engineering Works</span>, we don’t just manufacture components —
            <span id='des' className="text-blue-400"> we engineer reliability.</span>  
            <br /><br />
            With years of experience in precision metal fabrication, we specialize in creating
            <span id='des' className="font-semibold"> high-performance industrial fasteners, heavy-duty nuts, bolts,</span>
            and custom-machined parts that keep industries running smoothly.
            <br /><br />
            Every product we deliver is crafted using
            <span id='des' className="font-semibold"> advanced machinery, strict quality control,</span> and global engineering standards.
            From a single heavy hex nut to fully customized metal solutions, we ensure
            <span id='des' className="text-blue-400"> strength, durability, and perfect precision</span> in every piece.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full sm:w-[80%] md:w-[70%] lg:w-full rounded-xl overflow-hidden shadow-xl shadow-blue-900/20">
            <video
              controls
              src={assets.AboutVideo}
              className="w-full h-auto rounded-xl"
              
            ></video>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
