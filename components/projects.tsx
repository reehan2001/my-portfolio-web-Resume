'use client'

import React , {useEffect} from 'react';
import SectionHeader from './section-header'
import { ProjectsData } from '@/lib/data';
import Project from '@/components/projectFun'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Projects() {
  const {ref,inView} = useInView()
  const {setActiveSection,timeOfLastClick} = useActiveSectionContext()

  useEffect(() =>{
    if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection('Projects')
    }
  },[inView,setActiveSection,timeOfLastClick])
  return (
    <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
        <SectionHeader>Pet - Projects</SectionHeader>
        <div>
            {ProjectsData.map((project,index) =>(
            <React.Fragment key={index}>
                <Project {...project}/>
            </React.Fragment>
            ))}
        </div>
    </section>
  )
}

