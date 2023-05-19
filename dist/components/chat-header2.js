import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './button.component.js';

const chatHeaderCss = "@charset \"UTF-8\";@font-face{font-family:\"fontello\";src:url(\"../../assets/fonts/fontello/fontello.eot?0000\");src:url(\"../../assets/fonts/fontello/fontello.eot?0000#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/fontello/fontello.woff2?0000\") format(\"woff2\"), url(\"../../assets/fonts/fontello/fontello.woff?0000\") format(\"woff\"), url(\"../../assets/fonts/fontello/fontello.ttf?0000\") format(\"truetype\"), url(\"../../assets/fonts/fontello/fontello.svg?0000#fontello\") format(\"svg\");font-weight:normal;font-style:normal}@font-face{font-family:\"Roboto Condensed\";font-style:normal;font-weight:300;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:italic;font-weight:300;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:normal;font-weight:400;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:italic;font-weight:400;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:normal;font-weight:700;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:italic;font-weight:700;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.svg#Roboto\") format(\"svg\");}body{margin:0}body{margin:0}.dav-titleContainer__title,.dav-titleContainer--desktop h3,.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1,.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1{display:inline-block;width:100%;margin:0;font-size:16px;font-weight:var(--fw-bold);color:var(--titles-color)}.dav-bottomSheet-afterHours__hours,.dav-bottomSheet-afterHours__title,.dav-paragraph,.dav-link,.dav-titleContainer__subtitle,.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1,.dav-titleContainer__title,.dav-titleContainer--desktop h3,.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1{font-family:\"Roboto\", sans-serif;font-size:var(--font-medium);line-height:130%;font-weight:var(--fw-regular);text-align:left;font-style:normal;color:var(--text-color)}.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1{display:inline-block;width:100%;margin:0;font-size:16px;font-weight:var(--fw-bold);color:var(--titles-color)}.dav-titleContainer__title,.dav-titleContainer--desktop h3,.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1,.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1{margin-top:16px}.dav-titleContainer__title:first-of-type,.dav-titleContainer--desktop h3:first-of-type,.dav-titleContainer--desktop h2:first-of-type,.dav-titleContainer--desktop h1:first-of-type,.dav-titleContainer__title--h5:first-of-type,.dav-titleContainer__title--h4:first-of-type,.dav-titleContainer__title--h3:first-of-type,.dav-titleContainer__title--h2:first-of-type,.dav-titleContainer__title--h1:first-of-type{margin-top:0px}.dav-titleContainer__title--h1{font-size:34px}.dav-titleContainer__title--h2{font-size:22px}.dav-titleContainer__title--h3{font-size:18px}.dav-titleContainer__title--h4{font-size:14px}.dav-titleContainer__title--h5{font-size:14px}.dav-titleContainer__subtitle{margin-top:16px;font-weight:var(--fw-medium)}.dav-titleContainer--desktop{display:none;width:100%;margin-top:32px;padding:0 16px}.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1{margin-bottom:0px;font-size:24px;color:var(--titles-color)}.dav-titleContainer--desktop h3{margin-bottom:8px;font-size:20px;color:var(--text-enable);font-weight:var(--fw-medium)}.dav-link{text-decoration:underline}.dav-link:visited{text-decoration:underline}.dav-link:focus{text-decoration:underline}.dav-paragraph{color:var(--gray-6765)}.dav-divider{height:1px;width:100%;background-color:var(--gray-ca);margin:0 auto}body{margin:0}.dav-container{display:block;width:100%;height:100%;max-width:536px;margin:0 auto;padding:0;position:relative;background-color:#ebecf0}*{margin:0;padding:0;border:0;box-sizing:border-box;vertical-align:baseline;outline:none;border:0;border-width:0;font-family:\"Roboto\", sans-serif;vertical-align:baseline;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}::selection{background:#d7d7d7}img,picture,video,iframe,figure{max-width:100%;display:block;object-position:center center}a{display:inline-block;text-decoration:none;color:inherit;font-size:inherit}a:hover,a:focus{text-decoration:none}li{list-style-type:none}ol,ul{list-style:none}html{scroll-behavior:smooth}h1,h2,h3,h4,h5,h6,p,span,a,blockquote,i,b,u,em{font-size:1em;font-weight:inherit;font-style:inherit;text-decoration:none;color:inherit}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}::selection{background:#d7d7d7}form,input,textarea,select,button,label{font-family:inherit;font-size:inherit;hyphens:auto;background-color:transparent;color:inherit;display:block;appearance:none}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button;-webkit-appearance:button}input{appearance:none;-webkit-appearance:none;-moz-appearance:none;box-shadow:none}textarea,input:matches([type=email],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=url]){appearance:none;-webkit-appearance:none;-moz-appearance:none;box-shadow:none}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{appearance:none;-moz-appearance:none}input[type=password]{text-align:left}input[type=number]{appearance:texfield;-moz-appearance:textfield}input[type=number]:focus{appearance:texfield;-moz-appearance:textfield}label{display:inline-block;width:auto;position:relative}table,tr,td{border-collapse:collapse;border-spacing:0}svg{width:100%;display:block;fill:currentColor}body{min-height:100vh;font-size:100%;background-color:var(--background-body);font-smooth:always;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overscroll-behavior-x:none;overscroll-behavior-y:none}*{scrollbar-width:auto;scrollbar-color:#cacaca}*::-webkit-scrollbar{width:4px}*::-webkit-scrollbar-track{background:transparent}*::-webkit-scrollbar-thumb{background-color:#cacaca;border-radius:4px;border:none}body{margin:0}:host{font-size:10px}.dav__header{width:100%;display:flex;height:48px;align-items:center;background-color:white;justify-content:space-between;padding-left:8px;padding-right:16px}.dav__header__left{display:flex}.dav__header__left__icon{display:flex;justify-content:center;align-items:center;width:32px;height:32px}.dav__header__left__name{font-weight:700;font-size:clamp(1.6em, 1vw + 1em, 1.8em);margin-left:8px;align-self:center}.dav__header__camera{width:24px;height:24px}.dav-flex{display:flex}.dav-bottomSheet{display:flex;flex-direction:column;padding:0 16px 16px}.dav-bottomSheet-title{font-size:clamp(1.8em, 1vw + 1.2em, 2em)}.dav-bottomSheet-align{align-self:center}.dav-bottomSheet-arrow{display:none;width:24px;height:24px;pointer-events:none;transform:rotateZ(90deg);align-self:center}.dav-bottomSheet-terms{font-size:clamp(1.4em, 1vw + 0.8em, 1.6em);color:#404040;font-weight:500}.dav-bottomSheet-close{display:none;width:24px;height:24px;cursor:pointer;background-color:transparent}@media screen and (min-width: 536px){.dav-bottomSheet-close{display:block}}.dav-bottomSheet-subTitle{display:flex;width:100%;gap:8px;font-size:clamp(1.4em, 1vw + 0.8em, 1.6em);color:black;font-weight:500;margin-bottom:16px}.dav-bottomSheet-item{display:flex;justify-content:space-between;width:100%}.dav-bottomSheet-item__content{display:flex;gap:8px}.dav-bottomSheet-item__content__img{align-self:flex-start}.dav-bottomSheet-item__content__label{align-self:center;color:black;font-size:clamp(1.4em, 1vw + 0.8em, 1.6em)}.dav-bottomSheet-item__arrow{transform:rotate(180deg);align-self:flex-start}.dav-bottomSheet-afterHours{background-color:#f1f2f8;border-radius:16px;padding:16px;height:fit-content}.dav-bottomSheet-afterHours__title{color:black;font-size:clamp(1.4em, 1vw + 0.8em, 1.6em);font-weight:500}.dav-bottomSheet-afterHours__hours{color:#404040;font-size:clamp(1.4em, 1vw + 0.8em, 1.6em)}.artificial-height{height:156px}.artificial-heightNoHour{height:180px}";

const ChatHeader = /*@__PURE__*/ proxyCustomElement(class ChatHeader extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.late = false;
  }
  render() {
    return (h("div", null, h("div", { class: "dav__header" }, h("div", { class: "dav__header__left" }, h("app-button", { classButton: "backVivi" /*routerLink=".."*/ }, h("img", { src: '/assets/icons/default-icons/icon-arrow-back.svg' })), h("div", { class: "dav__header__left__icon" }, h("img", { src: "./assets/icon-vivi-assistant.svg" })), h("p", { class: "dav__header__left__name" }, "Vivi")), h("img", { src: "/assets/icons/extra-icons/icon-config.svg", class: "dav__header__camera" }))));
  }
  static get style() { return chatHeaderCss; }
}, [1, "chat-header", {
    "late": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["chat-header", "app-button"];
  components.forEach(tagName => { switch (tagName) {
    case "chat-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ChatHeader);
      }
      break;
    case "app-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { ChatHeader as C, defineCustomElement as d };

//# sourceMappingURL=chat-header2.js.map