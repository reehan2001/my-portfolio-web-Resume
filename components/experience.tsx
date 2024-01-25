'use client'

import React,{useEffect} from 'react';
import SectionHeader from './section-header';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Experience() {
    const {ref,inView} = useInView()
  const {setActiveSection,timeOfLastClick} = useActiveSectionContext()

  useEffect(() =>{
    if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection('Experience')
    }
  },[inView,setActiveSection,timeOfLastClick])
  return (
    <motion.section ref={ref} className="mb-10 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28" 
    initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience"
      >
      <SectionHeader>My Experience</SectionHeader>
      <ol className='relative border-s border-gray-200 dark:border-gray-700'>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-8 text-sm font-normal leading-none text-black-400 dark:text-black-500">February 2023 – May 2023</time>
        <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-black capitalize">Intern - Software Developer</h3>
        <p className="text-xl italic font-medium text-black dark:text-black-400"> Pars Engineering Works</p>
        <div className="mt-1 leading-relaxed text-gray-700">• Collaborated closely with the Accounts Department to comprehend the invoicing process and identified areas for improvement.</div>
        <div className="mt-1 leading-relaxed text-gray-700">• Developed a comprehensive full-stack website aimed at optimizing invoice generation and download procedures.</div>
        <div className="mt-1 leading-relaxed text-gray-700">• Streamlined the invoicing process, resulting in significant enhancements to departmental productivity.</div>

       </li>
        <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-8 text-sm font-normal leading-none text-black-400 dark:text-black-500">February 2023 – May 2023</time>
        <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-black capitalize">Intern - IMS Analyst</h3>
        <p className="text-xl italic font-medium text-black dark:text-black-400"> Virtusa Consulting Services Private Limited</p>
        <p className="mt-1 leading-relaxed text-gray-700">• Learned and worked in the IMS/AMS domain, gained experience in the AWS cloud, and got to work with the Power BI and Power Automate tools and related projects.</p>
       </li>
       <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-8 text-sm font-normal leading-none text-black-400 dark:text-black-500"> May 2020 – March 2021</time>
        <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-black capitalize">Intern - Backend-Developer</h3>
        <p className="text-1xl italic font-medium text-black-500 dark:text-black-400"> SPEAKVERSITY</p>
        <div className="mt-1 leading-relaxed text-gray-700">• Collaborated with a dynamic team to design and develop a website using JavaScript, Node.js, and Express.</div>
        <div className="mt-1 leading-relaxed text-gray-700"> • Spearheaded the redesign and development of an existing website, enhancing its functionality and user experience</div>
        </li>
      </ol>
    </motion.section>
  );
}

    