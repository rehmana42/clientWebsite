import { Button, Textarea, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import gsap from "gsap";
import { toast } from "react-toastify";


const ContactUs = () => {
  const formRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [loading,setLoading]=useState(false)
  const formData=new FormData()

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(formRef.current, {
      opacity: 0,
      x: -40,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: 40,
      duration: 1.2,
      delay: 0.4,
      ease: "power3.out",
    });
  }, []);
  const onsubmitHandler=async()=>{
    try{
        formData.append("name",name)
        formData.append("email",email)
        formData.append("message",message)
        formData.append("access_key", import.meta.env.VITE_API_KEY);
            setLoading(true)
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
        const data=await response.json()
        console.log(data.success)
        setLoading(false)
        if(data.success){
            console.log("yes")
            toast.success("Message send Successfully")
          
        }
    
    }
    catch(e){
        console.log(e.message)
    }
    finally{
        setLoading(false)
    }
  }

  return (
    <div className="w-full h-[90vh] sm:h-[80vh] bg-black flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-12 px-6 sm:py-10 overflow-y-hidden">

      {/* Heading */}
     

      {/* Form */}
      <div ref={formRef} className="flex flex-col gap-6 max-w-md w-full mt-10">

        {/* Name Input */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Your Name</label>
          <TextInput
            type="text"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            placeholder="Enter your name"
            className="focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-lg"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Email Address</label>
          <TextInput
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            placeholder="Enter your email"
            className="focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-lg"
          />
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <Textarea
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
            id="comment"
            placeholder="Write your message..."
            rows={4}
            required
            className="focus:ring-2 focus:ring-blue-500 border-gray-300 rounded-lg"
          />
        </div>

        {/* Button */}
        <Button onClick={()=>{onsubmitHandler()}} className="relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-bold transition-all duration-300 shadow-md hover:shadow-xl shine-btn">
          {loading?"loading.....":"contact"}
        </Button>
      </div>

      {/* Image */}
      <img
        ref={imageRef}
        src={assets.contact}
        className="w-[60vw] sm:w-[40vw] max-w-[400px] object-contain"
        alt="contact"
      />
    </div>
  );
};

export default ContactUs;
