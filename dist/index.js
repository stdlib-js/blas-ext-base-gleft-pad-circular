"use strict";var g=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var b=g(function(G,y){
function h(a,r,v,u,c,e,o,s){var n,q,x,P,f,l,i,d,t;for(n=v.data,q=e.data,x=v.accessors[0],P=e.accessors[1],t=r%a,t>0&&(t=a-t),i=a+r,f=c+t*u,l=s,d=0;d<i;d++)P(q,l,x(n,f)),l+=o,t+=1,t===a?(t=0,f=c):f+=u;return e}y.exports=h
});var p=g(function(H,C){
var j=require('@stdlib/array-base-arraylike2object/dist'),w=b();function z(a,r,v,u,c,e,o,s){var n,q,x,P,f,l,i;if(a<=0)return e;if(r<0&&(r=0),x=j(v),P=j(e),x.accessorProtocol||P.accessorProtocol)return w(a,r,x,u,c,P,o,s),e;for(i=r%a,i>0&&(i=a-i),f=a+r,n=c+i*u,q=s,l=0;l<f;l++)e[q]=v[n],q+=o,i+=1,i===a?(i=0,n=c):n+=u;return e}C.exports=z
});var O=g(function(I,m){
var M=require('@stdlib/strided-base-stride2offset/dist'),A=p();function B(a,r,v,u,c,e){var o,s;return r<0&&(r=0),o=M(a,u),s=M(a+r,e),A(a,r,v,u,o,c,e,s)}m.exports=B
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=O(),E=p();D(R,"ndarray",E);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
