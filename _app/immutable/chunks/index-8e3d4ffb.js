function S(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(q)}function K(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ht(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function Q(t){return Object.keys(t).length===0}function U(t,...n){if(t==null)return S;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(U(n,e))}function pt(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function gt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function yt(t,n,e,i,r,o){if(r){const c=D(n,e,i,o);t.p(c,r)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function $t(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let v=!1;function W(){v=!0}function V(){v=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const u=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:X(1,r,y=>n[e[y]].claim_order,u))-1;i[s]=e[a]+1;const f=a+1;e[f]=s,r=Math.max(f,r)}const o=[],c=[];let l=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(o.push(n[s-1]);l>=s;l--)c.push(n[l]);l--}for(;l>=0;l--)c.push(n[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[s],a)}}function Z(t,n){if(v){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){v&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode.removeChild(t)}function wt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function O(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function Et(){return k(" ")}function vt(){return k("")}function Nt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Tt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){G(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(n(l)){const s=e(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(n(l)){const s=e(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function rt(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];e[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function At(t,n,e){return rt(t,n,e,O)}function ct(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function St(t){return ct(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function kt(t,n){const e=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",e);if(e===i)return new L(void 0,n);G(t);const r=t.splice(e,i-e+1);E(r[0]),E(r[r.length-1]);const o=r.slice(1,r.length-1);for(const c of o)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(o,n)}function Ct(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function st(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=O(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class L extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}let m;function h(t){m=t}function g(){if(!m)throw new Error("Function called outside component initialization");return m}function Mt(t){g().$$.on_mount.push(t)}function Ht(t){g().$$.after_update.push(t)}function Lt(){const t=g();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=st(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Bt(t,n){return g().$$.context.set(t,n),n}function Pt(t){return g().$$.context.get(t)}const d=[],B=[],$=[],P=[],F=Promise.resolve();let T=!1;function I(){T||(T=!0,F.then(R))}function qt(){return I(),F}function A(t){$.push(t)}const N=new Set;let b=0;function R(){const t=m;do{for(;b<d.length;){const n=d[b];b++,h(n),ot(n.$$)}for(h(null),d.length=0,b=0;B.length;)B.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];N.has(e)||(N.add(e),e())}$.length=0}while(d.length);for(;P.length;)P.pop()();T=!1,N.clear(),h(t)}function ot(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const w=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Ot(){_.r||p(_.c),_=_.p}function ut(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Gt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function zt(t,n){const e={},i={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],l=n[o];if(l){for(const s in c)s in l||(i[s]=1);for(const s in l)r[s]||(e[s]=l[s],r[s]=1);t[o]=l}else for(const s in c)r[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Ft(t){return typeof t=="object"&&t!==null?t:{}}function It(t){t&&t.c()}function Rt(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:r,on_mount:o,on_destroy:c,after_update:l}=t.$$;r&&r.m(n,e),i||A(()=>{const s=o.map(q).filter(K);c?c.push(...s):p(s),t.$$.on_mount=[]}),l.forEach(A)}function at(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(d.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Jt(t,n,e,i,r,o,c,l=[-1]){const s=m;h(t);const u=t.$$={fragment:null,ctx:null,props:o,update:S,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||s.$$.root};c&&c(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...C)=>{const j=C.length?C[0]:y;return u.ctx&&r(u.ctx[f],u.ctx[f]=j)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](j),a&&_t(t,f)),y}):[],u.update(),a=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){W();const f=it(n.target);u.fragment&&u.fragment.l(f),f.forEach(E)}else u.fragment&&u.fragment.c();n.intro&&ut(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),V(),R()}h(s)}class Kt{$destroy(){at(this,1),this.$destroy=S}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{at as A,qt as B,Z as C,pt as D,yt as E,xt as F,gt as G,Pt as H,mt as I,Nt as J,wt as K,$t as L,J as M,bt as N,zt as O,Ft as P,ht as Q,L as R,Kt as S,kt as T,Lt as U,Et as a,nt as b,St as c,Ot as d,vt as e,ut as f,Dt as g,E as h,Jt as i,Bt as j,Ht as k,O as l,At as m,S as n,Mt as o,it as p,Tt as q,jt as r,dt as s,Gt as t,k as u,ct as v,Ct as w,It as x,Rt as y,ft as z};
