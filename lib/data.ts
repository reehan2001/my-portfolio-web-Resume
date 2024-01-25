import React from "react";
import CardiomegalyImage from '@/Images/projectimg/1.png';
import Transformer from '@/Images/projectimg/transformers.png';
import usa from '@/Images/projectimg/usa.png';
import {FaReact} from 'react-icons/fa';
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
    {
        name:'Home',
        hash:"#home"
    },
    {
        name:'About',
        hash:"#about"
    },
    {
        name:'Projects',
        hash:"#projects"
    },
    {
        name:'Skills',
        hash:'#skills'
    },
    {
        name:'Experience',
        hash:"#experience"
    },
    {
        name:'Education',
        hash:"#edu"
    },
    {
        name:'Contact',
        hash:'#contact'
    }
] as const;


export const ProjectsData = [
    {
        title: "AI-Driven Cardiomegaly Identification from Lung Scans using TensorFlow:",
        description: "This project focuses on cardiomegaly, the enlargement of the heart, which is a significant medical condition that can be detected through medical imaging. My project aims to automate the identification process and intervention using TensorFlow.",
        tags:["Python","Pandas","Numpy","CNN","Scikit-Learn","Tensorflow"],
        imageUrl: CardiomegalyImage

    },
    {
        title: "PyTorch Custom Transformer for English-to-Spanish Translation:",
        description: "Executed a project with a focus on English-to-Spanish translation. Developed and implemented a custom transformer architecture to facilitate efficient sequence-to-sequence learning",
        tags:["Python","Pandas","Numpy","Data-Hugging Face","PyTorch"],
        imageUrl: Transformer

    },
    {
        title: "USA Crime Analysis Prediction",
        description: "In-depth examination of crime data in the United States. My primary objectives were to predict crime patterns, identify influential factors, and communicate key findings effectively through data visualization using Power BI.",
        tags: ["Excel","PowerBI","Power-Automate"],
        imageUrl: usa

    }

] as const;



export const skillsData = [
    "C++",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
    "Data Visualization",
    "Data Manipulation",
    "Data Modeling",
    "Scikit-Learn",
    "SQL",
    "Power BI",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Express",
  ] as const;


