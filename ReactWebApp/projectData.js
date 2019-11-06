import React from "react";

import Advizr from "./components/Projects/Advizr";
import Marvel from "./components/Projects/Marvel";
import Ciro from "./components/Projects/Ciro";
import ElementalCognition from "./components/Projects/ElementalCognition";
import Shutterstock from "./components/Projects/Shutterstock";
import Devotify from "./components/Projects/Devotify";

export function getProjectIndexById(id) {

  for (let i = 0; i < projects.length; i++) {

    if (projects[i].id === id) {

      return i;

    }

  }

}

export const projects = [

  {
    id: 'Advizr',
    title: 'Advizr',
    containerStyle: {
      background: 'url(/static/images/project-thumbs/advizr-screenshot.png) no-repeat top center',
      backgroundSize: 'cover'
    },
    award: true,
    content: <Advizr/>,
    years: '2014-2016',
    website: 'https://www.advizr.com/',
    industry: 'Fintech'
  },

  {
    id: 'Shutterstock_Invoice_API',
    title: 'Shutterstock Invoice API',
    bgSrc: '/static/images/project-thumbs/shutterstock-bg.jpg',
    imgSrc: '/static/images/project-thumbs/logos/shutterstock.png',
    imgStyle: {
      maxWidth: '60%',
      maxHeight: '30%'
    },
    content: <Shutterstock/>,
    years: '2017',
    website: 'https://www.shutterstock.com',
    industry: 'E-Commerce'
  },

  {
    id: 'Marvel.com',
    title: 'Marvel.com',
    imgSrc: '/static/images/project-thumbs/logos/marvel-white.png',
    bgSrc: '/static/images/project-thumbs/marvel-bg.jpg',
    content: <Marvel/>,
    years: '2013',
    website: 'https://www.marvel.com',
    industry: 'Entertainment'
  },

  {
    id: 'Elemental_Cognition',
    title: 'Elemental Cognition',
    containerStyle: {
      background: 'linear-gradient(90deg, #6c34a6, #407477)'
    },
    imgSrc: '/static/images/project-thumbs/ec-robot.png',
    imgStyle: {
      maxWidth: 'none',
      maxHeight: 'none',
      height: '70%',
      verticalAlign: 'bottom'
    },
    content: <ElementalCognition/>,
    years: '2018-2019',
    website: 'http://www.elementalcognition.com',
    industry: 'Artificial Intelligence, R&D'
  },

  {
    id: 'Ciro',
    title: 'Ciro',
    containerStyle: {
      background: 'url(/static/images/project-thumbs/ciro-lockup.jpg) no-repeat top center',
      backgroundSize: 'cover'
    },
    content: <Ciro/>,
    years: '2015-2017',
    website: 'https://ciroapp.com',
    industry: 'Project Management, Collaboration'
  },

  {
    id: 'Devotify',
    title: 'Devotify',
    containerStyle: {
      background: 'url(/static/images/project-thumbs/devotify-phone.jpg) no-repeat top center',
      backgroundSize: 'cover'
    },
    content: <Devotify/>,
    years: '2013-2014',
    website: 'http://www.devotify.com',
    industry: 'Loyalty, E-Commerce'
  }

];