import familyPhoto from './../assets/imgs/family-photo.png';
import lovePhoto from './../assets/imgs/rose.png';
import cannes from './../assets/imgs/cannes-lion.png';
import question from './../assets/imgs/question.png';

import one from './../assets/imgs/one.png'
import two from './../assets/imgs/two.png'
import three from './../assets/imgs/three.png'
import four from './../assets/imgs/four.png'

import familyArrow from '@/assets/svg/family-arrow.svg';
import faceHover from '@/assets/svg/face-hover.svg';
import loveX from '@/assets/svg/love-x.svg';
import workArrow from '@/assets/svg/work-arrow.svg';
import exclaim from '@/assets/svg/exclaim.svg';
import circle from '@/assets/svg/circle.svg';
import questionSvg from '@/assets/svg/question.svg';
import familySvg from './../assets/svg/family.svg';
import loveSvg from './../assets/svg/love.svg';
import workSvg from './../assets/svg/work.svg';
import nowSvg from './../assets/svg/now.svg';


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
    svg: {
      drawn: familyArrow,
      hover: faceHover,
      title: familySvg
    }
  },
  {
    photo: lovePhoto,
    name: 'love',
    number: two,
    svg: {
      drawn: null,
      hover: loveX,
      title: loveSvg
    }
  },
  {
    photo: cannes,
    name: 'work',
    number: three,
    svg: {
      drawn: workArrow,
      hover: exclaim,
      title: workSvg
    }
  },
  {
    photo: question,
    name: 'now',
    number: four,
    svg: {
      drawn: circle,
      hover: questionSvg,
      title: nowSvg
    }
  }
];