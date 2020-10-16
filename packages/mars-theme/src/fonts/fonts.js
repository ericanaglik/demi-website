import { Global } from 'frontity';

import elgocregular from './elgoc-regular-webfont.woff';
import elgocregular2 from './elgoc-regular-webfont.woff2';

Global`
    @font-face {
        font-family: 'elgocregular';
        src: local('elgocregular'), local('elgocregular'),
        url(${elgocregular}) format('woff2'),
        url(${elgocregular2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;