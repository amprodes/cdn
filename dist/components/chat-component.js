import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

var Sender;
(function (Sender) {
  Sender["VIVI"] = "VIVI";
  Sender["USER"] = "USER";
  Sender["ADVISOR"] = "ADVISOR";
})(Sender || (Sender = {}));

const chatComponentCss = "@charset \"UTF-8\";@font-face{font-family:\"fontello\";src:url(\"../../assets/fonts/fontello/fontello.eot?0000\");src:url(\"../../assets/fonts/fontello/fontello.eot?0000#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/fontello/fontello.woff2?0000\") format(\"woff2\"), url(\"../../assets/fonts/fontello/fontello.woff?0000\") format(\"woff\"), url(\"../../assets/fonts/fontello/fontello.ttf?0000\") format(\"truetype\"), url(\"../../assets/fonts/fontello/fontello.svg?0000#fontello\") format(\"svg\");font-weight:normal;font-style:normal}@font-face{font-family:\"Roboto Condensed\";font-style:normal;font-weight:300;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:italic;font-weight:300;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-300italic.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:normal;font-weight:400;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-regular.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:italic;font-weight:400;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-italic.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:normal;font-weight:700;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto Condensed\";font-style:italic;font-weight:700;src:url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto-condensed/roboto-condensed-v25-latin-700italic.svg#RobotoCondensed\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-regular.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:300;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-300italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:400;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:500;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-500italic.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:normal;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700.svg#Roboto\") format(\"svg\");}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:700;src:url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot\");src:local(\"\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff2\") format(\"woff2\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.woff\") format(\"woff\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.ttf\") format(\"truetype\"), url(\"../../assets/fonts/roboto/roboto-v30-latin-700italic.svg#Roboto\") format(\"svg\");}body{margin:0}body{margin:0}.dav-titleContainer__title,.dav-titleContainer--desktop h3,.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1,.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1{display:inline-block;width:100%;margin:0;font-size:16px;font-weight:var(--fw-bold);color:var(--titles-color)}.dav-paragraph,.dav-link,.dav-titleContainer__subtitle,.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1,.dav-titleContainer__title,.dav-titleContainer--desktop h3,.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1{font-family:\"Roboto\", sans-serif;font-size:var(--font-medium);line-height:130%;font-weight:var(--fw-regular);text-align:left;font-style:normal;color:var(--text-color)}.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1{display:inline-block;width:100%;margin:0;font-size:16px;font-weight:var(--fw-bold);color:var(--titles-color)}.dav-titleContainer__title,.dav-titleContainer--desktop h3,.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1,.dav-titleContainer__title--h5,.dav-titleContainer__title--h4,.dav-titleContainer__title--h3,.dav-titleContainer__title--h2,.dav-titleContainer__title--h1{margin-top:16px}.dav-titleContainer__title:first-of-type,.dav-titleContainer--desktop h3:first-of-type,.dav-titleContainer--desktop h2:first-of-type,.dav-titleContainer--desktop h1:first-of-type,.dav-titleContainer__title--h5:first-of-type,.dav-titleContainer__title--h4:first-of-type,.dav-titleContainer__title--h3:first-of-type,.dav-titleContainer__title--h2:first-of-type,.dav-titleContainer__title--h1:first-of-type{margin-top:0px}.dav-titleContainer__title--h1{font-size:34px}.dav-titleContainer__title--h2{font-size:22px}.dav-titleContainer__title--h3{font-size:18px}.dav-titleContainer__title--h4{font-size:14px}.dav-titleContainer__title--h5{font-size:14px}.dav-titleContainer__subtitle{margin-top:16px;font-weight:var(--fw-medium)}.dav-titleContainer--desktop{display:none;width:100%;margin-top:32px;padding:0 16px}.dav-titleContainer--desktop h2,.dav-titleContainer--desktop h1{margin-bottom:0px;font-size:24px;color:var(--titles-color)}.dav-titleContainer--desktop h3{margin-bottom:8px;font-size:20px;color:var(--text-enable);font-weight:var(--fw-medium)}.dav-link{text-decoration:underline}.dav-link:visited{text-decoration:underline}.dav-link:focus{text-decoration:underline}.dav-paragraph{color:var(--gray-6765)}.dav-divider{height:1px;width:100%;background-color:var(--gray-ca);margin:0 auto}body{margin:0}.dav-container{display:block;width:100%;height:100%;max-width:536px;margin:0 auto;padding:0;position:relative;background-color:#ebecf0}*{margin:0;padding:0;border:0;box-sizing:border-box;vertical-align:baseline;outline:none;border:0;border-width:0;font-family:\"Roboto\", sans-serif;vertical-align:baseline;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}::selection{background:#d7d7d7}img,picture,video,iframe,figure{max-width:100%;display:block;object-position:center center}a{display:inline-block;text-decoration:none;color:inherit;font-size:inherit}a:hover,a:focus{text-decoration:none}li{list-style-type:none}ol,ul{list-style:none}html{scroll-behavior:smooth}h1,h2,h3,h4,h5,h6,p,span,a,blockquote,i,b,u,em{font-size:1em;font-weight:inherit;font-style:inherit;text-decoration:none;color:inherit}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}::selection{background:#d7d7d7}form,input,textarea,select,button,label{font-family:inherit;font-size:inherit;hyphens:auto;background-color:transparent;color:inherit;display:block;appearance:none}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{appearance:button;-webkit-appearance:button}input{appearance:none;-webkit-appearance:none;-moz-appearance:none;box-shadow:none}textarea,input:matches([type=email],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=url]){appearance:none;-webkit-appearance:none;-moz-appearance:none;box-shadow:none}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{appearance:none;-moz-appearance:none}input[type=password]{text-align:left}input[type=number]{appearance:texfield;-moz-appearance:textfield}input[type=number]:focus{appearance:texfield;-moz-appearance:textfield}label{display:inline-block;width:auto;position:relative}table,tr,td{border-collapse:collapse;border-spacing:0}svg{width:100%;display:block;fill:currentColor}body{min-height:100vh;font-size:100%;background-color:var(--background-body);font-smooth:always;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overscroll-behavior-x:none;overscroll-behavior-y:none}*{scrollbar-width:auto;scrollbar-color:#cacaca}*::-webkit-scrollbar{width:4px}*::-webkit-scrollbar-track{background:transparent}*::-webkit-scrollbar-thumb{background-color:#cacaca;border-radius:4px;border:none}:host{display:block}.chat{padding-top:16px}";

const ChatComponent$1 = /*@__PURE__*/ proxyCustomElement(class ChatComponent extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.messages = [];
  }
  watchStateHandler(newValue, oldValue) {
    console.log('The old value of randNumbers is: ', oldValue);
    console.log('The new value of randNumbers is: ', newValue);
  }
  componentWillLoad() {
    this.messages = [{ text: "¡Hola! Soy Vivi, la asistente virtual de Davivienda.", sender: Sender.VIVI }, { text: "Si tiene clave virtual, ingrese con ella para recibir atención personalizada.", sender: Sender.VIVI }, { text: "¿En qué le puedo ayudar?", sender: Sender.VIVI }];
  }
  render() {
    return (h("div", { class: 'chat' }, this.messages.map((message, i) => h("div", { key: i }, h("chat-bubble", { text: message.text })))));
  }
  static get watchers() { return {
    "messages": ["watchStateHandler"]
  }; }
  static get style() { return chatComponentCss; }
}, [1, "chat-component", {
    "messages": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["chat-component"];
  components.forEach(tagName => { switch (tagName) {
    case "chat-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ChatComponent$1);
      }
      break;
  } });
}

const ChatComponent = ChatComponent$1;
const defineCustomElement = defineCustomElement$1;

export { ChatComponent, defineCustomElement };

//# sourceMappingURL=chat-component.js.map