import imagesLoaded from "images-loaded";

function loadFont(fontFamily, fontWeight) {

  let p = document.createElement('p');

  p.innerText = 'test';
  p.style.fontFamily = fontFamily;
  p.style.fontWeight = fontWeight;
  p.style.fontSize = '20px';
  p.style.color = 'transparent';
  p.style.zIndex = '1000';
  p.style.margin = '0';
  p.style.position = 'absolute';
  p.style.top = '-1000px';

  document.body.appendChild(p);
  setTimeout(() => {p.remove()}, 200);

}

export function Preloader(props) {

  //load fonts
  let fonts = [
    ['Roboto', 300],
    ['Roboto', 700]
  ];

  fonts.map(font => loadFont(font[0], font[1]));

  let images = [
    '/static/images/profile2.jpg',
    '/static/images/project-thumbs/advizr-screenshot.png',
    '/static/images/project-thumbs/shutterstock-bg.jpg',
    '/static/images/project-thumbs/logos/shutterstock.png',
    '/static/images/project-thumbs/logos/marvel-white.png',
    '/static/images/project-thumbs/marvel-bg.jpg',
    '/static/images/project-thumbs/ec-robot.png',
    '/static/images/project-thumbs/logos/ciro.png',
    '/static/images/project-thumbs/logos/devotify.png'
  ];

  let numObjects = images.length;
  let numLoaded = 0;

  images.map(src => {

    let img = document.createElement('img');

    img.src = src;

    imagesLoaded(img).then(() => {

      numLoaded++;

      if (numLoaded >= numObjects) {

        props.onDone.apply();

      } else {

        props.onProgress.apply(undefined, [numLoaded, numObjects]);

      }

    })

  });

  //init progress
  props.onProgress.apply(undefined, [numLoaded, numObjects]);

}