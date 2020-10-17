import { Global } from 'frontity';

import elgocregular from './elgoc-regular-webfont.woff';
import elgocregular2 from './elgoc-regular-webfont.woff2';
import elgoclight from './elgoc-light-webfont.woff';
import elgoclight2 from './elgoc-light-webfont.woff2';
import elgocthin from './elgoc-thin-webfont.woff';
import elgocthin2 from './elgoc-thin-webfont.woff2';

Global`
    @font-face {
        font-family: 'elgocregular';
        src: local('elgocregular'), local('elgocregular'),
        url(${elgocregular2}) format('woff2'),
        url(${elgocregular}) format('woff');
        font-weight: 300;
        font-style: normal;
    },
    @font-face {
      font-family: 'elgoclight';
      src: local('elgoclight'), local('elgoclight'),
      url(${elgoclight2}) format('woff2'),
      url(${elgoclight}) format('woff');
      font-weight: 300;
      font-style: normal;
  },
  @font-face {
    font-family: 'elgocthin';
    src: local('elgocthin'), local('elgocthin'),
    url(${elgocthin2}) format('woff2'),
    url(${elgocthin}) format('woff');
    font-weight: 300;
    font-style: normal;
}

`;