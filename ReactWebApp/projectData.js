import React from "react";

import Advizr from "./components/Projects/Advizr";
import Marvel from "./components/Projects/Marvel";
import Ciro from "./components/Projects/Ciro";
import ElementalCognition from "./components/Projects/ElementalCognition";
import Shutterstock from "./components/Projects/Shutterstock";
import Devotify from "./components/Projects/Devotify";

export const projects = [

  {
    id: 'Shutterstock_Invoice_API',
    title: 'Shutterstock Invoice API',
    description: 'Microservice that powers Shutterstock\'s enterprise e-commerce systems.',
    tags: ['Back-End', 'API Design'],
    bgSrc: '/static/images/shutterstock-bg.jpg',
    imgSrc: '/static/images/project-thumbs/logos/shutterstock.png',
    imgStyle: {
      maxWidth: '60%',
      maxHeight: '30%'
    },
    content: <Shutterstock/>,
    years: '2017',
    website: 'https://www.shutterstock.com'
  },

  {
    id: 'Advizr',
    title: 'Advizr',
    description: 'Financial Planning, reinvented.',
    tags: ['Front-End', 'UX', 'API Design', 'Dev-Ops'],
    containerStyle: {
      background: 'rgb(50, 66, 89)'
    },
    imgSrc: '/static/images/project-thumbs/logos/advizr.png',
    award: true,
    content: <Advizr/>,
    years: '2014-2016',
    website: 'https://www.advizr.com/'
  },

  {
    id: 'Marvel.com',
    title: 'Marvel.com',
    description: 'The official website of Marvel Entertainment.',
    tags: ['R&D', 'Front-End', 'Dev-Ops'],
    imgSrc: '/static/images/project-thumbs/logos/marvel-white.png',
    content: <Marvel/>,
    containerStyle: {
      background: '#e62429'
    },
    years: '2013',
    website: 'https://www.marvel.com'
  },

  {
    id: 'Elemental_Cognition',
    title: 'Elemental Cognition',
    description: 'Making an AI robot human-friendly.',
    tags: ['Front-End', 'UX', 'API Design', 'R&D'],
    bgSrc: '/static/images/project-thumbs/ec-bg.png',
    imgSrc: '/static/images/project-thumbs/ec-robot.png',
    imgStyle: {
      maxWidth: 'none',
      maxHeight: 'none',
      height: '70%',
      verticalAlign: 'bottom'
    },
    content: <ElementalCognition/>,
    years: '2018-2019',
    website: 'http://www.elementalcognition.com'
  },

  {
    id: 'Ciro',
    title: 'Ciro',
    description: 'Helping development teams communicate more effectively.',
    tags: ['Full-Stack', 'UX', 'Dev-Ops'],
    containerStyle: {
      background: '#ddd'
    },
    imgSrc: '/static/images/project-thumbs/logos/ciro.png',
    imgStyle: {
      maxHeight:'45%'
    },
    content: <Ciro/>,
    years: '2015-2017',
    website: 'https://ciroapp.com'
  },

  {
    id: 'Devotify',
    title: 'Devotify',
    description: 'Hyper-local loyalty platform for iOS and Android.',
    tags: ['Full-Stack', 'Dev-Ops', 'API Design'],
    containerStyle: {
      background: 'rgb(17, 72, 114)'
    },
    imgSrc: '/static/images/project-thumbs/logos/devotify.png',
    imgStyle: {
      maxHeight: '50%',
      maxWidth: '40%'
    },
    content: <Devotify/>,
    years: '2014-2015',
    website: 'http://www.devotify.com'
  }

];

export const tags = [
  'R&D',
  'Back-End',
  'Front-End',
  'Full-Stack',
  'Dev-Ops',
  'API Design',
  'UX'
];