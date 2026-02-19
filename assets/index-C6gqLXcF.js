(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Nt=!1;var Ot=Array.isArray,An=Array.prototype.indexOf,ut=Array.from,Mn=Object.defineProperty,je=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,Rn=Object.prototype,Tn=Array.prototype,ft=Object.getPrototypeOf,St=Object.isExtensible;function Fn(e){return e()}function it(e){for(var t=0;t<e.length;t++)e[t]()}function It(){var e,t,n=new Promise((i,r)=>{e=i,t=r});return{promise:n,resolve:e,reject:t}}const j=2,ht=4,Ke=8,le=16,ce=32,xe=64,Xe=128,X=512,F=1024,q=2048,te=4096,H=8192,me=16384,dt=32768,be=65536,Ct=1<<17,zt=1<<18,Fe=1<<19,Bt=1<<20,Ue=32768,rt=1<<21,vt=1<<22,de=1<<23,Ne=Symbol("$state"),Dn=Symbol(""),Ce=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function kn(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Pn(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function jn(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Nn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function On(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function In(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Bn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Vn(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const qn=1,Gn=2,$n=16,Hn=1,Yn=2,P=Symbol(),Wn="http://www.w3.org/1999/xhtml";function Kn(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Xn=!1;function Vt(e){return e===this.v}function Jn(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function qt(e){return!Jn(e,this.v)}let Be=!1,Qn=!1;function Zn(){Be=!0}let M=null;function Ae(e){M=e}function Gt(e,t=!1,n){M={p:M,i:!1,c:null,e:null,s:e,x:null,l:Be&&!t?{s:null,u:null,$:[]}:null}}function $t(e){var t=M,n=t.e;if(n!==null){t.e=null;for(var i of n)ln(i)}return t.i=!0,M=t.p,{}}function Ve(){return!Be||M!==null&&M.l===null}let Ee=[];function ei(){var e=Ee;Ee=[],it(e)}function pt(e){if(Ee.length===0){var t=Ee;queueMicrotask(()=>{t===Ee&&ei()})}Ee.push(e)}function Ht(e){var t=C;if(t===null)return w.f|=de,e;if((t.f&dt)===0){if((t.f&Xe)===0)throw e;t.b.error(e)}else Me(e,t)}function Me(e,t){for(;t!==null;){if((t.f&Xe)!==0)try{t.b.error(e);return}catch(n){e=n}t=t.parent}throw e}const Ge=new Set;let T=null,$=null,he=[],mt=null,st=!1;class Q{committed=!1;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=0;#i=0;#l=null;#a=[];#o=[];skipped_effects=new Set;is_fork=!1;process(t){he=[],this.apply();var n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const i of t)this.#r(i,n);this.is_fork||this.#c(),this.#i>0||this.is_fork?(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects)):(T=null,Et(n.render_effects),Et(n.effects),this.#l?.resolve()),$=null}#r(t,n){t.f^=F;for(var i=t.first;i!==null;){var r=i.f,s=(r&(ce|xe))!==0,u=s&&(r&F)!==0,o=u||(r&H)!==0||this.skipped_effects.has(i);if((i.f&Xe)!==0&&i.b?.is_pending()&&(n={parent:n,effect:i,effects:[],render_effects:[],block_effects:[]}),!o&&i.fn!==null){s?i.f^=F:(r&ht)!==0?n.effects.push(i):ke(i)&&((i.f&le)!==0&&n.block_effects.push(i),Te(i));var f=i.first;if(f!==null){i=f;continue}}var l=i.parent;for(i=i.next;i===null&&l!==null;)l===n.effect&&(this.#s(n.effects),this.#s(n.render_effects),this.#s(n.block_effects),n=n.parent),i=l.next,l=l.parent}}#s(t){for(const n of t)((n.f&q)!==0?this.#a:this.#o).push(n),D(n,F)}capture(t,n){this.previous.has(t)||this.previous.set(t,n),(t.f&de)===0&&(this.current.set(t,t.v),$?.set(t,t.v))}activate(){T=this,this.apply()}deactivate(){T=null,$=null}flush(){if(this.activate(),he.length>0){if(ti(),T!==null&&T!==this)return}else this.#n===0&&this.process([]);this.deactivate()}discard(){for(const t of this.#t)t(this);this.#t.clear()}#c(){if(this.#i===0){for(const t of this.#e)t();this.#e.clear()}this.#n===0&&this.#u()}#u(){if(Ge.size>1){this.previous.clear();var t=$,n=!0,i={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(const r of Ge){if(r===this){n=!1;continue}const s=[];for(const[o,f]of this.current){if(r.current.has(o))if(n&&f!==r.current.get(o))r.current.set(o,f);else continue;s.push(o)}if(s.length===0)continue;const u=[...r.current.keys()].filter(o=>!this.current.has(o));if(u.length>0){const o=new Set,f=new Map;for(const l of s)Yt(l,u,o,f);if(he.length>0){T=r,r.apply();for(const l of he)r.#r(l,i);he=[],r.deactivate()}}}T=null,$=t}this.committed=!0,Ge.delete(this)}increment(t){this.#n+=1,t&&(this.#i+=1)}decrement(t){this.#n-=1,t&&(this.#i-=1),this.revive()}revive(){for(const t of this.#a)D(t,q),ye(t);for(const t of this.#o)D(t,te),ye(t);this.#a=[],this.#o=[],this.flush()}oncommit(t){this.#e.add(t)}ondiscard(t){this.#t.add(t)}settled(){return(this.#l??=It()).promise}static ensure(){if(T===null){const t=T=new Q;Ge.add(T),Q.enqueue(()=>{T===t&&t.flush()})}return T}static enqueue(t){pt(t)}apply(){}}function ti(){var e=ge;st=!0;try{var t=0;for(At(!0);he.length>0;){var n=Q.ensure();if(t++>1e3){var i,r;ni()}n.process(he),ve.clear()}}finally{st=!1,At(e),mt=null}}function ni(){try{Un()}catch(e){Me(e,mt)}}let ne=null;function Et(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var i=e[n++];if((i.f&(me|H))===0&&ke(i)&&(ne=new Set,Te(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null&&i.ac===null?fn(i):i.fn=null),ne?.size>0)){ve.clear();for(const r of ne){if((r.f&(me|H))!==0)continue;const s=[r];let u=r.parent;for(;u!==null;)ne.has(u)&&(ne.delete(u),s.push(u)),u=u.parent;for(let o=s.length-1;o>=0;o--){const f=s[o];(f.f&(me|H))===0&&Te(f)}}ne.clear()}}ne=null}}function Yt(e,t,n,i){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const r of e.reactions){const s=r.f;(s&j)!==0?Yt(r,t,n,i):(s&(vt|le))!==0&&(s&q)===0&&Wt(r,t,i)&&(D(r,q),ye(r))}}function Wt(e,t,n){const i=n.get(e);if(i!==void 0)return i;if(e.deps!==null)for(const r of e.deps){if(t.includes(r))return!0;if((r.f&j)!==0&&Wt(r,t,n))return n.set(r,!0),!0}return n.set(e,!1),!1}function ye(e){for(var t=mt=e;t.parent!==null;){t=t.parent;var n=t.f;if(st&&t===C&&(n&le)!==0&&(n&zt)===0)return;if((n&(xe|ce))!==0){if((n&F)===0)return;t.f^=F}}he.push(t)}function ii(e){let t=0,n=we(0),i;return()=>{Je()&&(_(n),bt(()=>(t===0&&(i=Ze(()=>e(()=>Oe(n)))),t+=1,()=>{pt(()=>{t-=1,t===0&&(i?.(),i=void 0,Oe(n))})})))}}var ri=be|Fe|Xe;function si(e,t,n){new ai(e,t,n)}class ai{parent;#e=!1;#t;#n=null;#i;#l;#a;#o=null;#r=null;#s=null;#c=null;#u=null;#d=0;#f=0;#v=!1;#h=null;#b=ii(()=>(this.#h=we(this.#d),()=>{this.#h=null}));constructor(t,n,i){this.#t=t,this.#i=n,this.#l=i,this.parent=C.b,this.#e=!!this.#i.pending,this.#a=Qe(()=>{C.b=this;{var r=this.#g();try{this.#o=K(()=>i(r))}catch(s){this.error(s)}this.#f>0?this.#m():this.#e=!1}return()=>{this.#u?.remove()}},ri)}#y(){try{this.#o=K(()=>this.#l(this.#t))}catch(t){this.error(t)}this.#e=!1}#w(){const t=this.#i.pending;t&&(this.#r=K(()=>t(this.#t)),Q.enqueue(()=>{var n=this.#g();this.#o=this.#p(()=>(Q.ensure(),K(()=>this.#l(n)))),this.#f>0?this.#m():(Le(this.#r,()=>{this.#r=null}),this.#e=!1)}))}#g(){var t=this.#t;return this.#e&&(this.#u=Re(),this.#t.before(this.#u),t=this.#u),t}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#i.pending}#p(t){var n=C,i=w,r=M;ee(this.#a),V(this.#a),Ae(this.#a.ctx);try{return t()}catch(s){return Ht(s),null}finally{ee(n),V(i),Ae(r)}}#m(){const t=this.#i.pending;this.#o!==null&&(this.#c=document.createDocumentFragment(),this.#c.append(this.#u),vn(this.#o,this.#c)),this.#r===null&&(this.#r=K(()=>t(this.#t)))}#_(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(t);return}this.#f+=t,this.#f===0&&(this.#e=!1,this.#r&&Le(this.#r,()=>{this.#r=null}),this.#c&&(this.#t.before(this.#c),this.#c=null))}update_pending_count(t){this.#_(t),this.#d+=t,this.#h&&Ie(this.#h,this.#d)}get_effect_pending(){return this.#b(),_(this.#h)}error(t){var n=this.#i.onerror;let i=this.#i.failed;if(this.#v||!n&&!i)throw t;this.#o&&(U(this.#o),this.#o=null),this.#r&&(U(this.#r),this.#r=null),this.#s&&(U(this.#s),this.#s=null);var r=!1,s=!1;const u=()=>{if(r){Kn();return}r=!0,s&&Vn(),Q.ensure(),this.#d=0,this.#s!==null&&Le(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#o=this.#p(()=>(this.#v=!1,K(()=>this.#l(this.#t)))),this.#f>0?this.#m():this.#e=!1};var o=w;try{V(null),s=!0,n?.(t,u),s=!1}catch(f){Me(f,this.#a&&this.#a.parent)}finally{V(o)}i&&pt(()=>{this.#s=this.#p(()=>{Q.ensure(),this.#v=!0;try{return K(()=>{i(this.#t,()=>t,()=>u)})}catch(f){return Me(f,this.#a.parent),null}finally{this.#v=!1}})})}}function oi(e,t,n,i){const r=Ve()?gt:Kt;if(n.length===0&&e.length===0){i(t.map(r));return}var s=T,u=C,o=li();function f(){Promise.all(n.map(l=>ci(l))).then(l=>{o();try{i([...t.map(r),...l])}catch(d){(u.f&me)===0&&Me(d,u)}s?.deactivate(),He()}).catch(l=>{Me(l,u)})}e.length>0?Promise.all(e).then(()=>{o();try{return f()}finally{s?.deactivate(),He()}}):f()}function li(){var e=C,t=w,n=M,i=T;return function(s=!0){ee(e),V(t),Ae(n),s&&i?.activate()}}function He(){ee(null),V(null),Ae(null)}function gt(e){var t=j|q,n=w!==null&&(w.f&j)!==0?w:null;return C!==null&&(C.f|=Fe),{ctx:M,deps:null,effects:null,equals:Vt,f:t,fn:e,reactions:null,rv:0,v:P,wv:0,parent:n??C,ac:null}}function ci(e,t){let n=C;n===null&&Pn();var i=n.b,r=void 0,s=we(P),u=!w,o=new Map;return yi(()=>{var f=It();r=f.promise;try{Promise.resolve(e()).then(f.resolve,f.reject).then(()=>{l===T&&l.committed&&l.deactivate(),He()})}catch(a){f.reject(a),He()}var l=T;if(u){var d=!i.is_pending();i.update_pending_count(1),l.increment(d),o.get(l)?.reject(Ce),o.delete(l),o.set(l,f)}const c=(a,h=void 0)=>{if(l.activate(),h)h!==Ce&&(s.f|=de,Ie(s,h));else{(s.f&de)!==0&&(s.f^=de),Ie(s,a);for(const[v,p]of o){if(o.delete(v),v===l)break;p.reject(Ce)}}u&&(i.update_pending_count(-1),l.decrement(d))};f.promise.then(c,a=>c(null,a||"unknown"))}),pi(()=>{for(const f of o.values())f.reject(Ce)}),new Promise(f=>{function l(d){function c(){d===r?f(s):l(r)}d.then(c,c)}l(r)})}function Kt(e){const t=gt(e);return t.equals=qt,t}function Xt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)U(t[n])}}function ui(e){for(var t=e.parent;t!==null;){if((t.f&j)===0)return t;t=t.parent}return null}function _t(e){var t,n=C;ee(ui(e));try{e.f&=~Ue,Xt(e),t=_n(e)}finally{ee(n)}return t}function Jt(e){var t=_t(e);if(e.equals(t)||(e.v=t,e.wv=mn()),!De)if($!==null)Je()&&$.set(e,e.v);else{var n=(e.f&X)===0?te:F;D(e,n)}}let at=new Set;const ve=new Map;let Qt=!1;function we(e,t){var n={f:0,v:e,reactions:null,equals:Vt,rv:0,wv:0};return n}function fe(e,t){const n=we(e);return Si(n),n}function ot(e,t=!1,n=!0){const i=we(e);return t||(i.equals=qt),Be&&n&&M!==null&&M.l!==null&&(M.l.s??=[]).push(i),i}function ie(e,t,n=!1){w!==null&&(!Z||(w.f&Ct)!==0)&&Ve()&&(w.f&(j|le|vt|Ct))!==0&&!oe?.includes(e)&&Bn();let i=n?Pe(t):t;return Ie(e,i)}function Ie(e,t){if(!e.equals(t)){var n=e.v;De?ve.set(e,t):ve.set(e,n),e.v=t;var i=Q.ensure();i.capture(e,n),(e.f&j)!==0&&((e.f&q)!==0&&_t(e),D(e,(e.f&X)!==0?F:te)),e.wv=mn(),Zt(e,q),Ve()&&C!==null&&(C.f&F)!==0&&(C.f&(ce|xe))===0&&(W===null?Ci([e]):W.push(e)),!i.is_fork&&at.size>0&&!Qt&&fi()}return t}function fi(){Qt=!1;const e=Array.from(at);for(const t of e)(t.f&F)!==0&&D(t,te),ke(t)&&Te(t);at.clear()}function Oe(e){ie(e,e.v+1)}function Zt(e,t){var n=e.reactions;if(n!==null)for(var i=Ve(),r=n.length,s=0;s<r;s++){var u=n[s],o=u.f;if(!(!i&&u===C)){var f=(o&q)===0;if(f&&D(u,t),(o&j)!==0){var l=u;$?.delete(l),(o&Ue)===0&&(o&X&&(u.f|=Ue),Zt(l,te))}else f&&((o&le)!==0&&ne!==null&&ne.add(u),ye(u))}}}function Pe(e){if(typeof e!="object"||e===null||Ne in e)return e;const t=ft(e);if(t!==Rn&&t!==Tn)return e;var n=new Map,i=Ot(e),r=fe(0),s=_e,u=o=>{if(_e===s)return o();var f=w,l=_e;V(null),Rt(s);var d=o();return V(f),Rt(l),d};return i&&n.set("length",fe(e.length)),new Proxy(e,{defineProperty(o,f,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&In();var d=n.get(f);return d===void 0?d=u(()=>{var c=fe(l.value);return n.set(f,c),c}):ie(d,l.value,!0),!0},deleteProperty(o,f){var l=n.get(f);if(l===void 0){if(f in o){const d=u(()=>fe(P));n.set(f,d),Oe(r)}}else ie(l,P),Oe(r);return!0},get(o,f,l){if(f===Ne)return e;var d=n.get(f),c=f in o;if(d===void 0&&(!c||je(o,f)?.writable)&&(d=u(()=>{var h=Pe(c?o[f]:P),v=fe(h);return v}),n.set(f,d)),d!==void 0){var a=_(d);return a===P?void 0:a}return Reflect.get(o,f,l)},getOwnPropertyDescriptor(o,f){var l=Reflect.getOwnPropertyDescriptor(o,f);if(l&&"value"in l){var d=n.get(f);d&&(l.value=_(d))}else if(l===void 0){var c=n.get(f),a=c?.v;if(c!==void 0&&a!==P)return{enumerable:!0,configurable:!0,value:a,writable:!0}}return l},has(o,f){if(f===Ne)return!0;var l=n.get(f),d=l!==void 0&&l.v!==P||Reflect.has(o,f);if(l!==void 0||C!==null&&(!d||je(o,f)?.writable)){l===void 0&&(l=u(()=>{var a=d?Pe(o[f]):P,h=fe(a);return h}),n.set(f,l));var c=_(l);if(c===P)return!1}return d},set(o,f,l,d){var c=n.get(f),a=f in o;if(i&&f==="length")for(var h=l;h<c.v;h+=1){var v=n.get(h+"");v!==void 0?ie(v,P):h in o&&(v=u(()=>fe(P)),n.set(h+"",v))}if(c===void 0)(!a||je(o,f)?.writable)&&(c=u(()=>fe(void 0)),ie(c,Pe(l)),n.set(f,c));else{a=c.v!==P;var p=u(()=>Pe(l));ie(c,p)}var g=Reflect.getOwnPropertyDescriptor(o,f);if(g?.set&&g.set.call(d,l),!a){if(i&&typeof f=="string"){var S=n.get("length"),y=Number(f);Number.isInteger(y)&&y>=S.v&&ie(S,y+1)}Oe(r)}return!0},ownKeys(o){_(r);var f=Reflect.ownKeys(o).filter(c=>{var a=n.get(c);return a===void 0||a.v!==P});for(var[l,d]of n)d.v!==P&&!(l in o)&&f.push(l);return f},setPrototypeOf(){zn()}})}var Lt,en,tn,nn;function hi(){if(Lt===void 0){Lt=window,en=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;tn=je(t,"firstChild").get,nn=je(t,"nextSibling").get,St(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),St(n)&&(n.__t=void 0)}}function Re(e=""){return document.createTextNode(e)}function Ye(e){return tn.call(e)}function qe(e){return nn.call(e)}function x(e,t){return Ye(e)}function rn(e,t=!1){{var n=Ye(e);return n instanceof Comment&&n.data===""?qe(n):n}}function A(e,t=1,n=!1){let i=e;for(;t--;)i=qe(i);return i}function di(e){e.textContent=""}function sn(){return!1}function an(e){var t=w,n=C;V(null),ee(null);try{return e()}finally{V(t),ee(n)}}function on(e){C===null&&(w===null&&On(),Nn()),De&&jn()}function vi(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ue(e,t,n,i=!0){var r=C;r!==null&&(r.f&H)!==0&&(e|=H);var s={ctx:M,deps:null,nodes_start:null,nodes_end:null,f:e|q|X,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(n)try{Te(s),s.f|=dt}catch(f){throw U(s),f}else t!==null&&ye(s);if(i){var u=s;if(n&&u.deps===null&&u.teardown===null&&u.nodes_start===null&&u.first===u.last&&(u.f&Fe)===0&&(u=u.first,(e&le)!==0&&(e&be)!==0&&u!==null&&(u.f|=be)),u!==null&&(u.parent=r,r!==null&&vi(u,r),w!==null&&(w.f&j)!==0&&(e&xe)===0)){var o=w;(o.effects??=[]).push(u)}}return s}function Je(){return w!==null&&!Z}function pi(e){const t=ue(Ke,null,!1);return D(t,F),t.teardown=e,t}function lt(e){on();var t=C.f,n=!w&&(t&ce)!==0&&(t&dt)===0;if(n){var i=M;(i.e??=[]).push(e)}else return ln(e)}function ln(e){return ue(ht|Bt,e,!1)}function mi(e){return on(),ue(Ke|Bt,e,!0)}function gi(e){Q.ensure();const t=ue(xe|Fe,e,!0);return(n={})=>new Promise(i=>{n.outro?Le(t,()=>{U(t),i(void 0)}):(U(t),i(void 0))})}function _i(e,t){var n=M,i={effect:null,ran:!1,deps:e};n.l.$.push(i),i.effect=bt(()=>{e(),!i.ran&&(i.ran=!0,Ze(t))})}function bi(){var e=M;bt(()=>{for(var t of e.l.$){t.deps();var n=t.effect;(n.f&F)!==0&&D(n,te),ke(n)&&Te(n),t.ran=!1}})}function yi(e){return ue(vt|Fe,e,!0)}function bt(e,t=0){return ue(Ke|t,e,!0)}function re(e,t=[],n=[],i=[],r=!1){oi(i,t,n,s=>{ue(r?ht:Ke,()=>e(...s.map(_)),!0)})}function Qe(e,t=0){var n=ue(le|t,e,!0);return n}function K(e,t=!0){return ue(ce|Fe,e,!0,t)}function cn(e){var t=e.teardown;if(t!==null){const n=De,i=w;Mt(!0),V(null);try{t.call(null)}finally{Mt(n),V(i)}}}function un(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const r=n.ac;r!==null&&an(()=>{r.abort(Ce)});var i=n.next;(n.f&xe)!==0?n.parent=null:U(n,t),n=i}}function wi(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ce)===0&&U(t),t=n}}function U(e,t=!0){var n=!1;(t||(e.f&zt)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(xi(e.nodes_start,e.nodes_end),n=!0),un(e,t&&!n),We(e,0),D(e,me);var i=e.transitions;if(i!==null)for(const s of i)s.stop();cn(e);var r=e.parent;r!==null&&r.first!==null&&fn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function xi(e,t){for(;e!==null;){var n=e===t?null:qe(e);e.remove(),e=n}}function fn(e){var t=e.parent,n=e.prev,i=e.next;n!==null&&(n.next=i),i!==null&&(i.prev=n),t!==null&&(t.first===e&&(t.first=i),t.last===e&&(t.last=n))}function Le(e,t,n=!0){var i=[];yt(e,i,!0),hn(i,()=>{n&&U(e),t&&t()})}function hn(e,t){var n=e.length;if(n>0){var i=()=>--n||t();for(var r of e)r.out(i)}else t()}function yt(e,t,n){if((e.f&H)===0){if(e.f^=H,e.transitions!==null)for(const u of e.transitions)(u.is_global||n)&&t.push(u);for(var i=e.first;i!==null;){var r=i.next,s=(i.f&be)!==0||(i.f&ce)!==0&&(e.f&le)!==0;yt(i,t,s?n:!1),i=r}}}function wt(e){dn(e,!0)}function dn(e,t){if((e.f&H)!==0){e.f^=H,(e.f&F)===0&&(D(e,q),ye(e));for(var n=e.first;n!==null;){var i=n.next,r=(n.f&be)!==0||(n.f&ce)!==0;dn(n,r?t:!1),n=i}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}function vn(e,t){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var r=n===i?null:qe(n);t.append(n),n=r}}let ge=!1;function At(e){ge=e}let De=!1;function Mt(e){De=e}let w=null,Z=!1;function V(e){w=e}let C=null;function ee(e){C=e}let oe=null;function Si(e){w!==null&&(oe===null?oe=[e]:oe.push(e))}let O=null,G=0,W=null;function Ci(e){W=e}let pn=1,ze=0,_e=ze;function Rt(e){_e=e}function mn(){return++pn}function ke(e){var t=e.f;if((t&q)!==0)return!0;if(t&j&&(e.f&=~Ue),(t&te)!==0){var n=e.deps;if(n!==null)for(var i=n.length,r=0;r<i;r++){var s=n[r];if(ke(s)&&Jt(s),s.wv>e.wv)return!0}(t&X)!==0&&$===null&&D(e,F)}return!1}function gn(e,t,n=!0){var i=e.reactions;if(i!==null&&!oe?.includes(e))for(var r=0;r<i.length;r++){var s=i[r];(s.f&j)!==0?gn(s,t,!1):t===s&&(n?D(s,q):(s.f&F)!==0&&D(s,te),ye(s))}}function _n(e){var t=O,n=G,i=W,r=w,s=oe,u=M,o=Z,f=_e,l=e.f;O=null,G=0,W=null,w=(l&(ce|xe))===0?e:null,oe=null,Ae(e.ctx),Z=!1,_e=++ze,e.ac!==null&&(an(()=>{e.ac.abort(Ce)}),e.ac=null);try{e.f|=rt;var d=e.fn,c=d(),a=e.deps;if(O!==null){var h;if(We(e,G),a!==null&&G>0)for(a.length=G+O.length,h=0;h<O.length;h++)a[G+h]=O[h];else e.deps=a=O;if(ge&&Je()&&(e.f&X)!==0)for(h=G;h<a.length;h++)(a[h].reactions??=[]).push(e)}else a!==null&&G<a.length&&(We(e,G),a.length=G);if(Ve()&&W!==null&&!Z&&a!==null&&(e.f&(j|te|q))===0)for(h=0;h<W.length;h++)gn(W[h],e);return r!==null&&r!==e&&(ze++,W!==null&&(i===null?i=W:i.push(...W))),(e.f&de)!==0&&(e.f^=de),c}catch(v){return Ht(v)}finally{e.f^=rt,O=t,G=n,W=i,w=r,oe=s,Ae(u),Z=o,_e=f}}function Ei(e,t){let n=t.reactions;if(n!==null){var i=An.call(n,e);if(i!==-1){var r=n.length-1;r===0?n=t.reactions=null:(n[i]=n[r],n.pop())}}n===null&&(t.f&j)!==0&&(O===null||!O.includes(t))&&(D(t,te),(t.f&X)!==0&&(t.f^=X,t.f&=~Ue),Xt(t),We(t,0))}function We(e,t){var n=e.deps;if(n!==null)for(var i=t;i<n.length;i++)Ei(e,n[i])}function Te(e){var t=e.f;if((t&me)===0){D(e,F);var n=C,i=ge;C=e,ge=!0;try{(t&le)!==0?wi(e):un(e),cn(e);var r=_n(e);e.teardown=typeof r=="function"?r:null,e.wv=pn;var s;Nt&&Qn&&(e.f&q)!==0&&e.deps}finally{ge=i,C=n}}}function _(e){var t=e.f,n=(t&j)!==0;if(w!==null&&!Z){var i=C!==null&&(C.f&me)!==0;if(!i&&!oe?.includes(e)){var r=w.deps;if((w.f&rt)!==0)e.rv<ze&&(e.rv=ze,O===null&&r!==null&&r[G]===e?G++:O===null?O=[e]:O.includes(e)||O.push(e));else{(w.deps??=[]).push(e);var s=e.reactions;s===null?e.reactions=[w]:s.includes(w)||s.push(w)}}}if(De){if(ve.has(e))return ve.get(e);if(n){var u=e,o=u.v;return((u.f&F)===0&&u.reactions!==null||yn(u))&&(o=_t(u)),ve.set(u,o),o}}else if(n){if(u=e,$?.has(u))return $.get(u);ke(u)&&Jt(u),ge&&Je()&&(u.f&X)===0&&bn(u)}else if($?.has(e))return $.get(e);if((e.f&de)!==0)throw e.v;return e.v}function bn(e){if(e.deps!==null){e.f^=X;for(const t of e.deps)(t.reactions??=[]).push(e),(t.f&j)!==0&&(t.f&X)===0&&bn(t)}}function yn(e){if(e.v===P)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(ve.has(t)||(t.f&j)!==0&&yn(t))return!0;return!1}function Ze(e){var t=Z;try{return Z=!0,e()}finally{Z=t}}const Li=-7169;function D(e,t){e.f=e.f&Li|t}function Ai(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ne in e)ct(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Ne in n&&ct(n)}}}function ct(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let i in e)try{ct(e[i],t)}catch{}const n=ft(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const i=Ut(n);for(let r in i){const s=i[r].get;if(s)try{s.call(e)}catch{}}}}}const Mi=["touchstart","touchmove"];function Ri(e){return Mi.includes(e)}const Ti=new Set,Tt=new Set;let Ft=null;function $e(e){var t=this,n=t.ownerDocument,i=e.type,r=e.composedPath?.()||[],s=r[0]||e.target;Ft=e;var u=0,o=Ft===e&&e.__root;if(o){var f=r.indexOf(o);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var l=r.indexOf(t);if(l===-1)return;f<=l&&(u=f)}if(s=r[u]||e.target,s!==t){Mn(e,"currentTarget",{configurable:!0,get(){return s||n}});var d=w,c=C;V(null),ee(null);try{for(var a,h=[];s!==null;){var v=s.assignedSlot||s.parentNode||s.host||null;try{var p=s["__"+i];p!=null&&(!s.disabled||e.target===s)&&p.call(s,e)}catch(g){a?h.push(g):a=g}if(e.cancelBubble||v===t||v===null)break;s=v}if(a){for(let g of h)queueMicrotask(()=>{throw g});throw a}}finally{e.__root=t,delete e.currentTarget,V(d),ee(c)}}}function Fi(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Dt(e,t){var n=C;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function I(e,t){var n=(t&Hn)!==0,i=(t&Yn)!==0,r,s=!e.startsWith("<!>");return()=>{r===void 0&&(r=Fi(s?e:"<!>"+e),n||(r=Ye(r)));var u=i||en?document.importNode(r,!0):r.cloneNode(!0);if(n){var o=Ye(u),f=u.lastChild;Dt(o,f)}else Dt(u,u);return u}}function N(e,t){e!==null&&e.before(t)}function B(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=n+"")}function Di(e,t){return ki(e,t)}const Se=new Map;function ki(e,{target:t,anchor:n,props:i={},events:r,context:s,intro:u=!0}){hi();var o=new Set,f=c=>{for(var a=0;a<c.length;a++){var h=c[a];if(!o.has(h)){o.add(h);var v=Ri(h);t.addEventListener(h,$e,{passive:v});var p=Se.get(h);p===void 0?(document.addEventListener(h,$e,{passive:v}),Se.set(h,1)):Se.set(h,p+1)}}};f(ut(Ti)),Tt.add(f);var l=void 0,d=gi(()=>{var c=n??t.appendChild(Re());return si(c,{pending:()=>{}},a=>{if(s){Gt({});var h=M;h.c=s}r&&(i.$$events=r),l=e(a,i)||{},s&&$t()}),()=>{for(var a of o){t.removeEventListener(a,$e);var h=Se.get(a);--h===0?(document.removeEventListener(a,$e),Se.delete(a)):Se.set(a,h)}Tt.delete(f),c!==n&&c.parentNode?.removeChild(c)}});return Pi.set(l,d),l}let Pi=new WeakMap;class wn{anchor;#e=new Map;#t=new Map;#n=new Map;#i=!0;constructor(t,n=!0){this.anchor=t,this.#i=n}#l=()=>{var t=T;if(this.#e.has(t)){var n=this.#e.get(t),i=this.#t.get(n);if(i)wt(i);else{var r=this.#n.get(n);r&&(this.#t.set(n,r.effect),this.#n.delete(n),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,u]of this.#e){if(this.#e.delete(s),s===t)break;const o=this.#n.get(u);o&&(U(o.effect),this.#n.delete(u))}for(const[s,u]of this.#t){if(s===n)continue;const o=()=>{if(Array.from(this.#e.values()).includes(s)){var l=document.createDocumentFragment();vn(u,l),l.append(Re()),this.#n.set(s,{effect:u,fragment:l})}else U(u);this.#t.delete(s)};this.#i||!i?Le(u,o,!1):o()}}};#a=t=>{this.#e.delete(t);const n=Array.from(this.#e.values());for(const[i,r]of this.#n)n.includes(i)||(U(r.effect),this.#n.delete(i))};ensure(t,n){var i=T,r=sn();if(n&&!this.#t.has(t)&&!this.#n.has(t))if(r){var s=document.createDocumentFragment(),u=Re();s.append(u),this.#n.set(t,{effect:K(()=>n(u)),fragment:s})}else this.#t.set(t,K(()=>n(this.anchor)));if(this.#e.set(i,t),r){for(const[o,f]of this.#t)o===t?i.skipped_effects.delete(f):i.skipped_effects.add(f);for(const[o,f]of this.#n)o===t?i.skipped_effects.delete(f.effect):i.skipped_effects.add(f.effect);i.oncommit(this.#l),i.ondiscard(this.#a)}else this.#l()}}function kt(e,t,n=!1){var i=new wn(e),r=n?be:0;function s(u,o){i.ensure(u,o)}Qe(()=>{var u=!1;t((o,f=!0)=>{u=!0,s(f,o)}),u||s(!1,null)},r)}function se(e,t){return t}function ji(e,t,n){for(var i=e.items,r=[],s=t.length,u=0;u<s;u++)yt(t[u].e,r,!0);var o=s>0&&r.length===0&&n!==null;if(o){var f=n.parentNode;di(f),f.append(n),i.clear(),J(e,t[0].prev,t[s-1].next)}hn(r,()=>{for(var l=0;l<s;l++){var d=t[l];o||(i.delete(d.k),J(e,d.prev,d.next)),U(d.e,!o)}})}function ae(e,t,n,i,r,s=null){var u=e,o={flags:t,items:new Map,first:null};{var f=e;u=f.appendChild(Re())}var l=null,d=!1,c=new Map,a=Kt(()=>{var g=n();return Ot(g)?g:g==null?[]:ut(g)}),h,v;function p(){Ni(v,h,o,c,u,r,t,i,n),s!==null&&(h.length===0?l?wt(l):l=K(()=>s(u)):l!==null&&Le(l,()=>{l=null}))}Qe(()=>{v??=C,h=_(a);var g=h.length;if(!(d&&g===0)){d=g===0;var S,y,b,E;if(sn()){var R=new Set,L=T;for(y=0;y<g;y+=1){b=h[y],E=i(b,y);var k=o.items.get(E)??c.get(E);k?xn(k,b,y):(S=Sn(null,o,null,null,b,E,y,r,t,n,!0),c.set(E,S)),R.add(E)}for(const[Y,z]of o.items)R.has(Y)||L.skipped_effects.add(z.e);L.oncommit(p)}else p();_(a)}})}function Ni(e,t,n,i,r,s,u,o,f){var l=t.length,d=n.items,c=n.first,a=c,h,v=null,p=[],g=[],S,y,b,E;for(E=0;E<l;E+=1){if(S=t[E],y=o(S,E),b=d.get(y),b===void 0){var R=i.get(y);if(R!==void 0){i.delete(y),d.set(y,R);var L=v?v.next:a;J(n,v,R),J(n,R,L),nt(R,L,r),v=R}else{var k=a?a.e.nodes_start:r;v=Sn(k,n,v,v===null?n.first:v.next,S,y,E,s,u,f)}d.set(y,v),p=[],g=[],a=v.next;continue}if(xn(b,S,E),(b.e.f&H)!==0&&wt(b.e),b!==a){if(h!==void 0&&h.has(b)){if(p.length<g.length){var Y=g[0],z;v=Y.prev;var xt=p[0],et=p[p.length-1];for(z=0;z<p.length;z+=1)nt(p[z],Y,r);for(z=0;z<g.length;z+=1)h.delete(g[z]);J(n,xt.prev,et.next),J(n,v,xt),J(n,et,Y),a=Y,v=et,E-=1,p=[],g=[]}else h.delete(b),nt(b,a,r),J(n,b.prev,b.next),J(n,b,v===null?n.first:v.next),J(n,v,b),v=b;continue}for(p=[],g=[];a!==null&&a.k!==y;)(a.e.f&H)===0&&(h??=new Set).add(a),g.push(a),a=a.next;if(a===null)continue;b=a}p.push(b),v=b,a=b.next}if(a!==null||h!==void 0){for(var tt=h===void 0?[]:ut(h);a!==null;)(a.e.f&H)===0&&tt.push(a),a=a.next;var Cn=tt.length;if(Cn>0){var En=l===0?r:null;ji(n,tt,En)}}e.first=n.first&&n.first.e,e.last=v&&v.e;for(var Ln of i.values())U(Ln.e);i.clear()}function xn(e,t,n,i){Ie(e.v,t),e.i=n}function Sn(e,t,n,i,r,s,u,o,f,l,d){var c=(f&qn)!==0,a=(f&$n)===0,h=c?a?ot(r,!1,!1):we(r):r,v=(f&Gn)===0?u:we(u),p={i:v,v:h,k:s,a:null,e:null,prev:n,next:i};try{if(e===null){var g=document.createDocumentFragment();g.append(e=Re())}return p.e=K(()=>o(e,h,v,l),Xn),p.e.prev=n&&n.e,p.e.next=i&&i.e,n===null?d||(t.first=p):(n.next=p,n.e.next=p.e),i!==null&&(i.prev=p,i.e.prev=p.e),p}finally{}}function nt(e,t,n){for(var i=e.next?e.next.e.nodes_start:n,r=t?t.e.nodes_start:n,s=e.e.nodes_start;s!==null&&s!==i;){var u=qe(s);r.before(s),s=u}}function J(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Oi(e,t,n){var i=new wn(e);Qe(()=>{var r=t()??null;i.ensure(r,r&&(s=>n(s,r)))},be)}const Ui=Symbol("is custom element"),Ii=Symbol("is html");function pe(e,t,n,i){var r=zi(e);r[t]!==(r[t]=n)&&(t==="loading"&&(e[Dn]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Bi(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function zi(e){return e.__attributes??={[Ui]:e.nodeName.includes("-"),[Ii]:e.namespaceURI===Wn}}var Pt=new Map;function Bi(e){var t=e.getAttribute("is")||e.nodeName,n=Pt.get(t);if(n)return n;Pt.set(t,n=[]);for(var i,r=e,s=Element.prototype;s!==r;){i=Ut(r);for(var u in i)i[u].set&&n.push(u);r=ft(r)}return n}function Vi(e=!1){const t=M,n=t.l.u;if(!n)return;let i=()=>Ai(t.s);if(e){let r=0,s={};const u=gt(()=>{let o=!1;const f=t.s;for(const l in f)f[l]!==s[l]&&(s[l]=f[l],o=!0);return o&&r++,r});i=()=>_(u)}n.b.length&&mi(()=>{jt(t,i),it(n.b)}),lt(()=>{const r=Ze(()=>n.m.map(Fn));return()=>{for(const s of r)typeof s=="function"&&s()}}),n.a.length&&lt(()=>{jt(t,i),it(n.a)})}function jt(e,t){if(e.l.s)for(const n of e.l.s)_(n);t()}function qi(e){M===null&&kn(),Be&&M.l!==null?Gi(M).m.push(e):lt(()=>{const t=Ze(e);if(typeof t=="function")return t})}function Gi(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const $i="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add($i);Zn();var Hi=I('<a target="_blank" rel="noopener noreferrer" class="social-link"><span class="social-icon"> </span> </a>'),Yi=I('<span class="tech-tag"> </span>'),Wi=I('<a target="_blank" rel="noopener noreferrer" class="project-card"><div class="project-image"><img/></div> <div class="project-info"><h3 class="project-name"> </h3> <div class="project-tech"></div> <p class="project-description"> </p></div></a>'),Ki=I('<section class="hero-section"><nav class="side-nav"><a href="#/contact">Contact</a></nav> <div class="hero-content"><h1 class="hero__name">Simon Ingemann Axelsen</h1> <p class="hero__tagline">Master’s Student in Medialogy</p> <p class="hero__bio">I enjoy exploring new technologies and building projects that combine user research, data analysis, and academic research.</p> <p class="hero__location">📍 Copenhagen</p> <div class="hero__links"></div></div></section> <section class="projects-section"><h2 class="projects-title">Projects</h2> <div class="projects-grid"></div></section>',1);function Xi(e){const t=[{name:"GitHub",url:"https://github.com/SimonAxelsen",icon:"⌘"},{name:"LinkedIn",url:"https://www.linkedin.com/in/simon-ingemann-axelsen-32661a1b2/",icon:"◉"},{name:"Email",url:"mailto:simonaxelsen@outlook.dk",icon:"✉"}],n=[{name:"FirstImpress",description:"AI-driven dialogue system with real-time voice synthesis and local LLM integration. Explores natural voice interaction using Ollama",tech:["Unity","LLM","Ollama","AI-Agents","TTS"],image:"images/SceneSet-up_3.png",github:"https://github.com/SimonAxelsen/P7_Project"},{name:"Movie Sentiment & Genre Analyzer",description:"NLP pipeline analyzing movie reviews for sentiment classification and genre detection. Deployed as interactive Hugging Face Space.",tech:["Python","NPL","Gradio","Hugging Face"],image:"images/movie_sentiment_2.png",github:"https://huggingface.co/spaces/Huggbottle/Movie_Review_Sentiment_Genre_Analyzer"},{name:"Hybrid N-Back",description:"Cognitive training app combining dual N-Back tasks with tangible BLE controller. Features adaptive difficulty, text-to-speech stimuli, and optional ESP32 physical buttons.",tech:["Flutter","Arduino","BLE","ESP32"],image:"images/Gameplay_2.png",github:"https://github.com/SimonAxelsen/MWC-Hybrid-N-Back"},{name:"Capstone Short Film Generation",description:"Multi-agent AI system that generates complete, evaluated short film scripts. Features a sequential pipeline (Story Architect -> Script Writer -> Evaluator), LLM-as-Judge evaluation, and custom observability logging.",tech:["Multi-agent Systems","LLM","Python","Kaggle"],image:"images/thumbnail.png",github:"https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/new-writeup-1763814500940"},{name:"Lost Translation",description:"Narrative-driven language learning game using implicit acquisition. Players learn Portuguese vocabulary through contextual gameplay without explicit instruction.",tech:["Unity","C#","Game Design"],image:"images/LTCAMERAWORK.png",github:"https://github.com/SimonAxelsen/P6-Project"},{name:"Pentomino Tetris AI",description:"Reinforcement learning agent for 5-block Tetris variant. Implements Q-learning with linear function approximation, engineered state features, and custom reward shaping.",tech:["Python","Reinforcement Learning"],image:"images/Figure_1_time.png",github:"https://github.com/SimonAxelsen/pentomino_Tetris"},{name:'"A little Prolem"',description:"VR dilemma simulation for pre-service teacher training. Branching narrative puts users in realistic school conflict scenarios, evaluated with 15 pedagogues.",tech:["Unity","C#","VR","UX Research"],image:"images/p5.png",github:"https://github.com/SimonAxelsen/P5-Project"},{name:"CineMatch",description:"Prototype of a full-stack web application with React frontend and MongoDB backend. Movie rating platform with user creation groups and personalized recommendations.",tech:["React","MongoDB","Node.js"],image:"images/cinematch.png",github:"https://github.com/SimonAxelsen/Sem6_Web_mini-project"},{name:"Reverse Spelling Bee",description:"VR game jam project built in a limited timeframe.",tech:["Unity","VR"],image:"images/vrjam.png",github:"https://github.com/SimonAxelsen/VRJam"}];var i=Ki(),r=rn(i),s=A(x(r),2),u=A(x(s),8);ae(u,5,()=>t,se,(l,d)=>{var c=Hi(),a=x(c),h=x(a),v=A(a);re(()=>{pe(c,"href",_(d).url),B(h,_(d).icon),B(v,` ${_(d).name??""}`)}),N(l,c)});var o=A(r,2),f=A(x(o),2);ae(f,5,()=>n,se,(l,d)=>{var c=Wi(),a=x(c),h=x(a),v=A(a,2),p=x(v),g=x(p),S=A(p,2);ae(S,5,()=>_(d).tech,se,(E,R)=>{var L=Yi(),k=x(L);re(()=>B(k,_(R))),N(E,L)});var y=A(S,2),b=x(y);re(()=>{pe(c,"href",_(d).github),pe(h,"src",_(d).image),pe(h,"alt",_(d).name),B(g,_(d).name),B(b,_(d).description)}),N(l,c)}),N(e,i)}var Ji=I('<span class="badge">+ Report</span>'),Qi=I('<span class="tech-tag"> </span>'),Zi=I('<a target="_blank" rel="noopener noreferrer" class="project-card project-card--large"><div class="project-card__header"><h4> </h4> <!></div> <p> </p> <div class="project-card__tech"></div></a>'),er=I('<span class="badge">+ Report</span>'),tr=I('<span class="tech-tag"> </span>'),nr=I('<a target="_blank" rel="noopener noreferrer" class="project-card"><div class="project-card__header"><h4> </h4> <!></div> <p> </p> <div class="project-card__tech"></div></a>'),ir=I('<span class="tech-tag"> </span>'),rr=I('<a target="_blank" rel="noopener noreferrer" class="project-card"><div class="project-card__header"><h4> </h4></div> <p> </p> <div class="project-card__tech"></div></a>'),sr=I('<section class="projects-page"><a href="#/" class="back-link">← Back</a> <h2 class="page-title">Projects</h2> <div class="projects-section"><h3 class="section-title">Semester Projects</h3> <div class="projects-grid"></div></div> <div class="projects-section"><h3 class="section-title">Mini Projects</h3> <div class="projects-grid"></div></div> <div class="projects-section"><h3 class="section-title">Personal Projects</h3> <div class="projects-grid"></div></div></section>');function ar(e){const t=[{name:"P7 Project",description:"Semester 7 project",tech:["Unity","Ollama","TTS"],github:"https://github.com/gulfurs/P7_Project",hasReport:!0},{name:"P6 Project",description:"Semester 6 project",tech:["Unity"],github:"https://github.com/gulfurs/P6-Project",hasReport:!0},{name:"P5 Project",description:"Semester 5 project",tech:["Unity","VR"],github:"https://github.com/gulfurs/P5-Project",hasReport:!0}],n=[{name:"VR Jam",description:"VR game jam project",tech:["Unity","VR"],github:"https://github.com/gulfurs/VRJam",hasReport:!0},{name:"Web Mini-Project",description:"Semester 6 web development mini-project",tech:["React","MongoDB"],github:"https://github.com/gulfurs/Sem6_Web_mini-project",hasReport:!0},{name:"Hybrid N-Back",description:"Mobile & Wearable Computing project",tech:["Flutter","Arduino"],github:"https://github.com/gulfurs/MWC-Hybrid-N-Back",hasReport:!0},{name:"Pentomino Tetris",description:"Tetris variant with pentomino pieces",tech:["Python","Reinforcement Learning"],github:"https://github.com/gulfurs/pentomino_Tetris",hasReport:!0}],i=[{name:"Best Flag Guesser",description:"Flag guessing game",tech:["React"],github:"https://github.com/gulfurs/Best_Flag_Guesser",hasReport:!1}];var r=sr(),s=A(x(r),4),u=A(x(s),2);ae(u,5,()=>t,se,(c,a)=>{var h=Zi(),v=x(h),p=x(v),g=x(p),S=A(p,2);{var y=L=>{var k=Ji();N(L,k)};kt(S,L=>{_(a).hasReport&&L(y)})}var b=A(v,2),E=x(b),R=A(b,2);ae(R,5,()=>_(a).tech,se,(L,k)=>{var Y=Qi(),z=x(Y);re(()=>B(z,_(k))),N(L,Y)}),re(()=>{pe(h,"href",_(a).github),B(g,_(a).name),B(E,_(a).description)}),N(c,h)});var o=A(s,2),f=A(x(o),2);ae(f,5,()=>n,se,(c,a)=>{var h=nr(),v=x(h),p=x(v),g=x(p),S=A(p,2);{var y=L=>{var k=er();N(L,k)};kt(S,L=>{_(a).hasReport&&L(y)})}var b=A(v,2),E=x(b),R=A(b,2);ae(R,5,()=>_(a).tech,se,(L,k)=>{var Y=tr(),z=x(Y);re(()=>B(z,_(k))),N(L,Y)}),re(()=>{pe(h,"href",_(a).github),B(g,_(a).name),B(E,_(a).description)}),N(c,h)});var l=A(o,2),d=A(x(l),2);ae(d,5,()=>i,se,(c,a)=>{var h=rr(),v=x(h),p=x(v),g=x(p),S=A(v,2),y=x(S),b=A(S,2);ae(b,5,()=>_(a).tech,se,(E,R)=>{var L=ir(),k=x(L);re(()=>B(k,_(R))),N(E,L)}),re(()=>{pe(h,"href",_(a).github),B(g,_(a).name),B(y,_(a).description)}),N(c,h)}),N(e,r)}var or=I('<section class="contact-page"><a href="#/" class="back-link">← Back</a> <h2 class="page-title">Get in Touch</h2> <div class="contact-grid"><div class="contact-info"><p class="location">📍 Copenhagen, Denmark</p> <p>Feel free to reach out</p> <p class="email"><a href="mailto:simonAxelsen@outlook.dk">simonAxelsen@outlook.dk</a></p> <div class="contact-links"><a href="https://github.com/SimonAxelsen" target="_blank" rel="noopener noreferrer">GitHub</a> <a href="https://www.linkedin.com/in/simon-ingemann-axelsen-32661a1b2/" target="_blank" rel="noopener noreferrer">LinkedIn</a> <a href="/Simon_Ingemann_Axelsen_CV.pdf" download="Simon_Ingemann_Axelsen_CV.pdf">Download CV</a></div></div> <form class="contact-form" action="https://formspree.io/f/mjggvywk" method="POST"><input type="text" name="name" placeholder="Your Name" required/> <input type="email" name="email" placeholder="Your Email" required/> <textarea name="message" placeholder="Your Message" rows="5" required></textarea> <button type="submit">Send Message</button></form></div></section>');function lr(e){var t=or();N(e,t)}function cr(e){return[(e>>16&255)/255,(e>>8&255)/255,(255&e)/255]}["SCREEN","LINEAR_LIGHT"].reduce((e,t,n)=>Object.assign(e,{[t]:n}),{});class ur{constructor(t,n,i,r=!1){const s=this,u=document.location.search.toLowerCase().indexOf("debug=webgl")!==-1;s.canvas=t,s.gl=s.canvas.getContext("webgl",{antialias:!0}),s.meshes=[];const o=s.gl;n&&i&&this.setSize(n,i),s.lastDebugMsg,s.debug=r&&u?function(l){const d=new Date;d-s.lastDebugMsg>1e3&&console.log("---"),console.log(d.toLocaleTimeString()+Array(Math.max(0,32-l.length)).join(" ")+l+": ",...Array.from(arguments).slice(1)),s.lastDebugMsg=d}:()=>{},Object.defineProperties(s,{Material:{enumerable:!1,value:class{constructor(l,d,c={}){const a=this;function h(g,S){const y=o.createShader(g);return o.shaderSource(y,S),o.compileShader(y),o.getShaderParameter(y,o.COMPILE_STATUS)||console.error(o.getShaderInfoLog(y)),s.debug("Material.compileShaderSource",{source:S}),y}function v(g,S){return Object.entries(g).map(([y,b])=>b.getDeclaration(y,S)).join(`
`)}a.uniforms=c,a.uniformInstances=[];const p=`
              precision highp float;
            `;a.vertexSource=`
              ${p}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${v(s.commonUniforms,"vertex")}
              ${v(c,"vertex")}
              ${l}
            `,a.Source=`
              ${p}
              ${v(s.commonUniforms,"fragment")}
              ${v(c,"fragment")}
              ${d}
            `,a.vertexShader=h(o.VERTEX_SHADER,a.vertexSource),a.fragmentShader=h(o.FRAGMENT_SHADER,a.Source),a.program=o.createProgram(),o.attachShader(a.program,a.vertexShader),o.attachShader(a.program,a.fragmentShader),o.linkProgram(a.program),o.getProgramParameter(a.program,o.LINK_STATUS)||console.error(o.getProgramInfoLog(a.program)),o.useProgram(a.program),a.attachUniforms(void 0,s.commonUniforms),a.attachUniforms(void 0,a.uniforms)}attachUniforms(l,d){const c=this;l===void 0?Object.entries(d).forEach(([a,h])=>{c.attachUniforms(a,h)}):d.type=="array"?d.value.forEach((a,h)=>c.attachUniforms(`${l}[${h}]`,a)):d.type=="struct"?Object.entries(d.value).forEach(([a,h])=>c.attachUniforms(`${l}.${a}`,h)):(s.debug("Material.attachUniforms",{name:l,uniform:d}),c.uniformInstances.push({uniform:d,location:o.getUniformLocation(c.program,l)}))}}},Uniform:{enumerable:!1,value:class{constructor(l){this.type="float",Object.assign(this,l),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(l){this.value!==void 0&&o[`uniform${this.typeFn}`](l,this.typeFn.indexOf("Matrix")===0?this.transpose:this.value,this.typeFn.indexOf("Matrix")===0?this.value:null)}getDeclaration(l,d,c){const a=this;if(a.excludeFrom!==d){if(a.type==="array")return a.value[0].getDeclaration(l,d,a.value.length)+`
const int ${l}_length = ${a.value.length};`;if(a.type==="struct"){let h=l.replace("u_","");return h=h.charAt(0).toUpperCase()+h.slice(1),`uniform struct ${h} 
                                    {
`+Object.entries(a.value).map(([v,p])=>p.getDeclaration(v,d).replace(/^uniform/,"")).join("")+`
} ${l}${c>0?`[${c}]`:""};`}return`uniform ${a.type} ${l}${c>0?`[${c}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(l,d,c,a,h){o.createBuffer(),this.attributes={position:new s.Attribute({target:o.ARRAY_BUFFER,size:3}),uv:new s.Attribute({target:o.ARRAY_BUFFER,size:2}),uvNorm:new s.Attribute({target:o.ARRAY_BUFFER,size:2}),index:new s.Attribute({target:o.ELEMENT_ARRAY_BUFFER,size:3,type:o.UNSIGNED_SHORT})},this.setTopology(c,a),this.setSize(l,d,h)}setTopology(l=1,d=1){const c=this;c.xSegCount=l,c.ySegCount=d,c.vertexCount=(c.xSegCount+1)*(c.ySegCount+1),c.quadCount=c.xSegCount*c.ySegCount*2,c.attributes.uv.values=new Float32Array(2*c.vertexCount),c.attributes.uvNorm.values=new Float32Array(2*c.vertexCount),c.attributes.index.values=new Uint16Array(3*c.quadCount);for(let a=0;a<=c.ySegCount;a++)for(let h=0;h<=c.xSegCount;h++){const v=a*(c.xSegCount+1)+h;if(c.attributes.uv.values[2*v]=h/c.xSegCount,c.attributes.uv.values[2*v+1]=1-a/c.ySegCount,c.attributes.uvNorm.values[2*v]=h/c.xSegCount*2-1,c.attributes.uvNorm.values[2*v+1]=1-a/c.ySegCount*2,h<c.xSegCount&&a<c.ySegCount){const p=a*c.xSegCount+h;c.attributes.index.values[6*p]=v,c.attributes.index.values[6*p+1]=v+1+c.xSegCount,c.attributes.index.values[6*p+2]=v+1,c.attributes.index.values[6*p+3]=v+1,c.attributes.index.values[6*p+4]=v+1+c.xSegCount,c.attributes.index.values[6*p+5]=v+2+c.xSegCount}}c.attributes.uv.update(),c.attributes.uvNorm.update(),c.attributes.index.update(),s.debug("Geometry.setTopology",{uv:c.attributes.uv,uvNorm:c.attributes.uvNorm,index:c.attributes.index})}setSize(l=1,d=1,c="xz"){const a=this;a.width=l,a.height=d,a.orientation=c,a.attributes.position.values&&a.attributes.position.values.length===3*a.vertexCount||(a.attributes.position.values=new Float32Array(3*a.vertexCount));const h=l/-2,v=d/-2,p=l/a.xSegCount,g=d/a.ySegCount;for(let S=0;S<=a.ySegCount;S++){const y=v+S*g;for(let b=0;b<=a.xSegCount;b++){const E=h+b*p,R=S*(a.xSegCount+1)+b;a.attributes.position.values[3*R+"xyz".indexOf(c[0])]=E,a.attributes.position.values[3*R+"xyz".indexOf(c[1])]=-y}}a.attributes.position.update(),s.debug("Geometry.setSize",{position:a.attributes.position})}}},Mesh:{enumerable:!1,value:class{constructor(l,d){const c=this;c.geometry=l,c.material=d,c.wireframe=!1,c.attributeInstances=[],Object.entries(c.geometry.attributes).forEach(([a,h])=>{c.attributeInstances.push({attribute:h,location:h.attach(a,c.material.program)})}),s.meshes.push(c),s.debug("Mesh.constructor",{mesh:c})}draw(){o.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:l,location:d})=>l.update(d)),this.attributeInstances.forEach(({attribute:l,location:d})=>l.use(d)),o.drawElements(this.wireframe?o.LINES:o.TRIANGLES,this.geometry.attributes.index.values.length,o.UNSIGNED_SHORT,0)}remove(){s.meshes=s.meshes.filter(l=>l!=this)}}},Attribute:{enumerable:!1,value:class{constructor(l){this.type=o.FLOAT,this.normalized=!1,this.buffer=o.createBuffer(),Object.assign(this,l),this.update()}update(){this.values!==void 0&&(o.bindBuffer(this.target,this.buffer),o.bufferData(this.target,this.values,o.STATIC_DRAW))}attach(l,d){const c=o.getAttribLocation(d,l);return this.target===o.ARRAY_BUFFER&&(o.enableVertexAttribArray(c),o.vertexAttribPointer(c,this.size,this.type,this.normalized,0,0)),c}use(l){o.bindBuffer(this.target,this.buffer),this.target===o.ARRAY_BUFFER&&(o.enableVertexAttribArray(l),o.vertexAttribPointer(l,this.size,this.type,this.normalized,0,0))}}}});const f=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];s.commonUniforms={projectionMatrix:new s.Uniform({type:"mat4",value:f}),modelViewMatrix:new s.Uniform({type:"mat4",value:f}),resolution:new s.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new s.Uniform({type:"float",value:1})}}setSize(t=640,n=480){this.width=t,this.height=n,this.canvas.width=t,this.canvas.height=n,this.gl.viewport(0,0,t,n),this.commonUniforms.resolution.value=[t,n],this.commonUniforms.aspectRatio.value=t/n,this.debug("MiniGL.setSize",{width:t,height:n})}setOrthographicCamera(t=0,n=0,i=0,r=-2e3,s=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(r-s),0,t,n,i,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(t=>t.draw())}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class fr{constructor(...t){m(this,"el",void 0),m(this,"cssVarRetries",0),m(this,"maxCssVarRetries",200),m(this,"angle",0),m(this,"isLoadedClass",!1),m(this,"isScrolling",!1),m(this,"scrollingTimeout",void 0),m(this,"scrollingRefreshDelay",200),m(this,"isIntersecting",!1),m(this,"shaderFiles",void 0),m(this,"vertexShader",void 0),m(this,"sectionColors",void 0),m(this,"computedCanvasStyle",void 0),m(this,"conf",void 0),m(this,"uniforms",void 0),m(this,"t",1253106),m(this,"last",0),m(this,"width",void 0),m(this,"minWidth",1111),m(this,"height",600),m(this,"xSegCount",void 0),m(this,"ySegCount",void 0),m(this,"mesh",void 0),m(this,"material",void 0),m(this,"geometry",void 0),m(this,"minigl",void 0),m(this,"scrollObserver",void 0),m(this,"amp",320),m(this,"seed",5),m(this,"freqX",14e-5),m(this,"freqY",29e-5),m(this,"freqDelta",1e-5),m(this,"activeColors",[1,1,1,1]),m(this,"isMetaKey",!1),m(this,"isGradientLegendVisible",!1),m(this,"isMouseDown",!1),m(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),m(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),m(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),m(this,"handleMouseDown",n=>{this.isGradientLegendVisible&&(this.isMetaKey=n.metaKey,this.isMouseDown=!0,this.conf.playing===!1&&requestAnimationFrame(this.animate))}),m(this,"handleMouseUp",()=>{this.isMouseDown=!1}),m(this,"animate",n=>{if(!this.shouldSkipFrame(n)||this.isMouseDown){if(this.t+=Math.min(n-this.last,1e3/15),this.last=n,this.isMouseDown){let i=160;this.isMetaKey&&(i=-160),this.t+=i}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(this.last!==0&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),m(this,"addIsLoadedClass",()=>{!this.isLoadedClass&&(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{this.el.parentElement.classList.add("isLoaded")},3e3))}),m(this,"pause",()=>{this.conf.playing=!1}),m(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),m(this,"initGradient",n=>(this.el=document.querySelector(n),this.connect(),this))}async connect(){this.shaderFiles={vertex:`varying vec3 v_color;

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
}`},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new ur(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let t=1;t<this.sectionColors.length;t+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[t],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+t/this.sectionColors.length,3+t/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*t}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*t}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*t}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*t})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(t){return!!window.document.hidden||!this.conf.playing||parseInt(t,10)%2==0||void 0}updateFrequency(t){this.freqX+=t,this.freqY+=t}toggleColor(t){this.activeColors[t]=this.activeColors[t]===0?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")!==-1)this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(t=>{let n=this.computedCanvasStyle.getPropertyValue(t).trim();return n.length===4&&(n=`#${n.substr(1).split("").map(r=>r+r).join("")}`),n&&`0x${n.substr(1)}`}).filter(Boolean).map(cr)}}var hr=I('<canvas id="gradient-canvas" data-transition-in=""></canvas> <div class="layout"><!></div>',1);function dr(e,t){Gt(t,!1);const n=ot(),i={home:Xi,projects:ar,contact:lr},r=()=>{if(typeof window>"u")return"home";const d=window.location.hash.replace(/^#\/?/,"");return Object.keys(i).includes(d)?d:"home"};let s=ot("home");const u=()=>{ie(s,r())};qi(()=>{u(),window.addEventListener("hashchange",u);try{new fr().initGradient("#gradient-canvas")}catch(d){console.warn("Gradient init failed:",d)}return()=>window.removeEventListener("hashchange",u)}),_i(()=>_(s),()=>{ie(n,i[_(s)])}),bi(),Vi();var o=hr(),f=A(rn(o),2),l=x(f);Oi(l,()=>_(n),(d,c)=>{c(d,{})}),N(e,o),$t()}Di(dr,{target:document.getElementById("app")});
