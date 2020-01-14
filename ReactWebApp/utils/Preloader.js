import imagesLoaded from 'images-loaded';
import {projects} from '../projectData';

export function loadFont(fontFamily, fontWeight, string) {

  let p = document.createElement('p');

  p.innerHTML = string || 'test';
  p.style.fontFamily = fontFamily;
  p.style.fontWeight = fontWeight;
  p.style.fontSize = '200px';
  p.style.color = 'transparent';
  p.style.margin = '0';
  p.style.position = 'absolute';
  p.style.top = '-1000px';
  p.style.left = '0';
  p.style.zIndex = '2000';

  document.body.appendChild(p);
  setTimeout(() => {p.remove()}, 200);

}

export function loadFonts(fonts, onLoad) {

  fonts.map(font => loadFont(font[0], font[1], `${font[2]}`));

  if (document.fonts && document.fonts.ready) {

    //Browsers that support CSS Font Loading Module Level 3
    document.fonts.ready.then(onLoad);

  } else {

    //Fallback, wait 50ms
    setTimeout(onLoad, 50);

  }

}

export function loadImage(imgSrc, onLoad) {

  let img = document.createElement('img');

  img.src = imgSrc;

  imagesLoaded(img).then(onLoad);

}

export function loadImages(images, onProgress, onComplete) {

  let numObjects = images.length;
  let numLoaded = 0;

  images.map(src => {

    loadImage(src, () => {

      numLoaded++;

      if (numLoaded >= numObjects) {

        onComplete();

      } else {

        onProgress(numLoaded, numObjects);

      }

    });

  });

}

export default function loadAssets(assetMap) {

}

function getImagesFromProjectData() {

  let images = [];

  projects.map(project => {

    if (project.preload && project.preload.length) {

      images = images.concat(project.preload);

    }

  });

  return images;

}


export function Preloader(props) {

  //load fonts
  loadFonts([['\'Font Awesome 5 Free\'', '900', '&#xf4fb;']]);

  //load images
  let images = getImagesFromProjectData();

  loadImages(images, props.onProgress, props.onDone);

  //init progress
  props.onProgress(0, images.length);

}
