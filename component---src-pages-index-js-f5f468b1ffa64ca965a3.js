(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3L7h":function(e,t,n){e.exports={hero:"index-module--hero--1q_CL",heroText:"index-module--heroText--2zbHF",name:"index-module--name--12EG5",down:"index-module--down--3Bzql",fadeIn:"index-module--fade-in--2R6Qu",bounce:"index-module--bounce--2qCp4",aboutMeSection:"index-module--aboutMeSection--2bQ96",aboutMe:"index-module--aboutMe--aieOb",socialIcons:"index-module--socialIcons--3YNJE",socialIcon:"index-module--socialIcon--PbMzD",contactSection:"index-module--contactSection--1oX1T",contactForm:"index-module--contactForm--IkTRr"}},"8bHb":function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("HAE/"),n("rE2o"),n("ioFf"),Object.defineProperty(t,"__esModule",{value:!0}),t.Optimizer=t.Selection=t.Mutate=t.Crossover=void 0;var o=c(n("cM7Z"));t.Crossover=o;var i=c(n("8hFv"));t.Mutate=i;var a=c(n("B+Lx"));t.Selection=a;var u=c(n("OWVs"));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}t.Optimizer=u},"8hFv":function(e,t,n){"use strict";n("bWfx"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.mutate=function(e,t){return e.dna=e.dna.map((function(e){var n=e.mutate(e.genes,t);return e.copyWithGenes(n)})),e}},"B+Lx":function(e,t,n){"use strict";function r(e){var t=e.reduce((function(e,t){return e+t.fitness}),0);return(0!==t?e.map((function(e){return e.fitness/t})):Array(e.length).fill(null).map((function(){return 1/e.length}))).reduce((function(e,t,n){return 0===n?e.push(t):e.push(e[n-1]+t),e}),[])}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length-1;if(n>r)return-1;var i=Math.floor((n+r)/2);return 0!==i&&e[i-1]<t&&t<=e[i]||0===i&&t<=e[i]||0===i&&t<=e[i]?i:e[i]<t?o(e,t,i+1,r):e[i]>t?o(e,t,n,i-1):-1}n("DNiP"),n("bHtr"),n("bWfx"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.selection=function(e,t,n){return n(e,t)},t.rouletteWheel=function(e,t){var n=r(e);return Array(t).fill(null).map((function(){return function(e,t){var n=Math.random(),r=o(e,n);return t[r]}(n,e)}))},t.stochasticUniversalSampling=function(e,t){var n=r(e),i=1/t,a=Math.random()*i;return Array(t).fill(null).map((function(e,t){return a+t*i})).map((function(e){return o(n,e)})).map((function(t){return e[t]}))}},Eaop:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("HAE/"),n("rE2o"),n("ioFf"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Chromosome",{enumerable:!0,get:function(){return o.Chromosome}}),Object.defineProperty(t,"Individual",{enumerable:!0,get:function(){return i.Individual}}),Object.defineProperty(t,"Simulation",{enumerable:!0,get:function(){return a.Simulation}}),t.ga=void 0;var o=n("dW9X"),i=n("W8KH"),a=n("NqDj"),u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("8bHb"));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}t.ga=u},JcYy:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n("bHtr"),n("bWfx"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.Chromosome=void 0;var o=function(){function e(t,n,r){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===t)throw new Error("length should be defined");if(void 0===n)throw new Error("generate() should be defined");this.length=t,this.generate=n,this.mutate=void 0===r?function(e,t){return e.map((function(e){return Math.random()<t?n():e}))}:r,this.genes=Array(t).fill(null)}var t,n,o;return t=e,(n=[{key:"_init",value:function(){this.genes=this.genes.map(this.generate)}},{key:"setGenes",value:function(e){if(e.length!==this.length)throw new Error("Expected genes of length ".concat(this.length,". Got ").concat(e.length));this.genes=e}},{key:"copyWithGenes",value:function(t){var n=new e(this.length,this.generate,this.mutate);return n.setGenes(t),n}},{key:"createRandomCopy",value:function(){var t=new e(this.length,this.generate,this.mutate);return t._init(),t}}])&&r(t.prototype,n),o&&r(t,o),e}();t.Chromosome=o},NqDj:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Simulation",{enumerable:!0,get:function(){return r.Simulation}});var r=n("pl7B")},Nr18:function(e,t,n){"use strict";var r=n("S/j/"),o=n("d/Gc"),i=n("ne8i");e.exports=function(e){for(var t=r(this),n=i(t.length),a=arguments.length,u=o(a>1?arguments[1]:void 0,n),s=a>2?arguments[2]:void 0,c=void 0===s?n:o(s,n);c>u;)t[u++]=e;return t}},OWVs:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.minimizer=t.maximizer=void 0;t.maximizer=function(e,t){return t.fitness-e.fitness};t.minimizer=function(e,t){return e.fitness-t.fitness}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return _}));n("VRzm"),n("Btvt"),n("0mN4"),n("f3/d");var r=n("o0o1"),o=n.n(r),i=(n("ls82"),n("q1tI")),a=n.n(i),u=n("vrFN"),s=n("3L7h"),c=n.n(s),l=n("UQ9A"),f=n.n(l),h=n("Eaop");var p="ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ",m=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.calculateFitness=function(e,t){return e.getDna(0).reduce((function(e,n,r){return n===t.charAt(r)?e+1:e}),0)},o.shouldFinish=function(e){return e.fitness===this.data.length},r}(h.Simulation);var d=n("Lnxd"),v=n("ma3e"),y=function(e){var t=e.stats;return a.a.createElement("div",{className:f.a.info},a.a.createElement("ul",{className:f.a.stats},a.a.createElement("li",null,a.a.createElement("small",null,"generation: ",t.currentGeneration)),a.a.createElement("li",null,a.a.createElement("small",null,"highest fitness: ",t.top.fitness.toFixed(2))),a.a.createElement("li",null,a.a.createElement("small",null,"average fitness: ",t.averageFitness.toFixed(2))),a.a.createElement("li",null,a.a.createElement("small",null,"pop. size: ",t.popSize))),a.a.createElement("a",{className:f.a.cta,href:"https://github.com/adrianmarkperea/genie"},a.a.createElement("span",null,"genie.js"),a.a.createElement(d.b.Provider,{value:{className:f.a.githubIcon}},a.a.createElement(v.b,null))))},g=function(e){var t=e.text,n=a.a.useState(),r=n[0],o=n[1],i=a.a.useCallback((function(e){var t=e.top,n=e.currentGeneration,r=e.popSize,i=e.averageFitness;o({top:t,currentGeneration:n,popSize:r,averageFitness:i})}),[]);return a.a.useEffect((function(){(function(e,t){var n=new h.Chromosome(e.length,(function(){return p[Math.floor(Math.random()*p.length)]})),r=new h.Individual(n);return new m({prototype:r,data:e,popSize:800,onCalculateFitness:t})})(t,i).start()}),[t,i]),r?a.a.createElement("div",{className:f.a.container},a.a.createElement("p",{className:f.a.main},r.top.getDna(0).join("")),a.a.createElement(y,{stats:r})):null},b=n("Bl7J"),E=n("Wbzz"),w=n("9eSz"),O=n.n(w),x=n("NO0K");function S(e,t,n,r,o,i,a){try{var u=e[i](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,o)}var j=function(){var e=a.a.useState(""),t=e[0],n=e[1],r=a.a.useState(""),i=r[0],u=r[1],s=a.a.useState(""),l=s[0],f=s[1],h=function(){var e,n=(e=o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://submit-form.com/Sx7w1xSNbKzGrx5ieV7O2",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:t,email:i,message:l})});case 4:Object(E.navigate)("/form-submitted/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){S(i,r,o,a,u,"next",e)}function u(e){S(i,r,o,a,u,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{className:c.a.contactForm,onSubmit:h},a.a.createElement("div",null,a.a.createElement("label",null,"Name",a.a.createElement("br",null),a.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}))),a.a.createElement("div",null,a.a.createElement("label",null,"Email",a.a.createElement("br",null),a.a.createElement("input",{type:"email",value:i,onChange:function(e){return u(e.target.value)}}))),a.a.createElement("label",null,"Message",a.a.createElement("br",null),a.a.createElement("textarea",{value:l,rows:6,onChange:function(e){return f(e.target.value)}})),a.a.createElement("button",{type:"submit"},"Send")))},_=(t.default=function(e){var t,n=e.data,r=n.site.siteMetadata.author,o=(t=r.descriptions)[Math.floor(Math.random()*t.length)],i=a.a.useRef();return a.a.createElement(b.a,null,a.a.createElement(u.a,null),a.a.createElement("div",{className:c.a.hero},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:c.a.heroText},a.a.createElement("h1",null,"Hi, I'm"," ",a.a.createElement("span",{className:c.a.name},r.firstName)),a.a.createElement(g,{text:o}))),a.a.createElement(d.b.Provider,{value:{color:"#649d66"}},a.a.createElement("div",{className:c.a.down},a.a.createElement("button",{onClick:function(){return e=i,window.scrollTo(0,e.current.offsetTop-55);var e}},a.a.createElement(v.a,null))))),a.a.createElement("section",{ref:i,className:"container "+c.a.aboutMeSection},a.a.createElement("h2",null,"About Me"),a.a.createElement("div",{className:c.a.aboutMe},a.a.createElement(O.a,{fixed:n.avatar.childImageSharp.fixed,alt:r.name,style:{float:"left",borderRadius:"50%",margin:"10px 30px 5px"}}),a.a.createElement("p",null,"Hi! My name is ",r.name,". I'm a full stack software engineer from ",a.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Campobasso"},"Italy")," 🇮🇹, currently graduating as a Computer Science student at ",a.a.createElement("a",{href:"https://www.kcl.ac.uk/"},"King's College London")," 🇬🇧."),a.a.createElement("p",null," ","I have professional experience as a full stack ",a.a.createElement("a",{href:"https://dotnet.microsoft.com/"},".NET")," developer"),a.a.createElement("p",null,"My preferred programming language is JavaScript, but I am also adept in C# and Java. I am experienced in creating fullstack webapps with Oracle based SQL, C# and ASP.NET. In addition, I am versed with creating full stack web applications using React.js and Express."),a.a.createElement("div",{className:c.a.socialIcons},a.a.createElement(x.a,null)))),a.a.createElement("section",{className:c.a.contactSection},a.a.createElement("div",{className:"container"},a.a.createElement("h2",null,"Send a message"),a.a.createElement("small",null,"and let's make something happen"),a.a.createElement(j,null))))},"2500579284")},UQ9A:function(e,t,n){e.exports={container:"mutating-module--container--70BNk",main:"mutating-module--main--2bKbi",info:"mutating-module--info--32vJY",fadeIn:"mutating-module--fade-in--2lbcM",stats:"mutating-module--stats--1lPMh",cta:"mutating-module--cta--3xjOd",githubIcon:"mutating-module--githubIcon--SK7lR"}},W8KH:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Individual",{enumerable:!0,get:function(){return r.Individual}});var r=n("vK2e")},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},bHtr:function(e,t,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},cM7Z:function(e,t,n){"use strict";n("bHtr"),n("bWfx"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.crossover=function(e,t,n){var r=function(e,t,n){return e.dna.map((function(e,r){var o=t.dna[r],i=n(e,o);return e.copyWithGenes(i)}))}(e,t,n);return new e.constructor(r)},t.onepoint=function(e,t){var n=(0,r.randBetween)(0,e.length);return function(e,t,n){return e.genes.map((function(e,r){var o=t.genes[r];return r<n?e:o}))}(e,t,n)},t.multipoint=function(e,t){var n=(0,r.randBetween)(0,e.length),o=(0,r.randBetween)(n,e.length);return function(e,t,n,r){return e.genes.map((function(e,o){var i=t.genes[o];return o<n||o>=r?e:i}))}(e,t,n,o)},t.uniform=function(e,t){var n=Array(e.length).fill(null).map((function(){return Math.random()}));return function(e,t,n){return e.genes.map((function(e,r){var o=t.genes[r];return n[r]<.5?e:o}))}(e,t,n)};var r=n("sZGo")},dW9X:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Chromosome",{enumerable:!0,get:function(){return r.Chromosome}});var r=n("JcYy")},jm62:function(e,t,n){var r=n("XKFU"),o=n("mQtv"),i=n("aCFj"),a=n("EemH"),u=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),s=a.f,c=o(r),l={},f=0;c.length>f;)void 0!==(n=s(r,t=c[f++]))&&u(l,t,n);return l}})},ls82:function(e,t,n){n("rGqo"),n("yt8O"),n("a1Th"),n("h7Nl"),n("VRzm"),n("Btvt"),n("/SS/"),n("f3/d"),n("8+KV"),n("hHhE"),n("rE2o"),n("ioFf");var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(e,t,n,r){var o=t&&t.prototype instanceof l?t:l,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=b(a,n);if(u){if(u===c)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,a),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}e.wrap=u;var c={};function l(){}function f(){}function h(){}var p={};p[o]=function(){return this};var m=Object.getPrototypeOf,d=m&&m(m(x([])));d&&d!==t&&n.call(d,o)&&(p=d);var v=h.prototype=l.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function g(e,t){var r;this._invoke=function(o,i){function a(){return new t((function(r,a){!function r(o,i,a,u){var c=s(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,c;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=v.constructor=h,h.constructor=f,h[a]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(g.prototype),g.prototype[i]=function(){return this},e.AsyncIterator=g,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new g(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(v),v[a]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;w(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},mQtv:function(e,t,n){var r=n("kJMx"),o=n("JiEa"),i=n("y3w9"),a=n("dyZX").Reflect;e.exports=a&&a.ownKeys||function(e){var t=r.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},o0o1:function(e,t,n){e.exports=n("ls82")},pl7B:function(e,t,n){"use strict";n("DNiP"),n("Vd3H"),n("bWfx"),n("bHtr"),n("LK8F"),n("rE2o"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("h7Nl"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.Simulation=void 0;var r=n("8bHb"),o=n("sZGo");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){var n=t.prototype,o=t.data,i=t.popSize,a=void 0===i?100:i,u=t.maxGenerations,s=void 0===u?1e3:u,c=t.numParents,l=void 0===c?a:c,f=t.selection,h=void 0===f?r.Selection.rouletteWheel:f,p=t.crossover,m=void 0===p?r.Crossover.onepoint:p,d=t.mutationRate,v=void 0===d?.01:d,y=t.optimizer,g=void 0===y?r.Optimizer.maximizer:y,b=t.elitism,E=void 0!==b&&b,w=t.onInit,O=void 0===w?null:w,x=t.onUpdate,S=void 0===x?null:x,j=t.onCalculateFitness,_=void 0===j?null:j,P=t.onFinish,k=void 0===P?null:P;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===n)throw new Error("Please provide an Individual as a prototype");if(0===n.dna.length)throw new Error("Please add a chromosome to your prototype");this.prototype=n,this.data=o,this.popSize=a,this.maxGenerations=s,this.numParents=l,this.selection=h,this.crossover=m,this.mutationRate=v,this.optimizer=g,this.elitism=E,this.population=Array(a).fill(null),this.currentGeneration=1,this.finished=!1,this.updateFinished=!1,this.top=null,this.averageFitness=0,this.history=[],this.rafId=null,this.onInit=O,this.onUpdate=S,this.onCalculateFitness=_,this.onFinish=k,this._init()}var t,n,i;return t=e,(n=[{key:"start",value:function(){var e=this;this.rafId=setTimeout((function(){return e.loop()}),1/60)}},{key:"stop",value:function(){clearTimeout(this.rafId),this.rafId=null}},{key:"loop",value:function(){var e=this;this.finished||(this.updateFinished||this._update(),this._calculateFitness(),this._evaluate(),this.finished||this._generate(),this.rafId=setTimeout((function(){return e.loop()}),1/60))}},{key:"_init",value:function(){var e=this;this.population=this.population.map((function(){return e.prototype.fromTheLikenessOf()})),this.init(),this.onInit&&this.onInit(this._getState())}},{key:"_update",value:function(){this.updateFinished=this.update(),this.onUpdate&&this.onUpdate(this._getState())}},{key:"_calculateFitness",value:function(){var e=this;this.population.forEach((function(t){return t.fitness=e.calculateFitness(t,e.data)})),this.population=this.population.sort(this.optimizer),this.top=this.population[0],this.averageFitness=this._getAverageFitness(),this.onCalculateFitness&&this.onCalculateFitness(this._getState())}},{key:"_evaluate",value:function(){this.shouldFinish(this.top)||this.currentGeneration===this.maxGenerations?(this.finished=!0,this.onFinish&&this.onFinish(this._getState())):this._reset()}},{key:"_getAverageFitness",value:function(){return this.population.reduce((function(e,t,n,r){return e+t.fitness/r.length}),0)}},{key:"_reset",value:function(){this.reset(),this.updateFinished=!1}},{key:"_generate",value:function(){var e=this,t=[];!0===this.elitism&&(t=this.population.sort((function(e,t){return t.fitness-e.fitness})).slice(0,this.numParents));var n=r.Selection.selection(this.population,this.numParents,this.selection),i=Array(this.popSize-t.length).fill(null).map((function(){var t=n[(0,o.randBetween)(0,n.length)],i=n[(0,o.randBetween)(0,n.length)];return r.Mutate.mutate(r.Crossover.crossover(t,i,e.crossover),e.mutationRate)}));this.updateHistory(),this.currentGeneration+=1,this.population=[].concat(s(t),s(i))}},{key:"updateHistory",value:function(){this.history=[].concat(s(this.history),[{generation:this.currentGeneration,population:this.population,averageFitness:this.averageFitness,topFitness:this.top.fitness}])}},{key:"_getState",value:function(){return a(a({},this.getState()),{},{population:this.population,currentGeneration:this.currentGeneration,top:this.top,averageFitness:this.averageFitness,maxGenerations:this.maxGenerations,popSize:this.popSize,history:this.history})}},{key:"init",value:function(){}},{key:"getState",value:function(){return{}}},{key:"update",value:function(){return!0}},{key:"reset",value:function(){}},{key:"shouldFinish",value:function(e){return!1}},{key:"calculateFitness",value:function(e,t){throw new Error("method `calculateFitness` must be implemented")}}])&&l(t.prototype,n),i&&l(t,i),e}();t.Simulation=f},sZGo:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.randBetween=function(e,t){return Math.floor(Math.random()*(t-e)+e)}},vK2e:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n("8+KV"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.Individual=void 0;var i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r(this,e),this.fitness=0,this.dna=Array.isArray(t)?t:[t]}var t,n,i;return t=e,(n=[{key:"getDna",value:function(e){return this.dna[e].genes}},{key:"addChromosome",value:function(e){this.dna.push(e)}},{key:"fromTheLikenessOf",value:function(){var t=new e;return this.dna.forEach((function(e){t.addChromosome(e.createRandomCopy())})),t.fitness=0,t}}])&&o(t.prototype,n),i&&o(t,i),e}();t.Individual=i}}]);
//# sourceMappingURL=component---src-pages-index-js-f5f468b1ffa64ca965a3.js.map