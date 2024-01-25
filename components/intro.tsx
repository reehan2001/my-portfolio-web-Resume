'use client';

import React,{useEffect} from 'react';
import Image from 'next/image';
import ProfilePhoto from '@/Images/dp.jpg';
import {motion} from 'framer-motion'
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import {useInView} from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from "@/lib/hooks";



export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{opacity: 0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
              type:'tween',
              duration: 0.4
            }}>
          <Image src={ProfilePhoto} alt="profile" width="192" height="192" quality="95" priority={true}
          className='h-25 w-25 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
          </motion.div>
          <motion.span className=' absolute bottom-4 right-0 text-4xl'
          initial={{opacity: 0,scale:0}}
          animate={{opacity:1,scale:1}}
          transition={{
            type:'spring',
            stiffness: 125,
            delay:0.1,
            duration:0.7
          }}>
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
      initial={{opacity:0, y:100}}
      animate={{opacity:1,y:0}}>
        <span className='font-bold italic'>Hello, I'm Reehan Roshan:</span> Innovator,
        <span className='font-bold italic underline'>Web Developer and Machine Learning </span> Enthusiast. I thrive on training deep neural networks with vast datasets. 🚀🧠🤖
      </motion.h1>
      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
      initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}
      transition={
        {
          delay:0.1,
        }
      }>
        <Link className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 translate cursor-pointer'href='#contact'
         onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}> Contact me here <BsArrowRight /></Link>
        <a className='group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 translate cursor-pointer border border-black/10'href='/ReehanRoshanResume.pdf' download> Download CV{" "} <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /></a>
        <a className='bg-white  p-4 text-gray-950 flex items-center gap-2 rounded-full text-[1.35rem] hover:scale-110 hover:bg-white active:scale-105 translate cursor-pointer border border-black/10'>
          <BsLinkedin className='opacity-70 group-hover:translate-x-1 transition'  />
        </a>
        <a className='bg-white  p-4 text-gray-950 flex items-center gap-2 rounded-full text-[1.35rem] hover:scale-110 hover:bg-white active:scale-105 translate cursor-pointer border border-black/10' href='https://github.com/reehan2001'>
          <FaGithubSquare className='opacity-60 group-hover:translate-x-1 transition' />
        </a>
        <a className='bg-white  p-4 text-gray-950 flex items-center gap-2 rounded-full text-[1.35rem] hover:scale-110 hover:bg-white active:scale-105 translate cursor-pointer border border-black/10' href="tel:8778954039">
          <IoLogoWhatsapp />
        </a>
      </motion.div>
    </section>
  );
}


