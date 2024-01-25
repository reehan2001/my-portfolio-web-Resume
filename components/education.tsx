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
      setActiveSection('Education')
    }
  },[inView,setActiveSection,timeOfLastClick])
  return (
    <motion.section ref={ref} className="mb-10 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28" 
    initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="edu"
      >
      <SectionHeader>Education</SectionHeader>
      <ol className='relative border-s border-gray-200 dark:border-gray-700'>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-8 text-sm font-normal leading-none text-black-400 dark:text-black-500">2019 - 2023</time>
        <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-black capitalize">Bachelor of Engineering in Electronics & Communication Engineering</h3>
        <p className="text-xl italic font-medium text-black dark:text-black-400">Chennai Institute of Technology – CGPA: 8.9</p>
       </li>
        <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-8 text-sm font-normal leading-none text-black-400 dark:text-black-500">2018 - 2019</time>
        <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-black capitalize">12th Grade - Computer Science Group</h3>
        <p className="text-xl italic font-medium text-black dark:text-black-400">Velammal.Matric.HR.Sec.School – Percentage: 76.5%</p>
       </li>
       <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-8 text-sm font-normal leading-none text-black-400 dark:text-black-500">2015 - 2016</time>
        <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-black capitalize">10th Grade</h3>
        <p className="text-xl italic font-medium text-black dark:text-black-400">Velammal.Matric.HR.Sec.School – Percentage: 88.8%</p>
        </li>
      </ol>
    </motion.section>
  );
}

