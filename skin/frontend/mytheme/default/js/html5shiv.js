/*! HTML5 Shiv v3.6.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */(function(e,t){function l(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;n.innerHTML="x<style>"+t+"</style>";return r.insertBefore(n.lastChild,r.firstChild)}function c(){var e=g.elements;return typeof e=="string"?e.split(" "):e}function h(e){var t=a[e[o]];if(!t){t={};u++;e[o]=u;a[u]=t}return t}function p(e,n,s){n||(n=t);if(f)return n.createElement(e);s||(s=h(n));var o;s.cache[e]?o=s.cache[e].cloneNode():i.test(e)?o=(s.cache[e]=s.createElem(e)).cloneNode():o=s.createElem(e);return o.canHaveChildren&&!r.test(e)?s.frag.appendChild(o):o}function d(e,n){e||(e=t);if(f)return e.createDocumentFragment();n=n||h(e);var r=n.frag.cloneNode(),i=0,s=c(),o=s.length;for(;i<o;i++)r.createElement(s[i]);return r}function v(e,t){if(!t.cache){t.cache={};t.createElem=e.createElement;t.createFrag=e.createDocumentFragment;t.frag=t.createFrag()}e.createElement=function(n){return g.shivMethods?p(n,e,t):t.createElem(n)};e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/\w+/g,function(e){t.createElem(e);t.frag.createElement(e);return'c("'+e+'")'})+");return n}")(g,t.frag)}function m(e){e||(e=t);var n=h(e);g.shivCSS&&!s&&!n.hasCSS&&(n.hasCSS=!!l(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"));f||v(e,n);return e}var n=e.html5||{},r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,s,o="_html5shiv",u=0,a={},f;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>";s="hidden"in e;f=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){s=!0;f=!0}})();var g={elements:n.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:n.shivCSS!==!1,supportsUnknownElements:f,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:m,createElement:p,createDocumentFragment:d};e.html5=g;m(t)})(this,document);