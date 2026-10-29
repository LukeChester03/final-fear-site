(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,M=33777,N=33778,te=33779,P=35840,ne=35841,re=35842,ie=35843,ae=36196,oe=37492,se=37496,ce=37488,F=37489,le=37490,ue=37491,de=37808,fe=37809,pe=37810,me=37811,he=37812,ge=37813,_e=37814,ve=37815,ye=37816,be=37817,xe=37818,Se=37819,Ce=37820,we=37821,Te=36492,Ee=36494,De=36495,Oe=36283,ke=36284,Ae=36285,je=36286,Me=2300,I=2301,Ne=2302,Pe=2303,Fe=2400,L=2401,Ie=2402,Le=3200,Re=`srgb`,ze=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=7681,We=35044,Ge=35048,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={};function Qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function et(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,R(...e))}function tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var nt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=1234567,ot=Math.PI/180,st=180/Math.PI;function ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function lt(e,t,n){return Math.max(t,Math.min(n,e))}function ut(e,t){return(e%t+t)%t}function dt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ft(e,t,n){return e===t?0:(n-e)/(t-e)}function pt(e,t,n){return(1-n)*e+n*t}function mt(e,t,n,r){return pt(e,t,1-Math.exp(-n*r))}function ht(e,t=1){return t-Math.abs(ut(e,t*2)-t)}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function vt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function yt(e,t){return e+Math.random()*(t-e)}function bt(e){return e*(.5-Math.random())}function xt(e){e!==void 0&&(at=e);let t=at+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function St(e){return e*ot}function Ct(e){return e*st}function wt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Tt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Et(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Dt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function kt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var At={DEG2RAD:ot,RAD2DEG:st,generateUUID:ct,clamp:lt,euclideanModulo:ut,mapLinear:dt,inverseLerp:ft,lerp:pt,damp:mt,pingpong:ht,smoothstep:gt,smootherstep:_t,randInt:vt,randFloat:yt,randFloatSpread:bt,seededRandom:xt,degToRad:St,radToDeg:Ct,isPowerOfTwo:wt,ceilPowerOfTwo:Tt,floorPowerOfTwo:Et,setQuaternionFromProperEuler:Dt,normalize:kt,denormalize:Ot},jt=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nt.copy(this).projectOnVector(e),this.sub(Nt)}reflect(e){return this.sub(Nt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nt=new B,Pt=new Mt,V=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return et(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ft.makeScale(e,t)),this}rotate(e){return et(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ft.makeRotation(-e)),this}translate(e,t){return et(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ft=new V,It=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rt(){let e={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return et(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return et(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ze]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var zt=Rt();function Bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Vt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ht,Ut=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ht===void 0&&(Ht=Ye(`canvas`)),Ht.width=e.width,Ht.height=e.height;let t=Ht.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ht}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Bt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Bt(t[e]/255)*255):t[e]=Bt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Wt=0,Gt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Kt(r[t].image)):e.push(Kt(r[t]))}else e=Kt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Kt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ut.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var qt=0,Jt=new B,Yt=class r extends rt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=ct(),this.name=``,this.source=new Gt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jt).x}get height(){return this.source.getSize(Jt).y}get depth(){return this.source.getSize(Jt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=300,Yt.DEFAULT_ANISOTROPY=1;var Xt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zt=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let r=new Yt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Qt=class extends Zt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$t=class extends Yt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},en=class extends Yt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},H=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/tn.setFromMatrixColumn(e,0).length(),i=1/tn.setFromMatrixColumn(e,1).length(),a=1/tn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rn,e,an)}lookAt(e,t,n){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),on.crossVectors(n,cn),on.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),on.crossVectors(n,cn)),on.normalize(),sn.crossVectors(cn,on),r[0]=on.x,r[4]=sn.x,r[8]=cn.x,r[1]=on.y,r[5]=sn.y,r[9]=cn.y,r[2]=on.z,r[6]=sn.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],M=r[3],N=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*ee+c*te,i[12]=a*w+o*O+s*j+c*P,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*ee+f*te,i[13]=l*w+u*O+d*j+f*P,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*ee+g*te,i[14]=p*w+m*O+h*j+g*P,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*ee+b*te,i[15]=_*w+v*O+y*j+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=tn.set(r[0],r[1],r[2]).length(),o=tn.set(r[4],r[5],r[6]).length(),s=tn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),nn.copy(this);let c=1/a,l=1/o,u=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=l,nn.elements[5]*=l,nn.elements[6]*=l,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tn=new B,nn=new H,rn=new B(0,0,0),an=new B(1,1,1),on=new B,sn=new B,cn=new B,ln=new H,un=new Mt,dn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-lt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ln.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ln,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return un.setFromEuler(this),this.setFromQuaternion(un,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER=`XYZ`;var fn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},pn=0,mn=new B,hn=new Mt,gn=new H,_n=new B,vn=new B,yn=new B,bn=new Mt,xn=new B(1,0,0),Sn=new B(0,1,0),Cn=new B(0,0,1),wn={type:`added`},Tn={type:`removed`},En={type:`childadded`,child:null},Dn={type:`childremoved`,child:null},On=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pn++}),this.uuid=ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new dn,r=new Mt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new H},normalMatrix:{value:new V}}),this.matrix=new H,this.matrixWorld=new H,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.multiply(hn),this}rotateOnWorldAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.premultiply(hn),this}rotateX(e){return this.rotateOnAxis(xn,e)}rotateY(e){return this.rotateOnAxis(Sn,e)}rotateZ(e){return this.rotateOnAxis(Cn,e)}translateOnAxis(e,t){return mn.copy(e).applyQuaternion(this.quaternion),this.position.add(mn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xn,e)}translateY(e){return this.translateOnAxis(Sn,e)}translateZ(e){return this.translateOnAxis(Cn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_n.copy(e):_n.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(vn,_n,this.up):gn.lookAt(_n,vn,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),hn.setFromRotationMatrix(gn),this.quaternion.premultiply(hn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,e,yn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,bn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};On.DEFAULT_UP=new B(0,1,0),On.DEFAULT_MATRIX_AUTO_UPDATE=!0,On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=class extends On{constructor(){super(),this.isGroup=!0,this.type=`Group`}},An={type:`move`},jn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(An)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Pn={h:0,s:0,l:0};function Fn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=zt.workingColorSpace){if(e=ut(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Fn(i,r,e+1/3),this.g=Fn(i,r,e),this.b=Fn(i,r,e-1/3)}return zt.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=Mn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}copyLinearToSRGB(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return zt.workingToColorSpace(In.copy(this),e),Math.round(lt(In.r*255,0,255))*65536+Math.round(lt(In.g*255,0,255))*256+Math.round(lt(In.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(In.copy(this),t);let n=In.r,r=In.g,i=In.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Re){zt.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,r=In.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Pn);let n=pt(Nn.h,Pn.h,t),r=pt(Nn.s,Pn.s,t),i=pt(Nn.l,Pn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new U;U.NAMES=Mn;var Ln=class extends On{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new B,zn=new B,Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new Xt,Yn=new Xt,Xn=new Xt,Zn=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Rn.subVectors(r,t),zn.subVectors(n,t),Bn.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(zn),s=Rn.dot(Bn),c=zn.dot(zn),l=zn.dot(Bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)!==null&&Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Vn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Vn.x),s.addScaledVector(a,Vn.y),s.addScaledVector(o,Vn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Jn.setScalar(0),Yn.setScalar(0),Xn.setScalar(0),Jn.fromBufferAttribute(e,t),Yn.fromBufferAttribute(e,n),Xn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jn,i.x),a.addScaledVector(Yn,i.y),a.addScaledVector(Xn,i.z),a}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),zn.subVectors(e,t),Rn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Rn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Hn.subVectors(r,n),Un.subVectors(i,n),Gn.subVectors(e,n);let s=Hn.dot(Gn),c=Un.dot(Gn);if(s<=0&&c<=0)return t.copy(n);Kn.subVectors(e,r);let l=Hn.dot(Kn),u=Un.dot(Kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Hn,a);qn.subVectors(e,i);let f=Hn.dot(qn),p=Un.dot(qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Un,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Hn,a).addScaledVector(Un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,er):er.fromBufferAttribute(r,t),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),lr.subVectors(this.max,cr),nr.subVectors(e.a,cr),rr.subVectors(e.b,cr),ir.subVectors(e.c,cr),ar.subVectors(rr,nr),or.subVectors(ir,rr),sr.subVectors(nr,ir);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-sr.z,sr.y,ar.z,0,-ar.x,or.z,0,-or.x,sr.z,0,-sr.x,-ar.y,ar.x,0,-or.y,or.x,0,-sr.y,sr.x,0];return!fr(t,nr,rr,ir,lr)||(t=[1,0,0,0,1,0,0,0,1],!fr(t,nr,rr,ir,lr))?!1:(ur.crossVectors(ar,or),t=[ur.x,ur.y,ur.z],fr(t,nr,rr,ir,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new B,new B,new B,new B,new B,new B,new B,new B],er=new B,tr=new Qn,nr=new B,rr=new B,ir=new B,ar=new B,or=new B,sr=new B,cr=new B,lr=new B,ur=new B,dr=new B;function fr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){dr.fromArray(e,a);let o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),s=t.dot(dr),c=n.dot(dr),l=r.dot(dr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var pr=new B,mr=new jt,hr=0,gr=class extends rt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix4(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyNormalMatrix(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.transformDirection(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ot(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ot(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ot(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ot(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ot(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},_r=class extends gr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},vr=class extends gr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},yr=class extends gr{constructor(e,t,n){super(new Float32Array(e),t,n)}},br=new Qn,xr=new B,Sr=new B,Cr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?br.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Sr)),this.expandByPoint(xr.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wr=0,Tr=new H,Er=new On,Dr=new B,Or=new Qn,kr=new Qn,Ar=new B,jr=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qe(e)?vr:_r)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tr.makeRotationFromQuaternion(e),this.applyMatrix4(Tr),this}rotateX(e){return Tr.makeRotationX(e),this.applyMatrix4(Tr),this}rotateY(e){return Tr.makeRotationY(e),this.applyMatrix4(Tr),this}rotateZ(e){return Tr.makeRotationZ(e),this.applyMatrix4(Tr),this}translate(e,t,n){return Tr.makeTranslation(e,t,n),this.applyMatrix4(Tr),this}scale(e,t,n){return Tr.makeScale(e,t,n),this.applyMatrix4(Tr),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new yr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(this.boundingBox.min,Or.min),this.boundingBox.expandByPoint(Ar),Ar.addVectors(this.boundingBox.max,Or.max),this.boundingBox.expandByPoint(Ar)):(this.boundingBox.expandByPoint(Or.min),this.boundingBox.expandByPoint(Or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(Or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(Or.min,kr.min),Or.expandByPoint(Ar),Ar.addVectors(Or.max,kr.max),Or.expandByPoint(Ar)):(Or.expandByPoint(kr.min),Or.expandByPoint(kr.max))}Or.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ar.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ar));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ar.fromBufferAttribute(a,t),o&&(Dr.fromBufferAttribute(e,t),Ar.add(Dr)),r=Math.max(r,n.distanceToSquared(Ar))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new gr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new jt,f=new jt,p=new jt,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new gr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ar.fromBufferAttribute(e,t),Ar.normalize(),e.setXYZ(t,Ar.x,Ar.y,Ar.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new gr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mr=new B,Nr=new B,Pr=new V,Fr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Mr.subVectors(n,t).cross(Nr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Mr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pr.getNormalMatrix(e),r=this.coplanarPoint(Mr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ir=0,Lr=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Fr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new jt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Rr=new B,zr=new B,Br=new B,Vr=new B,Hr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,t),Rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zr.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(zr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=Vr.dot(this.direction),s=-Vr.dot(Br),c=Vr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zr).addScaledVector(Br,d),f}intersectSphere(e,t){if(e.radius<0)return null;Rr.subVectors(e.center,this.origin);let n=Rr.dot(this.direction),r=Rr.dot(Rr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let N=S/w,te=C/w,P=1/w,ne=T-N*D,re=E-te*D,ie=O-N*A,ae=k-te*A,oe=ee-N*M,se=j-te*M,ce=oe*ae-se*ie,F=ne*se-re*oe,le=ie*re-ae*ne;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let de=P*(ce*D+F*A+le*M);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ur=class extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wr=new H,Gr=new Hr,Kr=new Cr,qr=new B,Jr=new B,Yr=new B,Xr=new B,Zr=new B,Qr=new B,$r=new B,ei=new B,W=class extends On{constructor(e=new jr,t=new Ur){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Qr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Zr.fromBufferAttribute(s,e),a?Qr.addScaledVector(Zr,r):Qr.addScaledVector(Zr.sub(t),r))}t.add(Qr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Gr.copy(e.ray).recast(e.near),!(Kr.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Kr,qr)===null||Gr.origin.distanceToSquared(qr)>(e.far-e.near)**2))&&(Wr.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(Wr),(n.boundingBox===null||Gr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ni(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ni(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ni(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ni(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ti(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ei.copy(s),ei.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ei);return l<n.near||l>n.far?null:{distance:l,point:ei.clone(),object:e}}function ni(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Jr),e.getVertexPosition(c,Yr),e.getVertexPosition(l,Xr);let u=ti(e,t,n,r,Jr,Yr,Xr,$r);if(u){let e=new B;Zn.getBarycoord($r,Jr,Yr,Xr,e),i&&(u.uv=Zn.getInterpolatedAttribute(i,s,c,l,e,new jt)),a&&(u.uv1=Zn.getInterpolatedAttribute(a,s,c,l,e,new jt)),o&&(u.normal=Zn.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};Zn.getNormal(Jr,Yr,Xr,t.normal),u.face=t,u.barycoord=e}return u}var ri=class extends Yt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ii=class extends gr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ai=new H,oi=new H,si=[],ci=new Qn,li=new H,ui=new W,di=new Cr,fi=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,li)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ai),ci.copy(e.boundingBox).applyMatrix4(ai),this.boundingBox.union(ci)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ai),di.copy(e.boundingSphere).applyMatrix4(ai),this.boundingSphere.union(di)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ui.geometry=this.geometry,ui.material=this.material,ui.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),di.copy(this.boundingSphere),di.applyMatrix4(n),e.ray.intersectsSphere(di)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ai),oi.multiplyMatrices(n,ai),ui.matrixWorld=oi,ui.raycast(e,si);for(let e=0,n=si.length;e<n;e++){let n=si[e];n.instanceId=i,n.object=this,t.push(n)}si.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ri(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pi=new Cr,mi=new jt(.5,.5),hi=new B,gi=class{constructor(e=new Fr,t=new Fr,n=new Fr,r=new Fr,i=new Fr,a=new Fr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476+mi.distanceTo(e.center),pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(hi.x=r.normal.x>0?e.max.x:e.min.x,hi.y=r.normal.y>0?e.max.y:e.min.y,hi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_i=class extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vi=new B,yi=new B,bi=new H,xi=new Hr,Si=new Cr,Ci=new B,wi=new B,Ti=class extends On{constructor(e=new jr,t=new _i){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)vi.fromBufferAttribute(t,e-1),yi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=vi.distanceTo(yi);e.setAttribute(`lineDistance`,new yr(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Si.copy(n.boundingSphere),Si.applyMatrix4(r),Si.radius+=i,e.ray.intersectsSphere(Si)===!1)return;bi.copy(r).invert(),xi.copy(e.ray).applyMatrix4(bi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ei(this,e,xi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ei(this,e,xi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ei(this,e,xi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ei(this,e,xi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ei(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(vi.fromBufferAttribute(s,i),yi.fromBufferAttribute(s,a),n.distanceSqToSegment(vi,yi,Ci,wi)>r)return;Ci.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ci);if(!(c<t.near||c>t.far))return{distance:c,point:wi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Di=new B,Oi=new B,ki=class extends Ti{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Di.fromBufferAttribute(t,e),Oi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Di.distanceTo(Oi);e.setAttribute(`lineDistance`,new yr(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ai=class extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ji=new H,Mi=new Hr,Ni=new Cr,Pi=new B,Fi=class extends On{constructor(e=new jr,t=new Ai){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere),Ni.applyMatrix4(r),Ni.radius+=i,e.ray.intersectsSphere(Ni)===!1)return;ji.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(ji);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Pi.fromBufferAttribute(l,n),Ii(Pi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Pi.fromBufferAttribute(l,a),Ii(Pi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ii(e,t,n,r,i,a,o){let s=Mi.distanceSqToPoint(e);if(s<n){let n=new B;Mi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Li=class extends Yt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ri=class extends Yt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zi=class extends Yt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Bi=class extends zi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vi=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hi=class e extends jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new yr(c,3)),this.setAttribute(`normal`,new yr(l,3)),this.setAttribute(`uv`,new yr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ui=class e extends jr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new yr(u,3)),this.setAttribute(`normal`,new yr(d,3)),this.setAttribute(`uv`,new yr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new jt,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new jt:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],i=[],a=[],o=new B,s=new H;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(lt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(lt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Gi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ki=new B,qi=new B,Ji=new Gi,Yi=new Gi,Xi=new Gi,Zi=class extends Wi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(qi.subVectors(r[0],r[1]).add(r[0]),c=qi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ki.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ki),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ji.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Yi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Xi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ji.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Yi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Xi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ji.calc(s),Yi.calc(s),Xi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},Qi=class e extends jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},$i=class e extends jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ea(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(na(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(na(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ta(e){let t={};for(let n=0;n<e.length;n++){let r=ea(e[n]);for(let e in r)t[e]=r[e]}return t}function na(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ra(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ia(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}var aa={clone:ea,merge:ta},oa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ca=class extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oa,this.fragmentShader=sa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=ra(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new jt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new H().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},la=class extends ca{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ua=class extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Le,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},da=class extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function pa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ma=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ha=class extends ma{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case L:i=e,o=2*t-n;break;case Ie:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case L:a=e,s=2*n-t;break;case Ie:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ga=class extends ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},_a=class extends ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},va=class extends ma{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=xa(n,t,g,y,r);i[p]=ya(x,o,_,b,m)}return i}};function ya(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ba(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function xa(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ya(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ba(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Sa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),pa(e.settings)&&(n.settings={inTangents:fa(e.settings.inTangents,Array),outTangents:fa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new va(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Me:t=this.InterpolantFactoryMethodDiscrete;break;case I:t=this.InterpolantFactoryMethodLinear;break;case Ne:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Me;case this.InterpolantFactoryMethodLinear:return I;case this.InterpolantFactoryMethodSmooth:return Ne;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;pa(this.settings)&&(Ca(this.settings.inTangents,e),Ca(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ne,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,pa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ca(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Sa.prototype.ValueTypeName=``,Sa.prototype.TimeBufferType=Float32Array,Sa.prototype.ValueBufferType=Float32Array,Sa.prototype.DefaultInterpolation=I;var wa=class extends Sa{constructor(e,t,n){super(e,t,n)}};wa.prototype.ValueTypeName=`bool`,wa.prototype.ValueBufferType=Array,wa.prototype.DefaultInterpolation=Me,wa.prototype.InterpolantFactoryMethodLinear=void 0,wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends Sa{constructor(e,t,n,r){super(e,t,n,r)}};Ta.prototype.ValueTypeName=`color`;var Ea=class extends Sa{constructor(e,t,n,r){super(e,t,n,r)}};Ea.prototype.ValueTypeName=`number`;var Da=class extends ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Oa=class extends Sa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};Oa.prototype.ValueTypeName=`quaternion`,Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Sa{constructor(e,t,n){super(e,t,n)}};ka.prototype.ValueTypeName=`string`,ka.prototype.ValueBufferType=Array,ka.prototype.DefaultInterpolation=Me,ka.prototype.InterpolantFactoryMethodLinear=void 0,ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends Sa{constructor(e,t,n,r){super(e,t,n,r)}};Aa.prototype.ValueTypeName=`vector`;var ja=new B,Ma=new Mt,Na=new B,Pa=class extends On{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new H,this.projectionMatrix=new H,this.projectionMatrixInverse=new H,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ja,Ma,Na),Na.x===1&&Na.y===1&&Na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Ma,Na.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ja,Ma,Na),Na.x===1&&Na.y===1&&Na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Ma,Na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fa=new B,Ia=new jt,La=new jt,Ra=class extends Pa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=st*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ot*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return st*2*Math.atan(Math.tan(ot*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z)}getViewSize(e,t){return this.getViewBounds(e,Ia,La),t.subVectors(La,Ia)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ot*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},za=class extends Pa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ba=class extends jr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Va=-90,Ha=1,Ua=class extends On{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ra(Va,Ha,e,t);r.layers=this.layers,this.add(r);let i=new Ra(Va,Ha,e,t);i.layers=this.layers,this.add(i);let a=new Ra(Va,Ha,e,t);a.layers=this.layers,this.add(a);let o=new Ra(Va,Ha,e,t);o.layers=this.layers,this.add(o);let s=new Ra(Va,Ha,e,t);s.layers=this.layers,this.add(s);let c=new Ra(Va,Ha,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Wa=class extends Ra{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ga=`\\[\\]\\.:\\/`,Ka=RegExp(`[\\[\\]\\.:\\/]`,`g`),qa=`[^\\[\\]\\.:\\/]`,Ja=`[^`+Ga.replace(`\\.`,``)+`]`,Ya=`((?:WC+[\\/:])*)`.replace(`WC`,qa),Xa=`(WCOD+)?`.replace(`WCOD`,Ja),Za=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,qa),Qa=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,qa),$a=RegExp(`^`+Ya+Xa+Za+Qa+`$`),eo=[`material`,`materials`,`bones`,`map`],to=class{constructor(e,t,n){let r=n||no.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},no=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ka,``)}static parseTrackName(e){let t=$a.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);eo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};no.Composite=to,no.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},no.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},no.prototype.GetterByBindingType=[no.prototype._getValue_direct,no.prototype._getValue_array,no.prototype._getValue_arrayElement,no.prototype._getValue_toArray],no.prototype.SetterByBindingTypeAndVersioning=[[no.prototype._setValue_direct,no.prototype._setValue_direct_setNeedsUpdate,no.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[no.prototype._setValue_array,no.prototype._setValue_array_setNeedsUpdate,no.prototype._setValue_array_setMatrixWorldNeedsUpdate],[no.prototype._setValue_arrayElement,no.prototype._setValue_arrayElement_setNeedsUpdate,no.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[no.prototype._setValue_fromArray,no.prototype._setValue_fromArray_setNeedsUpdate,no.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ro=new H,io=class{constructor(e,t,n=0,r=1/0){this.ray=new Hr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return ro.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ro),this}intersectObject(e,t=!0,n=[]){return oo(e,this,n,t),n.sort(ao),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)oo(e[r],this,n,t);return n.sort(ao),n}};function ao(e,t){return e.distance-t.distance}function oo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)oo(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function so(e,t,n,r){let i=co(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case N:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ne:case ie:return Math.max(e,16)*Math.max(t,8)/4;case P:case re:return Math.max(e,8)*Math.max(t,8)/2;case ae:case oe:case ce:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Te:case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function co(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function lo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function uo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var fo={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},po={basic:{uniforms:ta([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:fo.meshbasic_vert,fragmentShader:fo.meshbasic_frag},lambert:{uniforms:ta([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:fo.meshlambert_vert,fragmentShader:fo.meshlambert_frag},phong:{uniforms:ta([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fo.meshphong_vert,fragmentShader:fo.meshphong_frag},standard:{uniforms:ta([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fo.meshphysical_vert,fragmentShader:fo.meshphysical_frag},toon:{uniforms:ta([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new U(0)}}]),vertexShader:fo.meshtoon_vert,fragmentShader:fo.meshtoon_frag},matcap:{uniforms:ta([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:fo.meshmatcap_vert,fragmentShader:fo.meshmatcap_frag},points:{uniforms:ta([G.points,G.fog]),vertexShader:fo.points_vert,fragmentShader:fo.points_frag},dashed:{uniforms:ta([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fo.linedashed_vert,fragmentShader:fo.linedashed_frag},depth:{uniforms:ta([G.common,G.displacementmap]),vertexShader:fo.depth_vert,fragmentShader:fo.depth_frag},normal:{uniforms:ta([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:fo.meshnormal_vert,fragmentShader:fo.meshnormal_frag},sprite:{uniforms:ta([G.sprite,G.fog]),vertexShader:fo.sprite_vert,fragmentShader:fo.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fo.background_vert,fragmentShader:fo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:fo.backgroundCube_vert,fragmentShader:fo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fo.cube_vert,fragmentShader:fo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fo.equirect_vert,fragmentShader:fo.equirect_frag},distance:{uniforms:ta([G.common,G.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fo.distance_vert,fragmentShader:fo.distance_frag},shadow:{uniforms:ta([G.lights,G.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:fo.shadow_vert,fragmentShader:fo.shadow_frag}};po.physical={uniforms:ta([po.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:fo.meshphysical_vert,fragmentShader:fo.meshphysical_frag};var mo={r:0,b:0,g:0},ho=new H,go=new V;go.set(-1,0,0,0,1,0,0,0,1);function _o(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new Hi(1,1,1),new ca({name:`BackgroundCubeMaterial`,uniforms:ea(po.backgroundCube.uniforms),vertexShader:po.backgroundCube.vertexShader,fragmentShader:po.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ho.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(go),l.material.toneMapped=zt.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new Qi(2,2),new ca({name:`BackgroundMaterial`,uniforms:ea(po.background.uniforms),vertexShader:po.background.vertexShader,fragmentShader:po.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=zt.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(mo,ia(e)),n.buffers.color.setClear(mo.r,mo.g,mo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function vo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function yo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function bo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function xo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Fr,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var So=4,Co=6,wo=20,To=256,Eo=new za,Do=new U,Oo=null,ko=0,Ao=0,jo=!1,Mo=new B,No=new B,Po=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Mo}=i;Oo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo,ko,Ao),this._renderer.xr.enabled=jo,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:ze,depthBuffer:!1},r=Io(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Io(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fo(r)),this._blurMaterial=zo(r,e,t),this._ggxMaterial=Ro(r,e,t)}return r}_compileMaterial(e){let t=new W(new jr,e);this._renderer.compile(t,Eo)}_sceneToCubeUV(e,t,n,r,i){let a=new Ra(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Do),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Hi,new Ur({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Do),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Lo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Lo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Eo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-So?n-d+So:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Lo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Eo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Lo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Eo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Lo(t,3*l*(r>this._lodMax-So?r-this._lodMax+So:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Eo)}};function Fo(e){let t=[],n=[],r=e,i=e-So+1+Co;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?No.set(1,r,n):e===1?No.set(-n,1,-r):e===2?No.set(-n,r,1):e===3?No.set(-1,r,-n):e===4?No.set(-n,-1,r):No.set(n,r,-1),No.toArray(l,(e*6+t)*3)}}let u=new jr;u.setAttribute(`position`,new gr(c,3)),u.setAttribute(`outputDirection`,new gr(l,3)),n.push(new W(u,null)),r>So&&r--}return{lodMeshes:n,sizeLods:t}}function Io(e,t,n){let r=new Qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Lo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ro(e,t,n){return new ca({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:To,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ho(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zo(e,t,n){return new ca({name:`SphericalGaussianBlur`,defines:{SAMPLES:wo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ho(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bo(){return new ca({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vo(){return new ca({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Uo=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Li(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hi(5,5,5),i=new ca({name:`CubemapFromEquirect`,uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Ua(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Wo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Uo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Po(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Po(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Go(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ko(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?vr:_r)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function qo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Jo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Yo(e,t,n){let r=new WeakMap,i=new Xt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new $t(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new jt(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Xo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Zo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Qo(e,t,n,r,i,a){let o=new Qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new jr;l.setAttribute(`position`,new yr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new yr([0,2,0,0,2,0],2));let u=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new za(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},zt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Zo[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var $o=new Yt,es=new zi(1,1),ts=new $t,ns=new en,rs=new Li,is=[],as=[],os=new Float32Array(16),ss=new Float32Array(9),cs=new Float32Array(4);function ls(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=is[i];if(a===void 0&&(a=new Float32Array(i),is[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function us(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ds(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function fs(e,t){let n=as[t];n===void 0&&(n=new Int32Array(t),as[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ps(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(us(n,t))return;e.uniform2fv(this.addr,t),ds(n,t)}}function hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(us(n,t))return;e.uniform3fv(this.addr,t),ds(n,t)}}function gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(us(n,t))return;e.uniform4fv(this.addr,t),ds(n,t)}}function _s(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(us(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ds(n,t)}else{if(us(n,r))return;cs.set(r),e.uniformMatrix2fv(this.addr,!1,cs),ds(n,r)}}function vs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(us(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ds(n,t)}else{if(us(n,r))return;ss.set(r),e.uniformMatrix3fv(this.addr,!1,ss),ds(n,r)}}function ys(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(us(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ds(n,t)}else{if(us(n,r))return;os.set(r),e.uniformMatrix4fv(this.addr,!1,os),ds(n,r)}}function bs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(us(n,t))return;e.uniform2iv(this.addr,t),ds(n,t)}}function Ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(us(n,t))return;e.uniform3iv(this.addr,t),ds(n,t)}}function Cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(us(n,t))return;e.uniform4iv(this.addr,t),ds(n,t)}}function ws(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(us(n,t))return;e.uniform2uiv(this.addr,t),ds(n,t)}}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(us(n,t))return;e.uniform3uiv(this.addr,t),ds(n,t)}}function Ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(us(n,t))return;e.uniform4uiv(this.addr,t),ds(n,t)}}function Os(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(es.compareFunction=n.isReversedDepthBuffer()?518:515,a=es):a=$o,n.setTexture2D(t||a,i)}function ks(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ns,i)}function As(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||rs,i)}function js(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ts,i)}function Ms(e){switch(e){case 5126:return ps;case 35664:return ms;case 35665:return hs;case 35666:return gs;case 35674:return _s;case 35675:return vs;case 35676:return ys;case 5124:case 35670:return bs;case 35667:case 35671:return xs;case 35668:case 35672:return Ss;case 35669:case 35673:return Cs;case 5125:return ws;case 36294:return Ts;case 36295:return Es;case 36296:return Ds;case 35678:case 36198:case 36298:case 36306:case 35682:return Os;case 35679:case 36299:case 36307:return ks;case 35680:case 36300:case 36308:case 36293:return As;case 36289:case 36303:case 36311:case 36292:return js}}function Ns(e,t){e.uniform1fv(this.addr,t)}function Ps(e,t){let n=ls(t,this.size,2);e.uniform2fv(this.addr,n)}function Fs(e,t){let n=ls(t,this.size,3);e.uniform3fv(this.addr,n)}function Is(e,t){let n=ls(t,this.size,4);e.uniform4fv(this.addr,n)}function Ls(e,t){let n=ls(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Rs(e,t){let n=ls(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function zs(e,t){let n=ls(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Bs(e,t){e.uniform1iv(this.addr,t)}function Vs(e,t){e.uniform2iv(this.addr,t)}function Hs(e,t){e.uniform3iv(this.addr,t)}function Us(e,t){e.uniform4iv(this.addr,t)}function Ws(e,t){e.uniform1uiv(this.addr,t)}function Gs(e,t){e.uniform2uiv(this.addr,t)}function Ks(e,t){e.uniform3uiv(this.addr,t)}function qs(e,t){e.uniform4uiv(this.addr,t)}function Js(e,t,n){let r=this.cache,i=t.length,a=fs(n,i);us(r,a)||(e.uniform1iv(this.addr,a),ds(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?es:$o;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ys(e,t,n){let r=this.cache,i=t.length,a=fs(n,i);us(r,a)||(e.uniform1iv(this.addr,a),ds(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ns,a[e])}function Xs(e,t,n){let r=this.cache,i=t.length,a=fs(n,i);us(r,a)||(e.uniform1iv(this.addr,a),ds(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||rs,a[e])}function Zs(e,t,n){let r=this.cache,i=t.length,a=fs(n,i);us(r,a)||(e.uniform1iv(this.addr,a),ds(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ts,a[e])}function Qs(e){switch(e){case 5126:return Ns;case 35664:return Ps;case 35665:return Fs;case 35666:return Is;case 35674:return Ls;case 35675:return Rs;case 35676:return zs;case 5124:case 35670:return Bs;case 35667:case 35671:return Vs;case 35668:case 35672:return Hs;case 35669:case 35673:return Us;case 5125:return Ws;case 36294:return Gs;case 36295:return Ks;case 36296:return qs;case 35678:case 36198:case 36298:case 36306:case 35682:return Js;case 35679:case 36299:case 36307:return Ys;case 35680:case 36300:case 36308:case 36293:return Xs;case 36289:case 36303:case 36311:case 36292:return Zs}}var $s=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ms(t.type)}},ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qs(t.type)}},tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},nc=/(\w+)(\])?(\[|\.)?/g;function rc(e,t){e.seq.push(t),e.map[t.id]=t}function ic(e,t,n){let r=e.name,i=r.length;for(nc.lastIndex=0;;){let a=nc.exec(r),o=nc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){rc(n,l===void 0?new $s(s,e,t):new ec(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new tc(s),rc(n,e)),n=e}}}var ac=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ic(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function oc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var sc=37297,cc=0;function lc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var uc=new V;function dc(e){zt._getMatrix(uc,zt.workingColorSpace,e);let t=`mat3( ${uc.elements.map(e=>e.toFixed(4))} )`;switch(zt.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function fc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+lc(e.getShaderSource(t),r)}return i}function pc(e,t){let n=dc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var mc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function hc(e,t){let n=mc[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var gc=new B;function _c(){return zt.getLuminanceCoefficients(gc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${gc.x.toFixed(4)}, ${gc.y.toFixed(4)}, ${gc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function vc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(xc).join(`
`)}function yc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function bc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function xc(e){return e!==``}function Sc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(e){return e.replace(wc,Dc)}var Ec=new Map;function Dc(e,t){let n=fo[t];if(n===void 0){let e=Ec.get(t);if(e!==void 0)n=fo[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Tc(n)}var Oc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(e){return e.replace(Oc,Ac)}function Ac(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function jc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Mc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Nc(e){return Mc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Pc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Fc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Pc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ic={302:`ENVMAP_MODE_REFRACTION`};function Lc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ic[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Rc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function zc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Rc[e.combine]||`ENVMAP_BLENDING_NONE`}function Bc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Vc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Nc(n),l=Fc(n),u=Lc(n),d=zc(n),f=Bc(n),p=vc(n),m=yc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(xc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(xc).join(`
`),_.length>0&&(_+=`
`)):(g=[jc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(xc).join(`
`),_=[jc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:fo.tonemapping_pars_fragment,n.toneMapping===0?``:hc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,fo.colorspace_pars_fragment,pc(`linearToOutputTexel`,n.outputColorSpace),_c(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(xc).join(`
`)),o=Tc(o),o=Sc(o,n),o=Cc(o,n),s=Tc(s),s=Sc(s,n),s=Cc(s,n),o=kc(o),s=kc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=oc(i,i.VERTEX_SHADER,y),S=oc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=fc(i,x,`vertex`),n=fc(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ac(i,h),T=bc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,sc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Hc=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wc(e),t.set(e,n)),n}},Wc=class{constructor(e){this.id=Hc++,this.code=e,this.usedTimes=0}};function Gc(e){return e===1030||e===37490||e===36285}function Kc(e,t,n,r,i,a){let o=new fn,s=new Uc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=po[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=ue&&!!i.anisotropyMap,ve=de&&!!i.clearcoatMap,ye=de&&!!i.clearcoatNormalMap,be=de&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,I=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Gc(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:_e,clearcoat:de,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:I,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:le&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&zt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&zt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=po[t];n=aa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Vc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function qc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Jc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Xc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Jc),r.length>1&&r.sort(t||Yc),i.length>1&&i.sort(t||Yc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Zc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Xc,e.set(t,[i])):n>=r.length?(i=new Xc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Qc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new U};break;case`SpotLight`:n={position:new B,direction:new B,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function $c(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var el=0;function tl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function nl(e){let t=new Qc,n=$c(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new H,o=new H;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(tl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=el++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function rl(e){let t=new nl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function il(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new rl(e),t.set(n,[a])):r>=i.length?(a=new rl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var al=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ol=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sl=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],cl=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ll=new H,ul=new B,dl=new B;function fl(e,t,n){let i=new gi,a=new jt,s=new jt,c=new Xt,l=new ua,u=new da,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:al,fragmentShader:ol}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new jr;y.setAttribute(`position`,new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new W(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){R(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Qt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new zi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Uo(a.x),p.map.depthTexture=new Bi(a.x,m)):(p.map=new Qt(a.x,a.y),p.map.depthTexture=new zi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ul.setFromMatrixPosition(d.matrixWorld),e.position.copy(ul),dl.copy(e.position),dl.add(sl[t]),e.up.copy(cl[t]),e.lookAt(dl),e.updateMatrixWorld(),n.makeTranslation(-ul.x,-ul.y,-ul.z),ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(ll,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Qt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function pl(e,t){function n(){let t=!1,n=new Xt,r=null,i=new Xt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=nt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(te)[1]),M=N>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Xt().fromArray(re),oe=new Xt().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(le(e.BLEND),g=!1);else if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(M&&e.lineWidth(t),k=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+j-1),P!==t&&(e.activeTexture(t),P=t)}function Ce(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+j-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function I(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function L(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Ie(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:I,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:L,viewport:Ie,reset:ze}}function ml(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new jt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ye(`canvas`)}function T(e,t,n){let r=1,i=Pe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Be:zt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ee(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),te(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),ne(t)}function te(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&P(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function P(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ne(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let re=0;function ie(){re=0}function ae(){return re}function oe(e){re=e}function se(){let e=re;return e>=p.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),re+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function F(e,t){let n=f.get(e);if(e.isVideoTexture&&I(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function le(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ye(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ue(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ye(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?be(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let fe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},pe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},me={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function he(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,fe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,fe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,fe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,pe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,pe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,me[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ge(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,M));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ce(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&P(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=_e(r.start,t.width,4),c=_e(n.start,t.width,4);r.start<=o+1&&s===c&&_e(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function ye(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ge(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=zt.getPrimaries(zt.workingColorSpace),n=t.colorSpace===``?null:zt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Ne(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);he(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ee(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ve(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=so(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=so(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Pe(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Pe(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function be(e,t,n){if(t.image.length!==6)return;let r=ge(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=zt.getPrimaries(zt.workingColorSpace),o=t.colorSpace===``?null:zt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ne(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);he(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Pe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,je(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Se(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ee(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ce(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,i.__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,M)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),he(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else F(t.depthTexture,0);let a=i.__webglTexture,o=je(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ce(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Ce(t.__webglFramebuffer[0],e,0):Ce(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Se(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Se(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Te(e,t,n){let r=f.get(e);t!==void 0&&xe(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&we(e)}function Ee(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,N);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Me(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=je(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Se(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),he(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)xe(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),he(o,r),xe(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),he(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else xe(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&we(e)}function De(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let Oe=[],ke=[];function Ae(e){if(e.samples>0){if(Me(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Oe.length=0,ke.length=0,Oe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(Oe.push(a),ke.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,ke)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Oe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function je(e){return Math.min(p.maxSamples,e.samples)}function Me(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function I(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ne(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(zt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=F,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function hl(e,t){function n(n,r=``){let i,a=zt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var gl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_l=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Vi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ca({vertexShader:gl,fragmentShader:_l,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yl=class extends rt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new vl,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new jt,k=null,A=null,ee=new Ra;ee.viewport=new Xt;let j=new Ra;j.viewport=new Xt;let M=[ee,j],N=new Wa,te=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getHandSpace()};function ne(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}te=null,P=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Qt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new zi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ae=new B,oe=new B;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=j.near=ee.near=t,N.far=j.far=ee.far=n,(te!==N.near||P!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),te=N.near,P=N.far),N.layers.mask=e.layers.mask|6,ee.layers.mask=N.layers.mask&-5,j.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;ce(N,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(N,ee,j):N.projectionMatrix.copy(ee.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),F(e,N,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=st*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let le=null;function ue(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=M[n];o===void 0&&(o=new Ra,o.layers.enable(n),o.viewport=new Xt,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Vi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let de=new lo;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},bl=new H,xl=new V;xl.set(-1,0,0,0,1,0,0,0,1);function Sl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ia(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(bl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(xl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Cl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var wl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tl=null;function El(){return Tl===null&&(Tl=new ri(wl,16,16,k,g),Tl.name=`DFG_LUT`,Tl.minFilter=o,Tl.magFilter=o,Tl.wrapS=t,Tl.wrapT=t,Tl.generateMipmaps=!1,Tl.needsUpdate=!0),Tl}var Dl=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new B,k=null,j=null,M=[],N=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,ne=!1,re=null,ie=null,ae=null,oe=null;this._outputColorSpace=Re;let se=0,ce=0,F=null,le=-1,ue=null,de=new Xt,fe=new Xt,pe=null,me=new U(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new Xt(0,0,ge,_e),Se=new Xt(0,0,ge,_e),Ce=!1,we=new gi,Te=!1,Ee=!1,De=new H,Oe=new B,ke=new Xt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return F===null?ve:1}let I=n;function Ne(e,n){return t.getContext(e,n)}let Pe,Fe,L,Ie,Le,ze,Be,Ve,He,Ue,We,Ge,qe,Je,Ye,Ze,$e,et,nt,rt,it,at,ot;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),I===null){let t=`webgl2`;if(I=Ne(t,e),I===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),z(`WebGLRenderer: `+e.message),e}function st(){Pe=new Go(I),Pe.init(),it=new hl(I,Pe),Fe=new bo(I,Pe,e,it),L=new pl(I,Pe),Fe.reversedDepthBuffer&&h&&L.buffers.depth.setReversed(!0),ie=I.createFramebuffer(),ae=I.createFramebuffer(),oe=I.createFramebuffer(),Ie=new Jo(I),Le=new qc,ze=new ml(I,Pe,L,Le,Fe,it,Ie),Be=new Wo(P),Ve=new uo(I),at=new vo(I,Ve),He=new Ko(I,Ve,Ie,at),Ue=new Xo(I,He,Ve,at,Ie),et=new Yo(I,Fe,ze),Ye=new xo(Le),We=new Kc(P,Be,Pe,Fe,at,Ye),Ge=new Sl(P,Le),qe=new Zc,Je=new il(Pe),$e=new _o(P,Be,L,Ue,x,s),Ze=new fl(P,Ue,Fe),ot=new Cl(I,Ie,Fe,L),nt=new yo(I,Pe,Ie),rt=new qo(I,Pe,Ie),Ie.programs=We.programs,P.capabilities=Fe,P.extensions=Pe,P.properties=Le,P.renderLists=qe,P.shadowMap=Ze,P.state=L,P.info=Ie}S!==1009&&(te=new Qo(S,t.width,t.height,o,r,i));let ct=new yl(P,I);this.xr=ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){ct.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=C.has(t)}if(e){let e=F.texture.type,t=w.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,I.clearBufferuiv(I.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,I.clearBufferiv(I.COLOR,0,E))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),$e.dispose(),qe.dispose(),Je.dispose(),Le.dispose(),Be.dispose(),Ue.dispose(),at.dispose(),ot.dispose(),We.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,vt),ct.removeEventListener(`sessionend`,yt),bt.stop()};function lt(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),ne=!0}function ut(){Qe(`WebGLRenderer: Context Restored.`),ne=!1;let e=Ie.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;st(),Ie.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function dt(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),Le.remove(e)}function mt(e){let t=Le.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=nt;if(c!==null&&(h=Ve.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Me()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=Le.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){re!==null&&e.isNodeMaterial&&re.setObject(r,e),Te===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),re!==null&&re.renderStart(e,t,n),j=Je.get(n),j.init(t),N.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),re!==null&&re.updateLights(j.state.lightsArray),Ee=this.localClippingEnabled,Te=Ye.init(this.clippingPlanes,Ee),Te===!0&&Ye.setGlobalState(this.clippingPlanes,t),re!==null&&Ze.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),j=N.pop(),re!==null&&re.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Le.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function _t(e){gt&&gt(e)}function vt(){bt.stop()}function yt(){bt.start()}let bt=new lo;bt.setAnimationLoop(_t),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){gt=e,ct.setAnimationLoop(e),e===null?bt.stop():bt.start()},ct.addEventListener(`sessionstart`,vt),ct.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=te!==null&&(F===null||n)&&te.begin(P,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,F),j=Je.get(e,N.length),j.init(t),j.state.textureUnits=ze.getTextureUnits(),N.push(j),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(De,Ke,t.reversedDepth),Ee=this.localClippingEnabled,Te=Ye.init(this.clippingPlanes,Ee),k=qe.get(e,M.length),k.init(),M.push(k),ct.enabled===!0&&ct.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,P.sortObjects)}xt(e,t,0,P.sortObjects),k.finish(),re!==null&&re.updateLights(j.state.lightsArray),P.sortObjects===!0&&k.sort(ye,be),je=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,je&&$e.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&Ye.beginShadows();let i=j.state.shadowsArray;if(Ze.render(i,e,t),Te===!0&&Ye.endShadows(),(r&&te.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}je&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(k,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),je&&$e.render(e),St(k,e,t)}F!==null&&ce===0&&(ze.updateMultisampleRenderTarget(F),ze.updateRenderTargetMipmap(F)),r&&te.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),at.resetDefaultState(),le=-1,ue=null,N.pop(),N.length>0?(j=N[N.length-1],ze.setTextureUnits(j.state.textureUnits),Te===!0&&Ye.setGlobalState(P.clippingPlanes,j.state.camera)):j=null,M.pop(),k=M.length>0?M[M.length-1]:null,re!==null&&re.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)j.pushLightProbeGrid(e);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(we)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=Ue.update(e),a=e.material;a.visible&&k.push(e,i,a,n,ke.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(we))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,ke.z,s,t)}}else a.visible&&k.push(e,i,a,n,ke.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Te===!0&&Ye.setGlobalState(P.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Qt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),u=P.getActiveCubeFace(),d=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(me),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),je&&$e.render(n);let f=P.toneMapping;P.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Te===!0&&Ye.setGlobalState(P.clippingPlanes,r),wt(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}P.setRenderTarget(s,u,d),P.setClearColor(me,he),p!==void 0&&(r.viewport=p),P.toneMapping=f}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){re!==null&&i.isNodeMaterial&&re.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function Et(e,t,n){t.isScene!==!0&&(t=Ae);let r=Le.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=We.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,P),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Ot(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=j.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ac.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=Le.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=Ae),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:zt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Le.get(r),y=j.state.lights;if(Te===!0&&(Ee===!0||e!==ue)){let t=e===ue&&r.id===le;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=j.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Et(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(L.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==le&&(le=r.id,C=!0),v.needsLights){let e=kt(j.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(I,`projectionMatrix`,e.projectionMatrix),T.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(I,Oe.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&T.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(I,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&T.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&T.setValue(I,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&T.setValue(I,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){T.setOptional(I,i,`bindMatrix`),T.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(I,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(T.setOptional(I,i,`batchingTexture`),T.setValue(I,`batchingTexture`,i._matricesTexture,ze),T.setOptional(I,i,`batchingIdTexture`),T.setValue(I,`batchingIdTexture`,i._indirectTexture,ze),T.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(I,`batchingColorTexture`,i._colorsTexture,ze));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&et.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=El()),C){if(T.setValue(I,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&jt(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,ve,_e,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}ac.upload(I,Dt(v),E,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ac.upload(I,Dt(v),E,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(I,`center`,i.center),T.setValue(I,`modelViewMatrix`,i.modelViewMatrix),T.setValue(I,`normalMatrix`,i.normalMatrix),T.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,x),ot.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=Le.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Le.get(e.texture).__webglTexture=t,Le.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Le.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=Le.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),le=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,Le.get(e.texture).__webglTexture,Le.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Le.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Le.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?Le.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=ie),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=Le.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Le.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Le.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}le=-1};function Nt(e){let t=Le.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Le.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=F===null?null:Le.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Le.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,it.convert(l),it.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=F===null?null:Le.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await tt(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Le.get(e),r=Le.get(t),h=Le.get(n.__renderTarget),g=Le.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Le.has(e)){let n=Le.get(e),r=Le.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,ae),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){Le.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,L.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}};zt.enabled=!1;var Ol=class{ctx;lobby;street;glassRain;clockPan;tick;noise;nextTick=0;started=!1;constructor(e){this.ctx=e,this.lobby=e.createGain(),this.street=e.createGain(),this.lobby.gain.value=0,this.street.gain.value=0,this.lobby.connect(e.destination),this.street.connect(e.destination),this.glassRain=e.createGain(),this.clockPan=new PannerNode(e,{panningModel:`HRTF`,distanceModel:`inverse`,refDistance:1.5,rolloffFactor:1.1}),this.clockPan.connect(this.lobby),this.noise=kl(e,4),this.tick=Al(e)}start(){if(this.started)return;this.started=!0;let e=this.ctx;for(let[t,n]of[[50,.012],[100,.02],[150,.006]]){let r=new OscillatorNode(e,{frequency:t}),i=new GainNode(e,{gain:n});r.connect(i).connect(this.lobby),r.start()}this.loop(new BiquadFilterNode(e,{type:`lowpass`,frequency:420}),.09,this.lobby),this.glassRain.connect(this.lobby),this.loop(new BiquadFilterNode(e,{type:`lowpass`,frequency:900}),.05,this.glassRain);let t=new BiquadFilterNode(e,{type:`bandpass`,frequency:3200,Q:.4});this.loop(t,.16,this.street),this.loop(new BiquadFilterNode(e,{type:`lowpass`,frequency:140}),.35,this.street)}loop(e,t,n){let r=new AudioBufferSourceNode(this.ctx,{buffer:this.noise,loop:!0,loopStart:Math.random()*3});r.connect(e).connect(new GainNode(this.ctx,{gain:t})).connect(n),r.start(0,Math.random()*3)}mix(e,t,n,r=0){let i=this.ctx.currentTime+r;for(let[r,a]of[[this.lobby,e],[this.street,t]])r.gain.cancelScheduledValues(i),r.gain.setValueAtTime(r.gain.value,i),r.gain.linearRampToValueAtTime(a,i+n)}setGlassNearness(e){this.glassRain.gain.setTargetAtTime(.3+.7*e,this.ctx.currentTime,.3)}placeClock(e){this.clockPan.positionX.value=e.x,this.clockPan.positionY.value=e.y,this.clockPan.positionZ.value=e.z}scheduleTicks(e){let t=this.ctx.currentTime;for(this.nextTick<t&&(this.nextTick=e+Math.ceil(t-e));this.nextTick<t+.15;){let e=new AudioBufferSourceNode(this.ctx,{buffer:this.tick});e.connect(this.clockPan),e.start(this.nextTick),this.nextTick+=1}}setListener(e){let t=this.ctx.listener,n=e.position,r=new B(0,0,-1).applyQuaternion(e.quaternion);t.positionX&&(t.positionX.value=n.x,t.positionY.value=n.y,t.positionZ.value=n.z,t.forwardX.value=r.x,t.forwardY.value=r.y,t.forwardZ.value=r.z,t.upX.value=0,t.upY.value=1,t.upZ.value=0)}};function kl(e,t){let n=e.createBuffer(1,e.sampleRate*t,e.sampleRate),r=n.getChannelData(0),i=0;for(let e=0;e<r.length;e++)i=i*.6+(Math.random()*2-1)*.4,r[e]=i;return n}function Al(e){let t=Math.floor(e.sampleRate*.05),n=e.createBuffer(1,t,e.sampleRate),r=n.getChannelData(0);for(let n=0;n<t;n++){let t=n/e.sampleRate;r[n]=(Math.sin(t*2*Math.PI*2600)*.6+(Math.random()*2-1)*.5)*Math.exp(-t*160)*.9}return n}var jl=class{ctx=new AudioContext({latencyHint:`interactive`});filter;inward=this.ctx.createBiquadFilter();dreadIn=this.ctx.createGain();ghost=null;dry=this.ctx.createGain();dread=this.ctx.createGain();analyser;output;buffer=null;source=null;offset=0;seg={c0:0,pos0:0};playing=!1;ended=!1;onEnded=null;freq;wave;bassAvg=0;levels={bass:0,volume:0,kick:0};constructor(){this.filter=this.ctx.createBiquadFilter(),this.filter.type=`lowpass`,this.filter.frequency.value=2e4,this.filter.Q.value=.8,this.output=this.ctx.createGain(),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.5,this.inward.type=`lowpass`,this.inward.frequency.value=2e4,this.inward.Q.value=.9,this.inward.connect(this.filter),this.filter.connect(this.dry).connect(this.output).connect(this.analyser).connect(this.ctx.destination);let e=this.ctx.createWaveShaper(),t=new Float32Array(1024);for(let e=0;e<t.length;e++){let n=e/(t.length-1)*2-1;t[e]=Math.tanh(n*6)*.8}e.curve=t,e.oversample=`2x`;let n=this.ctx.createBiquadFilter();n.type=`lowpass`,n.frequency.value=700,n.Q.value=3;let r=this.ctx.createDelay(1),i=this.ctx.createGain();r.delayTime.value=.37,i.gain.value=.55,this.filter.connect(this.dreadIn).connect(e).connect(n).connect(this.dread),n.connect(r).connect(i).connect(r),i.connect(this.dread),this.dread.gain.value=0,this.dread.connect(this.output),this.freq=new Uint8Array(this.analyser.frequencyBinCount),this.wave=new Uint8Array(this.analyser.fftSize)}async load(e){let t=await fetch(e);this.buffer=await this.ctx.decodeAudioData(await t.arrayBuffer())}get loaded(){return this.buffer!==null}get duration(){return this.buffer?.duration??0}get time(){if(!this.playing)return this.offset;let e=this.ctx.outputLatency||this.ctx.baseLatency||0;return Math.min(this.duration,Math.max(0,this.seg.pos0+this.ctx.currentTime-e-this.seg.c0))}async play(e=this.offset){if(!this.buffer)return;this.ctx.resume(),this.stopSource();let t=this.ctx.createBufferSource();t.buffer=this.buffer,t.connect(this.inward),t.start(0,Math.min(e,this.duration)),t.onended=()=>{this.source===t&&this.playing&&(this.playing=!1,this.ended=!0,this.offset=this.duration,this.onEnded?.())},this.source=t;let n=this.ctx.currentTime;this.seg={c0:n,pos0:e},this.playing=!0,this.ended=!1}pause(){this.playing&&(this.offset=this.time,this.playing=!1,this.stopSource(),this.stopGhost(0))}seek(e){e=Math.max(0,Math.min(this.duration-.05,e)),this.playing?this.play(e):this.offset=e}setDread(e,t=1){let n=this.ctx.currentTime;for(let[r,i]of[[this.dread.gain,e*.9],[this.dry.gain,1-e*.55]])r.cancelScheduledValues(n),r.setValueAtTime(r.value,n),r.linearRampToValueAtTime(i,n+Math.max(.01,t));if(e>0&&!this.ghost&&this.buffer&&this.playing){let r=this.ctx.createBufferSource(),i=this.ctx.createGain();r.buffer=this.buffer,r.playbackRate.value=.5,i.gain.setValueAtTime(0,n),i.gain.linearRampToValueAtTime(1.3*e,n+Math.max(.01,t)),r.connect(i).connect(this.dreadIn),r.start(0,Math.min(this.time,this.duration-.1)),this.ghost={src:r,gain:i}}else e<=0&&this.stopGhost(t)}stopGhost(e){if(!this.ghost)return;let{src:t,gain:n}=this.ghost,r=this.ctx.currentTime;n.gain.cancelScheduledValues(r),n.gain.setValueAtTime(n.gain.value,r),n.gain.linearRampToValueAtTime(0,r+Math.max(.01,e));try{t.stop(r+Math.max(.01,e)+.05)}catch{}this.ghost=null}setInward(e,t=1){let n=this.inward.frequency,r=this.ctx.currentTime;n.cancelScheduledValues(r),n.setValueAtTime(n.value,r),n.exponentialRampToValueAtTime(2e4*(1100/2e4)**Math.min(1,Math.max(0,e)),r+Math.max(.01,t))}setLowpass(e,t=0){let n=this.filter.frequency,r=this.ctx.currentTime;n.cancelScheduledValues(r),n.setValueAtTime(n.value,r),t<=0?n.setValueAtTime(e,r):n.exponentialRampToValueAtTime(e,r+t)}lowpassSweep(e,t,n,r){let i=this.filter.frequency,a=this.ctx.currentTime;i.cancelScheduledValues(a),i.setValueAtTime(e,a),i.setValueAtTime(e,a+n),i.exponentialRampToValueAtTime(t,a+n+r)}analyse(e){let t=this.levels;if(!this.playing)return t.bass*=.9,t.volume*=.9,t.kick*=.85,t;this.analyser.getByteFrequencyData(this.freq),this.analyser.getByteTimeDomainData(this.wave);let n=this.ctx.sampleRate/this.analyser.fftSize,r=Math.max(2,Math.round(140/n)),i=0;for(let e=1;e<=r;e++)i+=this.freq[e];t.bass=i/r/255;let a=0;for(let e=0;e<this.wave.length;e++){let t=(this.wave[e]-128)/128;a+=t*t}return t.volume=Math.min(1,Math.sqrt(a/this.wave.length)*3),this.bassAvg+=(t.bass-this.bassAvg)*Math.min(1,e*3),t.bass>this.bassAvg*1.18&&t.bass>.35?t.kick=1:t.kick*=Math.exp(-e*7),t}stopSource(){if(this.source){this.source.onended=null;try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}}},Ml=class{limits;yaw=0;pitch=0;ty=0;tp=0;drag=null;ignoreTouch=()=>!1;constructor(e,t={yaw:1.9,up:.9,down:.8}){this.limits=t,e.addEventListener(`click`,()=>{matchMedia(`(pointer: fine)`).matches&&document.pointerLockElement!==e&&Promise.resolve(e.requestPointerLock?.()).catch(()=>{})}),document.addEventListener(`mousemove`,t=>{document.pointerLockElement===e&&this.add(-t.movementX*.0022,-t.movementY*.0022)}),e.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`&&!this.ignoreTouch(e.clientX)&&(this.drag={id:e.pointerId,x:e.clientX,y:e.clientY})}),e.addEventListener(`pointermove`,e=>{this.drag&&e.pointerId===this.drag.id&&(this.add(-(e.clientX-this.drag.x)*.006,-(e.clientY-this.drag.y)*.006),this.drag.x=e.clientX,this.drag.y=e.clientY)});let n=e=>{this.drag?.id===e.pointerId&&(this.drag=null)};e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n)}lastInput=-1/0;add(e,t){this.lastInput=performance.now(),this.ty=Math.max(-this.limits.yaw,Math.min(this.limits.yaw,this.ty+e)),this.tp=Math.max(-this.limits.down,Math.min(this.limits.up,this.tp+t))}set(e,t){this.ty=this.yaw=e,this.tp=this.pitch=t}ease(e,t,n){this.ty+=(e-this.ty)*n,this.tp+=(t-this.tp)*n}update(e){let t=1-Math.exp(-e*14);this.yaw+=(this.ty-this.yaw)*t,this.pitch+=(this.tp-this.pitch)*t}},Nl=1.62,Pl=.78,Fl=class{camera;gait=`walk`;attention=new B;attentionWeight=0;attnPitch=0;swayAmount=1;slopePitch=0;lookYaw=0;lookPitch=0;heading=0;headingOverride=null;pitchOverride=null;headingVel=0;headingInit=!1;swayTime=0;tmp=new B;constructor(e){this.camera=new Ra(62,e,.05,600),this.camera.rotation.order=`YXZ`}setHeading(e){this.heading=e,this.headingVel=0,this.headingInit=!0}get currentHeading(){return this.heading}update(e,t,n,r=0,i){let a=e.pointAt(t,this.tmp);i&&a.add(i);let o=this.headingOverride??e.headingAt(t+3);if(this.attentionWeight>.001){let e=Math.atan2(-(this.attention.x-a.x),-(this.attention.z-a.z)),t=Math.atan2(Math.sin(e-o),Math.cos(e-o));o+=t*this.attentionWeight}this.headingInit||=(this.heading=o,!0);let s=o-this.heading;s=Math.atan2(Math.sin(s),Math.cos(s));let c=1.9;this.headingVel+=(c*c*s-2*c*this.headingVel)*n,this.heading+=this.headingVel*n;let l=new B(Math.cos(this.heading),0,-Math.sin(this.heading)),u=this.camera;u.position.copy(a).addScaledVector(l,r),u.position.y+=Nl;let d=0;if(this.gait===`walk`){let e=t/Pl*Math.PI;u.position.y+=Math.abs(Math.sin(e))*.035-.017,u.position.addScaledVector(l,Math.sin(e)*.012),d=Math.sin(e)*.004}else this.gait===`carriage`&&(this.swayTime+=n*(.4+this.swayAmount),u.position.addScaledVector(l,Math.sin(this.swayTime*1.3)*.02*this.swayAmount),u.position.y+=Math.sin(this.swayTime*3.1)*.006*this.swayAmount,d=Math.sin(this.swayTime*1.3+.6)*.008*this.swayAmount);let f=e.tangentAt(t),p=this.pitchOverride??(this.gait===`glide`?Math.asin(At.clamp(f.y,-1,1))*.55:0);this.slopePitch+=(p-this.slopePitch)*(1-Math.exp(-n*1.5));let m=this.attentionWeight>.001?Math.atan2(this.attention.y-u.position.y,Math.hypot(this.attention.x-u.position.x,this.attention.z-u.position.z))*.7*this.attentionWeight:0;this.attnPitch+=(m-this.attnPitch)*(1-Math.exp(-n*1.2)),u.rotation.set(this.lookPitch+this.slopePitch+this.attnPitch,this.heading+this.lookYaw,d)}},Il=class{route;centre;mesh;p0=new B;v0=new B;blend=.8;arcLen;tmp=new B;offset=new B;constructor(e,t,n){this.route=e,this.centre=t,this.mesh=n;let r=.5;for(;r<10&&e.pointAt(r,this.tmp).z<0;)r+=.005;this.arcLen=r}begin(e,t,n){let r=this.route.pointAt(0,this.tmp);this.p0.set(e.x-r.x,0,e.z-r.z);let i=this.route.tangentAt(0,new B).multiplyScalar((n(.05)-n(0))/.05);this.v0.set(t.x-i.x,0,t.y-i.z);let a=this.p0.length(),o=Math.max(t.length(),.15);this.blend=At.clamp(2*a/o,.6,2.2)}update(e,t,n){let r=this.blend,i=Math.min(1,Math.max(0,e)/r),a=i*i,o=a*i,s=2*o-3*a+1,c=o-2*a+i;this.offset.copy(this.p0).multiplyScalar(s).addScaledVector(this.v0,c*r);let l=Math.PI*At.clamp(n(t)/this.arcLen,0,1);return this.mesh.wings.rotation.y=Math.PI/4-l,this.offset}get centrePoint(){return this.centre}},Ll={uCamPos:{value:new B},uFogColor:{value:new U(4871784)},uFogLow:{value:new U(5656650)},uFogDensity:{value:.03},uCloudBase:{value:38},uTime:{value:0},uWindowFlicker:{value:0},uFlamePos:{value:new B(0,-999,0)},uFlameColor:{value:new U(.22,.45,1)},uFlamePower:{value:0},uFlameRadius:{value:6},uStretch:{value:new Xt(0,0,10,0)},uStretchTop:{value:new B},uStretchDir:{value:new B(0,-.5,Math.sqrt(3)/2)}},Rl=`
uniform vec4 uStretch;
uniform vec3 uStretchTop;
uniform vec3 uStretchDir;
vec3 stretched(vec3 p) {
  if (uStretch.y <= 0.0) return p;
  vec3 across = normalize(vec3(uStretchDir.x, 0.0, uStretchDir.z));
  float d = min(dot(p - uStretchTop, across) / dot(uStretchDir, across), uStretch.w) - uStretch.x;
  if (d <= 0.0) return p;
  return p + uStretchDir * (uStretch.y * d * d * d / (d * d + uStretch.z * uStretch.z));
}
`;function zl(e){let t=Ll.uStretch.value;if(t.y<=0)return e;let n=Ll.uStretchDir.value,r=new B(n.x,0,n.z).normalize(),i=Math.min(e.clone().sub(Ll.uStretchTop.value).dot(r)/n.dot(r),t.w)-t.x;return i>0&&e.addScaledVector(n,t.y*i*i*i/(i*i+t.z*t.z)),e}var Bl=`
uniform vec3 uCamPos;
uniform vec3 uFogColor;
uniform vec3 uFogLow;
uniform float uFogDensity;
uniform float uCloudBase;
uniform float uTime;
uniform float uWindowFlicker;
uniform vec3 uFlamePos;
uniform vec3 uFlameColor;
uniform float uFlamePower;
uniform float uFlameRadius;

vec3 flameLight(vec3 wpos, vec3 n) {
  vec3 L = uFlamePos - wpos;
  float d = length(L);
  float fall = max(0.0, 1.0 - d / uFlameRadius);
  return uFlameColor * uFlamePower * fall * fall * (0.3 + 0.7 * max(0.0, dot(n, L / max(d, 1e-3))));
}

vec3 fogColorAt(float y) {
  return mix(uFogLow, uFogColor, smoothstep(0.0, 22.0, y));
}
vec3 applyFog(vec3 col, vec3 wpos, float emissive) {
  float d = length(wpos - uCamPos);
  float f = 1.0 - exp(-pow(d * uFogDensity, 1.5));
  // low cloud swallows the tops of tall buildings
  float h = smoothstep(uCloudBase, uCloudBase + 40.0, wpos.y);
  f = max(f, h * 0.97);
  f *= mix(1.0, 0.6, emissive);
  return mix(col, fogColorAt(wpos.y), clamp(f, 0.0, 1.0));
}
`,Vl=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Hl=`
uniform float uTime;
uniform float uBright;
uniform float uWild;
varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
void main() {
  float x = vUv.x * 2.0 - 1.0;
  float y = (vUv.y - 0.14) / 0.84; // 0 at the base, 1 at the tip
  float n = noise(vec2(x * 3.0, y * 4.0 - uTime * 4.2));
  float n2 = noise(vec2(x * 7.0 + 3.0, y * 8.0 - uTime * 7.5));
  // teardrop: rounded base, flickering pointed tip
  float w = 0.92 * sqrt(clamp(y + 0.16, 0.0, 1.0)) * pow(clamp(1.0 - y, 0.0, 1.0), 0.75);
  float sway = (n - 0.5) * (0.3 + 0.5 * uWild) * y;
  float shape = w - abs(x + sway) + (n2 - 0.5) * (0.1 + 0.2 * uWild) * y;
  if (shape < 0.0) discard;
  float heat = clamp(shape / max(w, 0.02), 0.0, 1.0) * (1.0 - y * 0.55);
  vec3 c = mix(vec3(0.03, 0.16, 0.7), vec3(0.25, 0.55, 1.0), smoothstep(0.08, 0.45, heat));
  c = mix(c, vec3(0.88, 0.95, 1.0), smoothstep(0.5, 0.88, heat));
  gl_FragColor = vec4(c * uBright, 1.0); // alpha 1 = flame pixel
}
`,Ul=`
uniform float uBright;
varying vec2 vUv;
void main() {
  float r = length(vUv - 0.5) * 2.0;
  float a = pow(max(0.0, 1.0 - r), 2.6) * uBright;
  gl_FragColor = vec4(vec3(0.12, 0.34, 1.0) * a, 0.0); // a soft tint only: never claims flame pixels
}
`,Wl=14,Gl=72,Kl=class{group=new kn;pos=new B;vel=new B;body;halo;embers;ember=[];bodyU={uTime:{value:0},uBright:{value:1},uWild:{value:0}};haloU={uBright:{value:.5}};time=0;placed=!1;ring;ringAge=99;lastBurst=0;constructor(){this.body=new W(new Qi(.72,.95),new ca({vertexShader:Vl,fragmentShader:Hl,uniforms:this.bodyU})),this.halo=new W(new Qi(3.4,3.4),new ca({vertexShader:Vl,fragmentShader:Ul,uniforms:this.haloU,transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:201,blendSrcAlpha:200,blendDstAlpha:201})),this.halo.renderOrder=5;for(let e of[this.body,this.halo])e.onBeforeRender=(t,n,r)=>{let i=e.getWorldPosition(new B);e.rotation.y=Math.atan2(r.position.x-i.x,r.position.z-i.z),e.updateMatrixWorld()};let e=new jr;e.setAttribute(`position`,new yr(new Float32Array(42),3)),this.embers=new Fi(e,new Ai({color:10473727,size:1.5,sizeAttenuation:!1})),this.embers.frustumCulled=!1;for(let e=0;e<Wl;e++)this.ember.push({p:new B(0,-999,0),v:new B,life:Math.random()*2});this.group.add(this.halo,this.body);let t=new jr;t.setAttribute(`position`,new yr(new Float32Array(216),3)),this.ring=new Fi(t,new Ai({color:5216255,size:2,sizeAttenuation:!1,transparent:!0})),this.ring.frustumCulled=!1,this.ring.visible=!1}get ringObject(){return this.ring}get emberObject(){return this.embers}place(e){this.pos.copy(e),this.vel.set(0,0,0),this.placed=!0}update(e,t,n){this.time+=e,this.placed||this.place(t);let r=this.time,i=t.clone();i.y+=(n.rise??1.5)*n.burst,n.burst>.05&&this.lastBurst<=.05&&(this.ringAge=0),this.lastBurst=n.burst,i.y+=Math.sin(r*1.3)*.06+Math.sin(r*.47)*.03,i.x+=Math.sin(r*.61)*.22*n.still,i.z+=Math.cos(r*.53)*.22*n.still;let a=2.2;this.vel.addScaledVector(i.sub(this.pos),a*a*e).multiplyScalar(Math.max(0,1-2*a*e)),this.pos.addScaledVector(this.vel,e),this.group.position.copy(this.pos);let o=.5+.5*Math.sin(r*37)*Math.sin(r*23.3),s=n.gutter*(.45+.4*o),c=(1+.25*n.bass+.45*n.kick+1.4*n.flare+.6*n.burst)*(1-s),l=(1+.18*n.kick+.55*n.flare+.7*n.burst)*(1-.35*n.gutter);if(this.body.scale.set(l*(1+.25*n.burst),l,l),this.halo.scale.setScalar(l*(1+.3*n.flare+2.2*n.burst)),this.bodyU.uTime.value=r,this.bodyU.uBright.value=c,this.bodyU.uWild.value=Math.min(1,n.flare+n.gutter*.6+n.kick*.3),this.haloU.uBright.value=.4*c,Ll.uFlamePos.value.copy(this.pos),Ll.uFlamePower.value=.7*(1+.25*n.bass+.45*n.kick+.5*n.flare+.9*n.burst)*(1-s),Ll.uFlameRadius.value=6+1.5*n.flare+9*n.burst,this.ringAge+=e,this.ring.visible=this.ringAge<1.6,this.ring.visible){let e=this.ring.geometry.getAttribute(`position`),t=.4+this.ringAge*7;for(let n=0;n<Gl;n++){let i=n/Gl*Math.PI*2;e.setXYZ(n,this.pos.x+Math.cos(i)*t,this.pos.y+Math.sin(i*3+r)*.15-this.ringAge*.4,this.pos.z+Math.sin(i)*t)}e.needsUpdate=!0,this.ring.material.opacity=1-this.ringAge/1.6}let u=this.embers.geometry.getAttribute(`position`);this.ember.forEach((t,i)=>{if(t.life-=e,t.life<=0){t.life=.8+Math.random()*1.4;let e=.15+n.burst*1.4;t.p.copy(this.pos).add(new B((Math.random()-.5)*e,.1,(Math.random()-.5)*e)),t.v.set((Math.random()-.5)*(.12+n.burst),.25+Math.random()*.35,(Math.random()-.5)*(.12+n.burst))}t.p.addScaledVector(t.v,e),t.v.x+=Math.sin(r*3+i)*.05*e,u.setXYZ(i,t.p.x,t.p.y,t.p.z)}),u.needsUpdate=!0}},ql=class{lateral=0;vel=0;width=2.4;update(e,t,n){let r=t*this.width,i=t===0?1.4:2;this.vel+=(i*i*(r-this.lateral)-2*i*this.vel)*e;let a=this.lateral+this.vel*e;if(!n(a)){let e=a;for(let t=0;t<12&&!n(e);t++)e*=.85;a=n(e)?e:0,this.vel=0}return this.lateral=a,this.lateral}reset(){this.lateral=0,this.vel=0}};function Jl(e){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296};return{next:n,range:(e,t)=>e+(t-e)*n(),int:(e,t)=>Math.floor(e+(t-e+1)*n()),pick:e=>e[Math.floor(n()*e.length)],chance:e=>n()<e}}function Yl(e,t,n=.08){let r=1+(t.next()*2-1)*n,i=t=>Math.min(255,Math.max(0,Math.round((e>>t&255)*r)));return i(16)<<16|i(8)<<8|i(0)}var Xl=[1,.52,.18],Zl=[1,.72,.42],Ql=[.78,.84,.92],$l=[.26,.29,.36],eu=[.06,.07,.09];function tu(e,t,n,r,i,a,o,s,c=$l){s[0]=c[0]+eu[0]*Math.max(a,0),s[1]=c[1]+eu[1]*Math.max(a,0),s[2]=c[2]+eu[2]*Math.max(a,0);for(let c of e){let e=c.pos.x-t,l=c.pos.y-n,u=c.pos.z-r,d=e*e+l*l+u*u;if(d>c.radius*c.radius)continue;let f=Math.sqrt(d)||1e-4,p=1-f/c.radius,m=(e*i+l*a+u*o)/f,h=c.intensity*p*p*(.25+.75*Math.max(m,0));s[0]+=c.color[0]*h,s[1]+=c.color[1]*h,s[2]+=c.color[2]*h}}function nu(e,t){return e.filter(e=>t.distanceToPoint(e.pos)<e.radius)}var ru=[.8,.81,.84];function iu(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new jr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=au(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=au(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function au(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new gr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var ou=1<<25,su=1<<24,cu=26,K=class{sx;sy;sz;size;data;constructor(e,t,n,r){this.sx=e,this.sy=t,this.sz=n,this.size=r,this.data=new Uint32Array(e*t*n)}idx(e,t,n){return e+this.sx*(t+this.sy*n)}inside(e,t,n){return e>=0&&t>=0&&n>=0&&e<this.sx&&t<this.sy&&n<this.sz}set(e,t,n,r,i=!1,a=0){this.inside(e,t,n)&&(this.data[this.idx(e,t,n)]=(r&16777215|ou|(i?su:0)|(a&15)<<cu)>>>0)}clear(e,t,n){this.inside(e,t,n)&&(this.data[this.idx(e,t,n)]=0)}get(e,t,n){return this.inside(e,t,n)?this.data[this.idx(e,t,n)]:0}solid(e,t,n){return(this.get(e,t,n)&ou)!==0}box(e,t,n,r,i,a,o,s=!1,c=0){for(let l=n;l<a;l++)for(let n=t;n<i;n++)for(let t=e;t<r;t++)this.set(t,n,l,o,s,c)}carve(e,t,n,r,i,a){for(let o=n;o<a;o++)for(let n=t;n<i;n++)for(let t=e;t<r;t++)this.clear(t,n,o)}},lu=[.42,.62,.82,1];function uu(e,t={}){let n=t.matrix??new H,r=new V().getNormalMatrix(n),i=e.size,a=t.centre?-e.sx*i/2:0,o=t.centre?-e.sz*i/2:0,s=[];if(t.lights){let r=new Qn(new B(a,0,o),new B(a+e.sx*i,e.sy*i,o+e.sz*i)).applyMatrix4(n);s=nu(t.lights,r)}let c=[],l=[],u=[],d=[],f=[],p=[],m=[],h=new B,g=new B,_=[0,0,0],v=[0,0,0],y=[0,0,0,0],b=[0,0,0],x=[0,0,0];for(let S=0;S<e.sz;S++)for(let C=0;C<e.sy;C++)for(let w=0;w<e.sx;w++){let T=e.get(w,C,S);if(!(T&ou))continue;let E=(T>>16&255)/255,D=(T>>8&255)/255,O=(T&255)/255,k=T&su?1:0,A=T>>>cu&15,ee=[w,C,S];for(let T=0;T<3;T++)for(let j of[1,-1]){let M=[w,C,S];if(M[T]+=j,e.solid(M[0],M[1],M[2]))continue;let N=(T+1)%3,te=(T+2)%3;g.set(0,0,0).setComponent(T,j).applyMatrix3(r).normalize();let P=g.y>.5?1:g.y<-.5?.45:.72+.1*g.z-.04*g.x,ne=c.length/3,re=j>0?[[0,0],[1,0],[1,1],[0,1]]:[[0,0],[0,1],[1,1],[1,0]];for(let r=0;r<4;r++){let[m,S]=re[r],C=m?1:-1,w=S?1:-1;x[0]=M[0],x[1]=M[1],x[2]=M[2],x[N]+=C;let ne=+!!e.solid(x[0],x[1],x[2]);x[te]+=w;let ie=+!!e.solid(x[0],x[1],x[2]);x[N]-=C;let ae=+!!e.solid(x[0],x[1],x[2]);y[r]=ne&&ae?0:3-(ne+ae+ie),b[T]=ee[T]+ +(j>0),b[N]=ee[N]+m,b[te]=ee[te]+S,h.set(a+b[0]*i,b[1]*i,o+b[2]*i).applyMatrix4(n),c.push(h.x,h.y,h.z);let oe=1-(1-lu[y[r]])*(t.ao??1);if(d.push(g.x,g.y,g.z),p.push(A),k){v[0]=E,v[1]=D,v[2]=O;let e=.85+.15*oe;l.push(v[0]*e,v[1]*e,v[2]*e),f.push(0,0,0)}else{t.lights?tu(s,h.x+g.x*.05,h.y+g.y*.05,h.z+g.z*.05,g.x,g.y,g.z,_,t.ambient):(_[0]=1,_[1]=1,_[2]=1);let e=P*oe;l.push(E*_[0]*e,D*_[1]*e,O*_[2]*e),f.push(E*oe,D*oe,O*oe)}u.push(k)}y[0]+y[2]<y[1]+y[3]?m.push(ne+1,ne+2,ne+3,ne+1,ne+3,ne):m.push(ne,ne+1,ne+2,ne,ne+2,ne+3)}}let S=new jr;return S.setAttribute(`position`,new yr(c,3)),S.setAttribute(`color`,new yr(l,3)),S.setAttribute(`emissive`,new yr(u,1)),S.setAttribute(`normal`,new yr(d,3)),S.setAttribute(`albedo`,new yr(f,3)),S.setAttribute(`tag`,new yr(p,1)),S.setIndex(m.length>65535?new vr(m,1):new _r(m,1)),S.computeBoundingSphere(),S.computeBoundingBox(),S}var du={body:0,legL:1,legR:2,armL:3,armR:4,head:5,umbrella:6,pint:7,phone:8,shinL:9,shinR:10,foreL:11,foreR:12,scarf:13,backpack:14,bag:15,headphones:16,beanie:17,hood:18,tie:19,hips:20,handL:21,handR:22,footL:23,footR:24,longHair:25,curls:26,beard:27,board:28},fu={coat:1,umbrella:2,hair:3,skin:4,legs:5,accent:6,trim:15},pu={scarf:1,backpack:2,bag:4,headphones:8,beanie:16,hood:32,tie:64,hivis:128,glasses:256,longHair:512,curls:1024,beard:2048,board:4096},mu=.82,hu=.45,gu=1.36,_u=.9600000000000001,vu=.7600000000000001,yu=.1,bu=.1,xu=.05,Su=14081510,Cu=10727360,wu=[`coat`,`jacket`,`hat`,`puffer`,`hoodie`];function Tu(e,t,n,r,i){let a=uu(e,{matrix:new H().makeTranslation(n,r,i)}),o=a.getAttribute(`tag`),s=new Float32Array(o.count);for(let e=0;e<o.count;e++)s[e]=t*16+o.getX(e);return a.setAttribute(`partTag`,new yr(s,1)),a.deleteAttribute(`tag`),a}function Eu(e){let t=[],n=e===`coat`||e===`hat`,r=e===`puffer`?6:5,i=e===`puffer`?4:3,a=r*bu/2,o=-.15-(i-3)*bu/2,s=n?9:6,c=new K(r,s,i,bu);if(c.box(0,0,0,r,s,i,Su,!1,fu.coat),e===`puffer`)for(let e=1;e<s;e+=2)c.box(0,e,0,r,e+1,i,Cu,!1,fu.coat);else for(let e=0;e<s;e++)c.set(Math.floor(r/2),e,i-1,Cu,!1,fu.coat);e===`jacket`&&c.box(1,s-2,i-1,r-1,s,i,15262920),e===`hoodie`&&c.box(1,1,i-1,r-1,3,i,Cu,!1,fu.coat);for(let e of[1,s-3])for(let t=0;t<r;t++)for(let n=0;n<i;n++)(t===0||t===r-1||n===0||n===i-1)&&c.set(t,e,n,Su,!1,fu.trim);let l=gu-s*bu+.04,u=Math.max(0,Math.min(s,Math.round((1-l)/bu))),d=ju(c,u,s),f=ju(c,0,u);if(t.push(Tu(d,du.body,-a,l+u*bu,o)),u>0&&t.push(Tu(f,du.hips,-a,l,o)),e===`puffer`){let e=new K(4,1,3,bu);e.box(0,0,0,4,1,3,Su,!1,fu.coat),t.push(Tu(e,du.body,-.2,1.4000000000000001,-.15))}if(e===`hoodie`){let e=new K(4,2,1,bu);e.box(0,0,0,4,2,1,Cu,!1,fu.coat),t.push(Tu(e,du.body,-.2,1.3,o-.08))}for(let[e,n,r]of[[du.legL,du.shinL,-.2],[du.legR,du.shinR,0]]){let i=new K(2,4,2,bu);i.box(0,0,0,2,4,2,Su,!1,fu.legs),t.push(Tu(i,n,r,yu,-.1));let a=new K(4,2,7,xu);a.box(0,0,0,4,2,7,1119774),a.box(0,0,0,4,1,7,329482),a.box(1,1,4,3,2,6,2502718),t.push(Tu(a,r<-.1?du.footL:du.footR,r,0,-.12));let o=new K(2,4,2,bu);o.box(0,0,0,2,4,2,Su,!1,fu.legs),t.push(Tu(o,e,r,.5,-.1))}for(let[e,n,r]of[[du.armL,du.foreL,-a-bu],[du.armR,du.foreR,a]]){let i=new K(1,4,2,bu);i.box(0,0,0,1,4,2,Su,!1,fu.coat),t.push(Tu(i,e,r,.9600000000000001,-.1));let a=new K(1,2,2,bu);a.box(0,0,0,1,2,2,Su,!1,fu.coat),t.push(Tu(a,n,r,vu,-.1));let o=new K(2,3,4,xu);o.box(0,2,0,2,3,4,Cu,!1,fu.coat),o.box(0,0,0,2,2,3,Su,!1,fu.skin),o.set(+(r<0),1,3,Su,!1,fu.skin),t.push(Tu(o,n===du.foreL?du.handL:du.handR,r,.6100000000000001,-.1))}let p=1.3800000000000001,m=new K(4,4,3,bu);m.box(0,0,0,4,3,3,Su,!1,fu.skin),m.box(0,3,0,4,4,3,Su,!1,fu.hair),m.box(0,1,0,4,3,1,Su,!1,fu.hair),(e===`jacket`||e===`hoodie`)&&m.box(0,0,0,1,3,2,Su,!1,fu.hair),t.push(Tu(m,du.head,-.2,p,-.2));let h=new K(4,1,1,bu);if(h.box(0,0,0,4,1,1,Su,!1,fu.hair),t.push(Tu(h,du.head,-.2,1.6800000000000002,.1)),t.push(Tu(Du(),du.head,-.2,p,.1)),e===`hat`){let e=new K(6,2,6,bu);e.box(0,0,0,6,1,6,1514791),e.box(1,1,1,5,2,5,1514791),t.push(Tu(e,du.head,-.3,1.7600000000000002,-.3))}let g=new K(r+1,3,i+1,bu);for(let e=0;e<=r;e++)for(let t=0;t<=i;t++)(e===0||e===r||t===0||t===i)&&g.set(e,2,t,Su,!1,fu.accent);g.box(1,0,i,2,2,i+1,Su,!1,fu.accent),t.push(Tu(g,du.scarf,-a-bu/2,1.1600000000000001,o-bu/2));let _=new K(4,5,2,bu);_.box(0,0,0,4,5,2,Su,!1,fu.accent),_.box(1,1,0,3,3,1,Cu,!1,fu.accent),t.push(Tu(_,du.backpack,-.2,.81,o-.2));let v=new K(1,3,3,bu);v.box(0,0,0,1,3,3,Su,!1,fu.accent);let y=new K(1,6,1,bu);y.box(0,0,0,1,6,1,1841690),t.push(Tu(v,du.bag,a+bu,.7,-.15),Tu(y,du.bag,a+bu,1,-.05));let b=new K(6,5,2,bu);b.box(0,4,0,6,5,2,1841690),b.box(0,1,0,1,3,2,Su,!1,fu.accent),b.box(5,1,0,6,3,2,Su,!1,fu.accent),t.push(Tu(b,du.headphones,-.3,p,-.1));let x=new K(5,2,5,bu);x.box(0,0,0,5,1,5,Su,!1,fu.accent),x.box(1,1,1,4,2,4,Su,!1,fu.accent),t.push(Tu(x,du.beanie,-.25,1.7100000000000002,-.25));let S=new K(6,6,5,bu);S.box(0,0,0,6,6,5,Su,!1,fu.coat),S.carve(1,0,1,5,5,5),S.carve(1,0,4,5,5,5),t.push(Tu(S,du.hood,-.3,1.33,-.25));let C=new K(1,4,1,bu);C.box(0,0,0,1,4,1,Su,!1,fu.accent),t.push(Tu(C,du.tie,-.05,1,o+i*bu));let w=new K(10,11,3,xu);w.box(0,0,0,10,11,3,Su,!1,fu.hair),w.carve(1,0,2,9,3,3),t.push(Tu(w,du.longHair,-.25,1.1600000000000001,-.27));let T=new K(10,7,4,xu);T.box(0,0,0,1,7,4,Su,!1,fu.hair),T.box(9,0,0,10,7,4,Su,!1,fu.hair),t.push(Tu(T,du.longHair,-.25,1.33,-.12));let E=new K(10,4,9,xu),D=(e,t,n)=>(e*7+t*13+n*5)%4==0;for(let e=0;e<10;e++)for(let t=0;t<4;t++)for(let n=0;n<9;n++)(e!==0&&e!==9&&n!==0&&n!==8&&t!==3||!D(e,t,n))&&E.set(e,t,n,Su,!1,fu.hair);E.box(0,0,8,10,1,9,Su,!1,fu.hair),t.push(Tu(E,du.curls,-.25,1.6600000000000001,-.25));let O=new K(8,3,2,xu);O.box(0,0,0,8,1,2,Su,!1,fu.hair),O.box(0,1,0,2,3,2,Su,!1,fu.hair),O.box(6,1,0,8,3,2,Su,!1,fu.hair),t.push(Tu(O,du.beard,-.2,1.34,.08));let k=new K(5,2,17,xu);k.box(0,1,0,5,2,17,3025448),k.box(1,1,1,4,2,16,9382438);for(let e of[2,14])k.box(0,0,e,1,1,e+1,14081510),k.box(4,0,e,5,1,e+1,14081510);t.push(Tu(k,du.board,-.125,0,-.42));let A=new K(11,12,11,bu);for(let e=0;e<11;e++)for(let t=0;t<11;t++){let n=Math.hypot(e-5,t-5);n<5.4&&A.set(e,10+ +(n<3),t,Su,!1,fu.umbrella),n>=4.6&&n<5.4&&A.set(e,9,t,Su,!1,fu.umbrella)}for(let e=1;e<10;e++)A.set(5,e,5,1119774);A.set(5,0,5,1119774),A.set(6,0,5,1119774),t.push(Tu(A,du.umbrella,a-.55,1.05,.05));let ee=new K(1,2,1,bu);ee.set(0,0,0,13210965),ee.set(0,1,0,15262920),t.push(Tu(ee,du.pint,-a-bu,.6400000000000001,-.02));let j=.025,M=new K(4,8,2,j);M.box(0,0,0,4,8,2,329482),M.box(0,1,1,4,7,2,14081510,!0),M.set(0,6,1,9214637,!0),M.set(1,6,1,9214637,!0),M.set(2,4,1,5530230,!0),M.set(3,4,1,5530230,!0),M.set(0,2,1,9214637,!0),M.set(1,2,1,9214637,!0),M.set(2,2,1,9214637,!0),t.push(Tu(M,du.phone,a+bu/2-2*j,.5700000000000001,.06));let N=iu(t,!1);return N.computeBoundingSphere(),N}function Du(){let e=new K(8,6,2,xu);e.box(0,0,0,8,6,2,Su,!1,fu.skin),e.box(3,2,1,5,3,2,12371667,!1,fu.skin);let t=(t,n)=>{for(let[r,i]of n)e.set(r,i,1,Su,!1,t)};return t(7,[[2,3],[5,3]]),t(14,[[1,3],[3,3],[4,3],[6,3]]),t(8,[[1,4],[6,4]]),t(9,[[2,4],[5,4]]),t(10,[[3,1],[4,1]]),t(11,[[2,1],[5,1]]),t(12,[[3,0],[4,0]]),t(13,[[2,0],[5,0]]),t(2,[[2,2],[5,2]]),t(5,[[1,2],[6,2]]),t(15,[[3,4],[4,4]]),e}var Ou=1,ku=4,Au={neutral:[Ou,14],tired:[ku,11],smile:[49,6],content:[17,14],grin:[57,258],sad:[75,ku],upset:[333,130],stern:[13,514],angry:[557,64],worried:[525,66],surprised:[175,0],blank:[129,8],flushed:[9,262],laugh:[56,263],closed:[0,9],yawn:[40,5],talk:[41,6],talkSoft:[9,38]};function ju(e,t,n){let r=new K(e.sx,Math.max(1,n-t),e.sz,e.size);for(let i=0;i<e.sz;i++)for(let a=t;a<n;a++)for(let n=0;n<e.sx;n++)r.data[n+r.sx*(a-t+r.sy*i)]=e.data[n+e.sx*(a+e.sy*i)];return r}var Mu=`
attribute vec3 color;
attribute vec3 albedo;
attribute float partTag;
attribute vec4 aAnim;
attribute vec4 aPal;
attribute vec4 aLight;
attribute vec4 aLook;
attribute vec4 aBody;
uniform float uTime;
uniform vec3 uPal[PAL_SIZE];
uniform float uFaceless;  // 0..1: faces empty out, one person at a time ("Memories fade away")
uniform float uHeadDown;  // riders on the up escalator all look down at their feet
${Rl}
varying vec3 vColor;
varying vec3 vAlbedo;
varying vec3 vNormal;
varying vec3 vWorld;

vec3 rotX(vec3 p, float py, float pz, float a) {
  p.y -= py; p.z -= pz;
  float c = cos(a), s = sin(a);
  p = vec3(p.x, p.y * c - p.z * s, p.y * s + p.z * c);
  p.y += py; p.z += pz;
  return p;
}
vec3 rotZ(vec3 p, float px, float py, float a) {
  p.x -= px; p.y -= py;
  float c = cos(a), s = sin(a);
  p = vec3(p.x * c - p.y * s, p.x * s + p.y * c, p.z);
  p.x += px; p.y += py;
  return p;
}
vec3 rotYAt(vec3 p, float px, float a) {
  p.x -= px;
  float c = cos(a), s = sin(a);
  p = vec3(p.x * c + p.z * s, p.y, -p.x * s + p.z * c);
  p.x += px;
  return p;
}
vec3 rotY(vec3 p, float a) {
  float c = cos(a), s = sin(a);
  return vec3(p.x * c + p.z * s, p.y, -p.x * s + p.z * c);
}
float bit(float mask, float i) { return mod(floor(mask / exp2(i) + 0.001), 2.0); }

void main() {
  vec3 p = position;
  vec3 n = normal;
  float part = floor(partTag / 16.0 + 0.01);
  float tag = partTag - part * 16.0;
  float flags = mod(aAnim.w, 16.0);
  float legsIdx = floor(aAnim.w / 16.0 + 0.01);
  bool umb = mod(flags, 2.0) > 0.5;
  bool pint = mod(floor(flags / 2.0), 2.0) > 0.5;
  bool seated = mod(floor(flags / 4.0), 2.0) > 0.5;
  bool rider = flags > 7.5;
  float sh = ${gu.toFixed(2)}, hip = ${mu.toFixed(2)}, knee = ${hu.toFixed(2)}, elbow = ${_u.toFixed(2)};
  float wrist = ${vu.toFixed(2)}, waist = ${1 .toFixed(2)}, ankle = ${yu.toFixed(2)};
  float act = floor(aLight.w + 0.0001), k = aLight.w - act;
  float seed = aPal.x * 1.7 + aPal.z * 0.9 + aLook.w * 0.37;
  float t = uTime + seed;
  float gait = aBody.w;
  float moving = aAnim.y;

  // --- accessories this person isn't wearing fold away
  if (part > 12.5 && part < 19.5 && bit(aLook.z, part - 13.0) < 0.5) { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }
  if (part > 24.5 && bit(aLook.z, part - 16.0) < 0.5) { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }
  bool skating = bit(aLook.z, 12.0) > 0.5;
  bool boardP = part > 27.5;
  if (part > 5.5 && part < 6.5 && !umb) { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }
  if (part > 6.5 && part < 7.5 && !pint) { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }

  // --- the walk: how far the legs swing, how much the knees and elbows bend, by gait
  float stride = 0.45, kneeAmp = 0.6, armAmp = 0.7, elbowWalk = 0.3, lean = 0.0, bobAmp = 0.025;
  if (gait > 0.5 && gait < 1.5) { stride = 0.55; armAmp = 0.9; lean = 0.06; }
  else if (gait > 1.5 && gait < 2.5) { stride = 0.22; kneeAmp = 0.25; armAmp = 0.3; elbowWalk = 0.15; bobAmp = 0.01; }
  else if (gait > 3.5) { stride = 0.8; kneeAmp = 1.4; armAmp = 1.0; elbowWalk = 1.4; lean = 0.22; bobAmp = 0.06; }
  float ph = aAnim.x;
  float swing = sin(ph) * moving;
  float thighL = swing * stride, thighR = -swing * stride;
  if (gait > 2.5 && gait < 3.5) thighR *= 0.55; // favouring one leg
  // a knee bends as its leg swings through (from behind to in front)
  float kneeL = (kneeAmp * max(0.0, -cos(ph)) + 0.08) * moving;
  float kneeR = (kneeAmp * max(0.0, cos(ph)) + 0.08) * moving;
  // the feet roll: heel down as a leg reaches forward, toe pushing off as it trails
  float footL = (0.45 * max(0.0, swing) - 0.22 * max(0.0, -swing)) * min(1.0, stride * 2.2);
  float footR = (0.45 * max(0.0, -swing) - 0.22 * max(0.0, swing)) * min(1.0, stride * 2.2);
  float armL = -thighL * armAmp, armR = -thighR * armAmp;
  float elL = -(elbowWalk + 0.2 * max(0.0, -armL)) * moving - 0.1;
  float elR = -(elbowWalk + 0.2 * max(0.0, -armR)) * moving - 0.1;
  float zL = 0.0, zR = 0.0, fL = 0.0, fR = 0.0;
  float bob = abs(cos(ph)) * bobAmp * moving;
  if (gait > 2.5 && gait < 3.5) bob -= 0.035 * max(0.0, sin(ph)) * moving; // the dip onto the bad leg
  float twist = swing * 0.07 * (gait > 3.5 ? 1.6 : 1.0);
  float headPitch = gait > 1.5 && gait < 2.5 ? 0.2 : 0.0, headYaw = 0.0;
  // standing still: breathing
  float breathe = (1.0 - moving) * 0.008 * sin(t * 1.6);

  // --- what the action does (eased in by k): arms, elbows, head
  float aL = 0.0, eL = 0.0, aR = 0.0, eR = 0.0, hp = 0.0, hy = 0.0, ab = 0.0, azL = 0.0, azR = 0.0, afL = 0.0, afR = 0.0;
  float wL = 0.0, wR = 0.0, shrug = 0.0, chestUp = 0.0, tilt = 0.0;
  if (act == 1.0) { aR = -0.55; eR = -1.15; hp = 0.45; }
  else if (act == 2.0) { float sip = smoothstep(0.6, 1.0, sin(t * 0.9)); aL = -0.35 - 0.25 * sip; eL = -1.0 - 0.7 * sip; hp = -0.3 * sip; }
  else if (act == 3.0) { float g = max(0.0, sin(t * 3.1)) * (0.6 + 0.4 * sin(t * 0.7)); aR = -0.3 - 0.2 * g; eR = -0.8 - 0.5 * g; hp = 0.1 * sin(t * 2.3); hy = 0.25 * sin(t * 0.8); }
  else if (act == 4.0) { hy = 0.85 * sin(t * 0.9) * smoothstep(-0.2, 0.4, sin(t * 0.35)); }
  else if (act == 5.0) { aL = -0.35; eL = -1.45; afL = 0.7; hp = 0.5; }
  else if (act == 6.0) { hp = -0.45; hy = 0.2 * sin(t * 0.4); }
  else if (act == 7.0) { float s = 0.05 * sin(t * 9.0); aL = -0.2 + s; eL = -1.5; afL = 1.0; aR = -0.2 - s; eR = -1.5; afR = 1.0; hp = 0.15; }
  else if (act == 8.0) { hp = 0.55 + 0.12 * sin(t * 0.5); }
  else if (act == 9.0) { hp = -0.3 - 0.12 * abs(sin(t * 9.0)); aR = -0.15; eR = -0.6; ab = 0.015 * abs(sin(t * 9.0)); }
  else if (act == 10.0) { float puff = smoothstep(-0.2, 0.4, sin(t * 0.8)); aR = -0.3 - 0.3 * puff; eR = -0.5 - 1.3 * puff; hp = -0.12 * puff; }
  else if (act == 11.0) { aL = 0.1; aR = 0.1; eL = -0.4; eR = -0.4; afL = 0.35; afR = 0.35; hy = 0.15 * sin(t * 0.3); }
  else if (act == 12.0) { aR = -2.5; eR = -0.6 + 0.45 * sin(t * 8.0); hp = -0.1; }
  else if (act == 13.0) { aL = -0.15; eL = -1.55; afL = 1.15; aR = -0.2; eR = -1.5; afR = 1.05; hy = 0.3 * sin(t * 0.25); }
  else if (act == 14.0) { float y = smoothstep(-0.3, 0.6, sin(t * 0.5)); aR = -0.6 * y; eR = -1.9 * y; hp = -0.4 * y; }
  else if (act == 15.0) { float s = smoothstep(-0.2, 0.7, sin(t * 0.45)); aL = -2.9 * s; aR = -2.9 * s; eL = -0.2 * s; eR = -0.2 * s; hp = -0.3 * s; }
  else if (act == 16.0) { float r = 0.08 * sin(t * 11.0); aL = -0.35 + r; eL = -1.3; afL = 0.8; aR = -0.35 - r; eR = -1.3; afR = 0.8; hp = 0.1; }
  else if (act == 17.0) { aL = 0.0; eL = -0.15; azL = -0.04; armL *= 0.25; elL = 0.0; }
  else if (act == 18.0) { aR = 0.0; eR = -0.15; azR = 0.04; armR *= 0.25; elR = 0.0; }
  else if (act == 19.0) { aR = -2.3; eR = -1.6 + 0.15 * sin(t * 14.0); azR = -0.3; hp = 0.15; hy = -0.2; }
  else if (act == 20.0) { float th = 0.12 * sin(t * 13.0), th2 = 0.12 * sin(t * 11.0 + 1.3); aL = -0.45; eL = -1.25; afL = 0.95; wL = -0.3 + th; aR = -0.45; eR = -1.25; afR = 0.95; wR = -0.3 + th2; hp = 0.5; }
  else if (act == 21.0) { aR = -1.0; eR = -2.75; azR = -0.05; afR = 1.4; wR = 0.2; hp = 0.08 * sin(t * 1.3); hy = -0.25 + 0.15 * sin(t * 0.6); tilt = 0.12; }
  else if (act == 22.0) { float u = smoothstep(0.2, 0.8, sin(t * 0.7)); shrug = 0.06 * u; aL = -0.15; eL = -1.1 * u - 0.1; azL = -0.35 * u; wL = 0.6 * u; aR = -0.15; eR = -1.1 * u - 0.1; azR = 0.35 * u; wR = 0.6 * u; hp = -0.05 * u; tilt = 0.12 * u; }
  else if (act == 23.0) { float b = sin(t * 0.55); chestUp = 0.03 * max(0.0, b); shrug = 0.035 * max(0.0, b); hp = -0.25 * max(0.0, b) + 0.3 * max(0.0, -b); }
  else if (act == 24.0) { aL = 0.25; eL = -1.6; azL = -0.55; afL = -0.35; aR = 0.25; eR = -1.6; azR = 0.55; afR = -0.35; hy = 0.25 * sin(t * 0.4); }
  else if (act == 25.0) { aL = -0.25; eL = -1.85; afL = 0.25; wL = 0.5; aR = -0.25; eR = -1.85; afR = 0.25; wR = 0.5; }
  else if (act == 26.0) { aR = -2.7; eR = -2.1 + 0.1 * sin(t * 6.0); azR = 0.2; hp = 0.35; tilt = -0.15; }
  else if (act == 27.0) { hp = 0.12 * max(0.0, sin(t * 3.4)) * step(0.0, sin(t * 0.5)); hy = 0.2 * sin(t * 0.3); }
  else if (act == 28.0) { float r = 0.05 * sin(t * 5.0); aR = -1.15; eR = -2.35 + r; afR = 0.55; wR = 0.3; hp = 0.3; tilt = 0.08; }
  else if (act == 30.0) { thighL = -0.18; thighR = 0.28; kneeL = 0.35; kneeR = 0.3; footL = 0.0; footR = 0.0; armL = 0.0; armR = 0.0; aL = -0.1; azL = -0.55; eL = -0.3; aR = -0.1; azR = 0.6; eR = -0.3; hy = -1.0; ab = 0.012 * sin(t * 5.0); }
  else if (act == 29.0) { aL = -0.95; eL = -2.25; afL = 0.45; wL = 0.3; aR = -0.95; eR = -2.25; afR = 0.45; wR = 0.3; hp = 0.65 + 0.04 * sin(t * 0.7); }
  // an action takes over the arm it uses (walkers keep swinging the other)
  float useL = (aL != 0.0 || eL != 0.0) ? k : 0.0, useR = (aR != 0.0 || eR != 0.0) ? k : 0.0;
  armL = mix(armL, aL, useL); elL = mix(elL, eL, useL); zL = mix(zL, azL, useL); fL = afL * useL;
  armR = mix(armR, aR, useR); elR = mix(elR, eR, useR); zR = mix(zR, azR, useR); fR = afR * useR;
  headPitch += hp * k; headYaw += hy * k; bob += ab * k;
  wL *= useL; wR *= useR; shrug *= k; chestUp *= k; tilt *= k;
  // hands hang loose, flexing a little with the swing
  wL += -0.12 - 0.15 * armL * moving * (1.0 - useL); wR += -0.12 - 0.15 * armR * moving * (1.0 - useR);
  if (pint && useL < 0.5) { armL = -0.3; elL = -1.0; }
  if (umb) { armR = -1.05; elR = 0.0; zR = 0.0; }

  // --- seated: thighs forward, shins down; hands in the lap unless busy
  if (seated) { thighL = thighR = -1.35; kneeL = kneeR = 1.35; if (useL < 0.5) { armL = -0.2; elL = -1.0; fL = 0.4; } if (useR < 0.5 && !umb) { armR = -0.2; elR = -1.0; fR = 0.4; } }

  // --- pose each part, joint by joint
  bool footLp = part > 22.5 && part < 23.5, footRp = part > 23.5 && part < 24.5;
  bool legs = (part > 0.5 && part < 2.5) || (part > 8.5 && part < 10.5) || footLp || footRp;
  bool hipsP = part > 19.5 && part < 20.5 || (part > 14.5 && part < 15.5); // the coat below the waist, and the bag at the hip
  bool handL = part > 20.5 && part < 21.5 || (part > 6.5 && part < 7.5); // (the pint is in the left hand)
  bool handR = part > 21.5 && part < 22.5 || (part > 7.5 && part < 8.5); // (the phone in the right)
  bool foreL = part > 10.5 && part < 11.5, foreR = part > 11.5 && part < 12.5;
  bool upL = part > 2.5 && part < 3.5, upR = part > 3.5 && part < 4.5;
  if (footLp) { p = rotX(p, ankle, 0.0, footL); p = rotX(p, knee, 0.0, kneeL); p = rotX(p, hip, 0.0, thighL); }
  else if (footRp) { p = rotX(p, ankle, 0.0, footR); p = rotX(p, knee, 0.0, kneeR); p = rotX(p, hip, 0.0, thighR); }
  else if (part > 0.5 && part < 1.5) p = rotX(p, hip, 0.0, thighL);
  else if (part > 1.5 && part < 2.5) p = rotX(p, hip, 0.0, thighR);
  else if (part > 8.5 && part < 9.5) { p = rotX(p, knee, 0.0, kneeL); p = rotX(p, hip, 0.0, thighL); }
  else if (part > 9.5 && part < 10.5) { p = rotX(p, knee, 0.0, kneeR); p = rotX(p, hip, 0.0, thighR); }
  // arms: the wrist, the elbow, a turn across the body, the shoulder, out to the side
  float shX = 0.28;
  if (handL || foreL || upL) {
    if (handL) p = rotX(p, wrist, 0.0, wL);
    if (handL || foreL) { p = rotX(p, elbow, 0.0, elL); p = rotYAt(p, -0.3, fL); }
    p = rotX(p, sh, 0.0, armL);
    p = rotZ(p, -shX, sh, zL);
    p.y += shrug;
  } else if (handR || foreR || upR) {
    if (handR) p = rotX(p, wrist, 0.0, wR);
    if (handR || foreR) { p = rotX(p, elbow, 0.0, elR); p = rotYAt(p, 0.3, -fR); }
    p = rotX(p, sh, 0.0, armR);
    p = rotZ(p, shX, sh, zR);
    p.y += shrug;
  }
  // the phone only shows while someone's on it
  bool onPhone = act == 1.0 || act == 20.0 || act == 21.0;
  if (part > 7.5 && part < 8.5 && (!onPhone || umb || k < 0.3)) { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); return; }
  bool onHead = (part > 4.5 && part < 5.5) || (part > 15.5 && part < 18.5) || (part > 24.5 && part < 27.5);
  if (onHead) {
    p = rotZ(p, 0.0, sh + 0.05, tilt);
    p = rotX(p, sh + 0.05, -0.1, (rider ? uHeadDown * 0.75 : 0.0) + headPitch);
    p = rotY(p, aAnim.z + headYaw); n = rotY(n, aAnim.z + headYaw);
    p.y += shrug * 0.4;
  }
  // the chest turns against the hips with the stride, leans and stoops at the waist, and breathes
  if (hipsP) {
    p = rotY(p, -twist * 0.6); n = rotY(n, -twist * 0.6);
    p = rotX(p, hip, 0.0, (lean * moving + aBody.z) * 0.3);
  } else if (!legs) {
    p = rotY(p, twist); n = rotY(n, twist);
    p = rotX(p, waist, 0.0, lean * moving + aBody.z);
    p.y += breathe + chestUp * smoothstep(waist, sh, p.y);
  }
  // standers shift their weight from foot to foot
  if (moving < 0.5 && !seated) p.x += sin(uTime * 0.45 + seed * 3.0) * 0.025 * (p.y / 1.8);
  p.y += bob;
  if (seated) { p.y -= 0.36; p.z += 0.08; } // sit back on the seat
  // on a skateboard: standing on it side-on, carried along
  if (skating && !boardP) { p = rotY(p, 1.1); n = rotY(n, 1.1); p.y += 0.09; }

  // --- body shape: taller or shorter, broader or slighter (heads change less)
  float wScale = onHead ? pow(aBody.y, 0.3) : aBody.y;
  p.x *= wScale; p.z *= mix(1.0, wScale, 0.6);
  p.y *= aBody.x;

  // --- colour
  vec3 skin = uPal[int(aPal.w)];
  vec3 tint = vec3(1.0);
  bool hivis = bit(aLook.z, 7.0) > 0.5;
  bool headF = part > 4.5 && part < 5.5 && (abs(tag - 2.0) < 0.5 || abs(tag - 5.0) < 0.5 || tag > 14.5);
  if (headF) tint = skin; // (inked below)
  else if (tag > 0.5 && tag < 1.5) tint = uPal[int(aPal.x)];
  else if (tag > 1.5 && tag < 2.5) tint = uPal[int(aPal.y)];
  else if (tag > 2.5 && tag < 3.5) tint = uPal[int(aPal.z)];
  else if (tag > 3.5 && tag < 4.5) tint = skin;
  else if (tag > 4.5 && tag < 5.5) tint = uPal[int(legsIdx)];
  else if (tag > 5.5 && tag < 6.5) tint = uPal[int(aLook.w)];
  // on the head, tags 2, 5 and 15 are face features too (lower lids, cheeks, the brow crease)
  if (headF) {
    float f = tag < 2.5 ? 7.0 : tag < 5.5 ? 8.0 : 9.0;
    float amt = max(bit(aLook.x, f), 0.5 * bit(aLook.y, f));
    float order = fract((aPal.x * 7.0 + aPal.y * 3.0 + aPal.z * 11.0) * 0.137);
    if (uFaceless > order) amt = 0.0;
    vec3 ink = f > 7.5 && f < 8.5 ? skin * vec3(1.15, 0.62, 0.58) : vec3(0.07, 0.06, 0.06) * (f > 6.5 && f < 7.5 ? 1.0 : 2.0);
    tint = mix(skin, ink, f > 6.5 && f < 7.5 ? amt * 0.8 : amt * 0.7);
  }
  else if (tag > 14.5) tint = hivis ? vec3(0.86, 0.87, 0.84) : uPal[int(aPal.x)];
  else if (tag > 6.5) {
    // a face feature: inked (dark or faint) by the expression, or just skin
    float f = tag - 7.0;
    vec3 ink = f > 0.5 && f < 2.5 ? uPal[int(aPal.z)] * 0.45 : vec3(0.07, 0.06, 0.06);
    float amt = 0.0;
    if (f > 6.5) amt = bit(aLook.z, 8.0) * 0.9; // glasses
    else amt = max(bit(aLook.x, f), 0.5 * bit(aLook.y, f));
    // blinking, every few seconds
    if (f < 0.5 && fract(t / 4.3) < 0.035) amt = 0.25;
    // faces emptying: features go, a different moment for each person
    float order = fract((aPal.x * 7.0 + aPal.y * 3.0 + aPal.z * 11.0) * 0.137);
    if (uFaceless > order) amt = 0.0;
    tint = mix(skin, ink, amt);
  }
  vColor = color * tint * aLight.xyz;
  // someone on their phone: its cold light on their face and hands
  if (onPhone && !umb && (onHead || handL || handR)) vColor += tint * vec3(0.32, 0.36, 0.44) * k * (onHead ? 1.0 : 0.6);
  vAlbedo = albedo * tint;

  vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
  // down the escalator shaft and in the hall below, they go wherever it stretches to (whole, not stretched)
  vec3 o = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  if (o.y < -0.5 && abs(o.x - uStretchTop.x) < 6.0) wp.xyz += stretched(o) - o;
  vWorld = wp.xyz;
  vNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Nu=`
${Bl}
varying vec3 vColor;
varying vec3 vAlbedo;
varying vec3 vNormal;
varying vec3 vWorld;
void main() {
  vec3 col = vColor + vAlbedo * flameLight(vWorld, normalize(vNormal));
  gl_FragColor = vec4(applyFog(col, vWorld, 0.0), 0.0);
}
`;function Pu(e){let t=e.map(e=>new U(e));return new ca({vertexShader:Mu.replace(`PAL_SIZE`,String(t.length)),fragmentShader:Nu,uniforms:{...Ll,uPal:{value:t},uFaceless:{value:0},uHeadDown:{value:0}}})}var Fu=[1514791,1119774,2502718,3095114,4603963,9077104,11050118,5904926,2766642,1841690,6445650,3810840],Iu=[724500,724500,1119774,1975858,5904926,2766642,4603963,9214637,8011824],Lu=[1841690,3025448,3810840,6176034,9396534,7833242,11050118,724500],Ru=[15254688,14067578,13210965,10514495,9396534,7029800,4861468],zu=[1119774,1514791,2502718,3025448,4603963,1841690],Bu=[5904926,9396534,2766642,6445650,11050118,8011824,4603963,13210965,1841690],Vu=13597226,Hu=[7833242,11050118,12371667],Uu=[15911299,13813422,15262920,5530230,724500,13210965],Wu=[...Fu,...Iu,...Lu,...Ru,...zu,...Bu,Vu,...Hu,...Uu],Gu={coat:0,umb:Fu.length,hair:Fu.length+Iu.length,skin:Fu.length+Iu.length+Lu.length,legs:Fu.length+Iu.length+Lu.length+Ru.length},Ku=Gu.legs+zu.length,qu=Ku+Bu.length,Ju=qu+1,Yu=[3,3,1,2,1.5],Xu=.72,Zu={walk:0,brisk:1,shuffle:2,limp:3,run:4},Qu=.65,$u={walker:[0,0,0,0,0,4,1,11,19,20,21,25,26],stander:[0,1,1,3,4,5,7,10,11,12,13,14,15,16,19,20,20,21,22,23,24,25,26],drinker:[2,2,3,3,9,9,4,10,13,3,27,27,22,21],seated:[1,1,8,8,4,0,11,13,14,20,20,23,26],rider:[0,1,4,11,20,26]},ed={walker:[`neutral`,`neutral`,`neutral`,`tired`,`tired`,`stern`,`stern`,`smile`,`worried`,`flushed`,`content`,`blank`],stander:[`neutral`,`neutral`,`tired`,`stern`,`sad`,`smile`,`worried`,`flushed`,`blank`],drinker:[`smile`,`smile`,`smile`,`grin`,`neutral`,`laugh`,`flushed`,`content`],seated:[`tired`,`tired`,`tired`,`neutral`,`neutral`,`closed`,`sad`,`blank`,`worried`],rider:[`tired`,`neutral`,`neutral`,`stern`,`blank`]},td={walker:[`worried`,`content`,`tired`,`sad`,`stern`,`smile`],stander:[`worried`,`sad`,`content`,`surprised`,`angry`,`smile`],drinker:[`grin`,`laugh`,`surprised`,`content`,`laugh`],seated:[`sad`,`worried`,`content`,`upset`],rider:[`worried`,`blank`,`tired`]},nd={7:`sad`,8:`closed`,9:`laugh`,14:`yawn`,15:`closed`,16:`sad`,22:`content`,23:`tired`,26:`tired`,27:`smile`,28:`upset`,29:`upset`},rd=new Set([3,21]),id=.66,ad=.5,od=[1,1.1,.55,.85,1.7],sd=class{group=new kn;agents=[];meshes=[];material;attrs=[];counts=wu.map(()=>0);r;m=new H;q=new Mt;lit=[0,0,0];time=0;dirty=!0;solid=()=>!1;constructor(e=90,t=77){this.r=Jl(t);let n=Pu(Wu);this.material=n,wu.forEach(t=>{let r=Eu(t),i=t=>new ii(new Float32Array(e*t),t),a={aAnim:i(4),aPal:i(4),aLight:i(4),aLook:i(4),aBody:i(4)};for(let[e,t]of Object.entries(a))t.setUsage(Ge),r.setAttribute(e,t);let o=new fi(r,n,e);o.count=0,o.frustumCulled=!1,this.meshes.push(o),this.attrs.push(a),this.group.add(o)})}add(e,t,n){let r=this.r,i=n.ride?`rider`:n.lane?`walker`:n.seated?`seated`:n.pint?`drinker`:`stander`,a=n.variant??cd(r,Yu);this.counts[a]>=this.attrs[a].aAnim.count&&(a=this.counts.indexOf(Math.min(...this.counts)));let o=this.attrs[a].aAnim.count;if(this.counts[a]>=o)return null;let s=this.counts[a]++;this.meshes[a].count=this.counts[a];let c=(e,t)=>t+Math.floor(r.next()*e),l=i!==`drinker`&&!n.couple&&r.chance(.07),u=Math.min(1.12,Math.max(.88,1+(r.next()+r.next()+r.next()-1.5)*.1))*(l?.96:1),d=n.couple?.9+r.next()*.1:r.chance(.15)?1.15+r.next()*.15:.86+r.next()*.22,f=Zu.walk,p=n.speed??0;if(i===`walker`&&n.speed===void 0){p=1.05+r.next()*.5;let e=r.next();l?(f=Zu.shuffle,p=.6+r.next()*.15):n.couple?p=.95+r.next()*.2:e<.04&&!n.umbrella?(f=Zu.run,p=2.6+r.next()*.6):e<.08?(f=Zu.limp,p=.8+r.next()*.2):e<.33&&(f=Zu.brisk,p=1.5+r.next()*.3)}let m=wu[a],h=0,g=(e,t)=>{r.chance(t)&&(h|=e)};g(pu.scarf,.22),i!==`seated`&&i!==`drinker`&&g(pu.backpack,.2),h&pu.backpack||g(pu.bag,.15),m===`hoodie`&&!n.umbrella&&g(pu.hood,.55),m!==`hat`&&!(h&pu.hood)&&(g(pu.beanie,.12),g(pu.headphones,i===`drinker`?0:i===`stander`?.1:.22)),m===`jacket`&&g(pu.tie,.6),i!==`walker`&&i!==`stander`||l||g(pu.hivis,.03),g(pu.glasses,l?.5:.14);let _=h&pu.hivis?qu:c(Fu.length,Gu.coat),v=l?c(Hu.length,Ju):c(Lu.length,Gu.hair);this.attrs[a].aPal.setXYZW(s,_,c(Iu.length,Gu.umb),v,c(Ru.length,Gu.skin));let y={id:this.agents.length,variant:a,slot:s,pos:e.clone(),yaw:t,speed:p,lane:n.lane,u:n.u??0,dir:n.dir??1,ride:n.ride??!1,seated:n.seated??!1,home:e.clone(),phase:r.next()*10,umbrella:n.umbrella??!1,pint:n.pint??!1,dodge:0,nudge:new B,turn:0,gaze:0,lastThought:-1/0,head:new B,legs:c(zu.length,Gu.legs),lit:1,act:0,actK:0,actUntil:r.next()*6,acts:$u[i],build:{h:u,w:d,stoop:l?.22+r.next()*.1:0,gait:f},wear:h,accent:c(Bu.length,Ku),mood:ed[i][Math.floor(r.next()*ed[i].length)],nextFlicker:3+r.next()*12};return this.agents.push(y),this.dirty=!0,y}addWalker(e,t,n={}){let r=this.r,i=e.a.distanceTo(e.b),a=n.u??r.next()*i,o=e.a.clone().lerp(e.b,a/i),s=Math.atan2((e.b.x-e.a.x)*t,(e.b.z-e.a.z)*t),c=!n.ride&&r.chance(n.umbrella??.7),l=this.add(o,s,{speed:n.speed??(n.ride?.75:void 0),lane:e,u:a,dir:t,couple:n.couple,umbrella:c,ride:n.ride});if(!l||!n.couple)return l;let u=this.add(o,s,{speed:l.speed,lane:e,u:a,dir:t,couple:!0,umbrella:!1});return u&&(l.partner=u,u.partner=l,l.leads=!0,u.leads=!1,u.build.gait=l.build.gait),l}addPerson(e){let t=e=>{let t=Wu.indexOf(e);if(t<0)throw Error(`crowd: ${e.toString(16)} isn't in the palette`);return t},n=this.add(new B(0,-50,0),0,{variant:wu.indexOf(e.variant)});return n?(this.attrs[n.variant].aPal.setXYZW(n.slot,t(e.coat),Gu.umb,t(e.hair),t(e.skin)),n.legs=t(e.legs),n.accent=t(e.accent??e.coat),n.wear=e.wear,n.build.h=e.h??1,n.build.w=e.w??1,n.build.stoop=0,n.build.gait=Zu.walk,n.mood=e.mood??`neutral`,n.keep=!0,n.home.set(0,-50,0),this.dirty=!0,n):null}addStander(e,t,n={}){return this.add(e,t,{pint:n.pint,seated:n.seated})}update(e,t,n,r=55){this.time+=e;let i=new B,a=new B,o=this.agents.filter(e=>e.lane&&e.speed>0&&!e.ride);for(let s of this.agents){if(s.partner&&!s.leads&&s.partner.lane){let e=s.partner;i.subVectors(e.lane.b,e.lane.a).normalize(),a.set(-i.z,0,i.x),s.u=e.u,s.dir=e.dir,s.yaw=e.yaw,s.phase=e.phase,s.pos.copy(e.pos).addScaledVector(a,id),this.solid(s.pos.x,s.pos.z,s.pos.y)&&s.pos.copy(e.pos).addScaledVector(a,-.66);let n=s.pos.x-t.x,r=s.pos.z-t.z,o=Math.hypot(n,r);o<Qu&&o>.001&&Math.abs(s.pos.y-t.y)<1.2&&(s.pos.x+=n/o*(Qu-o),s.pos.z+=r/o*(Qu-o));let c=(s.pos.x-e.pos.x)*Math.cos(e.yaw)-(s.pos.z-e.pos.z)*Math.sin(e.yaw)<0;e.holdAct=c?17:18,s.holdAct=c?18:17}else if(s.lane&&s.speed>0){let n=s.lane.a.distanceTo(s.lane.b);i.subVectors(s.lane.b,s.lane.a).normalize(),a.set(-i.z,0,i.x);let c=0;if(!s.ride){let e=new B().subVectors(t,s.pos).setY(0),n=e.dot(i)*s.dir,r=e.dot(a);if(n>-.5&&n<3&&Math.abs(r-s.dodge)<.9)c=r>=s.dodge?-1.1:1.1;else for(let e of o){if(e===s||Math.abs(e.pos.y-s.pos.y)>1)continue;let t=e.pos.x-s.pos.x,n=e.pos.z-s.pos.z,r=(t*i.x+n*i.z)*s.dir;if(r<.2||r>2.2)continue;let o=t*a.x+n*a.z;if(Math.abs(o)<.55){c=o>=0?-.6:.6;break}}}s.dodge+=(c-s.dodge)*Math.min(1,e*2.5);let l=s.ride?9:s.dir>0?n-s.u:s.u,u=1;if(!s.ride){let e=t.x-s.pos.x,n=t.z-s.pos.z,r=(e*i.x+n*i.z)*s.dir,c=e*a.x+n*a.z-s.dodge;r>0&&r<1.8&&Math.abs(c)<.8&&(u=At.clamp((r-.6)/1.2,0,1));for(let e of o){if(e===s||e.dir!==s.dir||e.partner===s||Math.abs(e.pos.y-s.pos.y)>1)continue;let t=e.pos.x-s.pos.x,n=e.pos.z-s.pos.z,r=(t*i.x+n*i.z)*s.dir;r<=0||r>1.1||Math.abs(t*a.x+n*a.z)>.45||(r>.05||e.id<s.id)&&(u=Math.min(u,At.clamp((r-.5)/.6,0,1)))}}s.u+=s.speed*e*s.dir*Math.min(1,.2+l/1.2)*u;let d=new B().subVectors(t,s.lane.a).dot(i);if(Math.abs(s.u-d)>r&&!s.keep){let e=d-Math.sign(s.u-d)*(r-2-this.r.next()*8),t=Math.min(n,12)*this.r.next();s.u=e<0?t:e>n?n-t:e}if(s.u>n&&(s.u=s.ride?0:n-.01),s.u<0&&(s.u=s.ride?n:.01),!s.ride&&(s.u>=n-.01||s.u<=.01)&&(s.dir=s.u>=n-.01?-1:1),s.ride){for(let e of this.agents)if(e!==s&&e.lane===s.lane&&e.id<s.id&&Math.abs(e.u-s.u)<.75){s.u=Math.max(0,e.u-.8);break}}for(let e=0;e<4&&s.dodge!==0;e++){let t=s.lane.a.x+i.x*s.u+a.x*s.dodge,n=s.lane.a.z+i.z*s.u+a.z*s.dodge;if(!this.solid(t,n,s.pos.y))break;s.dodge=e===3?0:s.dodge*.5}if(s.pos.copy(s.lane.a).addScaledVector(i,s.u).addScaledVector(a,s.dodge),!s.ride){let n=s.pos.x+s.nudge.x-t.x,r=s.pos.z+s.nudge.z-t.z,i=Math.hypot(n,r);if(i<Qu&&i>.001&&Math.abs(s.pos.y-t.y)<1.2){let e=(Qu-i)/i,t=s.nudge.x+n*e,a=s.nudge.z+r*e;this.solid(s.pos.x+t,s.pos.z+a,s.pos.y)||s.nudge.set(t,0,a)}else s.nudge.multiplyScalar(1-Math.min(1,e*1.5));for(let t of this.agents){if(t===s||t.partner===s||s.partner===t||Math.abs(t.pos.y-s.pos.y)>1)continue;let n=s.pos.x+s.nudge.x-t.pos.x,r=s.pos.z+s.nudge.z-t.pos.z,i=Math.hypot(n,r);if(i>=ad)continue;let a=i>.001?n/i:Math.cos(s.id),o=i>.001?r/i:Math.sin(s.id),c=Math.min(ad-i,e*1.5),l=s.nudge.x+a*c,u=s.nudge.z+o*c;this.solid(s.pos.x+l,s.pos.z+u,s.pos.y)||s.nudge.set(l,0,u)}s.pos.add(s.nudge)}let f=Math.atan2(i.x*s.dir,i.z*s.dir);s.yaw+=Math.atan2(Math.sin(f-s.yaw),Math.cos(f-s.yaw))*Math.min(1,e*(s.ride?20:5)),s.ride||(s.phase+=s.speed*e/(Xu*s.build.h*od[s.build.gait])*Math.PI)}else if(s.phase=Math.sin(this.time*.7+s.id)*.4,!s.seated){for(let e of this.agents){if(e===s||e.id>s.id||e.lane||Math.abs(e.home.y-s.home.y)>1)continue;let t=s.home.x-e.home.x,n=s.home.z-e.home.z,r=Math.hypot(t,n);if(r>=.45)continue;let i=r>.001?t/r:1,a=r>.001?n/r:0,o=e.home.x+i*.5,c=e.home.z+a*.5;this.solid(o,c,s.home.y)||s.home.set(o,s.home.y,c)}let n=new B().subVectors(s.home,t).setY(0),r=n.length(),i=r<2?(2-r)*.9:0,a=s.home.clone().addScaledVector(n.normalize(),i);this.solid(a.x,a.z,a.y)||s.pos.lerp(a,Math.min(1,e*2))}let c=s.holdAct??s.act;s.holdAct===void 0&&this.time>s.actUntil?(s.actK<.02&&(s.act=s.acts[Math.floor(this.r.next()*s.acts.length)]??0,s.actUntil=this.time+3+this.r.next()*9),s.actK=Math.max(0,s.actK-e*1.5)):s.act===c?s.actK=Math.min(.999,s.actK+e*1.2):(s.actK=Math.max(0,s.actK-e*1.5),s.actK<.02&&(s.act=c));let l=this.attrs[s.variant],u=s.slot;this.q.setFromAxisAngle(new B(0,1,0),s.yaw),this.m.compose(s.pos,this.q,new B(1,1,1)),this.meshes[s.variant].setMatrixAt(u,this.m);let d=s.lane&&s.speed>0&&!s.ride&&!s.skate?1:.06,f=+!!s.umbrella+(s.pint?2:0)+(s.seated?4:0)+(s.ride?8:0);l.aAnim.setXYZW(u,s.phase,s.seated?0:d,s.turn,f+16*s.legs),tu(n,s.pos.x,s.pos.y+1.3,s.pos.z,0,.7,.7,this.lit),l.aLight.setXYZW(u,this.lit[0]*s.lit,this.lit[1]*s.lit,this.lit[2]*s.lit,s.act+(s.act?s.actK:0));let[p,m]=Au[this.expression(s,t)];l.aLook.setXYZW(u,p,m,s.wear,s.accent),l.aBody.setXYZW(u,s.build.h,s.build.w,s.build.stoop,s.build.gait),s.head.set(s.pos.x,s.pos.y+(s.seated?1.55:s.umbrella?2.35:2)*s.build.h,s.pos.z)}this.meshes.forEach((e,t)=>{e.instanceMatrix.needsUpdate=!0;let n=this.attrs[t];n.aAnim.needsUpdate=!0,n.aLight.needsUpdate=!0,n.aLook.needsUpdate=!0,this.dirty&&(n.aPal.needsUpdate=!0,n.aBody.needsUpdate=!0)}),this.dirty=!1}expression(e,t){let n=this.time;if(e.actK>.4){let t=nd[e.act];if(t)return t;if(rd.has(e.act)){if(Math.sin(n*.8+e.id*2.1)+.6*Math.sin(n*.31+e.id)<-.6)return e.mood===`sad`?`neutral`:e.mood;let t=Math.sin(n*11+e.id*1.7)+.7*Math.sin(n*6.3+e.id*.4)+.4*Math.sin(n*17.9);return t>.7?`talk`:t>-.5?`talkSoft`:`neutral`}if(e.act===9&&Math.sin(n*13+e.id)>.2)return`grin`}if(e.gaze>.7&&e.pos.distanceToSquared(t)<25)return e.gaze-.7<.8?`surprised`:[`stern`,`smile`,`worried`,`content`,`angry`][e.id%5];if(e.flicker&&n<e.flicker.until)return e.flicker.face;if(n>e.nextFlicker){let t=td[e.ride?`rider`:e.lane?`walker`:e.seated?`seated`:e.pint?`drinker`:`stander`];e.flicker={face:t[Math.floor(this.r.next()*t.length)],until:n+1.2+this.r.next()*2.2},e.nextFlicker=n+6+this.r.next()*14}return e.mood}};function cd(e,t){let n=e.next()*t.reduce((e,t)=>e+t,0);for(let e=0;e<t.length;e++)if((n-=t[e])<0)return e;return t.length-1}var ld=[329482,724500,1119774,1514791,1975858,2502718,3095114,3819095,4608870,5530230,6583175,7833242,9214637,10727360,12371667,14081510,1841690,3025448,4603963,6445650,1713184,2766642,2824720,4860434,7618586,10705439,13597226,15768124,16760936,3810840,6176034,9396534,13210965,15911299,16773320,15262920,16776168,16777215,3018772,5904926,9382438,12728878,15230026,15525074,13813422,12234908,11050118,9077104,8024162,5919816,8011824,10508346,2244636,3959338,3024952,4865374,6969224],ud=[399940,932506,2057200,5216255,10473727,15004671];function dd(e){let t=[];for(let n of e)t.push((n>>16&255)/255,(n>>8&255)/255,(n&255)/255);return t}var fd={A:`.##.|#..#|#..#|####|#..#|#..#|#..#`,B:`###.|#..#|#..#|###.|#..#|#..#|###.`,C:`.##.|#..#|#...|#...|#...|#..#|.##.`,D:`###.|#..#|#..#|#..#|#..#|#..#|###.`,E:`####|#...|#...|###.|#...|#...|####`,F:`####|#...|#...|###.|#...|#...|#...`,G:`.##.|#..#|#...|#.##|#..#|#..#|.###`,H:`#..#|#..#|#..#|####|#..#|#..#|#..#`,I:`###|.#.|.#.|.#.|.#.|.#.|###`,J:`..##|...#|...#|...#|#..#|#..#|.##.`,K:`#..#|#..#|#.#.|##..|#.#.|#..#|#..#`,L:`#...|#...|#...|#...|#...|#...|####`,M:`#...#|##.##|#.#.#|#.#.#|#...#|#...#|#...#`,N:`#..#|##.#|##.#|#.##|#.##|#..#|#..#`,O:`.##.|#..#|#..#|#..#|#..#|#..#|.##.`,P:`###.|#..#|#..#|###.|#...|#...|#...`,Q:`.##.|#..#|#..#|#..#|#..#|#.#.|.#.#`,R:`###.|#..#|#..#|###.|#.#.|#..#|#..#`,S:`.###|#...|#...|.##.|...#|...#|###.`,T:`#####|..#..|..#..|..#..|..#..|..#..|..#..`,U:`#..#|#..#|#..#|#..#|#..#|#..#|.##.`,V:`#...#|#...#|#...#|.#.#.|.#.#.|.#.#.|..#..`,W:`#...#|#...#|#...#|#.#.#|#.#.#|##.##|#...#`,X:`#...#|#...#|.#.#.|..#..|.#.#.|#...#|#...#`,Y:`#...#|#...#|.#.#.|..#..|..#..|..#..|..#..`,Z:`####|...#|..#.|.##.|.#..|#...|####`,a:`....|....|.##.|...#|.###|#..#|.###`,b:`#...|#...|###.|#..#|#..#|#..#|###.`,c:`...|...|.##|#..|#..|#..|.##`,d:`...#|...#|.###|#..#|#..#|#..#|.###`,e:`....|....|.##.|#..#|####|#...|.##.`,f:`.##|#..|###|#..|#..|#..|#..`,g:`....|....|.###|#..#|#..#|#..#|.###|...#|.##.`,h:`#...|#...|###.|#..#|#..#|#..#|#..#`,i:`#|.|#|#|#|#|#`,j:`.#|..|.#|.#|.#|.#|.#|.#|#.`,k:`#...|#...|#..#|#.#.|##..|#.#.|#..#`,l:`#.|#.|#.|#.|#.|#.|.#`,m:`.....|.....|####.|#.#.#|#.#.#|#.#.#|#.#.#`,n:`....|....|###.|#..#|#..#|#..#|#..#`,o:`....|....|.##.|#..#|#..#|#..#|.##.`,p:`....|....|###.|#..#|#..#|#..#|###.|#...|#...`,q:`....|....|.###|#..#|#..#|#..#|.###|...#|...#`,r:`...|...|#.#|##.|#..|#..|#..`,s:`...|...|.##|#..|.#.|..#|##.`,t:`.#.|.#.|###|.#.|.#.|.#.|..#`,u:`....|....|#..#|#..#|#..#|#..#|.###`,v:`.....|.....|#...#|#...#|.#.#.|.#.#.|..#..`,w:`.....|.....|#...#|#...#|#.#.#|#.#.#|.#.#.`,x:`...|...|#.#|#.#|.#.|#.#|#.#`,y:`....|....|#..#|#..#|#..#|#..#|.###|...#|.##.`,z:`....|....|####|..#.|.#..|#...|####`,0:`.##.|#..#|#.##|##.#|#..#|#..#|.##.`,1:`.#.|##.|.#.|.#.|.#.|.#.|###`,2:`.##.|#..#|...#|..#.|.#..|#...|####`,3:`###.|...#|...#|.##.|...#|...#|###.`,4:`#..#|#..#|#..#|####|...#|...#|...#`,5:`####|#...|###.|...#|...#|#..#|.##.`,6:`.##.|#...|#...|###.|#..#|#..#|.##.`,7:`####|...#|..#.|..#.|.#..|.#..|.#..`,8:`.##.|#..#|#..#|.##.|#..#|#..#|.##.`,9:`.##.|#..#|#..#|.###|...#|...#|.##.`,".":`.|.|.|.|.|.|#`,",":`..|..|..|..|..|.#|.#|#.`,"'":`#|#|.|.|.|.|.`,'"':`#.#|#.#|...|...|...|...|...`,"!":`#|#|#|#|#|.|#`,"?":`.##.|#..#|...#|..#.|.#..|....|.#..`,":":`.|.|#|.|.|.|#`,"-":`...|...|...|###|...|...|...`,"(":`.#|#.|#.|#.|#.|#.|.#`,")":`#.|.#|.#|.#|.#|.#|#.`,"/":`...#|...#|..#.|.##.|.#..|#...|#...`,_:`....|....|....|....|....|....|####`},pd={};for(let[e,t]of Object.entries(fd)){let n=t.split(`|`);pd[e]={w:Math.max(...n.map(e=>e.length)),rows:n}}var md={"‘":`'`,"’":`'`,"“":`"`,"”":`"`,"—":`-`,"–":`-`};function hd(e){return e.replace(/[‘’“”—–]/g,e=>md[e])}function gd(e){let t=0;for(let n of hd(e))t+=(n===` `?3:pd[n]?.w??3)+1;return Math.max(0,t-1)}function _d(e,t){let n=e.split(` `),r=[],i=``;for(let e of n){let n=i?`${i} ${e}`:e;gd(n)>t&&i?(r.push(i),i=e):i=n}return i&&r.push(i),r}var vd={everyday:`if I miss the 18:12 I'm not home till eight.did I actually lock the door.she read it two hours ago.I said that wrong in the meeting.everyone else looks like they know where they're going.just get home.I should call mum back.need milk.is it Thursday or Friday.left my charger on my desk.should've brought the big umbrella.these shoes were a mistake.why did I say yes to drinks.three weeks till payday.my socks are wet through.did he mean that as a joke.bins go out tonight.I'll start running again on Monday.forgot to eat lunch again.he never asks how I am.one more email and I'd have screamed.twelve percent battery.what's for dinner.walk faster.can't remember if I sent it.don't look at your phone.I hope the cat is ok.she said "fine" with a full stop.it's darker every evening.nobody told me about the restructure`.split(`.`),pressure:[`one more and then I'll go`,`laugh, you're meant to laugh`,`they all seem so easy with each other`,`I've been nodding for ten minutes`,`is it rude to leave now`,`I hate this job`,`I'm not ok`,`I don't want to go home`,`say something interesting`,`he's talking over me again`,`why is it so loud in here`,`I've told this story before`,`don't check your emails`,`everyone else is having a better week`,`am I drunk or just tired`,`I should be enjoying this`,`pretend you got the joke`],hold:[`breathe out`,`it'll look different tomorrow`,`just this bit, then the next bit`,`the rain's easing off`,`nearly there`,`look up for once`,`someone will be home`],time:[`18:12`,`delayed again`,`eight minutes`,`I'll be late`,`come on, platform, come on`,`nineteen minutes. twenty.`,`if it's cancelled I'll cry`,`I've been standing here since quarter to`,`every single night`,`twelve minutes to Shenfield`,`missed the 18:04 by a second`,`still "expected"`,`I could still make it`],inward:[`how long have I felt like this`,`can't remember the last time I laughed`,`I'm so tired of being tired`,`nobody would notice if I went quiet`,`am I always like this`,`when did I get so quiet`,`keep your head down`,`I used to want things`,`what was it all for`],fading:[`what was I going to say to her`,`I used to know all the words to that`,`we went there once, didn't we`,`what did I even do last weekend`,`I can't picture his face any more`,`the sea that summer`,`it was a Tuesday, I think`,`I had something to tell someone`],heavy:[`I'm trying, I'm really trying`,`don't let them see`,`keep it together till Paddington`,`it comes in waves`,`is it cold in here or is it me`,`please just let it pass`,`everyone can tell`,`I'm close to something`],curiousStreet:[`is that a candle? in this rain?`,`that's the third time today I've seen the man in the hood`,`I've walked past this pub for nine years and never gone in`,`she typed 'are you ok' and then deleted it. I saw the dots.`,`I'm going to ask her tonight. probably.`,`he doesn't know I quit today`,`my dad used to bring me here on Saturdays`,`I miss the version of me that liked this city`,`nobody's looked up all day. not once.`,`I could just keep walking. past the station. past everything.`,`the lobby clock at work is always five minutes fast. or I'm slow.`,`I wrote a song once. never played it to anyone.`,`the light's following someone. why is it following them?`,`I've been rehearsing this apology since Tuesday`,`I still have her key`],curiousStation:[`there's no platform zero. is there?`,`the board said Yesterday for a second`,`the busker's playing the song from my head`,`I keep missing the same train on purpose`,`if I don't get on, nothing happens. I checked.`,`how far down does this go`],curiousTrain:[`the tunnel lights spell something if you count them`,`my reflection blinked first`,`there's a seat at the back nobody sits in`,`I dreamt about this exact carriage`,`Reading. then home. then what?`,`someone's written something on the window`,`this is the last time I do this commute`],reflection:[`I haven't slept properly since June`,`nobody knows`,`I'm so tired of being the fine one`,`I want someone to ask`,`I used to be braver`,`I'm scared most of the time`,`I miss who I was before`,`I keep saying 'next year'`,`if I stopped answering, how long until anyone noticed`,`I cried in the toilets at lunch`,`I'm still in love with her`,`I don't want to get off at my stop`],fragments:[`home`,`where`,`can't`,`hold`,`no`,`please`,`I`,`out`,`when`,`still`],wayout:[`find a way out, maybe tomorrow`,`find a way out, call someone`,`find a way out, just breathe`,`find a way out, one day at a time`,`find a way out, tell her`,`find a way out, go for a walk`,`find a way out, sleep first`,`find a way out, say it out loud`,`find a way out, it's allowed`,`find a way out, start small`,`find a way out, maybe tonight`,`find a way out, ask for help`]},yd={verse1:[`keep walking`,`it's fine`,`don't think about it`,`just get home`,`why am I like this`],pre1:[`they can tell`,`say something`,`I can't hear myself think`,`too many people`,`breathe`],pre1b:[`get out`,`they can all tell`,`stop it`,`I'm fine. I'm fine.`,`why can't I just`],chorus1:[`hold on`,`hold on`,`nearly`],post1:[`I'm going to be late`,`it's all going too fast`,`I cannot`],hook1:[`it's all going too fast`,`wait`],verse2:[`dig down`,`where is it`,`I need to know`,`further`],pre2:[`what was I`,`I can't remember`,`yesterday`],pre2b:[`I'm trying`,`let it pass`,`don't let them see`],hook2:[`I`,`out`],bridge:[`find a way out`]},bd={intro:[`everyday`],verse1:[`everyday`],pre1:[`pressure`,`everyday`],pre1b:[`pressure`],chorus1:[`hold`],post1:[`time`],hook1:[`time`],verse2:[`inward`],pre2:[`fading`],pre2b:[`heavy`,`fading`],hook2:[`fragments`],bridge:[`wayout`],outro:[]},xd={intro:`curiousStreet`,verse1:`curiousStreet`,pre1:`curiousStreet`,pre1b:`curiousStreet`,chorus1:`curiousStreet`,post1:`curiousStation`,hook1:`curiousStation`,verse2:`curiousStation`,pre2:`curiousTrain`,pre2b:`curiousTrain`},Sd={verse1:16,pre1:9,pre1b:6,chorus1:7,post1:6,hook1:6,verse2:8,pre2:10,pre2b:9,hook2:9,bridge:8},Cd=10727360,wd=ud[4],Td=.5,Ed=16,Dd=1,Od=22,kd=3,Ad=24,jd=class{active=[];recent=[];nextOwn=0;floodAcc=0;seed=1;v=new B;specials=[];ownHistory=[];floodLevel=0;lastT=0;nextAllowed=0;clear(){this.active=[]}addSpecial(e){this.specials.push(e)}echo(e,t,n){let r=this.ownHistory.length&&Math.random()<.7?this.ownHistory:yd[n??``]??this.ownHistory,i=r[Math.floor(Math.random()*r.length)];i&&this.active.push({text:i,color:wd,agent:null,at:e.clone(),born:t,life:this.lifeFor(i,!1),own:!0,flood:!1,style:`plain`,seed:this.seed++,jx:0,jy:0,ox:0,oy:0})}looking(e,t){let n=this.v.copy(e).project(t.camera);if(n.z>1)return!1;let r=(n.x*.5+.5)*t.w-t.w/2,i=(n.y*.5+.5)*t.h-t.h/2;return Math.hypot(r,i)<Ed}quieten(){for(let e of this.active){let t=this.lastT-e.born;e.life-t>1.2&&(e.life=t+1.2)}}people=[];update(e){if(this.people=e.agents,this.lastT=e.t,this.active=this.active.filter(t=>e.t-t.born<t.life),!e.enabled||!e.section)return;let t=bd[e.section]??[],n=e.camera,r=new B(n.position.x,0,n.position.z),i=this.active.filter(e=>!e.flood&&!e.own).length;for(let a of e.agents){if(this.v.copy(a.head).sub(n.position).length()>Ad){a.gaze=0;continue}let o=this.v.copy(a.head).setY(a.head.y-.6).project(n),s=(o.x*.5+.5)*e.w-e.w/2,c=(o.y*.5+.5)*e.h-e.h/2;a.gaze=o.z<1&&Math.hypot(s,c)<Ed?a.gaze+e.dt:Math.max(0,a.gaze-e.dt*2);let l=r.distanceTo(new B(a.pos.x,0,a.pos.z))<Dd;(a.gaze>Td||l)&&e.t-a.lastThought>Od&&i<(e.calm?2:kd)&&t.length&&e.t>=this.nextAllowed&&(this.spawnFor(a,t,e,!1),this.nextAllowed=e.t+(e.calm?3.2:1.4))}for(let t of this.specials)t.shown||t.pos.distanceTo(n.position)>t.range||(t.gaze=this.looking(t.pos,e)?(t.gaze??0)+e.dt:0,t.gaze>Td&&(t.shown=!0,this.active.push({text:t.text,color:t.color??Cd,agent:null,at:t.pos.clone(),born:e.t,life:this.lifeFor(t.text,!1)+1,own:!1,flood:!1,style:`plain`,seed:this.seed++,jx:0,jy:0,ox:0,oy:0})));if(e.flood>0&&t.length)for(this.floodAcc+=e.dt*(.4+6*e.flood**2.2),this.floodLevel=e.flood;this.floodAcc>=1&&(--this.floodAcc,!(this.active.length>48));)if(Math.random()<.22&&yd[e.section])this.spawnOwn(e,!0);else{let r=new Set(this.active.map(e=>e.agent)),i=e.agents.filter(e=>e.head.distanceTo(n.position)<Ad&&this.v.copy(e.head).project(n).z<1),a=i.filter(e=>!r.has(e)),o=a.length?a:i;o.length&&this.spawnFor(o[Math.floor(Math.random()*o.length)],t,e,!0)}else this.floodAcc=0,this.floodLevel=0;let a=Sd[e.section];a&&yd[e.section]&&((this.nextOwn===0||e.t<this.nextOwn-a*2)&&(this.nextOwn=e.t+a*(.5+Math.random())),e.t>=this.nextOwn&&(this.spawnOwn(e,!1),this.nextOwn=e.t+a*(.7+Math.random()*.6)))}spawnFor(e,t,n,r,i,a=Cd){let o=xd[n.section??``],s=e.reflection,c=e.thought;c&&(i=c,e.thought=void 0);let l=i??(s?this.pick([`reflection`]):o&&Math.random()<.33?this.pick([o]):this.pick(t));s&&(a=7833242),e.lastThought=n.t,e.gaze=0,this.active.push({text:l,color:a,agent:e,at:e.head.clone(),born:n.t,life:this.lifeFor(l,r),own:!1,flood:r,style:this.styleFor(t),seed:this.seed++,jx:r?(Math.random()-.5)*18:0,jy:r?(Math.random()-.5)*10:0,ox:0,oy:0})}spawnOwn(e,t,n){let r=yd[e.section??``]??[],i=n??r[Math.floor(Math.random()*r.length)];if(!i)return;this.ownHistory.includes(i)||this.ownHistory.push(i);let a=e.camera,o=new B(0,0,-1).applyQuaternion(a.quaternion).setY(0).normalize(),s=new B(-o.z,0,o.x),c=a.position.clone().addScaledVector(o,3+Math.random()*1.5).addScaledVector(s,(Math.random()-.5)*(t?3.5:2.4)).add(new B(0,.15+Math.random()*.5,0));this.active.push({text:i,color:wd,agent:null,at:c,born:e.t,life:this.lifeFor(i,t),own:!0,flood:t,style:this.styleFor(bd[e.section??``]??[]),seed:this.seed++,jx:t?(Math.random()-.5)*18:0,jy:t?(Math.random()-.5)*10:0,ox:0,oy:0})}styleFor(e){return e.includes(`fragments`)?`fragment`:e.includes(`fading`)?`fading`:`plain`}lifeFor(e,t){return(t?3.2:4.6)+e.length*.05}pick(e){let t=e.flatMap(e=>vd[e]??[]).filter(e=>!this.recent.includes(e)),n=t.length?t:e.flatMap(e=>vd[e]??[]),r=n[Math.floor(Math.random()*n.length)];return this.recent.push(r),this.recent.length>24&&this.recent.shift(),r}draw(e,t,n){let r=this.floodLevel>.8,i=[],a=this.active.map(e=>{let r=e.agent?e.agent.head:e.at,i=n-e.born;return{th:e,age:i,p:this.v.copy(r).setY(r.y+Math.min(i,e.life)*.1).project(t).clone()}}).filter(e=>e.p.z<1).sort((e,t)=>e.th.born-t.th.born),o=[];for(let n of this.people){if(n.head.distanceTo(t.position)>16||n.pos.y<-40)continue;let r=this.v.copy(n.head).project(t).clone(),i=this.v.copy(n.pos).project(t);if(r.z>1||i.z>1)continue;let a=(1-(r.y*.5+.5))*e.h,s=(1-(i.y*.5+.5))*e.h,c=(r.x*.5+.5)*e.w,l=Math.max(2,(s-a)*.2);o.push({x0:c-l,y0:a,x1:c+l,y1:s,ag:n})}let s=[];for(let{th:t,age:n,p:c}of a){let a=Math.min(1,n/.6),l=Math.min(1,(t.life-n)/1.6),u=Math.max(0,Math.min(a,l));if(u<=.02)continue;let d=_d(t.text,118),f=Math.max(...d.map(e=>gd(e))),p=d.length*11,m=(c.x*.5+.5)*e.w+(r?t.jx:0),h=(1-(c.y*.5+.5))*e.h-p+(r?t.jy:0),g=t.ox,_=t.oy;if(!r&&!t.laid){t.laid=!0;let e=(e,t,n,r)=>m+t-f/2-r<e.x1&&m+t+f/2+r>e.x0&&h+n-2<e.y1&&h+n+p+2>e.y0,n=(n,r)=>o.filter(i=>i.ag!==t.agent&&e(i,n,r,1)).length,r=[[0,0]];for(let e=1;e<=8;e++)r.push([0,-e*11],[e*14,-e*4],[-e*14,-e*4],[0,e*11]);let a=r.filter(([t,n])=>!i.some(r=>e(r,t,n,3))&&h+n>2),s=a[0]??[0,0],c=1/0;for(let e of a){let t=n(e[0],e[1]);if(t<c&&(c=t,s=e),t===0)break}[g,_]=s}t.ox=g,t.oy=_;let v=Math.min(e.w-f/2-3,Math.max(f/2+3,m+t.ox)),y=Math.max(2,h+t.oy);m<-40||m>e.w+40||y>e.h+10||(i.push({x0:v-f/2,y0:y,x1:v+f/2,y1:y+p}),s.push({th:t,rows:d,x:v,y,alpha:u,age:n}))}for(let{th:t,rows:n,x:r,y:i,alpha:a,age:o}of s){let s=0;n.forEach((n,c)=>{let l=s;s+=n.length+1,e.text(n,r-gd(n)/2,i+c*11,t.color,a,{keep:this.mask(t,o,l)})})}}mask(e,t,n){if(e.style===`plain`)return;let r=[],i=0;for(let t of e.text)r.push(i),t===` `&&i++;let a=t=>{let n=Math.sin(e.seed*91.7+t*12.9898)*43758.5453;return n-Math.floor(n)};if(e.style===`fading`){let e=Math.min(.6,Math.max(0,t-2.2)*.22);return t=>a(r[t+n]??0)>=e}let o=Math.max(0,t-(e.life-1.4))*.5;return e=>a(e+n+100)>=o}},Md=[{stop:`the Lamb Tavern`,from:`pre1.1`,until:`chorus1`,lines:[]},{stop:`Liverpool Street concourse`,from:84.2,until:`hook1.1+5`,lines:[]},{stop:`the stalled tunnel`,from:`hook2`,until:`hook2+23`,rise:.3,lines:[]}],Nd=ud[4],Pd=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)),Fd=class{envelope(e,t){for(let n of Md){let r=e.resolve(n.from),i=e.resolve(n.until);if(!(t<r-.1||t>i+1.6))return this.rise=n.rise??1.5,Pd((t-r)/1.4)*(1-Pd((t-i)/1.5))}return 0}rise=1.5;endOf(e,t){for(let n of Md){let r=e.resolve(n.from),i=e.resolve(n.until);if(t>=r-.1&&t<=i)return i}return-1}draw(e,t,n,r,i){for(let a of Md){let o=t.resolve(a.from),s=t.resolve(a.until);if(n<o||n>s+1.5)continue;let c=a.lines.map(e=>t.resolve(e.at)),l=r.clone().project(i),u=l.z>1,d=u?e.w/2:(l.x*.5+.5)*e.w,f=u?e.h/2:(1-(l.y*.5+.5))*e.h,p=u?e.w/2:Math.min(e.w-40,Math.max(40,d)),m=e.h*.34;a.lines.forEach((r,i)=>{let a=c[i],o=Math.min(c[i+1]??s,s);if(n<a||n>o+1.4)return;let l=n-a,u=n>o?Pd((n-o)/1.3):0,h=Pd((n-(r.rewrite?t.resolve(r.rewrite.at):1/0))/.9),g=h<=0?r.text:h>=1?r.rewrite.text:Id(r.text,r.rewrite.text,h,n),_=Math.max(gd(r.text),gd(r.rewrite?.text??``))*2<e.w-24?2:1,v=gd(g)*_>e.w-8?_d(g,e.w-12):[g],y=0;v.forEach((t,n)=>{let r=gd(t)*_,i=Math.min(e.w-r-4,Math.max(4,p-r/2)),a=m-11*_*(v.length-n)-u*8,o=i;for(let n of t){let t=(n===` `?3:gd(n))*_+_,r=Pd((l-y*.035)/.65),i=r*(1-u*(.6+.4*(y*37%7)/7));if(i>.02&&n!==` `){let t=d+(o-d)*r,s=f+(a-f)*r-u*(6+y*13%5*3);e.text(n,t,s,Nd,Math.min(1,i),{scale:_})}o+=t,y++}y++})})}}};function Id(e,t,n,r){let i=Math.max(e.length,t.length),a=``;for(let o=0;o<i;o++){let s=o/i*.7+.15;n>s+.15?a+=t[o]??``:n>s-.1?a+=`abcdefghijklmnopqrstuvwxyz`[Math.floor((r*23+o*7)%26)]:a+=e[o]??``}return a.replace(/\s+$/,``)}var Ld=`
attribute vec3 color;
attribute float emissive;
attribute vec3 albedo;
varying vec3 vColor;
varying vec3 vAlbedo;
varying vec3 vNormal;
varying float vEm;
varying vec3 vWorld;
#ifdef STRETCH
${Rl}
#endif
#ifdef SHATTER
// the carriage coming apart: each piece (aShard: its centre, a seed) turns and
// drifts away from where the player stands. The floor near them fans out into
// stepping stones instead.
attribute vec4 aShard;
uniform float uBreak;
uniform float uAge;
uniform vec3 uCore;
uniform float uFloorY;
vec3 rotA(vec3 v, vec3 ax, float a) { float c = cos(a), s = sin(a); return v * c + cross(ax, v) * s + ax * dot(ax, v) * (1.0 - c); }
#endif
void main() {
  vColor = color;
  vAlbedo = albedo;
  vEm = emissive;
#ifdef USE_INSTANCING
  // repeated pieces (tunnel rings, suburbs) each carry their own placement
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
#else
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vNormal = normalize(mat3(modelMatrix) * normal);
#endif
#ifdef SHATTER
  if (uBreak > 0.0) {
    vec3 wc = (modelMatrix * vec4(aShard.xyz, 1.0)).xyz;
    float sd = aShard.w;
    vec3 h3 = fract(vec3(sd * 17.13, sd * 31.7, sd * 47.3)) - 0.5;
    vec3 ow = wc - uCore; ow.y = 0.0;
    float d = length(ow);
    bool floorPiece = wc.y < uFloorY + 0.15;
    float k = uBreak * (floorPiece ? smoothstep(5.5, 7.0, d) : 1.0);
    vec3 ax = normalize(h3 + vec3(0.01, 0.02, 0.0));
    float ang = k * (0.6 + fract(sd * 3.3) * 3.0) + uAge * 0.15 * k * h3.x;
    vec3 dir = normalize(ow + h3 * 3.0 + vec3(0.001));
    vec3 move = dir * k * (3.0 + fract(sd * 7.7) * 12.0) + vec3(0.0, k * (h3.y * 7.0 + 0.8), 0.0);
    move += vec3(sin(uAge * 0.3 + sd * 6.0), sin(uAge * 0.23 + sd * 9.0), cos(uAge * 0.27 + sd * 5.0)) * 0.7 * k;
    wp.xyz = wc + rotA(wp.xyz - wc, ax, ang) + move;
    vNormal = rotA(vNormal, ax, ang);
    if (floorPiece && d < 7.0) {
      // underfoot: the strip of floor swings round the player into a ring of stepping stones
      float f = uBreak * smoothstep(0.8, 1.6, d) * (1.0 - smoothstep(5.5, 7.0, d));
      float turn = f * (fract(sd * 5.1) - 0.5) * 6.0;
      vec2 r = wp.xz - uCore.xz;
      float c = cos(turn), s = sin(turn);
      wp.xz = uCore.xz + vec2(c * r.x - s * r.y, s * r.x + c * r.y) * (1.0 + f * 0.25);
      wp.y -= f * (0.04 + 0.08 * fract(sd * 2.9));
      vNormal.xz = vec2(c * vNormal.x - s * vNormal.z, s * vNormal.x + c * vNormal.z);
    }
  }
#endif
#ifdef STRETCH
  wp.xyz = stretched(wp.xyz);
#endif
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Rd=`
${Bl}
uniform vec3 uTint;
varying vec3 vColor;
varying vec3 vAlbedo;
varying vec3 vNormal;
varying float vEm;
varying vec3 vWorld;
float hash(vec3 p) { return fract(sin(dot(floor(p), vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
void main() {
  vec3 col = vColor * uTint + vAlbedo * flameLight(vWorld, normalize(vNormal));
  if (vEm > 0.5) {
    // all lit windows can flicker together (driven by the timeline)
    float f = step(0.5, hash(vWorld * 0.5 + floor(uTime * 24.0)));
    col *= 1.0 - uWindowFlicker * (0.35 + 0.65 * f);
  }
#ifdef NO_FOG
  gl_FragColor = vec4(col, 0.0);
#else
  gl_FragColor = vec4(applyFog(col, vWorld, vEm), 0.0); // alpha = flame mask
#endif
}
`;function zd(e=new U(1,1,1),t={}){let n={};return t.shatter&&(n.SHATTER=``),t.fog===!1&&(n.NO_FOG=``),t.stretch&&(n.STRETCH=``),new ca({vertexShader:Ld,fragmentShader:Rd,defines:n,uniforms:{...Ll,uTint:{value:e},...t.shatter?{uBreak:{value:0},uAge:{value:0},uCore:{value:new B},uFloorY:{value:0}}:{}}})}var Bd=zd(),Vd=zd(new U(1,1,1),{stretch:!0}),Hd=.1,Ud=.05,Wd={coat:1975858,coatDark:1514791,coatEdge:2502718,trousers:1119774,shoes:329482,skin:13210965,skinShade:9396534,hand:3810840,lips:9396534,hair:1841690,brow:3025448,eye:329482};function Gd(e,t,n,r){let i=Wd;for(let a=0;a<6;a++)for(let o=0;o<7;o++)for(let s=0;s<6;s++){let c=a===0||a===5||s===0||o===6;e.set(t+a,n+o,r+s,c||o>=5&&s<5?i.hair:i.skin)}for(let i of[0,5])e.clear(t+i,n,r+5),e.clear(t+i,n,r),e.clear(t+i,n+6,r);e.clear(t,n+6,r+5),e.clear(t+5,n+6,r+5),[[null,i.skinShade,i.skin,i.skin,i.skinShade,null],[i.skinShade,i.skin,i.lips,i.lips,i.skin,i.skinShade],[i.skinShade,i.skin,i.skinShade,i.skinShade,i.skin,i.skinShade],[i.skin,i.skin,i.skin,i.skin,i.skin,i.skin],[i.skin,i.eye,i.skin,i.skin,i.eye,i.skin],[i.hair,i.brow,i.skin,i.skin,i.brow,i.hair],[i.hair,i.hair,i.hair,i.hair,i.hair,i.hair]].forEach((i,a)=>i.forEach((i,o)=>i===null?e.clear(t+o,n+a,r+5):e.set(t+o,n+a,r+5,i))),e.set(t+2,n+3,r+6,i.skin),e.set(t+3,n+3,r+6,i.skin)}function Kd(){let e=new K(8,9,9,Ud),t=Wd;for(let n=0;n<8;n++)for(let r=0;r<9;r++)for(let i=0;i<8;i++)e.set(n,r,i,r===8||n===0||n===7?t.coatEdge:t.coat);for(let n=0;n<8;n++)e.set(n,8,8,t.coatEdge),e.set(n,7,8,t.coatEdge);for(let n=0;n<7;n++)e.set(0,n,8,t.coatEdge),e.set(7,n,8,t.coatEdge);e.carve(1,0,1,7,7,9),Gd(e,1,0,1),e.clear(0,8,0),e.clear(7,8,0),e.clear(0,8,1),e.clear(7,8,1);for(let t=1;t<7;t++)e.clear(t,8,0);return e}function qd(){let e=new K(8,9,9,Ud);return Gd(e,1,0,1),e.box(0,0,0,8,2,2,Wd.coat),e.box(1,2,0,7,3,1,Wd.coatEdge),e}function Jd(){let e=new K(5,9,3,Hd),t=Wd;e.box(0,0,0,5,9,3,t.coat);for(let n=0;n<5;n++)e.set(n,0,2,t.coatDark);for(let n=0;n<9;n++)e.set(2,n,2,t.coatDark);return e.set(1,8,2,t.coatEdge),e.set(3,8,2,t.coatEdge),e.set(0,4,2,t.coatDark),e.set(4,4,2,t.coatDark),e}var Yd=.075;function Xd(){let e=new K(2,11,4,Yd);return e.box(0,1,1,2,11,3,Wd.trousers),e.box(0,0,0,2,1,4,Wd.shoes),e}function Zd(){let e=new K(2,10,2,Yd);return e.box(0,1,0,2,10,2,Wd.coat),e.box(0,1,0,2,2,2,Wd.coatDark),e.box(0,0,0,2,1,2,Wd.hand),e}var Qd=null;function $d(){return Qd||={hoodUp:uu(Kd(),{centre:!0}),hoodDown:uu(qd(),{centre:!0}),coat:uu(Jd(),{centre:!0}),leg:uu(Xd(),{centre:!0}),arm:uu(Zd(),{centre:!0})},Qd}var ef=class{group=new kn;material=zd(new U(1,1,1));hoodUp;hoodDown;head=new kn;legs=[];arms=[];body=new kn;lit=[0,0,0];hoodPivot=new kn;constructor(e={}){let t=$d(),n=this.material;this.group.add(this.body);for(let e of[-1,1]){let r=new kn;r.position.set(e*.1,.82,0);let i=new W(t.leg,n);i.position.set(0,-.82,.03),r.add(i),this.body.add(r),this.legs.push(r);let a=new kn;a.position.set(e*.325,1.38,0);let o=new W(t.arm,n);o.position.set(0,-.72,0),a.add(o),this.body.add(a),this.arms.push(a)}let r=new W(t.coat,n);r.position.y=.5,this.body.add(r),this.head.position.set(0,1.38,-.02),this.hoodUp=new W(t.hoodUp,n),this.hoodDown=new W(t.hoodDown,n),this.hoodPivot.position.set(0,.05,-.2),this.hoodUp.position.set(0,-.05,.2),this.hoodPivot.add(this.hoodUp),this.head.add(this.hoodPivot,this.hoodDown),this.body.add(this.head),this.setHood(e.hood??!0)}setHood(e){this.hoodUp.visible=e,this.hoodDown.visible=!e,this.hoodPivot.rotation.x=0}lowerHood(e){e=Math.min(1,Math.max(0,e)),this.hoodDown.visible=e>0,this.hoodUp.visible=e<.98,this.hoodPivot.rotation.x=-e*e*1.9}sit(e){for(let t of this.legs)t.rotation.x=-1.4*e;for(let t of this.arms)t.rotation.x=-.35*e;this.body.position.y=-.37*e,this.body.position.z=.06*e}look(e){this.head.rotation.x=-e}pose(e,t){let n=Math.sin(e);this.legs[0].rotation.x=n*.45*t,this.legs[1].rotation.x=-n*.45*t,this.arms[0].rotation.x=-n*.3*t,this.arms[1].rotation.x=n*.3*t,this.body.position.y=Math.abs(Math.cos(e))*.03*t,this.head.rotation.x=.06*t}lightFrom(e){let t=this.group.position;tu(e,t.x,t.y+1.2,t.z,0,.6,.8,this.lit),this.material.uniforms.uTint.value.setRGB(this.lit[0],this.lit[1],this.lit[2])}};function tf(e,t,n,r={}){let i=r.pad??0,a=[...e].map(e=>pd[e]),o=a.reduce((e,t)=>e+(t?t.w:3)+1,-1)+i*2,s=7+i*2,c=new K(o,s,1,t);r.bg!==void 0&&c.box(0,0,0,o,s,1,r.bg,r.bgEmissive);let l=i;for(let e of a)e?(e.rows.slice(0,7).forEach((t,a)=>{for(let o=0;o<e.w;o++)t[o]===`#`&&c.set(l+o,s-1-i-a,0,n,r.emissive)}),l+=e.w+1):l+=4;return c}var nf=-9.5,rf=.15,af=.25,of=(e,t,n)=>new B(nf-e,rf+t,-n),sf=(e,t)=>({u:nf-e,v:-t});function cf(e,t,n){return new H().makeTranslation(nf,rf,0).multiply(new H().makeRotationY(Math.PI)).multiply(new H().makeTranslation(e,t,n))}function lf(e,t,n,r,i){let a=new H().makeBasis(r,new B(0,1,0),i);return cf(0,0,0).multiply(new H().makeTranslation(e,t,n)).multiply(a)}var uf={right:new B(0,0,1),out:new B(-1,0,0)},df=13813422,ff=15525074,pf=11050118,mf=4608870,hf=9214637,gf=1514791,_f=16776168;function vf(e){let t=new kn,n=[],r=(e,t,r,i,a,o)=>n.push({pos:of(e,t,r),color:i,radius:a,intensity:o});for(let e of[3,8])for(let t of[-8,0,8])r(e,12,t,Ql,15,.6);for(let e of[20,25,31])for(let t of[-4,4])r(e,13.5,t,Ql,15,.6);for(let e of[-6.5,6.5])r(14,11,e,Ql,9,.35);for(let e=0;e<16;e+=3)for(let t of[-5.6,5.6])r(10.25+.5*e,.25*e+.3,t,Ql,1.6,.6);for(let e of[-8.6,8.6])r(18.1,5.2,e,Ql,3.5,.6);r(20.6,4.6,0,Zl,3,.5);let i=[...e,...n],a=new K(136,69,104,af),o=e=>Math.round(e/af),s=e=>Math.round((e+.25)/af),c=e=>Math.round((e+13)/af),l=(e,t,n,r,i,l,u,d=!1)=>a.box(o(e),s(n),c(i),o(t),s(r),c(l),u,d),u=Jl(3030);for(let e=0;e<a.sx;e++)for(let t=0;t<a.sz;t++)a.set(e,0,t,e%8==0||t%8==0?df:ff);l(0,18,0,16.75,-13,-12.75,df),l(0,18,0,16.75,12.75,13,df),l(33.75,34,0,16.75,-13,13,mf);for(let e=0;e<a.sx;e++)for(let t=0;t<a.sz;t++){let n=t%12==6&&e%16!=0;a.set(e,s(16.75),t,n?_f:12371667,n)}for(let e=0;e<16;e++){let t=10+.5*e,n=.25*(e+1);l(t,t+.5,0,n,-6,6,ff),l(t,t+.25,n-.25,n,-6,6,df),a.set(o(t),s(n-.25),c(-6),_f,!0),a.set(o(t),s(n-.25),c(6)-1,_f,!0),l(t,t+.5,n+.85,n+1.1,-6,-5.75,hf),l(t,t+.5,n+.85,n+1.1,5.75,6,hf)}l(10,18,0,5,-13,-6,df),l(10,18,0,5,6,13,df),l(16.5,18,5,6.25,-7.5,-6,14081510,!0),l(16.5,18,5,6.25,6,7.5,14081510,!0),l(18,34,0,4,-13,13,df);for(let e=o(18);e<a.sx;e++)for(let t=0;t<a.sz;t++)a.set(e,s(3.75),t,e%8==0||t%8==0?df:ff);l(19.5,34,4,16.75,-13,-7,mf),l(19.5,34,4,16.75,7,13,mf);for(let e of[-1,1]){let[t,n]=e<0?[-11,-9]:[9,11];a.carve(o(19.5),s(4),c(t),o(21),s(6.5),c(n)),l(20.75,21,4,6.5,t,n,gf)}for(let e=s(9);e<s(16.75);e++){for(let t=o(19.5);t<o(33.75);t++){let n=t%2==0?15262920:10727360,r=t%2==0;a.set(t,e,c(-7)-1,n,r),a.set(t,e,c(7),n,r)}for(let t=0;t<a.sz;t++)(t<c(-7)||t>=c(7))&&a.set(o(19.5),e,t,t%2?15262920:10727360,t%2==1)}for(let e of[9,12.5])l(19.5,33.75,e,e+.25,-7,-6.75,hf),l(19.5,33.75,e,e+.25,6.75,7,hf);for(let e of[-8.6,8.6])l(18.25,18.5,4,6.25,e-.375,e+.375,_f,!0);l(21,22.25,4,5,-3,3,gf),l(21.25,22.25,4,5,-3.5,-3,gf),l(21.25,22.25,4,5,3,3.5,gf),l(20.75,21,4.5,4.75,-3,3,13210965,!0),l(23.25,24.25,4,4.5,-2.5,2.5,2502718);for(let e=o(23.25);e<o(24.25);e++)for(let t=c(-2.5);t<c(2.5);t++)for(let n=s(4.5);n<s(5.75);n++)u.chance(.42-(n-s(4.5))*.08)&&a.set(e,n,t,u.pick([2244636,3959338,2244636]));l(25.75,26.25,4,16.75,-.25,.25,12371667);for(let e=-6;e<=6;e+=1)l(27.25,28.5,4,5,e-.125,e+.125,hf),l(27.25,28.5,4.75,5,e-.125,e+.125,14081510,!0),e<6&&l(27.75,28,4.25,5,e+.25,e+.75,12371667);for(let e of[-4.5,0,4.5])l(33.5,33.75,4,6.75,e-1,e+1,5530230),l(33.25,33.5,4,6.5,e-.75,e+.75,hf),l(33.25,33.5,5.25,5.5,e+1,e+1.25,16773320,!0);l(27.5,27.75,4,5.5,6.5,6.75,hf),t.add(new W(uu(a,{matrix:cf(0,-.25,-13),lights:i,ambient:ru}),Bd));let d=(e,n,r,a,o=ru)=>{let s=e.sx*e.size,c=lf(n,r-e.sy*e.size/2,a-s/2,uf.right,uf.out);t.add(new W(uu(e,{matrix:c,lights:i,ambient:o}),Bd))};d(tf(`EAST`,.08,12371667),19.5,7.6,-10),d(tf(`WEST`,.08,12371667),19.5,7.6,10);for(let e of[-8.6,8.6])d(tf(`30`,.07,2502718),18.25,5.6,e);let f=new K(16,74,208,af),p=e=>Math.round((e+3)/af),m=e=>Math.round((e+26)/af),h=(e,t,n,r,i,a,o,c=!1)=>f.box(p(e),s(n),m(i),p(t),s(r),m(a),o,c);for(let e of[-1,1]){let[t,n]=e<0?[-13,-10]:[10,13];h(-.5,.5,0,18,t,n,df);for(let e=t+.75;e<n;e+=.75)h(-.75,-.5,0,18,e,e+.25,pf);if(e<0)continue;let[r,i]=[13,26];for(let e=p(-.5);e<p(.5);e++)for(let t=s(0);t<s(4);t++)for(let n=m(r);n<m(i);n++)f.set(e,t,n,t%2==0==(Math.floor(n/2)%2==0)?10508346:8011824);h(-.5,.5,4,18,r,i,df);for(let e=r+.5;e<i-.5;e+=1.5)for(let t=4.75;t<17;t+=3.5){let n=u.chance(.3);h(-.5,0,t,t+2.25,e,e+1,gf),f.carve(p(-.5),s(t),m(e),p(-.25),s(t+2.25),m(e+1)),h(-.25,0,t,t+2.25,e,e+1,n?14081510:1975858,n)}}h(-.5,.5,14,18,-10,10,df);for(let e=-10;e<=10;e+=3)Math.abs(e)>1.9&&h(-.125,.125,0,14,e-.125,e+.125,10727360);for(let e of[7,10.5])h(-.125,.125,e,e+.25,-10,10,10727360);h(-.125,.125,2.75,3,-10,-1.75,10727360),h(-.125,.125,2.75,3,1.75,10,10727360),h(-1.5,0,4.5,4.75,-9.75,9.75,hf);for(let e=-9;e<=9;e+=2)h(-1.25,-1,4.5,4.75,e,e+.25,_f,!0);for(let e=0;e<f.sx;e++)for(let t=0;t<f.sz;t++){let n=e*af-3+.125,r=t*af-26+.125,i=Math.hypot(n,r);i<1.7&&f.set(e,s(2.75),t,i>1&&i<1.3?_f:hf,i>1&&i<1.3)}t.add(new W(uu(f,{matrix:cf(-3,-.25,-26),lights:i,ambient:[.45,.47,.5]}),Bd));for(let e of[16.5])d(tf(`30`,.14,2502718,{bg:df,pad:1}),-.5,2.1,e,void 0);let g=new K(68,140,87,.5);g.box(0,0,0,68,140,87,8024162),g.carve(0,0,1,68,36,87);for(let e=0;e<140;e++)for(let t=2;t<68;t++){if(e<36){let n=e%8,r=t%6>=2&&t%6<5&&n>=2&&n<7&&e>2;g.set(t,e,0,r?yf(t>>3,e>>3)<.35?15911299:1514791:e%2?df:pf,r&&yf(t>>3,e>>3)<.35);continue}let n=(e-36)%7;if(t%3==0||n===0)continue;let r=yf(Math.floor((e-36)/7)+50,Math.floor(t/3))<.25;g.set(t,e,0,r?n===6?9214637:14081510:1317411,r&&n!==6)}for(let e=36;e<140;e++)for(let t=1;t<87;t++){let n=(e-36)%7;if(t%3==0){g.set(0,e,t,df);continue}if(n===0){g.set(0,e,t,pf);continue}g.clear(0,e,t);let r=yf(Math.floor((e-36)/7),Math.floor(t/3))<.28;g.set(1,e,t,r?n===6?9214637:14081510:1317411,r&&n!==6)}g.box(0,0,81,68,36,87,8024162),g.carve(0,0,1,2,36,87),t.add(new W(uu(g,{matrix:cf(0,-.25,-13.5),lights:e}),Bd));let _=new Ur({color:9214637,transparent:!0,opacity:.1,depthWrite:!1,side:2}),v=(e,n,r,i)=>{let a=new W(new Qi(n-e,i-r),_);a.position.copy(of(0,(r+i)/2,(e+n)/2)),a.rotation.y=Math.PI/2,t.add(a)};v(-10,-1.75,0,14),v(1.75,10,0,14),v(-1.75,1.75,3,14);let y=new bf(_);y.group.position.copy(of(0,0,0)),t.add(y.group);let b=new xf;b.group.position.copy(of(24,7.6,-6.98)),b.group.rotation.y=Math.PI,t.add(b.group);let x=(e,t)=>{let n=Math.abs(t);return e<.35?!1:e<10?n<12.6:e<18?n<5.55:e<19.5?n<12.6&&!(e<18.75&&n>8.1&&n<9.1):!(e>=27.1||n>6.85||e>20.6&&e<22.6&&n<3.7||e>22.8&&e<24.7&&n<3.2||e>25.5&&e<26.5&&n<.5)},S=(e,t)=>e<10?0:e<18&&Math.abs(t)<6?.25*Math.min(16,Math.floor((e-10)/.5)+1):4,C={walkable:(e,t)=>{let n=sf(e,t);return x(n.u,n.v)},floor:(e,t)=>{let n=sf(e,t);return rf+S(n.u,n.v)}},w=of(0,-1,-13),T=of(34,17,13);return{group:t,lights:n,walk:C,shelter:new Qn(w.clone().min(T),w.clone().max(T)),start:{pos:of(26.6,4,4.2),yaw:-Math.PI/2-.35},door:y,clock:b,doorTrigger:(e,t)=>{let n=sf(e,t);return n.u<2.3&&Math.abs(n.v)<1.3}}}function yf(e,t){let n=Math.imul(e*374761393+t*668265263,3266489917);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var bf=class{group=new kn;wings=new kn;constructor(e){let t=new Ur({color:3819095,opacity:0});for(let n=0;n<4;n++){let r=new kn,i=new W(new Hi(1.5,2.5,.03),e);i.position.set(.8,1.3,0);let a=new W(new Hi(.06,2.55,.06),t);a.position.set(1.56,1.3,0);let o=new W(new Hi(1.5,.06,.06),t);o.position.set(.8,1,0),r.add(i,a,o),r.rotation.y=n*Math.PI/2,this.wings.add(r)}let n=new W(new Ui(.06,.06,2.6,8),t);n.position.y=1.3,this.wings.add(n),this.wings.rotation.y=Math.PI/4;for(let t of[0,Math.PI]){let n=new W(new Ui(1.65,1.65,2.6,20,1,!0,t-.95,1.9),e);n.position.y=1.3,this.group.add(n)}this.group.add(this.wings)}},xf=class{group=new kn;hour;minute;second;constructor(){let e=.05,t=new K(24,24,1,e);for(let e=0;e<24;e++)for(let n=0;n<24;n++){let r=Math.hypot(e-12+.5,n-12+.5);if(r>12)continue;let i=Math.atan2(n-12+.5,e-12+.5),a=r>9&&r<11&&Math.abs((i/(Math.PI/6)%1+1)%1-.5)>.42;t.set(e,n,0,r>11||a?2502718:15525074)}let n=new W(uu(t,{}),Sf());n.position.set(-12*e,-12*e,0),this.group.add(n);let r=(e,t,n,r)=>{let i=new kn,a=new W(new Hi(t,e,.02),new Ur({color:n,opacity:0}));return a.position.set(0,e/2-.04,0),i.add(a),i.position.z=r,this.group.add(i),i};this.hour=r(.32,.05,1514791,.06),this.minute=r(.48,.035,1514791,.08),this.second=r(.52,.016,9382438,.1)}set(e){let t=Math.floor(e);this.second.rotation.z=-(t%60/60)*Math.PI*2,this.minute.rotation.z=-(e/60%60/60)*Math.PI*2,this.hour.rotation.z=-(e/3600%12/12)*Math.PI*2}};function Sf(){return zd(new U(.95,.95,.97))}function Cf(e,t,n,r){let i=r.matrix??new H,a=[],o={p:new B,color:0};for(let r=0;r<=t;r++)for(let s=0;s<=e;s++)n(s/e,r/t,o),a.push(o.p.clone().applyMatrix4(i));let s=new Qn().setFromPoints(a),c=r.lights?nu(r.lights,s):[],l=[],u=[],d=[],f=[],p=[],m=[],h=[],g=(t,n)=>a[n*(e+1)+t],_=[0,0,0],v=new B,y=new B,b=new B,x=new B;for(let i=0;i<t;i++)for(let a=0;a<e;a++){if(n((a+.5)/e,(i+.5)/t,o),o.color<0)continue;let s=(o.color>>16&255)/255,S=(o.color>>8&255)/255,C=(o.color&255)/255,w=[g(a,i),g(a+1,i),g(a+1,i+1),g(a,i+1)];y.subVectors(w[2],w[0]),b.subVectors(w[3],w[1]),v.crossVectors(y,b).normalize(),x.copy(w[0]).add(w[2]).multiplyScalar(.5);let T=r.facing(x).sub(x),E=v.dot(T)<0;E&&v.negate();let D=v.y>=0?.72+.28*v.y:.72+.17*v.y,O=l.length/3;for(let e of w)l.push(e.x,e.y,e.z),f.push(v.x,v.y,v.z),r.lights?tu(c,e.x+v.x*.05,e.y+v.y*.05,e.z+v.z*.05,v.x,v.y,v.z,_,r.ambient):(_[0]=1,_[1]=1,_[2]=1),u.push(s*_[0]*D,S*_[1]*D,C*_[2]*D),p.push(s,S,C),d.push(0),m.push(0);E?h.push(O,O+2,O+1,O,O+3,O+2):h.push(O,O+1,O+2,O,O+2,O+3)}let S=new jr;return S.setAttribute(`position`,new yr(l,3)),S.setAttribute(`color`,new yr(u,3)),S.setAttribute(`emissive`,new yr(d,1)),S.setAttribute(`normal`,new yr(f,3)),S.setAttribute(`albedo`,new yr(p,3)),S.setAttribute(`tag`,new yr(m,1)),S.setIndex(new vr(h,1)),S.computeBoundingSphere(),S.computeBoundingBox(),S}function wf(e,t){let n=e.length,r=[],i=Array(n).fill(0);for(let i=0;i<n-1;i++)r.push((t[i+1]-t[i])/(e[i+1]-e[i]));for(let e=1;e<n-1;e++)i[e]=r[e-1]*r[e]<=0?0:(r[e-1]+r[e])/2;i[0]=r[0],i[n-1]=0;for(let e=0;e<n-1;e++){if(r[e]===0){i[e]=0,i[e+1]=0;continue}let t=i[e]/r[e],n=i[e+1]/r[e],a=t*t+n*n;if(a>9){let o=3/Math.sqrt(a);i[e]=o*t*r[e],i[e+1]=o*n*r[e]}}let a=r=>{if(r<=e[0])return t[0];if(r>=e[n-1])return t[n-1];let a=0;for(;r>e[a+1];)a++;let o=e[a+1]-e[a],s=(r-e[a])/o,c=s*s,l=c*s;return(2*l-3*c+1)*t[a]+(l-2*c+s)*o*i[a]+(-2*l+3*c)*t[a+1]+(l-c)*o*i[a+1]};return{at:a,slope:e=>(a(e+.05)-a(e-.05))/.1}}function Tf(){return{group:new kn,lights:[],lampHeads:[],noReflect:[],shelters:[],groundPlanes:[],painters:[],walkable:[],r:Jl(30)}}var Ef=e=>new H().makeRotationY(e),Df=(e,t,n)=>new H().makeTranslation(e,t,n);function Of(e,t,n,r={},i=Bd){let a=new W(uu(t,{...r,matrix:n,lights:e.lights}),i);return e.group.add(a),a}function kf(e,t,n,r){switch(e){case`-x`:return Df(t+r,0,n).multiply(Ef(-Math.PI/2));case`+x`:return Df(t-r,0,n).multiply(Ef(Math.PI/2));case`+z`:return Df(n,0,t-r);case`-z`:return Df(n,0,t+r).multiply(Ef(Math.PI))}}var Af=()=>new Promise(e=>requestAnimationFrame(()=>e())),jf=(e,t,n,r,i,a)=>e>=Math.min(n,r)&&e<=Math.max(n,r)&&t>=Math.min(i,a)&&t<=Math.max(i,a),Mf=.25;function Nf(){let e=new K(3,28,7,Mf);return e.box(1,0,1,2,26,2,2502718),e.box(0,0,0,3,2,3,1975858),e.box(1,25,2,2,26,6,2502718),e.box(0,24,4,3,25,7,16760936,!0),e.box(0,25,4,3,26,7,1975858),e}var Pf={x:.375,y:6.1,z:1.4};function Ff(){let e=new K(5,11,5,Mf);e.box(0,0,0,5,11,5,9382438);for(let t of[0,4])for(let n=1;n<4;n++)for(let r=2;r<9;r++)e.set(n,r,t,r%2?6176034:13210965,r%2==0);for(let t of[0,4])for(let n=1;n<4;n++)for(let r=2;r<9;r++)e.set(t,r,n,r%2?6176034:13210965,r%2==0);return e.box(1,9,4,4,10,5,16773320,!0),e.box(1,9,0,4,10,1,16773320,!0),e}function If(){let e=new K(1,4,1,Mf);return e.box(0,0,0,1,4,1,1119774),e.set(0,3,0,9214637),e}function Lf(){let e=new K(8,8,18,Mf);e.box(0,1,0,8,4,18,724500),e.box(1,4,3,7,7,14,724500);for(let t=4;t<13;t++)for(let n=4;n<6;n++)e.set(0,n,t,3095114),e.set(7,n,t,3095114);for(let t=1;t<7;t++)for(let n=4;n<6;n++)e.set(t,n,14,3819095),e.set(t,n,2,3095114);e.box(1,4,13,7,5,15,724500),e.box(3,7,8,5,8,10,15768124,!0);for(let t of[3,14])for(let n of[0,7])e.box(n,0,t-1,n+1,2,t+2,329482);return e.set(1,2,17,16773320,!0),e.set(6,2,17,16773320,!0),e.set(1,2,0,12728878,!0),e.set(6,2,0,12728878,!0),e}var Rf=.5,zf=[12371667,14081510,14081510,15262920,15911299],Bf=[15911299,13210965,15911299,14081510];function Vf(e,t,n,r){let i=new K(t,n,r,Rf),a=r-1;i.box(0,0,0,t,n,a,1975858);let o=new Map;for(let r=0;r<n;r++){let n=Math.floor((r-9)/7),s=(r-9)%7;o.has(n)||o.set(n,e.next()<.25?.85:e.next()*.45);for(let c=0;c<t;c++)if(r<9)c%6==0||c===t-1?i.box(c,r,a,c+1,r+1,a+1,3819095):r===8?i.set(c,r,a,2502718):r===7?i.set(c,r,a-1,14081510,!0):i.set(c,r,a-1,r===0?3819095:c%6==3?4608870:2502718);else if(s===0)i.set(c,r,a,3095114);else if(c%4==0)i.set(c,r,a,3819095);else{let l=Math.floor(c/4);Wf(n,l,t)<(o.get(n)??0)?i.set(c,r,a-1,s===6?9214637:zf[(n+l)%zf.length],s!==6):i.set(c,r,a-1,s===6?724500:Yl(1317411,e,.15))}}return i}function Hf(e,t,n,r,i={}){let a=9+n*7+4,o=new K(t,a,r,Rf),s=r-2,c=i.stone??e.pick([6445650,5530230,4603963,7833242]);for(let n=0;n<a;n++)for(let r=0;r<t;r++)for(let t=0;t<=s;t++)o.set(r,n,t,Yl(c,e,.06));let l=i.pub?e.pick([1712672,5904926]):e.pick([1119774,2502718,3018772]);o.box(0,0,s,2,9,s+2,3025448),o.box(t-2,0,s,t,9,s+2,3025448),o.box(2,7,s+1,t-2,9,s+2,l);for(let n=4;n<t-4;n++)e.chance(.5)&&o.set(n,8,s+1,13210965,!0);let u=Math.floor(t/2),d=i.pub?13210965:e.pick([13210965,9396534,12371667]),f=i.pub?9396534:e.pick([9396534,6176034,9214637]);for(let e=2;e<t-2;e++)for(let t=0;t<7;t++){if(o.clear(e,t,s),Math.abs(e-u)<=1&&t<6){o.set(e,t,s-2,1841690),o.clear(e,t,s-1);continue}if(t===0){o.set(e,t,s,3025448);continue}let n=e%(i.pub?3:5)==0||t===4;o.set(e,t,s-1,n?3810840:t>4?d:f,!n)}for(let r=0;r<n;r++){let n=9+r*7;for(let r=0;r<t;r++)o.set(r,n,s+1,Yl(7833242,e,.05));for(let r=2;r+2<t;r+=4){let t=e.chance(.3),i=t?e.pick(Bf):724500;for(let e=n+2;e<n+6;e++)for(let a=0;a<2;a++)o.clear(r+a,e,s),o.set(r+a,e,s-1,e===n+5&&t?9396534:i,t&&e!==n+5);o.set(r,n+1,s+1,9214637),o.set(r+1,n+1,s+1,9214637)}}let p=9+n*7;return o.box(0,p,s+1,t,p+2,s+2,Yl(9214637,e,.05)),o.box(0,p+2,s,t,a,s+1,c),o}function Uf(e,t,n,r){let i=6+n*6,a=new K(t,i,r,Rf),o=r-1;a.box(0,0,0,t,i,o+1,4608870),a.carve(0,0,o-1,t,5,o+1);for(let e=0;e<t;e+=5)a.box(e,0,o-1,e+1,5,o,3819095);for(let e=1;e<t;e++)for(let t=0;t<5;t++)e%5&&a.set(e,t,o-2,1975858);for(let r=0;r<n;r++){let n=6+r*6,i=e.chance(.35);for(let e=1;e<t-1;e++)for(let s=n+2;s<n+5;s++){a.clear(e,s,o);let n=i&&Wf(r,e>>2,t)<.7;a.set(e,s,o-1,n?zf[(e>>2)%3]:1119774,n)}}return a}function Wf(e,t,n){let r=Math.imul(e*374761393+t*668265263+n*2246822519,3266489917);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function Gf(e,t,n,r,i=8){let a=new K(t,n,r,Rf),o=r-1-16,s=r-1-i;for(let r=0;r<n;r++){let i=Math.min(1,r/(n*.85)),c=r<12?s:o+Math.round(16*i**1.6),l=(r-12)%7,u=Math.floor((r-12)/7);for(let n=0;n<t;n++){for(let e=0;e<c;e++)a.set(n,r,e,1975858);let t,i=!1;if(r<12)n%8==0?t=5530230:r>9?t=2502718:(t=r>6?12371667:14081510,i=!0);else if(l===0)t=2502718;else if(n%3==0)t=3819095;else{let r=Wf(u,n>>2,20)<.22;t=r?l===6?7833242:zf[(u+n)%zf.length]:e.chance(.04)?2502718:1514791,i=r&&l!==6}a.set(n,r,c,t,i)}}for(let e=0;e<t;e++)for(let t=s+1;t<r;t++)a.set(e,11,t,e%4==2&&t%3==0?16776168:9214637,e%4==2&&t%3==0);return a}var q=.15,Kf=9.5,qf=125,Jf=-68,Yf={east:13.5,west:21},Xf={z0:-15,z1:40},Zf={[-1]:[[-30,Yf.west]],1:[[Xf.z0,Xf.z1]]},Qf=[],$f={lights(e){Qf=[];for(let e=-27,t=0;e<qf;e+=19,t++){let n=t%2?1:-1;n<0&&e>Yf.east-2&&e<Yf.west+2||Qf.push({x:n*5.6,z:e,side:n})}for(let t of Qf){let n=t.side<0?Math.PI/2:-Math.PI/2,r=new B(0,Pf.y,Pf.z).applyMatrix4(Ef(n)).add(new B(t.x,q,t.z));e.lampHeads.push(r),e.lights.push({pos:r.clone(),color:Xl,radius:15,intensity:1.35})}for(let t of[-8,6,20,34])e.lights.push({pos:new B(13.5,2.6,t),color:Ql,radius:11,intensity:.9})},build(e){let t=e.r,n=[];for(let e of[-1,1]){let r=qf;for(;r>-78;){let i=Zf[e].find(([e,t])=>r>e&&r-4<=t);if(i){r=i[0];continue}let a=Zf[e].filter(([,e])=>e<r).map(([,e])=>e).sort((e,t)=>t-e)[0]??-1/0,o=t.pick([`tower`,`stone`,`stone`,`concrete`]),s=o===`tower`?t.int(36,56):t.int(18,34);s=Math.min(s,Math.floor((r-a)/Rf)),n.push({side:e,z0:r,wv:s,kind:o,floors:t.int(3,5),hv:t.int(90,200)}),r-=s*Rf}}for(let t of n){let n=t.z0-t.wv*Rf/2,r=t.side*8.6;e.lights.push(t.kind===`tower`?{pos:new B(r,2.4,n),color:Ql,radius:9,intensity:.75}:{pos:new B(r,2,n),color:Zl,radius:7,intensity:.8})}let r=vf(e.lights);e.lights.push(...r.lights),e.group.add(r.group),e.shelters.push(r.shelter);for(let r of n){let n=r.side<0&&r.z0>Yf.west&&r.z0<95?12:22,i=r.kind===`tower`?Vf(t,r.wv,r.hv,n):r.kind===`concrete`?Uf(t,r.wv,r.floors+2,n):Hf(t,r.wv,r.floors,n),a=n*Rf,o=r.wv*Rf;Of(e,i,r.side>0?kf(`-x`,Kf,r.z0-o,a):kf(`+x`,-9.5,r.z0,a))}Of(e,Gf(t,110,160,50),kf(`-x`,Kf,Xf.z0,50*Rf));let i=(t,n,r,i,a=q)=>Of(e,t,Df(n,a,r).multiply(Ef(i)),{centre:!0}),a=Nf();for(let t of Qf){let n=t.side<0?Math.PI/2:-Math.PI/2;Of(e,a,Df(t.x,q,t.z).multiply(Ef(n)).multiply(Df(-.375,0,-.375)))}i(Ff(),8.6,52,-Math.PI/2),i(Lf(),3.9,30,0,0),i(Lf(),-3.6,-34,Math.PI,0);for(let e=Xf.z0+2;e<Xf.z1-2;e+=2.2)i(If(),5.6,e,0);e.groundPlanes.push({x0:-5,x1:5,z0:Jf,z1:qf,y:0},{x0:5.15,x1:Kf,z0:Jf,z1:qf,y:q},{x0:-9.5,x1:-5.15,z0:Jf,z1:qf,y:q},{x0:Kf,x1:14,z0:Xf.z0,z1:Xf.z1,y:q});for(let t of[-1,1]){let n=new K(1,1,Math.ceil(193/q),q);n.box(0,0,0,1,1,n.sz,5530230),Of(e,n,Df(t>0?5:-5.15,0,Jf))}return e.painters.push((e,t,n)=>{if(t>qf||t<Jf||Math.abs(e)>9.5+(e>0&&t>Xf.z0&&t<Xf.z1?4.5:0))return null;let r=Math.abs(e),i=n(e*1.7,t*1.7),a=n(e*.35+40,t*.35);return r<5?a>.64?{color:724500,wet:.97}:r<.07&&(t%9+9)%9<4?{color:9214637,wet:.35}:Math.abs(r-4.7)<.06||Math.abs(r-4.52)<.06?{color:10705439,wet:.4}:{color:i>.55?1975858:1514791,wet:.55+i*.2}:ep(r-5,t,i,a,r<5.4)}),e.walkable.push((e,t)=>t<qf&&t>Jf&&(Math.abs(e)<9.1||e>0&&e<13.6&&t>Xf.z0&&t<Xf.z1)),r}};function ep(e,t,n,r,i=!1){let a=(e%.9+.9)%.9,o=(t%.9+.9)%.9;if(i)return{color:4608870,wet:.35};if(r>.68)return{color:1119774,wet:.92};let s=a<.13||o<.13;return{color:s?1975858:n>.5?3095114:2502718,wet:s?.5:.3+n*.2}}var tp={east:{x0:-23,x1:-17,z0:Yf.west,z1:29},crossing:{x0:-25,x1:-15,z0:29,z1:39},north:{x0:-28,x1:-25,z0:31,z1:37},west:{x0:-23,x1:-17,z0:39,z1:60.5},pub:{x:-23,z0:22.6,z1:29.6}},J={x0:-36,x1:-28,z0:Yf.east,z1:100},np=.25,rp=-28.5,ip=20.5,ap=q-np,op=9.5,sp=5904926,cp=3018772,lp=15525074,up=13813422,dp=13210965,fp={lights(e){let t=(t,n,r,i,a,o)=>e.lights.push({pos:new B(t,n,r),color:i,radius:a,intensity:o});for(let n of[23.5,27.5])t(-20,6.4,n,Zl,9,1),e.lampHeads.push(new B(-20,6.4,n));t(-26.5,6.4,34,Zl,9,1),e.lampHeads.push(new B(-26.5,6.4,34));for(let e of[44,51,58])t(-20,6.4,e,Zl,9,.9);for(let[e,n]of[[0,0],[1,.6],[-1,.6]])t(-20+e,7.2,34+n,Zl,12,.9);for(let e of[23.5,26,28.5])t(-22,1.8,e,[1,.62,.3],7,1.3);for(let e of[22.5,26.5])t(-17.6,1.8,e,Zl,5,.6);for(let e of[42,48,54])t(-22.4,1.8,e,Zl,5,.6),t(-17.6,1.8,e,Zl,5,.6);t(-26.5,1.8,31.6,Zl,5,.6),t(-26.5,1.8,36.4,Zl,5,.6);for(let n of[-14,-24]){let r=new B(n,q+Pf.y,Yf.east+.6+Pf.z);e.lampHeads.push(r),t(r.x,r.y,r.z,Xl,13,1.2)}for(let n of[58,76,94]){let r=new B(J.x0+.6+Pf.z,q+Pf.y,n);e.lampHeads.push(r),t(r.x,r.y,r.z,Xl,14,1.3)}},build(e){let t=e.r,n=new K(54,72,161,np),r=e=>Math.round((e-rp)/np),i=e=>Math.round((e-ap)/np),a=e=>Math.round((e-ip)/np),o=(e,t,o,s,c,l,u,d=!1)=>n.box(r(Math.min(e,t)),i(o),a(Math.min(c,l)),r(Math.max(e,t)),i(s),a(Math.max(c,l)),u,d),s=(e,t)=>{let n=tp,r=n=>jf(e,t,n.x0,n.x1,n.z0,n.z1);if(r(n.east)||r(n.north)||r(n.west))return!0;if(!r(n.crossing))return!1;let i=(n.crossing.x0+n.crossing.x1)/2,a=(n.crossing.z0+n.crossing.z1)/2;return Math.abs(e-i)+Math.abs(t-a)<7.6},c=(e,t)=>t>Yf.west&&e>tp.north.x0;for(let e=0;e<n.sx;e++)for(let t=0;t<n.sz;t++){let r=rp+(e+.5)*np,a=ip+(t+.5)*np;if(!s(r,a)&&c(r,a))for(let r=1;r<i(10.7);r++)n.set(e,r,t,r%6==0?up:lp)}let l=0;for(let e=1;e<n.sx-1;e++)for(let t=1;t<n.sz-1;t++){let r=rp+(e+.5)*np,a=ip+(t+.5)*np;if(s(r,a)||!c(r,a))continue;let o=[[1,0],[-1,0],[0,1],[0,-1]].find(([e,t])=>s(r+e*np,a+t*np));if(!o)continue;let u=o[0]===0?r:a,d=o[0]===1&&Math.abs(r-tp.pub.x)<.3&&a>tp.pub.z0&&a<tp.pub.z1;for(let r=1;r<i(10.7);r++){let i=mp(u,ap+(r+.5)*np-q,d,pp(Math.floor(u/(d?3.6:4)),o[0]*3+o[1]));i.depth<0?(n.clear(e,r,t),n.set(e-o[0],r,t-o[1],i.color,i.em)):(n.set(e,r,t,i.color,i.em),i.depth>0&&n.set(e+o[0],r,t+o[1],i.proud??i.color,i.em))}l++}let u=(e,t)=>{let o=t?e.z0:e.x0,s=t?e.z1:e.x1,c=t?e.x0:e.z0,l=t?e.x1:e.z1;for(let e=c;e<l;e+=np)for(let l=o;l<s;l+=np){let u=(l+np/2-o)/(s-o),d=10.7+3.2*Math.sin(Math.PI*u),f=Math.abs((e-c)%2.5-1.25)>1,[p,m]=t?[e,l]:[l,e],h=r(p+np/2),g=a(m+np/2),_=i(d);f?(n.set(h,_,g,lp),n.set(h,_-1,g,sp)):n.set(h,_,g,Math.abs((l-o)%1-.5)<.13?up:2502718)}};u(tp.east,!1),u(tp.west,!1),u(tp.north,!0);for(let e=r(-25);e<r(-15);e++)for(let r=a(29);r<a(39);r++){let a=rp+(e+.5)*np,o=ip+(r+.5)*np,s=Math.abs(a- -20)+Math.abs(o-34);if(s>7.6)continue;if(s>7.1)for(let t=i(10.7);t<i(14.1);t++){let i=ap+(t+.5)*np,s=Math.atan2(o-34,a- -20),c=Math.abs((s/(Math.PI/4)%1+1)%1-.5)<.18&&Math.abs(i-12.4)<.9;n.set(e,t,r,c?15911299:t%4==0?sp:lp,c)}let c=14.1+(7.6-s)*.55,l=Math.atan2(o-34,a- -20),u=Math.abs((l/(Math.PI/4)%1+1)%1-.5)>.45,d=!u&&t.chance(.035);n.set(e,i(c),r,u?lp:d?15254650:2502718,d)}for(let e=r(-23);e<r(-17);e++)for(let t=1;t<i(13.9);t++){let r=rp+(e+.5)*np,i=ap+(t+.5)*np-q,a=Math.abs(r+20)<1.6&&i<3.2+Math.sqrt(Math.max(0,1-((r+20)/1.6)**2))*1;n.set(e,t,n.sz-1,a?329482:i>10.5?sp:lp)}for(let e=r(-23.5);e<r(-16.5);e++)for(let t=i(10.7);t<i(14.9);t++){let r=rp+(e+.5)*np,i=3.5-(ap+(t+.5)*np-q-op-1)*.75;Math.abs(r+20)>i||n.set(e,t,a(Yf.west),Math.abs(r+20)>i-.3?sp:lp)}for(let e=a(30.5);e<a(37.5);e++)for(let t=i(10.7);t<i(14.9);t++){let i=ip+(e+.5)*np,a=3.5-(ap+(t+.5)*np-q-op-1)*.75;Math.abs(i-34)>a||n.set(r(tp.north.x0),t,e,Math.abs(i-34)>a-.3?sp:lp)}let d=(e,t,s)=>{o(e-.25,e+.25,t,t+.5,s-.25,s+.25,16760936,!0),o(e-.25,e+.25,t+.5,t+.75,s-.25,s+.25,3810840);for(let o=t+.75;o<13;o+=np)n.set(r(e),i(o),a(s),3025448)};for(let e of[23.5,27.5])d(-20,6.2,e);d(-26.5,6.2,34);for(let e of[44,51,58])d(-20,6.2,e);for(let[e,t]of[[0,0],[1,.6],[-1,.6]])d(-20+e,6.9,34+t);Of(e,n,Df(rp,ap,ip));let f=tf(`LAMB TAVERN`,.075,15254650,{emissive:!0}),p=f.sx*.075;Of(e,f,Df(tp.pub.x+.26,q+3.62,(tp.pub.z0+tp.pub.z1)/2+p/2).multiply(Ef(Math.PI/2)));let m=tf(`LEADENHALL MARKET`,.09,15254650,{emissive:!0}),h=m.sx*.09;Of(e,m,Df(-20-h/2,q+op+2,Yf.west-.02).multiply(Ef(Math.PI)).multiply(Df(-h,0,0))),Of(e,m,Df(tp.north.x0-.02,q+op+2,34-h/2).multiply(Ef(-Math.PI/2)));let g=Nf();for(let t of[-14,-24])Of(e,g,Df(t,q,Yf.east+.6).multiply(Df(-.375,0,-.375)));for(let t of[58,76,94])Of(e,g,Df(J.x0+.6,q,t).multiply(Ef(Math.PI/2)).multiply(Df(-.375,0,-.375)));let _={z0:Yf.east+1.5,z1:Yf.west-1.5};e.groundPlanes.push({x0:J.x1,x1:-9.5,z0:_.z0,z1:_.z1,y:0},{x0:J.x1,x1:-9.5,z0:Yf.east,z1:_.z0,y:q},{x0:J.x1,x1:-9.5,z0:_.z1,z1:Yf.west,y:q},{x0:J.x0+1.5,x1:J.x1-1.5,z0:J.z0,z1:J.z1,y:0},{x0:J.x1-1.5,x1:J.x1,z0:J.z0,z1:J.z1,y:q},{x0:J.x0,x1:J.x0+1.5,z0:J.z0,z1:J.z1,y:q});for(let t of[tp.east,tp.crossing,tp.north,tp.west])e.groundPlanes.push({x0:t.x0,x1:t.x1,z0:t.z0,z1:t.z1,y:q});let v=(t,n,r,i)=>{let a=new K(Math.max(1,Math.round(r/q)),1,Math.max(1,Math.round(i/q)),q);a.box(0,0,0,a.sx,1,a.sz,5530230),Of(e,a,Df(t,0,n))};return v(J.x1,_.z0-q,-9.5-J.x1,q),v(J.x1,_.z1,-9.5-J.x1,q),v(J.x1-1.5,J.z0,q,J.z1-J.z0),v(J.x0+1.5-q,J.z0,q,J.z1-J.z0),e.painters.push((e,t,n)=>{let r=n(e*1.7,t*1.7),i=n(e*.35+40,t*.35);if(s(e,t)){let n=Math.min(Math.abs(t-Yf.west),Math.abs(e-tp.north.x0))<2.2?.75:.12+r*.1,i=(e*2.5%1+1)%1,a=((t*5+Math.floor(e*2.5)%2*.5)%1+1)%1,o=i<.2||a<.18;return{color:o?3025448:r>.55?6445650:4603963,wet:o?n+.1:n}}return e<-9.5&&e>J.x1&&t>Yf.east&&t<Yf.west?t>_.z0&&t<_.z1?i>.64?{color:724500,wet:.97}:Math.abs(t-_.z1+.3)<.06||Math.abs(t-_.z1+.48)<.06?{color:10705439,wet:.4}:{color:r>.55?1975858:1514791,wet:.55+r*.2}:ep(e,t,r,i):e<=J.x1&&e>=J.x0&&t>J.z0&&t<J.z1?e<J.x1-1.5&&e>J.x0+1.5?i>.64?{color:724500,wet:.97}:Math.abs(e+32)<.07&&(t%9+9)%9<4?{color:9214637,wet:.35}:{color:r>.55?1975858:1514791,wet:.55+r*.2}:ep(e,t,r,i):null}),e.walkable.push((e,t)=>s(e,t)||e<-9.5&&e>J.x1&&t>Yf.east+.4&&t<Yf.west-.4||e<=J.x1&&e>=J.x0&&t>J.z0&&t<J.z1),e.shelters.push(new Qn(new B(-28,-1,Yf.west+.2),new B(-15,18,60.5))),{open:s}}};function pp(e,t){let n=Math.imul(e*374761393+t*668265263,3266489917);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function mp(e,t,n,r){let i=n?3.6:4,a=(e%i+i)%i,o=a<.5;if(t<.5)return{color:cp,em:!1,depth:+!!o};if(o&&t<4.2)return{color:t<1?sp:Math.floor(e/.25)%2?lp:up,em:!1,depth:1};if(t<3.4){if(Math.abs((a-.5)%(n?.6:1.15)-.08)<.13||Math.abs(t-2.6)<.12||t<.75)return{color:n?cp:3810840,em:!1,depth:-1};if(n){let e=t<2.1&&Math.abs((a*1.7+r*5)%1.3-.65)<.22;return{color:e?3810840:t>2.6?15911299:13210965,em:!e,depth:-1}}let e=r<.25,i=t<1.6&&Math.abs((a*2.3+r*7)%1-.5)<.2;return{color:i?4603963:t>2.6?e?14081510:15911299:e?10727360:13210965,em:!i,depth:-1}}if(t<4.25){let e=!n&&Math.abs(t-3.8)<.13&&r<.45&&a>1&&a<i-.5;return{color:e?dp:n?cp:sp,em:e,depth:1}}if(t<4.6)return{color:lp,em:!1,depth:1};if(t<7.6){if(a>1.1&&a<i-.9&&t>5&&t<7.2){let t=Math.floor(e/i)*7%5<2;return{color:t?15911299:1514791,em:t,depth:-1}}return{color:o?sp:up,em:!1,depth:+!!o}}if(t<8)return{color:lp,em:!1,depth:1};let s=i/2+.25;return Math.hypot(a-s,t-8.75)<.42?{color:15911299,em:!0,depth:-1}:{color:Math.abs(t-8.75)<.5&&Math.abs(a-s)<1.2?sp:lp,em:!1,depth:0}}var hp={x0:-68,x1:-41,z0:14,z1:34},gp={x0:-66,x1:-36,z0:34,z1:40},_p=9214637,vp=5530230,yp=3095114,bp=9077104,xp=5919816,Sp=(e,t)=>{let n=Math.imul(e*374761393+t*668265263,3266489917);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},Cp={lights(e){for(let t of[16,22,28,33])e.lights.push({pos:new B(-37.2,.6,t),color:[.8,.88,1],radius:22,intensity:1.5});for(let t of[-44,-54,-64])e.lights.push({pos:new B(t,.8,35.5),color:Ql,radius:16,intensity:1});for(let t of[-46,-58]){let n=new B(t,.15+Pf.y,gp.z1-.6-Pf.z);e.lampHeads.push(n),e.lights.push({pos:n,color:Xl,radius:13,intensity:1.1})}for(let t of[66,78])e.lights.push({pos:new B(-27,3,t),color:Ql,radius:10,intensity:.8})},build(e){let t=e.r,n=.5,r=(hp.x1-hp.x0)/n,i=(hp.z1-hp.z0)/n,a=new K(r+16,152,i+24,n),o=hp.x0,s=hp.z0-4,c=e=>Math.round((e-o)/n),l=e=>Math.round((e-s)/n);for(let e=0;e<r;e++)for(let t=8;t<i+8;t++)for(let n=0;n<132;n++){let o=e===r-1,s=t===i+7||t===8;if(!o&&!s){a.set(e,n,t,xp);continue}let c=o?t:e,l=n%9,u=c%6==0;if(l===0){a.set(e,n,t,bp);continue}if(u){a.set(e,n,t,n%2?_p:vp);continue}if(c%6==3&&l>1){a.set(e,n,t,yp);continue}if(n<9){a.set(e,n,t,l>6?xp:14081510,l<=6);continue}let d=Sp(n>>3,c>>2)<.4;a.set(e,n,t,d?l===8?9214637:14081510:1975858,d&&l!==8)}for(let e=8;e<r-8;e++)for(let t=14;t<i+2;t++){let n=(t-14)/(i-12),r=132+Math.round(Math.sin(Math.PI*n)*8);a.set(e,r,t,e%4==0?vp:3095114)}let u=(e,n,r,i)=>{let o=c(e),s=l(n);for(let e=o-5;e<=o+5;e++)for(let t=s-5;t<=s+5;t++){let n=Math.hypot(e-o,t-s);if(n>4.1||n<3)continue;let r=Math.atan2(t-s,e-o);for(let n=0;n<i;n++){let i=n%3==0,o=!i&&Math.abs(((r/(Math.PI*2)+n/36)%1+1)%1-.5)<.04,s=n%12==6&&Math.abs(Math.sin(r*2))<.2;a.set(e,n,t,s?14081510:o?1119774:i?_p:10727360,s)}}for(let e=i;e<i+3;e++)for(let t=o-3;t<=o+3;t++)for(let n=s-3;n<=s+3;n++)Math.hypot(t-o,n-s)<=3.6-(e-i)*1.1&&a.set(t,e,n,e===i?yp:vp);let u=r?[0,1]:[1,0],d=o+u[0]*5,f=s+u[1]*5;for(let e=12;e<i-8;e+=7)for(let t=-2;t<=2;t++)for(let n=0;n<4;n++)for(let i=0;i<6;i++){let o=d+(r?t:n),s=f+(r?n:t),c=e+i,l=i===0||i===5||Math.abs(t)===2,u=!l&&t===0&&i===3&&n===3;a.set(o,c,s,u?15262920:l?vp:12371667,u)}for(let e of[-1,1]){let t=o+(r?e*7:u[0]*2),n=s+(r?u[1]*2:e*7);for(let e=0;e<i-3;e++)for(let r=-2;r<=2;r++)for(let i=-2;i<=2;i++)r*r+i*i>4||a.set(t+r,e,n+i,e%8==0?yp:r+i>0?10727360:_p);for(let o=0;o<6;o++)for(let s=-2;s<=2;s++)for(let c=-2;c<=2;c++){if(s*s+c*c>4)continue;let l=t+(r?-e*o:s),u=n+(r?s:-e*o);a.set(l,i-3+c,u,_p)}}let[p,m]=r?[o-6,s+4]:[o+4,s-6];for(let e=0;e<i;e++)a.set(p,e,m,yp);for(let e of[t.int(10,30),t.int(40,70),t.int(80,110)])for(let t=0;t<3;t++)for(let n=0;n<3;n++)for(let i=0;i<4;i++)a.set(p+(r?t-1:1+n),e+i,m+(r?1+n:t-1),i===3?yp:15262920,i<3)};u(hp.x1+1.5,19,!1,142),u(hp.x1+1.5,29,!1,146),u(-49,hp.z1+1.5,!0,144),u(-61,hp.z1+1.5,!0,138);for(let[e,t]of[[10,14],[r-20,i+2]]){for(let n=0;n<2;n++)for(let r=132;r<144;r++)a.set(e+n*6,r,t,yp);for(let n=e;n<e+18;n++)a.set(n,144,t,yp)}Of(e,a,Df(o,.15,s));{let t=new K(14,200,24,1);for(let e=0;e<200;e++){let n=Math.round(e*.065);if(n>11)break;for(let r=0;r<24;r++)for(let i=n;i<14;i++){if(i!==n&&r!==0&&r!==23){e%8==0&&t.set(i,e,r,2502718);continue}let a=(e+r)%14==0||(e-r+140)%14==0,o=!a&&Sp(e>>2,r>>2)<.18&&e>10;t.set(i,e,r,a?vp:e<8?r%4?14081510:yp:o?12371667:1514791,o||e<8&&r%4!=0)}}Of(e,t,Df(-28,.15,62))}{let t=new K(30,240,30,1);for(let e=0;e<240;e++)for(let n=0;n<30;n++)for(let r=0;r<30;r++){if(n>0&&n<29&&r>0&&r<29)continue;let i=Sp(e>>2,n+r>>1)<.2&&e%4!=0;t.set(n,e,r,i?12371667:e%4==0?3095114:1975858,i)}Of(e,t,Df(-134,.15,30))}{let t=new K(37,150,37,1);for(let e=0;e<150;e++){let n=e/150,r=n<.3?14+n/.3*3:17*Math.sqrt(Math.max(0,1-((n-.3)/.7)**1.8));if(!(r<.8))for(let n=0;n<=36;n++)for(let i=0;i<=36;i++){let a=n-18,o=i-18,s=Math.hypot(a,o);if(s>r||s<r-1.2)continue;let c=Math.atan2(o,a)/(Math.PI*2)+.5,l=((c*6+e/40)%1+1)%1<.22,u=((c*36+e/4)%1+1)%1<.14||((c*36-e/4)%1+1)%1<.14,d=!l&&!u&&Sp(e>>2,Math.floor(c*40))<.12;t.set(n,e,i,l?1119774:u?4608870:d?12371667:2502718,d)}}Of(e,t,Df(-122,.15,-30))}let d=Nf();for(let t of[-46,-58])Of(e,d,Df(t,.15,gp.z1-.6).multiply(new H().makeRotationY(Math.PI)).multiply(Df(-.375,0,-.375)));e.groundPlanes.push({x0:gp.x0,x1:gp.x1,z0:gp.z0-.5,z1:gp.z1,y:.15}),e.groundPlanes.push({x0:hp.x1,x1:J.x0,z0:hp.z0,z1:gp.z0-.5,y:.15}),e.painters.push((e,t,n)=>!jf(e,t,gp.x0,gp.x1,gp.z0-.5,gp.z1)&&!jf(e,t,hp.x1,J.x0,hp.z0,gp.z0)?null:ep(e*.7,t*.7,n(e*1.7,t*1.7),n(e*.35+40,t*.35))),e.walkable.push((e,t)=>jf(e,t,gp.x0,gp.x1,gp.z0+.6,gp.z1-.5)||jf(e,t,hp.x1-.3,J.x0,hp.z0,gp.z0))}},Y={x0:-94,x1:-36,z0:40,z1:100},wp={z0:41.5,z1:48.5,h:7.5},Tp=(wp.z0+wp.z1)/2,Ep={x0:-58.5,x1:-49.5,z0:60},Dp=(Y.z1-Y.z0)/3,Op=[1,.95,.8],kp=11050118,Ap=9077104,jp=8011824,Mp=5530230,Np=7833242,Pp={lights(e){for(let t=-42;t>Y.x0;t-=10)for(let n of[Y.z0+Dp/2,Y.z0+Dp*1.5,Y.z0+Dp*2.5])e.lights.push({pos:new B(t,10.5,n),color:Op,radius:17,intensity:.85});e.lights.push({pos:new B(Y.x1+1,3,Tp),color:Op,radius:12,intensity:1.1}),e.lights.push({pos:new B((Ep.x0+Ep.x1)/2,3.5,Ep.z0+2),color:[.85,.85,.95],radius:9,intensity:1})},build(e){e.r;let t=.5,n=Y.x0,r=Y.z0,i=(Y.x1-Y.x0)/t+2,a=(Y.z1-Y.z0)/t,o=new K(i,50,a,t),s=e=>Math.round((e-n)/t),c=e=>Math.round(e/t),l=e=>Math.round((e-r)/t),u=(e,t,n,r,i,a,u,d=!1)=>o.box(s(Math.min(e,t)),c(n),l(Math.min(i,a)),s(Math.max(e,t)),c(r),l(Math.max(i,a)),u,d),d=Y.x1;for(let e=0;e<a;e++)for(let n=0;n<c(16);n++){let i=r+(e+.5)*t,a=(n+.5)*t,c=Tp,l=(wp.z1-wp.z0)/2,u=wp.h-2+Math.sqrt(Math.max(0,1-((i-c)/l)**2))*2;if(Math.abs(i-c)<l&&a<u)continue;let f=Math.abs(i-c)<l+.8&&a<u+.8,p=n%7==0,m=(i-r)%4.5/4.5,h=a>3&&a<13&&m>.3&&m<.7&&a%5>1&&a%5<4.2,g=h&&Fp(Math.floor(i/4.5),Math.floor(a/5))<.55,_=f?13813422:h?g?15911299:1514791:p?jp:(e+n)%5==0?Ap:kp;for(let t=0;t<3;t++)o.set(s(d)-1-t,n,e,_,g)}for(let e=l(wp.z0-4);e<l(wp.z1+4);e++)for(let n=c(16);n<c(21);n++){let i=r+(e+.5)*t,a=(n+.5)*t;Math.abs(i-Tp)>8-(a-16)*1.5||o.set(s(d)-1,n,e,n%3==0?jp:kp)}for(let[e,r]of[[Y.z0,1],[Y.z1-t,-1]])for(let i=s(Y.x0);i<s(d)-1;i++)for(let a=0;a<c(13);a++){let s=n+(i+.5)*t,c=(a+.5)*t,u=c<4&&(s%8+8)%8>1,d=u?c>3?15911299:Math.floor(s/8)%3==0?14081510:13210965:c>=4&&c<5?(s%8+8)%8>1?2502718:Mp:c>9?Np:kp;o.set(i,a,l(e),d,u),r&&o.set(i,a,l(e)+(r>0?-1:1),Ap)}let f=[0,1,2].map(e=>[Y.z0+Dp*e,Y.z0+Dp*(e+1)]);for(let[e,i]of f)for(let a=s(Y.x0);a<s(d)-1;a++)for(let s=l(e);s<l(i);s++){let l=n+(a+.5)*t,u=r+(s+.5)*t,d=(u-e)/(i-e),f=13+8*Math.sin(Math.PI*d),p=(l%6+6)%6<.6;o.set(a,c(f),s,p?Np:Math.abs((u-e)%2.75-1.37)<.25?Mp:2502718),p&&o.set(a,c(f)-1,s,Mp)}for(let e of[Y.z0+Dp,Y.z0+Dp*2])for(let t=-44;t>Y.x0;t-=9)t>Ep.x0-2&&t<Ep.x1+2&&e>Ep.z0-2||(u(t-.5,t+.5,0,13,e-.5,e+.5,Mp),u(t-1,t+1,12,13.5,e-1,e+1,Np),u(t-1,t+1,0,.5,e-1,e+1,Np));for(let e=Y.z0+2;e<Y.z1-2;e+=1.2)e>Ep.z0-1&&Y.z1,u(-74,-73.5,0,1.1,e,e+.3,Np);for(let e of[Y.z0+Dp/2,Y.z0+Dp*1.5,Y.z0+Dp*2.5])u(Y.x0,-76,0,.9,e-5,e-3.5,7833242),u(Y.x0,-78,.6,4.2,e-1.5,e+1.5,14081510),u(Y.x0,-78,2.4,3.4,e-1.6,e+1.6,2502718),u(Y.x0,-78,1.4,1.8,e-1.6,e+1.6,12728878),u(-78.5,-78,1,1.4,e-1.2,e-.7,16776168,!0),u(-78.5,-78,1,1.4,e+.7,e+1.2,16776168,!0);u(Ep.x1,Ep.x1+1,0,5,Ep.z0,Y.z1,14081510),u(Ep.x0-1,Ep.x0,0,5,Ep.z0,Y.z1,14081510),u(Ep.x0-1,Ep.x1+1,4.5,5.5,Ep.z0-1,Y.z1,2502718),u(Ep.x0,Ep.x1,4.4,4.5,Ep.z0,Y.z1,16776168,!0);{let e=Ep.x1+2,t=Ep.z0-.5;u(e-.15,e+.15,0,3.4,t-.15,t+.15,5530230);for(let n=0;n<40;n++){let r=n/40*Math.PI*2;for(let n of[.85,1.05]){let i=4.4+Math.sin(r)*n,a=e+Math.cos(r)*n;o.set(s(a),c(i),l(t),6969224,!0)}}u(e-1.4,e+1.4,4.2,4.6,t-.25,t+.25,4865374,!0)}Of(e,o,Df(n,.15,r));let p=tf(`LIVERPOOL STREET`,.12,13813422,{bg:3018772,pad:2}),m=p.sx*.12;Of(e,p,Df(d+.02,.15+wp.h+1,Tp-m/2).multiply(Ef(Math.PI/2)).multiply(Df(-m,0,0)));let h=new Ip(24,3.6);h.mesh.position.set(-56,8.2,56),h.mesh.rotation.y=Math.PI/2,e.group.add(h.mesh);for(let t of[46,66])Of(e,(()=>{let e=new K(1,10,1,.2);return e.box(0,0,0,1,10,1,Mp),e})(),Df(-56,10,t-.1));let g=[];for(let t of[Math.PI/2,-Math.PI/2]){let n=new xf;n.group.position.set(-44,8.6,Tp),n.group.rotation.y=t,n.group.translateZ(.12),e.group.add(n.group),g.push(n)}return e.groundPlanes.push({x0:Y.x0,x1:d,z0:Y.z0,z1:Ep.z0,y:.15},{x0:Y.x0,x1:Ep.x0-1,z0:Ep.z0,z1:Y.z1,y:.15},{x0:Ep.x1+1,x1:d,z0:Ep.z0,z1:Y.z1,y:.15}),e.painters.push((e,t,n)=>jf(e,t,Y.x0,d,Y.z0,Y.z1)?{color:(e%1.5+1.5)%1.5<.08||(t%1.5+1.5)%1.5<.08?5919816:n(e*.6,t*.6)>.5?11050118:9077104,wet:.3}:null),e.walkable.push((e,t)=>jf(e,t,-73.5,d+.5,Y.z0+1,Y.z1-1)&&!jf(e,t,Ep.x0-1,Ep.x1+1,Ep.z0-.4,Y.z1)||jf(e,t,d-1,gp.x1,wp.z0+.5,wp.z1-.5)),e.shelters.push(new Qn(new B(Y.x0,-1,Y.z0),new B(d,22,Y.z1))),{boards:h,clocks:g}}};function Fp(e,t){let n=Math.imul(e*374761393+t*668265263,3266489917);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var Ip=class{mesh;canvas=document.createElement(`canvas`);ctx2d;tex;img;lastKey=``;rows=[[`18:04`,`Shenfield`,`12`,`On time`],[`18:07`,`Chingford`,`1`,`Delayed`],[`18:12`,`Reading`,`E`,`Expected 18:19`],[`18:15`,`Southend Victoria`,`9`,`On time`],[`18:18`,`Cambridge`,`7`,`Cancelled`],[`18:21`,`Enfield Town`,`3`,`On time`]];special=null;constructor(e,t){this.canvas.width=192,this.canvas.height=64,this.ctx2d=this.canvas.getContext(`2d`),this.img=this.ctx2d.createImageData(192,64),this.tex=new Ri(this.canvas),this.tex.magFilter=r,this.tex.minFilter=r,this.tex.generateMipmaps=!1,this.mesh=new W(new Qi(e,t),new Ur({map:this.tex,opacity:0})),this.draw(0,`normal`,0)}draw(e,t,n){let r=`${Math.floor(e)}|${t}|${+(n>.5)}|${this.special?.join()??``}`;if(r===this.lastKey)return;this.lastKey=r;let i=new Uint32Array(this.img.data.buffer);if(i.fill(4278519045),t!==`blank`){let t=4279913076,r=[`Time`,`Destination`,`Plat`,`Expected`],a=[2,34,128,146];r.forEach((e,n)=>this.text(i,e,a[n],2,t)),this.rows.forEach((r,o)=>{let s=o===1&&this.special?this.special:r;[Lp(s[0],e),...s.slice(1)].forEach((e,r)=>this.text(i,e.slice(0,r===1?15:14),a[r],12+o*9,n>.5&&(o+r)%3==0?t:4282161904))})}this.ctx2d.putImageData(this.img,0,0),this.tex.needsUpdate=!0}text(e,t,n,r,i){let a=n;for(let n of t){if(n===` `){a+=4;continue}let t=pd[n];if(!t)a+=4;else{for(let n=0;n<Math.min(7,t.rows.length);n++)for(let o=0;o<t.w;o++){if(t.rows[n][o]!==`#`)continue;let s=a+o,c=r+n;s>=0&&s<192&&c>=0&&c<64&&(e[c*192+s]=i)}a+=t.w+1}}}};function Lp(e,t){let[n,r]=e.split(`:`).map(Number),i=((n*60+r+Math.floor(t))%1440+1440)%1440;return`${String(Math.floor(i/60)).padStart(2,`0`)}:${String(i%60).padStart(2,`0`)}`}var Rp=Math.PI/6,zp={x:(Ep.x0+Ep.x1)/2,topZ:Ep.z0+.5,topY:.15,length:38},Bp=zp.length*Math.sin(Rp),Vp=zp.length*Math.cos(Rp),Hp={y:zp.topY-Bp,z0:zp.topZ+Vp,z1:zp.topZ+Vp+9},Up={x:zp.x+5.5,z0:Hp.z0+.5,z1:Hp.z0+4.5},Wp=[],Gp=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)),Kp=Math.sin(Rp),qp=Math.cos(Rp),Jp=new B(0,qp,Kp),Yp=new B(0,-Kp,qp),Xp=.4,Zp=Xp*Kp,Qp=Xp*qp,$p=[{lat:-2.4,dir:1},{lat:0,dir:1},{lat:2.4,dir:-1}],em=[[.5,.8],[1.6,1.9],[2.9,3.2]],tm=.75,nm=(e,t)=>(e%t+t)%t;function rm(e,t,n){let r=Math.abs(e);if(t>=6.2)return nm(n,6)<.6?[14081510,!1]:t<6.4&&(r<.2||Math.abs(r-3)<.2)?[16776168,!0]:[nm(n,.4)<.2?2502718:3819095,!1];if(r>=4.5){if(t>=5.4&&t<5.6)return[16776168,!0];let e=nm(n,5);return t>1.15&&t<2.65&&e>1.1&&e<3.9?[10727360,!1]:t<-.9?[12371667,!1]:[nm(t+.1,1.25)<.2||nm(n,2.5)<.2?12371667:14081510,!1]}return t>=-.6&&t<-.3?[1975858,!1]:null}function im(e,t,n,r){let i=Math.abs(e);if(t<-.3)return null;let a=n<.45||n>r-.45;for(let[e,r]of em)if(i>=e&&i<r){if(t>=1)return null;let a=e===1.6?i>=r-.1:i<e+.1;return t>=.86?[1119774,!1]:t<.1?a?[16776168,!0]:[7833242,!1]:t<.2?[7833242,!1]:[a?nm(n,1.2)<.06?10727360:14081510:12371667,!1]}if(i>=.8&&i<1.6||i>=3.2&&i<4.5){if(t<.82)return[7833242,!1];if(t<.92)return[(Math.floor(n/.3)+Math.floor(e/.3))%2?9214637:10727360,!1];if(i<1.6){let e=Math.abs(i-1.2),r=nm(n-3,6),a=Math.min(r,6-r);if(a<.06&&e<.06&&t<1.7)return[6176034,!1];if(a<.1&&e<.1&&t>=1.7&&t<1.9)return[16773320,!0];if(Math.abs(r-3)<.06&&e<.12&&t<1.25)return[t>1.05?3024952:7833242,!1]}return null}return a&&t<.05&&n>-.3&&n<r+.3?[Math.floor(e/.1)%2?9214637:12371667,!1]:null}function am(e){let t=.05,n=-.4,r=Math.round(e/t),i=new K(20,8,r,t);for(let e=0;e<20;e++)for(let a=0;a<8;a++)for(let o=0;o<r;o++){let r=(e+.5)*t-.5,s=n+(a+.5)*t,c=(o+.5)*t,l=s*qp-c*Kp,u=s*Kp+c*qp,d=-Math.ceil(u/Qp-1e-6)*Zp;if(!(l>d)){if(l>d-.06){let t=nm(u/Qp,1),n=t>.84||t<.02||Math.abs(r)>.43;i.set(e,a,o,n?15911299:e%2?3095114:3819095)}else i.set(e,a,o,e%2?1514791:2502718)}}return{g:i,V:t,H0:n}}function om(e,t,n,r){let i=e.clone().add(new B(t,0,0)).addScaledVector(Jp,n).addScaledVector(Yp,r);return new H().makeBasis(new B(1,0,0),Jp,Yp).setPosition(i)}var sm=[];function cm(e,t,n,r,i){{let a=.1,o=-4.5,s=-.3,c=-.3,l=Math.round((n+.6)/a),u=new K(90,23,l,a);for(let e=0;e<90;e++)for(let t=0;t<23;t++)for(let r=0;r<l;r++){let i=im(o+(e+.5)*a,s+(t+.5)*a,c+(r+.5)*a,n);i&&u.set(e,t,r,i[0],i[1])}e.add(new W(uu(u,{matrix:om(t,o,s,c),lights:r,ambient:i,ao:.35}),Vd))}let{g:a,V:o,H0:s}=am(n);for(let n of $p){let o=new W(uu(a,{matrix:om(t,n.lat-.5,s,0),lights:r,ambient:i,ao:.4}),Vd);e.add(o),sm.push({mesh:o,dir:n.dir,player:n.lat===0})}}function lm(e,t){for(let n of sm){let r=n.player&&t!==null?nm(t,Xp):nm(e*tm*n.dir,Xp);n.mesh.position.copy(Yp).multiplyScalar(r)}}var um={lights(e){let t=new B(0,Math.cos(Rp),Math.sin(Rp));for(let n=3;n<zp.length;n+=5){e.lights.push({pos:dm(n).addScaledVector(t,5.2),color:[.95,.96,1],radius:9,intensity:1});for(let r of[-1,1])e.lights.push({pos:dm(n).add(new B(r*2.4,0,0)).addScaledVector(t,.4),color:[1,1,1],radius:2.4,intensity:.3})}for(let n=3;n<zp.length;n+=6)for(let r of[-1,1])e.lights.push({pos:dm(n).add(new B(r*1.2,0,0)).addScaledVector(t,1.9),color:[1,.9,.74],radius:3.4,intensity:.55});for(let t of[1.5,4.5,7.5])e.lights.push({pos:new B(zp.x,Hp.y+3.2,Hp.z0+t),color:[1,.86,.66],radius:7.5,intensity:.95});e.lights.push({pos:new B(Up.x-1,Hp.y+2.6,(Up.z0+Up.z1)/2),color:[.95,.94,.92],radius:6,intensity:.8})},build(e){let t=Kp,n=qp,r=Jp,i=zp.x,a=zp.topY,o=zp.topZ,s=zp.length,c=4.6,l=e=>1.2+3.2*Math.sqrt(Math.max(0,1-(e/c)**2)),u=e=>7.6-3.9*Gp((e-17)/(s-17));{let r=.2,c=-4.9,l=-1.6,d=Math.round((s+1.6)/r),f=new K(49,41,d,r);for(let e=0;e<49;e++)for(let i=0;i<41;i++)for(let s=0;s<d;s++){let d=c+(e+.5)*r,p=l+(i+.5)*r,m=-1+(s+.5)*r,h=Math.abs(d),g=a+p*n-m*t,_=o+p*t+m*n;if(g>.1&&!(_<74&&h<4.5&&g<4.4)||_>Hp.z0-.25&&p>-.2)continue;let v=Math.hypot(d,p-2.4),y=u(m),b=h<4.8&&p<6.5;if(b&&m>17&&p>.9&&v>=y+.05||!b)continue;let x=rm(d,p,m);x&&f.set(e,i,s,x[0],x[1])}let p=om(new B(i,a,o),c,l,-1);Of(e,f,p,{ambient:[.66,.66,.66],ao:.35},Vd),cm(e.group,new B(i,a,o),s,e.lights,[.66,.66,.66]);let m=p.clone().invert(),h=new B,g=s+.4,_=Cf(Math.round((g-17)/.2),96,(e,r,i)=>{let a=17+(g-17)*e,s=u(a),d=Math.acos(Math.max(-1,Math.min(1,-1.5/s))),f=-d+2*d*r,p=s*Math.sin(f),m=2.4+s*Math.cos(f);i.p.set(p-c,m-l,a- -1);let h=o+m*t+a*n,_=Math.abs(p)>4.65||m>6.35||h>Hp.z0-.25,v=(a%2.4+2.4)%2.4<.22,y=Math.abs((f/.3%1+1)%1-.5)>.46;i.color=_?-1:v||y?12371667:15262920},{matrix:p,lights:e.lights,ambient:[.66,.66,.66],facing:e=>(h.copy(e).applyMatrix4(m),h.x=4.9,h.y=4,h.applyMatrix4(p))});e.group.add(new W(_,Vd))}{let t=.25,n=zp.x-5,r=Hp.z0-.75,a=Hp.y-.3,o=Math.round((Hp.z1-r)/t),s=new K(40,32,o,t);for(let e=0;e<40;e++)for(let u=0;u<o;u++)for(let o=0;o<32;o++){let d=n+(e+.5)*t,f=a+(o+.5)*t,p=r+(u+.5)*t,m=d-i,h=Math.abs(m),g=f-Hp.y;if(h>=4.8999999999999995)continue;let _=(e+u+o)%2==0;if(g<0){s.set(e,o,u,(Math.floor(d/.6)+Math.floor(p/.6))%2?12371667:10727360);continue}let v=m>0&&p>Up.z0&&p<Up.z1&&g<2.7,y=l(Math.min(h,c));if(p<Hp.z0-.25&&g>=y){g<7.6&&s.set(e,o,u,15262920);continue}if(g>=y+.4)continue;let b=h>=c&&g<1.2,x=p>Hp.z1-.3&&g<y+.35,S=p<Hp.z0-.25&&g<y+.35&&(m/3.75)**2+((g-2.77)/4.3)**2>1;if(m>4.1&&g<3.25&&g<y+.3&&(Math.abs(p-Up.z0)<.25||Math.abs(p-Up.z1)<.25||p>Up.z0&&p<Up.z1&&g>=2.7))s.set(e,o,u,15262920);else if(!v){if(m<-3.6&&g>.9&&g<2.5&&p>Hp.z0+2.5&&p<Hp.z0+6.5&&g>=y-.15&&g<y+.2){let t=g<1.05||g>2.35||p<Hp.z0+2.65||p>Hp.z0+6.35,n=(Math.floor(p*2)+Math.floor(g*3))%5;s.set(e,o,u,t?14081510:[4603963,6176034,9396534,5530230,3025448][n],t)}else if(b||x||S){let t;if(g<.3)t=3025448;else if(g<1.2&&(h>=c||x||S))t=(p%1.2+1.2)%1.2<.25?13813422:15262920;else{let e=(p%1.2+1.2)%1.2<.25,n=Math.abs((Math.atan2(m,(g-1.2)*1.4)/.26%1+1)%1-.5)>.42;t=e||n?13813422:_&&h>1.2?15262920:15525074}if(m<-3.6&&g>.9&&g<2.5&&p>Hp.z0+2.5&&p<Hp.z0+6.5){let t=g<1.05||g>2.35||p<Hp.z0+2.65||p>Hp.z0+6.35,n=(Math.floor(p*2)+Math.floor(g*3))%5;s.set(e,o,u,t?14081510:[4603963,6176034,9396534,5530230,3025448][n],t);continue}s.set(e,o,u,t)}else if(h<.2&&p>Hp.z0+6&&p<Hp.z0+6.4&&g<3.4){let t=g>1&&g<2.6&&h<.13;s.set(e,o,u,t?14081510:g>3?1119774:5530230,t)}}}Of(e,s,Df(n,a,r),{ambient:[.6,.59,.57],ao:.5},Vd);let u=Hp.z0-.25,d=Hp.z1-.3,f=Cf(Math.round((d-u)/.2),60,(e,t,n)=>{let r=u+(d-u)*e,a=-4.6+2*c*t,o=l(a);n.p.set(i+a,Hp.y+o,r);let s=a>4&&r>Up.z0-.25&&r<Up.z1+.25&&o<3,f=(r%1.2+1.2)%1.2<.18,p=Math.round(t*60)%6==0,m=a<-3.6&&o>.9&&o<2.5&&r>Hp.z0+2.5&&r<Hp.z0+6.5;n.color=s||m?-1:f||p?13813422:15525074},{lights:e.lights,ambient:[.6,.59,.57],facing:e=>new B(i,Hp.y+1.2,e.z)});e.group.add(new W(f,Vd))}for(let e=2.5;e<zp.length-4;e+=5)for(let t of[-1,1])Wp.push({pos:dm(e).add(new B(t*4.62,0,0)).addScaledVector(r,1.9),side:t,along:e});e.group.traverse(e=>{e.material===Vd&&(e.frustumCulled=!1)})}};function dm(e){return new B(zp.x,zp.topY-e*Math.sin(Rp),zp.topZ+e*Math.cos(Rp))}Ll.uStretchTop.value.copy(dm(0)),Ll.uStretchDir.value.copy(Yp),Ll.uStretch.value.w=zp.length-.6;var fm=Up.x+4,X=Hp.y,pm=22,Z={x0:fm-1.5,x1:fm+1.5,z0:(Up.z0+Up.z1)/2-3.5,len:pm},mm=[3.5,11,18.5],hm={x:Z.x1-.55,z:Z.z0+14.5},gm=[{name:`LIVERPOOL STREET`,d:0},{name:`FARRINGDON`,d:200},{name:`TOTTENHAM COURT ROAD`,d:400},{name:`BOND STREET`,d:600},{name:`PADDINGTON`,d:800}],_m=1010,vm=[[0,0],[140.5,0],[148.2,200],[150.6,200],[158.2,400],[160.6,400],[167.6,600],[170,600],[177,800],[179.4,800],[183.6,900],[184.5,904],[220.5,904],[221.4,909],[225,1030],[240,1420],[255,1760],[266,1960],[277,2080],[300,2290]],ym=wf(vm.map(e=>e[0]),vm.map(e=>e[1])),bm={from:1/0,until:1/0,metres:0},xm=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e));function Sm(e,t){bm.from=e,bm.until=t,bm.metres=Math.min(45,Math.max(0,t-e)*2.2)}function Cm(e){if(e<=bm.from)return 0;if(e<=bm.until){let t=(e-bm.from)/Math.max(1,bm.until-bm.from),n=.15;return bm.metres*(t<n?t*t/(2*n):t-n/2)/(1-n/2)}return bm.metres*(1-xm((Tm(e)-Tm(bm.until))/110))}function wm(e){return e<=bm.from?0:xm((e-bm.from-.6)/2.4)}function Tm(e){let t=vm[vm.length-1];return e<=t[0]?ym.at(e):t[1]+(e-t[0])*9}function Em(e){return Tm(e)+Cm(e)}function Dm(e){return(Em(e+.05)-Em(e-.05))/.1}var Om=class{carriage=new kn;outside=new kn;carMaterial=zd(new U(1,1,1));outMaterial=zd(new U(1,1,1));glass=[];get windowRain(){return this.glass[1].rain}displays=[];handles;doorLeaves=[];handleBase=[];strips=[];singles=[];holdSway=0;displayOverride=null;ads=[];seats=[];standing=[];figureSeat;constructor(){let e=km();for(let t of[-1,0,1]){let n=new W(e,this.carMaterial);n.position.set(Z.x0,X-.1,Z.z0+t*22.4),this.carriage.add(n)}let t=new K(1,21,7,.1);t.box(0,0,0,1,21,7,9214637),t.box(0,9,1,1,19,6,2502718);let n=uu(t,{});for(let e of[-1,0,1])for(let t of mm)for(let r of[-1,1]){let i=new W(n,this.carMaterial),a=Z.z0+e*22.4+t+(r<0?-.7:0);i.position.set(Z.x0-.02,X,a),this.carriage.add(i),this.doorLeaves.push({mesh:i,closedZ:a,dir:r})}let r=new Hi(.04,.22,.12);r.translate(0,-.11,0),this.handles=new fi(r,new Ur({color:7833242,opacity:0}),120);let i=0,a=new H;for(let e of[-1,0,1])for(let t of[Z.x0+.85,Z.x1-.85])for(let n=.8;n<21.5&&!(i>=120);n+=1.1)a.makeTranslation(t,X+2.05,Z.z0+e*22.4+n),this.handles.setMatrixAt(i++,a);this.handles.count=i;for(let e=0;e<i;e++){let t=new B;this.handles.getMatrixAt(e,a),t.setFromMatrixPosition(a),this.handleBase.push(t)}this.carriage.add(this.handles);for(let e of mm)for(let t of[-1,1]){let n=new Hm;n.mesh.position.set(t<0?Z.x0+.12:Z.x1-.12,X+2.2,Z.z0+e),n.mesh.rotation.y=t<0?Math.PI/2:-Math.PI/2,this.carriage.add(n.mesh),this.displays.push(n)}for(let e of[-1,1]){let t=new Um,n=e<0?Z.x0+.06:Z.x1-.06,r=[];for(let i of[-1,0,1]){let a=t.makePlane(21.4,1.1);a.position.set(n,X+1.45,Z.z0+i*22.4+pm/2),a.rotation.y=e<0?Math.PI/2:-Math.PI/2,this.carriage.add(a),r.push(a)}this.glass.push({side:e,rain:t,planes:r,x:n})}[[`MIND THE GAP`,`and the gaps between thoughts`],[`SLEEP BETTER`,`tonight. probably.`],[`FLOODLINES`,`final fear. out now`],[`WAKE UP`,`somewhere new`],[`HAVE YOU`,`switched off today?`],[`GO ON.`,`call them back.`]].forEach((e,t)=>{let n=new Vm(e),r=t%2?1:-1;n.mesh.position.set(r<0?Z.x0+.11:Z.x1-.11,X+2.16,Z.z0+5.5+Math.floor(t/2)*6.2),n.mesh.rotation.y=r<0?Math.PI/2:-Math.PI/2,this.carriage.add(n.mesh),this.ads.push(n)});for(let e of[-1,0,1]){let t=Z.z0+e*22.4;for(let[n,r]of[[Z.x0+.35,Math.PI/2],[Z.x1-.35,-Math.PI/2]])for(let i=.6;i<pm;i+=.55)mm.some(e=>Math.abs(i-e)<1.05)||e===0&&n>fm&&i>12.4&&i<17.3||this.seats.push({pos:new B(n,X,t+i),yaw:r});for(let e of mm)for(let[n,r]of[[-.95,-.5],[.95,.6],[-.95,.9]])this.standing.push({pos:new B(fm+n,X,t+e+r),yaw:Math.random()*Math.PI*2})}this.figureSeat={pos:new B(Z.x0+.35,X,Z.z0+20.6),yaw:Math.PI/2}}async buildOutside(e){let t=(e,t,n,r,i=0)=>{let a=new W(e,this.outMaterial);return a.position.set(t,n,r),a.rotation.y=i,this.outside.add(a),this.singles.push(a),a},n=(e,t)=>{let n=Bm(e,this.outMaterial,t);this.outside.add(n),this.strips.push({mesh:n,zs:t})},r=Mm(),i=uu(Nm(),{});await e();for(let n of gm){let a=Z.z0+pm/2+n.d;t(r,0,0,a);let o=uu(Pm(n.name),{}),s=Pm(n.name),c=s.sx*.07;for(let e of[-22,0,22])t(o,Am+.02,X+1.4,a+e+c/2,Math.PI/2),t(i,Am+0,X+1.4+s.sy*.035-.7,a+e-.7,0);await e()}let a=Fm(),o=[];for(let e=-60;e<_m;e+=12)gm.some(t=>Math.abs(e-t.d)<36)||o.push(Z.z0+pm/2+e);n(a,o),await e(),t(Im(),0,0,Z.z0+pm/2+_m),await e();let s=Lm(),c=[];for(let e=1040;e<1160;e+=60)c.push(Z.z0+pm/2+e);n(s,c),await e();let l=[];for(let t=0;t<3;t++)l.push(zm(t)),await e();let u=zm(3),d=[[],[],[],[]],f=0;for(let e=1160;e<6200;e+=60,f++)d[f%7==4?3:(f*5+Math.floor(f/3))%3].push(Z.z0+pm/2+e);l.forEach((e,t)=>n(e,d[t])),n(u,d[3])}update(e,t,n,r){let i=Em(e);this.outside.position.z=-i;let a=Z.z0+pm/2+i,o=new H;for(let e of this.strips){let t=0;for(let n of e.zs)Math.abs(n-a)<170&&e.mesh.setMatrixAt(t++,o.makeTranslation(0,0,n));e.mesh.count=t,e.mesh.instanceMatrix.needsUpdate=!0}for(let e of this.singles)e.visible=Math.abs(e.position.z-a)<200;let s=.05+.95*n;this.carMaterial.uniforms.uTint.value.setScalar(s),this.outMaterial.uniforms.uTint.value.setScalar(.08+.92*n);let c=r?At.clamp((140.2-e)/.8,0,1):1;for(let e of this.doorLeaves)e.mesh.position.z=e.closedZ+e.dir*c*.7;let l=(Dm(e+.2)-Dm(e-.2))/.4;this.handleSwing+=(At.clamp(-l*.05,-.5,.5)-this.handleSwing)*Math.min(1,t*3);let u=new H,d=new H().makeRotationX(this.handleSwing+this.holdSway+Math.sin(e*2.3)*.03);this.handleBase.forEach((e,t)=>{u.makeTranslation(e.x,e.y,e.z).multiply(d),this.handles.setMatrixAt(t,u)}),this.handles.instanceMatrix.needsUpdate=!0;let f=gm.find(e=>e.d>i+1),p=gm.find(e=>Math.abs(e.d-i)<1),m=p&&e>140.5?p.name:f?`Next: ${f.name}`:i>1010?`Elizabeth line to Reading`:``;for(let e of this.displays)e.show(n>.5?this.displayOverride??m:``);for(let n of this.glass)n.rain.update(e,t,Dm(e))}handleSwing=0};function km(){let e=.1,t=new K(30,27,220,e),n=9214637,r=4865374,i=6969224,a=t=>mm.some(n=>Math.abs(t*e-n)<.68);for(let e=0;e<220;e++){for(let n=0;n<30;n++)t.set(n,0,e,n>11&&n<18?3095114:2502718);for(let r of[0,29])for(let i=1;i<24;i++){let o=e%22<3,s=i>=9&&i<20&&!o;a(e)&&i<21||s||t.set(r,i,e,i<9?n:12371667)}for(let n=0;n<30;n++){let r=Math.min(n,29-n),i=r<3?23+r:26,a=n===7||n===22;t.set(n,i,e,a?16776168:14081510,a)}if(a(e))for(let n of[0,29])t.set(n,21,e,2502718),t.set(n,22,e,2502718);e%2==0&&(t.set(8,21,e,n),t.set(21,21,e,n))}for(let n=0;n<220;n++)if(!(a(n)||mm.some(t=>Math.abs(n*e-t)<1.05))){for(let a of[0,1])if(!(a===1&&n*e>12.4&&n*e<17.3)){for(let e=0;e<5;e++){let o=a===0?1+e:28-e;t.set(o,4,n,(n+e)%4==0?i:r),t.set(o,3,n,2502718)}for(let e=5;e<9;e++)t.set(a===0?1:28,e,n,e===8?i:r)}}for(let[e,n]of[[124,124],[143,147],[154,154],[168,172]]){for(let n=18;n<29;n++)for(let a=e;a<e+5;a++)t.set(n,4,a,(n+a)%4==0?i:r),t.set(n,3,a,2502718);for(let e=18;e<29;e++)for(let a=5;a<11;a++)t.set(e,a,n,a===10?i:r)}for(let e of[0,219])for(let n=0;n<30;n++)for(let r=1;r<26;r++)n>5&&n<24&&r<22||t.set(n,r,e,3095114);let o=[];for(let e=1.5;e<pm;e+=2.75)for(let t of[.75,2.25])o.push({pos:new B(t,2.4,e),color:[.95,.96,1],radius:3.6,intensity:.75});return uu(t,{lights:o,ambient:[.5,.5,.55]})}var Am=Up.x-.3,jm={z0:Up.z0-(Z.z0+pm/2),z1:Up.z1-(Z.z0+pm/2)};function Mm(){let e=.25,t=Am-.25,n=Math.round((fm+2.9-t)/e),r=new K(n,24,240,e),i=fm-1.68,a=i-Am,o=e=>1.2+3*Math.sqrt(Math.max(0,1-((i-e)/a)**2)),s=e=>[-1,0,1].some(t=>mm.some(n=>Math.abs(e-(t*22.4+n-pm/2))<.75));for(let a=0;a<n;a++)for(let n=0;n<240;n++)for(let c=0;c<24;c++){let l=t+(a+.5)*e,u=(c+.5)*e-1.2,d=(n+.5)*e-30,f=(a+c+n)%2==0,p=(d%1.5+1.5)%1.5;if(l<Am){let e=d>jm.z0&&d<jm.z1&&u<3,t=u<3.4&&d>jm.z0-.6&&d<jm.z1+.6;!e&&u>-.3&&(u<1.5||t)&&r.set(a,c,n,u<.25?3025448:p<.2?13813422:15262920)}else{if(l<i){if(u<0&&u>-.3){let e=l>i-.6&&l<i-.3;r.set(a,c,n,e?f?9077104:11050118:(Math.floor(l/.6)+Math.floor(d/.6))%2?13813422:12234908);continue}let e=d>jm.z0-.6&&d<jm.z1+.6&&l<Am+.75;if(e&&u>=3.3&&u<3.55||e&&u>=o(l)&&u<3.55&&(d<jm.z0-.35||d>jm.z1+.35)){r.set(a,c,n,15262920);continue}}if(l>=i-.15&&l<i+.35&&u>=2.7&&u<4.5)r.set(a,c,n,u<2.95?16776168:2502718,u<2.95);else if(l>=i+.35&&l<fm+2.6&&u>=4.2&&u<4.5)r.set(a,c,n,1514791);else if(l>=i&&u<-1&&u>-1.2)r.set(a,c,n,3025448);else if(l>fm+2.6&&u<4.5)r.set(a,c,n,p<.25?1975858:3095114);else if(Math.abs(l-i)<.13&&u>0&&u<2.7){if(s(d)&&u<2.4)continue;(p<.2||u>2.45||u<.25)&&r.set(a,c,n,u<.25?4603963:7833242)}}}let c=[];for(let e=-28;e<30;e+=4)c.push({pos:new B(Am+1.2,X+2.4,e),color:[.98,.96,.92],radius:4.5,intensity:.75}),c.push({pos:new B(i-.4,X+2.6,e+2),color:[1,1,1],radius:3.5,intensity:.6});return iu([uu(r,{matrix:Df(t,X-1.2,-30),lights:c,ambient:[.55,.54,.52],ao:.5}),Cf(240,14,(e,t,n)=>{let r=-30+60*e,a=Am+(i-.15-Am)*t,s=o(a);n.p.set(a,X+s,r);let c=(r%1.5+1.5)%1.5;n.color=r>jm.z0-.6&&r<jm.z1+.6&&s<3.4&&a<Am+1.2?-1:c<.18||Math.round(t*14)%3==0&&t*14%1<.5?13813422:15525074},{lights:c,ambient:[.58,.57,.55],facing:e=>new B(i,X+1.2,e.z)})],!1)}function Nm(){let e=new K(1,20,20,.07);for(let t=0;t<20;t++)for(let n=0;n<20;n++){let r=Math.hypot(t-10+.5,n-10+.5);r>7.4&&r<10&&e.set(0,t,n,6969224)}return e}function Pm(e){return tf(e,.07,16776168,{bg:4865374,pad:2,emissive:!0,bgEmissive:!1})}function Fm(){let e=.25,t=3.3,n=new K(30,24,48,e);for(let r=0;r<30;r++)for(let i=0;i<24;i++)for(let a=0;a<48;a++){let o=(r+.5)*e-3.8,s=(i+.5)*e-1.6,c=(a+.5)*e,l=Math.hypot(o,s-1);if(l>t&&l<3.65){let e=c%1.5<.25,t=a===20&&Math.abs(o+2.6)<.3&&Math.abs(s-1.4)<.3;n.set(r,i,a,t?15262920:e?1975858:3095114,t)}else l<=t&&(s<-1.2&&s>-1.6&&n.set(r,i,a,1841690),o<-2.4&&s>-.3&&s<0&&Math.abs(o+2.7)<.5&&n.set(r,i,a,4603963),o>2.6&&Math.abs(s-.9)<.12&&a%2==0&&n.set(r,i,a,1119774))}let r=[{pos:new B(fm-2.4,X+1.4,5.1),color:[.85,.85,.8],radius:6,intensity:.7}];return uu(n,{matrix:Df(fm-3.8,X-1.6,-6),lights:r.map(e=>({...e,pos:e.pos.clone().setZ(e.pos.z-6)}))})}function Im(){let e=.5,t=new K(60,30,4,e);for(let n=0;n<60;n++)for(let r=0;r<30;r++)for(let i=0;i<4;i++){let a=(n+.5)*e-15,o=(r+.5)*e-2;Math.hypot(a,o-1)<3.6&&o>-1.5||t.set(n,r,i,(n+r)%7==0?5919816:8024162)}return uu(t,{matrix:Df(fm-15,X-2,-1),lights:[]})}function Lm(){let e=.5,t=new K(44,20,120,e);for(let n=0;n<44;n++)for(let r=0;r<120;r++){let i=(n+.5)*e-11;if(t.set(n,0,r,Math.abs(i)<2?4603963:2766642),Math.abs(i)>6){let e=Math.min(19,Math.round(4+(Math.abs(i)-6)*1.6));for(let a=1;a<e;a++)t.set(n,a,r,Math.abs(i)<7.5?a%3==0?5919816:8024162:a>e-3?2244636:2766642)}}return Rm(t,26.7,1,30),Rm(t,26.7,1,90),uu(t,{matrix:Df(fm-11,X-1.6,-30),lights:[]})}function Rm(e,t,n,r){for(let i=n;i<n+14;i++)e.set(Math.round(t),i,r,5530230);for(let i=0;i<7;i++)e.set(Math.round(t)-i,n+13,r,5530230)}function zm(e){let t=.5,n=new K(160,26,120,t),r=Jl(900+e),i=[],a=e=>(e+.5)*t-40,o=e===3?60:-999;for(let e=0;e<120;e++){let t=Math.abs(e-o)<8;for(let r=0;r<160;r++){let i=a(r),s=Math.abs(i);if(t)n.set(r,0,e,Math.abs(e-o)<1&&s>3?14081510:1975858);else if(n.set(r,0,e,s<2.2?4603963:s<4?2766642:2244636),Math.abs(s-4.5)<.3)for(let t=1;t<4;t++)n.set(r,t,e,3025448)}}for(let a of[-1,1]){let s=a*(16+e*1.5);for(let c=0;c<120;c+=10){if(Math.abs(c+5-o)<12)continue;let l=c,u=e=>Math.round((e+40)/t-.5),d=r.chance(.3)?3:2,f=s,p=s+a*9;for(let r=l;r<l+10;r++)for(let i=Math.min(u(f),u(p));i<=Math.max(u(f),u(p));i++){let o=d*6;for(let s=1;s<o+4;s++){let c=o+Math.round((1-Math.abs((i-(u(f)+u(p))/2)/(9/t/2)))*4);if(s>c)continue;let d=i===u(f);if(s>=o)n.set(i,s,r,2502718);else if(d){let t=(r-l)%10>=3&&(r-l)%10<7&&s%6>=2&&s%6<5,o=Math.abs(Math.sin((l*13.1+Math.floor(s/6)*7.7+a*3.3+e)*12.9898))%1,c=t&&o<.34;n.set(i,s,r,t?c?o<.27?15911299:14081510:1119774:(s+r)%9==0?3810840:6176034,c)}else n.set(i,s,r,4603963)}}for(let e=l;e<l+10;e++)for(let t=1;t<4;t++)n.set(u(s-a*8),t,e,3810840);if(r.chance(.5)){let e=u(s-a*4);n.box(Math.min(e,e+a*4),1,l+2,Math.max(e,e+a*4)+1,5,l+7,3025448)}i.push({pos:new B(fm+s-a*1.2,X+1.6,(l+5)*t-30),color:Zl,radius:7,intensity:.6})}for(let e=10;e<120;e+=40){let r=Math.round((s+a*13+40)/t);for(let t=1;t<12;t++)n.set(r,t,e,2502718);n.set(r,12,e,16760936,!0),i.push({pos:new B(fm+s+a*13,X+5.5,e*t-30),color:Xl,radius:14,intensity:1.1})}}if(e===3)for(let e of[-1,1]){let r=Math.round((e*3.5+40)/t);for(let e=1;e<6;e++)n.set(r,e,o-9,14081510);n.set(r,5,o-9,12728878,!0),i.push({pos:new B(fm+e*3.5,X+2.5,-4.5),color:[1,.2,.15],radius:6,intensity:1})}for(let e of[10,70])Rm(n,42.6/t,1,e);return uu(n,{matrix:Df(fm-40,X-1.6,-30),lights:i.map(e=>({...e,pos:e.pos.clone()})),ambient:[.16,.18,.24]})}function Bm(e,t,n){let r=new fi(e,t,Math.max(1,n.length));return n.forEach((e,t)=>r.setMatrixAt(t,new H().makeTranslation(0,0,e))),r.count=n.length,r.frustumCulled=!1,r}var Vm=class{lines;mesh;canvas=document.createElement(`canvas`);tex;lastK=-1;constructor(e){this.lines=e,this.canvas.width=112,this.canvas.height=24,this.tex=new Ri(this.canvas),this.tex.magFilter=r,this.tex.minFilter=r,this.tex.generateMipmaps=!1,this.mesh=new W(new Qi(1.4,.3),new Ur({map:this.tex,opacity:0})),this.blank(0)}blank(e){let t=Math.round(e*8)/8;if(t===this.lastK)return;this.lastK=t;let n=this.canvas.getContext(`2d`),r=n.createImageData(112,24),i=new Uint32Array(r.data.buffer);i.fill(4292003502);let a=(e,t)=>{let n=4;for(let r of e){if(r===` `){n+=4;continue}let e=pd[r];if(!e)n+=4;else{for(let r=0;r<7;r++)for(let a=0;a<e.w;a++)e.rows[r]?.[a]===`#`&&n+a<112&&(i[(t+r)*112+n+a]=4282002986);n+=e.w+1}}};a(this.lines[0],3),a(this.lines[1],13);for(let e=0;e<i.length;e++)(e*2654435761>>>24)/256<t&&(i[e]=4293849330);n.putImageData(r,0,0),this.tex.needsUpdate=!0}},Hm=class{mesh;canvas=document.createElement(`canvas`);tex;last=`\0`;scroll=0;constructor(){this.canvas.width=96,this.canvas.height=10,this.tex=new Ri(this.canvas),this.tex.magFilter=r,this.tex.minFilter=r,this.tex.generateMipmaps=!1,this.mesh=new W(new Qi(.96,.1),new Ur({map:this.tex,opacity:0}))}show(e){if(e===this.last)return;this.last=e;let t=this.canvas.getContext(`2d`),n=t.createImageData(96,10),r=new Uint32Array(n.data.buffer);r.fill(4278519045);let i=2-this.scroll;for(let t of e){if(t===` `){i+=4;continue}let e=pd[t];if(!e)i+=4;else{for(let t=0;t<7;t++)for(let n=0;n<e.w;n++){if(e.rows[t]?.[n]!==`#`)continue;let a=i+n,o=1+t;a>=0&&a<96&&(r[o*96+a]=4280974048)}i+=e.w+1}}t.putImageData(n,0,0),this.tex.needsUpdate=!0}},Um=class{uniforms={uTime:{value:0},uRain:{value:0},uFlow:{value:0},uRefl:{value:null},uMirrorVP:{value:new H},uReflK:{value:0},uPix:{value:1.5},uRes:{value:new jt(320,180)},uNote:{value:null},uNoteRect:{value:new Xt(0,0,0,0)},uNoteK:{value:0}};material;flow=0;constructor(){this.material=new ca({uniforms:this.uniforms,vertexShader:`
        varying vec2 vP; varying vec3 vWorld;
        void main() {
          vP = position.xy;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`,fragmentShader:`
        uniform float uTime; uniform float uRain; uniform float uFlow;
        uniform sampler2D uRefl; uniform mat4 uMirrorVP; uniform float uReflK; uniform float uPix; uniform vec2 uRes;
        uniform sampler2D uNote; uniform vec4 uNoteRect; uniform float uNoteK;
        varying vec2 vP; varying vec3 vWorld;
        float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main() {
          // beads: a sparse grid of drops sitting on the glass
          vec2 cell = floor(vP / 0.018);
          float bead = step(1.0 - 0.1 * uRain, h(cell)) * step(length(fract(vP / 0.018) - 0.5), 0.3);
          // streaks: drops dragged sideways along the glass by the train's speed
          float lane = floor(vP.y / 0.035);
          float x = vP.x + uFlow * (0.6 + h(vec2(lane, 3.0)));
          float seg = fract(x / (0.9 + h(vec2(lane, 9.0))));
          float streak = step(1.0 - 0.18 * uRain, h(vec2(lane, floor(x / 0.9)))) * smoothstep(0.0, 0.4, seg) * step(seg, 0.6);
          vec3 col = vec3(0.62, 0.68, 0.75) * max(bead * 0.28, streak * 0.3);
          // the carriage reflected in the dark glass (pixel-blurred; it sharpens for the reveal)
          if (uReflK > 0.001) {
            vec4 clip = uMirrorVP * vec4(vWorld, 1.0);
            vec2 uv = clip.xy / clip.w * 0.5 + 0.5;
            vec2 px = uRes / uPix;
            uv = (floor(uv * px) + 0.5) / px;
            col += texture2D(uRefl, uv).rgb * uReflK;
          }
          // something written in the condensation, a while ago
          if (uNoteK > 0.001) {
            vec2 nu = (vP - uNoteRect.xy) / uNoteRect.zw;
            if (nu.x > 0.0 && nu.x < 1.0 && nu.y > 0.0 && nu.y < 1.0) {
              float fogged = 0.07 + 0.03 * h(floor(vP / 0.01));
              float letters = texture2D(uNote, nu).r;
              col += vec3(0.75, 0.8, 0.85) * uNoteK * (fogged * (1.0 - letters) + letters * 0.02 * (1.0 - streak));
            }
          }
          gl_FragColor = vec4(col, 0.0);
        }`,transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:201,blendSrcAlpha:200,blendDstAlpha:201})}makePlane(e,t){return new W(new Qi(e,t),this.material)}update(e,t,n){this.uniforms.uTime.value=e,this.flow+=n*t*.08,this.uniforms.uFlow.value=this.flow}},Wm=class{target=new Qt(320,180,{minFilter:r,magFilter:r});cam=new Ra;render(e,t,n,r,i,a,o){let s=this.cam;s.copy(n);let c=new B;n.getWorldDirection(c),s.position.set(2*r-n.position.x,n.position.y,n.position.z),s.up.set(0,1,0),s.lookAt(s.position.x-c.x,s.position.y+c.y,s.position.z+c.z),s.layers.enable(o),s.updateMatrixWorld(),i.uniforms.uMirrorVP.value.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i.uniforms.uRefl.value=this.target.texture;let l=a.map(e=>e.visible);a.forEach(e=>e.visible=!1),e.setRenderTarget(this.target),e.render(t,s),e.setRenderTarget(null),a.forEach((e,t)=>e.visible=l[t])}},Gm=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)),Km=class{route;lobby;train;thoughts;figure=new ef({hood:!0});reflection=new ef({hood:!0});lobbySeenAt=-1;gaze=0;lastThought=-99;v=new B;walkPhase=0;constructor(e,t,n,r){this.route=e,this.lobby=t,this.train=n,this.thoughts=r,this.reflection.group.traverse(e=>e.layers.set(2))}get objects(){return[this.figure.group,this.reflection.group]}update(e){let t=this.figure,n=t.group;n.visible=!1,t.sit(0),t.look(0),t.setHood(!0);let r=t=>e.resolve(t),i=e.t;if(e.state===`lobby`){let r=of(0,1.2,0).clone().sub(e.cam.position),i=new B(0,0,-1).applyQuaternion(e.cam.quaternion);this.lobbySeenAt<0&&r.length()<34&&i.angleTo(r)<.32&&(this.lobbySeenAt=e.lobbyTime);let a=this.lobbySeenAt<0?-1:(e.lobbyTime-this.lobbySeenAt)/3.4;if(a>=0&&a<=1){let r=of(4.2,0,.6),i=of(-2.2,0,-.9);n.position.lerpVectors(r,i,a),n.rotation.y=Math.atan2(i.x-r.x,i.z-r.z),this.walkPhase+=e.dt*4.3,t.pose(this.walkPhase,1),n.visible=!0,this.lobby.door.wings.rotation.y=Math.PI/4-Gm((a-.35)/.4)*(Math.PI/2)}}else if(e.state===`door`||e.state===`song`||e.state===`preview`||e.state===`ended`){if(this.walkPhase+=e.dt*4.3,i>5.5&&i<r(`verse1.3`)&&e.cam.position.x>-10.5)n.position.set(7.4,.15,7+(i-5.5)*1.3),n.rotation.y=0,t.pose(this.walkPhase,1),n.visible=n.position.z<38;else if(i>=r(`pre1`)&&i<r(`chorus1`))n.position.set(-20.4,.15,41.2),n.rotation.y=.15,n.visible=!0;else if(i>=r(`chorus1`)&&i<r(`post1+1.5`))n.position.set(-40.4,.15,25.6),n.rotation.y=-1.1,t.look(.65),n.visible=!0;else if(i>=r(`hook1`)-1&&i<106){let e=Math.max(.3,(i-r(`hook1`)+1)*.55);n.position.copy(dm(e)),n.rotation.y=0,n.visible=e<14}else if(e.aboard&&i>=r(`pre2`)-3&&i<r(`hook2`)){let e=this.train.figureSeat;n.position.copy(e.pos),n.rotation.y=e.yaw,t.sit(1),n.visible=!0}}if(n.visible&&t.lightFrom(e.lights),n.visible){let t=this.v.copy(n.position).setY(n.position.y+2),r=t.clone().project(e.cam),i=r.z<1&&Math.hypot(r.x*160,r.y*90)<18;this.gaze=i?this.gaze+e.dt:Math.max(0,this.gaze-e.dt),this.gaze>.6&&e.thoughtClock-this.lastThought>14&&(this.thoughts.echo(t,e.thoughtClock,e.section),this.lastThought=e.thoughtClock,this.gaze=0)}let a=this.reflection,o=a.group;if(o.visible=e.aboard,e.aboard){let t=e.progress>this.route.at(`seat`)-.8;o.position.set(e.cam.position.x,e.cam.position.y-(t?1.62-.47:1.62),e.cam.position.z),o.rotation.y=e.cam.rotation.y+Math.PI,a.sit(+!!t),t&&(o.position.set(hm.x,e.cam.position.y-1.15,hm.z),o.rotation.y=Math.PI/2),a.lowerHood(Gm((i-r(`outro+2.5`))/3.5)),a.lightFrom(e.lights);let n=t?1.25:.85;a.material.uniforms.uTint.value.setRGB(.95*n,.97*n,1*n)}}},qm=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)),Jm=class{train;passengers;breath;puffs=[];nextPuff=0;flick=0;flickText=``;zone=0;zoneAge=0;zoneLen=1;blink=0;constructor(e,t){this.train=e,this.passengers=t;let n=new jr;n.setAttribute(`position`,new yr(new Float32Array(180),3)),this.breath=new Fi(n,new Ai({color:12371667,size:2,sizeAttenuation:!1,transparent:!0,opacity:.5})),this.breath.frustumCulled=!1;for(let e=0;e<60;e++)this.puffs.push({p:new B(0,-999,0),v:new B,age:99})}update(e,t,n,r,i,a){let o=t=>e.resolve(t),s=(e,n)=>t>=e&&t<n,c=a?qm((t-o(`pre2.1`))/6)*(1-qm((t-o(`hook2`))/1.5)):0;this.passengers.material.uniforms.uFaceless.value=Math.min(1,c*1.15);for(let e of this.train.ads)e.blank(c);i.uniforms.uDesat.value=Math.max(i.uniforms.uDesat.value,c*.45),i.uniforms.uErode.value=a?qm((t-o(`pre2.2`))/5)*.32*(1-qm((t-o(`pre2b`))/4)):0;let l=o(`pre2b.2`)+1.7,u=o(`pre2b.3`)+.4,d=a&&s(l,u);this.zone=d?Math.min(1,(t-l)/1.2):0,this.zoneAge=t-l,this.zoneLen=u-l;let f=e=>Math.max(0,1-Math.abs(t-e)/.22);if(this.blink=a?Math.max(f(l),f(u)):0,d)this.train.displayOverride=`Fenchurch Street`;else if(a&&s(o(`pre2.2`),o(`pre2b`))){if(this.flick-=n,this.flick<=0){let e=gm.filter(e=>e.d<=Em(t)+1).map(e=>e.name);this.flickText=Math.random()<.5?e[Math.floor(Math.random()*e.length)]:``,this.flick=.15+Math.random()*.5}this.train.displayOverride=this.flickText}else this.train.displayOverride=null;let p=a&&t<l?qm((t-o(`pre2b.2`))/.6)*(1+(t-o(`pre2b.2`))*.5):0;if(i.uniforms.uShiver.value=p*1.6,i.uniforms.uCold.value=Math.max(i.uniforms.uCold.value,p*.85),this.nextPuff-=n,p>.3&&this.nextPuff<=0){this.nextPuff=1.7;let e=new B(0,0,-1).applyQuaternion(r.quaternion);for(let t=0;t<14;t++){let t=this.puffs.find(e=>e.age>2.2);if(!t)break;t.p.copy(r.position).addScaledVector(e,.28).add(new B(0,-.12,0)),t.v.copy(e).multiplyScalar(.25+Math.random()*.2).add(new B((Math.random()-.5)*.12,.08+Math.random()*.08,(Math.random()-.5)*.12)),t.age=0}}let m=this.breath.geometry.getAttribute(`position`);this.puffs.forEach((e,t)=>{e.age+=n,e.p.addScaledVector(e.v,n),e.v.multiplyScalar(1-n*.8),m.setXYZ(t,e.p.x,e.age<2.2?e.p.y:-999,e.p.z)}),m.needsUpdate=!0,this.breath.material.opacity=.45;let h=a&&t>=u?1-qm((t-o(`hook2`)-.5)/3):0;for(let e of this.passengers.agents){let i=0;if(h>0){let t=Math.atan2(r.position.x-e.pos.x,r.position.z-e.pos.z);i=Math.max(-1.6,Math.min(1.6,Math.atan2(Math.sin(t-e.yaw),Math.cos(t-e.yaw))))}e.turn+=(i*h-e.turn)*(t>=u&&t<u+.3?1:Math.min(1,n*9))}let g=e.linesAt(t,0)[0],_=g&&/hold/i.test(g.text)?Math.sin((t-g.start)*2.2)*.35*qm((t-g.start)/.6):0;this.train.holdSway+=(_-this.train.holdSway)*Math.min(1,n*3)}},Ym=`pre2b`,Xm=`pre2b.2`,Zm=`hook2`,Qm=`I just want to run away`,$m=`no, I need to hold on`,eh=2.4,th=3.8,nh=5.6,rh=1.5,ih=3.3,ah=1.5,oh=2.4,sh=6.6,ch=[-58,-19,19,58],lh=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)),uh=`varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,dh=`
varying vec2 vP;
uniform float uOpen;
float doorR(vec2 p) { vec2 c = abs(p) / vec2(${ah/2}, ${oh/2}); return pow(pow(c.x, 6.0) + pow(c.y, 6.0), 1.0 / 6.0); }`,fh=`${dh}
uniform float uTime;
uniform float uBright;
void main() {
  float r = doorR(vP);
  float flick = 0.05 * sin(uTime * 7.0 + vP.y * 9.0) + 0.035 * sin(uTime * 11.0 + vP.x * 13.0);
  float rim = uOpen + 0.05 + flick * 0.45;
  if (uOpen < 0.01 || r < uOpen || r > rim) discard;
  float k = 1.0 - (r - uOpen) / (rim - uOpen);
  gl_FragColor = vec4(mix(vec3(0.16, 0.38, 0.95), vec3(0.75, 0.88, 1.0), k * k) * uBright, 1.0);
}`,ph=`${dh}
void main() { if (doorR(vP) > uOpen) discard; gl_FragColor = vec4(0.0); }`,mh=class{group=new kn;shardMat;doors=[];started=!1;core=new B;facing=0;pos=new B;vel=new B;pull=null;idle=0;moved=0;step=0;said=[];tB=1/0;tShut=1/0;voidOn=!1;eye=new B;heading=0;black=0;mirrorK=0;flameAt=new B;constructor(e){this.group.visible=!1,this.shardMat=zd(new U(1,1,1),{shatter:!0}),this.shardMat.uniforms.uTint=e.carMaterial.uniforms.uTint;let t=e.carriage.children.filter(t=>t.isMesh&&t.geometry===e.carriage.children[0].geometry),n=hh(t[0].geometry);for(let e of t){let t=new W(n,this.shardMat);t.position.copy(e.position),t.frustumCulled=!1,this.group.add(t)}[yh(),_h(),vh(),bh()].forEach((e,t)=>{let n=t+1,r=new kn,i=new Qi(2,2.9),a=new W(i,new ca({vertexShader:uh,fragmentShader:fh,side:2,uniforms:{uOpen:{value:0},uTime:{value:0},uBright:{value:1}}})),o=new W(i,new ca({vertexShader:uh,fragmentShader:ph,uniforms:{uOpen:{value:0}},colorWrite:!1,depthWrite:!1,stencilWrite:!0,stencilRef:n,stencilFunc:519,stencilZPass:Ue}));o.renderOrder=-2,a.position.y=o.position.y=oh/2,r.add(a,o);for(let t of e)t.traverse(e=>{let t=e;if(!t.isMesh)return;t.renderOrder=-1;let r=t.material;r.stencilWrite=!0,r.stencilRef=n,r.stencilFunc=514,r.stencilFail=r.stencilZFail=r.stencilZPass=He}),r.add(t);this.group.add(r),this.doors.push({group:r,rim:a,mask:o,open:0,closedAt:-1,flare:0})})}update(e,t,n,r,i,a,o,s=!0){let c=e.resolve(Ym),l=e.resolve(Xm),u=e.resolve(Zm);this.tB=c,this.tShut=l;let d=c+.08;if(this.mirrorK=t>=u?lh((t-u)/1.2)*(1-lh((t-u-7)/4)):0,this.black=t>=d&&t<u?lh((t-(u-3))/1.8):t>=u?1-lh((t-u)/1.6):0,this.voidOn=t>=d&&t<u,this.group.visible=this.voidOn,t<d){this.reset();return}if(!this.voidOn)return;this.started||this.begin(r,o);let f=t-d,p=f<.35?f/.35*.03:.03+.97*(1-(1-Math.min(1,(f-.35)/5.5))**3),m=lh((t-(l+3.2))/Math.max(1,u-3.4-l-3.2));this.shardMat.uniforms.uBreak.value=p*(1-m),this.shardMat.uniforms.uAge.value=f;let h=new B(0,0,-1).applyQuaternion(r.quaternion).setY(0).normalize(),g=new B(-h.z,0,h.x),_=s&&t>=c+2.6&&t<l+.6&&!this.pull,v=new B;if(_){let e=Math.hypot(i.x,i.y)>.1;this.idle=e?0:this.idle+n,e&&(this.moved+=n),v.addScaledVector(h,i.y).addScaledVector(g,i.x).multiplyScalar(a?ih:rh);let t=!e&&this.idle>2.5?this.lured(h):null;t&&v.copy(t.group.position).sub(this.pos).setY(0).normalize().multiplyScalar(Math.min(.9,(this.idle-2.5)*.35));for(let e of this.doors){if(e.open<.5||e.closedAt>=0)continue;let t=e.group.position.clone().sub(this.pos).setY(0),n=t.length();n<th&&v.addScaledVector(t.normalize(),(1-n/th)*1.8)}}this.vel.lerp(v,Math.min(1,n*6)),this.pos.addScaledVector(this.vel,n);let y=new B().subVectors(this.pos,this.core).setY(0);if(y.length()>nh&&this.pos.copy(this.core).addScaledVector(y.setLength(nh),1),this.pos.y=this.core.y,_){for(let e of this.doors)if(!(e.open<.5||e.closedAt>=0)&&!(Math.hypot(this.pos.x-e.group.position.x,this.pos.z-e.group.position.z)>eh)){e.closedAt=t,e.flare=1,this.pull={from:this.pos.clone(),at:t},this.said.push({text:$m,at:t}),this.vel.set(0,0,0);break}}if(this.pull){let e=Math.min(1,(t-this.pull.at)/1.5),n=this.core.clone().addScaledVector(this.pull.from.clone().sub(this.core).setY(0),.2);this.pos.lerpVectors(this.pull.from,n,1-(1-e)**3),e>=1&&(this.pull=null)}else t>=l+.6&&this.pos.lerp(this.core,Math.min(1,n*.9));let b=this.vel.length();this.step+=n*b*4.2,this.eye.copy(this.pos),this.eye.y+=(Math.abs(Math.sin(this.step))*.04-.02)*Math.min(1,b),this.doors.forEach((e,r)=>{let i=+(t>=c+3+r*.55&&t<l+r*.35&&e.closedAt<0);e.open+=(i-e.open)*Math.min(1,n*(i>e.open?1.3:5)),e.flare=Math.max(0,e.flare-n*1.2);let a=1-Math.min(1,Math.hypot(this.pos.x-e.group.position.x,this.pos.z-e.group.position.z)/sh);e.rim.material.uniforms.uOpen.value=e.mask.material.uniforms.uOpen.value=e.open,e.rim.material.uniforms.uTime.value=t,e.rim.material.uniforms.uBright.value=.85+.5*a+.8*e.flare,e.group.visible=e.open>.005})}begin(e,t){this.started=!0,this.core.copy(e.position),this.pos.copy(e.position),this.eye.copy(e.position),this.heading=t;let n=new B(0,0,-1).applyQuaternion(e.quaternion);this.facing=Math.atan2(-n.x,-n.z),this.shardMat.uniforms.uCore.value.copy(this.core),this.shardMat.uniforms.uFloorY.value=X,this.doors.forEach((e,t)=>{let n=this.facing+ch[t]*Math.PI/180;e.group.position.set(this.core.x-Math.sin(n)*sh,X,this.core.z-Math.cos(n)*sh),e.group.rotation.y=n}),this.flameAt.set(this.core.x-Math.sin(this.facing)*3,this.core.y-.35,this.core.z-Math.cos(this.facing)*3)}reset(){this.started=!1,this.pull=null,this.idle=this.moved=0,this.said=[],this.vel.set(0,0,0);for(let e of this.doors)e.open=0,e.closedAt=-1,e.flare=0;this.shardMat.uniforms.uBreak.value=0}lured(e){let t=null,n=1/0;for(let r of this.doors){if(r.open<.5||r.closedAt>=0)continue;let i=r.group.position.clone().sub(this.pos).setY(0).normalize(),a=e.angleTo(i);a<n&&(n=a,t=r)}return t}draw(e,t,n){let r=this.tB,i=(t,n,r,i,a)=>{if(n<0||n>r)return;let o=Math.min(1,n/.6)*Math.min(1,(r-n)/1.2),s=gd(t)*2<e.w-16?2:1;e.text(t,Math.round((e.w-gd(t)*s)/2),Math.round(i),a,o,{scale:s})},a=this.said[this.said.length-1];if(a||i(Qm,t-(r+3.6),5,e.h*.28,ud[4]),a&&i(a.text,t-a.at,3.6,e.h*.28,ud[4]),this.voidOn&&this.moved<.5&&t>r+7&&t<this.tShut-2){let i=n?`left thumb to move`:`WASD to move. shift to run`,a=lh((t-r-7)/1.5)*(1-lh((t-this.tShut+3)/1));e.text(i,Math.round((e.w-gd(i))/2),Math.round(e.h*.78),7833242,a*.9)}}};function hh(e){let t=e.clone(),n=t.getAttribute(`position`),r=t.index,i=new Float32Array(n.count*4),a=.9,o=.12,s=.8,c=r?r.count/3:n.count/3;for(let e=0;e<c;e++){let t=[0,1,2].map(t=>r?r.getX(e*3+t):e*3+t),c=0,l=0,u=0;for(let e of t)c+=n.getX(e)/3,l+=n.getY(e)/3,u+=n.getZ(e)/3;let d=Math.floor(c/a),f=Math.floor(u/a),p=l<o?-1:Math.floor((l-o)/s),m=(Math.sin(d*127.1+p*311.7+f*74.7)*43758.5453%1+1)%1;for(let e of t)i.set([(d+.5)*a,p<0?o/2:o+(p+.5)*s,(f+.5)*a,m],e*4)}return t.setAttribute(`aShard`,new gr(i,4)),t}function gh(e,t,n,r){let i=new K(e,t,n,r),a=Df(-e*r/2,0,-.08-n*r),o=[];return{g:i,m:a,lights:o,light(e,t,n,i,s,c){o.push({pos:new B(e*r,t*r,n*r).applyMatrix4(a),color:i,radius:s,intensity:c})},mesh(e,t=!1){return new W(uu(i,{matrix:a,lights:o,ambient:e}),zd(new U(1,1,1),{fog:t}))}}}function _h(){let e=gh(40,26,38,.1),t=e.g,n=Jl(11);t.box(0,0,0,40,1,38,4603963),t.box(14,0,13,32,1,29,9382438),t.box(16,0,15,30,1,27,5904926);for(let e=1;e<25;e++){let n=t=>e<2?9077104:t%4==0?12234908:13813422;for(let r=0;r<38;r++)t.set(0,e,r,n(r)),t.set(39,e,r,n(r));for(let r=0;r<40;r++)t.set(r,e,0,n(r))}t.box(0,25,0,40,26,38,12371667);for(let e=0;e<24;e++){let e=n.int(2,37),r=n.int(2,35);t.set(e,25,r,15262920,!0),n.chance(.4)&&(t.set(e+1,25,r,15262920,!0),t.set(e,25,r+1,15262920,!0))}t.box(22,10,0,34,20,1,1119774,!0);for(let e=0;e<6;e++)t.set(n.int(23,33),n.int(11,19),0,10727360,!0);t.box(29,15,0,31,17,1,16776168,!0);for(let e of[21,34])t.box(e,9,0,e+1,21,1,15525074);t.box(21,9,0,35,10,1,15525074),t.box(21,20,0,35,21,1,15525074),t.box(19,8,1,23,22,2,8011824),t.box(33,8,1,37,22,2,8011824),t.box(18,22,1,38,23,2,4603963),t.box(1,0,1,12,10,2,9396534),t.box(1,0,2,12,3,22,6176034),t.box(1,3,2,12,5,22,15525074),t.box(2,5,3,11,7,7,16773320),t.box(1,5,7,12,6,22,10508346),t.box(11,2,7,12,6,22,10508346),t.box(1,2,21,12,6,22,10508346);for(let e=9;e<21;e+=3)for(let n=2;n<11;n+=3)t.set(n+e%2,6,e,15911299);t.box(7,7,4,10,10,6,9396534),t.box(7,10,4,10,12,6,9396534),t.set(7,12,5,6176034),t.set(9,12,5,6176034),t.set(8,11,6,3810840),t.box(13,0,1,18,5,6,9396534),t.box(13,5,1,18,6,6,6176034),t.box(15,6,3,16,8,4,3810840),t.box(14,8,2,17,11,5,15911299,!0),e.light(15.5,9.5,3.5,Zl,4.8,1.5),e.light(30,16,2,[.5,.55,.62],3,.5),t.box(38,11,12,39,20,18,2502718),t.box(38,13,14,39,18,16,15525074),t.set(38,18,15,12728878),t.set(38,12,15,15768124),t.set(38,13,13,12728878),t.set(38,13,16,12728878),t.box(33,0,25,39,21,35,13210965),t.box(33,1,30,34,20,31,9396534),t.set(32,10,29,6176034),t.set(32,10,31,6176034),t.box(24,1,20,27,4,23,15525074),t.set(25,3,22,1841690),t.set(24,2,21,1841690);for(let[e,n,r]of[[19,30,12728878],[21,30,16760936],[20,32,3959338]])t.box(e,1,n,e+2,3,n+2,r);return t.box(20,3,30,22,5,32,12728878),[e.mesh([.3,.27,.26])]}function vh(){let e=gh(32,17,44,.2),t=e.g,n=[15911299,15911299,15768124,15768124,13597226,13597226,9396534,4603963,4603963,2502718,2502718,2502718,2502718,2502718];for(let e=0;e<17;e++)t.box(0,e,0,32,e+1,1,e<3?3095114:n[Math.min(n.length-1,e-3)],e>=3);t.box(0,0,1,32,1,12,3095114);for(let e=1;e<12;e+=2)t.set(16,0,e,13597226);t.box(4,2,4,29,5,7,14081510),t.box(29,2,4,31,4,7,14081510);for(let e=8;e<28;e+=2)t.set(e,4,7,16760936,!0);t.box(4,5,5,8,10,6,14081510),t.box(5,7,5,8,9,6,12728878),t.box(12,2,7,20,3,11,12371667),t.box(14,1,8,17,2,10,9214637);for(let e of[8,26])t.box(e,1,5,e+1,2,6,329482);for(let e=0;e<32;e+=5)t.box(e,1,12,e+1,16,13,4608870);t.box(0,0,12,32,1,13,5530230);for(let e=13;e<44;e++)for(let n=0;n<32;n++)t.set(n,0,e,(n+e*2)%7==0?3095114:3819095);t.box(0,16,12,32,17,44,12371667);for(let e=14;e<44;e+=4)for(let n of[7,24])t.box(n,16,e,n+2,17,e+2,16776168,!0);for(let e of[0,31])t.box(e,1,13,e+1,16,44,10727360),t.box(e,1,13,e+1,4,44,9214637);for(let e of[19,25,31]){t.box(3,1,e+1,29,2,e+2,7833242);for(let n=3;n<29;n+=3)t.box(n,2,e,n+2,3,e+2,1841690),t.box(n,3,e+2,n+2,5,e+3,1841690),t.box(n+2,2,e+1,n+3,4,e+2,7833242)}return t.box(19,1,23,21,4,24,5904926),t.set(19,4,23,3018772),t.set(20,4,23,3018772),t.box(2,0,37,9,5,41,5530230),t.box(2,5,37,9,6,41,10727360),t.box(4,6,38,6,8,39,15262920,!0),e.light(8,14,28,Ql,7,.7),e.light(25,14,28,Ql,7,.7),e.light(16,6,13,Zl,8,.9),[e.mesh([.36,.36,.38])]}function yh(){let e=gh(40,26,44,.2),t=e.g,n=Jl(23),r=e=>20+Math.sin(e*.22)*4;for(let e=0;e<44;e++)for(let i=0;i<40;i++){let a=Math.abs(i-r(e))<1.6;t.set(i,0,e,a?n.chance(.3)?3025448:4603963:n.pick([2244636,2766642,1713184,1713184])),!a&&n.chance(.08)&&t.set(i,1,e,n.chance(.5)?3959338:2244636)}let i=[];for(let e=0;e<140&&i.length<34;e++){let e=n.int(0,39),t=n.int(0,41);Math.abs(e-r(t))<4||t>34&&Math.abs(e-20)<7||i.some(([n,r])=>Math.hypot(n-e,r-t)<4)||i.push([e,t])}for(let[e,r]of i){let i=n.chance(.3)?3:2,a=n.int(14,24);t.box(e,0,r,e+i,a,r+i,n.chance(.5)?3025448:3810840);let o=n.int(3,5),s=a-1;for(let i=-o;i<=o;i++)for(let a=-o;a<=o;a++)for(let c=-o;c<=o;c++)i*i+a*a*1.6+c*c>o*o||n.chance(.25)||t.set(e+i,s+a,r+c,n.pick([1713184,2244636,2244636,2766642,3959338]))}for(let e=0;e<14;e++)t.set(n.int(4,36),n.int(3,10),n.int(4,34),16760936,!0);return e.light(r(18),24,18,[.62,.66,.72],14,1.8),e.light(r(32),14,32,[.5,.55,.6],8,.8),[e.mesh([.15,.19,.17])]}function bh(){let e=gh(44,26,40,.1),t=e.g,n=Jl(37);for(let e=0;e<44;e++)t.box(e,0,0,e+1,1,40,Math.floor(e/3)%2?6176034:4860434);t.box(8,0,8,36,1,33,10508346),t.box(9,0,9,35,1,32,8011824);for(let e of[0,43])t.box(e,1,0,e+1,25,40,6445650),t.box(e,1,0,e+1,3,40,4603963);t.box(0,1,0,44,25,1,6445650),t.box(0,1,0,44,3,1,4603963),t.box(0,25,0,44,26,40,4603963),t.box(12,7,0,32,22,1,724500,!0);for(let e=12;e<32;e+=n.int(2,4)){let r=n.int(9,18);t.box(e,7,0,e+2,r,1,1514791,!0);for(let i=8;i<r;i+=2)n.chance(.35)&&t.set(e+n.int(0,1),i,0,n.pick([16760936,15911299,13597226]),!0)}t.box(11,6,0,33,7,1,3025448),t.box(11,22,0,33,23,1,3025448),t.box(9,5,1,12,24,2,5904926),t.box(32,5,1,35,24,2,5904926),t.box(10,0,12,34,4,22,8011824),t.box(12,4,12,32,5,20,10508346),t.box(10,0,20,34,7,22,8011824),t.box(10,0,12,12,6,22,8011824),t.box(32,0,12,34,6,22,8011824),t.box(10,7,20,34,8,22,6176034),t.box(38,0,10,39,16,11,3025448),t.box(36,16,8,41,20,13,15911299,!0),t.box(3,0,11,8,5,16,3810840),t.box(4,5,12,5,7,13,15525074),t.box(6,5,14,7,7,15,15525074),t.box(38,0,2,41,4,5,8011824);for(let e=0;e<40;e++)t.set(n.int(36,42),n.int(4,12),n.int(1,6),n.chance(.5)?3959338:2244636);for(let[e,n]of[[10,14],[14,12]])t.box(1,n,e,2,n+4,e+3,3025448),t.box(1,n+1,e+1,2,n+3,e+2,13210965);e.light(38.5,17,10.5,Zl,6.5,1.7),e.light(22,15,4,[.55,.55,.6],6,.7),e.light(22,20,26,Zl,5,.6);let r=[e.mesh([.3,.27,.25])],i=new ef({hood:!0});i.sit(1),i.group.position.set(.32,.09,-2.23),i.group.rotation.y=Math.PI,i.material.defines={NO_FOG:``},i.material.needsUpdate=!0,i.material.uniforms.uTint.value.setRGB(1.35,1.12,.9),r.push(i.group);let a=new kn,o=new K(9,11,5,.05);o.box(0,0,0,9,11,5,13813422),o.box(0,9,0,1,11,5,12234908),o.box(8,9,0,9,11,5,12234908);let s=new K(7,12,7,.05);s.box(0,5,0,7,12,7,3810840),s.box(1,0,0,6,5,2,3810840),s.box(2,1,2,5,5,6,13210965),s.box(1,6,6,6,9,7,13210965);let c=zd(new U(1.1,.92,.75),{fog:!1}),l=new W(uu(o,{centre:!0}),c);l.position.y=.5;let u=new W(uu(s,{centre:!0}),c);return u.position.set(-.05,.9,0),u.rotation.z=.38,a.add(l,u),a.position.set(-.24,0,-2.31),a.rotation.y=Math.PI,r.push(a),r}var xh={_comment:`All the wording for the grounding moments, the spirals and the reply on the train. Edit freely: src/story/Grounding.ts reads these keys. Lines marked as placeholders in HANDOFF.md are waiting on the owner's choice.`,notice:{prompt:`four things I can see`,things:{pint:`someone's pint`,lantern:`a lantern`,face:`someone's face`,window:`a shop window`,coat:`someone's coat`},hint:`click on them`,hintTouch:`tap them`},say:{statement:`my feet are on the ground`,hint:`type it`,hintTouch:`tap each word`},pass:{statement:`this feeling will pass`,start:`hold space. let them go past`,startTouch:`hold the screen. let them go past`,thoughts:[`everyone can tell`,`what if it doesn't stop`,`you're not ok`,`it's too much`,`what's wrong with you`,`they're all looking`,`you can't do this`,`it'll always be like this`,`you should have stayed home`,`why can't you just`]},spiral:[`I can only spiral like this 2 more times`,`I can only spiral like this 1 more time`],lost:[`too much`,`I can't`,`everything at once`,`make it stop`,`not again`,`why`,`I can't breathe`,`all of it`,`no`],sit:{prompt:`sit down`,hint:`look down at the seat and click`,hintTouch:`tap the seat`},reply:{received:`are you ok?`,prompt:`type a reply`,options:[`I'm ok`,`not really`,`I don't know`],delivered:`delivered`}},Sh=[{kind:`notice`,from:`pre1.1+0.8`,until:`chorus1-0.3`},{kind:`say`,from:84.8,until:`hook1.1+4.5`},{kind:`pass`,from:`hook2+1`,until:`hook2+22`}],Ch=4,wh=2.6,Th=9,Eh=20,Dh=3,Oh=new B(-19.9,1.9,34),kh=.15,Ah=[new B(-20,7.2,34),new B(-21,7.2,34.6),new B(-19,7.2,34.6),new B(-20,6.45,44)],jh=[new B(-26,3.3,37.3),new B(-17.1,1.6,42),new B(-22.9,1.6,42),new B(-17.1,1.6,48),new B(-22.9,1.6,48)],Mh=e=>e.x>-25&&e.x<-15&&e.z>21&&e.z<40,Nh=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)),Ph=`
varying vec3 vL;
void main() { vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Fh=`
uniform float uR;
uniform float uSeed;
uniform float uTime;
uniform float uFlash;
uniform vec3 uCam;
varying vec3 vL;
float hash(float n) { return fract(sin(n) * 43758.5453); }
float edge(float a) {
  float r = 0.8 + 0.1 * sin(a * 3.0 + uSeed) + 0.06 * sin(a * 7.0 + uSeed * 2.3) + 0.05 * sin(a * 13.0 + uSeed * 0.7);
  return r + 0.07 * (hash(floor(a * 2.9) + uSeed) - 0.5);
}
void main() {
  if (uR < 0.01) discard;
  vec2 p = vL.xz;
  float r = length(p), a = atan(p.y, p.x);
  float R = uR * edge(a);
  vec3 hot = vec3(0.62, 0.82, 1.0), lit = vec3(0.31, 0.59, 1.0), deep = vec3(0.02, 0.07, 0.22);
  if (r > R) {
    if (r < R + 0.05) { gl_FragColor = vec4(hot * (1.0 + uFlash), 1.0); return; }
    // fissures running out from it
    for (int k = 0; k < 7; k++) {
      float fa = hash(float(k) * 7.1 + uSeed) * 6.2831 - 3.1416;
      float d = abs(atan(sin(a - fa), cos(a - fa))) * r;
      float len = uR * (1.25 + 0.5 * hash(float(k) + uSeed * 3.0));
      if (r < len && d < 0.035 * (1.0 - r / len) + 0.004 * sin(r * 40.0)) { gl_FragColor = vec4(lit, 1.0); return; }
    }
    discard;
  }
  vec3 D = normalize(vL - uCam);
  float depth = 9.0;
  for (int i = 1; i <= 32; i++) {
    vec3 q = vL + D * float(i) * 0.3;
    if (length(q.xz) > uR * edge(atan(q.z, q.x)) * max(0.5, 1.0 + q.y * 0.05)) { depth = -q.y; break; }
  }
  vec3 c = depth < 9.0 ? mix(lit, deep, smoothstep(0.0, 3.0, depth)) * (0.85 + 0.15 * step(0.5, fract(depth * 2.2))) : deep;
  // small lights falling away in the dark
  vec2 s = floor(p * 9.0);
  float f = hash(s.x * 13.1 + s.y * 7.7 + uSeed);
  if (f > 0.94 && fract(uTime * (0.2 + f) + f * 9.0) < 0.12) c = lit;
  if (r > R - 0.05) c = hot;
  gl_FragColor = vec4(c * (1.0 + 0.6 * uFlash), 1.0);
}`,Ih=class{overlay;touch;crack;moments=Sh.map(e=>({...e,done:-1,failed:!1}));active=null;activeFrom=0;activeUntil=0;clock=0;radius=0;falls=0;fallAt=-1;spiral=null;lost=!1;restart=!1;passed=0;camDrop=0;black=0;flash=0;held=new Set;typed=``;hits=[];targets=[];nextPick=0;get faceTo(){let e=this.active;return e?.kind===`notice`&&e.done<0&&!e.failed?{at:Oh,pitch:kh,settling:this.clock-this.beganAt<2}:null}beganAt=0;lifted=new Set;sayWord=0;sayBuf=``;heldFor=0;drifts=[];nextDrift=0;lostDrifts=[];reply=null;constructor(e,t,n){this.overlay=e,this.touch=t;let r=new Qi(14,14);r.rotateX(-Math.PI/2),this.crack=new W(r,new ca({vertexShader:Ph,fragmentShader:Fh,uniforms:{uR:{value:0},uSeed:{value:1},uTime:{value:0},uFlash:{value:0},uCam:{value:new B}},depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})),this.crack.rotation.order=`YXZ`,this.crack.renderOrder=1,this.crack.frustumCulled=!1,this.crack.visible=!1,addEventListener(`keydown`,e=>this.key(e)),addEventListener(`keyup`,e=>{e.code===`Space`&&this.held.delete(`space`)}),addEventListener(`blur`,()=>this.held.clear()),n.addEventListener(`pointerdown`,e=>{(e.pointerType!==`mouse`||e.button===0)&&(this.held.add(`p${e.pointerId}`),e.pointerType===`touch`?this.tap(e.clientX,e.clientY):document.pointerLockElement===n?this.notice(this.overlay.w/2,this.overlay.h/2):this.notice(e.clientX/innerWidth*this.overlay.w,e.clientY/innerHeight*this.overlay.h))});let i=e=>this.held.delete(`p${e.pointerId}`);n.addEventListener(`pointerup`,i),n.addEventListener(`pointercancel`,i)}get busy(){return this.fallAt>=0||!!this.active&&this.active.done<0}get activeKind(){return this.active&&this.active.done<0?this.active.kind:null}settled(e,t){if(this.fallAt>=0)return!1;for(let n of this.moments)if(t>=e.resolve(n.from)-1&&t<e.resolve(n.until)+1.5)return n.done>=0||n.failed;return!1}get fallsNow(){return this.fallAt>=0}get typing(){if(this.touch||this.fallAt>=0)return!1;if(this.replyLive())return!0;let e=this.active;return!!e&&e.done<0&&e.kind===`say`}get holding(){return this.held.size>0}messageArrived(e){this.reply||={from:e+1.8,sent:``,sentAt:-1}}update(e){let t=e.live?Math.min(.6,Math.max(0,e.t-this.clock)):0;this.clock=e.t;let n={...e,dt:t},{tl:r,t:i}=n;this.flash=Math.max(0,this.flash-t*1.5);for(let t of this.lifted){let n=this.active,r=n?.kind===`notice`&&n.done<0?this.targets.find(e=>e.agent===t):void 0,i=r?r.ticked<0?wh:1.3:1;t.lit+=(i-t.lit)*Math.min(1,e.dt*3),!r&&Math.abs(t.lit-1)<.01&&(t.lit=1,this.lifted.delete(t))}if(this.fallAt>=0){this.falling(n);return}this.reply&&this.reply.sentAt<0&&this.busy&&i>this.reply.from-.5&&(this.reply.from=i+1),this.black=Math.max(0,this.black-t*1.2),this.camDrop=0;let a=null;for(let e of this.moments){let t=r.resolve(e.from),n=r.resolve(e.until);if(i>=t&&i<n+1.5&&!e.failed){a=e,this.activeFrom=t,this.activeUntil=n;break}}if(a!==this.active&&this.begin(a,n),a&&a.done<0){let e=this.progress(a,n);e>=1&&n.live&&(a.done=i,this.passed++,this.flash=1,this.held.clear());let t=Nh((i-this.activeFrom)/(this.activeUntil-this.activeFrom));this.radius=.35+2.3*t*(1-.8*Math.min(1,e)),i>=this.activeUntil&&a.done<0&&n.live&&this.fall(a)}else this.radius=(a&&a.done,Math.max(0,this.radius-t*2));this.place(n,a?.kind===`pass`?.4:1.7)}begin(e,t){this.active=e,this.typed=``,this.targets=[],this.drifts=[],this.sayWord=0,this.sayBuf=``,this.heldFor=0,this.beganAt=this.clock,e&&(this.crack.material.uniforms.uSeed.value=1+this.moments.indexOf(e)*3.7),e?.kind===`notice`&&this.pickTargets(t)}progress(e,t){let n=t.dt;switch(e.kind){case`notice`:this.clock>this.nextPick&&this.pickTargets(t);for(let e of this.targets)e.agent&&this.lifted.add(e.agent);return Math.min(1,this.targets.filter(e=>e.ticked>=0).length/Ch);case`say`:{let e=xh.say.statement.split(` `).length;return this.wordsSaid()/e}case`pass`:{if(this.holding&&t.live&&(this.heldFor+=n),this.clock>this.nextDrift){let e=xh.pass.thoughts;this.drifts.push({text:e[Math.floor(Math.random()*e.length)],x:this.overlay.w+4,y:this.overlay.h*(.32+Math.random()*.36),v:0,born:this.clock}),this.nextDrift=this.clock+.55+Math.random()*.5}let e=this.holding;for(let t of this.drifts)t.v+=((e?70:9)-t.v)*Math.min(1,n*2),t.x-=t.v*n,e||(t.y+=(this.overlay.h*.48-t.y)*n*.3);return this.drifts=this.drifts.filter(e=>e.x+gd(e.text)>-4),Math.min(1,this.heldFor/Th)}}}wordsSaid(){return this.sayWord}saidChars(){let e=xh.say.statement.split(` `),t=e.slice(0,this.sayWord).join(` `).length+ +(this.sayWord>0);return Math.min(xh.say.statement.length,t+Math.min(this.sayBuf.length,e[this.sayWord]?.length??0))}pickTargets(e){this.nextPick=this.clock+.7;let t=e.cam.clone();t.position.copy(e.cam.position),t.lookAt(Oh),t.rotateX(kh),t.updateMatrixWorld();let n=e=>e.clone().project(t),r=e=>e.z<1&&Math.abs(e.x)<.8&&e.y>-.6&&e.y<.7,i=e.agents.filter(t=>!t.ride&&t.pos.distanceTo(e.cam.position)<18),a=(r,a)=>{let o=r.distanceTo(e.cam.position),s=n(r);return i.some(r=>{if(r===a)return!1;let i=r.head.distanceTo(e.cam.position);if(i>=o)return!1;let c=n(r.head),l=.42/i/Math.tan(At.degToRad(t.fov/2))/t.aspect;return c.z<1&&Math.abs(c.x-s.x)<l&&s.y<c.y+.04})};this.targets=this.targets.filter(e=>e.ticked>=0||e.fixed||r(n(e.pos())));let o=new Set(this.targets.map(e=>e.label)),s=e=>this.targets.every(r=>{let i=n(r.pos());return Math.hypot((i.x-e.x)*t.aspect,i.y-e.y)>.32}),c=(e,t)=>{let i=n(e);return r(i)&&s(i)&&!a(e,t)},l=(e,t,n,r)=>{this.targets.length<Ch&&!o.has(t)&&(this.targets.push({pos:e,label:t,size:n,fixed:!r,agent:r,gaze:0,ticked:-1}),o.add(t))},u=xh.notice.things,d=i.filter(t=>t.pos.distanceTo(e.cam.position)>2.5&&Mh(t.pos)).sort((t,n)=>t.pos.distanceTo(e.cam.position)-n.pos.distanceTo(e.cam.position)),f=t=>Math.sin(t.yaw)*(e.cam.position.x-t.pos.x)+Math.cos(t.yaw)*(e.cam.position.z-t.pos.z)>.3*t.pos.distanceTo(e.cam.position),p=(e,t)=>()=>e.pos.clone().setY(e.pos.y+t*e.build.h),m=d.find(e=>e.pint&&f(e)&&c(p(e,1.2)(),e));m&&l(p(m,1.2),u.pint,.25,m);for(let e of Ah)if(c(e)){l(()=>e,u.lantern,.5);break}let h=d.find(e=>e!==m&&f(e)&&c(p(e,1.72)(),e));h&&l(p(h,1.72),u.face,.3,h);for(let e of jh)if(c(e)){l(()=>e,u.window,.7);break}let g=d.find(e=>e!==m&&e!==h&&c(p(e,1.3)(),e));g&&l(p(g,1.3),u.coat,.4,g)}notice(e,t){let n=this.active;if(!n||n.kind!==`notice`||n.done>=0||!this.camRef)return;let r=null,i=Eh;for(let n of this.targets){if(n.ticked>=0)continue;let a=n.pos().clone().project(this.camRef);if(a.z>1)continue;let o=Math.hypot((a.x*.5+.5)*this.overlay.w-e,(1-(a.y*.5+.5))*this.overlay.h-t);o<i&&(i=o,r=n)}r&&(r.ticked=this.clock,this.flash=.4)}fall(e){e.failed=!0,this.fallAt=this.clock,this.falls++,this.falls>=Dh&&(this.lost=!0),this.held.clear(),this.reply=this.reply&&this.reply.sentAt<0?null:this.reply}falling(e){let t=this.clock-this.fallAt;if(this.radius=Math.min(6,this.radius+e.dt*6),this.camDrop=t<1.2?4.9*t*t:7,this.black=Nh((t-.4)/.7),this.place(e,0),Math.random()<e.dt*(this.lost?10+t*6:9)){let e=this.lost?xh.lost:xh.pass.thoughts;this.lostDrifts.push({text:e[Math.floor(Math.random()*e.length)],x:Math.random()*this.overlay.w,y:this.overlay.h+8,v:60+Math.random()*80,born:this.clock})}for(let n of this.lostDrifts)n.y-=n.v*e.dt*(this.lost?Math.max(.15,1-t/8):1);this.lost||(this.lostDrifts=this.lostDrifts.filter(e=>e.y>-10)),this.lost?t>11&&(this.restart=!0):t>3.4&&(this.fallAt=-1,this.camDrop=0,this.radius=0,this.lostDrifts=[],this.spiral={text:xh.spiral[Math.min(this.falls-1,xh.spiral.length-1)],at:this.clock})}place(e,t){let n=this.crack.material.uniforms;n.uR.value=this.radius,n.uTime.value=this.clock,n.uFlash.value=this.flash,this.crack.visible=this.radius>.01,this.crack.visible&&(this.crack.position.set(e.feet.x-Math.sin(e.heading)*t,e.feet.y+.03,e.feet.z-Math.cos(e.heading)*t),this.crack.rotation.set(e.slope,e.heading,0),this.crack.updateMatrixWorld(),n.uCam.value.copy(this.crack.worldToLocal(e.cam.position.clone())))}key(e){if(e.code===`Space`&&(this.held.add(`space`),(this.active||this.reply)&&e.preventDefault()),this.touch||this.fallAt>=0||e.repeat)return;let t=e.key.length===1?e.key.toLowerCase():``;if(this.replyLive()){if(e.key===`Enter`&&this.typed.trim()){this.sendReply(this.typed.trim());return}e.key===`Backspace`?this.typed=this.typed.slice(0,-1):t&&this.typed.length<28&&(this.typed+=t);return}let n=this.active;if(!(!n||n.done>=0)&&n.kind===`say`){let n=xh.say.statement.toLowerCase().split(` `)[this.sayWord];if(!n)return;if(e.key===`Backspace`){this.sayBuf=this.sayBuf.slice(0,-1);return}let r=t===` `||e.key===`Enter`;!r&&t&&(this.sayBuf+=t);let i=Lh(this.sayBuf.trim(),n)<=Math.max(1,Math.floor(n.length/3));this.sayBuf===n||r&&this.sayBuf&&i||!r&&this.sayBuf.length>=n.length+1&&i?(this.sayWord++,this.sayBuf=``,this.flash=Math.max(this.flash,.25)):r&&(this.sayBuf=``)}}tap(e,t){let n=e/innerWidth*this.overlay.w,r=t/innerHeight*this.overlay.h;for(let e of this.hits)if(n>=e.x&&n<e.x+e.w&&r>=e.y&&r<e.y+e.h){e.act();return}this.notice(n,r)}replyLive(){let e=this.reply;return!!e&&e.sentAt<0&&this.lastT>=e.from&&this.lastT-e.from<16}sendReply(e){this.reply&&(this.reply.sent=e,this.reply.sentAt=this.lastT,this.typed=``)}lastT=0;draw(e,t,n){this.lastT=t,this.hits=[];let r=ud[4],i=ud[1],a=15778670,o=(t,n,r,i=1)=>e.text(t,Math.round((e.w-gd(t))/2),Math.round(n),r,i);if(this.fallAt>=0||this.lostDrifts.length){for(let t of this.lostDrifts)e.text(t.text,Math.round(t.x-gd(t.text)/2),Math.round(t.y),t.born%2>1?ud[3]:r,.85,{drop:!1});this.lost&&e.shade(Math.min(.9,(this.clock-this.fallAt-3)/8));return}if(this.spiral){let t=this.clock-this.spiral.at;t<5&&o(this.spiral.text,e.h*.72,r,Math.min(1,t/.6)*Math.min(1,(5-t)/1.2))}this.drawReply(e,t);let s=this.active;if(!s)return;let c=s.done>=0?1-Nh((t-s.done)/1.5):Math.min(1,(t-this.activeFrom)/1);if(c<=0)return;let l=Math.round(e.h*.16);if(n&&this.camRef){let t=n.clone().project(this.camRef);t.z<1&&Math.abs(t.x)<1&&(l=Math.round(Math.min(e.h*.4,Math.max(10,(1-(t.y*.5+.5))*e.h-46))))}switch(s.kind){case`notice`:{l=Math.round(e.h*.05),o(xh.notice.prompt,l,r,c);let n=Math.round(e.w/2-14);for(let t=0;t<Ch;t++){let a=this.targets.filter(e=>e.ticked>=0).length>t;e.rect(n+t*7,l+11,5,5,a?r:i),a||e.rect(n+t*7+1,l+12,3,3,329482)}let s=e.h/2/Math.tan(At.degToRad((this.camRef?.fov??60)/2));for(let t of this.targets){if(!this.camRef)break;let n=t.pos(),r=n.clone().project(this.camRef);if(r.z>1||Math.abs(r.x)>1.1||Math.abs(r.y)>1.1)continue;let i=Math.round((r.x*.5+.5)*e.w),o=Math.round((1-(r.y*.5+.5))*e.h);if(t.ticked>=0){let n=this.clock-t.ticked;n<3&&e.label(t.label,i,o-16-Math.round(n*2),15262920,Math.min(1,n/.15,(3-n)/1)*c,a);continue}let l=Math.round(Math.min(16,Math.max(5,t.size*s/n.distanceTo(this.camRef.position)))+1.5+1.5*Math.sin(this.clock*4+i)),u=!this.touch&&Math.abs(i-e.w/2)<=l+2&&Math.abs(o-e.h/2)<=l+2,d=u?16773320:a,f=u?4:3;for(let[t,n]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let r=i+t*l,a=o+n*l;e.rect(Math.min(r,r-t*(f-1)),a,f,1,d),e.rect(r,Math.min(a,a-n*(f-1)),1,f,d)}e.rect(i,o,1,1,d)}if(!this.touch){let t=Math.round(e.w/2),n=Math.round(e.h/2);e.rect(t-3,n,2,1,r),e.rect(t+2,n,2,1,r),e.rect(t,n-3,1,2,r),e.rect(t,n+2,1,2,r)}t-this.activeFrom>2.5&&this.targets.every(e=>e.ticked<0)&&o(this.touch?xh.notice.hintTouch:xh.notice.hint,l+22,7833242,c*.8);break}case`say`:{let n=xh.say.statement,a=Math.round((e.w-gd(n))/2),s=this.saidChars();if(e.text(n,a,l,i,c),s>0&&e.text(n.slice(0,s),a,l,r,c),this.touch){let t=n.split(` `),r=Math.round(e.w/2-t.reduce((e,t)=>e+gd(t)+8,0)/2);t.forEach((t,n)=>{let i=n<this.wordsSaid(),a=gd(t)+6;e.rect(r,l+14,a,11,i?ud[2]:1514791),e.text(t,r+3,l+16,i?15004671:10727360,c,{drop:!1}),n===this.wordsSaid()&&this.hits.push({x:r-2,y:l+10,w:a+4,h:19,act:()=>{this.sayWord=n+1,this.flash=.3}}),r+=a+2})}else t-this.activeFrom>3&&this.sayWord===0&&!this.sayBuf&&o(xh.say.hint,l+12,7833242,c*.8);break}case`pass`:{for(let t of this.drifts){let n=this.holding?Math.min(1,Math.max(0,(t.x-e.w*.2)/(e.w*.3))):1;e.text(t.text,Math.round(t.x),Math.round(t.y),ud[3],n*c*.9)}let t=xh.pass.statement,n=Math.round((e.w-gd(t))/2),a=Math.min(1,this.heldFor/Th);e.text(t,n,l,i,c),a>0&&e.text(t.slice(0,Math.round(t.length*a)),n,l,r,c),this.heldFor<.5&&o(this.touch?xh.pass.startTouch:xh.pass.start,l+12,7833242,c*.8);break}}}camRef=null;setCamera(e){this.camRef=e}drawReply(e,t){let n=this.reply;if(!n||t<n.from)return;let r=t-n.from,i=n.sentAt>=0?t-n.sentAt:-1;if(i>4||n.sentAt<0&&r>16)return;let a=Math.min(1,r/.5)*(i>0?Math.min(1,(4-i)/1):n.sentAt<0?Math.min(1,(16-r)/1):1),o=this.touch&&n.sentAt<0?50:44,s=e.w-96-6,c=e.h-20-o;if(e.rect(s-1,c-1,98,o+2,4603963),e.rect(s,c,96,o,1119774),e.rect(s+3,c+3,gd(xh.reply.received)+6,11,2502718),e.text(xh.reply.received,s+6,c+5,15262920,a,{drop:!1}),n.sentAt>=0){let t=gd(n.sent)+6;e.rect(s+96-t-3,c+17,t,11,ud[2]),e.text(n.sent,s+96-t,c+19,15004671,a,{drop:!1}),e.text(xh.reply.delivered,s+96-gd(xh.reply.delivered)-3,c+31,7833242,a,{drop:!1})}else if(this.touch){let t=c+17;for(let n of xh.reply.options)e.rect(s+3,t,90,9,2502718),e.text(n,s+6,t+1,14081510,a,{drop:!1}),this.hits.push({x:s,y:t-1,w:96,h:11,act:()=>this.sendReply(n)}),t+=11}else e.rect(s+3,c+30,90,11,329482),e.text(this.typed?this.typed+(Math.floor(r*3)%2?`|`:``):xh.reply.prompt,s+6,c+32,this.typed?14081510:5530230,a,{drop:!1})}};function Lh(e,t){let n=Array.from({length:e.length+1},(e,n)=>[n,...Array(t.length).fill(0)]);for(let e=1;e<=t.length;e++)n[0][e]=e;for(let r=1;r<=e.length;r++)for(let i=1;i<=t.length;i++)n[r][i]=Math.min(n[r-1][i]+1,n[r][i-1]+1,n[r-1][i-1]+(e[r-1]===t[i-1]?0:1)),r>1&&i>1&&e[r-1]===t[i-2]&&e[r-2]===t[i-1]&&(n[r][i]=Math.min(n[r][i],n[r-2][i-2]+1));return n[e.length][t.length]}var Rh=`verse2-0.25`,zh=`verse2.1`,Bh=`verse2.2+1.6`,Vh=`verse2.3-2`,Hh=`verse2.3+1.2`,Uh=45,Wh=10,Gh=10,Kh=3.8,qh=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)),Jh=class{line;active=!1;k=0;fovK=1;fog={color:724500,density:.02};light=new kn;child=null;seat=dm(zp.length).add(new B(0,0,.55));lineAt=-1;constructor(e,t){this.line=t;let n=e.addPerson({variant:`hoodie`,coat:13597226,hair:3810840,skin:15254688,legs:2502718,wear:0,h:.58,w:.9,mood:`blank`});n&&(n.lastThought=1/0,n.nextFlicker=1/0,n.holdAct=0,n.seated=!0,n.yaw=Math.PI,n.lit=1.3),this.child=n;let r=(e,t)=>{let n=new Fi(new jr().setAttribute(`position`,new yr([0,0,0],3)),new Ai({color:t,size:e,sizeAttenuation:!1,depthWrite:!1}));return n.frustumCulled=!1,n},i=r(4,2057200),a=r(2,10473727);a.renderOrder=1,this.light.add(i,a),this.light.visible=!1}get inward(){return this.active}update(e,t,n){let r=e.resolve(Rh),i=e.resolve(zh),a=e.resolve(Bh),o=e.resolve(Vh),s=e.resolve(Hh);this.lineAt=s+.8,this.active=t>=r&&t<s&&n!==null&&n<zp.length;let c=Ll.uStretch.value,l=this.child;if(!this.active){c.y=0,this.k=0,this.fovK=1,this.light.visible=!1,l&&l.pos.y>-60&&(l.pos.set(0,-80,0),l.home.set(0,-80,0));return}this.k=qh((t-r)/(i-r))*(1-qh((t-o)/(s-o)));let u=Math.max(.01,zp.length-n),d=Uh+15*qh((t-i)/(o-i));c.x=n,c.z=Gh,c.y=this.k*Math.min(Wh,Math.max(0,d-u)/(u**3/(u*u+100))),this.fovK=1+.22*this.k,this.fog.density=.016+.02*this.k;let f=t<a;if(l){let e=f?this.seat:new B(0,-80,0);l.pos.copy(e),l.home.copy(e),l.gaze=0,l.mood=`blank`}this.light.visible=f&&!(a-t<.6&&Math.sin(t*40)>.2),this.light.visible&&this.light.position.copy(zl(this.seat.clone().add(new B(0,.42,-.2))))}draw(e,t){let n=t-this.lineAt;if(n<0||n>Kh)return;let r=Math.min(1,n/.6)*Math.min(1,(Kh-n)/1.2);e.text(this.line,Math.round((e.w-gd(this.line))/2),Math.round(e.h*.42),ud[4],r)}},Yh={at:114.5,along:6.8,speed:.75},Xh=1.8,Zh=.35;function Qh(e,t,n){let r=.03,i=Math.max(...e.map(e=>gd(e.text)))+10,a=e.length*10+16,o=new K(i,a,1,r);o.box(0,0,0,i,a,1,t);for(let e=0;e<i;e++)for(let t=0;t<4+Math.round(Math.sin(e*.45)*1.2);t++)o.set(e,t,0,n);return e.forEach((e,t)=>{let n=tf(e.text,r,e.color),s=Math.round((i-n.sx)/2),c=a-6-(t+1)*10+3;for(let e=0;e<n.sy;e++)for(let t=0;t<n.sx;t++)n.solid(t,e,0)&&(o.data[s+t+o.sx*(c+e)]=n.data[t+n.sx*e])}),o}var $h=class{city;train;route;world;lights;finalLine;group=new kn;eggs=[];walks=[];luke=null;tom=null;lines=[];lastFound=-9;built=!1;get found(){return this.eggs.filter(e=>e.found>=0).length}get total(){return this.eggs.length}constructor(e,t,n,r,i,a){this.city=e,this.train=t,this.route=n,this.world=r,this.lights=i,this.finalLine=a}turnAt=1;sayAt=3.4;get sayDone(){return this.sayAt+4.6}said=!1;lock(e){return!this.luke||this.luke.pos.y<-40||e<this.turnAt+.4?null:{at:this.luke.head.clone().setY(this.luke.head.y-.18),k:Math.min(1,(e-this.turnAt-.4)/1.2)}}build(e){if(this.built)return;this.built=!0;let t=this.route,n=(t,n,r,i,a,o,s=!1)=>{if(!t)return;let c=e.progress(i);this.walks.push({agent:t,from:n,until:r,s0:c+16,s1:c-8,side:a,weave:0,face:o,turns:s}),t.holdAct=t.holdAct??0,t.lastThought=1/0,t.nextFlicker=1/0},r=this.city.addPerson({variant:`jacket`,coat:724500,hair:15911299,skin:15254688,legs:5530230,accent:11050118,wear:0});r&&(r.build.h=1.1),r&&(r.lastThought=1/0,r.nextFlicker=1/0,r.holdAct=0,r.mood=`content`,this.tom=r);let i=this.city.addPerson({variant:`jacket`,coat:15262920,hair:1841690,skin:15254688,legs:1514791,wear:pu.beard|pu.board});i&&(i.skate=!0,i.holdAct=30,i.act=30,i.actK=.99),n(i,21,29,26,-1.8,`grin`);let a=this.city.addPerson({variant:`jacket`,coat:1841690,hair:13210965,skin:15254688,legs:5904926,wear:pu.longHair});n(a,58,74,67,1.5,`smile`,!0),this.luke=this.train.addPerson({variant:`jacket`,coat:13813422,hair:1841690,skin:14067578,legs:2502718,wear:pu.curls,mood:`content`}),this.luke&&(this.luke.lastThought=1/0,this.luke.nextFlicker=1/0,this.luke.acts=[0,4,13,20,26,27,27]);let o=e=>()=>e&&e.pos.y>-40?e.head:null,s=e=>`wait, is that ${e} from FloodLines?`;r&&this.eggs.push({id:`tom`,at:o(r),near:14,seen:0,found:-1,line:{text:s(`Tom`),from:o(r)}}),i&&this.eggs.push({id:`phil`,at:o(i),near:16,seen:0,found:-1,line:{text:`was that Phil from FloodLines?`,from:o(i)}}),a&&this.eggs.push({id:`alex`,at:o(a),near:14,seen:0,found:-1,line:{text:s(`Alex`),from:o(a)}}),this.luke&&this.eggs.push({id:`luke`,at:o(this.luke),near:4,seen:0,found:-1});let c=(e,t,n)=>Qh(e.map(([e,t])=>({text:e,color:t})),t,n),l=15911299,u=15525074,d=[[`poster-final-fear`,t.at(`doorExit`)+9,c([[`FLOODLINES`,u],[`FINAL FEAR`,l],[`OUT NOW`,u]],1119774,3095114)],[`poster-bubblewrap`,t.at(`lime`)+4,c([[`BUBBLEWRAP`,15230026],[`FLOODLINES`,u]],1514791,4603963)],[`poster-rabbit-holes`,t.at(`arcade`)+2,c([[`RABBIT`,l],[`HOLES`,l],[`FLOODLINES`,u]],2766642,1713184),3.6],[`poster-edens-waiting`,t.at(`gate`)+3.5,c([[`EDENS`,u],[`WAITING`,u],[`FLOODLINES`,l]],5904926,3018772),5],[`poster-platform`,t.at(`doorway`)-1,c([[`FLOODLINES`,l],[`FINAL FEAR`,u]],724500,2502718),3]],f=new io,p=[];this.world.traverse(e=>{e.isMesh&&e.material===Bd&&p.push(e)});for(let[e,n,r,i=8]of d){let a=null,o=t.pointAt(n),s=new B;for(let e of[0,-1,1,-2,2,-3,3,-4,4,-6]){let r=t.pointAt(n+e),c=t.headingAt(n+e),l=r.clone().setY(r.y+1.6);for(let e of[1,-1]){let t=new B(Math.cos(c)*e,0,-Math.sin(c)*e);f.set(l,t),f.far=i;let n=f.intersectObjects(p,!1)[0];if(!n||!n.face||n.distance<1)continue;let u=n.face.normal.clone().transformDirection(n.object.matrixWorld).setY(0).normalize();u.dot(t)>-.7||(!a||n.distance<a.distance)&&(a=n,o=r,s=u)}if(a)break}if(!a)continue;let c=new B(0,1,0),l=c.clone().cross(s),u=r.sx*r.size,d=r.sy*r.size,m=a.point.clone().addScaledVector(s,.03).addScaledVector(l,-u/2).setY(o.y+2-d/2),h=o.clone().setY(o.y+1.6),g=0;for(let[e,t]of[[0,0],[1,0],[0,1],[1,1],[.5,.5],[.25,.5],[.75,.5]]){let n=m.clone().addScaledVector(l,u*e).setY(m.y+d*t).clone().sub(h),r=n.length();f.set(h,n.normalize()),f.far=r-.01;let i=f.intersectObjects(p,!1)[0];i&&(g=Math.max(g,i.point.clone().sub(a.point).dot(s)+.03))}g>0&&g<1&&m.addScaledVector(s,g);let _=new W(uu(r,{matrix:new H().makeBasis(l,c,s).setPosition(m),lights:this.lights}),Bd);this.group.add(_);let v=m.clone().addScaledVector(l,u/2).setY(m.y+d/2);this.eggs.push({id:e,at:()=>v,near:12,seen:0,found:-1})}this.eggs.push({id:`train-advert`,at:()=>this.advert,near:6,seen:0,found:-1})}side(e,t){let n=this.route.pointAt(e),r=this.route.headingAt(e);return new B(n.x+Math.cos(r)*t,n.y,n.z-Math.sin(r)*t)}advert=new B(0,-999,0);update(e,t,n,r,i,a=-1){this.build(e);for(let e of this.walks){let i=e.agent;if(t>=e.from&&t<e.until){let a=e.s0+(e.s1-e.s0)*((t-e.from)/(e.until-e.from)),o=this.route.headingAt(a),s=new B(Math.cos(o),0,-Math.sin(o)),c=this.side(a-.5,0).sub(this.side(a,0)).normalize(),l=0;for(let t of this.city.agents){if(t===i||t.pos.y<-40||Math.abs(t.pos.y-i.pos.y)>1)continue;let r=t.pos.clone().sub(i.pos).setY(0),a=r.dot(c),o=r.dot(s);a>0&&a<3.5&&Math.abs(o)<.75&&(l=e.weave+(o>=0?o-.8:o+.8));let u=r.length();if(u<1.1&&u>.001&&!t.keep){let e=(1.1-u)*Math.min(1,n*6)/u;t.lane?this.city.solid(t.pos.x+r.x*e,t.pos.z+r.z*e,t.pos.y)||t.nudge.addScaledVector(r,e):!t.seated&&!this.city.solid(t.pos.x+r.x*e,t.pos.z+r.z*e,t.pos.y)&&t.pos.addScaledVector(r,e)}}l=At.clamp(l,-1.2,1.2);let u=this.side(a,e.side+l);this.city.solid(u.x,u.z,u.y)&&(l=0),e.weave+=(l-e.weave)*Math.min(1,n*4),i.lane={a:this.side(a,e.side+e.weave),b:this.side(a-.5,e.side+e.weave)},i.dir=1,i.speed=Math.abs(e.s1-e.s0)/(e.until-e.from),i.u=0,i.gaze=0,i.mood=e.face;let d=0;if(e.turns){let e=r.position.clone().sub(i.pos),t=Math.hypot(e.x,e.z);if(t<9&&e.dot(c)>-1){let n=Math.atan2(e.x,e.z)-i.yaw;d=At.clamp(Math.atan2(Math.sin(n),Math.cos(n)),-1.3,1.3),i.mood=t<5?`grin`:`smile`}}i.turn+=(d-i.turn)*Math.min(1,n*4)}else i.lane&&(i.lane=void 0,i.speed=0,i.pos.set(0,-50,0),i.home.set(0,-50,0))}if(this.tom){let e=this.tom,n=Yh.along+(Yh.at-t)*Yh.speed,r=t>=Yh.at-5&&t<Yh.at+5&&n>.6&&n<zp.length-.6?dm(n).add(new B(2.4,0,0)):new B(0,-50,0);e.pos.copy(r),e.home.copy(r),e.yaw=Math.PI,e.gaze=0,e.turn=0}if(this.luke){let i=this.luke,o=t>=e.resolve(`bridge.8`);i.seated=o;let s=o?new B(hm.x,X,hm.z-Xh):new B(0,-50,0);i.pos.copy(s),i.home.copy(s),i.yaw=0,i.lit=1.6,i.gaze=0;let c=r.position.clone().sub(i.pos),l=Math.atan2(c.x,c.z)-i.yaw,u=At.clamp(Math.atan2(Math.sin(l),Math.cos(l)),-1.2,1.2),d=this.eggs.find(e=>e.id===`luke`),f=.9+.25*Math.sin(t*.21);if(i.mood=`content`,d&&d.found>=0&&t-d.found<3&&(f=u,i.mood=`smile`),a>=this.turnAt){i.holdAct=0,f=u;let e=a-this.sayAt;i.mood=e>=0&&e<2.6&&Math.sin(a*11)+.6*Math.sin(a*6.3)>.2?`talk`:`smile`,e>=0&&!this.said&&(this.said=!0,this.lines.push({text:this.finalLine,said:!0,at:t,from:()=>i.head}))}else i.holdAct=void 0;i.turn+=(f-i.turn)*Math.min(1,n*3)}if(i)for(let e of this.eggs){if(e.found>=0||a>=0&&e.id===`luke`)continue;let i=e.at();if(!i){e.seen=0;continue}let o=i.clone().project(r);e.seen=o.z<1&&Math.hypot(o.x*r.aspect,o.y)<.55&&i.distanceTo(r.position)<e.near?e.seen+n:Math.max(0,e.seen-n*.5),e.seen>Zh&&(e.found=t,this.lastFound=t,e.line&&this.lines.push({text:e.line.text,said:!!e.line.said,at:t,from:e.line.from}))}}draw(e,t,n){for(let r of this.lines){let i=t-r.at;if(i>4.5)continue;let a=r.from(),o=e.w/2,s=e.h*.3;if(a){let t=a.clone().add(new B(0,.25,0)).project(n);t.z<1&&(o=(t.x*.5+.5)*e.w,s=(1-(t.y*.5+.5))*e.h-10)}let c=Math.min(1,i/.4)*Math.min(1,(4.5-i)/1);if(r.said&&a){let t=a.clone().setY(a.y-.45).project(n);e.label(r.text,(t.x*.5+.5)*e.w,Math.min(e.h*.7,(1-(t.y*.5+.5))*e.h),15262920,c,7833242)}else e.label(r.text,o,Math.round(Math.max(4,s)),ud[4],c,ud[3],!0)}let r=t-this.lastFound;if(r>=0&&r<3){let t=Math.min(1,r/.3)*Math.min(1,(3-r)/.8),n=`${this.found}/${this.total}`,i=e.h-14;for(let[t,n]of[[0,-2],[0,-1],[0,1],[0,2],[-2,0],[-1,0],[1,0],[2,0],[0,0]])e.rect(10+t,i+3+n,1,1,16776168);e.text(n,16,i,14081510,t)}}},eg=[...vd.pressure,...vd.time,...vd.heavy,...vd.inward,...Object.values(yd).flat()],tg=class{streaks=[];words=[];spawn=0;rush=0;breath=-1;update(e,t,n,r){if(e<=0){this.streaks.length=0,this.words.length=0,this.rush=0,this.breath=-1;return}let i=n-2.8;this.rush=Math.min(1,t/1.8)*(t<i?1:Math.max(0,1-(t-i)/.9)),this.breath=t>=i?Math.min(2,(t-i)/1.3):-1;let a=.4+2.6*this.rush;for(this.spawn+=r*60*this.rush;this.spawn>=1;)this.spawn--,this.streaks.push({a:Math.random()*Math.PI*2,r:4+Math.random()*20,v:.8+Math.random(),col:ud[2+Math.floor(Math.random()*4)]}),Math.random()<.09&&this.words.push({text:eg[Math.floor(Math.random()*eg.length)],a:Math.random()*Math.PI*2,r:2,v:.6+Math.random()*.6,col:ud[3+Math.floor(Math.random()*3)]});for(let e of this.streaks)e.r*=1+r*e.v*a*1.6;for(let e of this.words)e.r*=1+r*e.v*a*1.1;this.streaks=this.streaks.filter(e=>e.r<400),this.words=this.words.filter(e=>e.r<260)}draw(e){if(this.rush<=0&&this.breath<0)return;let t=e.w/2,n=e.h/2;e.wash(ud[0],.55*this.rush);for(let r of this.streaks){let i=r.r*.18*(.5+this.rush),a=Math.cos(r.a),o=Math.sin(r.a);e.line(t+a*r.r,n+o*r.r*.7,t+a*(r.r+i),n+o*(r.r+i)*.7,r.col,Math.min(1,r.r/40)*(.4+.6*this.rush))}for(let r of this.words){let i=r.r>90?2:1,a=t+Math.cos(r.a)*r.r-gd(r.text)*i/2,o=n+Math.sin(r.a)*r.r*.6;e.text(r.text,a,o,r.col,Math.min(1,r.r/30)*this.rush,{scale:i,drop:!1})}if(this.breath>=0){let r=this.breath<1?`breathe in`:`and out`,i=this.breath<1?this.breath:this.breath-1,a=Math.min(1,i*3)*Math.min(1,(1-i)*2.5),o=gd(r)*2<e.w-16?2:1;e.text(r,Math.round(t-gd(r)*o/2),Math.round(n-7),ud[4],a,{scale:o})}}},ng=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)),rg=class{train;group=new kn;phoneGlow;waverArm=[];starDir=null;constructor(e){this.train=e;let t=document.createElement(`canvas`);t.width=96,t.height=32;let n=t.getContext(`2d`),i=n.createImageData(96,32),a=new Uint32Array(i.data.buffer),o=6;for(let e of`hold on`){if(e===` `){o+=7;continue}let t=pd[e];for(let e=0;e<7;e++)for(let n=0;n<t.w;n++)if(t.rows[e]?.[n]===`#`)for(let t=0;t<3;t++)for(let r=0;r<3;r++){let i=o+n*3+t,s=6+e*3+r+Math.round(Math.sin((o+n)*.7));Math.sin(i*1.7+s*2.3)>-.6&&(a[s*96+i]=4294967295)}o+=(t.w+1)*3}n.putImageData(i,0,0);let s=new Ri(t);s.magFilter=r,s.minFilter=r,s.generateMipmaps=!1;let c=e.glass[1].rain.uniforms;c.uNote.value=s,c.uNoteRect.value.set(hm.z-(Z.z0+11)-.5,-.32,1,.36);let l=new W(new Hi(.075,.012,.15),new Ur({color:724500,opacity:0}));l.position.set(hm.x-.5,X+.49,hm.z+.05),l.rotation.y=.4,this.phoneGlow=new W(new Qi(.22,.3),new Ur({color:14081510,transparent:!0,opacity:0,depthWrite:!1})),this.phoneGlow.rotation.x=-Math.PI/2,this.phoneGlow.position.set(l.position.x,X+.485,l.position.z),this.group.add(l,this.phoneGlow);let u=new K(10,12,8,.5);u.box(0,0,0,10,10,8,6176034),u.box(0,10,0,10,12,8,2502718),u.box(0,2,3,1,6,6,15911299,!0);let d=zd(new U(.75,.75,.8)),f=new W(uu(u,{}),d),p=Z.z0+11+Em(270.2)+(hm.z-(Z.z0+11));f.position.set(fm+12.5,X-1.6,p-2);let m=new W(new Hi(.1,.9,.45),new Ur({color:3025448,opacity:0}));m.position.set(fm+12.45,X-1.6+1.9,p-.25),this.group.userData.outside=[f,m];for(let e of[!0,!1]){let t=new W(new Hi(.08,.45,.1),new Ur({color:3025448,opacity:0}));t.position.set(fm+12.44,X-1.6+(e?2.55:2.35),p-.55+(e?-.05:.1)),t.rotation.x=e?.4:-.6,this.waverArm.push(t),this.group.userData.outside.push(t)}for(let t of this.group.userData.outside)e.outside.add(t)}update(e,t){let n=t=>e.resolve(t);this.train.glass[1].rain.uniforms.uNoteK.value=ng((t-n(`bridge.8`))/3);let r=t-n(`outro+2.4`),i=r>0&&r<1.6?(r<.45||r>.75&&r<1.2?1:.15)*(1-r/2):0;this.phoneGlow.material.opacity=i*.55;let a=Math.floor(t*2.6)%2==0;this.waverArm[0].visible=a,this.waverArm[1].visible=!a}buzzing(e,t){let n=t-e.resolve(`outro+2.4`);return n>0&&n<1.2&&(n<.45||n>.75)}flameFlight(e,t,n,r){let i=e.resolve(`outro.1+1.5`),a=e.duration-.6;if(t<i)return null;let o=ng((t-i)/(a-i)),s=n.clone().add(new B(14*o,6*o*o,5*o));return t>=a&&!this.starDir&&(this.starDir=s.clone().sub(r.position).normalize()),{target:s,scale:1-.85*o,gone:t>=a}}},ig=`are you ok?`,ag=[3,7,9,10,11],og=class{holders=[];glimpses=0;current=null;sent=!1;onSent=null;add(e){this.holders.push({agent:e,seen:!1,started:0,reach:0})}update(e,t,n){let r=this.current;if(r&&!this.sent&&r.reach>=11&&e-r.started>.4+r.reach/7+1.4&&(this.sent=!0,this.onSent?.(e)),this.current)e-this.current.started>this.duration(this.current.reach)&&(this.current=null);else if(n)for(let n of this.holders){if(n.seen)continue;let r=this.screenPos(n.agent);if(r.distanceTo(t.position)>5)continue;let i=r.clone().project(t);if(!(i.z>1||Math.abs(i.x)>.6||Math.abs(i.y)>.7)){n.seen=!0,n.started=e,n.reach=n===this.holders[this.holders.length-1]?11:ag[Math.min(this.glimpses,ag.length-2)],this.glimpses++,this.current=n;return}}}screenPos(e){let t=new B(Math.sin(e.yaw),0,Math.cos(e.yaw));return e.pos.clone().add(new B(0,e.seated?.85:1.2,0)).addScaledVector(t,.3)}duration(e){return e>=11?.4+e/7+1.4+3:.4+e/7+1+e/12+.4}draw(e,t,n){let r=this.current;if(!r)return;let i=t-r.started,a=.4+r.reach/7,o=a+1,s=r.reach>=11,c=s&&i>a+1.4,l=i<.4?0:i<a?Math.floor((i-.4)*7):i<o||s?r.reach:Math.max(0,r.reach-Math.floor((i-o)*12)),u=this.screenPos(r.agent).project(n);if(u.z>1)return;let d=Math.round((u.x*.5+.5)*e.w),f=Math.round((1-(u.y*.5+.5))*e.h),p=ig.slice(0,l)+(c?``:Math.floor(i*3)%2?`|`:` `),m=Math.max(30,gd(ig)+8);c?(e.rect(d-m/2,f-22,m,13,2502718),e.text(ig,d-m/2+4,f-19,15262920,1,{drop:!1}),e.text(`sent`,d+m/2-gd(`sent`)-2,f-8,7833242,1,{drop:!1}),e.rect(d-m/2,f+2,m,9,329482)):(e.rect(d-m/2-1,f-8,m+2,15,4603963),e.rect(d-m/2,f-7,m,13,1119774),e.text(p,d-m/2+4,f-4,14081510,1,{drop:!1}))}},sg=[[-6.5,6.4,.75,0],[-8,11.6,.7,1],[-13.4,15.9,.8,2]],cg=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)),lg=class{thoughts;group=new kn;lobbyReflection=new ef({hood:!0});glassRain;rainUpAt=-1;adverts=[];busker=null;buskerPos=new B(-38.6,.15,51.5);pairDone=!1;yesterdaySeen=!1;get spotted(){return+(this.rainUpAt>0)+this.adverts.filter(e=>e.flipped).length+ +!!this.pairDone+ +!!this.yesterdaySeen}constructor(e,t,n){this.thoughts=t;{let e=new K(1,22,8,.02);for(let t=8;t<22;t++)e.set(0,t,1,5904926),e.set(0,t,6,5904926);e.box(0,0,0,1,9,8,15525074),e.box(0,3,1,1,8,4,14081510),e.box(0,4,5,1,5,7,9214637),e.box(0,2,5,1,3,7,9214637);let t=new W(uu(e,{}),Bd),n=of(27.42,4.55,6.5);t.position.copy(n),t.rotation.y=Math.PI,this.group.add(t)}this.lobbyReflection.group.visible=!1,this.lobbyReflection.material.uniforms.uTint.value.setRGB(.3,.33,.4),this.group.add(this.lobbyReflection.group),this.glassRain=new ca({uniforms:{uTime:{value:0},uDir:{value:1}},vertexShader:`varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uTime; uniform float uDir; varying vec2 vP;
        float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main() {
          float lane = floor(vP.x / 0.06);
          float y = vP.y + uDir * uTime * (1.2 + h(vec2(lane, 1.0)) * 1.4) + h(vec2(lane, 5.0)) * 20.0;
          float seg = fract(y / 1.7);
          float a = step(0.55, h(vec2(lane, floor(y / 1.7)))) * smoothstep(0.0, 0.08, seg) * step(seg, 0.22);
          gl_FragColor = vec4(vec3(0.55, 0.6, 0.68) * a * 0.35, 0.0);
        }`,transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:201,blendSrcAlpha:200,blendDstAlpha:201});for(let[e,t]of[[-10,-1.8],[1.8,10]]){let n=new W(new Qi(t-e,13),this.glassRain);n.position.copy(of(-.03,6.5,(e+t)/2)),n.rotation.y=Math.PI/2,this.group.add(n)}let i=document.createElement(`canvas`);i.width=192,i.height=64;let a=i.getContext(`2d`);a.fillStyle=`#bcc6d3`,a.fillRect(0,0,64,64),a.fillStyle=`#d6dde6`,a.fillRect(0,0,64,24),a.fillStyle=`#fff0c8`,a.fillRect(44,8,8,8),a.fillStyle=`#3c6a2a`,a.fillRect(0,40,64,24),a.fillStyle=`#22401c`,a.fillRect(12,20,16,20),a.fillStyle=`#3a2618`,a.fillRect(18,34,4,10),a.fillStyle=`#a3afc0`,a.fillRect(64,0,64,26),a.fillStyle=`#f2c983`,a.fillRect(100,14,9,9),a.fillStyle=`#546276`,a.fillRect(64,26,64,14),a.fillStyle=`#d2c6ae`,a.fillRect(64,40,64,24),a.fillStyle=`#3a2618`,a.fillRect(128,0,64,64),a.fillStyle=`#c99555`,a.fillRect(134,8,52,34),a.fillStyle=`#f2c983`,a.fillRect(154,4,10,4),a.fillStyle=`#5e3d22`,a.fillRect(140,42,40,4);let o=new Ri(i);o.magFilter=r,o.minFilter=r,o.generateMipmaps=!1,e.uniforms.uMem.value=o,sg.forEach(([t,n,r,i],a)=>e.uniforms.uPuddles.value[a].set(t,n,r,i));{let e=new W(new Qi(1.4,2),new Ur({color:14081510,opacity:0}));e.position.set(16.3,20.6,19),e.rotation.y=-Math.PI/2;let n=new W(new Qi(.45,1.6),new Ur({color:1514791,opacity:0}));n.position.set(16.25,20.4,19.1),n.rotation.y=-Math.PI/2,this.group.add(e,n),t.addSpecial({pos:new B(16.2,22.2,19),text:`I can see everyone from here`,range:45})}{let e=new K(10,6,10,.1);e.box(3,0,3,5,7,5,3025448),e.box(1,6,1,8,7,8,3810840),e.set(4,6,4,13210965),e.set(4,7,4,15262920);let n=new W(uu(e,{centre:!0}),Bd);n.position.set(-21,.15,31.2);let r=new K(5,9,5,.1);r.box(0,0,0,1,4,1,3025448),r.box(4,0,0,5,4,1,3025448),r.box(0,0,4,1,4,5,3025448),r.box(4,0,4,5,4,5,3025448),r.box(0,4,0,5,5,5,3810840),r.box(0,5,4,5,9,5,3810840);let i=new W(uu(r,{centre:!0}),Bd);i.position.set(-21,.15,31.95),i.rotation.y=Math.PI,this.group.add(n,i),t.addSpecial({pos:new B(-21,1.7,31.6),text:`they said they'd come`,range:14})}{let e=document.createElement(`canvas`);e.width=32,e.height=44;let t=e.getContext(`2d`);t.fillStyle=`#1e2632`,t.fillRect(0,0,32,44),t.fillStyle=`#26303e`;for(let e=22;e<44;e+=3)t.fillRect(0,e,32,1);ug(t,`FLOOD`,2,4,`#d6dde6`),ug(t,`LINES`,2,13,`#d6dde6`),ug(t,`LIVE`,2,26,`#c99555`),t.fillStyle=`#ece4d2`,t.fillRect(17,0,15,44),t.fillStyle=`#d2c6ae`,t.fillRect(15,30,3,6);let n=new Ri(e);n.magFilter=r,n.minFilter=r,n.generateMipmaps=!1;let i=new W(new Qi(.62,.86),new Ur({map:n,opacity:0}));i.position.set(-15.27,1.7,33),i.rotation.y=-Math.PI/2,this.group.add(i)}let s=n.agents.filter(e=>!e.lane&&Math.hypot(e.pos.x+21.4,e.pos.z-26.5)<2.6);s[0]&&(s[0].thought=`he looks tired`);let c=n.addStander(this.buskerPos.clone(),-Math.PI/2-.4);if(c){this.busker=c;let e=new K(3,3,9,.1);e.box(0,0,0,3,3,4,9396534),e.box(1,1,4,2,2,9,3810840);let t=new W(uu(e,{centre:!0}),Bd);t.position.copy(this.buskerPos).add(new B(.18,.95,-.05)),t.rotation.set(.2,-Math.PI/2-.4+Math.PI/2,.9),this.group.add(t)}let l=[[`SUMMER IN`,`LISBON`],[`NEW SEASON`,`NEW YOU`],[`YOUR PENSION,`,`SORTED`],[`WAKE UP IN`,`CORNWALL`],[`FAST. FRESH.`,`FINALLY.`],[`SAY YES`,`TO MORE`],[`LIVE A`,`LITTLE`],[`THE CITY`,`IS YOURS`]],u=[[`HAVE YOU`,`TRIED?`],[`IS THIS`,`IT?`],[`WHAT DO YOU`,`NEED TO KNOW?`],[`WHERE ARE`,`YOU GOING?`],[`WHO WOULD`,`YOU CALL?`],[`ARE YOU`,`STILL HERE?`]];Wp.forEach((e,t)=>{let n=document.createElement(`canvas`);n.width=64,n.height=32;let i=new Ri(n);i.magFilter=r,i.minFilter=r,i.generateMipmaps=!1;let a=new W(new Qi(2.2,1.1),new Ur({map:i,opacity:0})),o=new B(-e.side,0,0);a.rotation.y=e.side<0?Math.PI/2:-Math.PI/2,a.position.copy(e.pos).addScaledVector(o,.3),a.userData.base=a.position.clone(),this.group.add(a);let s=e.along>28,c=e.along>12,d=e=>{let r=n.getContext(`2d`);if(r.fillStyle=e===2?`#fffbe8`:e===1?`#ece4d2`:[`#7a4030`,`#26303e`,`#3c6a2a`,`#8f6136`][t%4],r.fillRect(0,0,64,32),e===0){let e=l[t%l.length];ug(r,e[0],3,5,`#fff0c8`),ug(r,e[1],3,16,`#fff0c8`)}if(e===1){let e=u[t%u.length];ug(r,e[0],3,5,`#26303e`),ug(r,e[1],3,16,`#26303e`)}i.needsUpdate=!0};d(0),this.adverts.push({mesh:a,draw:d,flipped:!1,flipAt:0,mode:s?2:+!!c})})}update(e,t,n,r,i,a,o,s,c,l,u,d){let f=a===`lobby`||a===`title`,p=sf(i.position.x,i.position.z),m=this.lobbyReflection;m.group.visible=f&&p.u<10,m.group.visible&&(m.group.position.set(2*of(0,0,0).x-o.x,o.y-1.6,o.z),m.group.rotation.y=-(s+Math.PI),m.pose(n*4.3,c)),this.glassRain.uniforms.uTime.value=n,f&&this.rainUpAt<0&&p.u<7&&new B(0,0,-1).applyQuaternion(i.quaternion).x>.8&&(this.rainUpAt=n+.8);let h=this.rainUpAt>0&&n>this.rainUpAt&&n<this.rainUpAt+1.1;if(this.glassRain.uniforms.uDir.value+=((h?-1:1)-this.glassRain.uniforms.uDir.value)*Math.min(1,r*12),!e)return;let g=t=>e.resolve(t),_=t-g(`post1.1+3`);l.special=_>0&&_<5.5?[`--:--`,`Yesterday`,`0`,`Delayed`]:null,l.special&&i.position.y>-1.5&&(this.yesterdaySeen=!0),u.material.uniforms.uHeadDown.value=cg((t-g(`verse2.1`))/.8)*(1-cg((t-g(`pre2`))/2));for(let e of this.adverts)zl(e.mesh.position.copy(e.mesh.userData.base));for(let e of this.adverts)e.mode===0||e.flipped||e.mesh.position.distanceTo(i.position)<4.5&&(e.flipped=!0,e.flipAt=n);for(let e of this.adverts){if(!e.flipped||n-e.flipAt>.6)continue;let t=n-e.flipAt;e.draw(t>.5||Math.floor(t*14)%2?e.mode:0)}if(!this.pairDone&&t>6&&t<g(`pre1`))for(let e of u.agents){if(!e.lane||e.ride||e.pos.distanceTo(i.position)>13)continue;let t=u.agents.find(t=>t!==e&&t.lane&&t.dir!==e.dir&&t.pos.distanceTo(e.pos)<1.3);if(!t)continue;let n=e.pos.clone().project(i);if(!(n.z>1||Math.abs(n.x)>.7)){this.thoughts.spawnFor(e,[],{...d},!1,`is he looking at me`),this.thoughts.spawnFor(t,[],{...d},!1,`she looks like she's having a worse day than me`),this.pairDone=!0;break}}}};function ug(e,t,n,r,i){e.fillStyle=i;let a=n;for(let n of t){if(n===` `){a+=4;continue}let t=pd[n];if(!t)a+=4;else{for(let n=0;n<7;n++)for(let i=0;i<t.w;i++)t.rows[n]?.[i]===`#`&&e.fillRect(a+i,r+n,1,1);a+=t.w+1}}}var dg=.45,fg=e=>e.currentTime,pg=class{ctx;world;noise;beds={};hall;hallIn;clockPan;nextTick=0;nextClack=0;nextClink=0;nextBeat=0;nextEsc=0;lastBurst=0;swell=null;fired=new Set;zone=0;ring=null;rushBed=null;breathIn=!1;breathOut=!1;started=!1;constructor(e){this.ctx=e,this.world=new GainNode(e,{gain:0}),this.world.connect(e.destination),this.noise=mg(e,5),this.hall=new ConvolverNode(e,{buffer:hg(e,2.8,2.2)}),this.hallIn=new GainNode(e,{gain:0}),this.hallIn.connect(this.hall).connect(new GainNode(e,{gain:.9})).connect(this.world),this.clockPan=new PannerNode(e,{panningModel:`HRTF`,refDistance:4,rolloffFactor:.6}),this.clockPan.connect(this.hallIn)}start(){if(this.started)return;this.started=!0;let e=this.ctx,t=(t,n,r,i=!1)=>{let a=new AudioBufferSourceNode(e,{buffer:this.noise,loop:!0}),o=new GainNode(e,{gain:0}),s=a;for(let e of n)s.connect(e),s=e;s.connect(new GainNode(e,{gain:r})).connect(o),o.connect(i?this.hallIn:this.world),a.start(0,Math.random()*4),this.beds[t]=o},n=new GainNode(e,{gain:.6}),r=new OscillatorNode(e,{frequency:.37});r.connect(new GainNode(e,{gain:.35})).connect(n.gain),r.start(),t(`murmur`,[new BiquadFilterNode(e,{type:`bandpass`,frequency:520,Q:1.1}),new BiquadFilterNode(e,{type:`peaking`,frequency:1300,gain:6}),n],.5),t(`hallMurmur`,[new BiquadFilterNode(e,{type:`bandpass`,frequency:420,Q:.8})],.4,!0),t(`pour`,[new BiquadFilterNode(e,{type:`highpass`,frequency:1100}),new BiquadFilterNode(e,{type:`lowpass`,frequency:6500})],.5),t(`roofRain`,[new BiquadFilterNode(e,{type:`lowpass`,frequency:900})],.4,!0),t(`rumble`,[new BiquadFilterNode(e,{type:`lowpass`,frequency:110})],1.4),t(`wind`,[new BiquadFilterNode(e,{type:`bandpass`,frequency:650,Q:.5})],.5),t(`patter`,[new BiquadFilterNode(e,{type:`highpass`,frequency:2400})],.35);let i=new OscillatorNode(e,{type:`sawtooth`,frequency:50}),a=new GainNode(e,{gain:0});i.connect(new BiquadFilterNode(e,{type:`lowpass`,frequency:170})).connect(new GainNode(e,{gain:.25})).connect(a).connect(this.world),i.start(),this.beds.hum=a;let o=new OscillatorNode(e,{frequency:41}),s=new GainNode(e,{gain:0});o.connect(new GainNode(e,{gain:.35})).connect(s).connect(this.world),o.start(),this.beds.drone=s,this.world.gain.setTargetAtTime(1,fg(e),1.5)}set(e,t,n=.4){this.beds[e]?.gain.setTargetAtTime(Math.max(0,t),fg(this.ctx),n)}update(e){if(!this.started)return;let t=this.ctx,n=e.place,r=dg*(1-.5*Math.min(1,e.songVol))*(1-.65*e.burst)*(1-.9*this.zone)*(1-(e.out??0));this.world.gain.setTargetAtTime(r,fg(t),.25);let i=n===`street`,a=n===`market`,o=n===`station`,s=n===`below`||n===`escalator`,c=n===`carriage`,l=Math.max(0,1-e.pubDist/12);this.set(`murmur`,((i?.18:0)+(a?.2+.55*l:0)+(c?.06:0))*(1-e.hush),e.hush>.5?.05:.5),this.set(`hallMurmur`,o?.9:s?.15:0),this.set(`pour`,a?Math.max(0,1-e.mouthDist/6)*.9:0),this.set(`roofRain`,o?.6*e.rain:0),this.set(`hum`,+(n===`escalator`),.8);let u=Math.min(1,e.trainSpeed/28);this.set(`rumble`,c?.08+.5*u:0,e.stalled?.05:.3),this.set(`drone`,c?.15+.4*u:0,e.stalled?.05:.5),this.set(`wind`,c&&e.open?.25+.6*u:0,.6),this.set(`patter`,c&&e.open?.5*e.rain:0,.6);let d=e.t;a&&l>.3&&e.hush<.5&&d>this.nextClink&&(this.clink(),this.nextClink=d+.6+Math.random()*2.2),(o||e.clockFlick>0)&&(this.clockPan.positionX.value=e.clockPos.x,this.clockPan.positionY.value=e.clockPos.y,this.clockPan.positionZ.value=e.clockPos.z,d>this.nextTick&&(o||n===`below`)&&(this.tick(),this.nextTick=d+1/(1+11*e.clockFlick*e.clockFlick))),n===`escalator`&&d>this.nextEsc&&(this.clack(.18,1800),this.nextEsc=d+.55),c&&e.trainSpeed>1&&d>this.nextClack&&(this.clack(.5,700),setTimeout(()=>this.clack(.45,650),85),this.nextClack=d+Math.max(.28,19/e.trainSpeed)),c&&e.stalled&&d>this.nextBeat&&(this.beat(),this.nextBeat=d+1),e.burst>.05&&this.lastBurst<=.05&&this.startSwell(),e.burst<=.05&&this.lastBurst>.05&&this.endSwell(),this.lastBurst=e.burst}zoneOut(e,t=0,n=-1){if(this.zone=e,e>0&&!this.rushBed){let e=new AudioBufferSourceNode(this.ctx,{buffer:this.noise,loop:!0}),t=new BiquadFilterNode(this.ctx,{type:`bandpass`,frequency:700,Q:.7}),n=new GainNode(this.ctx,{gain:0});e.connect(t).connect(n).connect(this.ctx.destination),e.start(),this.rushBed={src:e,f:t,gain:n}}if(this.rushBed&&(this.rushBed.gain.gain.setTargetAtTime(.09*t,fg(this.ctx),.25),this.rushBed.f.frequency.setTargetAtTime(500+1800*t,fg(this.ctx),.4),e===0&&(this.rushBed.src.stop(fg(this.ctx)+.5),this.rushBed=null)),n>=0&&!this.breathIn&&(this.breathIn=!0,this.breathe(!0)),n>=1&&!this.breathOut&&(this.breathOut=!0,this.breathe(!1)),e===0&&(this.breathIn=this.breathOut=!1),e>0&&!this.ring){let e=new OscillatorNode(this.ctx,{frequency:3950}),t=new GainNode(this.ctx,{gain:0});e.connect(t).connect(this.ctx.destination),e.start(),this.ring={osc:e,gain:t}}this.ring&&(this.ring.gain.gain.setTargetAtTime(e>0?.012*Math.min(1,e*1.5):0,fg(this.ctx),e>0?.8:.03),e===0&&(this.ring.osc.stop(fg(this.ctx)+.3),this.ring=null))}breathe(e){let t=fg(this.ctx),n=e?1.2:1.6,r=new AudioBufferSourceNode(this.ctx,{buffer:this.noise}),i=new BiquadFilterNode(this.ctx,{type:`bandpass`,frequency:e?1400:900,Q:1.2});i.frequency.linearRampToValueAtTime(e?2e3:600,t+n);let a=new GainNode(this.ctx,{gain:0});a.gain.linearRampToValueAtTime(.16,t+n*(e?.75:.25)),a.gain.linearRampToValueAtTime(0,t+n),r.connect(i).connect(a).connect(this.ctx.destination),r.start(t,Math.random()*3,n+.1)}once(e,t){this.fired.has(e)||(this.fired.add(e),t())}env(e,t,n,r,i=this.world,a=fg(this.ctx)){let o=new GainNode(this.ctx,{gain:0});return e.connect(o).connect(i),o.gain.setValueAtTime(0,a),o.gain.linearRampToValueAtTime(t,a+n),o.gain.exponentialRampToValueAtTime(1e-4,a+n+r),o}burstNoise(e,t,n,r,i,a){let o=new AudioBufferSourceNode(this.ctx,{buffer:this.noise});o.connect(e),this.env(e,t,n,r,i,a),o.start(a??fg(this.ctx),Math.random()*4,n+r+.1)}clink(){let e=new OscillatorNode(this.ctx,{frequency:2400+Math.random()*1600});this.env(e,.05,.002,.25),e.start(),e.stop(fg(this.ctx)+.3)}tick(){this.burstNoise(new BiquadFilterNode(this.ctx,{type:`bandpass`,frequency:2600,Q:3}),.5,.001,.04,this.clockPan)}clack(e,t){this.burstNoise(new BiquadFilterNode(this.ctx,{type:`bandpass`,frequency:t,Q:2}),e*.4,.002,.07)}beat(){for(let[e,t]of[[0,.5],[.24,.32]]){let n=new OscillatorNode(this.ctx,{frequency:48});this.env(n,t,.01,.18,this.world,fg(this.ctx)+e),n.start(fg(this.ctx)+e),n.stop(fg(this.ctx)+e+.3)}}chime(){let e=fg(this.ctx);[659,523,392].forEach((t,n)=>{let r=new OscillatorNode(this.ctx,{frequency:t});this.env(r,.12,.01,1.4,this.hallIn,e+n*.45),r.start(e+n*.45),r.stop(e+n*.45+1.6)});for(let t=0;t<16;t++){let n=e+1.9+t*.16+Math.random()*.05;this.burstNoise(new BiquadFilterNode(this.ctx,{type:`bandpass`,frequency:500+Math.random()*900,Q:4}),.18,.03,.12,this.hallIn,n)}}doors(){let e=fg(this.ctx);for(let t=0;t<3;t++){let n=new OscillatorNode(this.ctx,{type:`square`,frequency:1040}),r=new BiquadFilterNode(this.ctx,{type:`lowpass`,frequency:2200});n.connect(r),this.env(r,.06,.005,.14,this.world,e+t*.32),n.start(e+t*.32),n.stop(e+t*.32+.2)}this.burstNoise(new BiquadFilterNode(this.ctx,{type:`highpass`,frequency:1800}),.25,.05,.6,this.world,e+1.1)}clunk(){this.burstNoise(new BiquadFilterNode(this.ctx,{type:`lowpass`,frequency:160}),1.2,.005,.9)}thunder(e=.6){let t=fg(this.ctx)+e;this.burstNoise(new BiquadFilterNode(this.ctx,{type:`lowpass`,frequency:140}),.9,.12,3.2,this.world,t),this.burstNoise(new BiquadFilterNode(this.ctx,{type:`lowpass`,frequency:420}),.35,.03,1.2,this.world,t)}buzz(){let e=fg(this.ctx);for(let t of[0,.75]){let n=new OscillatorNode(this.ctx,{type:`square`,frequency:150}),r=new BiquadFilterNode(this.ctx,{type:`lowpass`,frequency:400});n.connect(r),this.env(r,.14,.01,.42,this.world,e+t),n.start(e+t),n.stop(e+t+.5)}}startSwell(){let e=this.ctx,t=new OscillatorNode(e,{frequency:46}),n=new GainNode(e,{gain:0});t.connect(n).connect(e.destination),t.frequency.setValueAtTime(46,fg(e)),t.frequency.linearRampToValueAtTime(69,fg(e)+2.5),n.gain.setTargetAtTime(.16,fg(e),.6),t.start(),this.swell={osc:t,gain:n},this.burstNoise(new BiquadFilterNode(e,{type:`bandpass`,frequency:300,Q:.4}),.35,.6,1.8,e.destination)}endSwell(){if(!this.swell)return;let{osc:e,gain:t}=this.swell;t.gain.setTargetAtTime(0,fg(this.ctx),.5),e.stop(fg(this.ctx)+3),this.swell=null}};function mg(e,t){let n=e.createBuffer(1,e.sampleRate*t,e.sampleRate),r=n.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1;return n}function hg(e,t,n){let r=Math.floor(e.sampleRate*t),i=e.createBuffer(2,r,e.sampleRate);for(let e=0;e<2;e++){let t=i.getChannelData(e);for(let e=0;e<r;e++)t[e]=(Math.random()*2-1)*(1-e/r)**n}return i}var gg=1.62,_g=1.35,vg=.28,yg=.78,bg=class{space;pos=new B;yaw=0;pitch=0;vel=new jt;eyeY=0;walked=0;constructor(e){this.space=e}place(e,t){this.pos.copy(e),this.pos.y=this.space.floor(e.x,e.z),this.eyeY=this.pos.y+gg,this.yaw=t,this.vel.set(0,0)}update(e,t,n){let r=-Math.sin(this.yaw),i=-Math.cos(this.yaw),a=Math.cos(this.yaw),o=-Math.sin(this.yaw),s=(r*t.y+a*t.x)*_g,c=(i*t.y+o*t.x)*_g,l=1-Math.exp(-e*6);this.vel.x+=(s-this.vel.x)*l,this.vel.y+=(c-this.vel.y)*l;let u=this.pos.x+this.vel.x*e,d=this.pos.z+this.vel.y*e,f=this.pos.clone();this.free(u,d)?(this.pos.x=u,this.pos.z=d):this.free(u,this.pos.z)?this.pos.x=u:this.free(this.pos.x,d)&&(this.pos.z=d),this.walked+=Math.hypot(this.pos.x-f.x,this.pos.z-f.z),this.pos.y=this.space.floor(this.pos.x,this.pos.z),this.eyeY+=(this.pos.y+gg-this.eyeY)*(1-Math.exp(-e*9));let p=this.vel.length()/_g,m=this.walked/yg*Math.PI;n.position.set(this.pos.x,this.eyeY+(Math.abs(Math.sin(m))*.035-.017)*p,this.pos.z),n.rotation.set(this.pitch,this.yaw,Math.sin(m)*.004*p)}free(e,t){let n=this.space;return!n.walkable(e+vg,t)||!n.walkable(e-vg,t)||!n.walkable(e,t+vg)||!n.walkable(e,t-vg)?!1:Math.abs(n.floor(e,t)-this.pos.y)<.3}},xg=class{move={x:0,y:0};keys=new Set;stick=null;stickZone=.4;stickEnabled=!0;keysOff=!1;constructor(e){addEventListener(`keydown`,e=>this.keys.add(e.code)),addEventListener(`keyup`,e=>this.keys.delete(e.code)),addEventListener(`blur`,()=>this.keys.clear()),e.addEventListener(`pointerdown`,e=>{e.pointerType!==`touch`||!this.stickEnabled||e.clientX>innerWidth*this.stickZone||(this.stick={id:e.pointerId,x0:e.clientX,y0:e.clientY,x:e.clientX,y:e.clientY})}),e.addEventListener(`pointermove`,e=>{this.stick?.id===e.pointerId&&(this.stick.x=e.clientX,this.stick.y=e.clientY)});let t=e=>{this.stick?.id===e.pointerId&&(this.stick=null)};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t)}ownsTouch(e){return this.stickEnabled&&e<=innerWidth*this.stickZone}has(...e){return e.some(e=>this.keys.has(e))}update(){let e=0,t=0;if(this.keysOff||(this.has(`KeyW`,`ArrowUp`)&&(t+=1),this.has(`KeyS`,`ArrowDown`)&&--t,this.has(`KeyD`,`ArrowRight`)&&(e+=1),this.has(`KeyA`,`ArrowLeft`)&&--e),this.stick){let n=Math.min(innerWidth,innerHeight)*.12;e+=Math.max(-1,Math.min(1,(this.stick.x-this.stick.x0)/n)),t-=Math.max(-1,Math.min(1,(this.stick.y-this.stick.y0)/n))}let n=Math.hypot(e,t);return n>1&&(e/=n,t/=n),this.move.x=e,this.move.y=t,this.move}},Sg=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Cg=`
#define NW ${ld.length}
#define NF ${ud.length}
uniform sampler2D tScene;
uniform vec2 uRes;
uniform vec3 uWorld[NW];
uniform vec3 uFlame[NF];
uniform float uVignette;   // 0..1 extra darkening at the edges
uniform float uSqueeze;    // 0..1 horizontal pinch toward centre
uniform float uFlash;      // lightning, 0..1
uniform float uDesat;      // 0..1
uniform float uCold;       // 0..1 push toward cold blue-grey
uniform float uFade;       // 0 = black, 1 = full image
uniform float uShiver;     // screen shake amount in low-res pixels
uniform float uErode;      // 0..1: the image dissolves in from its edges (memories fading)
uniform float uDim;        // 0..1: the world recedes (everything but the flame)
uniform float uTime;
varying vec2 vUv;

float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
float bayer8(vec2 a) { return bayer4(0.5 * a) * 0.25 + bayer2(a); }

const vec3 W = vec3(0.30, 0.59, 0.11);
float dist2(vec3 a, vec3 b) { vec3 d = a - b; return dot(d * d, W); }

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}

// Ordered dither between the two nearest palette entries.
vec3 quantWorld(vec3 c, float t) {
  float d1 = 1e9, d2 = 1e9; vec3 c1 = vec3(0.0), c2 = vec3(0.0);
  for (int i = 0; i < NW; i++) {
    float d = dist2(c, uWorld[i]);
    if (d < d1) { d2 = d1; c2 = c1; d1 = d; c1 = uWorld[i]; }
    else if (d < d2) { d2 = d; c2 = uWorld[i]; }
  }
  vec3 e = c2 - c1;
  float k = clamp(dot(c - c1, e) / max(dot(e, e), 1e-6), 0.0, 1.0);
  return t < k ? c2 : c1;
}
vec3 quantFlame(vec3 c, float t) {
  float d1 = 1e9, d2 = 1e9; vec3 c1 = vec3(0.0), c2 = vec3(0.0);
  for (int i = 0; i < NF; i++) {
    float d = dist2(c, uFlame[i]);
    if (d < d1) { d2 = d1; c2 = c1; d1 = d; c1 = uFlame[i]; }
    else if (d < d2) { d2 = d; c2 = uFlame[i]; }
  }
  vec3 e = c2 - c1;
  float k = clamp(dot(c - c1, e) / max(dot(e, e), 1e-6), 0.0, 1.0);
  return t < k ? c2 : c1;
}

void main() {
  vec2 px = floor(vUv * uRes);
  vec2 uv = vUv;
  // squeeze: pinch the image toward the centre line
  uv.x = 0.5 + (uv.x - 0.5) * (1.0 + uSqueeze * 0.12 * (1.0 - pow(abs(uv.y - 0.5) * 2.0, 2.0)));
  uv += uShiver * vec2(sin(uTime * 91.0), cos(uTime * 77.0)) / uRes;
  vec4 src = texture2D(tScene, uv);
  vec3 c = src.rgb;

  // Only pixels the flame marked in alpha (the flame, its halo and embers, and
  // their reflections) may use the flame palette. Anything it lights stays in
  // the world's colours, so nothing else in the world uses that blue.
  vec3 hsv = rgb2hsv(c);
  bool flame = src.a > 0.35 && hsv.x > 0.52 && hsv.x < 0.7 && hsv.y > 0.45 && hsv.z > 0.15;

  if (!flame) {
    c *= 1.0 - 0.55 * uDim;
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(c, vec3(l), uDesat);
    c = mix(c, vec3(l * 0.8, l * 0.92, l * 1.08), uCold);
  }
  c += uFlash * vec3(0.55, 0.6, 0.7) * (0.35 + c);

  vec2 q = vUv - 0.5;
  float v = dot(q, q);
  c *= 1.0 - clamp(v * (0.55 + uVignette * 3.2), 0.0, 1.0);
  c *= uFade;

  float t = bayer8(px);
  vec3 o = flame ? quantFlame(c, t) : quantWorld(c, t);
  // memories fading: the picture crumbles away from the edges
  float edge = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
  if (!flame && t < uErode * (1.0 - smoothstep(0.0, 0.32, edge)) * 1.2) o = uWorld[0];
  gl_FragColor = vec4(o, 1.0);
}
`,wg=class{target;uniforms={tScene:{value:null},uRes:{value:new jt(320,180)},uWorld:{value:dd(ld)},uFlame:{value:dd(ud)},uVignette:{value:0},uSqueeze:{value:0},uFlash:{value:0},uDesat:{value:0},uCold:{value:0},uFade:{value:1},uShiver:{value:0},uErode:{value:0},uDim:{value:0},uTime:{value:0}};scene=new Ln;cam=new za(-1,1,1,-1,0,1);constructor(e,t){this.target=new Qt(e,t,{minFilter:r,magFilter:r,depthBuffer:!0,stencilBuffer:!0}),this.uniforms.tScene.value=this.target.texture;let n=new ca({vertexShader:Sg,fragmentShader:Cg,uniforms:this.uniforms,depthTest:!1,depthWrite:!1});this.scene.add(new W(new Qi(2,2),n)),this.setSize(e,t)}setSize(e,t){this.target.setSize(e,t),this.uniforms.uRes.value.set(e,t)}render(e,t,n,r){this.uniforms.uTime.value=r,e.setRenderTarget(this.target),e.render(t,n),e.setRenderTarget(null),e.render(this.scene,this.cam)}};function Tg(e,t){let n=(e,t)=>(((e^t)&1)*2+(t&1))/4;return n(e>>2,t>>2)/16+n(e>>1,t>>1)/4+n(e,t)}var Eg=class{canvas;ctx;img;px;w=320;h=180;constructor(){this.canvas=document.createElement(`canvas`),this.canvas.id=`overlay`,this.ctx=this.canvas.getContext(`2d`),document.body.appendChild(this.canvas),this.setSize(320,180)}setSize(e,t){this.w=e,this.h=t,this.canvas.width=e,this.canvas.height=t,this.img=this.ctx.createImageData(e,t),this.px=new Uint32Array(this.img.data.buffer)}clear(){this.px.fill(0)}plot(e,t,n,r){e<0||t<0||e>=this.w||t>=this.h||r<1&&Tg(e,t)>=r||(this.px[t*this.w+e]=n)}text(e,t,n,r,i=1,a={}){let o=Dg(r),s=Dg(329482),c=a.scale??1,l=Math.round(t),u=Math.round(n),d=0;for(let t of hd(e)){if(t===` `){l+=4*c,d++;continue}let e=pd[t]??pd[`?`];if(!a.keep||a.keep(d)){for(let t=0;t<e.rows.length;t++)for(let n=0;n<e.w;n++)if(e.rows[t][n]===`#`)for(let e=0;e<c;e++)for(let r=0;r<c;r++)a.drop!==!1&&this.plot(l+n*c+e+1,u+t*c+r+1,s,i),this.plot(l+n*c+e,u+t*c+r,o,i)}l+=(e.w+1)*c,d++}}rect(e,t,n,r,i){let a=Dg(i);for(let i=Math.max(0,Math.round(t));i<Math.min(this.h,Math.round(t+r));i++)for(let t=Math.max(0,Math.round(e));t<Math.min(this.w,Math.round(e+n));t++)this.px[i*this.w+t]=a}label(e,t,n,r,i=1,a=r,o=!1){let s=o?2:4,c=gd(e)+s*2,l=Math.max(1,Math.min(this.w-c-1,Math.round(t-c/2))),u=Math.round(n);return this.panel(l,u,c,o?11:13,a,i),this.text(e,l+s,u+(o?2:3),r,i,{drop:!1}),c}panel(e,t,n,r,i,a=1){let o=Dg(329482),s=Dg(i),c=Math.round(e),l=Math.round(t);for(let e=l;e<l+r;e++)for(let t=c;t<c+n;t++){let i=e===l||e===l+r-1||t===c||t===c+n-1;this.plot(t,e,i?s:o,a)}}line(e,t,n,r,i,a=1){let o=Dg(i),s=Math.ceil(Math.max(Math.abs(n-e),Math.abs(r-t)));for(let i=0;i<=s;i++){let c=s?i/s:0;this.plot(Math.round(e+(n-e)*c),Math.round(t+(r-t)*c),o,a)}}wash(e,t){if(t<=0)return;let n=Dg(e);for(let e=0;e<this.h;e++)for(let r=0;r<this.w;r++)Tg(r,e)<t&&!this.px[e*this.w+r]&&(this.px[e*this.w+r]=n)}shade(e){let t=Dg(329482);for(let n=0;n<this.h;n++)for(let r=0;r<this.w;r++)Tg(r,n)<e&&(this.px[n*this.w+r]=t)}flush(){this.ctx.putImageData(this.img,0,0)}};function Dg(e){return 255<<24|(e&255)<<16|e&65280|e>>16&255}var Og=.8,kg=.9,Ag=12371667,jg=class{visible=!0;draw(e,t,n){if(this.visible)for(let r of t.linesAt(n,kg)){let t=Math.min(1,(n-r.start)/Og),i=n>r.end?(n-r.end)/kg:0,a=Mg(t)*(1-Mg(i));if(a<=.01)continue;let o=_d(r.text,e.w-24),s=n>r.end?Mg(Math.min(1,(n-r.end)/.35))*12:0,c=(1-Mg(t))*2-s-Mg(i)*3,l=e.h-16-(o.length-1)*11+c;o.forEach((t,n)=>e.text(t,(e.w-gd(t))/2,l+n*11,Ag,a))}}},Mg=e=>e*e*(3-2*e),Ng=[{section:`verse1`,text:`I know what your saying`,start:15.99,end:19.333},{section:`verse1`,text:`But I don't want to leave you alone`,start:19.722,end:23.281},{section:`verse1`,text:`I know what your hearing`,start:23.583,end:27.042},{section:`verse1`,text:`A ticking time bomb ready to blow`,start:27.234,end:30.851},{section:`pre1`,text:`Thoughts removing`,start:31.071,end:32.83},{section:`pre1`,text:`Crowds are moving`,start:32.981,end:34.74},{section:`pre1`,text:`pressure between your eyes`,start:34.862,end:38.879},{section:`pre1b`,text:`You will compromise`,start:39.012,end:44.179},{section:`pre1b`,text:`You will count the lies`,start:44.272,end:53.42},{section:`chorus1`,text:`I want you to hold on`,start:53.763,end:56.927},{section:`chorus1`,text:`I want to you hold on`,start:57.362,end:60.897},{section:`chorus1`,text:`I want you to hold on`,start:61.089,end:64.874},{section:`chorus1`,text:`I want you to hold on`,start:64.99,end:68.746},{section:`post1`,text:`I cannot remove you`,start:68.85,end:72.362},{section:`post1`,text:`And time is ticking away`,start:72.507,end:85.644},{section:`hook1`,text:`My Final fear`,start:85.731,end:92.947},{section:`hook1`,text:`My Final fear`,start:93.126,end:100.603},{section:`verse2`,text:`I'm going to dig now`,start:121.745,end:125.187},{section:`verse2`,text:`Bury my head far below`,start:125.431,end:129.03},{section:`verse2`,text:`I'm going to find out`,start:129.152,end:132.873},{section:`verse2`,text:`All that I need to know`,start:133.047,end:136.681},{section:`pre2`,text:`I'm running out of options`,start:136.809,end:139.566},{section:`pre2`,text:`Memories fade away`,start:139.677,end:142.347},{section:`pre2`,text:`Losing track of yesterday`,start:142.463,end:150.05},{section:`pre2b`,text:`I hope you know how hard I've tried`,start:150.834,end:158.438},{section:`pre2b`,text:`To keep these thoughts at bay`,start:158.595,end:165.991},{section:`pre2b`,text:`Shivering till they subside`,start:166.118,end:173.427},{section:`pre2b`,text:`As I hear them say "he's close to his"`,start:173.589,end:181.42},{section:`hook2`,text:`Final fear`,start:184.131,end:191.051},{section:`hook2`,text:`Final fear`,start:191.364,end:200.67},{section:`bridge`,text:`Find a way out find it alright`,start:220.488,end:225.654},{section:`bridge`,text:`Find a way out maybe one night`,start:225.782,end:228.005},{section:`bridge`,text:`Find a way out find it some way`,start:228.133,end:231.976},{section:`bridge`,text:`Find a way out maybe today`,start:232.098,end:234.571},{section:`bridge`,text:`You cannot leave me this way`,start:234.739,end:237.996},{section:`bridge`,text:`You cannot leave me the same`,start:238.164,end:241.769},{section:`bridge`,text:`Find a way out find it alright`,start:241.972,end:245.542},{section:`bridge`,text:`Find a way out maybe this night`,start:245.74,end:249.176},{section:`bridge`,text:`This night`,start:249.304,end:262.441},{section:`outro`,text:`No more waiting`,start:265.471,end:267.125},{section:`outro`,text:`No more waiting`,start:267.369,end:273.859}],Pg={_comment:`One-off effects keyed to the song. 'at' / 'until' use the same forms as path keys in sections.json (seconds, 'song', 'end', a section id, or 'section.N' for its Nth line). 'for' is a duration in seconds when there's no 'until'. 'release' (seconds) is how long a ramped cue (flood, pressure) takes to ease off after it ends.`,cues:[{at:`verse1.3`,cue:`flare`,for:2.4,note:`A ticking time bomb ready to blow`},{at:`verse1.3`,cue:`windows`,for:1.6,note:`every lit office window flickers at once`},{at:`chorus1`,cue:`lightning`,note:`start of the chorus`},{at:`pre2.1`,cue:`gutter`,until:`pre2b`,note:`Memories fade away / Losing track of yesterday`},{at:`pre2b.2`,cue:`gutter`,for:7,note:`Shivering till they subside`},{at:`pre2b`,cue:`lightning`,note:`the carriage comes apart in the flash`},{at:`bridge`,cue:`lightning`,note:`breaking out of the tunnel`},{at:`pre1.2`,cue:`pressure`,until:`chorus1`,release:8,note:`pressure between your eyes: vignette and squeeze build, ease off leaving the pub`},{at:`post1.1`,cue:`boards-flick`,until:`hook1`,release:.2,note:`time is ticking away: boards flick faster and faster, clocks speed up`},{at:`hook1`,cue:`boards-blank`,until:`verse2`,note:`My Final fear: every board goes blank at once`},{at:`hook1`,cue:`flicker`,note:`...and the lights flicker once`},{at:`hook2`,cue:`blackout`,until:`bridge`,release:1.2,note:`the train stops dead; carriage lights cut out`},{at:`hook2`,cue:`underwater`,until:`bridge`,note:`low-pass closes: the song sounds underwater`}]},Fg={_comment:`Scene sections, derived from the lyric sections. A section starts on its first lyric line (intro starts at 0). 'guess' is a placeholder start, only used while lyrics.json is unsynced. 'path' says where on the route the player is at moments of the song: 'at' is seconds, 'song', 'end', a section id, or 'section.N' (its Nth line, 0-based); 's' is a named route mark (see world/journey.ts: door, doorExit, lime, arcade, pub, crossing, exit, lloyds, gate, concourse, escalatorTop, escStart, escalatorBottom, doorway, platform, trainDoor, inside, aisle, aisleEnd, seat), optionally +/- metres, or plain metres.`,sections:[{id:`intro`,guess:0,location:`fenchurch-street`,gait:`walk`,rain:.6},{id:`verse1`,guess:16,location:`fenchurch-street`,gait:`walk`,rain:.65},{id:`pre1`,guess:31,location:`leadenhall-pub`,gait:`walk`,rain:.7,stop:`pub`},{id:`pre1b`,guess:39,location:`leadenhall-pub`,gait:`walk`,rain:.75,stop:`pub`},{id:`chorus1`,guess:53.8,location:`lloyds`,gait:`walk`,rain:.35},{id:`post1`,guess:68.8,location:`liverpool-street`,gait:`walk`,rain:.6,stop:`concourse`},{id:`hook1`,guess:85.7,location:`liverpool-street`,gait:`walk`,rain:.6},{id:`verse2`,guess:121.7,location:`escalator`,gait:`glide`,rain:0},{id:`pre2`,guess:136.8,location:`train-tunnel`,gait:`carriage`,rain:0},{id:`pre2b`,guess:150.8,location:`train-tunnel`,gait:`carriage`,rain:0},{id:`hook2`,guess:184.1,location:`stalled-tunnel`,gait:`still`,rain:0,stop:`stalled`},{id:`bridge`,guess:220.5,location:`open-air-train`,gait:`carriage`,rain:1},{id:`outro`,guess:265.5,location:`window-seat`,gait:`still`,rain:.4}],path:[{at:`song`,s:`door`,note:`song starts as the player enters the revolving door`},{at:5.5,s:`doorExit`,note:`the door has turned them out onto Fenchurch Street`},{at:`verse1`,s:`lime-5`,note:`verse 1 begins once they're properly out in the street`},{at:`pre1.1`,s:`pub`,note:`stop 1: the pub`},{at:`chorus1`,s:`pub`,note:`the flame moves on at the first 'hold on'; the crowd parts`},{at:67,s:`lloyds`,note:`out by Lloyd's: the pace slows almost to a stop, the flame hovers`},{at:`post1`,s:`lloyds+0.5`},{at:78,s:`gate`,note:`through the gate into Liverpool Street`},{at:84.5,s:`concourse`,note:`stop 2: the concourse, boards flicking on 'time is ticking away'`},{at:`hook1.1`,s:`concourse`,note:`boards blank on 'My Final fear', the crowd moves`},{at:110,s:`escalatorTop`,note:`led across the concourse to the Elizabeth line`},{at:111,s:`escStart`},{at:121.5,s:`escStart+17`,note:`it starts to stretch away from them: slower from here, a real escalator's pace`},{at:131,s:`escStart+25`,note:`it comes back to its own length, and carries them down to meet it`},{at:134.6,s:`escalatorBottom`,note:`off the bottom as it comes back to its own length (story/Descent.ts)`},{at:140,s:`inside`,note:`carried onto the train just before the doors close`},{at:`pre2b`,s:`aisle`,note:`drifting slowly down the aisle`},{at:`hook2`,s:`aisleEnd`,note:`stop 3: stalled in the dark`},{at:`bridge`,s:`aisleEnd`},{at:`bridge.8`,s:`seat`,note:`This night: sits down at the window`},{at:`end`,s:`seat`}]},Ig=7,Lg=class{duration;gaitAt;lines;sections;synced;cues;path;constructor(e,t=Ng,n=e=>Number(e),r){this.duration=e,this.gaitAt=r;let i=Fg.sections;this.synced=t.some(e=>e.start!==null);let a=Rg(t,i,e),o=new Map;this.lines=t.map((t,n)=>{let r=o.get(t.section)??0;o.set(t.section,r+1);let i=a[n+1]??e;return{id:`${t.section}.${r}`,index:n,section:t.section,text:t.text,start:a[n],end:t.end??Math.min(i,a[n]+Ig),guessed:t.start===null}}),this.sections=i.map(e=>{let t=this.lines.find(t=>t.section===e.id);return{id:e.id,start:e.id===`intro`?0:t?.start??e.guess,end:0,location:e.location,gait:e.gait,rain:e.rain,stop:e.stop}}),this.sections.forEach((t,n)=>t.end=this.sections[n+1]?.start??e);let s=Fg.path.map(e=>({t:this.resolve(e.at),s:n(e.s),at:String(e.at)}));for(let e=1;e<s.length;e++)s[e].t<=s[e-1].t&&(s[e].t=s[e-1].t+.01);this.path=wf(s.map(e=>e.t),s.map(e=>e.s)),this.cues=Pg.cues.map(e=>{let t=this.resolve(e.at),n=e.until===void 0?t+(e.for??0):this.resolve(e.until);return{name:e.cue,start:t,end:n,release:e.release??.6}})}cue(e,t){let n=0;for(let r of this.cues){if(r.name!==e||t<r.start||t>r.end+.6)continue;let i=Math.min(1,(t-r.start)/.15),a=t>r.end?1-(t-r.end)/.6:1;n=Math.max(n,i*a)}return n}ramp(e,t){let n=0;for(let r of this.cues){if(r.name!==e||t<r.start||t>r.end+r.release)continue;let i=(t-r.start)/Math.max(.01,r.end-r.start);n=Math.max(n,t<=r.end?i:1-(t-r.end)/r.release)}return Math.max(0,Math.min(1,n))}cueAge(e,t){let n=-1;for(let r of this.cues)r.name===e&&t>=r.start&&(n<0||t-r.start<n)&&(n=t-r.start);return n}resolve(e){if(typeof e==`number`)return e;let t=e.match(/^(.+?)([+-]\d+(?:\.\d+)?)$/);if(t)return this.resolve(t[1])+Number(t[2]);if(e===`song`)return 0;if(e===`end`)return this.duration;if(e.includes(`.`)){let t=this.lines.find(t=>t.id===e);if(!t)throw Error(`timeline: no lyric line ${e}`);return t.start}let n=this.sections.find(t=>t.id===e);if(!n)throw Error(`timeline: no section ${e}`);return n.start}progress(e){return this.path.at(e)}sectionAt(e){let t=this.sections[0];for(let n of this.sections)e>=n.start&&(t=n);return t}linesAt(e,t=.9){return this.lines.filter(n=>e>=n.start&&e<n.end+t)}checkPace(e){for(let t=0;t<this.duration;t+=.5){let n=this.path.slope(t);if((this.gaitAt?this.gaitAt(this.path.at(t)):this.sectionAt(t).gait)===`walk`&&n>1.6){let r=e.findIndex(e=>e.t>t);console.warn(`timeline: walking at ${n.toFixed(2)} m/s around ${t.toFixed(1)}s (before path key '${e[r]?.at}'). Shorten that stretch of route.`),t+=5}}}};function Rg(e,t,n){let r=zg(e,t),i=e.map(e=>e.start),a=[[-1,0]];i.forEach((e,t)=>e!==null&&a.push([t,e])),a.push([i.length,n]);for(let e=0;e<a.length-1;e++){let[t,n]=a[e],[o,s]=a[e+1];if(o-t<2)continue;let c=r[t+1]>n&&r[o-1]<s;for(let e=t+1;e<o;e++)i[e]=c?r[e]:n+(s-n)*(e-t)/(o-t)}return i}function zg(e,t){return e.map(n=>{let r=t.findIndex(e=>e.id===n.section),i=e.filter(e=>e.section===n.section),a=i.indexOf(n),o=t[r].guess,s=t[r+1]?.guess??o+14;return o+1+(s-o-2)*a/i.length})}var Bg=new B(hm.x,X+.45,hm.z),Vg=15778670,Hg=16773320,Ug=16,Wg=1.8,Gg=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)),Kg=class{overlay;touch;k=0;sitting=!1;open=!1;openFor=0;cam=null;constructor(e,t,n){this.overlay=e,this.touch=t,n.addEventListener(`pointerdown`,e=>{if(!this.open||e.pointerType===`mouse`&&e.button!==0)return;let t=this.overlay,r=document.pointerLockElement===n,i=r?t.w/2:e.clientX/innerWidth*t.w,a=r?t.h/2:e.clientY/innerHeight*t.h,o=this.screen();o&&Math.hypot(o.x-i,o.y-a)<Math.max(Ug,o.r+3)&&(this.sitting=!0)})}get amount(){return Gg(this.k/Wg)}get sat(){return this.k>=Wg}get lowering(){return this.sitting&&this.k<Wg}get target(){return Bg}update(e,t,n,r){this.cam=t,this.open=n&&!this.sitting,this.openFor=this.open?this.openFor+e:0,r&&n&&(this.sitting=!0),this.sitting&&(this.k=Math.min(Wg,this.k+e))}reset(){this.k=0,this.sitting=!1,this.open=!1,this.openFor=0}screen(){if(!this.cam)return null;let e=Bg.clone().project(this.cam);if(e.z>1||Math.abs(e.x)>1.1||Math.abs(e.y)>1.1)return null;let t=this.overlay,n=t.h/2/Math.tan(At.degToRad(this.cam.fov/2));return{x:Math.round((e.x*.5+.5)*t.w),y:Math.round((1-(e.y*.5+.5))*t.h),r:Math.round(Math.min(18,.35*n/Bg.distanceTo(this.cam.position)))}}draw(e){if(!this.open)return;let t=Math.min(1,this.openFor/.8),n=xh.sit,r=(t,n,r,i)=>e.text(t,Math.round((e.w-gd(t))/2),Math.round(n),r,i);if(r(n.prompt,e.h*.05,ud[4],t),this.openFor>.6&&r(this.touch?n.hintTouch:n.hint,e.h*.05+11,7833242,t*.8),!this.touch){let t=Math.round(e.w/2),n=Math.round(e.h/2);e.rect(t-3,n,2,1,ud[4]),e.rect(t+2,n,2,1,ud[4]),e.rect(t,n-3,1,2,ud[4]),e.rect(t,n+2,1,2,ud[4])}let i=this.screen();if(!i)return;let a=!this.touch&&Math.abs(i.x-e.w/2)<=i.r+2&&Math.abs(i.y-e.h/2)<=i.r+2,o=i.r+Math.round(1.5+1.5*Math.sin(this.openFor*4)),s=a?Hg:Vg,c=a?4:3;for(let[t,n]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let r=i.x+t*o,a=i.y+n*o;e.rect(Math.min(r,r-t*(c-1)),a,c,1,s),e.rect(r,Math.min(a,a-n*(c-1)),1,c,s)}}},qg=class{curve;length;marks=new Map;constructor(e){let t=e.map(e=>e instanceof B?e:e.p);this.curve=new Zi(t,!1,`centripetal`),this.curve.arcLengthDivisions=Math.max(200,t.length*100),this.length=this.curve.getLength();let n=this.curve.getLengths(this.curve.arcLengthDivisions);e.forEach((e,r)=>{if(e instanceof B)return;let i=r/(t.length-1),a=Math.round(i*this.curve.arcLengthDivisions);this.marks.set(e.name,n[a])})}at(e){if(typeof e==`number`)return e;let t=this.marks.get(e.split(/[+-]/)[0]);if(t===void 0)throw Error(`route: no mark '${e}'`);let n=e.match(/([+-][0-9.]+)$/);return t+(n?Number(n[1]):0)}pointAt(e,t=new B){return this.curve.getPointAt(At.clamp(e/this.length,0,1),t)}tangentAt(e,t=new B){return this.curve.getTangentAt(At.clamp(e/this.length,0,1),t)}headingAt(e){let t=this.tangentAt(e);return Math.atan2(-t.x,-t.z)}};function Jg(e,t,n){let r=Jl(21);for(let i of t){let t={a:new B(...i.a),b:new B(...i.b)};for(let a of i.oneWay?[i.oneWay]:[1,-1]){let o=t.b.clone().sub(t.a).normalize(),s=i.oneWay?[0]:[.7,.5,.3,0].map(e=>e*a),c={a:t.a.clone(),b:t.b.clone()},l=-1;for(let e of s){let r=new B(-o.z,0,o.x).multiplyScalar(e),a=n&&!i.ride?Yg(t.a.clone().add(r),t.b.clone().add(r),n):{a:t.a.clone().add(r),b:t.b.clone().add(r)},s=a?a.a.distanceTo(a.b):0;s>l+2&&(l=s,c=a)}if(!(l<3))for(let t=0;t<i.count;t++){let n=!i.ride&&t<i.count-1&&r.chance(.22);e.addWalker(c,a,{umbrella:i.umbrella,ride:i.ride,couple:n}),n&&t++}}}}function Yg(e,t,n){let r=e.distanceTo(t),i=.25,a=null,o=0,s=-1;for(let c=0;c<=r+i;c+=i){let l=c<=r&&!n(e.clone().lerp(t,c/r));if(l&&s<0&&(s=c),!l&&s>=0){let n=Math.min(r,c-i);n-s>o&&(o=n-s,a={a:e.clone().lerp(t,s/r),b:e.clone().lerp(t,n/r)}),s=-1}}return a}function Xg(e,t,n,r,i={}){let a=Jl(i.seed??9),o=[];for(let s=0;o.length<r&&s<r*30;s++){let r=new B(t.x+(a.next()-.5)*n[0],t.y,t.z+(a.next()-.5)*n[1]);if(i.avoid?.(r)||o.some(e=>e.distanceTo(r)<(i.spacing??.6)))continue;let s=i.faceTo??t,c=Math.atan2(s.x-r.x,s.z-r.z)+(a.next()-.5)*(i.faceTo?.5:1.6);e.addStander(r,c,{pint:a.chance(i.pints??0)}),o.push(r)}}function Zg(e,t,n,r={}){let i=Jl(r.seed??11),a=[],o=[];for(let s=0;a.length<n&&s<n*60;s++){let n=i.chance(.35)?2:i.chance(.6)?3:4,s=.36+.07*n,c=new B(t.x0+i.next()*(t.x1-t.x0),t.y,t.z0+i.next()*(t.z1-t.z0));if(a.some(e=>e.distanceTo(c)<1.9))continue;let l=i.next()*Math.PI*2,u=Array.from({length:n},(e,t)=>{let r=l+t/n*Math.PI*2+(i.next()-.5)*.5;return c.clone().add(new B(Math.cos(r)*s,0,Math.sin(r)*s))});if(!u.some(e=>r.avoid?.(e)||o.some(t=>t.distanceTo(e)<.6))){a.push(c);for(let t of u){let n=Math.atan2(c.x-t.x,c.z-t.z)+(i.next()-.5)*.4;e.addStander(t,n,{pint:i.chance(r.pints??0)}),o.push(t)}}}}function Qg(e,t,n=0,r=1/0){let i=[];for(let t=n;t<Math.min(r,e.length);t+=.75)i.push(e.pointAt(t));return e=>i.some(n=>Math.hypot(n.x-e.x,n.z-e.z)<t&&Math.abs(n.y-e.y)<3)}var $g=.2,e_=.3,t_=1.9,n_=class{cells=new Map;x0=0;z0=0;nx=0;constructor(e){this.x0=e.x0,this.z0=e.z0,this.nx=Math.ceil(e.w/$g)}add(e){e.updateMatrixWorld(!0);let t=new B,n=new B,r=new B,i=new B;return e.traverse(e=>{let a=e;if(!a.isMesh||a.isInstancedMesh||a.material!==Bd)return;let o=a.geometry.getAttribute(`position`),s=a.geometry.index,c=s?s.count/3:o.count/3;for(let e=0;e<c;e++){let c=s?s.getX(e*3):e*3,l=s?s.getX(e*3+1):e*3+1,u=s?s.getX(e*3+2):e*3+2;t.fromBufferAttribute(o,c).applyMatrix4(a.matrixWorld),n.fromBufferAttribute(o,l).applyMatrix4(a.matrixWorld),r.fromBufferAttribute(o,u).applyMatrix4(a.matrixWorld),i.subVectors(r,n).cross(n.clone().sub(t)),!(Math.abs(i.y)>.5*i.length())&&this.mark(t,n,r)}}),this}mark(e,t,n){let r=Math.min(e.y,t.y,n.y),i=Math.max(e.y,t.y,n.y),a=Math.min(e.x,t.x,n.x),o=Math.max(e.x,t.x,n.x),s=Math.min(e.z,t.z,n.z),c=Math.max(e.z,t.z,n.z),l=Math.hypot(o-a,c-s),u=Math.max(1,Math.ceil(l/($g*.5))),d=[e,t,n],f=e,p=t,m=-1;for(let e=0;e<3;e++)for(let t=e+1;t<3;t++){let n=Math.hypot(d[e].x-d[t].x,d[e].z-d[t].z);n>m&&(m=n,f=d[e],p=d[t])}for(let e=0;e<=u;e++){let t=e/u;this.span(this.key(f.x+(p.x-f.x)*t,f.z+(p.z-f.z)*t),r,i)}}key(e,t){let n=Math.floor((e-this.x0)/$g);return Math.floor((t-this.z0)/$g)*this.nx+n}span(e,t,n){let r=this.cells.get(e);if(!r)this.cells.set(e,[t,n]);else{for(let e=0;e<r.length;e+=2)if(t<=r[e+1]+.01&&n>=r[e]-.01){r[e]=Math.min(r[e],t),r[e+1]=Math.max(r[e+1],n);return}r.push(t,n)}}blockedAt(e,t,n){let r=this.cells.get(this.key(e,t));if(!r)return!1;for(let e=0;e<r.length;e+=2)if(r[e+1]>n+e_&&r[e]<n+t_)return!0;return!1}clear(e,t,n,r){if(this.blockedAt(e,t,n))return!1;for(let i=0;i<8;i++){let a=i/8*Math.PI*2;if(this.blockedAt(e+Math.cos(a)*r,t+Math.sin(a)*r,n))return!1}return!0}},r_=`
uniform vec4 uMapRect;
varying vec3 vWorld;
varying vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vUv = (wp.xz - uMapRect.xy) / uMapRect.zw;
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,i_=`
${Bl}
uniform sampler2D uMap;
uniform sampler2D uRefl;
uniform mat4 uMirrorVP;
uniform float uRain;
uniform sampler2D uMem;      // three small scenes side by side
uniform vec4 uPuddles[3];    // x, z, radius, which scene (some puddles show somewhere else)
varying vec3 vWorld;
varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  vec4 g = texture2D(uMap, vUv);
  float wet = g.a;
  // raindrop rings: each 0.4 m cell gets a drop at a random phase
  vec2 cell = floor(vWorld.xz / 0.4);
  vec2 f = fract(vWorld.xz / 0.4) - 0.5;
  float ph = fract(uTime * 1.3 + hash(cell));
  float ring = smoothstep(0.06, 0.0, abs(length(f) - ph * 0.5)) * (1.0 - ph) * step(hash(cell + 7.0), uRain);
  vec4 clip = uMirrorVP * vec4(vWorld.x, 0.0, vWorld.z, 1.0);
  vec2 ruv = clip.xy / clip.w * 0.5 + 0.5;
  ruv += vec2(sin(vWorld.z * 3.0 + uTime * 2.0), 0.0) * 0.003 + f * ring * 0.03 * wet;
  vec4 reflTex = texture2D(uRefl, ruv);
  vec3 refl = reflTex.rgb;
  // a few puddles show a different scene; raindrops ripple it away and back
  for (int i = 0; i < 3; i++) {
    vec2 d = vWorld.xz - uPuddles[i].xy;
    float r = uPuddles[i].z;
    if (r > 0.0 && length(d) < r) {
      vec2 uv = d / (2.0 * r) + 0.5;
      uv += vec2(sin(uv.y * 30.0 + uTime * 3.0), cos(uv.x * 27.0 + uTime * 2.4)) * 0.015 + f * ring * 0.08;
      float flick = 0.75 + 0.25 * sin(uTime * 0.7 + float(i) * 2.0);
      vec3 mem = texture2D(uMem, vec2((uPuddles[i].w + clamp(uv.x, 0.02, 0.98)) / 3.0, clamp(uv.y, 0.02, 0.98))).rgb;
      refl = mix(refl, mem * 0.9, smoothstep(r, r * 0.55, length(d)) * flick);
    }
  }
  vec3 view = normalize(uCamPos - vWorld);
  float fres = 0.35 + 0.65 * pow(1.0 - max(view.y, 0.0), 4.0);
  vec3 col = g.rgb * (1.0 - 0.45 * wet) + refl * wet * fres;
  col += flameLight(vWorld, vec3(0.0, 1.0, 0.0)) * (0.35 - 0.2 * wet);
  col += ring * wet * 0.05;
  gl_FragColor = vec4(applyFog(col, vWorld, 0.0), reflTex.a * wet * fres);
}
`,a_=class{object=new kn;material;mirrorCam=new Ra;reflTarget;uniforms;constructor(e,t){this.reflTarget=new Qt(160,90,{minFilter:r,magFilter:r}),this.uniforms={...Ll,uMap:{value:e},uRefl:{value:this.reflTarget.texture},uMirrorVP:{value:new H},uRain:{value:.6},uMapRect:{value:new Xt(t.x0,t.z0,t.w,t.l)},uMem:{value:null},uPuddles:{value:[0,1,2].map(()=>new Xt(0,0,0,0))}},this.material=new ca({vertexShader:r_,fragmentShader:i_,uniforms:this.uniforms})}addPlane(e,t,n,r,i=0){let a=new Qi(t-e,r-n);a.rotateX(-Math.PI/2);let o=new W(a,this.material);return o.position.set((e+t)/2,i,(n+r)/2),this.object.add(o),o}renderReflection(e,t,n,r){let i=this.mirrorCam;i.copy(n);let a=new B;n.getWorldDirection(a),i.position.set(n.position.x,-n.position.y,n.position.z),i.up.set(0,1,0),i.lookAt(i.position.x+a.x,i.position.y-a.y,i.position.z+a.z),i.updateMatrixWorld(),this.uniforms.uMirrorVP.value.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);let o=Ll.uCamPos.value.clone();Ll.uCamPos.value.copy(i.position);let s=r.map(e=>e.visible);r.forEach(e=>e.visible=!1),e.setRenderTarget(this.reflTarget),e.render(t,i),e.setRenderTarget(null),r.forEach((e,t)=>e.visible=s[t]),Ll.uCamPos.value.copy(o)}};function o_(e){let t=(t,n)=>{let r=Math.imul(t,374761393)+Math.imul(n,668265263)+Math.imul(e,2246822519);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296},n=(e,n)=>{let r=Math.floor(e),i=Math.floor(n),a=e-r,o=n-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=t(r,i),u=t(r+1,i),d=t(r,i+1),f=t(r+1,i+1);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c};return{hash:t,noise:n,fbm(e,t,r=4){let i=0,a=.5,o=1;for(let s=0;s<r;s++)i+=a*n(e*o,t*o),o*=2.03,a*=.5;return i/(1-.5**r)}}}var s_={street:{fog:4871784,fogLow:5656650,density:.03,cloudBase:38},market:{fog:5917760,fogLow:7232068,density:.022,cloudBase:38},station:{fog:7235672,fogLow:8024162,density:.013,cloudBase:60},below:{fog:3819095,fogLow:4608870,density:.016,cloudBase:99},tunnel:{fog:724500,fogLow:1119774,density:.05,cloudBase:99},open:{fog:2502718,fogLow:3095114,density:.014,cloudBase:18},outro:{fog:1975858,fogLow:2502718,density:.009,cloudBase:30}};for(let[e,t]of Object.entries(s_))t.zone=e;function c_(){let e=Tf(),t=[$f,fp,Cp,Pp,um];for(let n of t)n.lights(e);let n=$f.build(e);fp.build(e),Cp.build(e);let r=Pp.build(e);um.build(e);let i=(e,t,n=q)=>new B(e,n,t),a=(e,t)=>({p:t,name:e}),o=[];for(let e=0;e<=6;e++){let t=e/6*Math.PI,n=i(-9.5-.8*Math.cos(t),-.8*Math.sin(t));o.push(e===0?a(`door`,n):e===6?a(`doorExit`,n):n)}o.push(i(-7.4,3.6),i(-7.4,9),i(-8.4,14.9),a(`lime`,i(-12.6,16.6,.07)),i(-15.8,17.4,.07),i(-18.9,19.6),a(`arcade`,i(-20,22.8)),a(`pub`,i(-20.1,26.6)),a(`crossing`,i(-22.2,30.2)),i(-25.2,32.6),a(`exit`,i(-29,33.7)),a(`lloyds`,i(-32,33.2,.07)),i(-34.6,37.6),a(`gate`,i(-36.6,43.6)),a(`concourse`,i(-41.6,46)),i(-45,49.5),i(-49.5,54.5),a(`escalatorTop`,i(zp.x,zp.topZ-1.1))),[.4,3,8,14,20,26,32].forEach((e,t)=>o.push(t===0?a(`escStart`,dm(e)):dm(e))),o.push(a(`escalatorBottom`,dm(zp.length-.3))),o.push(i(zp.x+2.5,Hp.z0+1.9,X),a(`doorway`,i(Up.x,(Up.z0+Up.z1)/2,X)),a(`platform`,i(fm-2.6,(Up.z0+Up.z1)/2,X)),a(`trainDoor`,i(Z.x0+.1,Z.z0+3.5,X)),a(`inside`,i(fm-.1,Z.z0+3.9,X)),i(fm,Z.z0+6.1,X),a(`aisle`,i(fm,Z.z0+10.1,X)),a(`aisleEnd`,i(fm+.1,Z.z0+13.2,X)),i(fm+.45,Z.z0+14.2,X-.2),i(hm.x-.22,hm.z,X-.47),a(`seat`,i(hm.x,hm.z,X-.47)));let s=new qg(o),c=new n_({x0:-105,z0:-70,w:125}).add(e.group),l=e=>s.at(e);e.painters.unshift((e,t)=>sg.some(([n,r,i])=>Math.hypot(e-n,t-r)<i)?{color:724500,wet:.98}:null);let u={x0:-105,z0:-70,w:125,l:200},d=new a_(l_(u,e),u);for(let t of e.groundPlanes)d.addPlane(Math.min(t.x0,t.x1),Math.max(t.x0,t.x1),Math.min(t.z0,t.z1),Math.max(t.z0,t.z1),t.y);e.group.add(d.object),e.noReflect.push(d.object);let f=new Om;e.shelters.push(new Qn(new B(Z.x0-.2,X-1,Z.z0-25),new B(Z.x1+.2,X+3.2,Z.z0+48)));let p=(async()=>{await Af(),await f.buildOutside(Af)})(),m=new Qn(new B(Z.x0-.1,X-1,Z.z0-23),new B(Z.x1+.1,X+3,Z.z0+45)),h=e.shelters[1],g=new Qn(new B(Y.x0,-1,Y.z0),new B(Y.x1,22,Y.z1));return{city:e.group,lights:e.lights,lampHeads:e.lampHeads,route:s,ground:d,noReflect:e.noReflect,lobby:n,shelters:e.shelters,station:r,train:f,trainReady:p,inBounds:(t,n)=>e.walkable.some(e=>e(t,n)),blockers:c,gaitAt(e){return e>=l(`escStart`)&&e<l(`escalatorBottom`)?`glide`:e>=l(`inside`)?`carriage`:`walk`},lookAt(e,t){let n=t(`chorus1.1`),r=t(`post1+1`);if(e<n||e>r)return null;let i=Math.min(1,(e-n)/3)*Math.min(1,(r-e)/2.5);return{target:new B(-47,34,22),weight:.55*Math.max(0,i)}},flameAnchor(e,t,n){let r=(n,r)=>e>=t(n)&&e<t(r);return r(`pre1`,`chorus1`)?new B(tp.pub.x+.6,1.45,32.4):r(`post1.1`,`hook1.1`)?new B(-49,3.4,51):r(`hook2`,`bridge`)?new B(fm-.2,X+1.3,Z.z0+17.2):n||e>=t(`bridge`)?new B(Z.x1+3.6,X+2.3,hm.z+3.4):null},atmosAt(e,t){return m.containsPoint(e)?Em(t)>1015?t>265?s_.outro:s_.open:s_.tunnel:e.y<-1.5?s_.below:g.containsPoint(e)?s_.station:h.containsPoint(e)?s_.market:s_.street},aboard:e=>m.containsPoint(e),populate(e,t){let n=e=>!c.clear(e.x,e.z,e.y,.25);Jg(e,[{a:[-7.8,q,-40],b:[-7.8,q,-3],count:3},{a:[-7.8,q,18],b:[-7.8,q,70],count:3},{a:[7.4,q,-40],b:[7.4,q,70],count:6},{a:[-10,q,14.2],b:[-27,q,14.2],count:2},{a:[-10,q,20.3],b:[-27,q,20.3],count:2},{a:[-20,q,39],b:[-20,q,60],count:2,umbrella:0},{a:[J.x0+.8,q,14],b:[J.x0+.8,q,100],count:4},{a:[J.x1-.8,q,14],b:[J.x1-.8,q,100],count:4},{a:[-37,q,37],b:[-66,q,37],count:2},{a:dm(zp.length-.5).add(new B(2.4,0,0)).toArray(),b:dm(.5).add(new B(2.4,0,0)).toArray(),count:9,ride:!0,oneWay:1},{a:dm(.5).add(new B(-2.4,0,0)).toArray(),b:dm(zp.length-.5).add(new B(-2.4,0,0)).toArray(),count:4,ride:!0,oneWay:1}],n);let r=Qg(s,1),i=e=>r(e)||n(e);Zg(e,{x0:-22.5,x1:-20.9,z0:21.4,z1:30,y:q},6,{pints:.85,avoid:i,seed:3}),Zg(e,{x0:-18.4,x1:-17.5,z0:22,z1:30,y:q},2,{pints:.7,avoid:i,seed:13});let a=new B(-18.1,q,32.4),o=s.pointAt(s.at(`pub`));e.addStander(a,Math.atan2(o.x-a.x,o.z-a.z),{pint:!0}),Zg(e,{x0:-23,x1:-16,z0:31,z1:38,y:q},3,{pints:.4,avoid:e=>i(e)||Math.hypot(e.x+21,e.z-31.6)<1.3||e.distanceTo(a)<1.3,seed:4});let l=e=>jf(e.x,e.z,Ep.x0-1.5,Ep.x1+1.5,Ep.z0-1.5,Y.z1),u=Qg(s,1.4),d=e=>u(e)||l(e)||n(e)||Math.hypot(e.x+41.6,e.z-46)<2.2;Xg(e,new B(-48,q,53),[16,22],55,{avoid:d,faceTo:new B(-56,q,56),seed:5,spacing:1.1}),Zg(e,{x0:-56,x1:-40,z0:43,z1:64,y:q},6,{avoid:d,seed:15}),Xg(e,new B(zp.x-3,X,Hp.z0+5),[3,5],5,{avoid:e=>r(e)||n(e),seed:6});for(let e of f.seats)Math.random()<.6&&t.addStander(e.pos,e.yaw,{seated:!0});for(let e of f.standing)Math.random()<.45&&t.addStander(e.pos,e.yaw)}}}function l_(e,t){let n=Math.round(e.w*4),i=Math.round(e.l*4),a=new Uint8Array(n*i*4),o=o_(7),s=(e,t)=>o.fbm(e,t,3),c=new Map;for(let e of t.lights)if(!(e.pos.y<-3))for(let t=Math.floor((e.pos.x-e.radius)/16);t<=Math.floor((e.pos.x+e.radius)/16);t++)for(let n=Math.floor((e.pos.z-e.radius)/16);n<=Math.floor((e.pos.z+e.radius)/16);n++){let r=`${t},${n}`;c.has(r)||c.set(r,[]),c.get(r).push(e)}let l=[0,0,0];for(let r=0;r<i;r++)for(let i=0;i<n;i++){let o=e.x0+(i+.5)/4,u=e.z0+(r+.5)/4,d=null;for(let e of t.painters)if(d=e(o,u,s),d)break;d||={color:1514791,wet:.5},tu(c.get(`${Math.floor(o/16)},${Math.floor(u/16)}`)??[],o,.02,u,0,1,0,l);let f=(r*n+i)*4,p=d.color;a[f]=Math.min(255,(p>>16&255)*l[0]),a[f+1]=Math.min(255,(p>>8&255)*l[1]),a[f+2]=Math.min(255,(p&255)*l[2]),a[f+3]=Math.round(d.wet*255)}let u=new ri(a,n,i,w);return u.magFilter=r,u.minFilter=r,u.needsUpdate=!0,u}var u_=9e3,d_=new B(36,22,36),f_=8,p_=`
attribute vec3 seed;
uniform vec3 uCamPos;
uniform vec3 uBox;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uWind;
uniform float uLength;
uniform vec3 uLamps[${f_}];
uniform vec3 uLampColor;
uniform vec3 uShelterMin[4];
uniform vec3 uShelterMax[4];
varying float vAlpha;
varying vec3 vCol;
void main() {
  vec3 fall = vec3(uWind.x, -uSpeed, uWind.y);
  vec3 p = seed * uBox + fall * uTime;
  p = mod(p - uCamPos + uBox * 0.5, uBox) + uCamPos - uBox * 0.5;
  // position.y is 0 for the head, 1 for the tail
  p -= normalize(fall) * uLength * position.y;
  float d = length(p - uCamPos);
  vAlpha = smoothstep(0.6, 2.0, d) * (1.0 - smoothstep(10.0, 18.0, d));
  // no rain under roofs
  for (int i = 0; i < 4; i++) {
    if (all(greaterThan(p, uShelterMin[i])) && all(lessThan(p, uShelterMax[i]))) vAlpha = 0.0;
  }
  vec3 lit = vec3(0.0);
  for (int i = 0; i < ${f_}; i++) {
    float l = length(p - uLamps[i]);
    lit += uLampColor * pow(max(0.0, 1.0 - l / 9.0), 2.0);
  }
  vCol = vec3(0.42, 0.47, 0.55) + lit * 0.9;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,m_=`
uniform float uOpacity;
varying float vAlpha;
varying vec3 vCol;
void main() { gl_FragColor = vec4(vCol, vAlpha * uOpacity); }
`,h_=class{object;geo;uniforms={uCamPos:Ll.uCamPos,uTime:Ll.uTime,uBox:{value:d_},uSpeed:{value:11},uWind:{value:new jt(-1.2,.4)},uLength:{value:.4},uOpacity:{value:.55},uLamps:{value:Array.from({length:f_},()=>new B(0,-999,0))},uLampColor:{value:new U(1,.55,.2)},uShelterMin:{value:[0,1,2,3].map(()=>new B(0,-999,0))},uShelterMax:{value:[0,1,2,3].map(()=>new B(0,-998,0))}};constructor(){this.geo=new Ba,this.geo.setAttribute(`position`,new yr([0,0,0,0,1,0],3));let e=new Float32Array(u_*3);for(let t=0;t<e.length;t++)e[t]=Math.random();this.geo.setAttribute(`seed`,new ii(e,3)),this.geo.instanceCount=u_;let t=new ca({vertexShader:p_,fragmentShader:m_,uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:5,blendSrc:204,blendDst:205,blendSrcAlpha:200,blendDstAlpha:201});this.object=new ki(this.geo,t),this.object.frustumCulled=!1}setIntensity(e){e=At.clamp(e,0,1),this.geo.instanceCount=Math.floor(u_*e),this.uniforms.uSpeed.value=9+5*e,this.uniforms.uOpacity.value=.16+.26*e}setShelters(e){for(let t=0;t<4;t++){let n=e[t];this.uniforms.uShelterMin.value[t].copy(n?n.min:new B(0,-999,0)),this.uniforms.uShelterMax.value[t].copy(n?n.max:new B(0,-998,0))}}setLamps(e,t){let n=[...e].sort((e,n)=>e.distanceToSquared(t)-n.distanceToSquared(t)).slice(0,f_);this.uniforms.uLamps.value.forEach((e,t)=>n[t]?e.copy(n[t]):e.set(0,-999,0))}},g_=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,__=`
uniform float uTime;
uniform float uBreak;
uniform vec3 uStarDir;
uniform float uStar;
uniform vec3 uFogColor;
uniform vec3 uFogLow;
varying vec3 vDir;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.03; a *= 0.5; } return s; }
void main() {
  vec3 d = normalize(vDir);
  float up = max(d.y, 0.0);
  vec3 top = vec3(0.13, 0.145, 0.18);
  vec3 col = mix(uFogColor, top, smoothstep(0.0, 0.7, up));
  // city glow on the cloud base near the horizon
  col += vec3(0.20, 0.11, 0.05) * pow(1.0 - up, 6.0);
  vec2 cp = d.xz / (d.y + 0.12) * 1.4 + vec2(uTime * 0.03, uTime * 0.01);
  float cl = fbm(cp);
  float cover = mix(1.0, 0.45, uBreak);
  float cloud = smoothstep(1.0 - cover - 0.1, 1.0 - cover + 0.35, cl);
  vec3 clouds = mix(top * 0.7, uFogColor * 1.25 + vec3(0.06, 0.03, 0.0), cl);
  vec3 clear = vec3(0.025, 0.03, 0.05);
  float star = step(0.9965, hash(floor(d.xz / (d.y + 0.2) * 220.0))) * uBreak * smoothstep(0.1, 0.4, up);
  clear += star * 0.9;
  col = mix(mix(clear, col, 0.35), mix(col, clouds, 0.7), cloud);
  col = mix(col, uFogLow, smoothstep(0.08, -0.05, d.y));
  // the star the flame became: a little brighter than the rest, and very slightly blue
  float s = smoothstep(0.99985, 0.99994, dot(d, normalize(uStarDir))) * uStar;
  col = mix(col, vec3(0.86, 0.92, 1.0), s);
  gl_FragColor = vec4(col, 0.0);
}
`,v_=class{mesh;uniforms={uTime:Ll.uTime,uFogColor:Ll.uFogColor,uFogLow:Ll.uFogLow,uBreak:{value:0},uStarDir:{value:new B(0,1,0)},uStar:{value:0}};constructor(){let e=new ca({vertexShader:g_,fragmentShader:__,uniforms:this.uniforms,side:1,depthWrite:!1});this.mesh=new W(new $i(500,24,12),e),this.mesh.renderOrder=-1,this.mesh.frustumCulled=!1,this.mesh.onBeforeRender=(e,t,n)=>{this.mesh.position.copy(n.position),this.mesh.updateMatrixWorld()}}},y_=new URLSearchParams(``),b_=180,x_=63e3,S_=`you're nearly home, no more waiting`,C_=`where did I go`,w_=document.getElementById(`view`),T_=new Dl({canvas:w_,antialias:!1,powerPreference:`high-performance`});T_.outputColorSpace=ze,T_.setPixelRatio(1),T_.setClearColor(0,0);var E_=new Ln,D_=new v_,O_=new U;E_.add(D_.mesh),performance.now();var Q=c_();E_.add(Q.city,Q.train.carriage,Q.train.outside);var k_=Q.lobby,A_=new h_;A_.setShelters(Q.shelters),E_.add(A_.object);var j_=new Fl(16/9),M_=new Ml(w_,{yaw:1/0,up:1.1,down:1.1}),N_=new xg(w_);M_.ignoreTouch=e=>$===`lobby`&&N_.ownsTouch(e);var P_=new bg(k_.walk),F_=of(0,0,0),I_=new Il(Q.route,F_,k_.door),L_=new wg(320,180),R_=new Eg,z_=new jg,B_=new Kl;E_.add(B_.group,B_.emberObject,B_.ringObject);var V_=new Fd,H_=0,U_=0,W_=!1,G_=0,K_=new tg,q_=of(1.7,1.35,-2.3),J_=5,Y_=1.2,X_=new ql,Z_=new sd(90,77),Q_=new sd(44,99);Q.populate(Z_,Q_),Z_.solid=(e,t,n)=>!Q.blockers.clear(e,t,n,.2),Q.city.add(Z_.group),E_.add(Q_.group);var $_=!1,ev=0,tv=!1,nv=new jd,rv=0,iv=new Km(Q.route,k_,Q.train,nv);E_.add(...iv.objects);var av=new Jm(Q.train,Q_);E_.add(av.breath);var ov=new Wm,sv=new mh(Q.train);E_.add(sv.group);var cv=new rg(Q.train);E_.add(cv.group);var lv=new lg(Q.ground,nv,Z_);Q.city.add(lv.group),Q.blockers.add(lv.group);var uv=new og;{let e=(e,t,n=0)=>{let r=Q.route.at(e)+n,i=Q.route.pointAt(r),a=Q.route.headingAt(r);return{pos:new B(i.x+Math.cos(a)*t,i.y,i.z-Math.sin(a)*t),yaw:a}},t=(e,t,n)=>e.agents.filter(n).sort((e,n)=>e.pos.distanceTo(t)-n.pos.distanceTo(t))[0],n=e(`lime`,1.6,-3),r=Z_.addStander(n.pos,n.yaw+Math.PI);r&&uv.add(r);let i=t(Z_,new B(-21.6,0,25.2),e=>!e.lane);i&&uv.add(i);let a=t(Z_,Q.route.pointAt(Q.route.at(`concourse`)+4),e=>!e.lane);a&&uv.add(a);let o=e(`escalatorBottom`,1.4,3),s=Z_.addStander(o.pos,o.yaw+Math.PI);s&&uv.add(s);let c=t(Q_,Q.route.pointAt(Q.route.at(`aisle`)),e=>e.seated);c&&uv.add(c);for(let e of[r,i,a,s,c])e&&(e.holdAct=1)}for(let e of Z_.agents)!e.lane&&e.pos.y>-1&&e.pos.x>-94&&e.pos.x<-36&&e.pos.z>40&&e.pos.z<100&&(e.acts=[6,6,1,1,5,4,0]);var dv=null,fv=new Map;function pv(e){return{...e,head:e.head.clone(),reflection:!0,gaze:0,lastThought:-1/0,pos:e.pos.clone()}}var mv=y_.get(`view`)===`character`;if(mv){let e=new B(-7.4,.15,9.5);[0,Math.PI/2,Math.PI,0].forEach((t,n)=>{let r=new ef({hood:n<3});r.group.position.set(e.x+(n-1.5)*.9,e.y,e.z),r.group.rotation.y=t,r.lightFrom(Q.lights),r.material.uniforms.uTint.value.multiplyScalar(1.6),E_.add(r.group)})}var hv=200,gv=.3,_v=62;function vv(){let e=w_.clientWidth||innerWidth,t=w_.clientHeight||innerHeight,n=e/Math.max(1,t),r=n>=hv/b_?Math.round(b_*n):hv,i=n>=hv/b_?b_:Math.round(hv/n);T_.setSize(r,i,!1),L_.setSize(r,i),R_.setSize(r,i),j_.camera.aspect=r/i,_v=n>=1?62:Math.min(92,2*Math.atan(Math.tan(58*Math.PI/360)/n)*180/Math.PI),j_.camera.fov=_v,j_.camera.updateProjectionMatrix()}addEventListener(`resize`,vv),addEventListener(`orientationchange`,()=>setTimeout(vv,200)),visualViewport?.addEventListener(`resize`,vv),vv();var $=`loading`,yv=!1,bv=0,xv=new jl,Sv=new Ol(xv.ctx);dv=new pg(xv.ctx);var Cv=null,wv=Ng,Tv=0,Ev=0,Dv=!1,Ov=y_.has(`freeze`),kv=Number(y_.get(`t`)??0),Av=y_.get(`lobby`);function jv(e){$=e,bv=0}if(P_.place(k_.start.pos,k_.start.yaw),M_.set(k_.start.yaw,0),Av!==null){let[e,t,n,r]=(Av||`26.6,4.2,-110,0`).split(`,`).map(Number);P_.place(of(e,0,t),n*Math.PI/180),M_.set(n*Math.PI/180,(r||0)*Math.PI/180)}xv.load(`./final-fear.mp3`).then(()=>{if(Cv=new Lg(xv.duration,wv,e=>Q.route.at(e),Q.gaitAt),xv.onEnded=()=>jv(`ended`),Ov&&Av===null){let e=Math.min(Q.route.length,Cv.progress(kv));j_.setHeading(e>Q.route.at(`seat`)-.6?-Math.PI/2:Q.route.headingAt(e+3)),M_.limits.yaw=1.9,M_.set(0,0)}Ov?jv(Av===null?`preview`:`lobby`):y_.has(`t`)?(xv.seek(kv),jv(`waiting`)):Mv(),y_.has(`yaw`)&&M_.set(Number(y_.get(`yaw`)),Number(y_.get(`pitch`)??0))}).catch(e=>console.error(`song failed to load`,e));function Mv(){jv(`lobby`),Tv=xv.ctx.currentTime}var Nv=!1,Pv=()=>xv.ctx.state===`running`;function Fv(){if(!yv){if(!Pv()){xv.ctx.resume();let e=xv.ctx.createBuffer(1,1,xv.ctx.sampleRate),t=xv.ctx.createBufferSource();t.buffer=e,t.connect(xv.ctx.destination),t.start(0)}Nv||(Nv=!0,Sv.start(),Sv.mix(1,.06,2.5))}}for(let e of[`pointerdown`,`pointerup`,`touchend`,`click`,`keydown`])addEventListener(e,Fv,{passive:!0});function Iv(){j_.setHeading(P_.yaw),j_.lookPitch=M_.pitch,M_.limits.yaw=1.9,M_.set(0,M_.pitch),Dv=!0,I_.begin(P_.pos,P_.vel,e=>Cv.progress(e)),xv.lowpassSweep(260,2e4,1.4,5),xv.play(0),Sv.mix(0,.32,3.5,.8),dv?.start(),jv(`door`)}function Lv(){j_.setHeading(Q.route.headingAt(3)),M_.limits.yaw=1.9,M_.set(0,0),Sv.start(),Sv.mix(0,.32,1),dv?.start(),xv.play(),jv(`song`)}var Rv=-1;function zv(){bv<3||(Rv<0?(Rv=Kv,Sv.mix(0,0,4)):Kv-Rv>5&&location.reload())}addEventListener(`touchend`,()=>{$===`ended`&&zv()});function Bv(){!yv&&[`lobby`,`door`,`song`,`ended`].includes($)&&(yv=!0,xv.ctx.suspend())}function Vv(){yv&&(yv=!1,xv.ctx.resume())}w_.addEventListener(`click`,()=>{$===`waiting`?Lv():$===`ended`?zv():Vv()}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&Bv()}),document.addEventListener(`pointerlockchange`,()=>{!document.pointerLockElement&&$!==`ended`&&Bv()}),addEventListener(`keydown`,e=>{e.code===`Escape`?yv?Vv():Bv():$===`ended`&&zv()});var Hv=y_.has(`debug`)?document.getElementById(`debug`):null,Uv=0,Wv=0,Gv=.6,Kv=0,qv=performance.now(),Jv=0,Yv=0,Xv=0,Zv=0,Qv=1/60,$v=matchMedia(`(pointer: coarse)`).matches,ey=0,ty=new Ih(R_,$v,w_),ny=new Kg(R_,$v,w_);ty.setCamera(j_.camera),E_.add(ty.crack),uv.onSent=e=>ty.messageArrived(e);var ry=0,iy=10,ay=1.2,oy=!1,sy=!1,cy=0,ly=0,uy=[111,`bridge`],dy=!1,fy=-1,py=-1,my=new Jh(Z_,C_);E_.add(my.light);var hy=new $h(Z_,Q_,Q.route,Q.city,Q.lights,S_);Q.city.add(hy.group),hy.advert.copy(Q.train.ads[2].mesh.getWorldPosition(new B));var gy=`https://open.spotify.com/track/1qF1UkMK58WTiNKQnqbpOY`,_y=document.createElement(`a`);_y.href=gy,_y.target=`_blank`,_y.rel=`noopener`,_y.textContent=`listen to Final Fear here`,_y.style.cssText=`position:fixed;left:50%;top:84%;transform:translateX(-50%);z-index:6;display:none;font:16px/1.4 monospace;letter-spacing:1px;white-space:nowrap;color:#9fd0ff;background:rgba(5,7,10,0.75);padding:8px 14px;border:1px solid #1f63f0;text-decoration:none;`;for(let e of[`click`,`pointerdown`,`touchend`])_y.addEventListener(e,e=>e.stopPropagation());document.body.appendChild(_y);function vy(e){let t=Math.min(.05,Math.max(0,(e-qv)/1e3));qv=e,!yv&&!Ov&&(Kv+=t*(1-.82*H_)*(1-.7*U_),bv+=t),Ll.uTime.value=Kv,G_=($===`door`||$===`song`)&&!yv&&!Pv()?G_+t:0,t>0&&(Qv+=(t-Qv)*.05,Xv=Qv>1/38?Xv+t:0,Zv=Qv<1/55?Zv+t:0,Xv>2&&Yv<2&&(Yv++,Xv=0),Zv>12&&Yv>0&&(Yv--,Zv=0));let n=Jv%(Yv+1)===0;M_.update(t);let r=xv.analyse(t);if($===`preview`)Ev=kv;else if(!yv&&xv.playing){Ev+=t;let e=xv.time-Ev;Math.abs(e)>.3?Ev=xv.time:Ev+=e*Math.min(1,t*2.5)}else xv.playing||(Ev=xv.time);let i=$===`ended`&&Cv?Cv.duration+bv:Ev,a=Cv,o=Q.route;a&&$===`song`?yv||(cy=Cy(a,i,Math.min(.5,Math.max(0,i-ly)))):cy=i,ly=i;let s=a?Math.min(o.length,a.progress(cy)):0;if(a&&$===`song`){let e=o.at(`aisleEnd`),n=s>=e-.05&&i>=a.resolve(`hook2+1`)&&!ty.busy&&(ty.settled(a,i)||i>a.resolve(`hook2+23.5`));ny.update(yv?0:t,j_.camera,n,i>a.resolve(`outro`)),s>=e&&(s=e+(o.at(`seat`)-e)*ny.amount),ny.lowering&&M_.ease(0,0,Math.min(1,t*2.5))}let c=$===`song`||$===`preview`||$===`ended`?a?.sectionAt(i):void 0,l=j_.camera;H_=a&&($===`song`||$===`preview`||$===`ended`)?V_.envelope(a,cy):0;let u=a&&wy($)?Q.lookAt(cy,e=>a.resolve(e)):null;if(H_>.01||!u?(j_.attention.copy(B_.pos),j_.attentionWeight=.75*H_):(j_.attention.copy(u.target),j_.attentionWeight=u.weight),ty.busy&&(j_.attentionWeight=0),mv)l.position.set(-7.4,1.15,13.2),l.rotation.set(-.06+M_.pitch,M_.yaw,0);else if($===`title`||$===`loading`||$===`lobby`){P_.yaw=M_.yaw,P_.pitch=M_.pitch;let e=$===`lobby`&&!yv&&!Ov?N_.update():{x:0,y:0};P_.update(yv?0:t,e,l),$===`lobby`&&k_.doorTrigger(P_.pos.x,P_.pos.z)&&!Ov&&Iv()}else if($===`door`&&a){let e=I_.update(bv,i,e=>a.progress(e));j_.gait=`walk`,j_.lookYaw=M_.yaw,j_.lookPitch=M_.pitch,j_.update(o,s,t,0,e),i>=5.5&&jv(`song`)}else{j_.swayAmount=Math.min(1,Dm(i)/15),j_.lookYaw=M_.yaw,j_.lookPitch=M_.pitch,N_.keysOff=ty.typing;let e=$===`song`&&!yv?N_.update():{x:0,y:0},n=Q.gaitAt(s)===`walk`&&!sv.voidOn&&H_<.05&&ty.fallsNow===!1;n&&!yv&&(ry=At.clamp(ry+e.y*ay*t,-10,iy)),(!n||Math.abs(e.y)<.1)&&(ry-=Math.sign(ry)*Math.min(Math.abs(ry),t*(n?.15:2.5)));let r=0;for(;r<22&&s+r<o.length&&Q.gaitAt(s+r)===`walk`;)r+=.25;let c=s+r>=o.length?iy:Math.max(0,(r-1)*.5);ry=At.clamp(ry,-c,c);let u=Math.min(o.length,Math.max(0,s+ry));j_.gait=Q.gaitAt(u);let d=sv.voidOn?0:e.x,f=s>o.at(`seat`)-.6,p=X_.update(yv?0:t,d,e=>{let t=o.pointAt(u),n=j_.currentHeading,r=t.x+Math.cos(n)*e,i=t.z-Math.sin(n)*e;return j_.gait===`glide`||f?Math.abs(e)<.05:j_.gait===`carriage`||t.y<-1.5&&Q.aboard(t)?Math.abs(r-fm)<1.05:!Q.blockers.clear(r,i,t.y,gv)||xy(r,i,t.y)?!1:t.y<-1.5?Math.abs(e)<.8:Q.inBounds(r,i)});M_.limits.yaw=sv.voidOn||$===`ended`?1/0:f?1.3:1.9;let m=$===`ended`?hy.lock(bv):null;if(m){let e=m.at.clone().sub(l.position),n=(e=>Math.atan2(Math.sin(e),Math.cos(e)))(Math.atan2(-e.x,-e.z)-j_.currentHeading-M_.yaw),r=Math.atan2(e.y,Math.hypot(e.x,e.z))-M_.pitch,i=Math.min(1,t*2.2*m.k);M_.set(M_.yaw+n*i,M_.pitch+r*i)}let h=ty.faceTo;j_.headingOverride=sv.voidOn?sv.heading:f?-Math.PI/2:h?Math.atan2(l.position.x-h.at.x,l.position.z-h.at.z):null,h?.settling&&performance.now()-M_.lastInput>500&&M_.ease(0,h.pitch,Math.min(1,t*3)),sv.voidOn&&(j_.swayAmount=0,j_.attentionWeight=0),j_.update(o,u,t,p);let g=sv.voidOn;if(a&&sv.update(a,i,yv?0:t,l,e,N_.has(`ShiftLeft`,`ShiftRight`)||Math.hypot(e.x,e.y)>.98&&$v,j_.currentHeading,$===`song`),sv.voidOn?l.position.copy(sv.eye):g&&(M_.set(0,0),j_.setHeading(-Math.PI/2),j_.update(o,s,0,0),W_=!0),a){let e=o.pointAt(Math.max(0,u-1)),n=o.pointAt(Math.min(o.length,u+1));ty.update({tl:a,t:i,dt:yv?0:t,cam:l,feet:new B(l.position.x,l.position.y-1.62,l.position.z),heading:j_.currentHeading,slope:Math.atan2(n.y-e.y,Math.hypot(n.x-e.x,n.z-e.z)),lamps:Q.lampHeads,agents:Z_.agents,live:$===`song`&&!yv&&!sv.voidOn}),l.position.y-=ty.camDrop}}let d=(l.position.z-zp.topZ)/Math.cos(Math.PI/6),f=Math.abs(l.position.x-zp.x)<.6&&l.position.y<1&&d>0&&d<zp.length?d:null;lm(Kv,f),a&&my.update(a,i,f);let p=Q.aboard(l.position)&&!sv.voidOn;a&&!mv&&iv.update({t:i,dt:yv?0:t,state:$,cam:l,resolve:e=>a.resolve(e),progress:s,aboard:p,lights:Q.lights,section:c?.id??null,thoughtClock:rv,lobbyTime:bv});let m=$===`door`||$===`song`||$===`ended`||$===`preview`,h=new B,g=m&&a?Q.flameAnchor(cy+Y_*.5,e=>a.resolve(e),s>o.at(`seat`)-.6):null;g?h.copy(g):m&&a?(o.pointAt(Math.min(o.length,a.progress(cy+Y_)+J_),h),h.y+=1.3):h.copy(q_);let _=a&&m?Math.abs(a.progress(cy+.5)-a.progress(cy-.5)):0,v=a&&m?cv.flameFlight(a,i,h,l):null;sv.voidOn&&h.copy(sv.flameAt),h.y+=1.4*my.k,v&&h.copy(v.target),($===`preview`||$===`song`&&bv===0&&!Dv||W_)&&B_.place(h),W_=!1;let y={bass:r.bass,kick:r.kick,flare:a&&m?a.cue(`flare`,i):0,gutter:a&&m?a.cue(`gutter`,i):0,still:m?Math.max(0,1-_*3):1,burst:H_,rise:V_.rise};B_.update(yv?0:t,h,y),B_.group.scale.setScalar(v?v.scale:1),B_.group.visible=B_.emberObject.visible=!v?.gone,zl(B_.group.position),a&&cv.starDir&&(D_.uniforms.uStarDir.value.copy(cv.starDir),D_.uniforms.uStar.value=Math.min(1,D_.uniforms.uStar.value+t*2)),a&&cv.update(a,i),a&&!dy&&$===`song`&&i>a.resolve(`hook2+2`)&&i<a.resolve(`bridge-3`)&&ty.settled(a,i)&&(dy=!0,Sm(i,a.resolve(`bridge`)));let b=a?Math.max(1-a.cue(`blackout`,i),wm(i)):1;Q.train.update(i,yv?0:t,b,p);let x=Em(i)>_m+2;Q.train.windowRain.uniforms.uRain.value=x?Math.min(1,(c?.rain??.5)+.2):0,Q.city.visible=!sv.voidOn&&!(p&&Em(i)>3),Q.train.outside.visible=Q.train.carriage.visible=Q_.group.visible=l.position.y<-1.5&&!sv.voidOn,D_.mesh.visible=!sv.voidOn;for(let e of Q_.agents)e.lit=.03+.97*b;if(a&&i>=a.resolve(`hook1`)&&!$_&&m){$_=!0;for(let e of Z_.agents){if(e.lane||e.pos.x>-38||e.pos.x<-74||e.pos.z<40||e.pos.z>100)continue;let t=e.pos.clone(),n=t.clone().add(new B(-18-Math.random()*10,0,(Math.random()-.5)*8)),r=n.clone().sub(t).setLength(.25),i=t.clone();for(let e=0;e<160&&i.distanceTo(t)<t.distanceTo(n)&&!Z_.solid(i.x+r.x,i.z+r.z,i.y);e++)i.add(r);i.distanceTo(t)<1.5||(e.lane={a:t,b:i},e.u=0,e.dir=1,e.speed=.8+Math.random()*.5)}}a&&hy.update(a,i,yv?0:t,l,($===`song`||$===`ended`)&&!yv,$===`ended`?bv:-1);let S=new B(l.position.x,l.position.y-1.6,l.position.z),C=1-.85*H_;if(Q.city.visible&&Z_.update(yv?0:t*C,S,Q.lights),Q_.update(yv?0:t*C,S,[]),yv||(rv+=t),nv.update({t:rv,dt:yv?0:t,section:c?.id??null,flood:a&&m?a.ramp(`flood`,i):0,camera:l,agents:p?[...Q_.agents,...by(l,i)]:Z_.agents,w:R_.w,h:R_.h,enabled:($===`song`||$===`preview`)&&!yv&&H_<.05&&U_<.05&&!sv.voidOn&&!ty.busy,calm:p}),H_>.05&&nv.quieten(),lv.update(a,i,Kv,yv?0:t,l,$,P_.pos,P_.yaw,Math.min(1,P_.vel.length()/1.4),Q.station.boards,Z_,{t:rv,section:c?.id??null}),uv.update(i,l,($===`song`||$===`preview`)&&H_<.05),a){let e=a.ramp(`boards-flick`,i);yv||(ev+=t*e*e*90);let n=a.cue(`boards-blank`,i)>.5;Q.station.boards.draw(ev,n?`blank`:`normal`,e>.6?Math.sin(Kv*30):0);let r=64920+i+ev*60;for(let e of Q.station.clocks)e.set(r);let o=a.cue(`underwater`,i)>.5&&wm(i)<.5;o!==tv&&$===`song`&&(xv.setLowpass(o?330:2e4,o?1.2:.8),tv=o)}L_.uniforms.uDim.value=H_,L_.uniforms.uDesat.value=H_*.6,L_.uniforms.uCold.value=0,a&&av.update(a,i,yv?0:t,l,L_,p),U_=sv.voidOn?0:av.zone,U_>0&&(L_.uniforms.uDesat.value=Math.max(L_.uniforms.uDesat.value,.85*U_),L_.uniforms.uCold.value=Math.max(L_.uniforms.uCold.value,.4*U_),L_.uniforms.uDim.value=Math.max(L_.uniforms.uDim.value,.3*U_)),my.active&&(L_.uniforms.uDesat.value=Math.max(L_.uniforms.uDesat.value,.55*my.k),L_.uniforms.uCold.value=Math.max(L_.uniforms.uCold.value,.25*my.k)),Q_.group.visible&&=U_===0;let w=Math.min(120,_v*(1+.48*Ty(U_))*my.fovK);Math.abs(l.fov-w)>.01&&(l.fov=w,l.updateProjectionMatrix()),K_.update(U_,av.zoneAge,av.zoneLen,yv?0:t),dv?.zoneOut(U_,K_.rush,K_.breath);let T=a&&m?a.ramp(`pressure`,i):0;L_.uniforms.uVignette.value=T,L_.uniforms.uSqueeze.value=T*.8,Ll.uWindowFlicker.value=a&&m?a.cue(`windows`,i):0;let E=a&&m?a.cueAge(`lightning`,i):-1;if(a&&dv&&($===`song`||$===`ended`)&&!yv){let e=Q.atmosAt(l.position,i).zone,n=p||sv.voidOn?`carriage`:e===`below`?j_.gait===`glide`?`escalator`:`below`:e===`station`?`station`:e===`market`?`market`:`street`,o=[[-20,tp.east.z0],[-20,tp.west.z1],[tp.north.x0,34],[tp.crossing.x1,34]],s=e=>a.resolve(e),c=+(i>s(`pre1b.1`)&&i<s(`pre1b.1`)+2.6);dv.update({t:i,dt:t,place:n,cam:l,trainSpeed:p?Dm(i):0,open:x,pubDist:Math.hypot(l.position.x-tp.pub.x,l.position.z-(tp.pub.z0+tp.pub.z1)/2),mouthDist:Math.min(...o.map(([e,t])=>Math.hypot(l.position.x-e,l.position.z-t))),stalled:p&&b<.5,burst:H_,songVol:r.volume,hush:c,clockFlick:a.ramp(`boards-flick`,i),clockPos:Q.station.clocks[0]?.group.getWorldPosition(new B)??l.position,rain:Gv,out:Rv>=0?Ty((Kv-Rv)/4):0}),E>=0&&E<.1&&dv.once(`thunder${Math.round(i-E)}`,()=>dv.thunder()),n===`station`&&dv.once(`chime`,()=>dv.chime()),i>140.2&&p&&dv.once(`doors`,()=>dv.doors()),i>184.4&&p&&dv.once(`clunk`,()=>dv.clunk()),cv.buzzing(a,i)&&dv.once(`buzz`,()=>dv.buzz())}L_.uniforms.uFlash.value=E>=0&&E<1.2?Math.exp(-E*16)+.7*(E>.2?Math.exp(-(E-.2)*12):0):0;let D=$===`title`||$===`loading`||$===`lobby`;if(D||$===`door`){let e=D?0:Ty((xv.time-1)/4);Ll.uFogDensity.value=.009+(.03-.009)*e}else{let e=Q.atmosAt(l.position,i),n=1-Math.exp(-t*1.2);Ll.uFogColor.value.lerp(O_.set(e.fog),n),Ll.uFogLow.value.lerp(O_.set(e.fogLow),n),Ll.uFogDensity.value+=(e.density-Ll.uFogDensity.value)*n,Ll.uCloudBase.value+=(e.cloudBase-Ll.uCloudBase.value)*n,sv.voidOn&&(Ll.uFogColor.value.set(329482),Ll.uFogLow.value.set(329482),Ll.uFogDensity.value=a?.012+.023*Ty((i-a.resolve(Ym))/6):.035),my.active&&(Ll.uFogColor.value.lerp(O_.set(my.fog.color),my.k),Ll.uFogLow.value.lerp(O_.set(my.fog.color),my.k),Ll.uFogDensity.value+=(my.fog.density-Ll.uFogDensity.value)*my.k)}if(D_.uniforms.uBreak.value=a?Ty((i-a.resolve(`outro`))/12):0,py=cv.starDir?py<0?0:py+t:-1,ty.lost&&fy<0)fy=Kv,xv.setLowpass(220,6),xv.setDread(1,4);else if(!ty.lost&&$===`song`&&!yv&&a){let e=ty.busy&&!ty.fallsNow||my.inward;e!==sy&&(sy=e,xv.setInward(+!!e,e?1.2:1.8)),ty.fallsNow!==oy&&(oy=ty.fallsNow,xv.setLowpass(oy?650:tv?330:2e4,oy?.8:1.4),xv.setDread(+!!oy,oy?.6:2))}ty.restart&&location.reload();let O=(c?.rain??.6)+r.volume*.2;if(Gv+=(O-Gv)*(1-Math.exp(-t*.8)),A_.setIntensity(l.position.y<-1.5&&!(p&&x)?0:Gv),A_.uniforms.uWind.value.set(-1.2,p?-Dm(i)*.8:.4),$===`lobby`||$===`door`||Av!==null){let e=x_+($===`title`?0:xv.ctx.currentTime-Tv);k_.clock.set(e),$===`lobby`&&(Sv.scheduleTicks(Tv),Sv.placeClock(k_.clock.group.getWorldPosition(new B)),Sv.setGlassNearness(Math.max(0,1-sf(l.position.x,l.position.z).u/12)))}Sv.setListener(l),Ll.uCamPos.value.copy(l.position),A_.setLamps(Q.lampHeads,l.position);let k=1;($===`title`||$===`loading`)&&(k=0),Rv>=0?k*=1-Ty((Kv-Rv)/4):$===`lobby`&&Av===null&&(k=Ty(bv/2.5));let A=a&&m?a.cueAge(`flicker`,i):-1;A>=0&&A<.4&&(k*=1-.75*(A<.08||A>.16&&A<.22)),yv&&(k*=.55),k*=1-av.blink,k*=1-sv.black,k*=1-ty.black,L_.uniforms.uFade.value=k,n&&Q.city.visible&&l.position.y>-1.5&&Q.ground.renderReflection(T_,E_,l,[...Q.noReflect,A_.object]);for(let e of Q.train.glass)e.rain.uniforms.uReflK.value=0;if(p&&a){let e=new B(0,0,-1).applyQuaternion(l.quaternion),t=Q.train.glass[+(e.x>=0)],r=Math.abs(Dm(i))<.5&&!x&&Em(i)<900;t.rain.uniforms.uReflK.value=(r?.22:x?.32:.5)*(.4+.6*b);let o=Ty((i-a.resolve(`outro+3`))/4.5);t.rain.uniforms.uPix.value=4-3*o,i>a.resolve(`outro`)&&(t.rain.uniforms.uReflK.value=.38+.2*o),t.rain.uniforms.uReflK.value=Math.max(t.rain.uniforms.uReflK.value,.62*sv.mirrorK);let s=[...Q.train.glass.flatMap(e=>e.planes),A_.object,av.breath,sv.group];n&&ov.render(T_,E_,l,t.x,t.rain,s,2)}if(L_.render(T_,E_,l,Kv),R_.clear(),$===`loading`&&yy(`...`,R_.h/2-4,6583175),($===`door`||$===`song`)&&!yv&&!Pv()&&G_>.6){let e=`tap to continue`;R_.text(e,(R_.w-gd(e)*2)/2,Math.round(R_.h*.7),14081510,.6+.4*Math.sin(Kv*3)**2,{scale:2})}if($===`lobby`&&Av===null){ey+=P_.vel.length()*t;let e=Ty((bv-2.5)/1.5)*(1-Ty((ey-1.5)/1.5));e>0&&yy($v?`drag to look. left thumb to walk`:`click to look around. WASD to walk`,R_.h-(gd($v?`drag to look. left thumb to walk`:`click to look around. WASD to walk`)>R_.w-12?30:22),7833242,e),$v&&innerHeight>innerWidth&&yy(`best with your phone on its side`,14,7833242,Ty((bv-1)/1.5))}else $===`waiting`?yy(`Click to begin`,R_.h/2-4,9214637):a&&($===`song`||$===`preview`||$===`ended`)&&(nv.draw(R_,l,rv),sv.voidOn||uv.draw(R_,i,l),ty.draw(R_,i,B_.pos),ny.draw(R_),Sy(l,py,ty.passed+lv.spotted+hy.found),hy.draw(R_,i,l),K_.draw(R_),a&&sv.draw(R_,i,$v),V_.draw(R_,a,cy,B_.pos,l),my.draw(R_,i),z_.draw(R_,a,i));if($===`ended`&&!yv){let e=Ty((bv-hy.sayDone)/2)*(Rv>=0?1-Ty((Kv-Rv)/2.5):1);if(e>0){let t=Math.round(R_.h*.64),n=[`you found ${hy.found}/${hy.total} easter eggs`,`you scored ${Math.round(ty.passed/4*100)} for sticking with it`],r=Math.min(R_.w-4,Math.max(...n.map(e=>gd(e)))+14);R_.panel(Math.round((R_.w-r)/2),t-6,r,47,2502718,e),yy(`you found ${hy.found}/${hy.total} easter eggs`,t,14081510,e),yy(`you scored ${Math.round(ty.passed/4*100)} for sticking with it`,t+11+2,14081510,e),yy(`well done`,t+26,ud[4],e)}let t=e>.5;t&&_y.style.display===`none`?(_y.style.display=`block`,document.pointerLockElement&&document.exitPointerLock()):!t&&_y.style.display!==`none`&&(_y.style.display=`none`)}if(R_.flush(),Hv&&(Uv+=t,Wv++,Uv>.5)){let e=sf(l.position.x,l.position.z);Hv.textContent=`${Math.round(Wv/Uv)} fps  ${$}${yv?` (paused)`:``}  t=${i.toFixed(1)}  ${c?.id??``}${a&&!a.synced?` (placeholder timing)`:``}  s=${s.toFixed(1)}m  train=${Em(i).toFixed(0)}m  lobby u=${e.u.toFixed(1)} v=${e.v.toFixed(1)}`,Uv=0,Wv=0}++Jv===3&&(window.__ready=!0),requestAnimationFrame(vy)}function yy(e,t,n,r=1){_d(e,R_.w-12).forEach((e,i)=>R_.text(e,(R_.w-gd(e))/2,t+i*11,n,r,{drop:!1}))}function by(e,t){let n=new B(0,0,-1).applyQuaternion(e.quaternion),r=Q.train.glass[+(n.x>=0)],i=Dm(t)>.5||Em(t)>880,a=[];for(let t of Q_.agents){if(!i||Math.abs(t.pos.z-e.position.z)>7)continue;let n=fv.get(t.id);n||(n=pv(t),fv.set(t.id,n)),n.head.set(2*r.x-t.head.x,t.head.y-.35,t.head.z),n.pos.set(2*r.x-t.pos.x,t.pos.y,t.pos.z),a.push(n)}return a}function xy(e,t,n){for(let r of Z_.agents)if(Math.abs(r.pos.y-n)<1.5&&Math.hypot(r.pos.x-e,r.pos.z-t)<.55)return!0;return!1}function Sy(e,t,n){if(!cv.starDir||t<0)return;let r=e.position.clone().addScaledVector(cv.starDir,100).project(e);if(r.z>1)return;let i=(r.x*.5+.5)*R_.w,a=(1-(r.y*.5+.5))*R_.h;for(let e=0;e<Math.min(14,n);e++){let n=t-1.2-e*.7;if(n<0)break;let r=e*2.399%(Math.PI*2),o=10+e*37%23+e*2.2,s=Math.round(i+Math.cos(r)*o*1.6),c=Math.round(a+Math.sin(r)*o*.7),l=.55+.45*Math.sin(Kv*(1.3+e%3*.4)+e);R_.rect(s,c,1,1,16776168),(n<.6||l>.8)&&(R_.line(s-1,c,s+1,c,14081510,Math.min(1,n/.6)*l),R_.line(s,c-1,s,c+1,14081510,Math.min(1,n/.6)*l))}}function Cy(e,t,n){let r=Math.max(cy,t),i=V_.endOf(e,r);if(i>0&&ty.settled(e,t)){let t=e.progress(r),n=r;for(;n<i&&Math.abs(e.progress(n+.1)-t)<.01;)n+=.1;r=Math.max(r,n)}if(!(ty.busy&&r>t)){let i=r-t>.05?Math.max(.75,1-(r-t)*.05):1,a=uy.map(t=>e.resolve(t)).filter(e=>e>t).sort((e,t)=>e-t)[0];a!==void 0&&r>t&&(i=Math.min(i,Math.max(0,(a-r)/(a-t)))),r+=n*i}for(let n of uy){let i=e.resolve(n);t<i&&(r=Math.min(r,i))}return Math.max(r,t)}function wy(e){return e===`door`||e===`song`||e===`ended`||e===`preview`}function Ty(e){return e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)}requestAnimationFrame(vy);