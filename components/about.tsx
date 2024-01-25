'use client'

import React, { useEffect } from 'react';
import SectionHeader from './section-header';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      >
        <SectionHeader>About me</SectionHeader>
        <p className='mb-6'>
        Having graduated with a degree in{""}
        <span className='font-medium'> Electronics and Communication Engineering</span>,
        my journey led me to follow my passion for programming. <span className='font-medium'>In my second year, </span> 
        I delved into<span className="italic font-medium"> Machine Learning Concepts and Full-Stack Web Development. </span>
        What truly captivates me is the process of comprehending a problem,<span className="italic font-medium"> analyzing data, and predicting outcomes </span>
        through trained models, seamlessly implementing solutions on websites. My core expertise lies in<span className="italic font-medium"> Deep Learning, Natural Language processing, and Machine Learning</span>
        </p>
        <p>
        I am proficient in<span className='font-medium'> React and Next.js</span>, with familiarity in<span className='font-medium'> TensorFlow and PyTorch.</span> Eager to embrace new technologies, I am currently seeking a full-time position as a<span className="italic font-medium"> Data Scientist</span>, driven by the satisfaction of unraveling complex problems and crafting innovative solutions.

        </p>
    </motion.section>
  )
}
