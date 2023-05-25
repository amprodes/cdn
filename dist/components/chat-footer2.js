import { proxyCustomElement, HTMLElement, h, getAssetPath } from '@stencil/core/internal/client';
import { s as state } from './store.js';
import { S as Sender } from './sender.js';
import { d as defineCustomElement$2 } from './dav-chip-item2.js';
import { d as defineCustomElement$1 } from './dav-chip-list2.js';

const chatFooterCss = "@charset \"UTF-8\";@font-face{font-family:\"fontello\";src:url(\"../../assets/fonts/fontello/fontello.eot?0000\");src:url(\"../../assets/fonts/fontello/fontello.eot?0000#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/fontello/fontello.woff2?0000\") format(\"woff2\"), url(\"../../assets/fonts/fontello/fontello.woff?0000\") format(\"woff\"), url(\"../../assets/fonts/fontello/fontello.ttf?0000\") format(\"truetype\"), url(\"../../assets/fonts/fontello/fontello.svg?0000#fontello\") format(\"svg\");font-weight:normal;font-style:normal}@font-face{font-family:\"Roboto Condensed\";font-style:normal;font-weight:300;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:italic;font-weight:300;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:normal;font-weight:400;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:italic;font-weight:400;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:normal;font-weight:700;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:italic;font-weight:700;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.svg#Roboto\") format(\"svg\");}body{margin:0}body{margin:0}.dav-titleContainer__title,.dav-titleContainer--desktop h3,.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1,.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1{display:inline-block;width:100%;margin:0;font-size:16px;font-weight:var(--fw-bold);color:var(--titles-color)}.dav-paragraph,.dav-link,.dav-titleContainer__subtitle,.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1,.dav-titleContainer__title,.dav-titleContainer--desktop h3,.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1{font-family:\"Roboto\", sans-serif;font-size:var(--font-medium);line-height:130%;font-weight:var(--fw-regular);text-align:left;font-style:normal;color:var(--text-color)}.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1{display:inline-block;width:100%;margin:0;font-size:16px;font-weight:var(--fw-bold);color:var(--titles-color)}.dav-titleContainer__title,.dav-titleContainer--desktop h3,.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1,.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1{margin-top:16px}.dav-titleContainer__title:first-of-type,.dav-titleContainer--desktop h3:first-of-type,.dav-titleContainer--desktop h2:first-of-type,.dav-titleContainer--desktop h1:first-of-type,.dav-titleContainer__title--h5:first-of-type,.dav-titleContainer__title--h4:first-of-type,.dav-titleContainer__title--h3:first-of-type,.dav-titleContainer__title--h2:first-of-type,.dav-titleContainer__title--h1:first-of-type{margin-top:0px}.dav-titleContainer__title--h1{font-size:34px}.dav-titleContainer__title--h2{font-size:22px}.dav-titleContainer__title--h3{font-size:18px}.dav-titleContainer__title--h4{font-size:14px}.dav-titleContainer__title--h5{font-size:14px}.dav-titleContainer__subtitle{margin-top:16px;font-weight:var(--fw-medium)}.dav-titleContainer--desktop{display:none;width:100%;margin-top:32px;padding:0 16px}.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1{margin-bottom:0px;font-size:24px;color:var(--titles-color)}.dav-titleContainer--desktop h3{margin-bottom:8px;font-size:20px;color:var(--text-enable);font-weight:var(--fw-medium)}.dav-link{text-decoration:underline}.dav-link:visited{text-decoration:underline}.dav-link:focus{text-decoration:underline}.dav-paragraph{color:var(--gray-6765)}.dav-divider{height:1px;width:100%;background-color:var(--gray-ca);margin:0 auto}body{margin:0}.dav-container{display:block;width:100%;height:100%;max-width:536px;margin:0 auto;padding:0;position:relative;background-color:#ebecf0}*{margin:0;padding:0;border:0;box-sizing:border-box;vertical-align:baseline;outline:none;border:0;border-width:0;font-family:\"Roboto\", sans-serif;vertical-align:baseline;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}::selection{background:#d7d7d7}img,picture,video,iframe,figure{max-width:100%;display:block;object-position:center center}a{display:inline-block;text-decoration:none;color:inherit;font-size:inherit}a:hover,a:focus{text-decoration:none}li{list-style-type:none}ol,ul{list-style:none}html{scroll-behavior:smooth}h1,h2,h3,h4,h5,h6,p,span,a,blockquote,i,b,u,em{font-size:1em;font-weight:inherit;font-style:inherit;text-decoration:none;color:inherit}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}::selection{background:#d7d7d7}form,input,textarea,select,button,label{font-family:inherit;font-size:inherit;hyphens:auto;background-color:transparent;color:inherit;display:block;appearance:none}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button;-webkit-appearance:button}input{appearance:none;-webkit-appearance:none;-moz-appearance:none;box-shadow:none}textarea,input:matches([type=email],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=url]){appearance:none;-webkit-appearance:none;-moz-appearance:none;box-shadow:none}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{appearance:none;-moz-appearance:none}input[type=password]{text-align:left}input[type=number]{appearance:texfield;-moz-appearance:textfield}input[type=number]:focus{appearance:texfield;-moz-appearance:textfield}label{display:inline-block;width:auto;position:relative}table,tr,td{border-collapse:collapse;border-spacing:0}svg{width:100%;display:block;fill:currentColor}body{min-height:100vh;font-size:100%;background-color:var(--background-body);font-smooth:always;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overscroll-behavior-x:none;overscroll-behavior-y:none}*{scrollbar-width:auto;scrollbar-color:#cacaca}*::-webkit-scrollbar{width:4px}*::-webkit-scrollbar-track{background:transparent}*::-webkit-scrollbar-thumb{background-color:#cacaca;border-radius:4px;border:none}:host{font-size:10px}.dav-footer{display:flex;align-items:center;justify-content:space-between;margin-top:16px}.dav-footer__textfield{width:100%}.dav-footer__icon,.dav-footer__icon__inactive{margin-left:8px;background-color:#E1111C;width:40px;min-width:40px;height:40px;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer}.dav-footer__icon__img{width:24px;height:24px}.dav-footer__icon__img-send{width:28px;height:28px;margin-right:4px}.dav-footer__icon__inactive{background-color:#D1D5E0;pointer-events:none}.dav__full-width{width:100%}.dav__equalizer{width:60px;height:50px}.noPadding{padding-bottom:0px}.padding-x{margin-left:8px;margin-right:8px}.dav-textField,.dav-textField__disabled{width:100%;height:40px;padding:8px;border:1px solid #D1D5E0;border-radius:8px;background-color:#ffffff;color:#404040;font-size:clamp(1.2em, 1vw + 0.6em, 1.4em);font-weight:400;box-sizing:border-box;transition:all 0.2s ease}.dav-textField:-ms-reveal,.dav-textField__disabled:-ms-reveal,.dav-textField:-ms-clear,.dav-textField__disabled:-ms-clear{display:none}.dav-textField,.dav-textField__disabled{position:relative;display:flex;gap:8px;align-items:center}.dav-textField input,.dav-textField__disabled input{border:none;background-color:transparent;flex:1}.dav-textField input:focus,.dav-textField__disabled input:focus{outline:none}.dav-textField input::placeholder,.dav-textField__disabled input::placeholder{color:#9D9D9D}.dav-textField input:disabled,.dav-textField__disabled input:disabled{cursor:not-allowed}.dav-textField__button{display:flex;align-items:center;justify-content:center;height:24px;width:24px;cursor:pointer}.dav-textField__button img{display:inline-block;width:auto}.dav-textField__disabled{background-color:#F7F7F7;color:#9D9D9D;cursor:not-allowed;border:1px solid #EDEDED}.dav-textField__focused{border:1px solid #AAB1BC}.dav-textField__error{border:1px solid #B70412}";

const ChatFooter = /*@__PURE__*/ proxyCustomElement(class ChatFooter extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * Checks the window size and updates the `isElementVisible` property based on the window width.
     * If the window width is greater than 768px, sets `isElementVisible` to `false`.
     * Otherwise, sets it to `true`.
     */
    this.checkWindowSize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 768) {
        state.isMobile = false;
      }
      else {
        state.isMobile = true;
      }
    };
    /**
     * Handles the form submission event.
     * Prevents the default form submission behavior.
     * If the value is not empty, adds a new message to the state's messages array
     * and clears the input field.
     * @param {Event} e - The form submission event.
     */
    this.handleSubmit = (e) => {
      e.preventDefault();
      if (this.value !== '') {
        state.messages = [
          ...state.messages,
          { text: this.value, sender: Sender.USER, id: state.messages.length + 1 }
        ];
        this.value = '';
        const chatElement = document.querySelector('#chat-element');
        if (chatElement instanceof HTMLElement) {
          window.scrollTo(0, chatElement.scrollHeight);
        }
      }
    };
    /**
     * Handles the input change event.
     * Updates the `value` property with the new input value.
     * @param {Event} event - The input change event.
     */
    this.handleChange = (event) => {
      this.value = event.target.value;
    };
    this.handleFocus = () => {
      state.isWritting = true;
    };
    this.handleBlur = () => {
      state.isWritting = false;
    };
    this.value = undefined;
    this.isElementVisible = true;
  }
  /**
   * Lifecycle method called when the component is connected to the DOM.
   * Adds a window resize event listener and calls the `checkWindowSize` method.
   */
  connectedCallback() {
    window.addEventListener('resize', this.checkWindowSize);
    this.checkWindowSize();
  }
  /**
   * Lifecycle method called when the component is disconnected from the DOM.
   * Removes the window resize event listener.
   */
  disconnectedCallback() {
    window.removeEventListener('resize', this.checkWindowSize);
  }
  /**
   * Determines whether to show the chips based on the current state.
   * Returns `true` if the state is not mobile or if the user is not currently writing a message.
   * Returns `false` otherwise.
   * @returns {boolean} A boolean indicating whether to show the chips.
   */
  showChips() {
    if (state.isMobile) {
      if (state.isWritting) {
        return false;
      }
    }
    return true;
  }
  render() {
    const buttonClass = this.value !== '' ? 'dav-footer__icon' : 'dav-footer__icon__inactive';
    return (h("div", { class: "padding-x" }, this.showChips() && (h("dav-chip-list", null, h("dav-chip-item", { text: "Desbloquear mi clave virtual" }))), h("form", { onSubmit: this.handleSubmit, class: "dav-footer noPadding" }, h("div", { class: "dav-textField" }, h("input", { autoComplete: "off", type: "text", value: this.value, placeholder: "Mensaje", onFocus: this.handleFocus, onBlur: this.handleBlur, onInput: this.handleChange })), h("button", { class: buttonClass, type: "submit" }, h("img", { class: "dav-footer__icon__img-send", src: getAssetPath(`../assets/icons/extra-icons/icon-send-message.svg`) })))));
  }
  static get assetsDirs() { return ["assets"]; }
  static get style() { return chatFooterCss; }
}, [1, "chat-footer", {
    "value": [32],
    "isElementVisible": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["chat-footer", "dav-chip-item", "dav-chip-list"];
  components.forEach(tagName => { switch (tagName) {
    case "chat-footer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ChatFooter);
      }
      break;
    case "dav-chip-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "dav-chip-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { ChatFooter as C, defineCustomElement as d };

//# sourceMappingURL=chat-footer2.js.map