(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Ut=!1;var Ot=Array.isArray,An=Array.prototype.indexOf,ct=Array.from,Rn=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,Nt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Fn=Array.prototype,ft=Object.getPrototypeOf,St=Object.isExtensible;function Tn(e){return e()}function rt(e){for(var t=0;t<e.length;t++)e[t]()}function It(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}const P=2,ht=4,Ke=8,le=16,ue=32,xe=64,Xe=128,X=512,T=1024,q=2048,te=4096,H=8192,me=16384,dt=32768,_e=65536,Ct=1<<17,zt=1<<18,Te=1<<19,Vt=1<<20,Ne=32768,it=1<<21,vt=1<<22,de=1<<23,Ue=Symbol("$state"),Dn=Symbol(""),Ce=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function kn(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function jn(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Pn(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function On(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function In(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Bn(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const qn=1,Gn=2,$n=16,Hn=1,Yn=2,j=Symbol(),Wn="http://www.w3.org/1999/xhtml";function Kn(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Xn=!1;function Bt(e){return e===this.v}function Jn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function qt(e){return!Jn(e,this.v)}let Ve=!1,Zn=!1;function Qn(){Ve=!0}let R=null;function Ae(e){R=e}function Gt(e,t=!1,n){R={p:R,i:!1,c:null,e:null,s:e,x:null,l:Ve&&!t?{s:null,u:null,$:[]}:null}}function $t(e){var t=R,n=t.e;if(n!==null){t.e=null;for(var r of n)ln(r)}return t.i=!0,R=t.p,{}}function Be(){return!Ve||R!==null&&R.l===null}let Ee=[];function er(){var e=Ee;Ee=[],rt(e)}function pt(e){if(Ee.length===0){var t=Ee;queueMicrotask(()=>{t===Ee&&er()})}Ee.push(e)}function Ht(e){var t=C;if(t===null)return w.f|=de,e;if((t.f&dt)===0){if((t.f&Xe)===0)throw e;t.b.error(e)}else Re(e,t)}function Re(e,t){for(;t!==null;){if((t.f&Xe)!==0)try{t.b.error(e);return}catch(n){e=n}t=t.parent}throw e}const Ge=new Set;let F=null,$=null,he=[],mt=null,st=!1;class Z{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=0;#r=0;#l=null;#a=[];#o=[];skipped_effects=new Set;is_fork=!1;process(t){he=[],this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of t)this.#i(r,n);this.is_fork||this.#u(),this.#r>0||this.is_fork?(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects)):(F=null,Et(n.render_effects),Et(n.effects),this.#l?.resolve()),$=null}#i(t,n){t.f^=T;for(var r=t.first;r!==null;){var i=r.f,s=(i&(ue|xe))!==0,c=s&&(i&T)!==0,o=c||(i&H)!==0||this.skipped_effects.has(r);if((r.f&Xe)!==0&&r.b?.is_pending()&&(n={parent:n,effect:r,effects:[],render_effects:[],block_effects:[]}),!o&&r.fn!==null){s?r.f^=T:(i&ht)!==0?n.effects.push(r):ke(r)&&((r.f&le)!==0&&n.block_effects.push(r),Fe(r));var f=r.first;if(f!==null){r=f;continue}}var l=r.parent;for(r=r.next;r===null&&l!==null;)l===n.effect&&(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects),n=n.parent),r=l.next,l=l.parent}}#s(t){for(const n of t)((n.f&q)!==0?this.#a:this.#o).push(n),D(n,T)}capture(t,n){this.previous.has(t)||this.previous.set(t,n),(t.f&de)===0&&(this.current.set(t,t.v),$?.set(t,t.v))}activate(){F=this,this.apply()}deactivate(){F=null,$=null}flush(){if(this.activate(),he.length>0){if(tr(),F!==null&&F!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const t of this.#t)t(this);this.#t.clear()}#u(){if(this.#r===0){for(const t of this.#e)t();this.#e.clear()}this.#n===0&&this.#c()}#c(){if(Ge.size>1){this.previous.clear();var t=$,n=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of Ge){if(i===this){n=!1;continue}const s=[];for(const[o,f]of this.current){if(i.current.has(o))if(n&&f!==i.current.get(o))i.current.set(o,f);else continue;s.push(o)}if(s.length===0)continue;const c=[...i.current.keys()].filter(o=>!this.current.has(o));if(c.length>0){const o=new Set,f=new Map;for(const l of s)Yt(l,c,o,f);if(he.length>0){F=i,i.apply();for(const l of he)i.#i(l,r);he=[],i.deactivate()}}}F=null,$=t}this.committed=!0,Ge.delete(this)}increment(t){this.#n+=1,t&&(this.#r+=1)}decrement(t){this.#n-=1,t&&(this.#r-=1),this.revive()}revive(){for(const t of this.#a)D(t,q),ye(t);for(const t of this.#o)D(t,te),ye(t);this.#a=[],this.#o=[],this.flush()}oncommit(t){this.#e.add(t)}ondiscard(t){this.#t.add(t)}settled(){return(this.#l??=It()).promise}static ensure(){if(F===null){const t=F=new Z;Ge.add(F),Z.enqueue(()=>{F===t&&t.flush()})}return F}static enqueue(t){pt(t)}apply(){}}function tr(){var e=ge;st=!0;try{var t=0;for(At(!0);he.length>0;){var n=Z.ensure();if(t++>1e3){var r,i;nr()}n.process(he),ve.clear()}}finally{st=!1,At(e),mt=null}}function nr(){try{Nn()}catch(e){Re(e,mt)}}let ne=null;function Et(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(me|H))===0&&ke(r)&&(ne=new Set,Fe(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null&&r.ac===null?fn(r):r.fn=null),ne?.size>0)){ve.clear();for(const i of ne){if((i.f&(me|H))!==0)continue;const s=[i];let c=i.parent;for(;c!==null;)ne.has(c)&&(ne.delete(c),s.push(c)),c=c.parent;for(let o=s.length-1;o>=0;o--){const f=s[o];(f.f&(me|H))===0&&Fe(f)}}ne.clear()}}ne=null}}function Yt(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&P)!==0?Yt(i,t,n,r):(s&(vt|le))!==0&&(s&q)===0&&Wt(i,t,r)&&(D(i,q),ye(i))}}function Wt(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const i of e.deps){if(t.includes(i))return!0;if((i.f&P)!==0&&Wt(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function ye(e){for(var t=mt=e;t.parent!==null;){t=t.parent;var n=t.f;if(st&&t===C&&(n&le)!==0&&(n&zt)===0)return;if((n&(xe|ue))!==0){if((n&T)===0)return;t.f^=T}}he.push(t)}function rr(e){let t=0,n=we(0),r;return()=>{Je()&&(b(n),_t(()=>(t===0&&(r=Qe(()=>e(()=>Oe(n)))),t+=1,()=>{pt(()=>{t-=1,t===0&&(r?.(),r=void 0,Oe(n))})})))}}var ir=_e|Te|Xe;function sr(e,t,n){new ar(e,t,n)}class ar{parent;#e=!1;#t;#n=null;#r;#l;#a;#o=null;#i=null;#s=null;#u=null;#c=null;#d=0;#f=0;#v=!1;#h=null;#_=rr(()=>(this.#h=we(this.#d),()=>{this.#h=null}));constructor(t,n,r){this.#t=t,this.#r=n,this.#l=r,this.parent=C.b,this.#e=!!this.#r.pending,this.#a=Ze(()=>{C.b=this;{var i=this.#g();try{this.#o=K(()=>r(i))}catch(s){this.error(s)}this.#f>0?this.#m():this.#e=!1}return()=>{this.#c?.remove()}},ir)}#y(){try{this.#o=K(()=>this.#l(this.#t))}catch(t){this.error(t)}this.#e=!1}#w(){const t=this.#r.pending;t&&(this.#i=K(()=>t(this.#t)),Z.enqueue(()=>{var n=this.#g();this.#o=this.#p(()=>(Z.ensure(),K(()=>this.#l(n)))),this.#f>0?this.#m():(Le(this.#i,()=>{this.#i=null}),this.#e=!1)}))}#g(){var t=this.#t;return this.#e&&(this.#c=Me(),this.#t.before(this.#c),t=this.#c),t}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#r.pending}#p(t){var n=C,r=w,i=R;ee(this.#a),B(this.#a),Ae(this.#a.ctx);try{return t()}catch(s){return Ht(s),null}finally{ee(n),B(r),Ae(i)}}#m(){const t=this.#r.pending;this.#o!==null&&(this.#u=document.createDocumentFragment(),this.#u.append(this.#c),vn(this.#o,this.#u)),this.#i===null&&(this.#i=K(()=>t(this.#t)))}#b(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(t);return}this.#f+=t,this.#f===0&&(this.#e=!1,this.#i&&Le(this.#i,()=>{this.#i=null}),this.#u&&(this.#t.before(this.#u),this.#u=null))}update_pending_count(t){this.#b(t),this.#d+=t,this.#h&&Ie(this.#h,this.#d)}get_effect_pending(){return this.#_(),b(this.#h)}error(t){var n=this.#r.onerror;let r=this.#r.failed;if(this.#v||!n&&!r)throw t;this.#o&&(N(this.#o),this.#o=null),this.#i&&(N(this.#i),this.#i=null),this.#s&&(N(this.#s),this.#s=null);var i=!1,s=!1;const c=()=>{if(i){Kn();return}i=!0,s&&Bn(),Z.ensure(),this.#d=0,this.#s!==null&&Le(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#o=this.#p(()=>(this.#v=!1,K(()=>this.#l(this.#t)))),this.#f>0?this.#m():this.#e=!1};var o=w;try{B(null),s=!0,n?.(t,c),s=!1}catch(f){Re(f,this.#a&&this.#a.parent)}finally{B(o)}r&&pt(()=>{this.#s=this.#p(()=>{Z.ensure(),this.#v=!0;try{return K(()=>{r(this.#t,()=>t,()=>c)})}catch(f){return Re(f,this.#a.parent),null}finally{this.#v=!1}})})}}function or(e,t,n,r){const i=Be()?gt:Kt;if(n.length===0&&e.length===0){r(t.map(i));return}var s=F,c=C,o=lr();function f(){Promise.all(n.map(l=>ur(l))).then(l=>{o();try{r([...t.map(i),...l])}catch(d){(c.f&me)===0&&Re(d,c)}s?.deactivate(),He()}).catch(l=>{Re(l,c)})}e.length>0?Promise.all(e).then(()=>{o();try{return f()}finally{s?.deactivate(),He()}}):f()}function lr(){var e=C,t=w,n=R,r=F;return function(s=!0){ee(e),B(t),Ae(n),s&&r?.activate()}}function He(){ee(null),B(null),Ae(null)}function gt(e){var t=P|q,n=w!==null&&(w.f&P)!==0?w:null;return C!==null&&(C.f|=Te),{ctx:R,deps:null,effects:null,equals:Bt,f:t,fn:e,reactions:null,rv:0,v:j,wv:0,parent:n??C,ac:null}}function ur(e,t){let n=C;n===null&&jn();var r=n.b,i=void 0,s=we(j),c=!w,o=new Map;return yr(()=>{var f=It();i=f.promise;try{Promise.resolve(e()).then(f.resolve,f.reject).then(()=>{l===F&&l.committed&&l.deactivate(),He()})}catch(a){f.reject(a),He()}var l=F;if(c){var d=!r.is_pending();r.update_pending_count(1),l.increment(d),o.get(l)?.reject(Ce),o.delete(l),o.set(l,f)}const u=(a,h=void 0)=>{if(l.activate(),h)h!==Ce&&(s.f|=de,Ie(s,h));else{(s.f&de)!==0&&(s.f^=de),Ie(s,a);for(const[v,p]of o){if(o.delete(v),v===l)break;p.reject(Ce)}}c&&(r.update_pending_count(-1),l.decrement(d))};f.promise.then(u,a=>u(null,a||"unknown"))}),pr(()=>{for(const f of o.values())f.reject(Ce)}),new Promise(f=>{function l(d){function u(){d===i?f(s):l(i)}d.then(u,u)}l(i)})}function Kt(e){const t=gt(e);return t.equals=qt,t}function Xt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)N(t[n])}}function cr(e){for(var t=e.parent;t!==null;){if((t.f&P)===0)return t;t=t.parent}return null}function bt(e){var t,n=C;ee(cr(e));try{e.f&=~Ne,Xt(e),t=bn(e)}finally{ee(n)}return t}function Jt(e){var t=bt(e);if(e.equals(t)||(e.v=t,e.wv=mn()),!De)if($!==null)Je()&&$.set(e,e.v);else{var n=(e.f&X)===0?te:T;D(e,n)}}let at=new Set;const ve=new Map;let Zt=!1;function we(e,t){var n={f:0,v:e,reactions:null,equals:Bt,rv:0,wv:0};return n}function fe(e,t){const n=we(e);return Sr(n),n}function ot(e,t=!1,n=!0){const r=we(e);return t||(r.equals=qt),Ve&&n&&R!==null&&R.l!==null&&(R.l.s??=[]).push(r),r}function re(e,t,n=!1){w!==null&&(!Q||(w.f&Ct)!==0)&&Be()&&(w.f&(P|le|vt|Ct))!==0&&!oe?.includes(e)&&Vn();let r=n?je(t):t;return Ie(e,r)}function Ie(e,t){if(!e.equals(t)){var n=e.v;De?ve.set(e,t):ve.set(e,n),e.v=t;var r=Z.ensure();r.capture(e,n),(e.f&P)!==0&&((e.f&q)!==0&&bt(e),D(e,(e.f&X)!==0?T:te)),e.wv=mn(),Qt(e,q),Be()&&C!==null&&(C.f&T)!==0&&(C.f&(ue|xe))===0&&(W===null?Cr([e]):W.push(e)),!r.is_fork&&at.size>0&&!Zt&&fr()}return t}function fr(){Zt=!1;const e=Array.from(at);for(const t of e)(t.f&T)!==0&&D(t,te),ke(t)&&Fe(t);at.clear()}function Oe(e){re(e,e.v+1)}function Qt(e,t){var n=e.reactions;if(n!==null)for(var r=Be(),i=n.length,s=0;s<i;s++){var c=n[s],o=c.f;if(!(!r&&c===C)){var f=(o&q)===0;if(f&&D(c,t),(o&P)!==0){var l=c;$?.delete(l),(o&Ne)===0&&(o&X&&(c.f|=Ne),Qt(l,te))}else f&&((o&le)!==0&&ne!==null&&ne.add(c),ye(c))}}}function je(e){if(typeof e!="object"||e===null||Ue in e)return e;const t=ft(e);if(t!==Mn&&t!==Fn)return e;var n=new Map,r=Ot(e),i=fe(0),s=be,c=o=>{if(be===s)return o();var f=w,l=be;B(null),Mt(s);var d=o();return B(f),Mt(l),d};return r&&n.set("length",fe(e.length)),new Proxy(e,{defineProperty(o,f,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&In();var d=n.get(f);return d===void 0?d=c(()=>{var u=fe(l.value);return n.set(f,u),u}):re(d,l.value,!0),!0},deleteProperty(o,f){var l=n.get(f);if(l===void 0){if(f in o){const d=c(()=>fe(j));n.set(f,d),Oe(i)}}else re(l,j),Oe(i);return!0},get(o,f,l){if(f===Ue)return e;var d=n.get(f),u=f in o;if(d===void 0&&(!u||Pe(o,f)?.writable)&&(d=c(()=>{var h=je(u?o[f]:j),v=fe(h);return v}),n.set(f,d)),d!==void 0){var a=b(d);return a===j?void 0:a}return Reflect.get(o,f,l)},getOwnPropertyDescriptor(o,f){var l=Reflect.getOwnPropertyDescriptor(o,f);if(l&&"value"in l){var d=n.get(f);d&&(l.value=b(d))}else if(l===void 0){var u=n.get(f),a=u?.v;if(u!==void 0&&a!==j)return{enumerable:!0,configurable:!0,value:a,writable:!0}}return l},has(o,f){if(f===Ue)return!0;var l=n.get(f),d=l!==void 0&&l.v!==j||Reflect.has(o,f);if(l!==void 0||C!==null&&(!d||Pe(o,f)?.writable)){l===void 0&&(l=c(()=>{var a=d?je(o[f]):j,h=fe(a);return h}),n.set(f,l));var u=b(l);if(u===j)return!1}return d},set(o,f,l,d){var u=n.get(f),a=f in o;if(r&&f==="length")for(var h=l;h<u.v;h+=1){var v=n.get(h+"");v!==void 0?re(v,j):h in o&&(v=c(()=>fe(j)),n.set(h+"",v))}if(u===void 0)(!a||Pe(o,f)?.writable)&&(u=c(()=>fe(void 0)),re(u,je(l)),n.set(f,u));else{a=u.v!==j;var p=c(()=>je(l));re(u,p)}var g=Reflect.getOwnPropertyDescriptor(o,f);if(g?.set&&g.set.call(d,l),!a){if(r&&typeof f=="string"){var S=n.get("length"),y=Number(f);Number.isInteger(y)&&y>=S.v&&re(S,y+1)}Oe(i)}return!0},ownKeys(o){b(i);var f=Reflect.ownKeys(o).filter(u=>{var a=n.get(u);return a===void 0||a.v!==j});for(var[l,d]of n)d.v!==j&&!(l in o)&&f.push(l);return f},setPrototypeOf(){zn()}})}var Lt,en,tn,nn;function hr(){if(Lt===void 0){Lt=window,en=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;tn=Pe(t,"firstChild").get,nn=Pe(t,"nextSibling").get,St(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),St(n)&&(n.__t=void 0)}}function Me(e=""){return document.createTextNode(e)}function Ye(e){return tn.call(e)}function qe(e){return nn.call(e)}function x(e,t){return Ye(e)}function rn(e,t=!1){{var n=Ye(e);return n instanceof Comment&&n.data===""?qe(n):n}}function A(e,t=1,n=!1){let r=e;for(;t--;)r=qe(r);return r}function dr(e){e.textContent=""}function sn(){return!1}function an(e){var t=w,n=C;B(null),ee(null);try{return e()}finally{B(t),ee(n)}}function on(e){C===null&&(w===null&&On(),Un()),De&&Pn()}function vr(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ce(e,t,n,r=!0){var i=C;i!==null&&(i.f&H)!==0&&(e|=H);var s={ctx:R,deps:null,nodes_start:null,nodes_end:null,f:e|q|X,first:null,fn:t,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Fe(s),s.f|=dt}catch(f){throw N(s),f}else t!==null&&ye(s);if(r){var c=s;if(n&&c.deps===null&&c.teardown===null&&c.nodes_start===null&&c.first===c.last&&(c.f&Te)===0&&(c=c.first,(e&le)!==0&&(e&_e)!==0&&c!==null&&(c.f|=_e)),c!==null&&(c.parent=i,i!==null&&vr(c,i),w!==null&&(w.f&P)!==0&&(e&xe)===0)){var o=w;(o.effects??=[]).push(c)}}return s}function Je(){return w!==null&&!Q}function pr(e){const t=ce(Ke,null,!1);return D(t,T),t.teardown=e,t}function lt(e){on();var t=C.f,n=!w&&(t&ue)!==0&&(t&dt)===0;if(n){var r=R;(r.e??=[]).push(e)}else return ln(e)}function ln(e){return ce(ht|Vt,e,!1)}function mr(e){return on(),ce(Ke|Vt,e,!0)}function gr(e){Z.ensure();const t=ce(xe|Te,e,!0);return(n={})=>new Promise(r=>{n.outro?Le(t,()=>{N(t),r(void 0)}):(N(t),r(void 0))})}function br(e,t){var n=R,r={effect:null,ran:!1,deps:e};n.l.$.push(r),r.effect=_t(()=>{e(),!r.ran&&(r.ran=!0,Qe(t))})}function _r(){var e=R;_t(()=>{for(var t of e.l.$){t.deps();var n=t.effect;(n.f&T)!==0&&D(n,te),ke(n)&&Fe(n),t.ran=!1}})}function yr(e){return ce(vt|Te,e,!0)}function _t(e,t=0){return ce(Ke|t,e,!0)}function ie(e,t=[],n=[],r=[],i=!1){or(r,t,n,s=>{ce(i?ht:Ke,()=>e(...s.map(b)),!0)})}function Ze(e,t=0){var n=ce(le|t,e,!0);return n}function K(e,t=!0){return ce(ue|Te,e,!0,t)}function un(e){var t=e.teardown;if(t!==null){const n=De,r=w;Rt(!0),B(null);try{t.call(null)}finally{Rt(n),B(r)}}}function cn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&an(()=>{i.abort(Ce)});var r=n.next;(n.f&xe)!==0?n.parent=null:N(n,t),n=r}}function wr(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ue)===0&&N(t),t=n}}function N(e,t=!0){var n=!1;(t||(e.f&zt)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(xr(e.nodes_start,e.nodes_end),n=!0),cn(e,t&&!n),We(e,0),D(e,me);var r=e.transitions;if(r!==null)for(const s of r)s.stop();un(e);var i=e.parent;i!==null&&i.first!==null&&fn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function xr(e,t){for(;e!==null;){var n=e===t?null:qe(e);e.remove(),e=n}}function fn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Le(e,t,n=!0){var r=[];yt(e,r,!0),hn(r,()=>{n&&N(e),t&&t()})}function hn(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var i of e)i.out(r)}else t()}function yt(e,t,n){if((e.f&H)===0){if(e.f^=H,e.transitions!==null)for(const c of e.transitions)(c.is_global||n)&&t.push(c);for(var r=e.first;r!==null;){var i=r.next,s=(r.f&_e)!==0||(r.f&ue)!==0&&(e.f&le)!==0;yt(r,t,s?n:!1),r=i}}}function wt(e){dn(e,!0)}function dn(e,t){if((e.f&H)!==0){e.f^=H,(e.f&T)===0&&(D(e,q),ye(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&_e)!==0||(n.f&ue)!==0;dn(n,i?t:!1),n=r}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}function vn(e,t){for(var n=e.nodes_start,r=e.nodes_end;n!==null;){var i=n===r?null:qe(n);t.append(n),n=i}}let ge=!1;function At(e){ge=e}let De=!1;function Rt(e){De=e}let w=null,Q=!1;function B(e){w=e}let C=null;function ee(e){C=e}let oe=null;function Sr(e){w!==null&&(oe===null?oe=[e]:oe.push(e))}let O=null,G=0,W=null;function Cr(e){W=e}let pn=1,ze=0,be=ze;function Mt(e){be=e}function mn(){return++pn}function ke(e){var t=e.f;if((t&q)!==0)return!0;if(t&P&&(e.f&=~Ne),(t&te)!==0){var n=e.deps;if(n!==null)for(var r=n.length,i=0;i<r;i++){var s=n[i];if(ke(s)&&Jt(s),s.wv>e.wv)return!0}(t&X)!==0&&$===null&&D(e,T)}return!1}function gn(e,t,n=!0){var r=e.reactions;if(r!==null&&!oe?.includes(e))for(var i=0;i<r.length;i++){var s=r[i];(s.f&P)!==0?gn(s,t,!1):t===s&&(n?D(s,q):(s.f&T)!==0&&D(s,te),ye(s))}}function bn(e){var t=O,n=G,r=W,i=w,s=oe,c=R,o=Q,f=be,l=e.f;O=null,G=0,W=null,w=(l&(ue|xe))===0?e:null,oe=null,Ae(e.ctx),Q=!1,be=++ze,e.ac!==null&&(an(()=>{e.ac.abort(Ce)}),e.ac=null);try{e.f|=it;var d=e.fn,u=d(),a=e.deps;if(O!==null){var h;if(We(e,G),a!==null&&G>0)for(a.length=G+O.length,h=0;h<O.length;h++)a[G+h]=O[h];else e.deps=a=O;if(ge&&Je()&&(e.f&X)!==0)for(h=G;h<a.length;h++)(a[h].reactions??=[]).push(e)}else a!==null&&G<a.length&&(We(e,G),a.length=G);if(Be()&&W!==null&&!Q&&a!==null&&(e.f&(P|te|q))===0)for(h=0;h<W.length;h++)gn(W[h],e);return i!==null&&i!==e&&(ze++,W!==null&&(r===null?r=W:r.push(...W))),(e.f&de)!==0&&(e.f^=de),u}catch(v){return Ht(v)}finally{e.f^=it,O=t,G=n,W=r,w=i,oe=s,Ae(c),Q=o,be=f}}function Er(e,t){let n=t.reactions;if(n!==null){var r=An.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}n===null&&(t.f&P)!==0&&(O===null||!O.includes(t))&&(D(t,te),(t.f&X)!==0&&(t.f^=X,t.f&=~Ne),Xt(t),We(t,0))}function We(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Er(e,n[r])}function Fe(e){var t=e.f;if((t&me)===0){D(e,T);var n=C,r=ge;C=e,ge=!0;try{(t&le)!==0?wr(e):cn(e),un(e);var i=bn(e);e.teardown=typeof i=="function"?i:null,e.wv=pn;var s;Ut&&Zn&&(e.f&q)!==0&&e.deps}finally{ge=r,C=n}}}function b(e){var t=e.f,n=(t&P)!==0;if(w!==null&&!Q){var r=C!==null&&(C.f&me)!==0;if(!r&&!oe?.includes(e)){var i=w.deps;if((w.f&it)!==0)e.rv<ze&&(e.rv=ze,O===null&&i!==null&&i[G]===e?G++:O===null?O=[e]:O.includes(e)||O.push(e));else{(w.deps??=[]).push(e);var s=e.reactions;s===null?e.reactions=[w]:s.includes(w)||s.push(w)}}}if(De){if(ve.has(e))return ve.get(e);if(n){var c=e,o=c.v;return((c.f&T)===0&&c.reactions!==null||yn(c))&&(o=bt(c)),ve.set(c,o),o}}else if(n){if(c=e,$?.has(c))return $.get(c);ke(c)&&Jt(c),ge&&Je()&&(c.f&X)===0&&_n(c)}else if($?.has(e))return $.get(e);if((e.f&de)!==0)throw e.v;return e.v}function _n(e){if(e.deps!==null){e.f^=X;for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&P)!==0&&(t.f&X)===0&&_n(t)}}function yn(e){if(e.v===j)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(ve.has(t)||(t.f&P)!==0&&yn(t))return!0;return!1}function Qe(e){var t=Q;try{return Q=!0,e()}finally{Q=t}}const Lr=-7169;function D(e,t){e.f=e.f&Lr|t}function Ar(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ue in e)ut(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Ue in n&&ut(n)}}}function ut(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{ut(e[r],t)}catch{}const n=ft(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Nt(n);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}const Rr=["touchstart","touchmove"];function Mr(e){return Rr.includes(e)}const Fr=new Set,Ft=new Set;let Tt=null;function $e(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],s=i[0]||e.target;Tt=e;var c=0,o=Tt===e&&e.__root;if(o){var f=i.indexOf(o);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var l=i.indexOf(t);if(l===-1)return;f<=l&&(c=f)}if(s=i[c]||e.target,s!==t){Rn(e,"currentTarget",{configurable:!0,get(){return s||n}});var d=w,u=C;B(null),ee(null);try{for(var a,h=[];s!==null;){var v=s.assignedSlot||s.parentNode||s.host||null;try{var p=s["__"+r];p!=null&&(!s.disabled||e.target===s)&&p.call(s,e)}catch(g){a?h.push(g):a=g}if(e.cancelBubble||v===t||v===null)break;s=v}if(a){for(let g of h)queueMicrotask(()=>{throw g});throw a}}finally{e.__root=t,delete e.currentTarget,B(d),ee(u)}}}function Tr(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Dt(e,t){var n=C;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function I(e,t){var n=(t&Hn)!==0,r=(t&Yn)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=Tr(s?e:"<!>"+e),n||(i=Ye(i)));var c=r||en?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=Ye(c),f=c.lastChild;Dt(o,f)}else Dt(c,c);return c}}function U(e,t){e!==null&&e.before(t)}function V(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function Dr(e,t){return kr(e,t)}const Se=new Map;function kr(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:c=!0}){hr();var o=new Set,f=u=>{for(var a=0;a<u.length;a++){var h=u[a];if(!o.has(h)){o.add(h);var v=Mr(h);t.addEventListener(h,$e,{passive:v});var p=Se.get(h);p===void 0?(document.addEventListener(h,$e,{passive:v}),Se.set(h,1)):Se.set(h,p+1)}}};f(ct(Fr)),Ft.add(f);var l=void 0,d=gr(()=>{var u=n??t.appendChild(Me());return sr(u,{pending:()=>{}},a=>{if(s){Gt({});var h=R;h.c=s}i&&(r.$$events=i),l=e(a,r)||{},s&&$t()}),()=>{for(var a of o){t.removeEventListener(a,$e);var h=Se.get(a);--h===0?(document.removeEventListener(a,$e),Se.delete(a)):Se.set(a,h)}Ft.delete(f),u!==n&&u.parentNode?.removeChild(u)}});return jr.set(l,d),l}let jr=new WeakMap;class wn{anchor;#e=new Map;#t=new Map;#n=new Map;#r=!0;constructor(t,n=!0){this.anchor=t,this.#r=n}#l=()=>{var t=F;if(this.#e.has(t)){var n=this.#e.get(t),r=this.#t.get(n);if(r)wt(r);else{var i=this.#n.get(n);i&&(this.#t.set(n,i.effect),this.#n.delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,c]of this.#e){if(this.#e.delete(s),s===t)break;const o=this.#n.get(c);o&&(N(o.effect),this.#n.delete(c))}for(const[s,c]of this.#t){if(s===n)continue;const o=()=>{if(Array.from(this.#e.values()).includes(s)){var l=document.createDocumentFragment();vn(c,l),l.append(Me()),this.#n.set(s,{effect:c,fragment:l})}else N(c);this.#t.delete(s)};this.#r||!r?Le(c,o,!1):o()}}};#a=t=>{this.#e.delete(t);const n=Array.from(this.#e.values());for(const[r,i]of this.#n)n.includes(r)||(N(i.effect),this.#n.delete(r))};ensure(t,n){var r=F,i=sn();if(n&&!this.#t.has(t)&&!this.#n.has(t))if(i){var s=document.createDocumentFragment(),c=Me();s.append(c),this.#n.set(t,{effect:K(()=>n(c)),fragment:s})}else this.#t.set(t,K(()=>n(this.anchor)));if(this.#e.set(r,t),i){for(const[o,f]of this.#t)o===t?r.skipped_effects.delete(f):r.skipped_effects.add(f);for(const[o,f]of this.#n)o===t?r.skipped_effects.delete(f.effect):r.skipped_effects.add(f.effect);r.oncommit(this.#l),r.ondiscard(this.#a)}else this.#l()}}function kt(e,t,n=!1){var r=new wn(e),i=n?_e:0;function s(c,o){r.ensure(c,o)}Ze(()=>{var c=!1;t((o,f=!0)=>{c=!0,s(f,o)}),c||s(!1,null)},i)}function se(e,t){return t}function Pr(e,t,n){for(var r=e.items,i=[],s=t.length,c=0;c<s;c++)yt(t[c].e,i,!0);var o=s>0&&i.length===0&&n!==null;if(o){var f=n.parentNode;dr(f),f.append(n),r.clear(),J(e,t[0].prev,t[s-1].next)}hn(i,()=>{for(var l=0;l<s;l++){var d=t[l];o||(r.delete(d.k),J(e,d.prev,d.next)),N(d.e,!o)}})}function ae(e,t,n,r,i,s=null){var c=e,o={flags:t,items:new Map,first:null};{var f=e;c=f.appendChild(Me())}var l=null,d=!1,u=new Map,a=Kt(()=>{var g=n();return Ot(g)?g:g==null?[]:ct(g)}),h,v;function p(){Ur(v,h,o,u,c,i,t,r,n),s!==null&&(h.length===0?l?wt(l):l=K(()=>s(c)):l!==null&&Le(l,()=>{l=null}))}Ze(()=>{v??=C,h=b(a);var g=h.length;if(!(d&&g===0)){d=g===0;var S,y,_,E;if(sn()){var M=new Set,L=F;for(y=0;y<g;y+=1){_=h[y],E=r(_,y);var k=o.items.get(E)??u.get(E);k?xn(k,_,y):(S=Sn(null,o,null,null,_,E,y,i,t,n,!0),u.set(E,S)),M.add(E)}for(const[Y,z]of o.items)M.has(Y)||L.skipped_effects.add(z.e);L.oncommit(p)}else p();b(a)}})}function Ur(e,t,n,r,i,s,c,o,f){var l=t.length,d=n.items,u=n.first,a=u,h,v=null,p=[],g=[],S,y,_,E;for(E=0;E<l;E+=1){if(S=t[E],y=o(S,E),_=d.get(y),_===void 0){var M=r.get(y);if(M!==void 0){r.delete(y),d.set(y,M);var L=v?v.next:a;J(n,v,M),J(n,M,L),nt(M,L,i),v=M}else{var k=a?a.e.nodes_start:i;v=Sn(k,n,v,v===null?n.first:v.next,S,y,E,s,c,f)}d.set(y,v),p=[],g=[],a=v.next;continue}if(xn(_,S,E),(_.e.f&H)!==0&&wt(_.e),_!==a){if(h!==void 0&&h.has(_)){if(p.length<g.length){var Y=g[0],z;v=Y.prev;var xt=p[0],et=p[p.length-1];for(z=0;z<p.length;z+=1)nt(p[z],Y,i);for(z=0;z<g.length;z+=1)h.delete(g[z]);J(n,xt.prev,et.next),J(n,v,xt),J(n,et,Y),a=Y,v=et,E-=1,p=[],g=[]}else h.delete(_),nt(_,a,i),J(n,_.prev,_.next),J(n,_,v===null?n.first:v.next),J(n,v,_),v=_;continue}for(p=[],g=[];a!==null&&a.k!==y;)(a.e.f&H)===0&&(h??=new Set).add(a),g.push(a),a=a.next;if(a===null)continue;_=a}p.push(_),v=_,a=_.next}if(a!==null||h!==void 0){for(var tt=h===void 0?[]:ct(h);a!==null;)(a.e.f&H)===0&&tt.push(a),a=a.next;var Cn=tt.length;if(Cn>0){var En=l===0?i:null;Pr(n,tt,En)}}e.first=n.first&&n.first.e,e.last=v&&v.e;for(var Ln of r.values())N(Ln.e);r.clear()}function xn(e,t,n,r){Ie(e.v,t),e.i=n}function Sn(e,t,n,r,i,s,c,o,f,l,d){var u=(f&qn)!==0,a=(f&$n)===0,h=u?a?ot(i,!1,!1):we(i):i,v=(f&Gn)===0?c:we(c),p={i:v,v:h,k:s,a:null,e:null,prev:n,next:r};try{if(e===null){var g=document.createDocumentFragment();g.append(e=Me())}return p.e=K(()=>o(e,h,v,l),Xn),p.e.prev=n&&n.e,p.e.next=r&&r.e,n===null?d||(t.first=p):(n.next=p,n.e.next=p.e),r!==null&&(r.prev=p,r.e.prev=p.e),p}finally{}}function nt(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,i=t?t.e.nodes_start:n,s=e.e.nodes_start;s!==null&&s!==r;){var c=qe(s);i.before(s),s=c}}function J(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Or(e,t,n){var r=new wn(e);Ze(()=>{var i=t()??null;r.ensure(i,i&&(s=>n(s,i)))},_e)}const Nr=Symbol("is custom element"),Ir=Symbol("is html");function pe(e,t,n,r){var i=zr(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[Dn]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Vr(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function zr(e){return e.__attributes??={[Nr]:e.nodeName.includes("-"),[Ir]:e.namespaceURI===Wn}}var jt=new Map;function Vr(e){var t=e.getAttribute("is")||e.nodeName,n=jt.get(t);if(n)return n;jt.set(t,n=[]);for(var r,i=e,s=Element.prototype;s!==i;){r=Nt(i);for(var c in r)r[c].set&&n.push(c);i=ft(i)}return n}function Br(e=!1){const t=R,n=t.l.u;if(!n)return;let r=()=>Ar(t.s);if(e){let i=0,s={};const c=gt(()=>{let o=!1;const f=t.s;for(const l in f)f[l]!==s[l]&&(s[l]=f[l],o=!0);return o&&i++,i});r=()=>b(c)}n.b.length&&mr(()=>{Pt(t,r),rt(n.b)}),lt(()=>{const i=Qe(()=>n.m.map(Tn));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&lt(()=>{Pt(t,r),rt(n.a)})}function Pt(e,t){if(e.l.s)for(const n of e.l.s)b(n);t()}function qr(e){R===null&&kn(),Ve&&R.l!==null?Gr(R).m.push(e):lt(()=>{const t=Qe(e);if(typeof t=="function")return t})}function Gr(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const $r="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add($r);Qn();var Hr=I('<a target="_blank" rel="noopener noreferrer" class="social-link"><span class="social-icon"> </span> </a>'),Yr=I('<span class="tech-tag"> </span>'),Wr=I('<a target="_blank" rel="noopener noreferrer" class="project-card"><div class="project-image"><img/></div> <div class="project-info"><h3 class="project-name"> </h3> <div class="project-tech"></div> <p class="project-description"> </p></div></a>'),Kr=I('<section class="hero-section"><nav class="side-nav"><a href="#/contact">Contact</a></nav> <div class="hero-content"><h1 class="hero__name">Simon Ingemann Axelsen</h1> <p class="hero__tagline">Developer | Student</p> <p class="hero__bio">I build interactive experiences across web and immersive tech, focused on clean UX and thoughtful engineering.</p> <p class="hero__location">📍 Copenhagen</p> <div class="hero__links"></div></div></section> <section class="projects-section"><h2 class="projects-title">Projects</h2> <div class="projects-grid"></div></section>',1);function Xr(e){const t=[{name:"GitHub",url:"https://github.com/gulfurs",icon:"⌘"},{name:"LinkedIn",url:"https://www.linkedin.com/in/simon-ingemann-axelsen-32661a1b2/",icon:"◉"},{name:"Email",url:"mailto:simon@example.com",icon:"✉"}],n=[{name:"P7 Project",description:"AI-driven semester project exploring conversational agents with voice synthesis.",tech:["Unity","LLM","Ollama"],image:"/images/p7-project.png",github:"https://github.com/gulfurs/P7_Project"},{name:"P6 Project",description:"Game development project focused on interactive experiences.",tech:["Unity"],image:"/images/p6-project.png",github:"https://github.com/gulfurs/P6-Project"},{name:"P5 Project",description:"Virtual reality semester project with immersive interactions.",tech:["Unity","VR"],image:"/images/p5-project.png",github:"https://github.com/gulfurs/P5-Project"},{name:"VR Jam",description:"VR game jam project built in a limited timeframe.",tech:["Unity","VR"],image:"/images/vr-jam.png",github:"https://github.com/gulfurs/VRJam"},{name:"Web Mini-Project",description:"Full-stack web application with React frontend and MongoDB backend.",tech:["React","MongoDB"],image:"/images/web-mini.png",github:"https://github.com/gulfurs/Sem6_Web_mini-project"},{name:"Hybrid N-Back",description:"Mobile & wearable computing project combining Flutter and Arduino.",tech:["Flutter","Arduino"],image:"/images/nback.png",github:"https://github.com/gulfurs/MWC-Hybrid-N-Back"},{name:"Pentomino Tetris",description:"Tetris variant using pentomino pieces with reinforcement learning AI.",tech:["Python","Reinforcement Learning"],image:"/images/pentomino.png",github:"https://github.com/gulfurs/pentomino_Tetris"},{name:"Best Flag Guesser",description:"Interactive flag guessing game built with React.",tech:["React"],image:"/images/flag-guesser.png",github:"https://github.com/gulfurs/Best_Flag_Guesser"}];var r=Kr(),i=rn(r),s=A(x(i),2),c=A(x(s),8);ae(c,5,()=>t,se,(l,d)=>{var u=Hr(),a=x(u),h=x(a),v=A(a);ie(()=>{pe(u,"href",b(d).url),V(h,b(d).icon),V(v,` ${b(d).name??""}`)}),U(l,u)});var o=A(i,2),f=A(x(o),2);ae(f,5,()=>n,se,(l,d)=>{var u=Wr(),a=x(u),h=x(a),v=A(a,2),p=x(v),g=x(p),S=A(p,2);ae(S,5,()=>b(d).tech,se,(E,M)=>{var L=Yr(),k=x(L);ie(()=>V(k,b(M))),U(E,L)});var y=A(S,2),_=x(y);ie(()=>{pe(u,"href",b(d).github),pe(h,"src",b(d).image),pe(h,"alt",b(d).name),V(g,b(d).name),V(_,b(d).description)}),U(l,u)}),U(e,r)}var Jr=I('<span class="badge">+ Report</span>'),Zr=I('<span class="tech-tag"> </span>'),Qr=I('<a target="_blank" rel="noopener noreferrer" class="project-card project-card--large"><div class="project-card__header"><h4> </h4> <!></div> <p> </p> <div class="project-card__tech"></div></a>'),ei=I('<span class="badge">+ Report</span>'),ti=I('<span class="tech-tag"> </span>'),ni=I('<a target="_blank" rel="noopener noreferrer" class="project-card"><div class="project-card__header"><h4> </h4> <!></div> <p> </p> <div class="project-card__tech"></div></a>'),ri=I('<span class="tech-tag"> </span>'),ii=I('<a target="_blank" rel="noopener noreferrer" class="project-card"><div class="project-card__header"><h4> </h4></div> <p> </p> <div class="project-card__tech"></div></a>'),si=I('<section class="projects-page"><a href="#/" class="back-link">← Back</a> <h2 class="page-title">Projects</h2> <div class="projects-section"><h3 class="section-title">Semester Projects</h3> <div class="projects-grid"></div></div> <div class="projects-section"><h3 class="section-title">Mini Projects</h3> <div class="projects-grid"></div></div> <div class="projects-section"><h3 class="section-title">Personal Projects</h3> <div class="projects-grid"></div></div></section>');function ai(e){const t=[{name:"P7 Project",description:"Semester 7 project",tech:["Unity","Ollama","TTS"],github:"https://github.com/gulfurs/P7_Project",hasReport:!0},{name:"P6 Project",description:"Semester 6 project",tech:["Unity"],github:"https://github.com/gulfurs/P6-Project",hasReport:!0},{name:"P5 Project",description:"Semester 5 project",tech:["Unity","VR"],github:"https://github.com/gulfurs/P5-Project",hasReport:!0}],n=[{name:"VR Jam",description:"VR game jam project",tech:["Unity","VR"],github:"https://github.com/gulfurs/VRJam",hasReport:!0},{name:"Web Mini-Project",description:"Semester 6 web development mini-project",tech:["React","MongoDB"],github:"https://github.com/gulfurs/Sem6_Web_mini-project",hasReport:!0},{name:"Hybrid N-Back",description:"Mobile & Wearable Computing project",tech:["Flutter","Arduino"],github:"https://github.com/gulfurs/MWC-Hybrid-N-Back",hasReport:!0},{name:"Pentomino Tetris",description:"Tetris variant with pentomino pieces",tech:["Python","Reinforcement Learning"],github:"https://github.com/gulfurs/pentomino_Tetris",hasReport:!0}],r=[{name:"Best Flag Guesser",description:"Flag guessing game",tech:["React"],github:"https://github.com/gulfurs/Best_Flag_Guesser",hasReport:!1}];var i=si(),s=A(x(i),4),c=A(x(s),2);ae(c,5,()=>t,se,(u,a)=>{var h=Qr(),v=x(h),p=x(v),g=x(p),S=A(p,2);{var y=L=>{var k=Jr();U(L,k)};kt(S,L=>{b(a).hasReport&&L(y)})}var _=A(v,2),E=x(_),M=A(_,2);ae(M,5,()=>b(a).tech,se,(L,k)=>{var Y=Zr(),z=x(Y);ie(()=>V(z,b(k))),U(L,Y)}),ie(()=>{pe(h,"href",b(a).github),V(g,b(a).name),V(E,b(a).description)}),U(u,h)});var o=A(s,2),f=A(x(o),2);ae(f,5,()=>n,se,(u,a)=>{var h=ni(),v=x(h),p=x(v),g=x(p),S=A(p,2);{var y=L=>{var k=ei();U(L,k)};kt(S,L=>{b(a).hasReport&&L(y)})}var _=A(v,2),E=x(_),M=A(_,2);ae(M,5,()=>b(a).tech,se,(L,k)=>{var Y=ti(),z=x(Y);ie(()=>V(z,b(k))),U(L,Y)}),ie(()=>{pe(h,"href",b(a).github),V(g,b(a).name),V(E,b(a).description)}),U(u,h)});var l=A(o,2),d=A(x(l),2);ae(d,5,()=>r,se,(u,a)=>{var h=ii(),v=x(h),p=x(v),g=x(p),S=A(v,2),y=x(S),_=A(S,2);ae(_,5,()=>b(a).tech,se,(E,M)=>{var L=ri(),k=x(L);ie(()=>V(k,b(M))),U(E,L)}),ie(()=>{pe(h,"href",b(a).github),V(g,b(a).name),V(y,b(a).description)}),U(u,h)}),U(e,i)}var oi=I('<section class="contact-page"><a href="#/" class="back-link">← Back</a> <h2 class="page-title">Get in Touch</h2> <div class="contact-grid"><div class="contact-info"><p class="location">📍 Copenhagen, Denmark</p> <p>Feel free to reach out</p> <p class="email"><a href="mailto:simonAxelsen@outlook.dk">simonAxelsen@outlook.dk</a></p> <div class="contact-links"><a href="https://github.com/gulfurs" target="_blank" rel="noopener noreferrer">GitHub</a> <a href="https://www.linkedin.com/in/simon-ingemann-axelsen-32661a1b2/" target="_blank" rel="noopener noreferrer">LinkedIn</a> <a href="/Simon_Ingemann_Axelsen_CV.pdf" download="Simon_Ingemann_Axelsen_CV.pdf">Download CV</a></div></div> <form class="contact-form" action="https://formspree.io/f/mjggvywk" method="POST"><input type="text" name="name" placeholder="Your Name" required/> <input type="email" name="email" placeholder="Your Email" required/> <textarea name="message" placeholder="Your Message" rows="5" required></textarea> <button type="submit">Send Message</button></form></div></section>');function li(e){var t=oi();U(e,t)}function ui(e){return[(e>>16&255)/255,(e>>8&255)/255,(255&e)/255]}["SCREEN","LINEAR_LIGHT"].reduce((e,t,n)=>Object.assign(e,{[t]:n}),{});class ci{constructor(t,n,r,i=!1){const s=this,c=document.location.search.toLowerCase().indexOf("debug=webgl")!==-1;s.canvas=t,s.gl=s.canvas.getContext("webgl",{antialias:!0}),s.meshes=[];const o=s.gl;n&&r&&this.setSize(n,r),s.lastDebugMsg,s.debug=i&&c?function(l){const d=new Date;d-s.lastDebugMsg>1e3&&console.log("---"),console.log(d.toLocaleTimeString()+Array(Math.max(0,32-l.length)).join(" ")+l+": ",...Array.from(arguments).slice(1)),s.lastDebugMsg=d}:()=>{},Object.defineProperties(s,{Material:{enumerable:!1,value:class{constructor(l,d,u={}){const a=this;function h(g,S){const y=o.createShader(g);return o.shaderSource(y,S),o.compileShader(y),o.getShaderParameter(y,o.COMPILE_STATUS)||console.error(o.getShaderInfoLog(y)),s.debug("Material.compileShaderSource",{source:S}),y}function v(g,S){return Object.entries(g).map(([y,_])=>_.getDeclaration(y,S)).join(`
`)}a.uniforms=u,a.uniformInstances=[];const p=`
              precision highp float;
            `;a.vertexSource=`
              ${p}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${v(s.commonUniforms,"vertex")}
              ${v(u,"vertex")}
              ${l}
            `,a.Source=`
              ${p}
              ${v(s.commonUniforms,"fragment")}
              ${v(u,"fragment")}
              ${d}
            `,a.vertexShader=h(o.VERTEX_SHADER,a.vertexSource),a.fragmentShader=h(o.FRAGMENT_SHADER,a.Source),a.program=o.createProgram(),o.attachShader(a.program,a.vertexShader),o.attachShader(a.program,a.fragmentShader),o.linkProgram(a.program),o.getProgramParameter(a.program,o.LINK_STATUS)||console.error(o.getProgramInfoLog(a.program)),o.useProgram(a.program),a.attachUniforms(void 0,s.commonUniforms),a.attachUniforms(void 0,a.uniforms)}attachUniforms(l,d){const u=this;l===void 0?Object.entries(d).forEach(([a,h])=>{u.attachUniforms(a,h)}):d.type=="array"?d.value.forEach((a,h)=>u.attachUniforms(`${l}[${h}]`,a)):d.type=="struct"?Object.entries(d.value).forEach(([a,h])=>u.attachUniforms(`${l}.${a}`,h)):(s.debug("Material.attachUniforms",{name:l,uniform:d}),u.uniformInstances.push({uniform:d,location:o.getUniformLocation(u.program,l)}))}}},Uniform:{enumerable:!1,value:class{constructor(l){this.type="float",Object.assign(this,l),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(l){this.value!==void 0&&o[`uniform${this.typeFn}`](l,this.typeFn.indexOf("Matrix")===0?this.transpose:this.value,this.typeFn.indexOf("Matrix")===0?this.value:null)}getDeclaration(l,d,u){const a=this;if(a.excludeFrom!==d){if(a.type==="array")return a.value[0].getDeclaration(l,d,a.value.length)+`
const int ${l}_length = ${a.value.length};`;if(a.type==="struct"){let h=l.replace("u_","");return h=h.charAt(0).toUpperCase()+h.slice(1),`uniform struct ${h} 
                                    {
`+Object.entries(a.value).map(([v,p])=>p.getDeclaration(v,d).replace(/^uniform/,"")).join("")+`
} ${l}${u>0?`[${u}]`:""};`}return`uniform ${a.type} ${l}${u>0?`[${u}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(l,d,u,a,h){o.createBuffer(),this.attributes={position:new s.Attribute({target:o.ARRAY_BUFFER,size:3}),uv:new s.Attribute({target:o.ARRAY_BUFFER,size:2}),uvNorm:new s.Attribute({target:o.ARRAY_BUFFER,size:2}),index:new s.Attribute({target:o.ELEMENT_ARRAY_BUFFER,size:3,type:o.UNSIGNED_SHORT})},this.setTopology(u,a),this.setSize(l,d,h)}setTopology(l=1,d=1){const u=this;u.xSegCount=l,u.ySegCount=d,u.vertexCount=(u.xSegCount+1)*(u.ySegCount+1),u.quadCount=u.xSegCount*u.ySegCount*2,u.attributes.uv.values=new Float32Array(2*u.vertexCount),u.attributes.uvNorm.values=new Float32Array(2*u.vertexCount),u.attributes.index.values=new Uint16Array(3*u.quadCount);for(let a=0;a<=u.ySegCount;a++)for(let h=0;h<=u.xSegCount;h++){const v=a*(u.xSegCount+1)+h;if(u.attributes.uv.values[2*v]=h/u.xSegCount,u.attributes.uv.values[2*v+1]=1-a/u.ySegCount,u.attributes.uvNorm.values[2*v]=h/u.xSegCount*2-1,u.attributes.uvNorm.values[2*v+1]=1-a/u.ySegCount*2,h<u.xSegCount&&a<u.ySegCount){const p=a*u.xSegCount+h;u.attributes.index.values[6*p]=v,u.attributes.index.values[6*p+1]=v+1+u.xSegCount,u.attributes.index.values[6*p+2]=v+1,u.attributes.index.values[6*p+3]=v+1,u.attributes.index.values[6*p+4]=v+1+u.xSegCount,u.attributes.index.values[6*p+5]=v+2+u.xSegCount}}u.attributes.uv.update(),u.attributes.uvNorm.update(),u.attributes.index.update(),s.debug("Geometry.setTopology",{uv:u.attributes.uv,uvNorm:u.attributes.uvNorm,index:u.attributes.index})}setSize(l=1,d=1,u="xz"){const a=this;a.width=l,a.height=d,a.orientation=u,a.attributes.position.values&&a.attributes.position.values.length===3*a.vertexCount||(a.attributes.position.values=new Float32Array(3*a.vertexCount));const h=l/-2,v=d/-2,p=l/a.xSegCount,g=d/a.ySegCount;for(let S=0;S<=a.ySegCount;S++){const y=v+S*g;for(let _=0;_<=a.xSegCount;_++){const E=h+_*p,M=S*(a.xSegCount+1)+_;a.attributes.position.values[3*M+"xyz".indexOf(u[0])]=E,a.attributes.position.values[3*M+"xyz".indexOf(u[1])]=-y}}a.attributes.position.update(),s.debug("Geometry.setSize",{position:a.attributes.position})}}},Mesh:{enumerable:!1,value:class{constructor(l,d){const u=this;u.geometry=l,u.material=d,u.wireframe=!1,u.attributeInstances=[],Object.entries(u.geometry.attributes).forEach(([a,h])=>{u.attributeInstances.push({attribute:h,location:h.attach(a,u.material.program)})}),s.meshes.push(u),s.debug("Mesh.constructor",{mesh:u})}draw(){o.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:l,location:d})=>l.update(d)),this.attributeInstances.forEach(({attribute:l,location:d})=>l.use(d)),o.drawElements(this.wireframe?o.LINES:o.TRIANGLES,this.geometry.attributes.index.values.length,o.UNSIGNED_SHORT,0)}remove(){s.meshes=s.meshes.filter(l=>l!=this)}}},Attribute:{enumerable:!1,value:class{constructor(l){this.type=o.FLOAT,this.normalized=!1,this.buffer=o.createBuffer(),Object.assign(this,l),this.update()}update(){this.values!==void 0&&(o.bindBuffer(this.target,this.buffer),o.bufferData(this.target,this.values,o.STATIC_DRAW))}attach(l,d){const u=o.getAttribLocation(d,l);return this.target===o.ARRAY_BUFFER&&(o.enableVertexAttribArray(u),o.vertexAttribPointer(u,this.size,this.type,this.normalized,0,0)),u}use(l){o.bindBuffer(this.target,this.buffer),this.target===o.ARRAY_BUFFER&&(o.enableVertexAttribArray(l),o.vertexAttribPointer(l,this.size,this.type,this.normalized,0,0))}}}});const f=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];s.commonUniforms={projectionMatrix:new s.Uniform({type:"mat4",value:f}),modelViewMatrix:new s.Uniform({type:"mat4",value:f}),resolution:new s.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new s.Uniform({type:"float",value:1})}}setSize(t=640,n=480){this.width=t,this.height=n,this.canvas.width=t,this.canvas.height=n,this.gl.viewport(0,0,t,n),this.commonUniforms.resolution.value=[t,n],this.commonUniforms.aspectRatio.value=t/n,this.debug("MiniGL.setSize",{width:t,height:n})}setOrthographicCamera(t=0,n=0,r=0,i=-2e3,s=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(i-s),0,t,n,r,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(t=>t.draw())}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class fi{constructor(...t){m(this,"el",void 0),m(this,"cssVarRetries",0),m(this,"maxCssVarRetries",200),m(this,"angle",0),m(this,"isLoadedClass",!1),m(this,"isScrolling",!1),m(this,"scrollingTimeout",void 0),m(this,"scrollingRefreshDelay",200),m(this,"isIntersecting",!1),m(this,"shaderFiles",void 0),m(this,"vertexShader",void 0),m(this,"sectionColors",void 0),m(this,"computedCanvasStyle",void 0),m(this,"conf",void 0),m(this,"uniforms",void 0),m(this,"t",1253106),m(this,"last",0),m(this,"width",void 0),m(this,"minWidth",1111),m(this,"height",600),m(this,"xSegCount",void 0),m(this,"ySegCount",void 0),m(this,"mesh",void 0),m(this,"material",void 0),m(this,"geometry",void 0),m(this,"minigl",void 0),m(this,"scrollObserver",void 0),m(this,"amp",320),m(this,"seed",5),m(this,"freqX",14e-5),m(this,"freqY",29e-5),m(this,"freqDelta",1e-5),m(this,"activeColors",[1,1,1,1]),m(this,"isMetaKey",!1),m(this,"isGradientLegendVisible",!1),m(this,"isMouseDown",!1),m(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),m(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),m(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),m(this,"handleMouseDown",n=>{this.isGradientLegendVisible&&(this.isMetaKey=n.metaKey,this.isMouseDown=!0,this.conf.playing===!1&&requestAnimationFrame(this.animate))}),m(this,"handleMouseUp",()=>{this.isMouseDown=!1}),m(this,"animate",n=>{if(!this.shouldSkipFrame(n)||this.isMouseDown){if(this.t+=Math.min(n-this.last,1e3/15),this.last=n,this.isMouseDown){let r=160;this.isMetaKey&&(r=-160),this.t+=r}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(this.last!==0&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),m(this,"addIsLoadedClass",()=>{!this.isLoadedClass&&(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{this.el.parentElement.classList.add("isLoaded")},3e3))}),m(this,"pause",()=>{this.conf.playing=!1}),m(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),m(this,"initGradient",n=>(this.el=document.querySelector(n),this.connect(),this))}async connect(){this.shaderFiles={vertex:`varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;

  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;

  vec2 st = 1. - uvNorm.xy;

  //
  // Tilting the plane
  //

  // Front-to-back tilt
  float tilt = resolution.y / 2.0 * uvNorm.y;

  // Left-to-right angle
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;

  // Up-down shift to offset incline
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

  //
  // Vertex noise
  //

  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;

  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);

  // Clamp to 0
  noise = max(0.0, noise);

  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  //
  // Vertex color, to be passed to fragment shader
  //

  if (u_active_colors[0] == 1.) {
    v_color = u_baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.) {
      WaveLayers layer = u_waveLayers[i];

      float noise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );

      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));
    }
  }

  //
  // Finish
  //

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,noise:`//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}`,blend:`//
// https://github.com/jamieowen/glsl-blend
//

// Normal

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

// Screen

float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

// Multiply

vec3 blendMultiply(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

// Overlay

float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

// Hard light

vec3 blendHardLight(vec3 base, vec3 blend) {
	return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
	return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Soft light

float blendSoftLight(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Color dodge

float blendColorDodge(float base, float blend) {
	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Color burn

float blendColorBurn(float base, float blend) {
	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
	return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Vivid Light

float blendVividLight(float base, float blend) {
	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight(vec3 base, vec3 blend) {
	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
	return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Lighten

float blendLighten(float base, float blend) {
	return max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear burn

float blendLinearBurn(float base, float blend) {
	// Note : Same implementation as BlendSubtractf
	return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendSubtract
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear dodge

float blendLinearDodge(float base, float blend) {
	// Note : Same implementation as BlendAddf
	return min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendAdd
	return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear light

float blendLinearLight(float base, float blend) {
	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}`,fragment:`varying vec3 v_color;

void main() {
  vec3 color = v_color;
  if (u_darken_top == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
  }
  gl_FragColor = vec4(color, 1.0);
}`},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new ci(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let t=1;t<this.sectionColors.length;t+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[t],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+t/this.sectionColors.length,3+t/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*t}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*t}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*t}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*t})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(t){return!!window.document.hidden||!this.conf.playing||parseInt(t,10)%2==0||void 0}updateFrequency(t){this.freqX+=t,this.freqY+=t}toggleColor(t){this.activeColors[t]=this.activeColors[t]===0?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")!==-1)this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(t=>{let n=this.computedCanvasStyle.getPropertyValue(t).trim();return n.length===4&&(n=`#${n.substr(1).split("").map(i=>i+i).join("")}`),n&&`0x${n.substr(1)}`}).filter(Boolean).map(ui)}}var hi=I('<canvas id="gradient-canvas" data-transition-in=""></canvas> <div class="layout"><!></div>',1);function di(e,t){Gt(t,!1);const n=ot(),r={home:Xr,projects:ai,contact:li},i=()=>{if(typeof window>"u")return"home";const d=window.location.hash.replace(/^#\/?/,"");return Object.keys(r).includes(d)?d:"home"};let s=ot("home");const c=()=>{re(s,i())};qr(()=>{c(),window.addEventListener("hashchange",c);try{new fi().initGradient("#gradient-canvas")}catch(d){console.warn("Gradient init failed:",d)}return()=>window.removeEventListener("hashchange",c)}),br(()=>b(s),()=>{re(n,r[b(s)])}),_r(),Br();var o=hi(),f=A(rn(o),2),l=x(f);Or(l,()=>b(n),(d,u)=>{u(d,{})}),U(e,o),$t()}Dr(di,{target:document.getElementById("app")});
