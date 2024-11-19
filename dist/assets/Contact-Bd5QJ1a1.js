import{g as qt,r as d,T as Yt,h as Xt,c as Zt,b as he,_ as jr,j}from"./index-iJdlwSna.js";const Jt="/assets/contactVid-ZGlH1xLE.mp4";var Qt=function(r){return en(r)&&!rn(r)};function en(e){return!!e&&typeof e=="object"}function rn(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||an(e)}var tn=typeof Symbol=="function"&&Symbol.for,nn=tn?Symbol.for("react.element"):60103;function an(e){return e.$$typeof===nn}function on(e){return Array.isArray(e)?[]:{}}function be(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ce(on(e),e,r):e}function un(e,r,t){return e.concat(r).map(function(n){return be(n,t)})}function cn(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=be(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=be(r[i],t):n[i]=ce(e[i],r[i],t)}),n}function ce(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||un,t.isMergeableObject=t.isMergeableObject||Qt;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):cn(e,r,t):be(r,t)}ce.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return ce(n,i,t)},{})};var He=ce,Qr=typeof global=="object"&&global&&global.Object===Object&&global,sn=typeof self=="object"&&self&&self.Object===Object&&self,D=Qr||sn||Function("return this")(),k=D.Symbol,et=Object.prototype,ln=et.hasOwnProperty,fn=et.toString,ie=k?k.toStringTag:void 0;function dn(e){var r=ln.call(e,ie),t=e[ie];try{e[ie]=void 0;var n=!0}catch{}var i=fn.call(e);return n&&(r?e[ie]=t:delete e[ie]),i}var pn=Object.prototype,yn=pn.toString;function hn(e){return yn.call(e)}var vn="[object Null]",gn="[object Undefined]",Ar=k?k.toStringTag:void 0;function X(e){return e==null?e===void 0?gn:vn:Ar&&Ar in Object(e)?dn(e):hn(e)}function rt(e,r){return function(t){return e(r(t))}}var Je=rt(Object.getPrototypeOf,Object);function Z(e){return e!=null&&typeof e=="object"}var bn="[object Object]",mn=Function.prototype,Tn=Object.prototype,tt=mn.toString,Sn=Tn.hasOwnProperty,En=tt.call(Object);function $r(e){if(!Z(e)||X(e)!=bn)return!1;var r=Je(e);if(r===null)return!0;var t=Sn.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&tt.call(t)==En}function _n(){this.__data__=[],this.size=0}function nt(e,r){return e===r||e!==e&&r!==r}function me(e,r){for(var t=e.length;t--;)if(nt(e[t][0],r))return t;return-1}var jn=Array.prototype,An=jn.splice;function $n(e){var r=this.__data__,t=me(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():An.call(r,t,1),--this.size,!0}function wn(e){var r=this.__data__,t=me(r,e);return t<0?void 0:r[t][1]}function On(e){return me(this.__data__,e)>-1}function Cn(e,r){var t=this.__data__,n=me(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function z(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}z.prototype.clear=_n;z.prototype.delete=$n;z.prototype.get=wn;z.prototype.has=On;z.prototype.set=Cn;function In(){this.__data__=new z,this.size=0}function xn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Fn(e){return this.__data__.get(e)}function Mn(e){return this.__data__.has(e)}function fe(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Pn="[object AsyncFunction]",Rn="[object Function]",Ln="[object GeneratorFunction]",Nn="[object Proxy]";function at(e){if(!fe(e))return!1;var r=X(e);return r==Rn||r==Ln||r==Pn||r==Nn}var Be=D["__core-js_shared__"],wr=function(){var e=/[^.]+$/.exec(Be&&Be.keys&&Be.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Dn(e){return!!wr&&wr in e}var Un=Function.prototype,Vn=Un.toString;function J(e){if(e!=null){try{return Vn.call(e)}catch{}try{return e+""}catch{}}return""}var Bn=/[\\^$.*+?()[\]{}|]/g,zn=/^\[object .+?Constructor\]$/,Gn=Function.prototype,kn=Object.prototype,Hn=Gn.toString,Kn=kn.hasOwnProperty,Wn=RegExp("^"+Hn.call(Kn).replace(Bn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function qn(e){if(!fe(e)||Dn(e))return!1;var r=at(e)?Wn:zn;return r.test(J(e))}function Yn(e,r){return e==null?void 0:e[r]}function Q(e,r){var t=Yn(e,r);return qn(t)?t:void 0}var se=Q(D,"Map"),le=Q(Object,"create");function Xn(){this.__data__=le?le(null):{},this.size=0}function Zn(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Jn="__lodash_hash_undefined__",Qn=Object.prototype,ea=Qn.hasOwnProperty;function ra(e){var r=this.__data__;if(le){var t=r[e];return t===Jn?void 0:t}return ea.call(r,e)?r[e]:void 0}var ta=Object.prototype,na=ta.hasOwnProperty;function aa(e){var r=this.__data__;return le?r[e]!==void 0:na.call(r,e)}var ia="__lodash_hash_undefined__";function oa(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=le&&r===void 0?ia:r,this}function Y(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Y.prototype.clear=Xn;Y.prototype.delete=Zn;Y.prototype.get=ra;Y.prototype.has=aa;Y.prototype.set=oa;function ua(){this.size=0,this.__data__={hash:new Y,map:new(se||z),string:new Y}}function ca(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function Te(e,r){var t=e.__data__;return ca(r)?t[typeof r=="string"?"string":"hash"]:t.map}function sa(e){var r=Te(this,e).delete(e);return this.size-=r?1:0,r}function la(e){return Te(this,e).get(e)}function fa(e){return Te(this,e).has(e)}function da(e,r){var t=Te(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function H(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}H.prototype.clear=ua;H.prototype.delete=sa;H.prototype.get=la;H.prototype.has=fa;H.prototype.set=da;var pa=200;function ya(e,r){var t=this.__data__;if(t instanceof z){var n=t.__data__;if(!se||n.length<pa-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new H(n)}return t.set(e,r),this.size=t.size,this}function ne(e){var r=this.__data__=new z(e);this.size=r.size}ne.prototype.clear=In;ne.prototype.delete=xn;ne.prototype.get=Fn;ne.prototype.has=Mn;ne.prototype.set=ya;function ha(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var Or=function(){try{var e=Q(Object,"defineProperty");return e({},"",{}),e}catch{}}();function it(e,r,t){r=="__proto__"&&Or?Or(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var va=Object.prototype,ga=va.hasOwnProperty;function ot(e,r,t){var n=e[r];(!(ga.call(e,r)&&nt(n,t))||t===void 0&&!(r in e))&&it(e,r,t)}function Se(e,r,t,n){var i=!t;t||(t={});for(var o=-1,c=r.length;++o<c;){var p=r[o],v=void 0;v===void 0&&(v=e[p]),i?it(t,p,v):ot(t,p,v)}return t}function ba(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var ma="[object Arguments]";function Cr(e){return Z(e)&&X(e)==ma}var ut=Object.prototype,Ta=ut.hasOwnProperty,Sa=ut.propertyIsEnumerable,Ea=Cr(function(){return arguments}())?Cr:function(e){return Z(e)&&Ta.call(e,"callee")&&!Sa.call(e,"callee")},de=Array.isArray;function _a(){return!1}var ct=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ir=ct&&typeof module=="object"&&module&&!module.nodeType&&module,ja=Ir&&Ir.exports===ct,xr=ja?D.Buffer:void 0,Aa=xr?xr.isBuffer:void 0,st=Aa||_a,$a=9007199254740991,wa=/^(?:0|[1-9]\d*)$/;function Oa(e,r){var t=typeof e;return r=r??$a,!!r&&(t=="number"||t!="symbol"&&wa.test(e))&&e>-1&&e%1==0&&e<r}var Ca=9007199254740991;function lt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ca}var Ia="[object Arguments]",xa="[object Array]",Fa="[object Boolean]",Ma="[object Date]",Pa="[object Error]",Ra="[object Function]",La="[object Map]",Na="[object Number]",Da="[object Object]",Ua="[object RegExp]",Va="[object Set]",Ba="[object String]",za="[object WeakMap]",Ga="[object ArrayBuffer]",ka="[object DataView]",Ha="[object Float32Array]",Ka="[object Float64Array]",Wa="[object Int8Array]",qa="[object Int16Array]",Ya="[object Int32Array]",Xa="[object Uint8Array]",Za="[object Uint8ClampedArray]",Ja="[object Uint16Array]",Qa="[object Uint32Array]",E={};E[Ha]=E[Ka]=E[Wa]=E[qa]=E[Ya]=E[Xa]=E[Za]=E[Ja]=E[Qa]=!0;E[Ia]=E[xa]=E[Ga]=E[Fa]=E[ka]=E[Ma]=E[Pa]=E[Ra]=E[La]=E[Na]=E[Da]=E[Ua]=E[Va]=E[Ba]=E[za]=!1;function ei(e){return Z(e)&&lt(e.length)&&!!E[X(e)]}function Qe(e){return function(r){return e(r)}}var ft=typeof exports=="object"&&exports&&!exports.nodeType&&exports,oe=ft&&typeof module=="object"&&module&&!module.nodeType&&module,ri=oe&&oe.exports===ft,ze=ri&&Qr.process,te=function(){try{var e=oe&&oe.require&&oe.require("util").types;return e||ze&&ze.binding&&ze.binding("util")}catch{}}(),Fr=te&&te.isTypedArray,ti=Fr?Qe(Fr):ei,ni=Object.prototype,ai=ni.hasOwnProperty;function dt(e,r){var t=de(e),n=!t&&Ea(e),i=!t&&!n&&st(e),o=!t&&!n&&!i&&ti(e),c=t||n||i||o,p=c?ba(e.length,String):[],v=p.length;for(var h in e)(r||ai.call(e,h))&&!(c&&(h=="length"||i&&(h=="offset"||h=="parent")||o&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||Oa(h,v)))&&p.push(h);return p}var ii=Object.prototype;function er(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||ii;return e===t}var oi=rt(Object.keys,Object),ui=Object.prototype,ci=ui.hasOwnProperty;function si(e){if(!er(e))return oi(e);var r=[];for(var t in Object(e))ci.call(e,t)&&t!="constructor"&&r.push(t);return r}function pt(e){return e!=null&&lt(e.length)&&!at(e)}function rr(e){return pt(e)?dt(e):si(e)}function li(e,r){return e&&Se(r,rr(r),e)}function fi(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var di=Object.prototype,pi=di.hasOwnProperty;function yi(e){if(!fe(e))return fi(e);var r=er(e),t=[];for(var n in e)n=="constructor"&&(r||!pi.call(e,n))||t.push(n);return t}function tr(e){return pt(e)?dt(e,!0):yi(e)}function hi(e,r){return e&&Se(r,tr(r),e)}var yt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Mr=yt&&typeof module=="object"&&module&&!module.nodeType&&module,vi=Mr&&Mr.exports===yt,Pr=vi?D.Buffer:void 0,Rr=Pr?Pr.allocUnsafe:void 0;function gi(e,r){if(r)return e.slice();var t=e.length,n=Rr?Rr(t):new e.constructor(t);return e.copy(n),n}function ht(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function bi(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var c=e[t];r(c,t,e)&&(o[i++]=c)}return o}function vt(){return[]}var mi=Object.prototype,Ti=mi.propertyIsEnumerable,Lr=Object.getOwnPropertySymbols,nr=Lr?function(e){return e==null?[]:(e=Object(e),bi(Lr(e),function(r){return Ti.call(e,r)}))}:vt;function Si(e,r){return Se(e,nr(e),r)}function gt(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Ei=Object.getOwnPropertySymbols,bt=Ei?function(e){for(var r=[];e;)gt(r,nr(e)),e=Je(e);return r}:vt;function _i(e,r){return Se(e,bt(e),r)}function mt(e,r,t){var n=r(e);return de(e)?n:gt(n,t(e))}function ji(e){return mt(e,rr,nr)}function Ai(e){return mt(e,tr,bt)}var Ke=Q(D,"DataView"),We=Q(D,"Promise"),qe=Q(D,"Set"),Ye=Q(D,"WeakMap"),Nr="[object Map]",$i="[object Object]",Dr="[object Promise]",Ur="[object Set]",Vr="[object WeakMap]",Br="[object DataView]",wi=J(Ke),Oi=J(se),Ci=J(We),Ii=J(qe),xi=J(Ye),B=X;(Ke&&B(new Ke(new ArrayBuffer(1)))!=Br||se&&B(new se)!=Nr||We&&B(We.resolve())!=Dr||qe&&B(new qe)!=Ur||Ye&&B(new Ye)!=Vr)&&(B=function(e){var r=X(e),t=r==$i?e.constructor:void 0,n=t?J(t):"";if(n)switch(n){case wi:return Br;case Oi:return Nr;case Ci:return Dr;case Ii:return Ur;case xi:return Vr}return r});var Fi=Object.prototype,Mi=Fi.hasOwnProperty;function Pi(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&Mi.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var zr=D.Uint8Array;function ar(e){var r=new e.constructor(e.byteLength);return new zr(r).set(new zr(e)),r}function Ri(e,r){var t=r?ar(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Li=/\w*$/;function Ni(e){var r=new e.constructor(e.source,Li.exec(e));return r.lastIndex=e.lastIndex,r}var Gr=k?k.prototype:void 0,kr=Gr?Gr.valueOf:void 0;function Di(e){return kr?Object(kr.call(e)):{}}function Ui(e,r){var t=r?ar(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Vi="[object Boolean]",Bi="[object Date]",zi="[object Map]",Gi="[object Number]",ki="[object RegExp]",Hi="[object Set]",Ki="[object String]",Wi="[object Symbol]",qi="[object ArrayBuffer]",Yi="[object DataView]",Xi="[object Float32Array]",Zi="[object Float64Array]",Ji="[object Int8Array]",Qi="[object Int16Array]",eo="[object Int32Array]",ro="[object Uint8Array]",to="[object Uint8ClampedArray]",no="[object Uint16Array]",ao="[object Uint32Array]";function io(e,r,t){var n=e.constructor;switch(r){case qi:return ar(e);case Vi:case Bi:return new n(+e);case Yi:return Ri(e,t);case Xi:case Zi:case Ji:case Qi:case eo:case ro:case to:case no:case ao:return Ui(e,t);case zi:return new n;case Gi:case Ki:return new n(e);case ki:return Ni(e);case Hi:return new n;case Wi:return Di(e)}}var Hr=Object.create,oo=function(){function e(){}return function(r){if(!fe(r))return{};if(Hr)return Hr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();function uo(e){return typeof e.constructor=="function"&&!er(e)?oo(Je(e)):{}}var co="[object Map]";function so(e){return Z(e)&&B(e)==co}var Kr=te&&te.isMap,lo=Kr?Qe(Kr):so,fo="[object Set]";function po(e){return Z(e)&&B(e)==fo}var Wr=te&&te.isSet,yo=Wr?Qe(Wr):po,ho=1,vo=2,go=4,Tt="[object Arguments]",bo="[object Array]",mo="[object Boolean]",To="[object Date]",So="[object Error]",St="[object Function]",Eo="[object GeneratorFunction]",_o="[object Map]",jo="[object Number]",Et="[object Object]",Ao="[object RegExp]",$o="[object Set]",wo="[object String]",Oo="[object Symbol]",Co="[object WeakMap]",Io="[object ArrayBuffer]",xo="[object DataView]",Fo="[object Float32Array]",Mo="[object Float64Array]",Po="[object Int8Array]",Ro="[object Int16Array]",Lo="[object Int32Array]",No="[object Uint8Array]",Do="[object Uint8ClampedArray]",Uo="[object Uint16Array]",Vo="[object Uint32Array]",S={};S[Tt]=S[bo]=S[Io]=S[xo]=S[mo]=S[To]=S[Fo]=S[Mo]=S[Po]=S[Ro]=S[Lo]=S[_o]=S[jo]=S[Et]=S[Ao]=S[$o]=S[wo]=S[Oo]=S[No]=S[Do]=S[Uo]=S[Vo]=!0;S[So]=S[St]=S[Co]=!1;function ue(e,r,t,n,i,o){var c,p=r&ho,v=r&vo,h=r&go;if(c!==void 0)return c;if(!fe(e))return e;var L=de(e);if(L){if(c=Pi(e),!p)return ht(e,c)}else{var F=B(e),f=F==St||F==Eo;if(st(e))return gi(e,p);if(F==Et||F==Tt||f&&!i){if(c=v||f?{}:uo(e),!p)return v?_i(e,hi(c,e)):Si(e,li(c,e))}else{if(!S[F])return i?e:{};c=io(e,F,p)}}o||(o=new ne);var C=o.get(e);if(C)return C;o.set(e,c),yo(e)?e.forEach(function(O){c.add(ue(O,r,t,O,e,o))}):lo(e)&&e.forEach(function(O,_){c.set(_,ue(O,r,t,_,e,o))});var U=h?v?Ai:ji:v?tr:rr,N=L?void 0:U(e);return ha(N||e,function(O,_){N&&(_=O,O=e[_]),ot(c,_,ue(O,r,t,_,e,o))}),c}var Bo=1,zo=4;function ve(e){return ue(e,Bo|zo)}var qr=Array.isArray,Yr=Object.keys,Go=Object.prototype.hasOwnProperty,ko=typeof Element<"u";function Xe(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=qr(e),n=qr(r),i,o,c;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Xe(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,v=r instanceof Date;if(p!=v)return!1;if(p&&v)return e.getTime()==r.getTime();var h=e instanceof RegExp,L=r instanceof RegExp;if(h!=L)return!1;if(h&&L)return e.toString()==r.toString();var F=Yr(e);if(o=F.length,o!==Yr(r).length)return!1;for(i=o;i--!==0;)if(!Go.call(r,F[i]))return!1;if(ko&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(c=F[i],!(c==="_owner"&&e.$$typeof)&&!Xe(e[c],r[c]))return!1;return!0}return e!==e&&r!==r}var Ho=function(r,t){try{return Xe(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const W=qt(Ho);var Ko=4;function Xr(e){return ue(e,Ko)}function _t(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var Wo="[object Symbol]";function ir(e){return typeof e=="symbol"||Z(e)&&X(e)==Wo}var qo="Expected a function";function or(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(qo);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var c=e.apply(this,n);return t.cache=o.set(i,c)||o,c};return t.cache=new(or.Cache||H),t}or.Cache=H;var Yo=500;function Xo(e){var r=or(e,function(n){return t.size===Yo&&t.clear(),n}),t=r.cache;return r}var Zo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jo=/\\(\\)?/g,Qo=Xo(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Zo,function(t,n,i,o){r.push(i?o.replace(Jo,"$1"):n||t)}),r}),eu=1/0;function ru(e){if(typeof e=="string"||ir(e))return e;var r=e+"";return r=="0"&&1/e==-eu?"-0":r}var tu=1/0,Zr=k?k.prototype:void 0,Jr=Zr?Zr.toString:void 0;function jt(e){if(typeof e=="string")return e;if(de(e))return _t(e,jt)+"";if(ir(e))return Jr?Jr.call(e):"";var r=e+"";return r=="0"&&1/e==-tu?"-0":r}function nu(e){return e==null?"":jt(e)}function At(e){return de(e)?_t(e,ru):ir(e)?[e]:ht(Qo(nu(e)))}var $t={exports:{}},b={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=typeof Symbol=="function"&&Symbol.for,ur=w?Symbol.for("react.element"):60103,cr=w?Symbol.for("react.portal"):60106,Ee=w?Symbol.for("react.fragment"):60107,_e=w?Symbol.for("react.strict_mode"):60108,je=w?Symbol.for("react.profiler"):60114,Ae=w?Symbol.for("react.provider"):60109,$e=w?Symbol.for("react.context"):60110,sr=w?Symbol.for("react.async_mode"):60111,we=w?Symbol.for("react.concurrent_mode"):60111,Oe=w?Symbol.for("react.forward_ref"):60112,Ce=w?Symbol.for("react.suspense"):60113,au=w?Symbol.for("react.suspense_list"):60120,Ie=w?Symbol.for("react.memo"):60115,xe=w?Symbol.for("react.lazy"):60116,iu=w?Symbol.for("react.block"):60121,ou=w?Symbol.for("react.fundamental"):60117,uu=w?Symbol.for("react.responder"):60118,cu=w?Symbol.for("react.scope"):60119;function x(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case ur:switch(e=e.type,e){case sr:case we:case Ee:case je:case _e:case Ce:return e;default:switch(e=e&&e.$$typeof,e){case $e:case Oe:case xe:case Ie:case Ae:return e;default:return r}}case cr:return r}}}function wt(e){return x(e)===we}b.AsyncMode=sr;b.ConcurrentMode=we;b.ContextConsumer=$e;b.ContextProvider=Ae;b.Element=ur;b.ForwardRef=Oe;b.Fragment=Ee;b.Lazy=xe;b.Memo=Ie;b.Portal=cr;b.Profiler=je;b.StrictMode=_e;b.Suspense=Ce;b.isAsyncMode=function(e){return wt(e)||x(e)===sr};b.isConcurrentMode=wt;b.isContextConsumer=function(e){return x(e)===$e};b.isContextProvider=function(e){return x(e)===Ae};b.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur};b.isForwardRef=function(e){return x(e)===Oe};b.isFragment=function(e){return x(e)===Ee};b.isLazy=function(e){return x(e)===xe};b.isMemo=function(e){return x(e)===Ie};b.isPortal=function(e){return x(e)===cr};b.isProfiler=function(e){return x(e)===je};b.isStrictMode=function(e){return x(e)===_e};b.isSuspense=function(e){return x(e)===Ce};b.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ee||e===we||e===je||e===_e||e===Ce||e===au||typeof e=="object"&&e!==null&&(e.$$typeof===xe||e.$$typeof===Ie||e.$$typeof===Ae||e.$$typeof===$e||e.$$typeof===Oe||e.$$typeof===ou||e.$$typeof===uu||e.$$typeof===cu||e.$$typeof===iu)};b.typeOf=x;$t.exports=b;var su=$t.exports,Ot=su,lu={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ct={};Ct[Ot.ForwardRef]=lu;Ct[Ot.Memo]=fu;function $(){return $=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},$.apply(this,arguments)}function It(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var Fe=d.createContext(void 0);Fe.displayName="FormikContext";Fe.Provider;Fe.Consumer;function du(){var e=d.useContext(Fe);return e}var R=function(r){return typeof r=="function"},Me=function(r){return r!==null&&typeof r=="object"},pu=function(r){return String(Math.floor(Number(r)))===r},Ge=function(r){return Object.prototype.toString.call(r)==="[object String]"},ke=function(r){return Me(r)&&R(r.then)};function I(e,r,t,n){n===void 0&&(n=0);for(var i=At(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function q(e,r,t){for(var n=Xr(e),i=n,o=0,c=At(r);o<c.length-1;o++){var p=c[o],v=I(e,c.slice(0,o+1));if(v&&(Me(v)||Array.isArray(v)))i=i[p]=Xr(v);else{var h=c[o+1];i=i[p]=pu(h)&&Number(h)>=0?[]:{}}}return(o===0?e:i)[c[o]]===t?e:(t===void 0?delete i[c[o]]:i[c[o]]=t,o===0&&t===void 0&&delete n[c[o]],n)}function xt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var c=o[i],p=e[c];Me(p)?t.get(p)||(t.set(p,!0),n[c]=Array.isArray(p)?[]:{},xt(p,r,t,n[c])):n[c]=r}return n}function yu(e,r){switch(r.type){case"SET_VALUES":return $({},e,{values:r.payload});case"SET_TOUCHED":return $({},e,{touched:r.payload});case"SET_ERRORS":return W(e.errors,r.payload)?e:$({},e,{errors:r.payload});case"SET_STATUS":return $({},e,{status:r.payload});case"SET_ISSUBMITTING":return $({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return $({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return $({},e,{values:q(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return $({},e,{touched:q(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return $({},e,{errors:q(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return $({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return $({},e,{touched:xt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return $({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return $({},e,{isSubmitting:!1});default:return e}}var K={},ge={};function hu(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,c=o===void 0?!1:o,p=e.isInitialValid,v=e.enableReinitialize,h=v===void 0?!1:v,L=e.onSubmit,F=It(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=$({validateOnChange:t,validateOnBlur:i,validateOnMount:c,onSubmit:L},F),C=d.useRef(f.initialValues),U=d.useRef(f.initialErrors||K),N=d.useRef(f.initialTouched||ge),O=d.useRef(f.initialStatus),_=d.useRef(!1),G=d.useRef({});d.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var Mt=d.useState(0),Pt=Mt[1],pe=d.useRef({values:ve(f.initialValues),errors:ve(f.initialErrors)||K,touched:ve(f.initialTouched)||ge,status:ve(f.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),T=pe.current,m=d.useCallback(function(a){var u=pe.current;pe.current=yu(u,a),u!==pe.current&&Pt(function(s){return s+1})},[]),lr=d.useCallback(function(a,u){return new Promise(function(s,l){var y=f.validate(a,u);y==null?s(K):ke(y)?y.then(function(g){s(g||K)},function(g){l(g)}):s(y)})},[f.validate]),Pe=d.useCallback(function(a,u){var s=f.validationSchema,l=R(s)?s(u):s,y=u&&l.validateAt?l.validateAt(u,a):gu(a,l);return new Promise(function(g,A){y.then(function(){g(K)},function(V){V.name==="ValidationError"?g(vu(V)):A(V)})})},[f.validationSchema]),fr=d.useCallback(function(a,u){return new Promise(function(s){return s(G.current[a].validate(u))})},[]),dr=d.useCallback(function(a){var u=Object.keys(G.current).filter(function(l){return R(G.current[l].validate)}),s=u.length>0?u.map(function(l){return fr(l,I(a,l))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(s).then(function(l){return l.reduce(function(y,g,A){return g==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||g&&(y=q(y,u[A],g)),y},{})})},[fr]),Rt=d.useCallback(function(a){return Promise.all([dr(a),f.validationSchema?Pe(a):{},f.validate?lr(a):{}]).then(function(u){var s=u[0],l=u[1],y=u[2],g=He.all([s,l,y],{arrayMerge:bu});return g})},[f.validate,f.validationSchema,dr,lr,Pe]),P=M(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),Rt(a).then(function(u){return _.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:u})),u})});d.useEffect(function(){c&&_.current===!0&&W(C.current,f.initialValues)&&P(C.current)},[c,P]);var ae=d.useCallback(function(a){var u=a&&a.values?a.values:C.current,s=a&&a.errors?a.errors:U.current?U.current:f.initialErrors||{},l=a&&a.touched?a.touched:N.current?N.current:f.initialTouched||{},y=a&&a.status?a.status:O.current?O.current:f.initialStatus;C.current=u,U.current=s,N.current=l,O.current=y;var g=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:s,touched:l,status:y,values:u,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var A=f.onReset(T.values,Er);ke(A)?A.then(g):g()}else g()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){_.current===!0&&!W(C.current,f.initialValues)&&h&&(C.current=f.initialValues,ae(),c&&P(C.current))},[h,f.initialValues,ae,c,P]),d.useEffect(function(){h&&_.current===!0&&!W(U.current,f.initialErrors)&&(U.current=f.initialErrors||K,m({type:"SET_ERRORS",payload:f.initialErrors||K}))},[h,f.initialErrors]),d.useEffect(function(){h&&_.current===!0&&!W(N.current,f.initialTouched)&&(N.current=f.initialTouched||ge,m({type:"SET_TOUCHED",payload:f.initialTouched||ge}))},[h,f.initialTouched]),d.useEffect(function(){h&&_.current===!0&&!W(O.current,f.initialStatus)&&(O.current=f.initialStatus,m({type:"SET_STATUS",payload:f.initialStatus}))},[h,f.initialStatus,f.initialTouched]);var pr=M(function(a){if(G.current[a]&&R(G.current[a].validate)){var u=I(T.values,a),s=G.current[a].validate(u);return ke(s)?(m({type:"SET_ISVALIDATING",payload:!0}),s.then(function(l){return l}).then(function(l){m({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:s}}),Promise.resolve(s))}else if(f.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),Pe(T.values,a).then(function(l){return l}).then(function(l){m({type:"SET_FIELD_ERROR",payload:{field:a,value:I(l,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Lt=d.useCallback(function(a,u){var s=u.validate;G.current[a]={validate:s}},[]),Nt=d.useCallback(function(a){delete G.current[a]},[]),yr=M(function(a,u){m({type:"SET_TOUCHED",payload:a});var s=u===void 0?i:u;return s?P(T.values):Promise.resolve()}),hr=d.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),vr=M(function(a,u){var s=R(a)?a(T.values):a;m({type:"SET_VALUES",payload:s});var l=u===void 0?t:u;return l?P(s):Promise.resolve()}),ye=d.useCallback(function(a,u){m({type:"SET_FIELD_ERROR",payload:{field:a,value:u}})},[]),ee=M(function(a,u,s){m({type:"SET_FIELD_VALUE",payload:{field:a,value:u}});var l=s===void 0?t:s;return l?P(q(T.values,a,u)):Promise.resolve()}),gr=d.useCallback(function(a,u){var s=u,l=a,y;if(!Ge(a)){a.persist&&a.persist();var g=a.target?a.target:a.currentTarget,A=g.type,V=g.name,Ue=g.id,Ve=g.value,Kt=g.checked,Au=g.outerHTML,_r=g.options,Wt=g.multiple;s=u||V||Ue,l=/number|range/.test(A)?(y=parseFloat(Ve),isNaN(y)?"":y):/checkbox/.test(A)?Tu(I(T.values,s),Kt,Ve):_r&&Wt?mu(_r):Ve}s&&ee(s,l)},[ee,T.values]),Re=M(function(a){if(Ge(a))return function(u){return gr(u,a)};gr(a)}),re=M(function(a,u,s){u===void 0&&(u=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:u}});var l=s===void 0?i:s;return l?P(T.values):Promise.resolve()}),br=d.useCallback(function(a,u){a.persist&&a.persist();var s=a.target,l=s.name,y=s.id,g=s.outerHTML,A=u||l||y;re(A,!0)},[re]),Le=M(function(a){if(Ge(a))return function(u){return br(u,a)};br(a)}),mr=d.useCallback(function(a){R(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),Tr=d.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),Sr=d.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),Ne=M(function(){return m({type:"SUBMIT_ATTEMPT"}),P().then(function(a){var u=a instanceof Error,s=!u&&Object.keys(a).length===0;if(s){var l;try{if(l=Ut(),l===void 0)return}catch(y){throw y}return Promise.resolve(l).then(function(y){return _.current&&m({type:"SUBMIT_SUCCESS"}),y}).catch(function(y){if(_.current)throw m({type:"SUBMIT_FAILURE"}),y})}else if(_.current&&(m({type:"SUBMIT_FAILURE"}),u))throw a})}),Dt=M(function(a){a&&a.preventDefault&&R(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&R(a.stopPropagation)&&a.stopPropagation(),Ne().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),Er={resetForm:ae,validateForm:P,validateField:pr,setErrors:hr,setFieldError:ye,setFieldTouched:re,setFieldValue:ee,setStatus:Tr,setSubmitting:Sr,setTouched:yr,setValues:vr,setFormikState:mr,submitForm:Ne},Ut=M(function(){return L(T.values,Er)}),Vt=M(function(a){a&&a.preventDefault&&R(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&R(a.stopPropagation)&&a.stopPropagation(),ae()}),Bt=d.useCallback(function(a){return{value:I(T.values,a),error:I(T.errors,a),touched:!!I(T.touched,a),initialValue:I(C.current,a),initialTouched:!!I(N.current,a),initialError:I(U.current,a)}},[T.errors,T.touched,T.values]),zt=d.useCallback(function(a){return{setValue:function(s,l){return ee(a,s,l)},setTouched:function(s,l){return re(a,s,l)},setError:function(s){return ye(a,s)}}},[ee,re,ye]),Gt=d.useCallback(function(a){var u=Me(a),s=u?a.name:a,l=I(T.values,s),y={name:s,value:l,onChange:Re,onBlur:Le};if(u){var g=a.type,A=a.value,V=a.as,Ue=a.multiple;g==="checkbox"?A===void 0?y.checked=!!l:(y.checked=!!(Array.isArray(l)&&~l.indexOf(A)),y.value=A):g==="radio"?(y.checked=l===A,y.value=A):V==="select"&&Ue&&(y.value=y.value||[],y.multiple=!0)}return y},[Le,Re,T.values]),De=d.useMemo(function(){return!W(C.current,T.values)},[C.current,T.values]),kt=d.useMemo(function(){return typeof p<"u"?De?T.errors&&Object.keys(T.errors).length===0:p!==!1&&R(p)?p(f):p:T.errors&&Object.keys(T.errors).length===0},[p,De,T.errors,f]),Ht=$({},T,{initialValues:C.current,initialErrors:U.current,initialTouched:N.current,initialStatus:O.current,handleBlur:Le,handleChange:Re,handleReset:Vt,handleSubmit:Dt,resetForm:ae,setErrors:hr,setFormikState:mr,setFieldTouched:re,setFieldValue:ee,setFieldError:ye,setStatus:Tr,setSubmitting:Sr,setTouched:yr,setValues:vr,submitForm:Ne,validateForm:P,validateField:pr,isValid:kt,dirty:De,unregisterField:Nt,registerField:Lt,getFieldProps:Gt,getFieldMeta:Bt,getFieldHelpers:zt,validateOnBlur:i,validateOnChange:t,validateOnMount:c});return Ht}function vu(e){var r={};if(e.inner){if(e.inner.length===0)return q(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var c=o;I(r,c.path)||(r=q(r,c.path,c.message))}}return r}function gu(e,r,t,n){t===void 0&&(t=!1);var i=Ze(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:i})}function Ze(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||$r(i)?Ze(i):i!==""?i:void 0}):$r(e[n])?r[n]=Ze(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function bu(e,r,t){var n=e.slice();return r.forEach(function(o,c){if(typeof n[c]>"u"){var p=t.clone!==!1,v=p&&t.isMergeableObject(o);n[c]=v?He(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[c]=He(e[c],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function mu(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function Tu(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Su=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function M(e){var r=d.useRef(e);return Su(function(){r.current=e}),d.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}var Eu=d.forwardRef(function(e,r){var t=e.action,n=It(e,["action"]),i=t??"#",o=du(),c=o.handleReset,p=o.handleSubmit;return d.createElement("form",$({onSubmit:p,ref:r,onReset:c,action:i},n))});Eu.displayName="Form";function Ft(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(t=Ft(e[r]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function _u(){for(var e,r,t=0,n="",i=arguments.length;t<i;t++)(e=arguments[t])&&(r=Ft(e))&&(n&&(n+=" "),n+=r);return n}const ju=()=>{const{isDark:e,ToggleTheme:r}=d.useContext(Yt),[t,{isSuccess:n,isError:i,isLoading:o,error:c}]=Xt(),p=hu({initialValues:{name:"",subject:"",email:"",message:""},validationSchema:Zt({name:he().required("Enter name"),subject:he().required("Enter subject"),email:he().required("Enter email").email(),message:he().required("Enter message")}),onSubmit:(h,{resetForm:L})=>{t(h),L()}}),v=h=>_u({"input input-bordered text-slate-400 w-full bg-black max-w-xs":!0,"input input-bordered text-slate-400 w-full bg-black max-w-xs input-success":!p.errors[h]&&p.touched[h],"input input-bordered text-slate-400 w-full bg-black max-w-xs input-error":p.errors[h]&&p.touched[h]});return d.useEffect(()=>{n&&jr.success("Message Send Success")},[n]),d.useEffect(()=>{i&&jr.error("Message Not Send ")},[i]),j.jsxs("div",{className:"background-container bg-cover bg-fixed bg-no-repeat bg-center w-full",id:"hero",style:{backgroundImage:`url(${e?"https://i.pinimg.com/736x/e5/80/84/e58084c7456ca2654e8ae52ff72f6c1d.jpg":"https://i.pinimg.com/736x/d8/fb/ce/d8fbceffb4f8579ee4c1331dbe392ed7.jpg"})`},children:[j.jsx("div",{className:"flex justify-center pt-14",children:j.jsxs("h1",{className:"text-white font-bold  underline-offset-2 underline text-3xl",children:["Con",j.jsx("span",{className:"text-green-500",children:"tact"}),"  "]})}),j.jsxs("div",{className:"md:flex md:justify-around md:items-center p-4",children:[j.jsxs("div",{className:"card mt-4 shadow-lg shadow-white backdrop-blur-sm border md:flex justify-center items-center border-white ",children:[j.jsxs("div",{className:"pt-2 ",children:[j.jsx("video",{className:"mix-blend-screen brightness-[500%] bg-white shadow-md shadow-teal-500 rounded-full size-[150px]",autoPlay:!0,muted:!0,loop:!0,src:Jt}),j.jsx("p",{className:"font-bold text-teal-400 ",children:"Let's Connect US"})]}),j.jsx("form",{onSubmit:p.handleSubmit,children:j.jsxs("div",{className:"card-body",children:[j.jsx("input",{...p.getFieldProps("name"),type:"text",placeholder:" User Name",className:v("name")}),j.jsx("input",{...p.getFieldProps("subject"),type:"text",placeholder:"Subject",className:v("subject")}),j.jsx("input",{...p.getFieldProps("email"),type:"text",placeholder:"Email",className:v("email")}),j.jsx("textarea",{...p.getFieldProps("message"),className:` ${v("message")}`,placeholder:"Message"}),j.jsx("button",{type:"submit",className:"btn btn-outline btn-accent",children:"Send"})]})})]}),j.jsxs("div",{className:"md:w-[50%] pt-2",children:[j.jsx("p",{className:"py-3 font-bold text-2xl text-teal-400",children:'"Let’s Connect and Create Something Exceptional Together!"'}),j.jsx("p",{className:"text-white ",children:`"Thanks for checking out my portfolio! If you have a project, question, or just want to connect, feel free to reach out. I'm excited to work with creative teams and bring ideas to life. Let’s make something great together!"`})]})]})]})},wu=Object.freeze(Object.defineProperty({__proto__:null,default:ju},Symbol.toStringTag,{value:"Module"}));export{ju as C,wu as a,_u as c,hu as u};
