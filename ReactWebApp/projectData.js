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
    imgContainerStyle: {
      background: 'linear-gradient(90deg, #ff8100, #ff636f)'
    },
    imgSrc: '/static/images/logos/advizr-icon.png',
    imgStyle: {
      maxWidth: 'none',
      maxHeight: 'none',
      height: '59%'
    },
    award: true,
    content: <Advizr/>
  },

  {
    id: 'Elemental_Cognition',
    title: 'Elemental Cognition',
    description: 'Public-facing and internal applications for a leading Artificial Intelligence research company.',
    tags: ['Front-End', 'UX', 'API Design'],
    imgContainerStyle: {
      background: 'url(/static/images/ec-bg.png) center center no-repeat',
      backgroundSize: 'cover'
    },
    imgSrc: '/static/images/logos/ec.png',
    imgStyle: {
      maxWidth: 'none',
      maxHeight: 'none',
      height: '70%',
      transform: 'translateX(-50%)',
      WebkitTransform: 'translateX(-50%)',
      margin: '0 auto',
      display: 'block',
      left: '50%',
      bottom: '0',
      top: 'auto'
    },
    content: <ElementalCognition/>
  },

  {
    id: 'Shutterstock_Invoice_API',
    title: 'Shutterstock Invoice API',
    description: 'Microservice that powers Shutterstock\'s enterprise e-commerce systems.',
    tags: ['Back-End', 'API Design'],
    imgContainerStyle: {
      background: 'url(/static/images/shutterstock-bg.jpg) center center no-repeat',
      backgroundSize: 'cover'
    },
    imgSrc: '/static/images/logos/shutterstock.png',
    imgStyle: {
      maxWidth: '75%'
    },
    content: <Shutterstock/>
  },

  {
    id: 'Marvel.com',
    title: 'Marvel.com',
    description: 'The official website of Marvel Entertainment.',
    tags: ['R&D', 'Front-End', 'Process Design'],
    imgContainerStyle: {
      background: 'url(/static/images/marvel-bg.jpg) center center no-repeat',
      backgroundSize: 'cover'
    },
    imgSrc: '/static/images/logos/marvel-white.png',
    content: <Marvel/>
  },

  {
    id: 'Ciro',
    title: 'Ciro',
    description: 'Helping development teams communicate more effectively.',
    tags: ['Full-Stack', 'UX', 'Founder'],
    imgContainerStyle: {
      background: 'linear-gradient(to bottom right, #dcd9d9, #d8d8d8)'
    },
    imgSrc: '/static/images/logos/ciro.png',
    imgStyle: {
      maxHeight:'70px'
    },
    content: <Ciro/>
  },

  {
    id: 'Devotify',
    title: 'Devotify',
    description: 'Hyper-local loyalty platform for iOS and Android.',
    tags: ['Front-End', 'UX'],
    imgContainerStyle: {
      background: '#3e9391'
    },
    imgSrc: '/static/images/logos/devotify.png',
    imgStyle: {
      maxHeight: '57%',
      maxWidth: '40%'
    },
    content: <Devotify/>
  }

];

export default projects;