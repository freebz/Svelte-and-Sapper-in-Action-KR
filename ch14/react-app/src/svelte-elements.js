/* eslint-disable eqeqeq, no-self-compare, no-sequences, no-unused-expressions */
// eslint-disable-next-line
function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(){return l(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function p(t){const e={};for(const n of t)e[n.name]=n.value;return e}let $;function m(t){$=t}const g=[],b=[],x=[],y=[],_=Promise.resolve();let v=!1;function E(t){x.push(t)}const k=new Set;let w=0;function C(){const t=$;do{for(;w<g.length;){const t=g[w];w++,m(t),A(t.$$)}for(m(null),g.length=0,w=0;b.length;)b.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];k.has(e)||(k.add(e),e())}x.length=0}while(g.length);for(;y.length;)y.pop()();v=!1,k.clear(),m(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const L=new Set;function T(t,e){-1===t.$$.dirty[0]&&(g.push(t),v||(v=!0,_.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(s,c,i,a,l,d,f,h=[-1]){const p=$;m(s);const g=s.$$={fragment:null,ctx:null,props:d,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(p?p.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:c.target||p.$$.root};f&&f(g.root);let b=!1;if(g.ctx=i?i(s,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&T(s,t)),e})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!a&&a(g.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();c.intro&&((x=s.$$.fragment)&&x.i&&(L.delete(x),x.i(y))),function(t,n,s,c){const{fragment:i,on_mount:u,on_destroy:a,after_update:l}=t.$$;i&&i.m(n,s),c||E((()=>{const n=u.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(E)}(s,c.target,c.anchor,c.customElement),C()}var x,y;m(p)}let M;function j(e){let n,r,s,p,$,m,g,b,x;return{c(){var o,c,i;n=a("div"),r=a("button"),r.textContent="-",s=d(),p=a("span"),$=l(e[0]),m=d(),g=a("button"),g.textContent="+",this.c=t,o=n,c="class",null==(i="counter")?o.removeAttribute(c):o.getAttribute(c)!==i&&o.setAttribute(c,i)},m(t,o){i(t,n,o),c(n,r),c(n,s),c(n,p),c(p,$),c(n,m),c(n,g),b||(x=[f(r,"click",e[1]),f(g,"click",e[2])],b=!0)},p(t,[e]){1&e&&h($,t[0])},i:t,o:t,d(t){t&&u(n),b=!1,o(x)}}}function N(t,e,n){let{count:o=0}=e;return t.$$set=t=>{"count"in t&&n(0,o=t.count)},[o,()=>n(0,o--,o),()=>n(0,o++,o)]}"function"==typeof HTMLElement&&(M=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(r);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class O extends M{constructor(t){super(),this.shadowRoot.innerHTML="<style>button{border:solid lightgray 1px;border-radius:4px;padding:10px}.counter{font-size:24px}</style>",H(this,{target:this.shadowRoot,props:p(this.attributes),customElement:!0},N,j,s,{count:0},null),t&&(t.target&&i(t.target,this,t.anchor),t.props&&(this.$set(t.props),C()))}static get observedAttributes(){return["count"]}get count(){return this.$$.ctx[0]}set count(t){this.$$set({count:t}),C()}}function R(e){let n,o,r,s;return{c(){n=a("div"),o=l("Hello, "),r=l(e[0]),s=l("!"),this.c=t},m(t,e){i(t,n,e),c(n,o),c(n,r),c(n,s)},p(t,[e]){1&e&&h(r,t[0])},i:t,o:t,d(t){t&&u(n)}}}function S(t,e,n){let{name:o="World"}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}customElements.define("svelte-counter",O);class q extends M{constructor(t){super(),H(this,{target:this.shadowRoot,props:p(this.attributes),customElement:!0},S,R,s,{name:0},null),t&&(t.target&&i(t.target,this,t.anchor),t.props&&(this.$set(t.props),C()))}static get observedAttributes(){return["name"]}get name(){return this.$$.ctx[0]}set name(t){this.$$set({name:t}),C()}}customElements.define("svelte-greet",q);export{O as Counter,q as Greet};
//# sourceMappingURL=svelte-elements.js.map
