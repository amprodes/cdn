let e,n,t=null,l=!1;const s=e=>{const n=new URL(e,ee.t);return n.origin!==Y.location.origin?n.href:n.pathname},o={},i=e=>"object"==(e=typeof e)||"function"===e;function c(e){var n,t,l;return null!==(l=null===(t=null===(n=e.head)||void 0===n?void 0:n.querySelector('meta[name="csp-nonce"]'))||void 0===t?void 0:t.getAttribute("content"))&&void 0!==l?l:void 0}const r=(e,n,...t)=>{let l=null,s=null,o=!1,c=!1;const r=[],a=n=>{for(let t=0;t<n.length;t++)l=n[t],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!i(l))&&(l+=""),o&&c?r[r.length-1].l+=l:r.push(o?u(null,l):l),c=o)};if(a(t),n){n.key&&(s=n.key);{const e=n.className||n.class;e&&(n.class="object"!=typeof e?e:Object.keys(e).filter((n=>e[n])).join(" "))}}const f=u(e,null);return f.o=n,r.length>0&&(f.i=r),f.u=s,f},u=(e,n)=>({$:0,h:e,l:n,m:null,i:null,o:null,u:null}),a={},f=new WeakMap,d=e=>"sc-"+e.p,y=(e,n,t,l,s,o)=>{if(t!==l){let c=I(e,n),r=n.toLowerCase();if("class"===n){const n=e.classList,s=h(t),o=h(l);n.remove(...s.filter((e=>e&&!o.includes(e)))),n.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===n){for(const n in t)l&&null!=l[n]||(n.includes("-")?e.style.removeProperty(n):e.style[n]="");for(const n in l)t&&l[n]===t[n]||(n.includes("-")?e.style.setProperty(n,l[n]):e.style[n]=l[n])}else if("key"===n);else if("ref"===n)l&&l(e);else if(c||"o"!==n[0]||"n"!==n[1]){const r=i(l);if((c||r&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[n]=l;else{const s=null==l?"":l;"list"===n?c=!1:null!=t&&e[n]==s||(e[n]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(n)||e.removeAttribute(n):(!c||4&o||s)&&!r&&e.setAttribute(n,l=!0===l?"":l)}else n="-"===n[2]?n.slice(3):I(Y,r)?r.slice(2):r[2]+n.slice(3),t&&ee.rel(e,n,t,!1),l&&ee.ael(e,n,l,!1)}},$=/\s/,h=e=>e?e.split($):[],m=(e,n,t,l)=>{const s=11===n.m.nodeType&&n.m.host?n.m.host:n.m,i=e&&e.o||o,c=n.o||o;for(l in i)l in c||y(s,l,i[l],void 0,t,n.$);for(l in c)y(s,l,i[l],c[l],t,n.$)},p=(n,t,l)=>{const s=t.i[l];let o,i,c=0;if(null!==s.l)o=s.m=Z.createTextNode(s.l);else if(o=s.m=Z.createElement(s.h),m(null,s,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),s.i)for(c=0;c<s.i.length;++c)i=p(n,s,c),i&&o.appendChild(i);return o},b=(e,t,l,s,o,i)=>{let c,r=e;for(r.shadowRoot&&r.tagName===n&&(r=r.shadowRoot);o<=i;++o)s[o]&&(c=p(null,l,o),c&&(s[o].m=c,r.insertBefore(c,t)))},v=(e,n,t)=>{for(let l=n;l<=t;++l){const n=e[l];if(n){const e=n.m;g(n),e&&e.remove()}}},w=(e,n)=>e.h===n.h&&e.u===n.u,S=(e,n)=>{const t=n.m=e.m,l=e.i,s=n.i,o=n.l;null===o?("slot"===n.h||m(e,n,!1),null!==l&&null!==s?((e,n,t,l)=>{let s,o,i=0,c=0,r=0,u=0,a=n.length-1,f=n[0],d=n[a],y=l.length-1,$=l[0],h=l[y];for(;i<=a&&c<=y;)if(null==f)f=n[++i];else if(null==d)d=n[--a];else if(null==$)$=l[++c];else if(null==h)h=l[--y];else if(w(f,$))S(f,$),f=n[++i],$=l[++c];else if(w(d,h))S(d,h),d=n[--a],h=l[--y];else if(w(f,h))S(f,h),e.insertBefore(f.m,d.m.nextSibling),f=n[++i],h=l[--y];else if(w(d,$))S(d,$),e.insertBefore(d.m,f.m),d=n[--a],$=l[++c];else{for(r=-1,u=i;u<=a;++u)if(n[u]&&null!==n[u].u&&n[u].u===$.u){r=u;break}r>=0?(o=n[r],o.h!==$.h?s=p(n&&n[c],t,r):(S(o,$),n[r]=void 0,s=o.m),$=l[++c]):(s=p(n&&n[c],t,c),$=l[++c]),s&&f.m.parentNode.insertBefore(s,f.m)}i>a?b(e,null==l[y+1]?null:l[y+1].m,t,l,c,y):c>y&&v(n,i,a)})(t,l,n,s):null!==s?(null!==e.l&&(t.textContent=""),b(t,null,n,s,0,s.length-1)):null!==l&&v(l,0,l.length-1)):e.l!==o&&(t.data=o)},g=e=>{e.o&&e.o.ref&&e.o.ref(null),e.i&&e.i.map(g)},k=(e,n)=>{n&&!e.v&&n["s-p"]&&n["s-p"].push(new Promise((n=>e.v=n)))},j=(e,n)=>{if(e.$|=16,!(4&e.$))return k(e,e.S),ue((()=>C(e,n)));e.$|=512},C=(e,n)=>{const t=e.g;return n&&(e.$|=256,e.k&&(e.k.map((([e,n])=>R(t,e,n))),e.k=null)),M(void 0,(()=>O(e,t,n)))},M=(e,n)=>e instanceof Promise?e.then(n):n(),O=async(e,n,t)=>{const l=e.j,s=l["s-rc"];t&&(e=>{const n=e.C,t=e.j,l=n.$,s=((e,n)=>{var t;let l=d(n);const s=X.get(l);if(e=11===e.nodeType?e:Z,s)if("string"==typeof s){let n,o=f.get(e=e.head||e);if(o||f.set(e,o=new Set),!o.has(l)){{n=Z.createElement("style"),n.innerHTML=s;const l=null!==(t=ee.M)&&void 0!==t?t:c(Z);null!=l&&n.setAttribute("nonce",l),e.insertBefore(n,e.querySelector("link"))}o&&o.add(l)}}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return l})(t.shadowRoot?t.shadowRoot:t.getRootNode(),n);10&l&&(t["s-sc"]=s,t.classList.add(s+"-h"))})(e);P(e,n),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const n=l["s-p"],t=()=>x(e);0===n.length?t():(Promise.all(n).then(t),e.$|=4,n.length=0)}},P=(l,s)=>{try{t=s,s=s.render(),l.$&=-17,l.$|=2,((t,l)=>{const s=t.j,o=t.O||u(null,null),i=(e=>e&&e.h===a)(l)?l:r(null,null,l);n=s.tagName,i.h=null,i.$|=4,t.O=i,i.m=o.m=s.shadowRoot||s,e=s["s-sc"],S(o,i)})(l,s)}catch(e){J(e,l.j)}return t=null,null},L=()=>t,x=e=>{const n=e.j,t=e.g,l=e.S;64&e.$||(e.$|=64,T(n),R(t,"componentDidLoad"),e.P(n),l||N()),e.v&&(e.v(),e.v=void 0),512&e.$&&re((()=>j(e,!1))),e.$&=-517},E=e=>{{const n=z(e),t=n.j.isConnected;return t&&2==(18&n.$)&&j(n,!1),t}},N=()=>{T(Z.documentElement),re((()=>(e=>{const n=ee.ce("appload",{detail:{namespace:"dav-canales-vivi-webcomponent"}});return e.dispatchEvent(n),n})(Y)))},R=(e,n,t)=>{if(e&&e[n])try{return e[n](t)}catch(e){J(e)}},T=e=>e.classList.add("hydrated"),U=(e,n,t)=>{if(n.L){const l=Object.entries(n.L),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&t&&32&l)&&Object.defineProperty(s,e,{get(){return((e,n)=>z(this).N.get(n))(0,e)},set(t){((e,n,t,l)=>{const s=z(e),o=s.N.get(n),c=s.$,r=s.g;t=((e,n)=>null==e||i(e)?e:4&n?"false"!==e&&(""===e||!!e):1&n?e+"":e)(t,l.L[n][0]),8&c&&void 0!==o||t===o||Number.isNaN(o)&&Number.isNaN(t)||(s.N.set(n,t),r&&2==(18&c)&&j(s,!1))})(this,e,t,n)},configurable:!0,enumerable:!0})})),1&t){const n=new Map;s.attributeChangedCallback=function(e,t,l){ee.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,n])=>15&n[0])).map((([e,t])=>{const l=t[1]||e;return n.set(l,e),l}))}}return e},A=e=>{R(e,"connectedCallback")},H=(e,n={})=>{var t;const l=[],s=n.exclude||[],o=Y.customElements,i=Z.head,r=i.querySelector("meta[charset]"),u=Z.createElement("style"),a=[];let f,y=!0;Object.assign(ee,n),ee.t=new URL(n.resourcesUrl||"./",Z.baseURI).href,e.map((e=>{e[1].map((n=>{const t={$:n[0],p:n[1],L:n[2],R:n[3]};t.L=n[2],t.R=n[3];const i=t.p,c=class extends HTMLElement{constructor(e){super(e),G(e=this,t),1&t.$&&e.attachShadow({mode:"open"})}connectedCallback(){f&&(clearTimeout(f),f=null),y?a.push(this):ee.jmp((()=>(e=>{if(0==(1&ee.$)){const n=z(e),t=n.C,l=()=>{};if(1&n.$)W(e,n,t.R),A(n.g);else{n.$|=1;{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){k(n,n.S=t);break}}t.L&&Object.entries(t.L).map((([n,[t]])=>{if(31&t&&e.hasOwnProperty(n)){const t=e[n];delete e[n],e[n]=t}})),(async(e,n,t,l,s)=>{if(0==(32&n.$)){n.$|=32;{if((s=Q(t)).then){const e=()=>{};s=await s,e()}s.isProxied||(U(s,t,2),s.isProxied=!0);const e=()=>{};n.$|=8;try{new s(n)}catch(e){J(e)}n.$&=-9,e(),A(n.g)}if(s.style){let e=s.style;const n=d(t);if(!X.has(n)){const l=()=>{};((e,n,t)=>{let l=X.get(e);te&&t?(l=l||new CSSStyleSheet,"string"==typeof l?l=n:l.replaceSync(n)):l=n,X.set(e,l)})(n,e,!!(1&t.$)),l()}}}const o=n.S,i=()=>j(n,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,n,t)}l()}})(this)))}disconnectedCallback(){ee.jmp((()=>(()=>{if(0==(1&ee.$)){const e=z(this),n=e.g;e.T&&(e.T.map((e=>e())),e.T=void 0),R(n,"disconnectedCallback")}})()))}componentOnReady(){return z(this).U}};t.A=e[0],s.includes(i)||o.get(i)||(l.push(i),o.define(i,U(c,t,1)))}))}));{u.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles","");const e=null!==(t=ee.M)&&void 0!==t?t:c(Z);null!=e&&u.setAttribute("nonce",e),i.insertBefore(u,r?r.nextSibling:i.firstChild)}y=!1,a.length?a.map((e=>e.connectedCallback())):ee.jmp((()=>f=setTimeout(N,30)))},W=(e,n,t)=>{t&&t.map((([t,l,s])=>{const o=D(e,t),i=q(n,s),c=F(t);ee.ael(o,l,i,c),(n.T=n.T||[]).push((()=>ee.rel(o,l,i,c)))}))},q=(e,n)=>t=>{try{256&e.$?e.g[n](t):(e.k=e.k||[]).push([n,t])}catch(e){J(e)}},D=(e,n)=>8&n?Y:e,F=e=>0!=(2&e),V=e=>ee.M=e,_=new WeakMap,z=e=>_.get(e),B=(e,n)=>_.set(n.g=e,n),G=(e,n)=>{const t={$:0,j:e,C:n,N:new Map};return t.U=new Promise((e=>t.P=e)),e["s-p"]=[],e["s-rc"]=[],W(e,t,n.R),_.set(e,t)},I=(e,n)=>n in e,J=(e,n)=>(0,console.error)(e,n),K=new Map,Q=e=>{const n=e.p.replace(/-/g,"_"),t=e.A,l=K.get(t);return l?l[n]:import(`./${t}.entry.js`).then((e=>(K.set(t,e),e[n])),J)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},X=new Map,Y="undefined"!=typeof window?window:{},Z=Y.document||{head:{}},ee={$:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,n,t,l)=>e.addEventListener(n,t,l),rel:(e,n,t,l)=>e.removeEventListener(n,t,l),ce:(e,n)=>new CustomEvent(e,n)},ne=e=>Promise.resolve(e),te=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),le=[],se=[],oe=(e,n)=>t=>{e.push(t),l||(l=!0,n&&4&ee.$?re(ce):ee.raf(ce))},ie=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(e){J(e)}e.length=0},ce=()=>{ie(le),ie(se),(l=le.length>0)&&ee.raf(ce)},re=e=>ne().then(e),ue=oe(se,!0);export{a as H,s as a,H as b,E as f,L as g,r as h,ne as p,B as r,V as s}