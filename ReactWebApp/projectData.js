import React from "react";

import Advizr from "./components/Projects/Advizr";
import Marvel from "./components/Projects/Marvel";
import Ciro from "./components/Projects/Ciro";
import ElementalCognition from "./components/Projects/ElementalCognition";
import Shutterstock from "./components/Projects/Shutterstock";
import Devotify from "./components/Projects/Devotify";

const projects = [

  {
    id: 'Advizr',
    title: 'Advizr',
    description: 'Financial Planning, reinvented.',
    tags: ['Front-End', 'UX', 'API Design'],
    containerStyle: {
      background: 'linear-gradient(90deg, #ff8100, #ff636f)'
    },
    imgSrc: '/static/images/project-thumbs/logos/advizr-icon.png',
    imgStyle: {
      maxWidth: 'none',
      maxHeight: 'none',
      height: '59%'
    },
    award: true,
    content: <Advizr/>,
    years: '2014-2016',
    website: 'https://www.advizr.com/'
  },

  {
    id: 'Elemental_Cognition',
    title: 'Elemental Cognition',
    description: 'Public-facing and internal applications for a leading Artificial Intelligence research company.',
    tags: ['Front-End', 'UX', 'API Design'],
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
    id: 'Shutterstock_Invoice_API',
    title: 'Shutterstock Invoice API',
    description: 'Microservice that powers Shutterstock\'s enterprise e-commerce systems.',
    tags: ['Back-End', 'API Design'],
    bgSrc: '/static/images/project-thumbs/shutterstock-bg.jpg',
    imgSrc: '/static/images/project-thumbs/logos/shutterstock.png',
    imgStyle: {
      maxWidth: '75%',
      maxHeight: '20%'
    },
    content: <Shutterstock/>,
    years: '2017',
    website: 'https://www.shutterstock.com'
  },

  {
    id: 'Marvel.com',
    title: 'Marvel.com',
    description: 'The official website of Marvel Entertainment, and one of the first responsive websites.',
    tags: ['R&D', 'Front-End', 'Process Design'],
    bgSrc: '/static/images/project-thumbs/marvel-bg.jpg',
    imgSrc: '/static/images/project-thumbs/logos/marvel-white.png',
    content: <Marvel/>,
    years: '2013',
    website: 'https://www.marvel.com'
  },

  {
    id: 'Ciro',
    title: 'Ciro',
    description: 'Helping development teams communicate more effectively.',
    tags: ['Full-Stack', 'UX', 'Founder'],
    containerStyle: {
      background: '#393546'
    },
    imgSrc: '/static/images/project-thumbs/logos/ciro.png',
    imgStyle: {
      maxHeight:'70px'
    },
    content: <Ciro/>,
    years: '2015-2017',
    website: 'https://ciroapp.com'
  },

  {
    id: 'Devotify',
    title: 'Devotify',
    description: 'Hyper-local loyalty platform for iOS and Android.',
    tags: ['Front-End', 'UX'],
    containerStyle: {
      background: '#3e9391'
    },
    imgSrc: '/static/images/project-thumbs/logos/devotify.png',
    imgStyle: {
      maxHeight: '57%',
      maxWidth: '40%'
    },
    content: <Devotify/>,
    years: '2014-2015',
    website: 'http://www.devotify.com'
  }

];

export default projects;