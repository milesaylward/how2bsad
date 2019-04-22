import familyPhoto from './../assets/imgs/family-photo.png';
import lovePhoto from './../assets/imgs/rose.png';
import cannes from './../assets/imgs/cannes-lion.png';

import one from './../assets/imgs/one.png'
import two from './../assets/imgs/two.png'
import three from './../assets/imgs/three.png'
import four from './../assets/imgs/four.png'


export const THRESHHOLDS = {
  landingThresh: 1000,
  default: 500,
};

export const SECTIONS = {
  landing: 'landing',
  title: 'title',
  about: 'about',
  chapters: 'chapters'
};

export const CHAPTER_CONFIG = [
  {
    photo: familyPhoto,
    name: 'family',
    number: one,
  },
  {
    photo: lovePhoto,
    name: 'love',
    number: two,
  },
  {
    photo: cannes,
    name: 'work',
    number: three,
  },
  {
    photo: null,
    name: 'now',
    number: four,
  }
];