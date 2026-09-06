import{j as C}from"./framer-motion-BkgnANsh.js";import{r as Me}from"./react-vendor-s4VqS66h.js";import{c as nr,b as $0,u as v0,j as vt,i as xt,L as Vr,k as Io,C as kt,d as dr,e as cr,a as St,B as Li,T as x0}from"./index-DykxFjOm.js";import{A as k0,a as S0}from"./AppShell-BdCWyQdK.js";import{I as Eo}from"./input-DIHKlRoC.js";import{L as Gr,S as T0}from"./label-c2Bh5VEi.js";import{B as pr}from"./badge-DfLTr6Bm.js";import{S as I0,a as E0,b as z0,c as C0,d as hr,C as N0,e as A0}from"./select-AEmeZ7x1.js";import{c as qi,g as O0,a as R0,b as D0,d as B0}from"./risk-engine-BXK5y5WL.js";import{S as M0}from"./scan-search-CE0ByI-T.js";import{C as U0}from"./clock-DRRK9wwc.js";import"./charts-_VDt8Bh_.js";import"./radix-ui-DHsNmD5W.js";const P0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],zo=nr("circle-x",P0);const L0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],q0=nr("image",L0);const j0=[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]],Co=nr("plug",j0);const W0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],V0=nr("shield",W0);const G0=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],H0=nr("upload",G0);const F0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],K0=nr("zap",F0);function X0({className:e,...t}){return C.jsx("textarea",{"data-slot":"textarea",className:$0("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...t})}var on=Object.defineProperty,Z0=Object.getOwnPropertyDescriptor,Y0=Object.getOwnPropertyNames,Q0=Object.prototype.hasOwnProperty,J0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),L=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(i){throw r=[i],i}},sr=(e,t)=>{for(var r in t)on(e,r,{get:t[r],enumerable:!0})},ey=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Y0(t))!Q0.call(e,a)&&a!==r&&on(e,a,{get:()=>t[a],enumerable:!(i=Z0(t,a))||i.enumerable});return e},Cr=e=>ey(on({},"__esModule",{value:!0}),e),mr,Tt,er,No,_c,wc=L(()=>{"use strict";mr=new Map,Tt=[],er=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=mr.get(e);if(i===void 0)mr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=Tt.indexOf(e);a!==-1&&Tt.splice(a,1);for(let s=0;s<Tt.length;s++)if(mr.get(Tt[s]).priority<=r){Tt.splice(s,0,e);return}Tt.push(e)}return}throw new TypeError("not a valid backend")},No=async e=>{let t=mr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},_c=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?Tt:r,a,s=[],n=new Set;for(let l of i){let c=await No(l);typeof c=="string"?s.push({name:l,err:c}):(a||(a=c),a===c&&n.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:c}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${c}`);let u=t.filter(l=>n.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,c)=>c==="executionProviders"?u:Reflect.get(l,c)})]}}),ty=L(()=>{"use strict";wc()}),$c,ry=L(()=>{"use strict";$c="1.29.0"}),ji,Ue,vc=L(()=>{"use strict";ry(),ji="warning",Ue={wasm:{},webgl:{},webgpu:{},versions:{common:$c},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ji=e}},get logLevel(){return ji}},Object.defineProperty(Ue,"logLevel",{enumerable:!0})}),xe,iy=L(()=>{"use strict";vc(),xe=Ue}),xc,kc,ay=L(()=>{"use strict";xc=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[3]):(a=e.dims[3],s=e.dims[2]);let n=t?.format!==void 0?t.format:"RGB",u=t?.norm,l,c;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?c=[0,0,0,0]:typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:(c=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(c[3]=u.bias[3]));let h=s*a,p=0,g=h,b=h*2,y=-1;n==="RGBA"?(p=0,g=h,b=h*2,y=h*3):n==="RGB"?(p=0,g=h,b=h*2):n==="RBG"&&(p=0,b=h,g=h*2);for(let $=0;$<s;$++)for(let k=0;k<a;k++){let x=(e.data[p++]-c[0])*l[0],_=(e.data[g++]-c[1])*l[1],T=(e.data[b++]-c[2])*l[2],S=y===-1?255:(e.data[y++]-c[3])*l[3];i.fillStyle="rgba("+x+","+_+","+T+","+S+")",i.fillRect(k,$,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},kc=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,s,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[1],n=e.dims[3]):(a=e.dims[3],s=e.dims[2],n=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,c,h;l===void 0||l.mean===void 0?c=[255,255,255,255]:typeof l.mean=="number"?c=[l.mean,l.mean,l.mean,l.mean]:(c=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(c[3]=l.mean[3])),l===void 0||l.bias===void 0?h=[0,0,0,0]:typeof l.bias=="number"?h=[l.bias,l.bias,l.bias,l.bias]:(h=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(h[3]=l.bias[3]));let p=s*a;if(t!==void 0&&(t.format!==void 0&&n===4&&t.format!=="RGBA"||n===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,b=0,y=1,$=2,k=3,x=0,_=p,T=p*2,S=-1;u==="RGBA"?(x=0,_=p,T=p*2,S=p*3):u==="RGB"?(x=0,_=p,T=p*2):u==="RBG"&&(x=0,T=p,_=p*2),i=r.createImageData(a,s);for(let E=0;E<s*a;b+=g,y+=g,$+=g,k+=g,E++)i.data[b]=(e.data[x++]-h[0])*c[0],i.data[y]=(e.data[_++]-h[1])*c[1],i.data[$]=(e.data[T++]-h[2])*c[2],i.data[k]=S===-1?255:(e.data[S++]-h[3])*c[3]}else throw new Error("Can not access image data");return i}}),Hr,Sc,Tc,Ic,Ec,zc,ny=L(()=>{"use strict";un(),Hr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},s,n;typeof a.mean=="number"?s=[a.mean,a.mean,a.mean,a.mean]:s=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?n=[a.bias,a.bias,a.bias,a.bias]:n=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",c=r*i,h=l==="RGBA"?new Float32Array(c*4):new Float32Array(c*3),p=4,g=0,b=1,y=2,$=3,k=0,x=c,_=c*2,T=-1;u==="RGB"&&(p=3,g=0,b=1,y=2,$=-1),l==="RGBA"?T=c*3:l==="RBG"?(k=0,_=c,x=c*2):l==="BGR"&&(_=0,x=c,k=c*2);for(let S=0;S<c;S++,g+=p,y+=p,b+=p,$+=p)h[k++]=(e[g]+n[0])/s[0],h[x++]=(e[b]+n[1])/s[1],h[_++]=(e[y]+n[2])/s[2],T!==-1&&$!==-1&&(h[T++]=(e[$]+n[3])/s[3]);return l==="RGBA"?new We("float32",h,[1,4,r,i]):new We("float32",h,[1,3,r,i])},Sc=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",n,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},c=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(r){let h=l();h.width=e.width,h.height=e.height;let p=c(h);if(p!=null){let g=e.height,b=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,b=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=b}else u.tensorFormat="RGBA",u.height=g,u.width=b;p.drawImage(e,0,0),n=p.getImageData(0,0,b,g).data}else throw new Error("Can not access image data")}else if(i){let h,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(h=t.resizedHeight,p=t.resizedWidth):(h=e.height,p=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=h,u.width=p,t!==void 0){let g=l();g.width=p,g.height=h;let b=c(g);if(b!=null)b.putImageData(e,0,0),n=b.getImageData(0,0,p,h).data;else throw new Error("Can not access image data")}else n=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=l();h.width=e.width,h.height=e.height;let p=c(h);if(p!=null){let g=e.height,b=e.width;return p.drawImage(e,0,0,b,g),n=p.getImageData(0,0,b,g).data,u.height=g,u.width=b,Hr(n,u)}else throw new Error("Can not access image data")}else{if(s)return new Promise((h,p)=>{let g=l(),b=c(g);if(!e||!b)return p();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{g.width=y.width,g.height=y.height,b.drawImage(y,0,0,g.width,g.height);let $=b.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,h(Hr($.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(n!==void 0)return Hr(n,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Tc=(e,t)=>{let{width:r,height:i,download:a,dispose:s}=t,n=[1,i,r,4];return new We({location:"texture",type:"float32",texture:e,dims:n,download:a,dispose:s})},Ic=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new We({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:s})},Ec=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new We({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:s})},zc=(e,t,r)=>new We({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),qt,Sr,Wi,Cc,sy=L(()=>{"use strict";qt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Sr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Wi=!1,Cc=()=>{if(!Wi){Wi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(qt.set("int64",BigInt64Array),Sr.set(BigInt64Array,"int64")),t&&(qt.set("uint64",BigUint64Array),Sr.set(BigUint64Array,"uint64")),i?(qt.set("float16",r),Sr.set(r,"float16")):qt.set("float16",Uint16Array)}}}),Nc,Ac,oy=L(()=>{"use strict";un(),Nc=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Ac=(e,t)=>{switch(e.location){case"cpu":return new We(e.type,e.data,t);case"cpu-pinned":return new We({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new We({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new We({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new We({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),We,un=L(()=>{"use strict";ay(),ny(),sy(),oy(),We=class{constructor(e,t,r){Cc();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let n=qt.get(i);if(!n)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof n))throw new TypeError(`buffer should be of type ${n.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let n,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");n=t}else{let l=qt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?n=l.from(t,BigInt):n=l.from(t)}else if(t instanceof l)n=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")n=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)n=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",n=e;else if(l==="boolean")i="bool",n=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",n=Uint8Array.from(e);else{let l=Sr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,n=e}if(u===void 0)u=[n.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=n,this.dataLocation="cpu"}let s=Nc(a);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=s}static async fromImage(e,t){return Sc(e,t)}static fromTexture(e,t){return Tc(e,t)}static fromGpuBuffer(e,t){return Ic(e,t)}static fromMLTensor(e,t){return Ec(e,t)}static fromPinnedBuffer(e,t,r){return zc(e,t,r)}toDataURL(e){return xc(this,e)}toImageData(e){return kc(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ac(this,e)}}}),it,Oc=L(()=>{"use strict";un(),it=We}),ui,Vi,lt,at,Vt,Gt,Rc=L(()=>{"use strict";vc(),ui=(e,t)=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||console.timeStamp(`${e}::ORT::${t}`)},Vi=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),ui("CPU",s);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},lt=e=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||Vi("BEGIN",e)},at=e=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||Vi("END",e)},Vt=e=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||console.time(`ORT::${e}`)},Gt=e=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||console.timeEnd(`ORT::${e}`)}}),Dc,uy=L(()=>{"use strict";wc(),Oc(),Rc(),Dc=class Bc{constructor(t){this.handler=t}async run(t,r,i){lt(),Vt("InferenceSession.run");let a={},s={};if(typeof t!="object"||t===null||t instanceof it||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let n=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof it)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");n=!1;for(let c of r){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);a[c]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let c=!1,h=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(h.indexOf(p)!==-1){let g=r[p];(g===null||g instanceof it)&&(c=!0,n=!1,a[p]=g)}if(c){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let c of this.inputNames)if(typeof t[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(n)for(let c of this.outputNames)a[c]=null;let u=await this.handler.run(t,a,s),l={};for(let c in u)if(Object.hasOwnProperty.call(u,c)){let h=u[c];h instanceof it?l[c]=h:l[c]=new it(h.type,h.data,h.dims)}return Gt("InferenceSession.run"),at(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){lt(),Vt("InferenceSession.create");let s,n={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let h=t,p=0,g=t.byteLength;if(typeof r=="object"&&r!==null)n=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(g=t.byteLength-p,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||p+g>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-p}].`);if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(h,p,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await _c(n),c=await u.createInferenceSessionHandler(s,l);return Gt("InferenceSession.create"),at(),new Bc(c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),ln,ly=L(()=>{"use strict";uy(),ln=Dc}),dy=L(()=>{"use strict"}),cy=L(()=>{"use strict"}),py=L(()=>{"use strict"}),hy=L(()=>{"use strict"}),my={};sr(my,{InferenceSession:()=>ln,TRACE:()=>ui,TRACE_EVENT_BEGIN:()=>Vt,TRACE_EVENT_END:()=>Gt,TRACE_FUNC_BEGIN:()=>lt,TRACE_FUNC_END:()=>at,Tensor:()=>it,env:()=>xe,registerBackend:()=>er});var Ke=L(()=>{"use strict";ty(),iy(),ly(),Oc(),dy(),cy(),Rc(),py(),hy()}),dn=L(()=>{"use strict"}),Mc={};sr(Mc,{default:()=>Uc});var Gi,Hi,Uc,fy=L(()=>{"use strict";Hm(),Xt(),cn(),Gi="ort-wasm-proxy-worker",Hi=globalThis.self?.name===Gi,Hi&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":pn(r.wasm).then(()=>{zn(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Cn(a,i).then(()=>{postMessage({type:t})},s=>{postMessage({type:t,err:s})});break}case"copy-from":{let{buffer:i}=r,a=fi(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;Nn(i,a).then(s=>{postMessage({type:t,out:s})},s=>{postMessage({type:t,err:s})});break}case"release":An(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:s,outputIndices:n,options:u}=r;On(i,a,s,n,new Array(n.length).fill(null),u).then(l=>{l.some(c=>c[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},Dn([...s,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":Rn(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Uc=Hi?null:e=>new Worker(e??je,{type:"module",name:Gi})}),Pc={};sr(Pc,{default:()=>Lc});async function Ao(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,a=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(o,d)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Yc||(t.Yc=new Map)).set(o,d)},t.unmountExternalData=()=>{delete t.Yc,delete t.Zd,delete t.Yd,delete t.$d},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let s=o=>async(...d)=>{try{if(t.Xc)throw Error("Session already started");let f=t.Xc={Kd:d[0],errors:[]},m=await o(...d);if(t.Xc!==f)throw Error("Session mismatch");t.dd?.flush();let v=f.errors;if(0<v.length){let I=await Promise.all(v);if(I=I.filter(A=>A),0<I.length)throw Error(I.join(`
`))}return m}finally{t.Xc=null}};t.jsepInit=(o,d)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=d;let f=t.dd;t.jsepRegisterBuffer=(m,v,I,A)=>f.registerBuffer(m,v,I,A),t.jsepGetBuffer=m=>f.getBuffer(m),t.jsepCreateDownloader=(m,v,I)=>f.createDownloader(m,v,I),t.jsepOnCreateSession=m=>{f.onCreateSession(m)},t.jsepOnReleaseSession=m=>{f.onReleaseSession(m)},t.jsepOnRunStart=m=>f.onRunStart(m),t.Id=(m,v)=>{f.upload(m,v)}}else if(o==="webnn"){let f=d[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=d.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=m=>f.onRunStart(m),t.webnnOnRunEnd=f.onRunEnd.bind(f),t.webnnOnReleaseSession=m=>{f.onReleaseSession(m)},t.webnnCreateMLTensorDownloader=(m,v)=>f.createMLTensorDownloader(m,v),t.webnnRegisterMLTensor=(m,v,I,A)=>f.registerMLTensor(m,v,I,A),t.webnnCreateMLContext=m=>f.createMLContext(m),t.webnnRegisterGraphInput=f.registerGraphInput.bind(f),t.webnnIsGraphInput=f.isGraphInput.bind(f),t.webnnRegisterGraphOutput=f.registerGraphOutput.bind(f),t.webnnIsGraphOutput=f.isGraphOutput.bind(f),t.webnnCreateTemporaryTensor=f.createTemporaryTensor.bind(f),t.webnnIsGraphInputOutputTypeSupported=f.isGraphInputOutputTypeSupported.bind(f)}};let n=()=>{let o=d=>(...f)=>{let m=st;return f=d(...f),st!=m?new Promise((v,I)=>{Ii={resolve:v,reject:I}}):f};(()=>{for(let d of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[d]=o(t[d])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),n=void 0};t.asyncInit=()=>{n?.()};var u,l,c=(o,d)=>{throw d},h=import.meta.url,p="";if(r||i){try{p=new URL(".",h).href}catch{}i&&(l=o=>{var d=new XMLHttpRequest;return d.open("GET",o,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),u=async o=>{if(N(o))return new Promise((f,m)=>{var v=new XMLHttpRequest;v.open("GET",o,!0),v.responseType="arraybuffer",v.onload=()=>{v.status==200||v.status==0&&v.response?f(v.response):m(v.status)},v.onerror=m,v.send(null)});var d=await fetch(o,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw Error(d.status+" : "+d.url)}}var g,b,y,$,k,x,_=console.log.bind(console),T=console.error.bind(console),S=_,E=T,z=!1,N=o=>o.startsWith("file://");function w(){bt.buffer!=q.buffer&&te()}if(a){let o=function(d){try{var f=d.data,m=f.Sc;if(m==="load"){let v=[];self.onmessage=I=>v.push(I),x=()=>{postMessage({Sc:"loaded"});for(let I of v)o(I);self.onmessage=o};for(let I of f.xd)t[I]&&!t[I].proxy||(t[I]=(...A)=>{postMessage({Sc:"callHandler",vd:I,args:A})},I=="print"&&(S=t[I]),I=="printErr"&&(E=t[I]));bt=f.Od,te(),b=f.Pd,Ne(),Wr()}else if(m==="run"){(function(v){var I=(w(),M)[v+52>>>2>>>0];v=(w(),M)[v+56>>>2>>>0],Bs(I,I-v),ce(I)})(f.Rc),Ai(f.Rc,0,0,1,0,0),Mn(),ki(f.Rc),U||(Cs(),U=!0);try{hf(f.Md,f.bd)}catch(v){if(v!="unwind")throw v}}else f.target!=="setimmediate"&&(m==="checkMailbox"?U&&Br():m&&(E(`worker: received unknown command ${m}`),E(f)))}catch(v){throw Ns(),v}};var U=!1;self.onunhandledrejection=d=>{throw d.reason||d},self.onmessage=o}var q,Z,G,K,R,M,F,J,ie,re,ne,P=!1;function te(){var o=bt.buffer;t.HEAP8=q=new Int8Array(o),G=new Int16Array(o),t.HEAPU8=Z=new Uint8Array(o),K=new Uint16Array(o),t.HEAP32=R=new Int32Array(o),t.HEAPU32=M=new Uint32Array(o),F=new Float32Array(o),J=new Float64Array(o),ie=new BigInt64Array(o),re=new BigUint64Array(o)}function Q(){P=!0,a?x():pt.sb()}function V(o){throw E(o="Aborted("+o+")"),z=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),k?.(o),o}function ze(){return{a:{ma:Bg,hb:Dg,g:mf,J:ff,f:gf,o:yf,i:bf,$:_f,b:wf,S:$f,Ia:Wn,n:vf,aa:Fn,Ya:Kn,Ea:Xn,Ga:Zn,Za:Yn,Wa:Qn,Pa:Jn,Va:es,ka:ts,Fa:rs,Ca:is,Xa:as,Da:ns,cb:xf,fa:kf,xa:Sf,va:If,ea:zf,N:Cf,H:Nf,wa:Af,_:Pf,ya:Lf,Sa:qf,Aa:Wf,Ja:Vf,ta:Gf,ga:Hf,Ra:ki,$a:Ff,Q:Yf,r:rg,c:vi,ib:ig,y:ag,M:ng,D:sg,l:og,s:hs,jb:ug,I:lg,R:dg,j:cg,u:pg,q:hg,k:mg,Ma:fg,Na:gg,Oa:yg,Ka:ys,La:bs,ua:_s,eb:_g,bb:$g,v:vg,ba:xg,ha:kg,ab:wg,V:Sg,_a:Tg,Ba:Ig,F:bg,T:Eg,la:qr,za:Cg,gb:zg,fb:Ng,Ta:xs,Ua:ks,Ha:yt,U:Ss,ja:Ts,Qa:Is,ia:Es,lb:b0,na:h0,mb:y0,oa:p0,G:r0,e:Lg,t:Ug,w:Mg,B:Zg,nb:l0,Z:u0,x:Wg,pa:d0,X:m0,ca:o0,ob:s0,pb:n0,O:Yg,qa:a0,qb:i0,L:e0,Y:c0,d:Pg,A:jg,m:qg,kb:_0,p:Gg,z:Hg,C:Vg,E:Fg,K:Qg,ra:t0,P:f0,da:Jg,W:g0,rb:Xg,sa:Kg,h:Og,a:bt,db:qe}}}async function Ne(){function o(m,v){var I=pt=m.exports;m={};for(let[A,B]of Object.entries(I))typeof B=="function"?(I=Kf(B),m[A]=I):m[A]=B;return pt=m,pt=(function(){var A=pt,B=H=>ue=>H(ue)>>>0,j=H=>()=>H()>>>0;return(A=Object.assign({},A)).tb=B(A.tb),A.Xb=j(A.Xb),A.Zb=B(A.Zb),A.lc=B(A.lc),A.mc=j(A.mc),A.qc=B(A.qc),A})(),Be.push(pt._b),zs=(m=pt).tb,Cs=m.ub,t._OrtInit=m.vb,t._OrtGetLastError=m.wb,t._OrtCreateSessionOptions=m.xb,t._OrtAppendExecutionProvider=m.yb,t._OrtAddFreeDimensionOverride=m.zb,t._OrtAddSessionConfigEntry=m.Ab,t._OrtReleaseSessionOptions=m.Bb,t._OrtCreateSession=m.Cb,t._OrtReleaseSession=m.Db,t._OrtGetInputOutputCount=m.Eb,t._OrtGetInputOutputMetadata=m.Fb,t._OrtFree=m.Gb,t._OrtCreateTensor=m.Hb,t._OrtGetTensorData=m.Ib,t._OrtReleaseTensor=m.Jb,t._OrtCreateRunOptions=m.Kb,t._OrtAddRunConfigEntry=m.Lb,t._OrtReleaseRunOptions=m.Mb,t._OrtCreateBinding=m.Nb,t._OrtBindInput=m.Ob,t._OrtBindOutput=m.Pb,t._OrtClearBoundOutputs=m.Qb,t._OrtReleaseBinding=m.Rb,t._OrtRunWithBinding=m.Sb,t._OrtRun=m.Tb,t._OrtEndProfiling=m.Ub,t._JsepOutput=m.Vb,t._JsepGetNodeName=m.Wb,jr=m.Xb,ot=t._free=m.Yb,ur=t._malloc=m.Zb,Ai=m.ac,Ns=m.bc,As=m.cc,Os=m.dc,Oi=m.ec,Rs=m.fc,Ds=m.gc,he=m.hc,lr=m.ic,Bs=m.jc,ce=m.kc,Ri=m.lc,pe=m.mc,Ms=m.nc,Di=m.oc,Us=m.pc,Ps=m.qc,Ls=m.rc,Bi=m.sc,qs=m.tc,js=m.uc,Ws=m.vc,Vs=m.wc,Gs=m.xc,Hs=m.yc,Fs=m.zc,Ks=m.Ac,Xs=m.Bc,Zs=m.Cc,Ys=m.Dc,Qs=m.Ec,Js=m.Fc,eo=m.Gc,to=m.Hc,ro=m.Ic,io=m.Jc,ao=m.Kc,no=m.Lc,so=m.Mc,oo=m.Nc,uo=m.Pc,lo=m.Qc,co=m.$c,po=m.ad,ho=m.fd,mo=m.kd,fo=m.ld,go=m.md,yo=m.nd,bo=m.od,_o=m.pd,wo=m.qd,$o=m.rd,vo=m.wd,xo=m.Ud,ko=m.Vd,So=m.Wd,To=m.Xd,b=v,pt}var d,f=ze();return t.instantiateWasm?new Promise(m=>{t.instantiateWasm(f,(v,I)=>{m(o(v,I))})}):a?o(new WebAssembly.Instance(b,ze()),b):(ne??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",p):p+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-D-icqfN-.wasm",import.meta.url).href,d=await(async function(m){var v=ne;if(!g&&!N(v))try{var I=fetch(v,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(I,m)}catch(A){E(`wasm streaming compile failed: ${A}`),E("falling back to ArrayBuffer instantiation")}return(async function(A,B){try{var j=await(async function(H){if(!g)try{var ue=await u(H);return new Uint8Array(ue)}catch{}if(H==ne&&g)H=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";H=l(H)}return H})(A);return await WebAssembly.instantiate(j,B)}catch(H){E(`failed to asynchronously prepare wasm: ${H}`),V(H)}})(v,m)})(f),o(d.instance,d.module))}class Se{name="ExitStatus";constructor(d){this.message=`Program terminated with exit(${d})`,this.status=d}}var Ae=o=>{o.terminate(),o.onmessage=()=>{}},_e=[],ve=0,W=null,me=o=>{Xe.length==0&&(Pn(),Un(Xe[0]));var d=Xe.pop();if(!d)return 6;Ge.push(d),Oe[o.Rc]=d,d.Rc=o.Rc;var f={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return d.postMessage(f,o.jd),0},de=0,le=(o,d,...f)=>{var m,v=16*f.length,I=pe(),A=Ri(v),B=A>>>3;for(m of f)typeof m=="bigint"?((w(),ie)[B++>>>0]=1n,(w(),ie)[B++>>>0]=m):((w(),ie)[B++>>>0]=0n,(w(),J)[B++>>>0]=m);return o=As(o,0,v,A,d),ce(I),o};function qe(o){if(a)return le(0,1,o);if(y=o,!(0<de)){for(var d of Ge)Ae(d);for(d of Xe)Ae(d);Xe=[],Ge=[],Oe={},z=!0}c(0,new Se(o))}function dt(o){if(a)return le(1,0,o);yt(o)}var yt=o=>{if(y=o,a)throw dt(o),"unwind";qe(o)},Xe=[],Ge=[],Be=[],Oe={},Bn=o=>{var d=o.Rc;delete Oe[d],Xe.push(o),Ge.splice(Ge.indexOf(o),1),o.Rc=0,Os(d)};function Mn(){Be.forEach(o=>o())}var Un=o=>new Promise(d=>{o.onmessage=v=>{var I=v.data;if(v=I.Sc,I.Zc&&I.Zc!=jr()){var A=Oe[I.Zc];A?A.postMessage(I,I.jd):E(`Internal error! Worker sent a message "${v}" to target pthread ${I.Zc}, but that thread no longer exists!`)}else v==="checkMailbox"?Br():v==="spawnThread"?me(I):v==="cleanupThread"?Dr(()=>{Bn(Oe[I.Nd])}):v==="loaded"?(o.loaded=!0,d(o)):I.target==="setimmediate"?o.postMessage(I):v==="uncaughtException"?o.onerror(I.error):v==="callHandler"?t[I.vd](...I.args):v&&E(`worker sent an unknown command ${v}`)},o.onerror=v=>{throw E(`worker sent an error! ${v.filename}:${v.lineno}: ${v.message}`),v};var f,m=[];for(f of[])t.propertyIsEnumerable(f)&&m.push(f);o.postMessage({Sc:"load",xd:m,Od:bt,Pd:b})});function Pn(){var o=new Worker((()=>{let d=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new d("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Xe.push(o)}var bt,hf=(o,d)=>{de=0,o=Bi(o,d),0<de?y=o:Oi(o)},Ar=[],Or=0;function mf(o){var d=new bi(o>>>=0);return(w(),q)[d.Tc+12>>>0]==0&&(Ln(d,!0),Or--),qn(d,!1),Ar.push(d),Ps(o)}var Yt=0,ff=()=>{he(0,0);var o=Ar.pop();Ms(o.cd),Yt=0};function Ln(o,d){d=d?1:0,(w(),q)[o.Tc+12>>>0]=d}function qn(o,d){d=d?1:0,(w(),q)[o.Tc+13>>>0]=d}class bi{constructor(d){this.cd=d,this.Tc=d-24}}var _i=o=>{var d=Yt;if(!d)return lr(0),0;var f=new bi(d);(w(),M)[f.Tc+16>>>2>>>0]=d;var m=(w(),M)[f.Tc+4>>>2>>>0];if(!m)return lr(0),d;for(var v of o){if(v===0||v===m)break;if(Us(v,m,f.Tc+16))return lr(v),d}return lr(m),d};function gf(){return _i([])}function yf(o){return _i([o>>>0])}function bf(o,d,f,m){return _i([o>>>0,d>>>0,f>>>0,m>>>0])}var _f=()=>{var o=Ar.pop();o||V("no exception to throw");var d=o.cd;throw(w(),q)[o.Tc+13>>>0]==0&&(Ar.push(o),qn(o,!0),Ln(o,!1),Or++),Di(d),Yt=d};function wf(o,d,f){var m=new bi(o>>>=0);throw d>>>=0,f>>>=0,(w(),M)[m.Tc+16>>>2>>>0]=0,(w(),M)[m.Tc+4>>>2>>>0]=d,(w(),M)[m.Tc+8>>>2>>>0]=f,Di(o),Or++,Yt=o}var $f=()=>Or;function jn(o,d,f,m){return a?le(2,1,o,d,f,m):Wn(o,d,f,m)}function Wn(o,d,f,m){if(o>>>=0,d>>>=0,f>>>=0,m>>>=0,!globalThis.SharedArrayBuffer)return 6;var v=[];return a&&v.length===0?jn(o,d,f,m):(o={Ld:f,Rc:o,bd:m,jd:v},a?(o.Sc="spawnThread",postMessage(o,v),0):me(o))}function vf(o){throw Yt||=o>>>0,Yt}var Vn=globalThis.TextDecoder&&new TextDecoder,Gn=(o,d,f,m)=>{if(f=d+f,m)return f;for(;o[d]&&!(d>=f);)++d;return d},Hn=(o,d=0,f,m)=>{if(16<(f=Gn(o,d>>>=0,f,m))-d&&o.buffer&&Vn)return Vn.decode(o.buffer instanceof ArrayBuffer?o.subarray(d,f):o.slice(d,f));for(m="";d<f;){var v=o[d++];if(128&v){var I=63&o[d++];if((224&v)==192)m+=String.fromCharCode((31&v)<<6|I);else{var A=63&o[d++];65536>(v=(240&v)==224?(15&v)<<12|I<<6|A:(7&v)<<18|I<<12|A<<6|63&o[d++])?m+=String.fromCharCode(v):(v-=65536,m+=String.fromCharCode(55296|v>>10,56320|1023&v))}}else m+=String.fromCharCode(v)}return m},Ce=(o,d,f)=>(o>>>=0)?Hn((w(),Z),o,d,f):"";function Fn(o,d,f){return a?le(3,1,o,d,f):0}function Kn(o,d){if(a)return le(4,1,o,d)}function Xn(o,d){if(a)return le(5,1,o,d)}function Zn(o,d,f){if(a)return le(6,1,o,d,f)}function Yn(o,d,f){return a?le(7,1,o,d,f):0}function Qn(o,d){if(a)return le(8,1,o,d)}function Jn(o,d,f){if(a)return le(9,1,o,d,f)}function es(o,d,f,m){if(a)return le(10,1,o,d,f,m)}function ts(o,d,f,m){if(a)return le(11,1,o,d,f,m)}function rs(o,d,f,m){if(a)return le(12,1,o,d,f,m)}function is(o){if(a)return le(13,1,o)}function as(o,d){if(a)return le(14,1,o,d)}function ns(o,d,f){if(a)return le(15,1,o,d,f)}var xf=()=>V(""),nt=o=>{o>>>=0;for(var d="";;){var f=(w(),Z)[o++>>>0];if(!f)return d;d+=String.fromCharCode(f)}},wi={},$i={},Qt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function ct(o,d,f={}){return(function(m,v,I={}){var A=v.name;if(!m)throw new Qt(`type "${A}" must have a positive integer typeid pointer`);if($i.hasOwnProperty(m)){if(I.yd)return;throw new Qt(`Cannot register type '${A}' twice`)}$i[m]=v,wi.hasOwnProperty(m)&&(v=wi[m],delete wi[m],v.forEach(B=>B()))})(o,d,f)}var ss=(o,d,f)=>{switch(d){case 1:return f?m=>(w(),q)[m>>>0]:m=>(w(),Z)[m>>>0];case 2:return f?m=>(w(),G)[m>>>1>>>0]:m=>(w(),K)[m>>>1>>>0];case 4:return f?m=>(w(),R)[m>>>2>>>0]:m=>(w(),M)[m>>>2>>>0];case 8:return f?m=>(w(),ie)[m>>>3>>>0]:m=>(w(),re)[m>>>3>>>0];default:throw new TypeError(`invalid integer width (${d}): ${o}`)}};function kf(o,d,f,m,v){o>>>=0,f>>>=0,d=nt(d>>>0);let I=A=>A;if(m=m===0n){let A=8*f;I=B=>BigInt.asUintN(A,B),v=I(v)}ct(o,{name:d,Oc:I,Vc:(A,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Uc:ss(d,f,!m),Wc:null})}function Sf(o,d,f,m){ct(o>>>=0,{name:d=nt(d>>>0),Oc:function(v){return!!v},Vc:function(v,I){return I?f:m},Uc:function(v){return this.Oc((w(),Z)[v>>>0])},Wc:null})}var os=[],Rt=[0,1,,1,null,1,!0,1,!1,1];function vi(o){9<(o>>>=0)&&--Rt[o+1]===0&&(Rt[o]=void 0,os.push(o))}var He=o=>{if(!o)throw new Qt(`Cannot use deleted val. handle = ${o}`);return Rt[o]},Ze=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let d=os.pop()||Rt.length;return Rt[d]=o,Rt[d+1]=1,d}};function xi(o){return this.Oc((w(),M)[o>>>2>>>0])}var Tf={name:"emscripten::val",Oc:o=>{var d=He(o);return vi(o),d},Vc:(o,d)=>Ze(d),Uc:xi,Wc:null};function If(o){return ct(o>>>0,Tf)}var Ef=(o,d)=>{switch(d){case 4:return function(f){return this.Oc((w(),F)[f>>>2>>>0])};case 8:return function(f){return this.Oc((w(),J)[f>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${o}`)}};function zf(o,d,f){f>>>=0,ct(o>>>=0,{name:d=nt(d>>>0),Oc:m=>m,Vc:(m,v)=>v,Uc:Ef(d,f),Wc:null})}function Cf(o,d,f,m,v){o>>>=0,f>>>=0,d=nt(d>>>0);let I=B=>B;if(m===0){var A=32-8*f;I=B=>B<<A>>>A,v=I(v)}ct(o,{name:d,Oc:I,Vc:(B,j)=>j,Uc:ss(d,f,m!==0),Wc:null})}function Nf(o,d,f){function m(I){var A=(w(),M)[I>>>2>>>0];return I=(w(),M)[I+4>>>2>>>0],new v((w(),q).buffer,I,A)}var v=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][d];ct(o>>>=0,{name:f=nt(f>>>0),Oc:m,Uc:m},{yd:!0})}var _t=(o,d,f)=>{var m=(w(),Z);if(d>>>=0,0<f){var v=d;f=d+f-1;for(var I=0;I<o.length;++I){var A=o.codePointAt(I);if(127>=A){if(d>=f)break;m[d++>>>0]=A}else if(2047>=A){if(d+1>=f)break;m[d++>>>0]=192|A>>6,m[d++>>>0]=128|63&A}else if(65535>=A){if(d+2>=f)break;m[d++>>>0]=224|A>>12,m[d++>>>0]=128|A>>6&63,m[d++>>>0]=128|63&A}else{if(d+3>=f)break;m[d++>>>0]=240|A>>18,m[d++>>>0]=128|A>>12&63,m[d++>>>0]=128|A>>6&63,m[d++>>>0]=128|63&A,I++}}m[d>>>0]=0,o=d-v}else o=0;return o},Rr=o=>{for(var d=0,f=0;f<o.length;++f){var m=o.charCodeAt(f);127>=m?d++:2047>=m?d+=2:55296<=m&&57343>=m?(d+=4,++f):d+=3}return d};function Af(o,d){ct(o>>>=0,{name:d=nt(d>>>0),Oc(f){var m=(w(),M)[f>>>2>>>0];return m=Ce(f+4,m,!0),ot(f),m},Vc(f,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var v=typeof m=="string";if(!(v||ArrayBuffer.isView(m)&&m.BYTES_PER_ELEMENT==1))throw new Qt("Cannot pass non-string to std::string");var I=v?Rr(m):m.length,A=ur(4+I+1),B=A+4;return(w(),M)[A>>>2>>>0]=I,v?_t(m,B,I+1):(w(),Z).set(m,B>>>0),f!==null&&f.push(ot,A),A},Uc:xi,Wc(f){ot(f)}})}var us=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Of=(o,d,f)=>{if(o>>>=1,16<(d=Gn((w(),K),o,d/2,f))-o&&us)return us.decode((w(),K).slice(o,d));for(f="";o<d;++o){var m=(w(),K)[o>>>0];f+=String.fromCharCode(m)}return f},Rf=(o,d,f)=>{if(f??=2147483647,2>f)return 0;var m=d;f=(f-=2)<2*o.length?f/2:o.length;for(var v=0;v<f;++v){var I=o.charCodeAt(v);(w(),G)[d>>>1>>>0]=I,d+=2}return(w(),G)[d>>>1>>>0]=0,d-m},Df=o=>2*o.length,Bf=(o,d,f)=>{var m="";o>>>=2;for(var v=0;!(v>=d/4);v++){var I=(w(),M)[o+v>>>0];if(!I&&!f)break;m+=String.fromCodePoint(I)}return m},Mf=(o,d,f)=>{if(d>>>=0,f??=2147483647,4>f)return 0;var m=d;f=m+f-4;for(var v=0;v<o.length;++v){var I=o.codePointAt(v);if(65535<I&&v++,(w(),R)[d>>>2>>>0]=I,(d+=4)+4>f)break}return(w(),R)[d>>>2>>>0]=0,d-m},Uf=o=>{for(var d=0,f=0;f<o.length;++f)65535<o.codePointAt(f)&&f++,d+=4;return d};function Pf(o,d,f){if(o>>>=0,d>>>=0,f=nt(f>>>=0),d===2)var m=Of,v=Rf,I=Df;else m=Bf,v=Mf,I=Uf;ct(o,{name:f,Oc:A=>{var B=(w(),M)[A>>>2>>>0];return B=m(A+4,B*d,!0),ot(A),B},Vc:(A,B)=>{if(typeof B!="string")throw new Qt(`Cannot pass non-string to C++ string type ${f}`);var j=I(B),H=ur(4+j+d);return(w(),M)[H>>>2>>>0]=j/d,v(B,H+4,j+d),A!==null&&A.push(ot,H),H},Uc:xi,Wc(A){ot(A)}})}function Lf(o,d){ct(o>>>=0,{zd:!0,name:d=nt(d>>>0),Oc:()=>{},Vc:()=>{}})}function qf(o){Ai(o>>>0,!i,1,!r,131072,!1),Mn()}var Dr=o=>{if(!z)try{if(o(),!(0<de))try{a?jr()&&Oi(y):yt(y)}catch(d){d instanceof Se||d=="unwind"||c(0,d)}}catch(d){d instanceof Se||d=="unwind"||c(0,d)}},jf=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ki(o){o>>>=0,jf||(Atomics.waitAsync((w(),R),o>>>2,o).value.then(Br),o+=128,Atomics.store((w(),R),o>>>2,1))}var Br=()=>Dr(()=>{var o=jr();o&&(ki(o),Ds())});function Wf(o,d){(o>>>=0)==d>>>0?setTimeout(Br):a?postMessage({Zc:o,Sc:"checkMailbox"}):(o=Oe[o])&&o.postMessage({Sc:"checkMailbox"})}var Si=[];function Vf(o,d,f,m,v){for(d>>>=0,v>>>=0,Si.length=0,f=v>>>3,m=v+m>>>3;f<m;){var I;I=(w(),ie)[f++>>>0]?(w(),ie)[f++>>>0]:(w(),J)[f++>>>0],Si.push(I)}return(d?Mi[d]:Rg[o])(...Si)}var Gf=()=>{de=0};function Hf(o){o>>>=0,a?postMessage({Sc:"cleanupThread",Nd:o}):Bn(Oe[o])}function Ff(o){}var Mr=o=>{try{o()}catch(d){V(d)}};function Kf(o){var d=(...f)=>{Ur.push(o);try{return o(...f)}finally{z||(Ur.pop(),st&&wt===1&&Ur.length===0&&(wt=0,de+=1,Mr(ko),typeof Fibers<"u"&&Fibers.be()))}};return cs.set(o,d),d}var wt=0,st=null,ls=0,Ur=[],Ti=new Map,ds=new Map,cs=new Map,Xf=0,Ii=null,Zf=[],ps=o=>(function(d){if(!z){if(wt===0){var f=!1,m=!1;d((v=0)=>{if(!z&&(ls=v,f=!0,m)){wt=2,Mr(()=>So(st)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),v=!1;try{var I=(function(){var j=(w(),R)[st+8>>>2>>>0];return j=ds.get(j),j=cs.get(j),--de,j()})()}catch(j){I=j,v=!0}var A=!1;if(!st){var B=Ii;B&&(Ii=null,(v?B.reject:B.resolve)(I),A=!0)}if(v&&!A)throw I}}),m=!0,f||(wt=1,st=(function(){var v=ur(65548),I=v+12;if((w(),M)[v>>>2>>>0]=I,(w(),M)[v+4>>>2>>>0]=I+65536,I=Ur[0],!Ti.has(I)){var A=Xf++;Ti.set(I,A),ds.set(A,I)}return I=Ti.get(I),(w(),R)[v+8>>>2>>>0]=I,v})(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),Mr(()=>xo(st)))}else wt===2?(wt=0,Mr(To),ot(st),st=null,Zf.forEach(Dr)):V(`invalid state: ${wt}`);return ls}})(d=>{o().then(d)});function Yf(o){return o>>>=0,ps(async()=>{var d=await He(o);return Ze(d)})}var Ei=[],Qf=o=>{var d=Ei.length;return Ei.push(o),d},Jf=(o,d)=>{for(var f=Array(o),m=0;m<o;++m){var v=m,I=(w(),M)[d+4*m>>>2>>>0],A=$i[I];if(A===void 0)throw o=`parameter ${m}`,I=zs(I),d=nt(I),ot(I),new Qt(`${o} has unknown type ${d}`);f[v]=A}return f},eg=(o,d,f)=>{var m=[];return o=o(m,f),m.length&&((w(),M)[d>>>2>>>0]=Ze(m)),o},tg={},Pr=o=>{var d=tg[o];return d===void 0?nt(o):d};function rg(o,d,f){var[m,...v]=Jf(o,d>>>0);d=m.Vc.bind(m);var I=v.map(j=>j.Uc.bind(j));o--;var A={toValue:He};switch(o=I.map((j,H)=>{var ue=`argFromPtr${H}`;return A[ue]=j,`${ue}(args${H?"+"+8*H:""})`}),f){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:A.getStringOrSymbol=Pr,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${o})`,m.zd||(A.toReturnWire=d,A.emval_returnValue=eg,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,f=new Function(Object.keys(A),B)(...Object.values(A)),B=`methodCaller<(${v.map(j=>j.name)}) => ${m.name}>`,Qf(Object.defineProperty(f,"name",{value:B}))}function ig(o,d){return d>>>=0,(o=He(o>>>0))==He(d)}function ag(o){return(o>>>=0)?(o=Pr(o),Ze(globalThis[o])):Ze(globalThis)}function ng(o){return o=Pr(o>>>0),Ze(t[o])}function sg(o,d){return d>>>=0,o=He(o>>>0),d=He(d),Ze(o[d])}function og(o){9<(o>>>=0)&&(Rt[o+1]+=1)}function hs(o,d,f,m,v){return Ei[o>>>0](d>>>0,f>>>0,m>>>0,v>>>0)}function ug(o,d,f,m,v){return hs(o>>>0,d>>>0,f>>>0,m>>>0,v>>>0)}function lg(){return Ze([])}function dg(o){o=He(o>>>0);for(var d=Array(o.length),f=0;f<o.length;f++)d[f]=o[f];return Ze(d)}function cg(o){return Ze(Pr(o>>>0))}function pg(){return Ze({})}function hg(o){for(var d=He(o>>>=0);d.length;){var f=d.pop();d.pop()(f)}vi(o)}function mg(o,d,f){d>>>=0,f>>>=0,o=He(o>>>0),d=He(d),f=He(f),o[d]=f}function fg(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(w(),R)[d>>>2>>>0]=o.getUTCSeconds(),(w(),R)[d+4>>>2>>>0]=o.getUTCMinutes(),(w(),R)[d+8>>>2>>>0]=o.getUTCHours(),(w(),R)[d+12>>>2>>>0]=o.getUTCDate(),(w(),R)[d+16>>>2>>>0]=o.getUTCMonth(),(w(),R)[d+20>>>2>>>0]=o.getUTCFullYear()-1900,(w(),R)[d+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(w(),R)[d+28>>>2>>>0]=o}var ms=o=>o%4==0&&(o%100!=0||o%400==0),fs=[0,31,60,91,121,152,182,213,244,274,305,335],gs=[0,31,59,90,120,151,181,212,243,273,304,334];function gg(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(w(),R)[d>>>2>>>0]=o.getSeconds(),(w(),R)[d+4>>>2>>>0]=o.getMinutes(),(w(),R)[d+8>>>2>>>0]=o.getHours(),(w(),R)[d+12>>>2>>>0]=o.getDate(),(w(),R)[d+16>>>2>>>0]=o.getMonth(),(w(),R)[d+20>>>2>>>0]=o.getFullYear()-1900,(w(),R)[d+24>>>2>>>0]=o.getDay();var f=(ms(o.getFullYear())?fs:gs)[o.getMonth()]+o.getDate()-1|0;(w(),R)[d+28>>>2>>>0]=f,(w(),R)[d+36>>>2>>>0]=-60*o.getTimezoneOffset(),f=new Date(o.getFullYear(),6,1).getTimezoneOffset();var m=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(f!=m&&o.getTimezoneOffset()==Math.min(m,f)),(w(),R)[d+32>>>2>>>0]=o}function yg(o){o>>>=0;var d=new Date((w(),R)[o+20>>>2>>>0]+1900,(w(),R)[o+16>>>2>>>0],(w(),R)[o+12>>>2>>>0],(w(),R)[o+8>>>2>>>0],(w(),R)[o+4>>>2>>>0],(w(),R)[o>>>2>>>0],0),f=(w(),R)[o+32>>>2>>>0],m=d.getTimezoneOffset(),v=new Date(d.getFullYear(),6,1).getTimezoneOffset(),I=new Date(d.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(I,v);return 0>f?(w(),R)[o+32>>>2>>>0]=+(v!=I&&A==m):0<f!=(A==m)&&(v=Math.max(I,v),d.setTime(d.getTime()+6e4*((0<f?A:v)-m))),(w(),R)[o+24>>>2>>>0]=d.getDay(),f=(ms(d.getFullYear())?fs:gs)[d.getMonth()]+d.getDate()-1|0,(w(),R)[o+28>>>2>>>0]=f,(w(),R)[o>>>2>>>0]=d.getSeconds(),(w(),R)[o+4>>>2>>>0]=d.getMinutes(),(w(),R)[o+8>>>2>>>0]=d.getHours(),(w(),R)[o+12>>>2>>>0]=d.getDate(),(w(),R)[o+16>>>2>>>0]=d.getMonth(),(w(),R)[o+20>>>2>>>0]=d.getYear(),o=d.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function ys(o,d,f,m,v,I,A){return a?le(16,1,o,d,f,m,v,I,A):-52}function bs(o,d,f,m,v,I){if(a)return le(17,1,o,d,f,m,v,I)}var or={},bg=()=>performance.timeOrigin+performance.now();function _s(o,d){if(a)return le(18,1,o,d);if(or[o]&&(clearTimeout(or[o].id),delete or[o]),!d)return 0;var f=setTimeout(()=>{delete or[o],Dr(()=>Rs(o,performance.timeOrigin+performance.now()))},d);return or[o]={id:f,ae:d},0}function _g(o,d,f,m){o>>>=0,d>>>=0,f>>>=0,m>>>=0;var v=new Date().getFullYear(),I=new Date(v,0,1).getTimezoneOffset();v=new Date(v,6,1).getTimezoneOffset();var A=Math.max(I,v);(w(),M)[o>>>2>>>0]=60*A,(w(),R)[d>>>2>>>0]=+(I!=v),o=(d=B=>{var j=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(j/60)).padStart(2,"0")}${String(j%60).padStart(2,"0")}`})(I),d=d(v),v<I?(_t(o,f,17),_t(d,m,17)):(_t(o,m,17),_t(d,f,17))}var wg=()=>Date.now();function $g(o,d,f){return f>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),(w(),ie)[f>>>3>>>0]=BigInt(o),0):28}var zi=[],ws=(o,d)=>{zi.length=0;for(var f;f=(w(),Z)[o++>>>0];){var m=f!=105;d+=(m&=f!=112)&&d%8?4:0,zi.push(f==112?(w(),M)[d>>>2>>>0]:f==106?(w(),ie)[d>>>3>>>0]:f==105?(w(),R)[d>>>2>>>0]:(w(),J)[d>>>3>>>0]),d+=m?8:4}return zi};function vg(o,d,f){return o>>>=0,d=ws(d>>>0,f>>>0),Mi[o](...d)}function xg(o,d,f){return o>>>=0,d=ws(d>>>0,f>>>0),Mi[o](...d)}var kg=()=>{};function Sg(o,d){return E(Ce(o>>>0,d>>>0))}var Tg=()=>{throw de+=1,"unwind"};function Ig(){return 4294901760}var Eg=()=>navigator.hardwareConcurrency,Dt={},Lr=o=>{var d;return(d=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+d[1]:(d=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+d[1]:0},$s=o=>{for(var d of o)(o=Lr(d))&&(Dt[o]=d)};function zg(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),$s(o),Dt.gd=Lr(o[3]),Dt.Jd=o,Dt.gd}function qr(o){if(!(o=Dt[o>>>0]))return 0;var d;if(d=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=d[1];else if(d=/^\s+at (.*) \(.*\)$/.exec(o))o=d[1];else{if(!(d=/^(.+?)@/.exec(o)))return 0;o=d[1]}ot(qr.hd??0),d=Rr(o)+1;var f=ur(d);return f&&_t(o,f,d),qr.hd=f,qr.hd}function Cg(o){o>>>=0;var d=(w(),Z).length;if(o<=d||4294901760<o)return!1;for(var f=1;4>=f;f*=2){var m=d*(1+.2/f);m=Math.min(m,o+100663296);e:{m=(Math.min(4294901760,65536*Math.ceil(Math.max(o,m)/65536))-bt.buffer.byteLength+65535)/65536|0;try{bt.grow(m),te();var v=1;break e}catch{}v=void 0}if(v)return!0}return!1}function Ng(o,d,f){if(o>>>=0,d>>>=0,Dt.gd==o)var m=Dt.Jd;else(m=Error().stack.toString().split(`
`))[0]=="Error"&&m.shift(),$s(m);for(var v=3;m[v]&&Lr(m[v])!=o;)++v;for(o=0;o<f&&m[o+v];++o)(w(),R)[d+4*o>>>2>>>0]=Lr(m[o+v]);return o}var Ci,Ni={},vs=()=>{if(!Ci){var o,d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in Ni)Ni[o]===void 0?delete d[o]:d[o]=Ni[o];var f=[];for(o in d)f.push(`${o}=${d[o]}`);Ci=f}return Ci};function xs(o,d){if(a)return le(19,1,o,d);o>>>=0,d>>>=0;var f,m=0,v=0;for(f of vs()){var I=d+m;(w(),M)[o+v>>>2>>>0]=I,m+=_t(f,I,1/0)+1,v+=4}return 0}function ks(o,d){if(a)return le(20,1,o,d);o>>>=0,d>>>=0;var f=vs();for(var m of((w(),M)[o>>>2>>>0]=f.length,o=0,f))o+=Rr(m)+1;return(w(),M)[d>>>2>>>0]=o,0}function Ss(o){return a?le(21,1,o):52}function Ts(o,d,f,m){return a?le(22,1,o,d,f,m):52}function Is(o,d,f,m){return a?le(23,1,o,d,f,m):70}var Ag=[null,[],[]];function Es(o,d,f,m){if(a)return le(24,1,o,d,f,m);d>>>=0,f>>>=0,m>>>=0;for(var v=0,I=0;I<f;I++){var A=(w(),M)[d>>>2>>>0],B=(w(),M)[d+4>>>2>>>0];d+=8;for(var j=0;j<B;j++){var H=o,ue=(w(),Z)[A+j>>>0],ge=Ag[H];ue===0||ue===10?((H===1?S:E)(Hn(ge)),ge.length=0):ge.push(ue)}v+=B}return(w(),M)[m>>>2>>>0]=v,0}function Og(o){return o>>>0}a||(function(){for(var o=t.numThreads-1;o--;)Pn();_e.push(async()=>{var d=(async function(){if(!a)return Promise.all(Xe.map(Un))})();ve++,await d,--ve==0&&W&&(d=W,W=null,d())})})(),a||(bt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),te()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>pe(),t.stackRestore=o=>ce(o),t.stackAlloc=o=>Ri(o),t.setValue=function(o,d,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":(w(),q)[o>>>0]=d;break;case"i16":(w(),G)[o>>>1>>>0]=d;break;case"i32":(w(),R)[o>>>2>>>0]=d;break;case"i64":(w(),ie)[o>>>3>>>0]=BigInt(d);break;case"float":(w(),F)[o>>>2>>>0]=d;break;case"double":(w(),J)[o>>>3>>>0]=d;break;case"*":(w(),M)[o>>>2>>>0]=d;break;default:V(`invalid type for setValue: ${f}`)}},t.getValue=function(o,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":return(w(),q)[o>>>0];case"i16":return(w(),G)[o>>>1>>>0];case"i32":return(w(),R)[o>>>2>>>0];case"i64":return(w(),ie)[o>>>3>>>0];case"float":return(w(),F)[o>>>2>>>0];case"double":return(w(),J)[o>>>3>>>0];case"*":return(w(),M)[o>>>2>>>0];default:V(`invalid type for getValue: ${d}`)}},t.UTF8ToString=Ce,t.stringToUTF8=_t,t.lengthBytesUTF8=Rr;var zs,Cs,jr,ot,ur,Ai,Ns,As,Os,Oi,Rs,Ds,he,lr,Bs,ce,Ri,pe,Ms,Di,Us,Ps,Ls,Bi,qs,js,Ws,Vs,Gs,Hs,Fs,Ks,Xs,Zs,Ys,Qs,Js,eo,to,ro,io,ao,no,so,oo,uo,lo,co,po,ho,mo,fo,go,yo,bo,_o,wo,$o,vo,xo,ko,So,To,pt,Rg=[qe,dt,jn,Fn,Kn,Xn,Zn,Yn,Qn,Jn,es,ts,rs,is,as,ns,ys,bs,_s,xs,ks,Ss,Ts,Is,Es],Mi={1055492:(o,d,f,m,v)=>{if(t===void 0||!t.Yc)return 1;if((o=Ce(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Yc.get(o)))return 2;if(d=Number(d>>>0),f=Number(f>>>0),m=Number(m>>>0),d+f>o.byteLength)return 3;try{let I=o.subarray(d,d+f);switch(v){case 0:(w(),Z).set(I,m>>>0);break;case 1:t.Qd?t.Qd(m,I):t.Id(m,I);break;default:return 4}return 0}catch{return 4}},1056316:(o,d,f)=>{t.td(o,(w(),Z).subarray(d>>>0,d+f>>>0))},1056380:()=>t.Sd(),1056422:o=>{t.sd(o)},1056459:()=>{t.Bd()},1056490:()=>{t.Cd()},1056519:()=>{t.Gd()},1056544:o=>t.Ad(o),1056577:o=>t.Ed(o),1056609:(o,d,f)=>{t.ed(Number(o),Number(d),Number(f),!0)},1056672:(o,d,f)=>{t.ed(Number(o),Number(d),Number(f))},1056729:()=>typeof wasmOffsetConverter<"u",1056786:o=>{t.$b("Abs",o,void 0)},1056837:o=>{t.$b("Neg",o,void 0)},1056888:o=>{t.$b("Floor",o,void 0)},1056941:o=>{t.$b("Ceil",o,void 0)},1056993:o=>{t.$b("Reciprocal",o,void 0)},1057051:o=>{t.$b("Sqrt",o,void 0)},1057103:o=>{t.$b("Exp",o,void 0)},1057154:o=>{t.$b("Erf",o,void 0)},1057205:o=>{t.$b("Sigmoid",o,void 0)},1057260:(o,d,f)=>{t.$b("HardSigmoid",o,{alpha:d,beta:f})},1057339:o=>{t.$b("HardSwish",o,void 0)},1057396:o=>{t.$b("Log",o,void 0)},1057447:o=>{t.$b("Sin",o,void 0)},1057498:o=>{t.$b("Cos",o,void 0)},1057549:o=>{t.$b("Tan",o,void 0)},1057600:o=>{t.$b("Asin",o,void 0)},1057652:o=>{t.$b("Acos",o,void 0)},1057704:o=>{t.$b("Atan",o,void 0)},1057756:o=>{t.$b("Sinh",o,void 0)},1057808:o=>{t.$b("Cosh",o,void 0)},1057860:o=>{t.$b("Asinh",o,void 0)},1057913:o=>{t.$b("Acosh",o,void 0)},1057966:o=>{t.$b("Atanh",o,void 0)},1058019:o=>{t.$b("Tanh",o,void 0)},1058071:o=>{t.$b("Not",o,void 0)},1058122:(o,d,f)=>{t.$b("Clip",o,{min:d,max:f})},1058191:o=>{t.$b("Clip",o,void 0)},1058243:(o,d)=>{t.$b("Elu",o,{alpha:d})},1058301:o=>{t.$b("Gelu",o,void 0)},1058353:o=>{t.$b("Relu",o,void 0)},1058405:(o,d)=>{t.$b("LeakyRelu",o,{alpha:d})},1058469:(o,d)=>{t.$b("ThresholdedRelu",o,{alpha:d})},1058539:(o,d)=>{t.$b("Cast",o,{to:d})},1058597:o=>{t.$b("Add",o,void 0)},1058648:o=>{t.$b("Sub",o,void 0)},1058699:o=>{t.$b("Mul",o,void 0)},1058750:o=>{t.$b("Div",o,void 0)},1058801:o=>{t.$b("Pow",o,void 0)},1058852:o=>{t.$b("Equal",o,void 0)},1058905:o=>{t.$b("Greater",o,void 0)},1058960:o=>{t.$b("GreaterOrEqual",o,void 0)},1059022:o=>{t.$b("Less",o,void 0)},1059074:o=>{t.$b("LessOrEqual",o,void 0)},1059133:(o,d,f,m,v)=>{t.$b("ReduceMean",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1059308:(o,d,f,m,v)=>{t.$b("ReduceMax",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1059482:(o,d,f,m,v)=>{t.$b("ReduceMin",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1059656:(o,d,f,m,v)=>{t.$b("ReduceProd",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1059831:(o,d,f,m,v)=>{t.$b("ReduceSum",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1060005:(o,d,f,m,v)=>{t.$b("ReduceL1",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1060178:(o,d,f,m,v)=>{t.$b("ReduceL2",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1060351:(o,d,f,m,v)=>{t.$b("ReduceLogSum",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1060528:(o,d,f,m,v)=>{t.$b("ReduceSumSquare",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1060708:(o,d,f,m,v)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!d,noopWithEmptyAxes:!!f,axes:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1060888:o=>{t.$b("Where",o,void 0)},1060941:(o,d,f)=>{t.$b("Transpose",o,{perm:d?Array.from((w(),R).subarray(Number(d)>>>0,Number(f)>>>0)):[]})},1061065:(o,d,f,m)=>{t.$b("DepthToSpace",o,{blocksize:d,mode:Ce(f),format:m?"NHWC":"NCHW"})},1061198:(o,d,f,m)=>{t.$b("DepthToSpace",o,{blocksize:d,mode:Ce(f),format:m?"NHWC":"NCHW"})},1061331:(o,d,f,m)=>{t.$b("DFT",o,{axis:d,inverse:f,onesided:m})},1061423:(o,d,f,m,v,I,A,B,j,H,ue,ge,$e,Te,$t)=>{t.$b("ConvTranspose",o,{format:j?"NHWC":"NCHW",autoPad:d,dilations:[f],group:m,kernelShape:[v],pads:[I,A],strides:[B],wIsConst:()=>!!(w(),q)[H>>>0],outputPadding:ue?Array.from((w(),R).subarray(Number(ue)>>>0,Number(ge)>>>0)):[],outputShape:$e?Array.from((w(),R).subarray(Number($e)>>>0,Number(Te)>>>0)):[],activation:Ce($t)})},1061856:(o,d,f,m,v,I,A,B,j,H,ue,ge,$e,Te)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:d,dilations:Array.from((w(),R).subarray(Number(f)>>>0,(Number(f)>>>0)+2>>>0)),group:m,kernelShape:Array.from((w(),R).subarray(Number(v)>>>0,(Number(v)>>>0)+2>>>0)),pads:Array.from((w(),R).subarray(Number(I)>>>0,(Number(I)>>>0)+4>>>0)),strides:Array.from((w(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(w(),q)[j>>>0],outputPadding:H?Array.from((w(),R).subarray(Number(H)>>>0,Number(ue)>>>0)):[],outputShape:ge?Array.from((w(),R).subarray(Number(ge)>>>0,Number($e)>>>0)):[],activation:Ce(Te)})},1062517:(o,d,f,m,v,I,A,B,j,H,ue,ge,$e,Te,$t)=>{t.$b("ConvTranspose",o,{format:j?"NHWC":"NCHW",autoPad:d,dilations:[f],group:m,kernelShape:[v],pads:[I,A],strides:[B],wIsConst:()=>!!(w(),q)[H>>>0],outputPadding:ue?Array.from((w(),R).subarray(Number(ue)>>>0,Number(ge)>>>0)):[],outputShape:$e?Array.from((w(),R).subarray(Number($e)>>>0,Number(Te)>>>0)):[],activation:Ce($t)})},1062950:(o,d,f,m,v,I,A,B,j,H,ue,ge,$e,Te)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:d,dilations:Array.from((w(),R).subarray(Number(f)>>>0,(Number(f)>>>0)+2>>>0)),group:m,kernelShape:Array.from((w(),R).subarray(Number(v)>>>0,(Number(v)>>>0)+2>>>0)),pads:Array.from((w(),R).subarray(Number(I)>>>0,(Number(I)>>>0)+4>>>0)),strides:Array.from((w(),R).subarray(Number(A)>>>0,(Number(A)>>>0)+2>>>0)),wIsConst:()=>!!(w(),q)[j>>>0],outputPadding:H?Array.from((w(),R).subarray(Number(H)>>>0,Number(ue)>>>0)):[],outputShape:ge?Array.from((w(),R).subarray(Number(ge)>>>0,Number($e)>>>0)):[],activation:Ce(Te)})},1063611:(o,d)=>{t.$b("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1063702:(o,d,f,m,v,I,A,B,j,H,ue,ge,$e,Te)=>{t.$b("AveragePool",o,{format:Te?"NHWC":"NCHW",auto_pad:d,ceil_mode:f,count_include_pad:m,storage_order:v,dilations:I?Array.from((w(),R).subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from((w(),R).subarray(Number(B)>>>0,Number(j)>>>0)):[],pads:H?Array.from((w(),R).subarray(Number(H)>>>0,Number(ue)>>>0)):[],strides:ge?Array.from((w(),R).subarray(Number(ge)>>>0,Number($e)>>>0)):[]})},1064181:(o,d)=>{t.$b("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1064272:(o,d,f,m,v,I,A,B,j,H,ue,ge,$e,Te)=>{t.$b("AveragePool",o,{format:Te?"NHWC":"NCHW",auto_pad:d,ceil_mode:f,count_include_pad:m,storage_order:v,dilations:I?Array.from((w(),R).subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from((w(),R).subarray(Number(B)>>>0,Number(j)>>>0)):[],pads:H?Array.from((w(),R).subarray(Number(H)>>>0,Number(ue)>>>0)):[],strides:ge?Array.from((w(),R).subarray(Number(ge)>>>0,Number($e)>>>0)):[]})},1064751:(o,d)=>{t.$b("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1064838:(o,d,f,m,v,I,A,B,j,H,ue,ge,$e,Te)=>{t.$b("MaxPool",o,{format:Te?"NHWC":"NCHW",auto_pad:d,ceil_mode:f,count_include_pad:m,storage_order:v,dilations:I?Array.from((w(),R).subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from((w(),R).subarray(Number(B)>>>0,Number(j)>>>0)):[],pads:H?Array.from((w(),R).subarray(Number(H)>>>0,Number(ue)>>>0)):[],strides:ge?Array.from((w(),R).subarray(Number(ge)>>>0,Number($e)>>>0)):[]})},1065313:(o,d)=>{t.$b("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1065400:(o,d,f,m,v,I,A,B,j,H,ue,ge,$e,Te)=>{t.$b("MaxPool",o,{format:Te?"NHWC":"NCHW",auto_pad:d,ceil_mode:f,count_include_pad:m,storage_order:v,dilations:I?Array.from((w(),R).subarray(Number(I)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from((w(),R).subarray(Number(B)>>>0,Number(j)>>>0)):[],pads:H?Array.from((w(),R).subarray(Number(H)>>>0,Number(ue)>>>0)):[],strides:ge?Array.from((w(),R).subarray(Number(ge)>>>0,Number($e)>>>0)):[]})},1065875:(o,d,f,m,v)=>{t.$b("Gemm",o,{alpha:d,beta:f,transA:m,transB:v})},1065979:o=>{t.$b("MatMul",o,void 0)},1066033:(o,d,f,m)=>{t.$b("ArgMax",o,{keepDims:!!d,selectLastIndex:!!f,axis:m})},1066141:(o,d,f,m)=>{t.$b("ArgMin",o,{keepDims:!!d,selectLastIndex:!!f,axis:m})},1066249:(o,d)=>{t.$b("Softmax",o,{axis:d})},1066312:(o,d)=>{t.$b("Concat",o,{axis:d})},1066372:(o,d,f,m,v)=>{t.$b("Split",o,{axis:d,numOutputs:f,splitSizes:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1066528:o=>{t.$b("Expand",o,void 0)},1066582:(o,d)=>{t.$b("Gather",o,{axis:Number(d)})},1066653:(o,d)=>{t.$b("GatherElements",o,{axis:Number(d)})},1066732:(o,d)=>{t.$b("GatherND",o,{batch_dims:Number(d)})},1066811:(o,d,f,m,v,I,A,B,j,H,ue)=>{t.$b("Resize",o,{antialias:d,axes:f?Array.from((w(),R).subarray(Number(f)>>>0,Number(m)>>>0)):[],coordinateTransformMode:Ce(v),cubicCoeffA:I,excludeOutside:A,extrapolationValue:B,keepAspectRatioPolicy:Ce(j),mode:Ce(H),nearestMode:Ce(ue)})},1067173:(o,d,f,m,v,I,A)=>{t.$b("Slice",o,{starts:d?Array.from((w(),R).subarray(Number(d)>>>0,Number(f)>>>0)):[],ends:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[],axes:I?Array.from((w(),R).subarray(Number(I)>>>0,Number(A)>>>0)):[]})},1067437:o=>{t.$b("Tile",o,void 0)},1067489:(o,d,f)=>{t.$b("InstanceNormalization",o,{epsilon:d,format:f?"NHWC":"NCHW"})},1067603:(o,d,f)=>{t.$b("InstanceNormalization",o,{epsilon:d,format:f?"NHWC":"NCHW"})},1067717:o=>{t.$b("Range",o,void 0)},1067770:(o,d)=>{t.$b("Einsum",o,{equation:Ce(d)})},1067851:(o,d,f,m,v)=>{t.$b("Pad",o,{mode:d,value:f,pads:m?Array.from((w(),R).subarray(Number(m)>>>0,Number(v)>>>0)):[]})},1067994:(o,d,f,m,v,I)=>{t.$b("BatchNormalization",o,{epsilon:d,momentum:f,spatial:!!v,trainingMode:!!m,format:I?"NHWC":"NCHW"})},1068163:(o,d,f,m,v,I)=>{t.$b("BatchNormalization",o,{epsilon:d,momentum:f,spatial:!!v,trainingMode:!!m,format:I?"NHWC":"NCHW"})},1068332:(o,d,f)=>{t.$b("CumSum",o,{exclusive:Number(d),reverse:Number(f)})},1068429:(o,d,f)=>{t.$b("DequantizeLinear",o,{axis:d,blockSize:f})},1068519:(o,d,f,m,v)=>{t.$b("GridSample",o,{align_corners:d,mode:Ce(f),padding_mode:Ce(m),format:v?"NHWC":"NCHW"})},1068689:(o,d,f,m,v)=>{t.$b("GridSample",o,{align_corners:d,mode:Ce(f),padding_mode:Ce(m),format:v?"NHWC":"NCHW"})},1068859:(o,d)=>{t.$b("ScatterND",o,{reduction:Ce(d)})},1068944:(o,d,f,m,v,I,A,B,j)=>{t.$b("Attention",o,{numHeads:d,isUnidirectional:f,maskFilterValue:m,scale:v,doRotary:I,qkvHiddenSizes:A?Array.from((w(),R).subarray(Number(B)>>>0,Number(B)+A>>>0)):[],pastPresentShareBuffer:!!j})},1069216:o=>{t.$b("BiasAdd",o,void 0)},1069271:o=>{t.$b("BiasSplitGelu",o,void 0)},1069332:o=>{t.$b("FastGelu",o,void 0)},1069388:(o,d,f,m,v,I,A,B,j,H,ue,ge,$e,Te,$t,Ui)=>{t.$b("Conv",o,{format:ge?"NHWC":"NCHW",auto_pad:d,dilations:f?Array.from((w(),R).subarray(Number(f)>>>0,Number(m)>>>0)):[],group:v,kernel_shape:I?Array.from((w(),R).subarray(Number(I)>>>0,Number(A)>>>0)):[],pads:B?Array.from((w(),R).subarray(Number(B)>>>0,Number(j)>>>0)):[],strides:H?Array.from((w(),R).subarray(Number(H)>>>0,Number(ue)>>>0)):[],w_is_const:()=>!!(w(),q)[Number($e)>>>0],activation:Ce(Te),activation_params:$t?Array.from((w(),F).subarray(Number($t)>>>0,Number(Ui)>>>0)):[]})},1069972:o=>{t.$b("Gelu",o,void 0)},1070024:(o,d,f,m,v,I,A,B,j)=>{t.$b("GroupQueryAttention",o,{numHeads:d,kvNumHeads:f,scale:m,softcap:v,doRotary:I,rotaryInterleaved:A,smoothSoftmax:B,localWindowSize:j})},1070241:(o,d,f,m)=>{t.$b("LayerNormalization",o,{axis:d,epsilon:f,simplified:!!m})},1070352:(o,d,f,m)=>{t.$b("LayerNormalization",o,{axis:d,epsilon:f,simplified:!!m})},1070463:(o,d,f,m,v,I)=>{t.$b("MatMulNBits",o,{k:d,n:f,accuracyLevel:m,bits:v,blockSize:I})},1070590:(o,d,f,m,v,I)=>{t.$b("MultiHeadAttention",o,{numHeads:d,isUnidirectional:f,maskFilterValue:m,scale:v,doRotary:I})},1070749:(o,d)=>{t.$b("QuickGelu",o,{alpha:d})},1070813:(o,d,f,m,v)=>{t.$b("RotaryEmbedding",o,{interleaved:!!d,numHeads:f,rotaryEmbeddingDim:m,scale:v})},1070952:(o,d,f)=>{t.$b("SkipLayerNormalization",o,{epsilon:d,simplified:!!f})},1071054:(o,d,f)=>{t.$b("SkipLayerNormalization",o,{epsilon:d,simplified:!!f})},1071156:(o,d,f,m)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:d,quantizeAxis:f,blockSize:m})},1071277:o=>{t.Fd(o)},1071311:(o,d)=>t.Hd(Number(o),Number(d),t.Xc.Kd,t.Xc.errors)};function Dg(o,d,f){return ps(async()=>{await t.Dd(Number(o),Number(d),Number(f))})}function Bg(){return typeof wasmOffsetConverter<"u"}function Mg(o,d,f,m){var v=pe();try{return Ks(o,d,f,m)}catch(I){if(ce(v),I!==I+0)throw I;he(1,0)}}function Ug(o,d,f){var m=pe();try{return Vs(o,d,f)}catch(v){if(ce(m),v!==v+0)throw v;he(1,0)}}function Pg(o){var d=pe();try{qs(o)}catch(f){if(ce(d),f!==f+0)throw f;he(1,0)}}function Lg(o,d){var f=pe();try{return Bi(o,d)}catch(m){if(ce(f),m!==m+0)throw m;he(1,0)}}function qg(o,d,f){var m=pe();try{Ls(o,d,f)}catch(v){if(ce(m),v!==v+0)throw v;he(1,0)}}function jg(o,d){var f=pe();try{Xs(o,d)}catch(m){if(ce(f),m!==m+0)throw m;he(1,0)}}function Wg(o,d,f,m,v,I,A){var B=pe();try{return Hs(o,d,f,m,v,I,A)}catch(j){if(ce(B),j!==j+0)throw j;he(1,0)}}function Vg(o,d,f,m,v,I){var A=pe();try{js(o,d,f,m,v,I)}catch(B){if(ce(A),B!==B+0)throw B;he(1,0)}}function Gg(o,d,f,m){var v=pe();try{Fs(o,d,f,m)}catch(I){if(ce(v),I!==I+0)throw I;he(1,0)}}function Hg(o,d,f,m,v){var I=pe();try{Ws(o,d,f,m,v)}catch(A){if(ce(I),A!==A+0)throw A;he(1,0)}}function Fg(o,d,f,m,v,I,A){var B=pe();try{Ys(o,d,f,m,v,I,A)}catch(j){if(ce(B),j!==j+0)throw j;he(1,0)}}function Kg(o,d,f,m,v,I,A){var B=pe();try{Qs(o,d,f,m,v,I,A)}catch(j){if(ce(B),j!==j+0)throw j;he(1,0)}}function Xg(o,d,f,m,v,I,A,B){var j=pe();try{ro(o,d,f,m,v,I,A,B)}catch(H){if(ce(j),H!==H+0)throw H;he(1,0)}}function Zg(o,d,f,m,v){var I=pe();try{return Zs(o,d,f,m,v)}catch(A){if(ce(I),A!==A+0)throw A;he(1,0)}}function Yg(o,d,f){var m=pe();try{return io(o,d,f)}catch(v){if(ce(m),v!==v+0)throw v;he(1,0)}}function Qg(o,d,f,m,v,I,A,B){var j=pe();try{ao(o,d,f,m,v,I,A,B)}catch(H){if(ce(j),H!==H+0)throw H;he(1,0)}}function Jg(o,d,f,m,v,I,A,B,j,H,ue,ge){var $e=pe();try{Js(o,d,f,m,v,I,A,B,j,H,ue,ge)}catch(Te){if(ce($e),Te!==Te+0)throw Te;he(1,0)}}function e0(o,d,f){var m=pe();try{return no(o,d,f)}catch(v){if(ce(m),v!==v+0)throw v;return he(1,0),0n}}function t0(o,d,f,m,v,I,A,B,j){var H=pe();try{Gs(o,d,f,m,v,I,A,B,j)}catch(ue){if(ce(H),ue!==ue+0)throw ue;he(1,0)}}function r0(o){var d=pe();try{return so(o)}catch(f){if(ce(d),f!==f+0)throw f;he(1,0)}}function i0(o,d){var f=pe();try{return vo(o,d)}catch(m){if(ce(f),m!==m+0)throw m;return he(1,0),0n}}function a0(o){var d=pe();try{return oo(o)}catch(f){if(ce(d),f!==f+0)throw f;return he(1,0),0n}}function n0(o,d,f,m){var v=pe();try{return mo(o,d,f,m)}catch(I){if(ce(v),I!==I+0)throw I;he(1,0)}}function s0(o,d,f,m,v){var I=pe();try{return fo(o,d,f,m,v)}catch(A){if(ce(I),A!==A+0)throw A;he(1,0)}}function o0(o,d,f,m,v,I){var A=pe();try{return go(o,d,f,m,v,I)}catch(B){if(ce(A),B!==B+0)throw B;he(1,0)}}function u0(o,d,f,m,v,I){var A=pe();try{return eo(o,d,f,m,v,I)}catch(B){if(ce(A),B!==B+0)throw B;he(1,0)}}function l0(o,d,f,m,v,I){var A=pe();try{return yo(o,d,f,m,v,I)}catch(B){if(ce(A),B!==B+0)throw B;he(1,0)}}function d0(o,d,f,m,v,I,A,B){var j=pe();try{return to(o,d,f,m,v,I,A,B)}catch(H){if(ce(j),H!==H+0)throw H;he(1,0)}}function c0(o,d,f,m,v){var I=pe();try{return bo(o,d,f,m,v)}catch(A){if(ce(I),A!==A+0)throw A;return he(1,0),0n}}function p0(o,d,f,m){var v=pe();try{return _o(o,d,f,m)}catch(I){if(ce(v),I!==I+0)throw I;he(1,0)}}function h0(o,d,f,m){var v=pe();try{return wo(o,d,f,m)}catch(I){if(ce(v),I!==I+0)throw I;he(1,0)}}function m0(o,d,f,m,v,I,A,B,j,H,ue,ge){var $e=pe();try{return $o(o,d,f,m,v,I,A,B,j,H,ue,ge)}catch(Te){if(ce($e),Te!==Te+0)throw Te;he(1,0)}}function f0(o,d,f,m,v,I,A,B,j,H,ue){var ge=pe();try{po(o,d,f,m,v,I,A,B,j,H,ue)}catch($e){if(ce(ge),$e!==$e+0)throw $e;he(1,0)}}function g0(o,d,f,m,v,I,A,B,j,H,ue,ge,$e,Te,$t,Ui){var w0=pe();try{ho(o,d,f,m,v,I,A,B,j,H,ue,ge,$e,Te,$t,Ui)}catch(Pi){if(ce(w0),Pi!==Pi+0)throw Pi;he(1,0)}}function y0(o,d,f){var m=pe();try{return uo(o,d,f)}catch(v){if(ce(m),v!==v+0)throw v;he(1,0)}}function b0(o,d,f){var m=pe();try{return lo(o,d,f)}catch(v){if(ce(m),v!==v+0)throw v;he(1,0)}}function _0(o,d,f,m){var v=pe();try{co(o,d,f,m)}catch(I){if(ce(v),I!==I+0)throw I;he(1,0)}}function Wr(){if(0<ve)W=Wr;else if(a)$?.(t),Q();else{for(var o=_e;0<o.length;)o.shift()(t);0<ve?W=Wr:(t.calledRun=!0,z||(Q(),$?.(t)))}}return a||(pt=await Ne(),Wr()),t.PTR_SIZE=4,P?t:new Promise((o,d)=>{$=o,k=d})}var Lc,Oo,gy=L(()=>{"use strict";Lc=Ao,Oo=globalThis.self?.name?.startsWith("em-pthread"),Oo&&Ao()}),Fi,Va,Ro,je,qc,Fr,Do,Bo,Ki,Mo,Xi,jc,Zi,Wc,cn=L(()=>{"use strict";dn(),Fi=typeof location>"u"?void 0:location.origin,Va=import.meta.url>"file:"&&import.meta.url<"file;",Ro=()=>{if(Va){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Fi).href}return import.meta.url},je=Ro(),qc=()=>{if(je&&!je.startsWith("blob:"))return je.substring(0,je.lastIndexOf("/")+1)},Fr=(e,t)=>{try{let r=t??je;return(r?new URL(e,r):new URL(e)).origin===Fi}catch{return!1}},Do=(e,t)=>{let r=t??je;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Bo=(e,t)=>`${t??"./"}${e}`,Ki=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Mo=async e=>(await import(e)).default,Xi=(fy(),Cr(Mc)).default,jc=async()=>{if(!je)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Fr(je))return[void 0,Xi()];let e=await Ki(je);return[e,Xi(e)]},Zi=(gy(),Cr(Pc)).default,Wc=async(e,t,r,i)=>{let a=Zi&&!(e||t);if(a)if(je)a=Fr(je)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Zi];{let s="ort-wasm-simd-threaded.jsep.mjs",n=e??Do(s,t),u=r&&n&&!Fr(n,t),l=u?await Ki(n):n??Bo(s,t);return[u?l:void 0,await Mo(l)]}}}),Yi,Kr,fr,Qi,Uo,Po,Lo,pn,ke,Xt=L(()=>{"use strict";cn(),Kr=!1,fr=!1,Qi=!1,Uo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Po=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Lo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},pn=async e=>{if(Kr)return Promise.resolve();if(fr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Qi)throw new Error("previous call to 'initializeWebAssembly()' failed.");fr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Lo())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Po())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Uo();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,s=typeof a=="string"?a:void 0,n=a?.mjs,u=n?.href??n,l=a?.wasm,c=l?.href??l,h=e.wasmBinary,[p,g]=await Wc(u,s,r>1,!!h||!!c),b=!1,y=[];if(t>0&&y.push(new Promise($=>{setTimeout(()=>{b=!0,$()},t)})),y.push(new Promise(($,k)=>{let x={numThreads:r};if(h)x.wasmBinary=h,x.locateFile=_=>_;else if(c||s)x.locateFile=_=>c??s+_;else if(u&&u.indexOf("blob:")!==0)x.locateFile=_=>new URL(_,u).href;else if(p){let _=qc();_&&(x.locateFile=T=>_+T)}g(x).then(_=>{fr=!1,Kr=!0,Yi=_,$(),p&&URL.revokeObjectURL(p)},_=>{fr=!1,Qi=!0,k(_)})})),await Promise.race(y),b)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ke=()=>{if(Kr&&Yi)return Yi;throw new Error("WebAssembly is not initialized yet.")}}),rt,li,we,hn=L(()=>{"use strict";Xt(),rt=(e,t)=>{let r=ke(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},li=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,s])=>{let n=t?t+a:a;if(typeof s=="object")li(s,n+".",r,i);else if(typeof s=="string"||typeof s=="number")i(n,s.toString());else if(typeof s=="boolean")i(n,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},we=e=>{let t=ke(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let s=Number(t.getValue(a,i===4?"i32":"i64")),n=t.getValue(a+i,"*"),u=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),Vc,yy=L(()=>{"use strict";Xt(),hn(),Vc=e=>{let t=ke(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let s=0;return e?.tag!==void 0&&(s=rt(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,s),r===0&&we("Can't create run options."),e?.extra!==void 0&&li(e.extra,"",new WeakSet,(n,u)=>{let l=rt(n,i),c=rt(u,i);t._OrtAddRunConfigEntry(r,l,c)!==0&&we(`Can't set a run config entry: ${n} - ${u}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(n=>t._free(n)),s}}}),qo,jo,Wo,Bt,Vo,Gc,by=L(()=>{"use strict";Xt(),hn(),qo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},jo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Wo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Bt=(e,t,r,i)=>{let a=rt(t,i),s=rt(r,i);ke()._OrtAddSessionConfigEntry(e,a,s)!==0&&we(`Can't set a session config entry: ${t} - ${r}.`)},Vo=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let s=typeof a=="string"?a:a.name,n=[];switch(s){case"webnn":if(s="WEBNN",Bt(e,"session.disable_quant_qdq","1",r),Bt(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let p=a?.deviceType;p&&Bt(e,"deviceType",p,r)}break;case"webgpu":if(s="JS",typeof a!="string"){let p=a;if(p?.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Bt(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let u=rt(s,r),l=n.length,c=0,h=0;if(l>0){c=ke()._malloc(l*ke().PTR_SIZE),r.push(c),h=ke()._malloc(l*ke().PTR_SIZE),r.push(h);for(let p=0;p<l;p++)ke().setValue(c+p*ke().PTR_SIZE,n[p][0],"*"),ke().setValue(h+p*ke().PTR_SIZE,n[p][1],"*")}await ke()._OrtAppendExecutionProvider(e,u,c,h,l)!==0&&we(`Can't append execution provider: ${s}.`)}},Gc=async e=>{let t=ke(),r=0,i=[],a=e||{};Wo(a);try{let s=qo(a.graphOptimizationLevel??"all"),n=jo(a.executionMode??"sequential"),u=typeof a.logId=="string"?rt(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let c=a.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw new Error(`log verbosity level is not valid: ${c}`);let h=typeof a.optimizedModelFilePath=="string"?rt(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!a.enableCpuMemArena,!!a.enableMemPattern,n,!!a.enableProfiling,0,u,l,c,h),r===0&&we("Can't create session options."),a.executionProviders&&await Vo(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Bt(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[p,g]of Object.entries(a.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let b=rt(p,i);t._OrtAddFreeDimensionOverride(r,b,g)!==0&&we(`Can't set a free dimension override: ${p} - ${g}.`)}return a.extra!==void 0&&li(a.extra,"",new WeakSet,(p,g)=>{Bt(r,p,g,i)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&we("Can't release session options."),i.forEach(n=>t._free(n)),s}}}),jt,ft,Wt,yi,di,mn,fn,Ga,ae=L(()=>{"use strict";jt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ft=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Wt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,s)=>a*s,1);return r>0?Math.ceil(i*r):void 0},yi=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},di=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},mn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",fn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ga=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),gn,Hc=L(()=>{"use strict";dn(),gn=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let n=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let c=l.byteLength;new Uint8Array(s,n,c).set(l),n+=c}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Go,Ho,Fo,Ko,yn,Xo,fe,gt=L(()=>{"use strict";ae(),Go=["V","I","W","E","F"],Ho=(e,t)=>{console.log(`[${Go[e]},${new Date().toISOString()}]${t}`)},yn=(e,t)=>{Fo=e,Ko=t},Xo=(e,t)=>{let r=di(e),i=di(Fo);r>=i&&Ho(r,typeof t=="function"?t():t)},fe=(...e)=>{Ko&&Xo(...e)}}),Zo,rr,O,ci,Fc,Kc,Xc,se=L(()=>{"use strict";Zo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},rr=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let s=Math.max(e.length,t.length),n=new Array(s);if(r){if(i<2||a<2)return;let u=Zo.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[n[s-2],n[s-1]]=u}for(let u=r?3:1;u<=s;u++){let l=i-u<0?1:e[i-u],c=a-u<0?1:t[a-u];if(l!==c&&l>1&&c>1)return;let h=Math.max(l,c);if(l&&c)n[s-u]=Math.max(l,c);else{if(h>1)return;n[s-u]=0}}return n}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},O=class si{static size(t){return si.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){a[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");a[s]=1,r/=t[s],s--}for(s--;s>=0;s--)a[s]=t[s];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return si.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return si.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[s])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,s)=>a+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},ci=class Ct{static adjustPoolAttributes(t,r,i,a,s,n){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<s.length){if(s[u]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let u=0;u<i.length*2;u++)if(u<n.length){if(n[u]<0)throw new Error("pad should be greater than or equal to 1")}else n.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(n[u]>=i[u]||n[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,s,n,u){if(u){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Ct.adjustPadAndReturnShape(t[l+(n?1:2)],r[l],i[l],a[l],s,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,s,n,u,l=0){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let c=[r[0],r[1]];return Ct.computeShapeHelper(t,r,c,i,a,s,n,u,l),c}static computeConvOutputShape(t,r,i,a,s,n,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Ct.computeShapeHelper(!1,t,l,i,a,s,n,u),l}static computeShapeHelper(t,r,i,a,s,n,u,l,c=0){if(t)for(let h=0;h<r.length-2;h++)i.push(1);else for(let h=0;h<r.length-2;h++)i.push(Ct.adjustPadAndReturnShape(r[h+2],a[h],s[h],n[h],u,h,h+r.length-2,l,c))}static computeOutputSize(t,r,i,a,s){let n=Math.floor(t/r)+1;return s===1&&(n=Math.ceil(t/r)+1,(n-1)*r>=i+a&&(n-=1)),n}static adjustPadAndReturnShape(t,r,i,a,s,n,u,l,c=0){let h=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[n]=0,s[u]=0,Ct.computeOutputSize(t-h,r,t,0,c);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=(Math.floor((t+r-1)/r)-1)*r+a-t;return s[n]=Math.floor(l==="SAME_LOWER"?(p+1)/2:p/2),s[u]=p-s[n],Ct.computeOutputSize(t+s[n]+s[u]-h,r,t,s[n],c)}default:throw new Error("Unsupported AutoPad type")}else return Ct.computeOutputSize(t+s[n]+s[u]-h,r,t,s[n],c)}},Fc=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,n,u;t?(s=e[1],n=e[0]):(s=e[0],n=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==n)throw new Error("dimension mismatch");if(s<=0||u<=0||n<=0)throw new Error("invalid shape specified");if(a&&!rr.isValidBroadcast(a,[s,u]))throw new Error("gemm: invalid bias shape for broadcast");return[s,u,n]}},Kc=-34028234663852886e22,Xc=34028234663852886e22}),bn,Zc=L(()=>{"use strict";ae(),bn=(e,t)=>new(yi(t))(e)}),Ji,Yo,ea,Qo,ta,Jo,ra,ia,aa,eu,Yc,_y=L(()=>{"use strict";ae(),gt(),Ji=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Yo=(e,t)=>{if(t==="int32")return e;let r=Ji.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,s=new(yi(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let n=new Int32Array(a);for(let u=0;u<a;u++){let l=s[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");n[u]=Number(l)}return new Uint8Array(n.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let n=Int32Array.from(s,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},ea=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Qo=1,ta=()=>Qo++,Jo=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),ra=(e,t)=>{let r=Ji.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},ia=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:s,fallbackDataType:n}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=s,this.fallbackDataType=n}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return ra(this.dataType,this.tensorShape)}destroy(){fe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=ea(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},aa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),n;if(!s?.input.dataTypes.includes(t)){if(n=Jo.get(t),!n||s?.input.dataTypes.includes(n))throw new Error(`WebNN backend does not support data type: ${t}`);fe("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==ra(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,n),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Yo(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else fe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?ea(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},eu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=ta();return this.tensorTrackersById.set(e,new aa(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){fe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){fe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),s=ta(),n=new ia({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(s,new aa(this,n)),this.externalTensors.add(n),s}async getCachedTensor(e,t,r,i,a,s,n){let u=this.getMLContext(e);for(let[c,h]of this.freeTensors.entries())if(h.canReuseTensor(u,t,r)){fe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${r}`);let p=this.freeTensors.splice(c,1)[0];return p.sessionId=e,p}fe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${n?`fallbackDataType: ${n},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:n??t,shape:r,dimensions:r,usage:i,writable:a,readable:s});return new ia({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Yc=(...e)=>new eu(...e)}),gr,tu,Qc,wy=L(()=>{"use strict";ae(),Xt(),Zc(),_y(),gt(),gr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),tu=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,s)=>a===i[s]&&e[a]===t[a])},Qc=class{constructor(e){this.tensorManager=Yc(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,yn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){fe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){fe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)fe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>tu(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){fe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let s=gr.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,i,a)}async createTemporaryTensor(e,t,r){fe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=gr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!ke().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");fe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return bn(r,t)}}registerMLTensor(e,t,r,i){let a=gr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,a,i);return fe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=gr.get(jt(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!a?.input.dataTypes.includes(i):!!a?.output.dataTypes.includes(i)}flush(){}}}),_n=L(()=>{"use strict"}),na,Xr,Zr,ru,iu,sa,Ha,au,Jc,$y=L(()=>{"use strict";gt(),_n(),na=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Xr=[],Zr=e=>Math.ceil(Number(e)/16)*16,ru=e=>{for(let t=0;t<Xr.length;t++){let r=Xr[t];if(e<=r)return r}return Math.ceil(e/16)*16},iu=1,sa=()=>iu++,Ha=async(e,t,r,i)=>{let a=Zr(r),s=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let n=e.getCommandEncoder();e.endComputePass(),n.copyBufferToBuffer(t,0,s,0,a),e.flush(),await s.mapAsync(GPUMapMode.READ);let u=s.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{s.destroy()}},au=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of na)Xr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,s=Zr(a),n=this.storageCache.get(e);if(!n)throw new Error("gpu data for uploading does not exist");if(Number(n.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${n.originalSize}, data size=${a}`);if(s===a&&i%4===0)this.backend.device.queue.writeBuffer(n.gpuData.buffer,0,r,i,a);else{let u=new Uint8Array(s);u.set(t),this.backend.device.queue.writeBuffer(n.gpuData.buffer,0,u,0,s)}fe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Zr(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return fe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=sa();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),fe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),fe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=ru(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||s){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let n={id:sa(),type:0,buffer:i};return this.storageCache.set(n.id,{gpuData:n,originalSize:Number(e)}),fe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${n.id}`),n}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return fe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Ha(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=na.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(fe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Jc=(...e)=>new au(...e)}),nu,be,Ee=L(()=>{"use strict";nu=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},be=e=>new nu(e)}),ir,Yr,De,Re,ee,Ie,Fa,tr,At,Y,yr,D,X,ep,wn,su,tp,oe=L(()=>{"use strict";ae(),se(),ir=64,Yr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},De=(e,t=1)=>{let r=Yr(e,t);return typeof r=="string"?r:r[0]},Re=(e,t=1)=>{let r=Yr(e,t);return typeof r=="string"?r:r[1]},ee=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},Ie=e=>e%4===0?4:e%2===0?2:1,Fa=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,tr=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,At=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Y=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,yr=(e,t,r,i,a)=>{let s=typeof r=="number",n=s?r:r.length,u=[...new Array(n).keys()],l=n<2?"u32":n<=4?`vec${n}<u32>`:`array<u32, ${n}>`,c=Yr(t,a),h=typeof c=="string"?c:c[1],p=typeof c=="string"?c:c[0],g={indices:l,value:h,storage:p,tensor:t},b=P=>typeof P=="string"?P:`${P}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=s?"uniforms.":"",k=`${$}${e}_shape`,x=`${$}${e}_strides`,_="";for(let P=0;P<n-1;P++)_+=`
    let dim${P} = current / ${Y(x,P,n)};
    let rest${P} = current % ${Y(x,P,n)};
    indices[${P}] = dim${P};
    current = rest${P};
    `;_+=`indices[${n-1}] = current;`;let T=n<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${_}
    return indices;
  }`,S=P=>(y.offsetToIndices=!0,n<2?P:`o2i_${e}(${P})`),E=[];if(n>=2)for(let P=n-1;P>=0;P--)E.push(`${Y(x,P,n)} * (indices[${P}])`);let z=n<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${E.join("+")};
  }`,N=P=>(y.indicesToOffset=!0,n<2?P:`i2o_${e}(${P})`),w=(...P)=>n===0?"0u":`${g.indices}(${P.map(b).join(",")})`,U=(P,te)=>n<2?`${P}`:`${Y(P,te,n)}`,q=(P,te,Q)=>n<2?`${P}=${Q};`:`${Y(P,te,n)}=${Q};`,Z={},G=(P,te)=>{y.broadcastedIndicesToOffset=!0;let Q=`${te.name}broadcastedIndicesTo${e}Offset`;if(Q in Z)return`${Q}(${P})`;let V=[];for(let ze=n-1;ze>=0;ze--){let Ne=te.indicesGet("outputIndices",ze+te.rank-n);V.push(`${U(x,ze)} * (${Ne} % ${U(k,ze)})`)}return Z[Q]=`fn ${Q}(outputIndices: ${te.type.indices}) -> u32 {
             return ${V.length>0?V.join("+"):"0u"};
           }`,`${Q}(${P})`},K=(P,te)=>(()=>{if(g.storage===g.value)return`${e}[${P}]=${te};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${P}]=vec2<u32>(u32(${te}), select(0u, 0xFFFFFFFFu, ${te} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${P}]=vec2<u32>(u32(${te}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${P}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${te}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),R=P=>(()=>{if(g.storage===g.value)return`${e}[${P}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${P}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${P}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${P}] & 0xFFu), bool(${e}[${P}] & 0xFF00u), bool(${e}[${P}] & 0xFF0000u), bool(${e}[${P}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),M=n<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${h} {
    return ${R(`i2o_${e}(indices)`)};
  }`,F=n<2?"":(()=>{let P=u.map(Q=>`d${Q}: u32`).join(", "),te=u.map(Q=>`d${Q}`).join(", ");return`
  fn get_${e}(${P}) -> ${h} {
    return get_${e}ByIndices(${w(te)});
  }`})(),J=(...P)=>{if(P.length!==n)throw new Error(`indices length must be ${n}`);let te=P.map(b).join(",");return n===0?R("0u"):n===1?R(te[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${te})`)},ie=P=>n<2?R(P):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${P})`),re=n<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${h}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,ne=n<2?"":(()=>{let P=u.map(Q=>`d${Q}: u32`).join(", "),te=u.map(Q=>`d${Q}`).join(", ");return`
  fn set_${e}(${P}, value: ${h}) {
    set_${e}ByIndices(${w(te)}, value);
  }`})();return{impl:()=>{let P=[],te=!1;return y.offsetToIndices&&(P.push(T),te=!0),y.indicesToOffset&&(P.push(z),te=!0),y.broadcastedIndicesToOffset&&(Object.values(Z).forEach(Q=>P.push(Q)),te=!0),y.set&&(P.push(ne),te=!0),y.setByIndices&&(P.push(re),te=!0),y.get&&(P.push(F),te=!0),y.getByIndices&&(P.push(M),te=!0),!s&&te&&P.unshift(`const ${k} = ${g.indices}(${r.join(",")});`,`const ${x} = ${g.indices}(${O.computeStrides(r).join(",")});`),P.join(`
`)},type:g,offsetToIndices:S,indicesToOffset:N,broadcastedIndicesToOffset:G,indices:w,indicesGet:U,indicesSet:q,set:(...P)=>{if(P.length!==n+1)throw new Error(`indices length must be ${n}`);let te=P[n];if(typeof te!="string")throw new Error("value must be string");let Q=P.slice(0,n).map(b).join(",");return n===0?K("0u",te):n===1?K(Q[0],te):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${Q}, ${te})`)},setByOffset:K,setByIndices:(P,te)=>n<2?K(P,te):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${P}, ${te});`),get:J,getByOffset:R,getByIndices:ie,usage:i,name:e,strides:x,shape:k,rank:n}},D=(e,t,r,i=1)=>yr(e,t,r,"input",i),X=(e,t,r,i=1)=>yr(e,t,r,"output",i),ep=(e,t,r)=>yr(e,t,r,"atomicOutput",1),wn=(e,t,r,i=1)=>yr(e,t,r,"internal",i),su=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=ir){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,n=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${s}) {
    ${n}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},tp=(e,t)=>new su(e,t)}),ou,oa,uu,lu,du,cu,Ve,rp,ip,Ot=L(()=>{"use strict";ae(),se(),Ee(),oe(),ou=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},oa=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),uu=(e,t)=>O.sortBasedOnPerm(e,oa(e.length,t)),lu=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)a+=`a[${e[s]}]=i[${s}];`;return a+="return a;}"},du=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},cu=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ve=(e,t)=>{let r=e.dataType,i=e.dims.length,a=oa(i,t),s=uu(e.dims,a),n=e.dims,u=s,l=i<2||cu(a,e.dims),c;if(l)return c=y=>{let $=D("input",r,n,4),k=X("output",r,u,4);return`
  ${y.registerUniform("output_size","u32").declareVariables($,k)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=O.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:c};let{newShape:h,newPerm:p}=du(e.dims,a),g=O.areEqual(p,[2,3,1]),b=O.areEqual(p,[3,1,2]);if(h.length===2||g||b){n=g?[h[0],h[1]*h[2]]:b?[h[0]*h[1],h[2]]:h,u=[n[1],n[0]];let y=16;return c=$=>{let k=D("a",r,n.length),x=X("output",r,u.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(k,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${y+1}>, ${y}>;
  ${$.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=O.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/y),y:Math.ceil(u[0]/y)},programUniforms:[{type:12,data:$},...ee(n,u)]}},getShaderSource:c}}return c=y=>{let $=D("a",r,n.length),k=X("output",r,u.length);return`
  ${y.registerUniform("output_size","u32").declareVariables($,k)}

  ${lu(a,i,$,k)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=O.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ee(n,u)]}},getShaderSource:c}},rp=(e,t)=>{ou(e.inputs,t.perm),e.compute(Ve(e.inputs[0],t.perm))},ip=e=>be({perm:e.perm})}),pu,hu,mu,fu,gu,yu,bu,_u,wu,$u,Ye,ap,np,sp,op,up,lp,dp,cp,pp,hp,vy=L(()=>{"use strict";ae(),se(),oe(),$n(),Ot(),pu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},hu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},mu={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},fu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},gu=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},yu=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let a=t.map(s=>e[s]);return[r,a]},bu=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[a++]):i.push(1);return i},_u=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},wu=(e,t)=>{let r=[];if(!_u(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},$u=(e,t,r,i,a,s,n)=>{let u=r[0].dims,l=O.size(s),c=O.size(n),h=D("_A",r[0].dataType,u),p=X("output",a,s),g=64;l===1&&(g=256);let b=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,y=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(h,p)}
        ${b}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${mu[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${pu[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${hu[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${i==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${fu[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:c}]})}},Ye=(e,t,r,i)=>{let a=e.inputs.length===1?r:Ka(e.inputs,r),s=a.axes;s.length===0&&!a.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((b,y)=>y));let n=O.normalizeAxes(s,e.inputs[0].dims.length),u=n,l=e.inputs[0],c=wu(u,e.inputs[0].dims.length);c.length>0&&(l=e.compute(Ve(e.inputs[0],c),{inputs:[0],outputs:[-1]})[0],u=gu(u.length,l.dims.length));let[h,p]=yu(l.dims,u),g=h;a.keepDims&&(g=bu(h,n)),e.compute($u(t,a.cacheKey,[l],i,e.inputs[0].dataType,g,p),{inputs:[l]})},ap=(e,t)=>{Ye(e,"ReduceMeanShared",t,"mean")},np=(e,t)=>{Ye(e,"ReduceL1Shared",t,"l1")},sp=(e,t)=>{Ye(e,"ReduceL2Shared",t,"l2")},op=(e,t)=>{Ye(e,"ReduceLogSumExpShared",t,"logSumExp")},up=(e,t)=>{Ye(e,"ReduceMaxShared",t,"max")},lp=(e,t)=>{Ye(e,"ReduceMinShared",t,"min")},dp=(e,t)=>{Ye(e,"ReduceProdShared",t,"prod")},cp=(e,t)=>{Ye(e,"ReduceSumShared",t,"sum")},pp=(e,t)=>{Ye(e,"ReduceSumSquareShared",t,"sumSquare")},hp=(e,t)=>{Ye(e,"ReduceLogSumShared",t,"logSum")}}),Qe,vu,pi,Ka,Je,xu,ku,Su,Tu,Iu,Eu,zu,Cu,Nu,Au,et,mp,fp,gp,yp,bp,_p,wp,$p,vp,xp,$n=L(()=>{"use strict";ae(),se(),Ee(),oe(),vy(),Qe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},vu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],pi=(e,t,r,i,a,s,n=!1,u=!1)=>{let l=[],c=r[0].dims,h=c.length,p=O.normalizeAxes(a,h),g=!u&&p.length===0;c.forEach(($,k)=>{g||p.indexOf(k)>=0?n&&l.push(1):l.push($)});let b=l.length,y=O.size(l);return{name:e,shaderCache:t,getShaderSource:$=>{let k=[],x=D("_A",r[0].dataType,h),_=X("output",s,b),T=i(x,_,p),S=T[2];for(let E=0,z=0;E<h;E++)g||p.indexOf(E)>=0?(n&&z++,S=`for(var j${E}: u32 = 0; j${E} < ${c[E]}; j${E}++) {
                  ${T[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${x.indicesSet("input_indices",E,`j${E}`)}
                  ${S}
                }`):(k.push(`${x.indicesSet("input_indices",E,_.indicesGet("output_indices",z))};`),z++);return`

        ${$.registerUniform("output_size","u32").declareVariables(x,_)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${_.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${S}
          ${T[3]}
          ${T.length===4?_.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ee(c,l)]})}},Ka=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),be({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Je=(e,t,r,i)=>{let a=e.inputs,s=a.length===1?r:Ka(a,r);e.compute(pi(t,{hint:s.cacheKey,inputDependencies:["rank"]},[a[0]],s.noopWithEmptyAxes&&s.axes.length===0?vu:i,s.axes,a[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},xu=(e,t)=>{Qe(e.inputs),Je(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},ku=(e,t)=>{Qe(e.inputs),Je(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Su=(e,t)=>{Qe(e.inputs),Je(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Tu=(e,t)=>{Qe(e.inputs),Je(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Iu=(e,t)=>{Qe(e.inputs),Je(e,"ReduceMax",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(r.indicesSet("input_indices",n,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Eu=(e,t)=>{Qe(e.inputs),Je(e,"ReduceMean",t,(r,i,a)=>{let s=1;for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&(s*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},zu=(e,t)=>{Qe(e.inputs),Je(e,"ReduceMin",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(`input_indices[${n}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Cu=(e,t)=>{Qe(e.inputs),Je(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Nu=(e,t)=>{Qe(e.inputs),Je(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Au=(e,t)=>{Qe(e.inputs),Je(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},et=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:a*=e[s];return a<32&&i>1024},mp=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Eu(e,t):ap(e,t)},fp=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ku(e,t):np(e,t)},gp=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Su(e,t):sp(e,t)},yp=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Tu(e,t):op(e,t)},bp=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Iu(e,t):up(e,t)},_p=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zu(e,t):lp(e,t)},wp=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Cu(e,t):dp(e,t)},$p=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nu(e,t):cp(e,t)},vp=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Au(e,t):pp(e,t)},xp=(e,t)=>{et(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xu(e,t):hp(e,t)}}),ua,kp,Sp,Xa,xy=L(()=>{"use strict";ae(),Ee(),$n(),ua=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},kp=(e,t)=>{ua(e.inputs);let r=(i,a,s)=>{let n=[];for(let u=0;u<i.rank;u++)(s.indexOf(u)>=0||s.length===0)&&n.push(`input_indices[${u}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(pi("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Sp=(e,t)=>{ua(e.inputs);let r=(i,a,s)=>{let n=[];for(let u=0;u<i.rank;u++)(s.indexOf(u)>=0||s.length===0)&&n.push(`input_indices[${u}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(pi("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Xa=e=>be(e)}),Ou,Qr,Ru,Du,Bu,Nr,Mu,Tp,vn=L(()=>{"use strict";ae(),se(),_n(),oe(),Ou=(e,t)=>{let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4],u=e[5];if(n&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],c=r.dims[1],h=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=a.dims[0]/3,g=p,b=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],b=t.qkvHiddenSizes[2]}let y=c;if(p!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==p+g+b)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(n){if(g!==b)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(n.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(n.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(n.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(n.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(n.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=n.dims[3])}let k=y+$,x=-1,_=0;if(s)throw new Error("Mask not supported");if(n)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==c||u.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:c,pastSequenceLength:$,kvSequenceLength:y,totalSequenceLength:k,maxSequenceLength:x,inputHiddenSize:h,hiddenSize:p,vHiddenSize:b,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(b/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Qr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Ru=(e,t,r,i,a,s,n,u)=>{let l=Ie(n?1:s),c=64,h=s/l;h<c&&(c=32);let p=Math.ceil(s/l/c),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:h},{type:12,data:p}],b=De(e.dataType,l),y=Re(1,l),$=["type"];n&&$.push("type"),u&&$.push("type");let k=x=>{let _=X("x",e.dataType,e.dims,l),T=[_],S=n?D("seq_lens",n.dataType,n.dims):void 0;S&&T.push(S);let E=u?D("total_sequence_length_input",u.dataType,u.dims):void 0;E&&T.push(E);let z=Re(e.dataType),N=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${c}>;
  var<workgroup> thread_sum: array<f32, ${c}>;
  ${x.registerUniforms(N).declareVariables(...T)}
  ${x.mainStart([c,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Qr(S,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${c}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${n?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${c}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${c}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${_.type.value}(${z}(1.0) / ${z}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${_.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${n?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${_.type.value}(${z}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${c};${b};${l}`,inputDependencies:$},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:g})}},Du=(e,t,r,i,a,s,n,u,l)=>{let c=n+s.kvSequenceLength,h=[s.batchSize,s.numHeads,s.sequenceLength,c],p=e>1&&i,g=s.kvNumHeads?s.kvNumHeads:s.numHeads,b=p?[s.batchSize,g,c,s.headSize]:void 0,y=s.nReps?s.nReps:1,$=s.scale===0?1/Math.sqrt(s.headSize):s.scale,k=Ie(s.headSize),x=s.headSize/k,_=12,T={x:Math.ceil(c/_),y:Math.ceil(s.sequenceLength/_),z:s.batchSize*s.numHeads},S=[{type:12,data:s.sequenceLength},{type:12,data:x},{type:12,data:c},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:$},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:y}],E=p&&i&&O.size(i.dims)>0,z=["type","type"];E&&z.push("type"),a&&z.push("type"),u&&z.push("type"),l&&z.push("type");let N=[{dims:h,dataType:t.dataType,gpuDataType:0}];p&&N.push({dims:b,dataType:t.dataType,gpuDataType:0});let w=U=>{let q=D("q",t.dataType,t.dims,k),Z=D("key",r.dataType,r.dims,k),G=[q,Z];if(E){let re=D("past_key",i.dataType,i.dims,k);G.push(re)}a&&G.push(D("attention_bias",a.dataType,a.dims));let K=u?D("seq_lens",u.dataType,u.dims):void 0;K&&G.push(K);let R=l?D("total_sequence_length_input",l.dataType,l.dims):void 0;R&&G.push(R);let M=X("output",t.dataType,h),F=[M];p&&F.push(X("present_key",t.dataType,b,k));let J=Re(1,k),ie=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;

  var<workgroup> tileQ: array<${q.type.storage}, ${_*_}>;
  var<workgroup> tileK: array<${q.type.storage}, ${_*_}>;
  ${U.registerUniforms(ie).declareVariables(...G,...F)}
  ${U.mainStart([_,_,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Qr(K,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${J}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${M.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${a!==void 0};${i!==void 0};${e}`,inputDependencies:z},getRunData:()=>({outputs:N,dispatchGroup:T,programUniforms:S}),getShaderSource:w}},Bu=(e,t,r,i,a,s,n=void 0,u=void 0)=>{let l=s+a.kvSequenceLength,c=a.nReps?a.nReps:1,h=a.vHiddenSize*c,p=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,b=p?[a.batchSize,g,l,a.headSize]:void 0,y=[a.batchSize,a.sequenceLength,h],$=12,k={x:Math.ceil(a.vHeadSize/$),y:Math.ceil(a.sequenceLength/$),z:a.batchSize*a.numHeads},x=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:h},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:c}],_=p&&i&&O.size(i.dims)>0,T=["type","type"];_&&T.push("type"),n&&T.push("type"),u&&T.push("type");let S=[{dims:y,dataType:t.dataType,gpuDataType:0}];p&&S.push({dims:b,dataType:t.dataType,gpuDataType:0});let E=z=>{let N=D("probs",t.dataType,t.dims),w=D("v",r.dataType,r.dims),U=[N,w];_&&U.push(D("past_value",i.dataType,i.dims));let q=n?D("seq_lens",n.dataType,n.dims):void 0;n&&U.push(q);let Z=u?D("total_sequence_length_input",u.dataType,u.dims):void 0;u&&U.push(Z);let G=[X("output",t.dataType,y)];p&&G.push(X("present_value",t.dataType,b));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${N.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${N.type.value}, ${$*$}>;
  ${z.registerUniforms(K).declareVariables(...U,...G)}
  ${z.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${c===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${c===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Qr(q,Z,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${N.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:S,dispatchGroup:k,programUniforms:x}),getShaderSource:E}},Nr=(e,t,r,i,a,s,n,u,l,c,h=void 0,p=void 0)=>{let g=Math.min(e.outputCount,1+(n?1:0)+(u?1:0)),b=g>1?n:void 0,y=g>1?u:void 0,$=g>1?c.pastSequenceLength:0,k=$+c.kvSequenceLength,x=l&&O.size(l.dims)>0?l:void 0,_=[t,r];b&&O.size(b.dims)>0&&_.push(b),x&&_.push(x),h&&_.push(h),p&&_.push(p);let T=e.compute(Du(g,t,r,b,x,c,$,h,p),{inputs:_,outputs:g>1?[-1,1]:[-1]})[0];e.compute(Ru(T,c.batchSize,c.numHeads,$,c.sequenceLength,k,h,p),{inputs:h&&p?[T,h,p]:[T],outputs:[]});let S=[T,i];y&&O.size(y.dims)>0&&S.push(y),h&&S.push(h),p&&S.push(p),e.compute(Bu(g,T,i,y,c,$,h,p),{inputs:S,outputs:g>1?[0,2]:[0]})},Mu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,s=t.headSize,n=12,u={x:Math.ceil(t.headSize/n),y:Math.ceil(t.sequenceLength/n),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],h=p=>{let g=X("output_q",l[0].dataType,r),b=X("output_k",l[0].dataType,r),y=X("output_v",l[0].dataType,r),$=D("input",l[0].dataType,l[0].dims),k=D("weight",l[1].dataType,l[1].dims),x=D("bias",l[2].dataType,l[2].dims),_=$.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${n}u;
  var<workgroup> tileInput: array<${_}, ${n*n}>;
  var<workgroup> tileWeightQ: array<${_}, ${n*n}>;
  var<workgroup> tileWeightK: array<${_}, ${n*n}>;
  var<workgroup> tileWeightV: array<${_}, ${n*n}>;
  ${p.registerUniforms(T).declareVariables($,k,x,g,b,y)}
  ${p.mainStart([n,n,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${_}(0);
    var valueK = ${_}(0);
    var valueV = ${_}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:c}),getShaderSource:h},{inputs:l,outputs:[-1,-1,-1]})},Tp=(e,t)=>{let r=Ou(e.inputs,t),[i,a,s]=Mu(e,r);return Nr(e,i,a,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Uu,Pu,Lu,Ip,ky=L(()=>{"use strict";Ke(),ae(),se(),Ee(),oe(),Uu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,s)=>{let n=a.length;if(n!==i.length)throw new Error(`${s}: num dimensions != ${n}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Pu=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,s=e[0].dims,n=i?Ie(s[s.length-1]):1,u=a==="NHWC"&&s.length>1?n:1,l=O.size(s)/n,c=i,h=c?s.length:s,p=D("x",e[0].dataType,e[0].dims,n),g=D("scale",e[1].dataType,e[1].dims,u),b=D("bias",e[2].dataType,e[2].dims,u),y=D("inputMean",e[3].dataType,e[3].dims,u),$=D("inputVar",e[4].dataType,e[4].dims,u),k=X("y",e[0].dataType,h,n),x=()=>{let T="";if(i)T=`let cOffset = ${s.length===1?"0u":a==="NHWC"?`outputIndices[${s.length-1}] / ${n}`:"outputIndices[1]"};`;else if(a==="NCHW")T=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let S=1;S<g.rank;S++)T+=`cIndices[${S}] = outputIndices[${S}];`;T+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return T},_=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(p,g,b,y,$,k)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${n}`)};
    ${x()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${b.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${n}`,inputDependencies:c?["rank","type","type","type","type"]:void 0},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c?[{type:12,data:l},...ee(s)]:[{type:12,data:l}]})}},Lu=e=>be(e),Ip=(e,t)=>{let{inputs:r,outputCount:i}=e,a=Lu({...t,outputCount:i});if(xe.webgpu.validateInputContent&&Uu(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Pu(r,a))}}),qu,ju,Ep,Sy=L(()=>{"use strict";se(),oe(),qu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ju=e=>{let t=e[0].dims,r=e[0].dims[2],i=O.size(t)/4,a=e[0].dataType,s=D("input",a,t,4),n=D("bias",a,[r],4),u=D("residual",a,t,4),l=X("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:c=>`
  const channels = ${r}u / 4;
  ${c.declareVariables(s,n,u,l)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${n.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Ep=e=>{qu(e.inputs),e.compute(ju(e.inputs))}}),Wu,ye,zp,Cp,Np,Ap,Op,Rp,Dp,Bp,Mp,Vu,Up,Pp,Lp,qp,Tr,jp,oi,Wp,Vp,Gp,Hp,Fp,Kp,Xp,Zp,Yp,Qp,Jp,eh,th,rh,ih,ah,nh,la,sh,Za,Ya,oh,uh,lh,Gu,Hu,dh,xn=L(()=>{"use strict";ae(),se(),Ee(),oe(),Wu=(e,t,r,i,a,s,n)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let c=D("inputData",r,[u],4),h=X("outputData",i,[u],4),p=[{name:"vec_size",type:"u32"}];return n&&p.push(...n),`
      ${e.registerUniforms(p).declareVariables(c,h)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${c.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",l)}
  }`},ye=(e,t,r,i,a,s=e.dataType,n,u)=>{let l=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return n&&l.push(...n),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:c=>Wu(c,O.size(e.dims),e.dataType,s,r,i,u),getRunData:c=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(O.size(c[0].dims)/64/4)},programUniforms:l})}},zp=e=>{e.compute(ye(e.inputs[0],"Abs","abs"))},Cp=e=>{e.compute(ye(e.inputs[0],"Acos","acos"))},Np=e=>{e.compute(ye(e.inputs[0],"Acosh","acosh"))},Ap=e=>{e.compute(ye(e.inputs[0],"Asin","asin"))},Op=e=>{e.compute(ye(e.inputs[0],"Asinh","asinh"))},Rp=e=>{e.compute(ye(e.inputs[0],"Atan","atan"))},Dp=e=>{e.compute(ye(e.inputs[0],"Atanh","atanh"))},Bp=e=>be(e),Mp=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ye(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Vu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return be({min:t,max:r})},Up=(e,t)=>{let r=t||Vu(e.inputs),i=Re(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Pp=e=>{e.compute(ye(e.inputs[0],"Ceil","ceil"))},Lp=e=>{e.compute(ye(e.inputs[0],"Cos","cos"))},qp=e=>{e.compute(ye(e.inputs[0],"Cosh","cosh"))},Tr=e=>be(e),jp=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},oi=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Wp=e=>{let t=Re(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,oi(t)))},Vp=e=>{e.compute(ye(e.inputs[0],"Exp","exp"))},Gp=e=>{e.compute(ye(e.inputs[0],"Floor","floor"))},Hp=e=>{let t=Re(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,oi(t)))},Fp=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Kp=e=>{e.compute(ye(e.inputs[0],"Not",t=>`!${t}`))},Xp=e=>{e.compute(ye(e.inputs[0],"Neg",t=>`-${t}`))},Zp=e=>{e.compute(ye(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Yp=e=>{let t=Re(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Qp=e=>{e.compute(ye(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Jp=e=>be(e),eh=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},th=e=>{let t=Re(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"HardSwish",r=>`${r} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${r} + vec4<${t}>(0.5)))`))},rh=e=>{e.compute(ye(e.inputs[0],"Sin","sin"))},ih=e=>{e.compute(ye(e.inputs[0],"Sinh","sinh"))},ah=e=>{e.compute(ye(e.inputs[0],"Sqrt","sqrt"))},nh=e=>{e.compute(ye(e.inputs[0],"Tan","tan"))},la=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,sh=e=>{e.compute(ye(e.inputs[0],"Tanh",la))},Za=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${la("v")};
}
`,Ya=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,oh=e=>{let t=Re(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"FastGelu",Ya,Za(t),void 0,e.inputs[0].dataType))},uh=(e,t)=>{let r=Re(e.inputs[0].dataType);return e.compute(ye(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},lh=e=>{e.compute(ye(e.inputs[0],"Log","log"))},Gu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Hu=e=>`quick_gelu_impl(${e})`,dh=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"QuickGelu",Hu,Gu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Fu,Ku,ch,Ty=L(()=>{"use strict";se(),oe(),xn(),Fu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ku=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=D("input",e[0].dataType,e[0].dims,4),i=D("bias",e[0].dataType,[e[0].dims[2]],4),a=X("output",e[0].dataType,t,4),s=O.size(t)/4,n=De(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${oi(n)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},ch=e=>{Fu(e.inputs),e.compute(Ku(e.inputs))}}),Xu,Zu,tt,ph,hh,mh,fh,gh,yh,bh,_h,wh,$h,Iy=L(()=>{"use strict";ae(),se(),oe(),Xu=(e,t,r,i,a,s,n,u,l,c,h,p)=>{let g,b;typeof u=="string"?g=b=(_,T)=>`${u}((${_}),(${T}))`:typeof u=="function"?g=b=u:(g=u.scalar,b=u.vector);let y=X("outputData",h,i.length,4),$=D("aData",l,t.length,4),k=D("bData",c,r.length,4),x;if(a)if(s){let _=O.size(t)===1,T=O.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;_||T?x=y.setByOffset("global_idx",b(_?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),T?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):x=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",b(n||S?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,n||E?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=y.setByOffset("global_idx",b($.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let _=(T,S,E="")=>{let z=`aData[indexA${S}][componentA${S}]`,N=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${y.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${$.broadcastedIndicesToOffset(`outputIndices${S}`,y)};
            let offsetB${S} = ${k.broadcastedIndicesToOffset(`outputIndices${S}`,y)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${T}[${S}] = ${E}(${g(z,N)});
          `};h===9?x=`
            var data = vec4<u32>(0);
            ${_("data",0,"u32")}
            ${_("data",1,"u32")}
            ${_("data",2,"u32")}
            ${_("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${_("outputData[global_idx]",0)}
            ${_("outputData[global_idx]",1)}
            ${_("outputData[global_idx]",2)}
            ${_("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,k,y)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},Zu=(e,t,r,i,a,s,n=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),c=!O.areEqual(u,l),h=u,p=O.size(u),g=!1,b=!1,y=[c];if(c){let $=rr.calcShape(u,l,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");h=$.slice(),p=O.size(h);let k=O.size(u)===1,x=O.size(l)===1,_=u.length>0&&u[u.length-1]%4===0,T=l.length>0&&l[l.length-1]%4===0;y.push(k),y.push(x),y.push(_),y.push(T);let S=1;for(let E=1;E<h.length;E++){let z=u[u.length-E],N=l[l.length-E];if(z===N)S*=z;else break}S%4===0?(b=!0,g=!0):(k||x||_||T)&&(g=!0)}else g=!0;return y.push(g),{name:e,shaderCache:{hint:t+y.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>Xu($,u,l,h,g,c,b,a,r.dataType,i.dataType,n,s),getRunData:()=>({outputs:[{dims:h,dataType:n}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(h)/4)},...ee(u,l,h)]})}},tt=(e,t,r,i,a,s)=>{e.compute(Zu(t,a??"",e.inputs[0],e.inputs[1],r,i,s))},ph=e=>{tt(e,"Add",(t,r)=>`${t}+${r}`)},hh=e=>{tt(e,"Div",(t,r)=>`${t}/${r}`)},mh=e=>{tt(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},fh=e=>{tt(e,"Mul",(t,r)=>`${t}*${r}`)},gh=e=>{let t=D("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;tt(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},yh=e=>{tt(e,"Sub",(t,r)=>`${t}-${r}`)},bh=e=>{tt(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},_h=e=>{tt(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},wh=e=>{tt(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},$h=e=>{tt(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Yu,Qu,Ju,el,vh,xh,Ey=L(()=>{"use strict";ae(),se(),Ee(),oe(),Yu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,s=i.dims.length;e.forEach((n,u)=>{if(u!==r){if(n.dataType!==a)throw new Error("input tensors should be one type");if(n.dims.length!==s)throw new Error("input tensors should have the same shape");n.dims.forEach((l,c)=>{if(c!==t&&l!==i.dims[c])throw new Error("non concat dimensions must match")})}})},Qu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Ju=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let s=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(s):a===0?i.push(`if (inputIndex == ${a}u) { ${s} }`):a===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${a}) { ${s} }`)}return i.join(`
`)},el=(e,t,r,i)=>{let a=O.size(r),s=new Array(e.length),n=new Array(e.length),u=0,l=[],c=[],h=[{type:12,data:a}];for(let $=0;$<e.length;++$)u+=e[$].dims[t],s[$]=u,c.push(e[$].dims.length),n[$]=D(`input${$}`,i,c[$]),l.push("rank"),h.push({type:12,data:s[$]});for(let $=0;$<e.length;++$)h.push(...ee(e[$].dims));h.push(...ee(r));let p=X("output",i,r.length),g=p.indicesGet("indices",t),b=Array.from(Array(s.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),y=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)$.registerUniform(`sizeInConcatAxis${k}`,"u32");return $.declareVariables(...n,p)})()}

  ${Qu(s.length,b)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${b});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Ju(n,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h}),getShaderSource:y}},vh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=O.normalizeAxis(t.axis,i.length);Yu(r,a);let s=i.slice();s[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let n=r.filter(u=>O.size(u.dims)>0);e.compute(el(n,a,s,r[0].dataType),{inputs:n})},xh=e=>be({axis:e.axis})}),Ht,Ft,Kt,kn,Zt=L(()=>{"use strict";ae(),se(),Ht=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ft=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Kt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},kn=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Kc,Xc];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Pe,kh,Sn=L(()=>{"use strict";Pe=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},kh=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Sh,zy=L(()=>{"use strict";Sh=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),zr,Tn,In=L(()=>{"use strict";ae(),se(),oe(),Zt(),zr=(e,t,r,i,a)=>{let s=i-r;return`
      ${Array.from({length:r}).map((n,u)=>`
      if (${Y(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,Y(a,u+s,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},Tn=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,u=e[1].dims,l=n[n.length-2],c=u[u.length-1],h=n[n.length-1],p=Ie(c),g=Ie(h),b=Ie(l),y=O.size(r)/p/b,$=e.length>2,k=i?i.slice(0,-2):r.slice(0,-2),x=[O.size(k),l,c],_=[{type:12,data:y},{type:12,data:l},{type:12,data:c},{type:12,data:h}];Ft(t,_),_.push(...ee(k,n,u)),$&&_.push(...ee(e[2].dims)),_.push(...ee(x));let T=S=>{let E=wn("batch_dims",e[0].dataType,k.length),z=D("a",e[0].dataType,n.length,g),N=D("b",e[1].dataType,u.length,p),w=X("output",e[0].dataType,x.length,p),U=De(w.type.tensor),q=Ht(t,w.type.value,U),Z=[z,N],G="";if($){let M=a?p:1;Z.push(D("bias",e[2].dataType,e[2].dims.length,M)),G=`${a?`value += bias[col / ${M}];`:`value += ${w.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Kt(t,K);let R=()=>{let M=`var a_data: ${z.type.value};`;for(let F=0;F<g;F++)M+=`
              let b_data${F} = b[(b_offset + (k + ${F}) * uniforms.N + col) / ${p}];`;for(let F=0;F<b;F++){M+=`a_data = a[(a_offset + (row + ${F}) * uniforms.K + k) / ${g}];`;for(let J=0;J<g;J++)M+=`
            values[${F}] = fma(${N.type.value}(a_data${g===1?"":`[${J}]`}), b_data${J}, values[${F}]);
`}return M};return`
  ${S.registerUniforms(K).registerInternalVariables(E).declareVariables(...Z,w)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${b};
    let row = (index1 % stride1) * ${b};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${z.type.indices};
    ${zr("a_indices",z,z.rank-2,E.rank,"batch_indices")}
    ${z.indicesSet("a_indices",z.rank-2,0)}
    ${z.indicesSet("a_indices",z.rank-1,0)}
    let a_offset = ${z.indicesToOffset("a_indices")};

    var b_indices: ${N.type.indices};
    ${zr("b_indices",N,N.rank-2,E.rank,"batch_indices")}
    ${N.indicesSet("b_indices",N.rank-2,0)}
    ${N.indicesSet("b_indices",N.rank-1,0)}
    let b_offset = ${N.indicesToOffset("b_indices")};
    var values: array<${w.type.value}, ${b}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${R()}
    }
    for (var i = 0u; i < ${b}u; i++) {
      var value = values[i];
      ${G}
      ${q}
      let cur_indices = ${w.type.indices}(batch, row + i, col);
      let offset = ${w.indicesToOffset("cur_indices")};
      ${w.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${g};${b};${a}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:T}}}),tl,rl,Qa,da,il,Ja,al,hi,En=L(()=>{"use strict";ae(),se(),oe(),Zt(),In(),Sn(),tl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,rl=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Qa=(e,t,r="f32",i,a=!1,s=32,n=!1,u=32)=>{let l=t[1]*e[1],c=t[0]*e[0],h=a?l:s,p=a?s:l,g=h/t[0],b=s/t[1];if(!((a&&g===4&&e[1]===4||!a&&(g===3||g===4))&&h%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${h/g}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${c/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${n?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${n?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${n?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${b};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${tl(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${rl(a,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},da=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,il=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ja=(e,t,r="f32",i,a=!1,s=32,n=!1,u=32,l=!1)=>{let c=e[1]*t[1],h=e[0]*t[0],p=a?c:s,g=a?s:c;if(!(g%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let b=g/t[1],y=p/t[0],$=s/t[1],k=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${c};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${da(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${c};

let tileRowA = i32(localId.y) * ${b};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${da(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${il(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${p}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${h}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${n?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${n?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${n?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${k}
  }
`},al=(e,t,r,i,a=!1)=>{let[s,n,u,l]=i,c=De(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Pe(e,c)} {
      var value = ${Pe(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${n.type.indices};
        ${zr("aIndices",n,n.rank-2,s.rank,"batchIndices")}
        ${n.indicesSet("aIndices",n.rank-2,"u32(row)")}
        ${n.indicesSet("aIndices",n.rank-1,"u32(colIn)")}
        value = ${n.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Pe(e,c)} {
      var value = ${Pe(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${zr("bIndices",u,u.rank-2,s.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Pe(e,c)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Pe(e,c)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},hi=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,u=e[1].dims,l=n.slice(0,-2),c=u.slice(0,-2),h=i?i.slice(0,-2):r.slice(0,-2),p=O.size(h),g=n[n.length-2],b=n[n.length-1],y=u[u.length-1],$=b%4===0&&y%4===0,k=g<=8?[4,1,1]:[4,4,1],x=[8,8,1],_=[Math.ceil(y/x[0]/k[0]),Math.ceil(g/x[1]/k[1]),Math.ceil(p/x[2]/k[2])],T=$?4:1,S=[...l,g,b/T],E=S.length,z=[...c,b,y/T],N=z.length,w=[p,g,y/T],U=[{type:6,data:g},{type:6,data:y},{type:6,data:b}];Ft(t,U),U.push(...ee(h,S,z));let q=["rank","rank"],Z=e.length>2;Z&&(U.push(...ee(e[2].dims)),q.push("rank")),U.push(...ee(w));let G=K=>{let R=h.length,M=wn("batchDims",e[0].dataType,R,1),F=De(e[0].dataType),J=D("a",e[0].dataType,E,T),ie=D("b",e[1].dataType,N,T),re=X("result",e[0].dataType,w.length,T),ne=[J,ie];if(Z){let ze=a?T:1;ne.push(D("bias",e[2].dataType,e[2].dims.length,ze))}let P=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Kt(t,P);let te=De(re.type.tensor),Q=Ht(t,re.type.value,te),V=al(T,Z,Q,[M,J,ie,re],a);return`
  ${K.registerUniforms(P).registerInternalVariables(M).declareVariables(...ne,re)}
  ${V}
  ${$?Qa(k,x,F,M):Ja(k,x,F,M)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${$};${a}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:_[0],y:_[1],z:_[2]},programUniforms:U}),getShaderSource:G}}}),nl,Th,Cy=L(()=>{"use strict";ae(),gt(),oe(),Zt(),Sn(),zy(),En(),nl=(e,t,r,i,a=!1,s,n=4,u=4,l=4,c="f32")=>{let h=U=>{switch(U){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${c}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${U} is not supported.`)}},p=U=>{switch(U){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${U} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,b=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",x=e?"col":"row",_=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${Pe(n,c)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${$}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(n)}
    }
    return resData;`,T=e?t&&i?`
    let col = colIn * ${n};
    ${_}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${_}
    }
    return ${Pe(n,c)}(0.0);`:i&&r?`
    let col = colIn * ${n};
    ${_}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${_}
    }
    return ${Pe(n,c)}(0.0);`,S=e?i&&r?p(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(u)}
    }
    return ${Pe(u,c)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(u)}
    }
    return ${Pe(u,c)}(0.0);`,E=Pe(l,c),z=Pe(e?n:u,c),N=Pe(e?u:n,c),w=Ht(s,E,c);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?T:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${N} {
      ${e?S:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${b}
      ${kh(a)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Th=(e,t,r,i,a,s,n,u,l)=>{let c=t.format==="NHWC",h=c?e[0].dims[3]:e[0].dims[1],p=r[0],g=c?r[2]:r[3],b=c?r[1]:r[2],y=c?r[3]:r[1],$=c&&(h%4===0||h%3===0)&&y%4===0,k=c?y:g*b,x=c?g*b:y,_=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(k/_[0]/T[0]),Math.ceil(x/_[1]/T[1]),Math.ceil(p/_[2]/T[2])];fe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let E=$?c&&h%4!==0?3:4:1,z=_[1]*T[1],N=_[0]*T[0],w=Math.max(_[0]*E,_[1]),U=i%z===0,q=a%N===0,Z=s%w===0,G=$?[E,4,4]:[1,1,1],K=[{type:6,data:i},{type:6,data:a},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ft(t,K),K.push(...ee(e[0].dims,e[1].dims));let R=["rank","rank"];n&&(K.push(...ee(e[2].dims)),R.push("rank")),K.push(...ee(r));let M=F=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Kt(t,J);let ie=$?4:1,re=De(e[0].dataType),ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${re}>`:re}) {
        result[flatIndex] = ${$?`vec4<${re}>`:re}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${re}>`:re}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,P=D("x",e[0].dataType,e[0].dims.length,E===3?1:E),te=D("w",e[1].dataType,e[1].dims.length,ie),Q=[P,te],V=X("result",e[0].dataType,r.length,ie);if(n){let ze=D("bias",e[2].dataType,e[2].dims.length,ie);Q.push(ze),ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${re}>`:re} {
          return bias[coords.${c?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${Sh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${F.registerUniforms(J).declareVariables(...Q,V)}
        ${ne}
        ${nl(c,U,q,Z,n,t,G[0],G[1],G[2],re)}
        ${$?Qa(T,_,re,void 0,!c,w):Ja(T,_,re,void 0,!c,w,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${$};${U};${q};${Z};${z};${N};${w}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:K}),getShaderSource:M}}}),sl,ca,br,ol,pa,ul,Ih,Eh,Ny=L(()=>{"use strict";ae(),gt(),se(),oe(),Zt(),Sn(),sl=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},ca=e=>typeof e=="number"?[e,e,e]:e,br=(e,t)=>t<=1?e:e+(e-1)*(t-1),ol=(e,t,r,i=1)=>{let a=br(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},pa=(e,t,r,i,a)=>{a==null&&(a=ol(e,t[0],i[0]));let s=[0,0,0,r];for(let n=0;n<3;n++)e[n]+2*a>=t[n]&&(s[n]=Math.trunc((e[n]-t[n]+2*a)/i[n]+1));return s},ul=(e,t,r,i,a,s,n,u,l,c)=>{let h,p,g,b;if(e==="VALID"&&(e=0),typeof e=="number"){h={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=pa([t,r,i,1],[u,l,c],1,[a,s,n],e);p=y[0],g=y[1],b=y[2]}else if(Array.isArray(e)){if(!e.every(($,k,x)=>$===x[0]))throw Error(`Unsupported padding parameter: ${e}`);h={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=pa([t,r,i,1],[u,l,c],1,[a,s,n],e[0]);p=y[0],g=y[1],b=y[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/a),g=Math.ceil(r/s),b=Math.ceil(i/n);let y=(p-1)*a+u-t,$=(g-1)*s+l-r,k=(b-1)*n+c-i,x=Math.floor(y/2),_=y-x,T=Math.floor($/2),S=$-T,E=Math.floor(k/2),z=k-E;h={top:T,bottom:S,left:E,right:z,front:x,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:h,outDepth:p,outHeight:g,outWidth:b}},Ih=(e,t,r,i,a,s=!1,n="channelsLast")=>{let u,l,c,h,p;if(n==="channelsLast")[u,l,c,h,p]=e;else if(n==="channelsFirst")[u,p,l,c,h]=e;else throw new Error(`Unknown dataFormat ${n}`);let[g,,b,y,$]=t,[k,x,_]=ca(r),[T,S,E]=ca(i),z=br(b,T),N=br(y,S),w=br($,E),{padInfo:U,outDepth:q,outHeight:Z,outWidth:G}=ul(a,l,c,h,k,x,_,z,N,w),K=s?g*p:g,R=[0,0,0,0,0];return n==="channelsFirst"?R=[u,K,q,Z,G]:n==="channelsLast"&&(R=[u,q,Z,G,K]),{batchSize:u,dataFormat:n,inDepth:l,inHeight:c,inWidth:h,inChannels:p,outDepth:q,outHeight:Z,outWidth:G,outChannels:K,padInfo:U,strideDepth:k,strideHeight:x,strideWidth:_,filterDepth:b,filterHeight:y,filterWidth:$,effectiveFilterDepth:z,effectiveFilterHeight:N,effectiveFilterWidth:w,dilationDepth:T,dilationHeight:S,dilationWidth:E,inShape:e,outShape:R,filterShape:t}},Eh=(e,t,r,i,a,s)=>{let n=s==="channelsLast",u=n?e[0].dims[3]:e[0].dims[1],l=!1,c=[64,1,1],h={x:r.map((_,T)=>T)},p=[Math.ceil(sl(h.x.map(_=>r[_]))/c[0]),1,1];fe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let g=l?n&&u%4!==0?3:4:1,b=O.size(r),y=[{type:12,data:b},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Ft(t,y),y.push(...ee(e[0].dims,e[1].dims));let $=["rank","rank"],k=e.length===3;k&&(y.push(...ee(e[2].dims)),$.push("rank")),y.push(...ee(r));let x=_=>{let T=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Kt(t,T);let S=l?4:1,E=De(e[0].dataType),z=D("x",e[0].dataType,e[0].dims.length,g===3?1:g),N=D("W",e[1].dataType,e[1].dims.length,S),w=[z,N],U=X("result",e[0].dataType,r.length,S),q="";if(k){let K=D("bias",e[2].dataType,e[2].dims.length,S);w.push(K),q+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${E}>`:E} {
          return bias[${n?Y("coords",4,5):Y("coords",1,5)}${l?"/ 4":""}];
        }`}let Z=Pe(g,E),G=Ht(t,Z,E);return`
            ${q}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${z.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${N.getByIndices("aIndices")};
            }
          ${_.registerUniforms(T).declareVariables(...w,U)}
          ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${U.offsetToIndices("global_idx")};
              let batch = ${Y("coords",0,z.rank)};
              let d2 = ${n?Y("coords",z.rank-1,z.rank):Y("coords",1,z.rank)};
              let xFRCCorner = vec3<u32>(${n?Y("coords",1,z.rank):Y("coords",2,z.rank)},
              ${n?Y("coords",2,z.rank):Y("coords",3,z.rank)},
              ${n?Y("coords",3,z.rank):Y("coords",4,z.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${n?Y("uniforms.x_shape",1,z.rank):Y("uniforms.x_shape",2,z.rank)};
              let xShapeZ = ${n?Y("uniforms.x_shape",2,z.rank):Y("uniforms.x_shape",3,z.rank)};
              let xShapeW = ${n?Y("uniforms.x_shape",3,z.rank):Y("uniforms.x_shape",4,z.rank)};
              let xShapeU = ${n?Y("uniforms.x_shape",4,z.rank):Y("uniforms.x_shape",1,z.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${n?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${n?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${n?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${n?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${k?"value = value + getBiasByOutputCoords(coords)":""};
              ${G}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${n};${g};${k}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:y}),getShaderSource:x}}}),zh,Ch,Ay=L(()=>{"use strict";ae(),se(),oe(),Zt(),zh=(e,t,r,i)=>{let a=e.length>2,s=a?"value += b[output_channel];":"",n=e[0].dims,u=e[1].dims,l=t.format==="NHWC",c=l?r[3]:r[1],h=c/t.group,p=l&&h>=4?Ie(c):1,g=O.size(r)/p,b=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:h}];Ft(t,b),b.push(...ee(n,[u[0],u[1],u[2],u[3]/p]));let y=a?["rank","rank","rank"]:["rank","rank"];b.push(...ee([r[0],r[1],r[2],r[3]/p]));let $=k=>{let x=X("output",e[0].dataType,r.length,p),_=De(x.type.tensor),T=Ht(t,x.type.value,_),S=D("x",e[0].dataType,n.length),E=D("w",e[1].dataType,u.length,p),z=[S,E];a&&z.push(D("b",e[2].dataType,e[2].dims,p));let N=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Kt(t,N);let w=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(N).declareVariables(...z,x)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${w}
    ${s}
    ${T}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:$}},Ch=(e,t,r,i)=>{let a=e.length>2,s=Ie(r[3]),n=Ie(r[2]),u=O.size(r)/s/n,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],c=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],h=[r[0],r[1],r[2],r[3]/s],p=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ft(t,p),p.push(...ee(l,c,h));let g=(n-1)*t.strides[1]+c[1],b=y=>{let $=X("output",e[0].dataType,h.length,s),k=De($.type.tensor),x=Ht(t,$.type.value,k),_=D("x",e[0].dataType,l.length,s),T=D("w",e[1].dataType,c.length,s),S=[_,T];a&&S.push(D("b",e[2].dataType,e[2].dims,s));let E=a?"value += b[output_channel];":"",z=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Kt(t,z),`
  ${y.registerUniforms(z).declareVariables(...S,$)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${n}u;
    let col = (index1 % width1) * ${n}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${_.type.value}, ${g}>;
    var values: array<${$.type.value}, ${n}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${c[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${_.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${_.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${c[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${n}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${n}u; i++) {
      var value = values[i];
      ${E}
      ${x}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${n};${g};${c[0]};${c[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:b}}}),ll,Jr,dl,ei,en,ha,cl,pl,tn,Oy=L(()=>{"use strict";se(),Cy(),Ny(),En(),Ay(),Zt(),In(),Ot(),ll=(e,t,r,i,a,s)=>{let n=e[0],u=e.slice(s?1:2,s?3:4),l=u.length,c=t[0],h=t.slice(2).map((g,b)=>g+(g-1)*(r[b]-1)),p=u.map((g,b)=>g+i[b]+i[b+l]).map((g,b)=>Math.floor((g-h[b]+a[b])/a[b]));return p.splice(0,0,n),p.splice(s?3:1,0,c),p},Jr=[2,3,1,0],dl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},ei=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();ci.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},en=e=>{let t=kn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,s=e.group,n=e.kernel_shape,u=e.pads,l=e.strides,c=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,pads:u,strides:l,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},ha=(e,t,r,i)=>{let a=r.format==="NHWC",s=ll(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let z=[t[0]];if(a){let N=e.kernelCustomData.wT??e.compute(Ve(t[1],Jr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=N),z.push(N)}else z.push(t[1]);t.length===3&&z.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Ch(z,r,s,i),{inputs:z}):e.compute(zh(z,r,s,i),{inputs:z});return}let n=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],c=t[0].dims[a?3:1],h=t[1].dims[2],p=t[1].dims[3],g=s[a?1:2],b=s[a?2:3],y=s[a?3:1],$=a&&h===u&&p===l&&r.pads[0]===0&&r.pads[1]===0;if($||h===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let z=s[0],N,w,U,q=[];if(a){let K=e.kernelCustomData.wT??e.compute(Ve(t[1],Jr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),$){let R=u*l*c;N=t[0].reshape([1,z,R]),w=K.reshape([1,R,y]),U=[1,z,y]}else N=t[0].reshape([z,u*l,c]),w=K.reshape([1,c,y]),U=[z,g*b,y];q.push(N),q.push(w)}else N=t[0].reshape([z,c,u*l]),w=t[1].reshape([1,y,c]),U=[z,y,g*b],q.push(w),q.push(N);n&&q.push(t[2]);let Z=U[2],G=q[0].dims[q[0].dims.length-1];Z<8&&G<8?e.compute(Tn(q,r,s,U,a,i),{inputs:q}):e.compute(hi(q,r,s,U,a,i),{inputs:q});return}let k=!0,x=e.kernelCustomData.wT??e.compute(Ve(t[1],Jr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let _=[t[0],x];n&&_.push(t[2]);let T=a?g*b:y,S=a?y:g*b,E=h*p*c;e.compute(Th(_,r,s,T,S,E,n,k,i),{inputs:_})},cl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),n=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=ei({...t,pads:a,strides:s,dilations:n,kernelShape:u},i);ha(e,i,l,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},pl=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=ei(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,n=Ih(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(Eh(t,a,n.outShape,[n.filterDepth,n.filterHeight,n.filterWidth],[n.padInfo.front,n.padInfo.top,n.padInfo.left],i))},tn=(e,t)=>{if(dl(e.inputs,t),e.inputs[0].dims.length===3)cl(e,t);else if(e.inputs[0].dims.length===5)pl(e,e.inputs,t);else{let r=ei(t,e.inputs);ha(e,e.inputs,r)}}}),Nh,Ry=L(()=>{"use strict";ae(),gt(),se(),oe(),Nh=(e,t,r)=>{let i=e.length>2,a=t.outputShape,s=t.format==="NHWC",n=t.group,u=e[1].dims,l=u[2]/n,c=u[3],h=s?Ie(l):1,p=s&&c===1&&l>=4,g=p?Math.floor(l/4)*4:Math.floor(l/h)*h,b=l-g,y=s?Ie(c):1,$=s?c===1?h:y:1,k=O.size(a)/y,x=[Math.ceil(k/64),1,1];fe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let _=["rank","rank"],T=[t.strides[0],t.strides[1]],S=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],E=[t.dilations[0],t.dilations[1]],z=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],N=[z[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),z[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],w=[{type:12,data:k},{type:12,data:T},{type:12,data:S},{type:12,data:E},{type:12,data:z},{type:6,data:N},{type:12,data:g},{type:12,data:l},{type:12,data:c},...ee(e[0].dims,e[1].dims)];i&&(w.push(...ee(e[2].dims)),_.push("rank")),w.push(...ee(a));let U=q=>{let Z=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:z.length},{name:"pads",type:"i32",length:N.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=De(e[0].dataType),K=s?1:2,R=s?2:3,M=s?3:1,F=D("W",e[1].dataType,e[1].dims.length,$),J=D("Dy",e[0].dataType,e[0].dims.length,h),ie=[J,F];i&&ie.push(D("bias",e[2].dataType,[a[M]].length,y));let re=X("result",e[0].dataType,a.length,y),ne=()=>{let Q="";if(p)h===4?Q+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${F.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?Q+=`
          dotProd = dotProd + dot(vec4<${G}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${G}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(Q+=`
          dotProd = dotProd + dot(vec4<${G}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${G}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}, ${F.getByOffset("w_offset + 2u")}, ${F.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Q+=`
                  let xValue = ${s?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):J.get("batch","inputChannel","idyR","idyC")};
        `,h===1)Q+=`
          let w_offset = ${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${F.getByOffset(`w_offset / ${$}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let V=0;V<h;V++)Q+=`
            let wValue${V} = ${F.getByOffset(`${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${V}, wOutChannel)`)} / ${$}`)};
            dotProd = dotProd + xValue[${V}] * wValue${V};`;return Q},P=()=>{if(b===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let Q="";if(h===1){Q+="dotProd = dotProd";for(let V=0;V<b;V++)Q+=`
            + ${J.getByOffset(`x_offset + ${V}`)} * ${F.getByOffset(`w_offset + ${V}`)}`;Q+=";"}else if(h===2){if(b!==2)throw new Error(`Invalid inputChannelsRemainder ${b}.`);Q+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${F.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Q},te=`
            let outputIndices = ${re.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${re.indicesGet("outputIndices",0)};
            let d1 = ${re.indicesGet("outputIndices",M)};
            let r = ${re.indicesGet("outputIndices",K)};
            let c = ${re.indicesGet("outputIndices",R)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${re.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${G}(dyRCorner) + ${G}(wR)) / ${G}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${G}(uniforms.Dy_shape[${K}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${G}(dyCCorner) + ${G}(wC)) / ${G}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${F.indicesToOffset(`${F.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${$};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:h}) {
                  ${ne()}
                  inputChannel = inputChannel + ${p?4:h};
                }
                ${P()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${y}]`:""};
            ${re.setByOffset("global_idx","value")};
          `;return`
    ${q.registerUniforms(Z).declareVariables(...ie,re)}
      ${q.mainStart()}
      ${q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${te}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${h}${$}${y}${p}${b}`,inputDependencies:_},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:w}),getShaderSource:U}}}),hl,ml,fl,ma,Ah,gl,fa,yl,Oh,Dy=L(()=>{"use strict";Ry(),Zt(),Ot(),hl=(e,t,r,i,a,s)=>(e-1)*t+r+(i-1)*a+1-s,ml=(e,t,r,i,a)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[a]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[a]=s)},fl=(e,t,r,i,a,s,n,u,l,c)=>{let h=e.length-2,p=c.length===0;l.length<h&&l.push(...Array(h-l.length).fill(0));let g=e[0],b=t[u?3:1]*a;for(let y=0,$=e.length-h-(u?1:0);y<h;++y,++$){let k=e[$],x=p?k*n[y]:c[y],_=hl(k,n[y],s[y],t[$],r[y],x);ml(_,i,s,y,y+h),p&&c.push(n[y]*(k-1)+l[y]+(t[$]-1)*r[y]+1-s[y]-s[y+h])}c.splice(0,0,g),c.splice(u?3:1,0,b)},ma=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,g)=>p*g,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),s=e.outputShape.slice(),n=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((p,g)=>p+g,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}let c=e.strides.slice();if(c.reduce((p,g)=>p+g,0)===0){let p=t[0].dims.length-2;c=new Array(p).fill(1)}fl(u,r,l,e.autoPad,e.group,a,c,i,n,s);let h=Object.assign({},e);return Object.assign(h,{kernelShape:r,pads:a,outputPadding:n,outputShape:s,dilations:l,strides:c}),h},Ah=e=>{let t=kn(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,s=e.group??1,n=e.kernelShape,u=e.pads,l=e.strides,c=e.wIsConst(),h=e.outputPadding,p=e.outputShape;return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,outputPadding:h,outputShape:p,pads:u,strides:l,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},gl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((n,u)=>n+u,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((n,u)=>n+u,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((n,u)=>n+u,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((n,u)=>n+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},fa=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Ve(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let s=[t[0],a];t.length===3&&s.push(t[2]),e.compute(Nh(s,r,i),{inputs:s})},yl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let n=t.strides;(n.length===0||n[0]===0)&&(n=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],n=[1].concat(n),s=[1].concat(s),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let c=ma({...t,pads:u,strides:n,dilations:s,kernelShape:a,outputPadding:l},i);fa(e,i,c,h=>r?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},Oh=(e,t)=>{if(gl(e.inputs,t),e.inputs[0].dims.length===3)yl(e,t);else{let r=ma(t,e.inputs);fa(e,e.inputs,r)}}}),bl,Rh,Dh,By=L(()=>{"use strict";ae(),se(),Ee(),oe(),bl=(e,t,r,i)=>{let a=O.size(t),s=t.length,n=D("input",e,s),u=X("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),c=O.normalizeAxis(l,s),h=p=>{let g=` i32(${n.indicesGet("inputIndices","uniforms.axis")}) `,b=Y("uniforms.input_shape","uniforms.axis",s),y=i.reverse?g+(i.exclusive?" + 1":""):"0",$=i.reverse?b:g+(i.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(n,u)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${n.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${n.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:c},...ee(t,t)]}),getShaderSource:h}},Rh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(bl(i,r,a,t),{inputs:[0]})},Dh=e=>{let t=e.exclusive===1,r=e.reverse===1;return be({exclusive:t,reverse:r})}}),_l,wl,$l,Bh,Mh,My=L(()=>{"use strict";ae(),se(),Ee(),oe(),_l=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},wl=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)a.push(r.indicesSet("a",e[s],`i[${s}]`));return a.push("return a;}"),a.join(`
`)},$l=(e,t)=>{let r,i,a,s,n,u,l=t.format==="NHWC",c=t.blocksize,h=t.mode==="DCR";l?([r,i,a,s]=e.dims,n=h?[r,i,a,c,c,s/c**2]:[r,i,a,s/c**2,c,c],u=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],n=h?[r,c,c,s/c**2,i,a]:[r,s/c**2,c,c,i,a],u=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(n),g=p.dims.length,b=e.dataType,y=D("a",b,g),$=X("output",b,g),k=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(y,$)}

  ${wl(u,g,y,$)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let _=l?[r,i*c,a*c,s/c**2]:[r,s/c**2,i*c,a*c],T=O.size(_),S=p.dims,E=O.sortBasedOnPerm(S,u);return{outputs:[{dims:_,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...ee(S,E)]}},getShaderSource:k}},Bh=(e,t)=>{_l(e.inputs),e.compute($l(e.inputs[0],t))},Mh=e=>be({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ht,_r,ti,ga,It,vl,xl,kl,ya,ba,_a,Sl,Tl,wa,Il,Uh,Ph,Uy=L(()=>{"use strict";ae(),se(),Ee(),oe(),ht=256,_r=512,ti=2*Math.PI,ga=e=>{let t=[],r=e;for(let i of[4,2,3,5])for(;r%i===0;)t.push(i),r/=i;return r===1?t:void 0},It=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},vl=(e,t,r,i,a)=>{let s=r/e,n=_r-i,u=c=>`smem[${n}u + base + ${c*t}u]`,l=`  for (var t = local_idx; t < ${s}u; t += ${ht}u) {
`;l+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,l+=`    var leg: array<vec2<f32>, 5>;
`;for(let c=0;c<e;c++){let h=`${i}u + t + ${c*s}u`;if(c===0)l+=`    leg[0] = smem[${h}];
`;else{let p=a*ti*c/(e*t);l+=`    { let a = ${It(p)} * angleUnit; leg[${c}] = cmul(smem[${h}], vec2<f32>(cos(a), sin(a))); }
`}}if(l+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)l+=`    ${u(0)} = leg[0] + leg[1];
    ${u(1)} = leg[0] - leg[1];
`;else if(e===4){let c=a<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";l+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,l+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,l+=`    let oddRot = ${c};
`,l+=`    ${u(0)} = evenSum + oddSum;
    ${u(1)} = evenDiff + oddRot;
`,l+=`    ${u(2)} = evenSum - oddSum;
    ${u(3)} = evenDiff - oddRot;
`}else for(let c=0;c<e;c++){let h=["leg[0]"];for(let p=1;p<e;p++){let g=a*ti*(p*c)/e,b=It(Math.cos(g)),y=It(Math.sin(g));h.push(`vec2<f32>(leg[${p}].x*${b} - leg[${p}].y*${y}, leg[${p}].x*${y} + leg[${p}].y*${b})`)}l+=`    ${u(c)} = ${h.join(" + ")};
`}return`${l}  }
  workgroupBarrier();
`},xl=(e,t,r)=>{let i="",a=1,s=0;for(let n of e)i+=vl(n,a,t,s,r),a*=n,s=_r-s;return{code:i,resultOffset:s}},kl=(e,t,r,i,a)=>{let s=e.dims,n=s.length,u=s[n-1],l=s[t],c=r&&i?(l-1)*2:l;a!==void 0&&(c=a);let h=r&&i?1:2,p=i&&!r?Math.floor(c/2)+1:c,g=s.slice();g[t]=p,g[n-1]=h;let b=1;for(let $=t+1;$<n-1;$++)b*=s[$];let y=O.size(s)/u/l;return{dataType:e.dataType,outputDims:g,length:c,signalLength:l,inner:b,batch:y,inputComponents:u,outputComponents:h,outputLength:p,inverse:r,onesided:i}},ya=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),ba=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],_a=(e,t,r)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,r),Sl=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:a,inverse:s,onesided:n}=e,u=Re(t),l=s?1:-1,c=s?1/r:1,h=ga(r),p=g=>{let b=D("x",t,[1]),y=X("y",t,[1]),$=E=>{let z=`inBase + (${E}) * uniforms.inner * ${i}u`,N=`f32(${b.getByOffset(z)})`,w=i===2?`f32(${b.getByOffset(`${z} + 1u`)})`:"0.0";return`vec2<f32>(${N}, ${w})`},k;if(s&&n){let E=Math.floor(r/2)+1,z=r%2===0?`select(provided, provided - 1u, provided == ${E}u)`:"provided";k=`
    let provided = min(uniforms.signalLength, ${E}u);
    for (var i = local_idx; i < ${r}u; i += ${ht}u) {
      if (i < provided) { smem[i] = ${$("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${z}; k += ${ht}u) {
      let h = smem[k];
      smem[${r}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else k=`
    let loadCount = min(uniforms.signalLength, ${r}u);
    for (var i = local_idx; i < ${r}u; i += ${ht}u) {
      if (i < loadCount) { smem[i] = ${$("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:x,resultOffset:_}=xl(h,r,l),T=c===1?`smem[${_}u + i]`:`smem[${_}u + i] * ${It(c)}`,S=a===2?y.setByOffset("off + 1u",`${u}(v.y)`):"";return`
  ${_a(g,b,y)}
  var<workgroup> smem: array<vec2<f32>, ${2*_r}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${g.mainStart(ht)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${a}u;
    ${k}
${x}    for (var i = local_idx; i < uniforms.outputLength; i += ${ht}u) {
      let v = ${T};
      let off = outBase + i * uniforms.inner * ${a}u;
      ${y.setByOffset("off",`${u}(v.x)`)}
      ${S}
    }
  }`};return{name:"DFT",shaderCache:{hint:ya(e,"fft"),inputDependencies:["type"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:ba(e),dispatchGroup:{x:e.batch}})}},Tl=e=>{let{dataType:t,length:r,inputComponents:i,outputComponents:a,inverse:s,onesided:n}=e,u=Re(t),l=s?1:-1,c=s?1/r:1,h=p=>{let g=D("x",t,[1]),b=X("y",t,[1]),y=T=>{let S=`inBase + (${T}) * uniforms.inner * ${i}u`,E=`f32(${g.getByOffset(S)})`,z=i===2?`f32(${g.getByOffset(`${S} + 1u`)})`:"0.0";return`vec2<f32>(${E}, ${z})`},$=s&&n?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(r/2)+1}u);
    if (k < provided) { return ${y("k")}; }
    let m = ${r}u - k;
    if (m < provided) {
      let h = ${y("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${y("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,k=`
      let angle = ${It(l*ti)} * f32(knMod) / ${It(r)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${r}u) { knMod -= ${r}u; }`,x=a===2?b.setByOffset("off + 1u",`${u}(v.y)`):"",_=c===1?"acc":`acc * ${It(c)}`;return`
  ${_a(p,g,b)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${$}
  ${p.mainStart(ht)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${i}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${a}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${ht}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${r}u; n++) {${k}
      }
      let v = ${_};
      let off = outBase + k * uniforms.inner * ${a}u;
      ${b.setByOffset("off",`${u}(v.x)`)}
      ${x}
    }
  }`};return{name:"DFT",shaderCache:{hint:ya(e,"direct"),inputDependencies:["type"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:ba(e),dispatchGroup:{x:e.batch}})}},wa=e=>{if(!e||e.dataType===0)return;if(O.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},Il=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let r=t[t.length-1];if(r!==1&&r!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},Uh=(e,t)=>{Il(e.inputs);let r=e.inputs[0],i=r.dims.length,a=t.inverse!==0,s=t.onesided!==0,n=wa(e.inputs[1]);if(n!==void 0&&n<=0)throw new Error("dft_length must be greater than zero.");let u=O.normalizeAxis(wa(e.inputs[2])??t.axis,i);if(u===i-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(a&&s&&r.dims[i-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let l=kl(r,u,a,s,n);if(l.length<=0)throw new Error(`Invalid DFT length: ${l.length}`);let c=l.length<=_r&&ga(l.length)!==void 0?Sl(l):Tl(l);e.compute(c,{inputs:[0]})},Ph=e=>be({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),ri,wr,$a,El,zl,Cl,Nl,va,Al,Lh,qh,Py=L(()=>{"use strict";ae(),se(),Ee(),oe(),ri="[a-zA-Z]|\\.\\.\\.",wr="("+ri+")+",$a="^"+wr+"$",El="("+wr+",)*"+wr,zl="^"+El+"$",Cl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Nl=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(zl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,s)=>{let n=e[s].dims.slice();if(!a.match(RegExp($a)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,n,s);this.lhs.push(u)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(wr)))throw new Error("Invalid RHS");i.match(RegExp(ri,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,s=!1,n=[],u=0;if(!e.match(RegExp($a))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(ri,"g")),c=new Cl(i);return l?.forEach((h,p)=>{if(h==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let g=a-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(n=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==n.length||this.ellipsisDims.toString()!==n.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=n;else throw new Error("Ellipsis must be specified in the LHS");for(let b=0;b<n.length;b++){let y=String.fromCharCode(48+b);c.addSymbol(y,p+b),this.addSymbol(y,r[u++],i)}}else c.addSymbol(h,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(h,r[u++],i)}),c}},va=e=>e+"_max",Al=(e,t,r,i)=>{let a=e.map(c=>c.length).map((c,h)=>D(`input${h}`,t,c)),s=O.size(i),n=X("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(c=>!r.rhs.symbolToIndices.has(c)),l=c=>{let h=[],p="var prod = 1.0;",g="var sum = 0.0;",b="sum += prod;",y=[],$=[],k=[],x=[],_=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,E)=>{if(r.rhs.symbolToIndices.has(E)){let z=r.rhs.symbolToIndices.get(E)?.[0];z!==void 0&&r.lhs.forEach((N,w)=>{if(S.inputIndices.includes(w)){let U=N.symbolToIndices.get(E);if(U===void 0)throw new Error("Invalid symbol error");U.forEach(q=>{h.push(`${a[w].indicesSet(`input${w}Indices`,q,n.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,N)=>{if(S.inputIndices.includes(N)){let w=z.symbolToIndices.get(E);if(w===void 0)throw new Error("Invalid symbol error");w.forEach(U=>{y.push(`${a[N].indicesSet(`input${N}Indices`,U,`${E}`)}`)}),x.push(`prod *= ${a[N].getByIndices(`input${N}Indices`)};`)}}),$.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${va(E)}; ${E}++) {`),k.push("}")});let T=_?[...h,`let sum = ${a.map((S,E)=>S.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...h,g,...$,...y,p,...x,b,...k];return`
            ${c.registerUniforms(u.map(S=>({name:`${va(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,n)}

            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${n.offsetToIndices("global_idx")};
            ${a.map((S,E)=>`var input${E}Indices: ${a[E].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${n.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let c=u.filter(p=>r.symbolToInfo.has(p)).map(p=>({type:12,data:r.symbolToInfo.get(p)?.dimValue||0}));c.push({type:12,data:s});let h=e.map((p,g)=>[...ee(p)]).reduce((p,g)=>p.concat(g),c);return h.push(...ee(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:h}},getShaderSource:l}},Lh=(e,t)=>{let r=new Nl(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((s,n)=>s.dims);e.compute(Al(a,e.inputs[0].dataType,r,i))},qh=e=>{let t=e.equation.replace(/\s+/g,"");return be({equation:t})}}),Ol,xa,Rl,Dl,jh,Ly=L(()=>{"use strict";ae(),se(),oe(),Ol=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},xa=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},Rl=(e,t)=>e.length>t.length?xa(e,t):xa(t,e),Dl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Rl(t,r),a=e[0].dataType,s=a===9||O.size(t)===1,n=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=s||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(O.size(i)/u),c=p=>{let g=D("input",a,t.length,n),b=X("output",a,i.length,u),y;if(a===9){let $=(k,x,_="")=>`
          let outputIndices${x} = ${b.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${g.broadcastedIndicesToOffset(`outputIndices${x}`,b)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${k}[${x}] = ${_}(${g.getByOffset(`index${x}`)}[component${x}]);
        `;y=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${b.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${b.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",b)};
        let data = ${b.type.value}(${g.getByOffset(`inputOffset / ${n}`)});
        ${b.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(g,b)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},h=[{type:12,data:l},...ee(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${n}${u}`,inputDependencies:["rank"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h})}},jh=e=>{Ol(e.inputs),e.compute(Dl(e.inputs),{inputs:[0]})}}),Bl,Wh,qy=L(()=>{"use strict";ae(),se(),oe(),xn(),Bl=e=>{let t=e[0].dataType,r=O.size(e[0].dims),i=O.size(e[1].dims),a=i%4===0,s=n=>{let u=D("x",t,[1],4),l=D("bias",t,[1],4),c=X("y",t,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=b=>`
      let bias${b}_offset: u32 = (global_idx * 4 + ${b}) % uniforms.bias_size;
      let bias${b} = ${l.getByOffset(`bias${b}_offset / 4`)}[bias${b}_offset % 4];`,g=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${n.registerUniforms(h).declareVariables(u,l,c)}

    ${Za(Re(t))}

    ${n.mainStart(ir)}
      ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${c.setByOffset("global_idx",Ya("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:n=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/ir/4)}})}},Wh=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?oh(e):e.compute(Bl(e.inputs))}}),Ml,Ul,Vh,Gh,jy=L(()=>{"use strict";ae(),se(),Ee(),oe(),Ml=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Ul=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=O.normalizeAxis(t.axis,a),n=r.slice(0);n.splice(s,1,...i);let u=r[s],l=e[0].dataType===9?4:1,c=Math.ceil(O.size(n)/l),h=[{type:12,data:c},{type:6,data:u},{type:12,data:s},...ee(e[0].dims,e[1].dims,n)],p=g=>{let b=D("data",e[0].dataType,e[0].dims.length,l),y=D("inputIndices",e[1].dataType,e[1].dims.length),$=X("output",e[0].dataType,n.length,l),k=_=>{let T=i.length,S=`var indicesIndices${_}  = ${y.type.indices}(0);`;for(let E=0;E<T;E++)S+=`${T>1?`indicesIndices${_}[${E}]`:`indicesIndices${_}`} = ${n.length>1?`outputIndices${_}[uniforms.axis + ${E}]`:`outputIndices${_}`};`;S+=`
          var idx${_} = ${y.getByIndices(`indicesIndices${_}`)};
          if (idx${_} < 0) {
            idx${_} = idx${_} + uniforms.axisDimLimit;
          }
          var dataIndices${_} : ${b.type.indices};
        `;for(let E=0,z=0;E<a;E++)E===s?(S+=`${a>1?`dataIndices${_}[${E}]`:`dataIndices${_}`} = u32(idx${_});`,z+=T):(S+=`${a>1?`dataIndices${_}[${E}]`:`dataIndices${_}`} = ${n.length>1?`outputIndices${_}[${z}]`:`outputIndices${_}`};`,z++);return S},x;if(e[0].dataType===9){let _=(T,S,E="")=>`
          let outputIndices${S} = ${$.offsetToIndices(`outputOffset + ${S}u`)};
          ${k(S)};
          let offset${S} = ${b.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${T}[${S}] = ${E}(${b.getByOffset(`index${S}`)}[component${S}]);
        `;x=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${_("value",0,"u32")}
        ${_("value",1,"u32")}
        ${_("value",2,"u32")}
        ${_("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${b.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(b,y,$)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:h}),getShaderSource:p}},Vh=e=>be({axis:e.axis}),Gh=(e,t)=>{let r=e.inputs;Ml(r),e.compute(Ul(e.inputs,t))}}),Pl,Hh,Fh,Wy=L(()=>{"use strict";ae(),se(),oe(),Pl=(e,t,r,i,a,s,n,u,l)=>{let c=[{type:12,data:s},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:n},{type:12,data:u},{type:12,data:l}],h=[s];c.push(...ee(t.dims,h));let p=g=>{let b=D("indices_data",t.dataType,t.dims.length),y=X("input_slice_offsets_data",12,1,1),$=[b,y],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(k).declareVariables(...$)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},Hh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,s=r[1].dims,n=s[s.length-1],u=O.sizeToDimension(s,s.length-1),l=O.sizeFromDimension(i,t.batchDims+n),c=O.sizeToDimension(i,t.batchDims),h=O.sizeFromDimension(i,t.batchDims),p=u/c,g=new Array(n),b=l;for(let S=0;S<n;++S)g[n-1-S]=b,b*=i[t.batchDims+n-1-S];let y=Pl(e,r[1],g,t.batchDims,i,u,p,h,n),$=t.batchDims+n;if($>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=s.slice(0,-1).concat(i.slice($)),x=O.size(k),_=[{type:12,data:x},{type:12,data:l},...ee(r[0].dims,y.dims,k)],T=S=>{let E=D("data",r[0].dataType,r[0].dims.length),z=D("slice_offsets",12,y.dims.length),N=X("output",r[0].dataType,k.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,z,N)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:a}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:_}),getShaderSource:T},{inputs:[r[0],y]})},Fh=e=>({batchDims:e.batch_dims,cacheKey:""})}),Ll,ql,Kh,Xh,Vy=L(()=>{"use strict";ae(),se(),Ee(),oe(),Ll=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],s=e[2],n=e.length===4?e[3]:void 0;if(s.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===s.dims[l]:u===s.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(n){if(n.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(n.dims.length!==s.dims.length||!n.dims.map((u,l)=>u===s.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},ql=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=O.normalizeAxis(t.gatherAxis,a),n=O.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(s,1,...i);let l=O.size(u),c=e[2].dataType,h=e[0].dataType===22,p=[{type:12,data:l},{type:12,data:n},{type:12,data:s},{type:12,data:t.blockSize},...ee(...e.map((b,y)=>b.dims),u)],g=b=>{let y=D("data",e[0].dataType,e[0].dims.length),$=D("inputIndices",e[1].dataType,e[1].dims.length),k=D("scales",e[2].dataType,e[2].dims.length),x=e.length>3?D("zeroPoint",e[3].dataType,e[3].dims.length):void 0,_=X("output",c,u.length),T=[y,$,k];x&&T.push(x);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${b.registerUniforms(S).declareVariables(...T,_)}
        ${b.mainStart()}
        let output_indices = ${_.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${_.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${_.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${_.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${_.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${h?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Re(c)}(quantized_data - zero_point) * scale;
        ${_.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((b,y)=>y!==1).map(b=>b.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(b,y)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:c}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:g}},Kh=(e,t)=>{let r=e.inputs;Ll(r,t),e.compute(ql(e.inputs,t))},Xh=e=>be({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),jl,Wl,Zh,Yh,Gy=L(()=>{"use strict";ae(),se(),Ee(),oe(),jl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Wl=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,s=e[1].dims,n=e[1].dataType,u=O.normalizeAxis(t.axis,a),l=r[u],c=s.slice(0),h=O.size(c),p=D("input",i,a),g=D("indicesInput",n,s.length),b=X("output",i,c.length),y=[{type:12,data:h},{type:6,data:l},{type:12,data:u}];return y.push(...ee(r,s,c)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,g,b)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${b.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${b.setByOffset("global_idx","value")};
  }`}},Zh=e=>be({axis:e.axis}),Yh=(e,t)=>{let r=e.inputs;jl(r),e.compute(Wl(e.inputs,t))}}),Vl,Gl,Qh,Jh,Hy=L(()=>{"use strict";ae(),se(),oe(),Vl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Gl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,s,n]=Fc.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,s];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,c=Math.ceil(s/l),h=Math.ceil(a/l),p=!0,g=O.size(u),b=[{type:12,data:p?c:g},{type:12,data:a},{type:12,data:s},{type:12,data:n},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(b.push(...ee(e[2].dims)),y.push("rank")),b.push(...ee(u));let $=x=>{let _="";t.transA&&t.transB?_="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?_="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?_="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(_="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let T=t.alpha===1?"":"value *= uniforms.alpha;",S=D("a",e[0].dataType,e[0].dims),E=D("b",e[1].dataType,e[1].dims),z=S.type.value,N=null,w=[S,E];e.length===3&&(N=D("c",e[2].dataType,e[2].dims.length),w.push(N));let U=X("output",e[0].dataType,u.length);w.push(U);let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(q).declareVariables(...w)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${z}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${_}
    }

    ${T}
    ${N!=null?`let cOffset = ${N.broadcastedIndicesToOffset("vec2(m, n)",U)}; value += ${z}(uniforms.beta) * ${N.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=x=>{let _=D("a",e[0].dataType,e[0].dims),T=D("b",e[1].dataType,e[1].dims),S=null,E=[_,T];e.length===3&&(S=D("c",e[2].dataType,e[2].dims.length),E.push(S));let z=X("output",e[0].dataType,u.length);E.push(z);let N=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],w="",U="";t.transA&&t.transB?(U=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,w="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(U=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,w="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(U=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,w="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(U=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${T.type.value}(0);
      }
      `,w="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let q=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(N).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${_.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${T.type.storage}, ${l}>, ${l}>;
  ${x.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${z.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${U}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${w}
      }
      workgroupBarrier();
    }

    ${q}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",z)}; value += ${z.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:c*h},programUniforms:b}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:$}},Qh=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Jh=(e,t)=>{Vl(e.inputs),e.compute(Gl(e.inputs,t))}}),ut,mt,Mt,Ut,Hl,Fl,Kl,Xl,Zl,Yl,Ql,Jl,em,tm,Fy=L(()=>{"use strict";ae(),se(),Ee(),oe(),[ut,mt,Mt,Ut]=[0,1,2,3],Hl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Fl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Kl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Xl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Zl=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Yl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${ut}] = batch;
     indices[${mt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Mt}] = u32(r);
            indices[${Ut}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Mt}] = u32(clamp(r, 0, H - 1));
          indices[${Ut}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Mt}] = gs_reflect(r, border[1], border[3]);
          indices[${Ut}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Ql=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${ut}], indices[${mt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${ut}], indices[${mt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${ut}], indices[${mt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${ut}], indices[${mt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${ut}], indices[${mt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${ut}], indices[${mt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Jl=(e,t)=>{let r=D("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=D("grid",e[1].dataType,i.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[ut,mt,Mt,Ut]=[0,3,1,2]);let n=X("output",e[0].dataType,s.length),u=r.type.value,l=O.size(s),c=[{type:12,data:l},...ee(e[0].dims,i,s)],h=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,a,n)}
  ${Fl}
  ${Kl(u)}
  ${Xl(t)}
  ${Zl(t)}
  ${Yl(r,u,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Mt}]);
      let W_in = i32(uniforms.x_shape[${Ut}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${n.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${ut}], indices[${Mt}], indices[${Ut}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Ql(n,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let g=O.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:c}},getShaderSource:h}},em=(e,t)=>{Hl(e.inputs),e.compute(Jl(e.inputs,t))},tm=e=>be({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Le,ed,rm,ka,td,Ir,im,am=L(()=>{"use strict";ae(),se(),Ee(),_n(),vn(),oe(),Ot(),Le=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,ed=(e,t)=>{let r=e[0],i=Le(e,1),a=Le(e,2),s=Le(e,3),n=Le(e,4),u=Le(e,5),l=Le(e,6),c=Le(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=r.dims[0],p=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],b=p,y=0,$=0,k=Math.floor(g/t.numHeads);if(l&&c&&O.size(l.dims)&&O.size(c.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==t.numHeads||l.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(c.dims[0]!==h||c.dims[1]!==t.numHeads||c.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==c.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(c.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],$=l.dims[2]}else if(l&&O.size(l.dims)||c&&O.size(c.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(i&&O.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,b=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,b=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,b=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(s&&O.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let _=y+b,T=0;if(n&&O.size(n.dims)>0){T=8;let N=n.dims;throw N.length===1?N[0]===h?T=1:N[0]===3*h+2&&(T=3):N.length===2&&N[0]===h&&N[1]===_&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,E=g;if(a&&O.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(b!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=a.dims[2]}else{if(b!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=a.dims[1]*a.dims[3],S=!0}}let z=!1;if(n&&O.size(n.dims)>0)throw new Error("Key padding mask is not supported");if(u&&O.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==h||u.dims[1]!==t.numHeads||u.dims[2]!==p||u.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:b,totalSequenceLength:_,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:g,vHiddenSize:E,headSize:k,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:z,passPastInKv:S,qkvFormat:x}},rm=e=>be({...e}),ka=be({perm:[0,2,1,3]}),td=(e,t,r,i,a,s,n)=>{let u=[i,a,s],l=O.size(u),c=[{type:12,data:l},{type:12,data:n},{type:12,data:s}],h=p=>{let g=X("qkv_with_bias",t.dataType,u),b=D("qkv",t.dataType,u),y=D("bias",r.dataType,u),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms($).declareVariables(b,y,g)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:h},{inputs:[t,r],outputs:[-1]})[0]},Ir=(e,t,r,i,a,s,n,u)=>{let l=s;if(n&&O.size(n.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=td(e,s,n,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Ve(l,ka.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Ve(l,ka.perm),{inputs:[l],outputs:[-1]})[0]},im=(e,t)=>{let r=ed(e.inputs,t),i=e.inputs[0],a=Le(e.inputs,1),s=Le(e.inputs,2),n=Le(e.inputs,3),u=Le(e.inputs,4),l=Le(e.inputs,5),c=Le(e.inputs,6),h=Le(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let p=a&&s&&a.dims.length===4&&s.dims.length===4,g=Ir(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,n,0);if(p)return Nr(e,g,a,s,u,void 0,c,h,l,r);if(!a||!s)throw new Error("key and value must be provided");let b=Ir(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,n,r.hiddenSize),y=Ir(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,n,2*r.hiddenSize);Nr(e,g,b,y,u,void 0,c,h,l,r)}}),rd,id,ad,nd,rn,nm,sm,om=L(()=>{"use strict";ae(),se(),Ee(),oe(),rd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},id=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),be({numOutputs:i,axis:t.axis,splitSizes:r})},ad=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Y("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,nd=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},rn=(e,t)=>{let r=e[0].dims,i=O.size(r),a=e[0].dataType,s=O.normalizeAxis(t.axis,r.length),n=new Array(t.numOutputs),u=D("input",a,r.length),l=new Array(t.numOutputs),c=[],h=[],p=0,g=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){p+=t.splitSizes[y],l[y]=p;let $=r.slice();$[s]=t.splitSizes[y],h.push($),n[y]=X(`output${y}`,a,$.length),c.push({dims:h[y],dataType:e[0].dataType})}g.push({type:12,data:l},...ee(r,...h));let b=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...n)}
  ${ad(l.length)}
  ${nd(n)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Y("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:c,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},nm=(e,t)=>{rd(e.inputs);let r=e.inputs.length===1?t:id(e.inputs,t);e.compute(rn(e.inputs,r),{inputs:[0]})},sm=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return be({axis:t,numOutputs:i,splitSizes:r})}}),sd,mi,um,lm=L(()=>{"use strict";ae(),se(),Ee(),oe(),sd=(e,t)=>{let[r,i,a,s]=e,{numHeads:n,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(i.dims,[])&&!O.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!O.areEqual(a.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&n===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],c=r.dims[r.dims.length-2],h=a.dims[0],p=O.sizeFromDimension(r.dims,1)/c,g=u===0?a.dims[1]*2:p/n;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(c!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(c>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},mi=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:s}=t,n=e[0].dims[0],u=O.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],c=u/l,h=e[2].dims[1],p=a===0?h*2:c/i,g=new Array(n,l,c/p,p-h),b=O.computeStrides(g),y=[{type:1,data:s},{type:12,data:g},{type:12,data:b},...e[0].dims.length===3?new Array({type:12,data:[u,c,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,p,l*p,1]}):[],...ee(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=k=>{let x=D("input",e[0].dataType,e[0].dims.length),_=D("position_ids",e[1].dataType,e[1].dims.length),T=D("cos_cache",e[2].dataType,e[2].dims.length),S=D("sin_cache",e[3].dataType,e[3].dims.length),E=X("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:b.length},{name:"input_output_strides",type:"u32",length:b.length}]),`
        ${k.declareVariables(x,_,T,S,E)}

        ${k.mainStart(ir)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${_.broadcastedIndicesToOffset("bsnh.xy",X("",_.type.tensor,2))};
            let position_id =
                u32(${_.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${x.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:be({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(g)/ir)},programUniforms:y})}},um=(e,t)=>{sd(e.inputs,t),e.compute(mi(e.inputs,t))}}),od,ud,Sa,ld,dm,Ky=L(()=>{"use strict";Ee(),ae(),vn(),am(),om(),Ot(),lm(),oe(),od=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],c=r.dims[1],h=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],p=c,g=0,b=!i||i.dims.length===0,y=Math.floor(b?h/(t.numHeads+2*t.kvNumHeads):h/t.numHeads);b&&(h=y*t.numHeads);let $=s&&s.dims.length!==0,k=n&&n.dims.length!==0;if($&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if($&&k){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=s.dims[2]}else if($||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');p=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let _=0,T=!1,S=t.kvNumHeads?y*t.kvNumHeads:h;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(p!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=a.dims[2]}else{if(p!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=a.dims[1]*a.dims[3],T=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let z=E.dims.reduce((N,w)=>N*w,1);if(z!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${z}.`);for(let N=0;N<E.dims.length;N++)if(E.dims[N]!==1&&E.dims[N]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${N}] = ${E.dims[N]}.`)}return{batchSize:l,sequenceLength:c,pastSequenceLength:g,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:S,headSize:y,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:T,qkvFormat:x}},ud=be({perm:[0,2,1,3]}),Sa=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Ve(i,ud.perm),{inputs:[i],outputs:[-1]})[0]),i},ld=(e,t,r,i)=>{let a=7,s=["type","type"],n=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],c=h=>{let p=D("seq_lens",r.dataType,r.dims),g=D("total_seq_lens",i.dataType,i.dims),b=X("pos_ids",a,n),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(y).declareVariables(p,g,b)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${b.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${b.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${b.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:c}},dm=(e,t)=>{if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let r=od(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,c=e.inputs.length>5?e.inputs[6]:void 0,h=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=be({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,h*r.headSize,h*r.headSize]}),[g,b,y]=!a&&!s?e.compute(rn([i],p),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,s],$,k;if(t.doRotary){let S=e.compute(ld(r.batchSize,r.sequenceLength,l,c),{inputs:[l,c],outputs:[-1]})[0],E=e.inputs[7],z=e.inputs[8],N=be({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),w=[g,S,E,z],U=[-1];$=e.compute(mi(w,N),{inputs:w,outputs:U})[0],w.splice(0,1,b);let q=be({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});k=e.compute(mi(w,q),{inputs:w,outputs:U})[0]}let x=Ir(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?$:g,void 0,0),_=Sa(e,t.doRotary?k:b,r),T=Sa(e,y,r);Nr(e,x,_,T,void 0,void 0,n,u,void 0,r,l,c)}}),Ta,dd,cd,cm,Xy=L(()=>{"use strict";ae(),se(),Ot(),oe(),Ta=(e,t,r,i,a,s,n,u)=>{let l=Ie(s),c=l===1?"f32":`vec${l}f`,h=l===1?"vec2f":`mat2x${l}f`,p=a*n,g=64;p===1&&(g=256);let b=[a,n,s/l],y=[a,n,2],$=["rank","type","type"],k=[];k.push(...ee(b,y));let x=_=>{let T=D("x",t.dataType,3,l),S=D("scale",r.dataType,r.dims),E=D("bias",i.dataType,i.dims),z=X("output",1,3,2),N=[T,S,E,z];return`
  var<workgroup> workgroup_shared : array<${h}, ${g}>;
  const workgroup_size = ${g}u;
  ${_.declareVariables(...N)}
  ${_.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${c}(0);
    var squared_sum = ${c}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${c}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${At("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${At("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:p},programUniforms:k}),getShaderSource:x},{inputs:[t,r,i],outputs:[-1]})[0]},dd=(e,t,r)=>{let i=t[0].dims,a=i,s=2,n=i[0],u=i[1],l=O.sizeFromDimension(i,s),c=Ie(l),h=O.size(a)/c,p=Ta(e,t[0],t[1],t[2],n,l,u,r.epsilon),g=[n,u,l/c],b=[n,u],y=["type","none"],$=k=>{let x=D("x",t[0].dataType,g.length,c),_=D("scale_shift",1,b.length,2),T=X("output",t[0].dataType,g.length,c),S=[x,_,T];return`
  ${k.registerUniform("output_size","u32").declareVariables(...S)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${_.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${c}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...ee(g,b,g)]}),getShaderSource:$},{inputs:[t[0],p]})},cd=(e,t,r)=>{let i=t[0].dims,a=i,s=i[0],n=i[i.length-1],u=O.sizeFromDimension(i,1)/n,l=Ie(n),c=O.size(a)/l,h=[{type:12,data:u},{type:12,data:Math.floor(n/l)}],p=["type","type"],g=!1,b=[0,i.length-1];for(let x=0;x<i.length-2;x++)g=g||i[x+1]!==1,b.push(x+1);g=g&&i[i.length-1]!==1;let y=g?e.compute(Ve(e.inputs[0],b),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(x,_)=>i[b[_]])),$=Ta(e,y,t[1],t[2],s,u,n,r.epsilon),k=x=>{let _=De(t[0].dataType),T=l===1?"vec2f":`mat${l}x2f`,S=N=>{let w=N===0?"x":"y",U=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${_}(${U}(scale.${w}))`;case 2:return`vec2<${_}>(${U}(scale[0].${w}, scale[1].${w}))`;case 4:return`vec4<${_}>(${U}(scale[0].${w}, scale[1].${w}, scale[2].${w}, scale[3].${w}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=D("input",t[0].dataType,t[0].dims,l),z=X("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${z.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:h}),getShaderSource:k},{inputs:[t[0],$]})},cm=(e,t)=>{t.format==="NHWC"?cd(e,e.inputs,t):dd(e,e.inputs,t)}}),pd,hd,pm,Zy=L(()=>{"use strict";ae(),se(),oe(),pd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},hd=(e,t,r)=>{let i=t.simplified,a=e[0].dims,s=e[1],n=!i&&e[2],u=a,l=O.normalizeAxis(t.axis,a.length),c=O.sizeToDimension(a,l),h=O.sizeFromDimension(a,l),p=O.size(s.dims),g=n?O.size(n.dims):0;if(p!==h||n&&g!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${g}`);let b=[];for(let E=0;E<a.length;++E)E<l?b.push(a[E]):b.push(1);let y=Ie(h),$=["type","type"],k=[{type:12,data:c},{type:1,data:h},{type:12,data:Math.floor(h/y)},{type:1,data:t.epsilon}];n&&$.push("type");let x=r>1,_=r>2,T=E=>{let z=De(e[0].dataType),N=[D("x",e[0].dataType,e[0].dims,y),D("scale",s.dataType,s.dims,y)];n&&N.push(D("bias",n.dataType,n.dims,y)),N.push(X("output",e[0].dataType,u,y)),x&&N.push(X("mean_data_output",1,b)),_&&N.push(X("inv_std_output",1,b));let w=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(w).declareVariables(...N)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Fa("f32",y)};
    var mean_square_vector = ${Fa("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${tr(z,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${At("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${At("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${tr(z,y,"x[j + offset]")};
      let f32scale = ${tr(z,y,"scale[j]")};
      output[j + offset] = ${N[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${n?`+ ${tr(z,y,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:u,dataType:e[0].dataType}];return x&&S.push({dims:b,dataType:1}),_&&S.push({dims:b,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:$},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(c/64)},programUniforms:k}),getShaderSource:T}},pm=(e,t)=>{pd(e.inputs),e.compute(hd(e.inputs,t,e.outputCount))}}),md,hm,Yy=L(()=>{"use strict";se(),In(),En(),md=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},hm=e=>{md(e.inputs);let t=rr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Tn(e.inputs,{activation:""},t));else{let a=t[t.length-2],s=O.size(e.inputs[0].dims.slice(0,-2)),n=O.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&a===1&&n===1){let u=e.inputs[0].reshape([1,s,i]),l=e.inputs[1].reshape([1,i,r]),c=[1,s,r],h=[u,l];e.compute(hi(h,{activation:""},t,c),{inputs:h})}else e.compute(hi(e.inputs,{activation:""},t))}}}),fd,gd,yd,mm,fm,Qy=L(()=>{"use strict";ae(),se(),Ee(),oe(),fd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,n=e[1];if(!O.areEqual(n.dims,[t.n,a,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(O.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,c=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(O.size(l)!==c)throw new Error("zeroPoints input size error.")}},gd=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,u=r.slice(0,i-2),l=O.size(u),c=e[1].dims[2]/4,h=e[0].dataType,p=Ie(t.k),g=Ie(c),b=Ie(n),y=u.concat([a,n]),$=a>1&&n/b%2===0?2:1,k=O.size(y)/b/$,x=64,_=[],T=[l,a,s/p],S=O.convertShape(e[1].dims).slice();S.splice(-1,1,c/g),_.push(...ee(T)),_.push(...ee(S)),_.push(...ee(e[2].dims)),e.length===4&&_.push(...ee(O.convertShape(e[3].dims)));let E=[l,a,n/b];_.push(...ee(E));let z=N=>{let w=T.length,U=D("a",e[0].dataType,w,p),q=D("b",12,S.length,g),Z=D("scales",e[2].dataType,e[2].dims.length),G=[U,q,Z],K=e.length===4?D("zero_points",12,e[3].dims.length):void 0;K&&G.push(K);let R=E.length,M=X("output",e[0].dataType,R,b),F=De(e[0].dataType),J=(()=>{switch(p){case 1:return`array<${F}, 8>`;case 2:return`mat4x2<${F}>`;case 4:return`mat2x4<${F}>`;default:throw new Error(`${p}-component is not supported.`)}})(),ie=Math.floor(32/t.bits),re=Math.floor(ie/8),ne=()=>{let Q="";for(let V=0;V<re;V++){let ze=V*t.bits*4,Ne=ze+t.bits;Q+=`
          // reuse a data (pass ${V})
            var input_offset${V>0?V:""} = ${V===0?U.indicesToOffset(`${U.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${V>0?V:""}: ${J};
            for (var j${V>0?V:""}: u32 = 0; j${V>0?V:""} < ${8/p}; j${V>0?V:""}++) {
              a_data${V>0?V:""}[j${V>0?V:""}] = ${U.getByOffset(`input_offset${V>0?V:""}`)};
              input_offset${V>0?V:""}++;
            }
          `;for(let Se=0;Se<b*$;Se++)Q+=`
            b_value = ${g===1?`b${Se}_data`:`b${Se}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${V*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ze}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ne}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(Ae,_e)=>`${F}(b_value_lower[${_e}]), ${F}(b_value_upper[${_e}])`).join(", ")});
            b_dequantized_values = ${p===1?`${J}(${Array.from({length:8},(Ae,_e)=>`(b_quantized_values[${_e}] - ${K?`zero_point${Se}`:"zero_point"}) * scale${Se}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${K?`zero_point${Se}`:"zero_point"}`).join(",")})) * scale${Se};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(Se/b)}]${b>1?`[${Se%b}]`:""} += ${Array.from({length:8/p},(Ae,_e)=>`${p===1?`a_data${V>0?V:""}[${_e}] * b_dequantized_values[${_e}]`:`dot(a_data${V>0?V:""}[${_e}], b_dequantized_values[${_e}])`}`).join(" + ")};
          `}return Q},P=()=>{let Q=`
            var col_index = col * ${b};
            ${K?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${F}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let V=0;V<b*$;V++)Q+=`
            let scale${V} = ${Z.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${V} = ${F}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Q},te=()=>{let Q=`col_index = col * ${b};`;for(let V=0;V<b*$;V++)Q+=`
            let b${V}_data = ${q.getByIndices(`${q.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Q+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,Q};return`
        var<workgroup> workgroup_shared: array<${M.type.value}, ${$*x}>;
        ${N.declareVariables(...G,M)}
        ${N.mainStart([x,1,1])}
          let output_indices = ${M.offsetToIndices(`(global_idx / ${x}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${P()}
            for (var word: u32 = 0; word < ${c}; word += ${g}) {
              ${te()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ne()}
                word_offset += ${ie/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${M.type.value} = ${M.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${M.setByIndices(`${M.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${g};${b};${$};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:h}],dispatchGroup:{x:k},programUniforms:_}),getShaderSource:z}},yd=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,u=r.slice(0,i-2),l=O.size(u),c=e[1].dims[2]/4,h=e[0].dataType,p=Ie(t.k),g=Ie(c),b=u.concat([a,n]),y=128,$=n%8===0?8:n%4===0?4:1,k=y/$,x=Math.floor(32/t.bits),_=k*g*x,T=_/p,S=_/t.blockSize,E=O.size(b)/$,z=[],N=[l,a,s/p],w=O.convertShape(e[1].dims).slice();w.splice(-1,1,c/g),z.push(...ee(N)),z.push(...ee(w)),z.push(...ee(e[2].dims)),e.length===4&&z.push(...ee(O.convertShape(e[3].dims)));let U=[l,a,n];z.push(...ee(U));let q=Z=>{let G=N.length,K=D("a",e[0].dataType,G,p),R=D("b",12,w.length,g),M=D("scales",e[2].dataType,e[2].dims.length),F=[K,R,M],J=e.length===4?D("zero_points",12,e[3].dims.length):void 0;J&&F.push(J);let ie=U.length,re=X("output",e[0].dataType,ie),ne=De(e[0].dataType),P=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ne}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ne}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${K.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${re.type.value}, ${k}>, ${$}>;
        ${Z.declareVariables(...F,re)}
        ${Z.mainStart([k,$,1])}
          let output_indices = ${re.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${K.getByIndices(`${K.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${K.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${J?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ne}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ne}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${M.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let te=Math.floor(x/8),Q="";for(let V=0;V<te;V++){let ze=V*t.bits*4,Ne=ze+t.bits;Q+=`
              ${P()}
              {${t.bits===2?`
                let half_word = b_value >> ${V*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ze}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ne}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ne}>(${Array.from({length:4},(Se,Ae)=>`${ne}(b_value_lower[${Ae}]), ${ne}(b_value_upper[${Ae}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ne}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Se,Ae)=>`${`dot(a_data${Ae}, b_dequantized_values[${Ae}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return Q})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${re.type.value} = ${re.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${re.setByIndices(`${re.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${g};${k};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:h}],dispatchGroup:{x:E},programUniforms:z}),getShaderSource:q}},mm=(e,t)=>{fd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(yd(e.inputs,t)):e.compute(gd(e.inputs,t))},fm=e=>be(e)}),bd,_d,wd,$d,vd,xd,kd,Sd,gm,Jy=L(()=>{"use strict";ae(),se(),oe(),bd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},_d=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Y("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${Y("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},wd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Y("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Y("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Y("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},$d=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Y("uniforms.x_shape",a,t)})) {
                  k = i32(${Y("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${Y("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},vd=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${Y("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${Y("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${Y("uniforms.x_shape",a,t)})) {
                  k -= i32(${Y("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${Y("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},xd=(e,t,r)=>{switch(r.mode){case 0:return _d(e,t,r.pads.length);case 1:return wd(e,t,r.pads.length);case 2:return $d(e,t,r.pads.length);case 3:return vd(e,t,r.pads.length);default:throw new Error("Invalid mode")}},kd=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=O.size(r),s=[{type:12,data:a},{type:6,data:t.pads}],n=e.length>=3&&e[2].data;t.mode===0&&s.push({type:n?e[2].dataType:1,data:t.value}),s.push(...ee(e[0].dims,r));let u=["rank"],l=c=>{let h=X("output",e[0].dataType,r.length),p=D("x",e[0].dataType,i.length),g=p.type.value,b=xd(h,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:n?g:"f32"}),`
            ${c.registerUniforms(y).declareVariables(p,h)}
            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${b}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${n}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:s}),getShaderSource:l}},Sd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,s=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)s[Number(u[l])]=Number(r[l]),s[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>s[Number(l)]=Number(u));let n=[];return s.forEach(u=>n.push(u)),{mode:t.mode,value:i,pads:n}}else return t},gm=(e,t)=>{bd(e.inputs);let r=Sd(e.inputs,t);e.compute(kd(e.inputs,r),{inputs:[0]})}}),$r,Ia,Ea,za,Ca,Td,Id,Na,Aa,ym,bm,Oa,_m,wm,Ra,$m,vm,xm,km,eb=L(()=>{"use strict";Ke(),ae(),se(),oe(),$r=e=>{if(xe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ia=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let s=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),u=t.strides.slice(),l=s?t.dilations.slice():[],c=t.pads.slice();ci.adjustPoolAttributes(r,a,n,u,l,c);let h=ci.computePoolOutputShape(r,a,u,l,n,c,t.autoPad,t.ceilMode),p=Object.assign({},t);s?Object.assign(p,{kernelShape:n,strides:u,pads:c,dilations:l,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:n,strides:u,pads:c,cacheKey:t.cacheKey});let g=h.slice();return g.push(g.splice(1,1)[0]),[p,i?g:h]},Ea=(e,t)=>{let r=t.format==="NHWC",i=O.size(e),a=O.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:a}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],c=t.pads[t.pads.length/2-1],h=t.pads[t.pads.length-1],p=!!(c+h);s.push({type:12,data:u},{type:12,data:l},{type:12,data:c},{type:12,data:h}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let b=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];g=!!($+k),s.push({type:12,data:b},{type:12,data:y},{type:12,data:$},{type:12,data:k}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,n,!0,p,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=O.computeStrides(t.kernelShape);s.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),n.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((c,h)=>c+h);return[s,n,!!l,!1,!1]}},za=(e,t,r,i,a,s,n,u,l,c,h,p)=>{let g=a.format==="NHWC",b=t.type.value,y=X("output",t.type.tensor,i);if(a.kernelShape.length<=2){let $="",k="",x="",_=r-(g?2:1);if(h?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${_}] < 0 || xIndices[${_}]
                      >= uniforms.x_shape[${_}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,a.kernelShape.length===2){let T=r-(g?3:2);p?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${b}(${u});
              var pad = 0;
              ${k}
              ${$}
              ${x}
              ${n}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=a.kernelShape.length,k=a.pads.length,x="";return c?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${b}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${Y("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${Y("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${r-$}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${Y("uniforms.strides",`j - ${r-$}u`,$)}
                    + offsets[j - ${r-$}u] - ${Y("uniforms.pads","j - 2u",k)};
                  ${x}
              }
              ${n}

              output[global_idx] = value;
            }`}},Ca=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Td=e=>`${Ca(e)};${e.countIncludePad}`,Id=e=>`${Ca(e)};${e.storageOrder};${e.dilations}`,Na=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Aa=(e,t,r,i)=>{let[a,s]=Ia(t,i,r),n=D("x",t.dataType,t.dims.length),u=n.type.value,l="value += x_val;",c="";a.countIncludePad?c+=`value /= ${u}(uniforms.kernelSize);`:c+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[h,p,g,b,y]=Ea(s,a);h.push(...ee(t.dims,s));let $=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${b};${y}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(s)/64)},programUniforms:h}),getShaderSource:k=>za(k,n,t.dims.length,s.length,a,l,c,0,p,g,b,y)}},ym=e=>{let t=e.count_include_pad!==0,r=Na(e);if(r.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Td(i)}},bm=(e,t)=>{$r(e.inputs),e.compute(Aa("AveragePool",e.inputs[0],!1,t))},Oa={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},_m=e=>{let t=e.format;return{format:t,...Oa,cacheKey:t}},wm=(e,t)=>{$r(e.inputs),e.compute(Aa("GlobalAveragePool",e.inputs[0],!0,t))},Ra=(e,t,r,i)=>{let[a,s]=Ia(t,i,r),n=`
      value = max(x_val, value);
    `,u="",l=D("x",t.dataType,t.dims.length),c=["rank"],[h,p,g,b,y]=Ea(s,a);return h.push(...ee(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${b};${y}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(s)/64)},programUniforms:h}),getShaderSource:$=>za($,l,t.dims.length,s.length,a,n,u,t.dataType===10?-65504:-1e5,p,g,b,y)}},$m=(e,t)=>{$r(e.inputs),e.compute(Ra("MaxPool",e.inputs[0],!1,t))},vm=e=>{let t=e.storage_order,r=e.dilations,i=Na(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Id(a)}},xm=e=>{let t=e.format;return{format:t,...Oa,cacheKey:t}},km=(e,t)=>{$r(e.inputs),e.compute(Ra("GlobalMaxPool",e.inputs[0],!0,t))}}),Ed,zd,Sm,Tm,tb=L(()=>{"use strict";ae(),se(),Ee(),oe(),Ed=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,s)=>s===t.axis||a===e[0].dims[s]).reduce((a,s)=>a&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},zd=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,s=e[0].dims,n=e[1].dataType,u=O.size(s),l=i===3||i===2,c=l?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,h=e[1].dims,p=e.length>2?e[2]:void 0,g=p?l?[Math.ceil(O.size(p.dims)/4)]:p.dims:void 0,b=h.length===0||h.length===1&&h[0]===1,y=b===!1&&h.length===1,$=Ie(u),k=b&&(!l||$===4),x=k?$:1,_=k&&!l?$:1,T=D("input",l?12:i,c.length,_),S=D("scale",n,h.length),E=p?D("zero_point",l?12:i,g.length):void 0,z=X("output",n,s.length,x),N=[T,S];E&&N.push(E);let w=[c,h];p&&w.push(g);let U=[{type:12,data:u/x},{type:12,data:r},{type:12,data:t.blockSize},...ee(...w,s)],q=Z=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Z.registerUniforms(G).declareVariables(...N,z)}
      ${Z.mainStart()}
          ${Z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${z.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${b?`let scale_value= ${S.getByOffset("0")}`:y?`
            let scale_index = ${z.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?b?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:y?l?`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${z.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${z.setByOffset("global_idx",`${z.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:q,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/x/64),y:1,z:1},programUniforms:U})}},Sm=(e,t)=>{Ed(e.inputs,t),e.compute(zd(e.inputs,t))},Tm=e=>be({axis:e.axis,blockSize:e.blockSize})}),Cd,Nd,Im,rb=L(()=>{"use strict";Ke(),ae(),oe(),Cd=(e,t,r)=>{let i=e===t,a=e<t&&r<0,s=e>t&&r>0;if(i||a||s)throw new Error("Range these inputs' contents are invalid.")},Nd=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),s=[a],n=a,u=[{type:12,data:n},{type:i,data:e},{type:i,data:r},...ee(s)],l=c=>{let h=X("output",i,s.length),p=h.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${c.registerUniforms(g).declareVariables(h)}
        ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:u})}},Im=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),xe.webgpu.validateInputContent&&Cd(t,r,i),e.compute(Nd(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Ad,Od,Em,zm,ib=L(()=>{"use strict";ae(),se(),Ee(),oe(),Ad=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${s}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Od=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,s=1,n=Math.ceil(O.sizeToDimension(i,i.length-1)/s),u=i[i.length-1],l=O.sizeFromDimension(r,u),c=[{type:12,data:n},{type:12,data:u},{type:12,data:l},...ee(e[1].dims,e[2].dims,a)],h=p=>{let g=D("indices",e[1].dataType,e[1].dims.length),b=D("updates",e[2].dataType,e[2].dims.length,s),y=t.reduction!=="none"&&t.reduction!==""?ep("output",e[0].dataType,a.length):X("output",e[0].dataType,a.length,s);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,b,y)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Ad(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:h}},Em=e=>be({reduction:e.reduction}),zm=(e,t)=>{e.compute(Od(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Rd,Dd,Bd,Da,Md,Ud,Pd,Ld,qd,jd,Wd,Vd,Ba,Gd,Hd,Fd,Kd,Xd,Cm,Nm,ab=L(()=>{"use strict";ae(),se(),Ee(),oe(),Rd=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Dd=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,s)=>i[a]=e[s]),i},Bd=(e,t,r,i,a,s)=>{let[n,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],c=e[0].dims.length;if(n>0&&e.length>n&&e[n].dims.length>0)e[n].getFloat32Array().forEach(h=>s.push(h));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(h=>i.push(h)),i.length!==0&&i.length!==c&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Rd(i,t),t.axes.length>0&&Dd(i,t.axes,c).forEach((h,p)=>i[p]=h)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(h=>a.push(Number(h))),a.length!==0&&a.length!==c&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>c)throw new Error("Resize requires only of scales or sizes to be specified")},Da=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,Md=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Da("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Da("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Ud=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Pd=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,n)=>{i[s]=a[n],i[n+r]=a[t.length+n]}),i):a},Ld=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>a.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,n)=>a[s]=r[n])}else r.forEach(s=>a.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((s,n)=>Math.round(s*t[n]))}return a},qd=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>a[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),a.forEach((s,n)=>a[n]=Math.round(s*t[n]))),a},jd=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Y("uniforms.scales","i",i)};
        var roi_low = ${Y("uniforms.roi","i",a)};
        var roi_hi = ${Y("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Y("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Wd=(e,t,r,i,a,s,n)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Y("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Y("uniforms.roi","i",s)};
          var roi_hi = ${Y("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${Y("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${n} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Vd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Y("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Ba=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Gd=(e,t,r,i,a)=>{let[s,n,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(row, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${Ba(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${c} = originalIndices[${n}];
      var col:${c} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[n]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[n]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${c} = getInputValue(batch, channel, row1, col1);
      var x12: ${c} = getInputValue(batch, channel, row1, col2);
      var x21: ${c} = getInputValue(batch, channel, row2, col1);
      var x22: ${c} = getInputValue(batch, channel, row2, col2);
      var dx1: ${c} = abs(row - ${c}(row1));
      var dx2: ${c} = abs(${c}(row2) - row);
      var dy1: ${c} = abs(col - ${c}(col1));
      var dy2: ${c} = abs(${c}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Hd=(e,t,r,i,a,s,n,u,l,c)=>{let h=r.length===2,p=!0,[g,b]=h?[0,1]:p?[2,3]:[1,2],y=e.type.value,$=k=>{let x=k===g?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",k)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[k]},
        ${i[k]}, ${r[k]}, ${s[k]}, ${s[k]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[k]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${y} = originalIdx + ${y}(i);
          if (${x} < 0 || ${x} >= ${r[k]}) {
            ${c?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${x} = max(0, min(${x}, ${r[k]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",k,`u32(${x})`)};
          data[i + 1] = ${k===g?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(g)};
    ${$(b)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${n} * onePlusAbsS - 5 * ${n}) * onePlusAbsS + 8 * ${n}) * onePlusAbsS - 4 * ${n};
    coeffs[1] = ((${n} + 2) * absS - (${n} + 3)) * absS * absS + 1;
    coeffs[2] = ((${n} + 2) * oneMinusAbsS - (${n} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${n} * twoMinusAbsS - 5 * ${n}) * twoMinusAbsS + 8 * ${n}) * twoMinusAbsS - 4 * ${n};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Fd=(e,t,r,i,a)=>{let[s,n,u,l,c]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],h=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${h} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(depth, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Ba(e,c,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${h} = originalIndices[${n}];
      var height:${h} = originalIndices[${u}];
      var width:${h} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[n]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[n]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${c}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${h} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${h} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${h} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${h} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${h} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${h} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${h} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${h} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${h} = abs(depth - ${h}(depth1));
      var dx2: ${h} = abs(${h}(depth2) - depth);
      var dy1: ${h} = abs(height - ${h}(height1));
      var dy2: ${h} = abs(${h}(height2) - height);
      var dz1: ${h} = abs(width - ${h}(width1));
      var dz2: ${h} = abs(${h}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Kd=(e,t,r,i,a,s)=>{let n=e.dims,u=Pd(s,t.axes,n.length),l=Ld(n,i,a,t.axes),c=i.slice();i.length===0&&(c=n.map((_,T)=>_===0?1:l[T]/_),t.keepAspectRatioPolicy!=="stretch"&&(l=qd(n,c,t)));let h=X("output",e.dataType,l.length),p=D("input",e.dataType,n.length),g=O.size(l),b=n.length===l.length&&n.every((_,T)=>_===l[T]),y=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,k=p.type.value,x=_=>`
      ${b?"":`
      ${Md(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Vd(p,n)};
              ${Ud(t.nearestMode,r,k)};
              ${Wd(p,h,n,l,c.length,u.length,y)};
              `;case"linear":return`
              ${jd(h,n,l,c.length,u.length)};
              ${(()=>{if(n.length===2||n.length===4)return`${Gd(p,h,n,y,$)}`;if(n.length===3||n.length===5)return`${Fd(p,h,n,y,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(n.length===2||n.length===4)return`${Hd(p,h,n,l,c,u,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${_.registerUniform("output_size","u32").registerUniform("scales","f32",c.length).registerUniform("roi","f32",u.length).declareVariables(p,h)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${b?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${n.length===2||n.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${c.length>0?t.mode==="cubic"?c:c.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${b}|${t.mode==="nearest"?n.length:n}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:c},{type:1,data:u},...ee(n,l)]})}},Xd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},Cm=(e,t)=>{let r=[],i=[],a=[],s=Xd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Bd(e.inputs,t,s,r,i,a),e.compute(Kd(e.inputs[0],t,s,r,i,a),{inputs:[0]})},Nm=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,s=e.excludeOutside!==0,n=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,c=e.nearestMode===""?"simple":e.nearestMode;return be({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:s,extrapolationValue:n,keepAspectRatioPolicy:u,mode:l,nearestMode:c})}}),Zd,Yd,Am,nb=L(()=>{"use strict";ae(),se(),oe(),Zd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let n=e[3];if(n.dims.length!==1)throw new Error("Beta must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let n=e[4];if(n.dims.length!==1)throw new Error("Bias must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Yd=(e,t,r,i)=>{let a=t.simplified,s=e[0].dims,n=O.size(s),u=s,l=n,c=s.slice(-1)[0],h=i?s.slice(0,-1).concat(1):[],p=!a&&e.length>3,g=e.length>4,b=i&&r>1,y=i&&r>2,$=r>3,k=64,x=Ie(c),_=[{type:12,data:l},{type:12,data:x},{type:12,data:c},{type:1,data:t.epsilon}],T=E=>{let z=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],N=[D("x",e[0].dataType,e[0].dims,x),D("skip",e[1].dataType,e[1].dims,x),D("gamma",e[2].dataType,e[2].dims,x)];p&&N.push(D("beta",e[3].dataType,e[3].dims,x)),g&&N.push(D("bias",e[4].dataType,e[4].dims,x)),N.push(X("output",e[0].dataType,u,x)),b&&N.push(X("mean_output",1,h)),y&&N.push(X("inv_std_output",1,h)),$&&N.push(X("input_skip_bias_sum",e[0].dataType,u,x));let w=De(e[0].dataType),U=De(1,x);return`

      ${E.registerUniforms(z).declareVariables(...N)}
      var<workgroup> sum_shared : array<${U}, ${k}>;
      var<workgroup> sum_squared_shared : array<${U}, ${k}>;

      ${E.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":w+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${tr(w,x,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${At("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${At("square_sum",x)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${b?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${w}(mean)`}) *
            ${w}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:u,dataType:e[0].dataType}];return r>1&&S.push({dims:h,dataType:1}),r>2&&S.push({dims:h,dataType:1}),r>3&&S.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${b};${y};${$}`,inputDependencies:e.map((E,z)=>"type")},getShaderSource:T,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/c)},programUniforms:_})}},Am=(e,t)=>{Zd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Yd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Qd,vr,Jd,Ma,ec,tc,Om,Rm,sb=L(()=>{"use strict";ae(),se(),Ee(),oe(),Qd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},vr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Jd=(e,t)=>{if(e.length>1){let r=vr(e,1),i=vr(e,2),a=vr(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),be({starts:r,ends:i,axes:a})}else return t},Ma=(e,t,r,i,a)=>{let s=e;return e<0&&(s+=r[i[t]]),a[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},ec=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${Y("uniforms.input_shape","i",r.length)};
            let steps_i = ${Y("uniforms.steps","i",r.length)};
            let signs_i = ${Y("uniforms.signs","i",r.length)};
            let starts_i = ${Y("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,tc=(e,t)=>{let r=e[0].dims,i=O.size(r),a=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=vr(e,4);s.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(a.length).fill(1));let n=t.starts.map((x,_)=>Ma(x,_,r,a,s)),u=t.ends.map((x,_)=>Ma(x,_,r,a,s));if(a.length!==n.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let x=0;x<r.length;++x)a.includes(x)||(n.splice(x,0,0),u.splice(x,0,r[x]),s.splice(x,0,1));let l=s.map(x=>Math.sign(x));s.forEach((x,_,T)=>{if(x<0){let S=(u[_]-n[_])/x,E=n[_],z=E+S*s[_];n[_]=z,u[_]=E,T[_]=-x}});let c=r.slice(0);a.forEach((x,_)=>{c[x]=Math.ceil((u[x]-n[x])/s[x])});let h={dims:c,dataType:e[0].dataType},p=X("output",e[0].dataType,c.length),g=D("input",e[0].dataType,e[0].dims.length),b=O.size(c),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:n.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],$=[{type:12,data:b},{type:12,data:n},{type:6,data:l},{type:12,data:s},...ee(e[0].dims,c)],k=x=>`
      ${x.registerUniforms(y).declareVariables(g,p)}
        ${ec(g,p,r)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${n.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:$})}},Om=(e,t)=>{Qd(e.inputs,t);let r=Jd(e.inputs,t);e.compute(tc(e.inputs,r),{inputs:[0]})},Rm=e=>{let t=e.starts,r=e.ends,i=e.axes;return be({starts:t,ends:r,axes:i})}}),rc,ic,Dm,Bm,ob=L(()=>{"use strict";ae(),se(),Ee(),Ot(),oe(),rc=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},ic=(e,t)=>{let r=e.inputs[0],i=r.dims,a=O.size(i),s=i.length,n=O.normalizeAxis(t.axis,s),u=n<i.length-1,l,c=[];u?(c=Array.from({length:s},(N,w)=>w),c[n]=s-1,c[s-1]=n,l=e.compute(Ve(r,c),{inputs:[r],outputs:[-1]})[0]):l=r;let h=l.dims,p=h[s-1],g=a/p,b=Ie(p),y=p/b,$=64;g===1&&($=256);let k=(N,w)=>w===4?`max(max(${N}.x, ${N}.y), max(${N}.z, ${N}.w))`:w===2?`max(${N}.x, ${N}.y)`:w===3?`max(max(${N}.x, ${N}.y), ${N}.z)`:N,x=D("x",l.dataType,l.dims,b),_=X("result",l.dataType,l.dims,b),T=x.type.value,S=De(l.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,E=N=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${N.registerUniform("packedCols","i32").declareVariables(x,_)}
      ${N.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${k("threadShared[0]",b)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${At("threadShared[0]",b)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,z=e.compute({name:"Softmax",shaderCache:{hint:`${b};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:y}]}),getShaderSource:E},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Ve(z,c),{inputs:[z]})},Dm=(e,t)=>{rc(e.inputs),ic(e,t)},Bm=e=>be({axis:e.axis})}),Ua,ac,nc,sc,Mm,ub=L(()=>{"use strict";ae(),se(),oe(),Ua=e=>Array.from(e.getBigInt64Array(),Number),ac=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Ua(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},nc=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},sc=(e,t)=>{let r=e[0].dims,i=t??Ua(e[1]),a=nc(r,i),s=O.size(a),n=e[0].dataType,u=D("input",n,r.length),l=X("output",n,a.length),c=h=>`
      const inputShape = ${u.indices(...r)};
      ${h.registerUniform("output_size","u32").declareVariables(u,l)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ee(e[0].dims,a)]}),getShaderSource:c}},Mm=e=>{ac(e.inputs),e.compute(sc(e.inputs),{inputs:[0]})}}),oc,uc,Um,lb=L(()=>{"use strict";ae(),se(),oe(),oc=(e,t,r,i,a)=>{let s=X("output_data",a,r.length,4),n=D("a_data",t[1].dataType,t[1].dims.length,4),u=D("b_data",t[2].dataType,t[2].dims.length,4),l=D("c_data",t[0].dataType,t[0].dims.length,4),c,h=(p,g,b)=>`select(${g}, ${p}, ${b})`;if(!i)c=s.setByOffset("global_idx",h(n.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let p=(g,b,y="")=>{let $=`a_data[index_a${b}][component_a${b}]`,k=`b_data[index_b${b}][component_b${b}]`,x=`bool(c_data[index_c${b}] & (0xffu << (component_c${b} * 8)))`;return`
            let output_indices${b} = ${s.offsetToIndices(`global_idx * 4u + ${b}u`)};
            let offset_a${b} = ${n.broadcastedIndicesToOffset(`output_indices${b}`,s)};
            let offset_b${b} = ${u.broadcastedIndicesToOffset(`output_indices${b}`,s)};
            let offset_c${b} = ${l.broadcastedIndicesToOffset(`output_indices${b}`,s)};
            let index_a${b} = offset_a${b} / 4u;
            let index_b${b} = offset_b${b} / 4u;
            let index_c${b} = offset_c${b} / 4u;
            let component_a${b} = offset_a${b} % 4u;
            let component_b${b} = offset_b${b} % 4u;
            let component_c${b} = offset_c${b} % 4u;
            ${g}[${b}] = ${y}(${h($,k,x)});
          `};a===9?c=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:c=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,n,u,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${c}
      }`},uc=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,s=!(O.areEqual(t,r)&&O.areEqual(r,i)),n=t,u=O.size(t);if(s){let c=rr.calcShape(rr.calcShape(t,r,!1),i,!1);if(!c)throw new Error("Can't perform where op on the given tensors");n=c,u=O.size(n)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:c=>oc(c,e,n,s,a),getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...ee(i,t,r,n)]})}},Um=e=>{e.compute(uc(e.inputs))}}),Pm,db=L(()=>{"use strict";xy(),vn(),ky(),Sy(),Ty(),Iy(),Ey(),Oy(),Dy(),By(),My(),Uy(),Py(),Ly(),qy(),jy(),Wy(),Vy(),Gy(),Hy(),Fy(),Ky(),Xy(),Zy(),Yy(),Qy(),am(),Jy(),eb(),tb(),rb(),ib(),$n(),ab(),lm(),nb(),sb(),ob(),om(),ub(),Ot(),xn(),lb(),Pm=new Map([["Abs",[zp]],["Acos",[Cp]],["Acosh",[Np]],["Add",[ph]],["ArgMax",[Sp,Xa]],["ArgMin",[kp,Xa]],["Asin",[Ap]],["Asinh",[Op]],["Atan",[Rp]],["Atanh",[Dp]],["Attention",[Tp]],["AveragePool",[bm,ym]],["BatchNormalization",[Ip]],["BiasAdd",[Ep]],["BiasSplitGelu",[ch]],["Cast",[Mp,Bp]],["Ceil",[Pp]],["Clip",[Up]],["Concat",[vh,xh]],["Conv",[tn,en]],["ConvTranspose",[Oh,Ah]],["Cos",[Lp]],["Cosh",[qp]],["CumSum",[Rh,Dh]],["DepthToSpace",[Bh,Mh]],["DequantizeLinear",[Sm,Tm]],["DFT",[Uh,Ph]],["Div",[hh]],["Einsum",[Lh,qh]],["Elu",[jp,Tr]],["Equal",[mh]],["Erf",[Wp]],["Exp",[Vp]],["Expand",[jh]],["FastGelu",[Wh]],["Floor",[Gp]],["FusedConv",[tn,en]],["Gather",[Gh,Vh]],["GatherElements",[Yh,Zh]],["GatherBlockQuantized",[Kh,Xh]],["GatherND",[Hh,Fh]],["Gelu",[Hp]],["Gemm",[Jh,Qh]],["GlobalAveragePool",[wm,_m]],["GlobalMaxPool",[km,xm]],["Greater",[bh]],["GreaterOrEqual",[wh]],["GridSample",[em,tm]],["GroupQueryAttention",[dm]],["HardSigmoid",[eh,Jp]],["HardSwish",[th]],["InstanceNormalization",[cm]],["LayerNormalization",[pm]],["LeakyRelu",[Fp,Tr]],["Less",[_h]],["LessOrEqual",[$h]],["Log",[lh]],["MatMul",[hm]],["MatMulNBits",[mm,fm]],["MaxPool",[$m,vm]],["Mul",[fh]],["MultiHeadAttention",[im,rm]],["Neg",[Xp]],["Not",[Kp]],["Pad",[gm]],["Pow",[gh]],["QuickGelu",[dh,Tr]],["Range",[Im]],["Reciprocal",[Zp]],["ReduceMin",[_p]],["ReduceMean",[mp]],["ReduceMax",[bp]],["ReduceSum",[$p]],["ReduceProd",[wp]],["ReduceL1",[fp]],["ReduceL2",[gp]],["ReduceLogSum",[xp]],["ReduceLogSumExp",[yp]],["ReduceSumSquare",[vp]],["Relu",[Yp]],["Resize",[Cm,Nm]],["RotaryEmbedding",[um]],["ScatterND",[zm,Em]],["Sigmoid",[Qp]],["Sin",[rh]],["Sinh",[ih]],["Slice",[Om,Rm]],["SkipLayerNormalization",[Am]],["Split",[nm,sm]],["Sqrt",[ah]],["Softmax",[Dm,Bm]],["Sub",[yh]],["Tan",[nh]],["Tanh",[sh]],["ThresholdedRelu",[uh,Tr]],["Tile",[Mm]],["Transpose",[rp,ip]],["Where",[Um]]])}),Lm,cb=L(()=>{"use strict";Ke(),gt(),oe(),Lm=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){lt(e.programInfo.name);let s=this.backend.device,n=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let c of t)u.push({binding:u.length,resource:{buffer:c.buffer}});for(let c of r)u.push({binding:u.length,resource:{buffer:c.buffer}});a&&u.push({binding:u.length,resource:a});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let c={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(c)}n.setPipeline(e.computePipeline),n.setBindGroup(0,l),n.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),at(e.programInfo.name)}dispose(){}build(e,t){lt(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(c=>{r.features.has(c.feature)&&i.push(`enable ${c.extension};`)});let a=tp(t,this.backend.device.limits),s=e.getShaderSource(a),n=`${i.join(`
`)}
${a.additionalImplementations}
${s}`,u=r.createShaderModule({code:n,label:e.name});fe("verbose",()=>`[WebGPU] ${e.name} shader code: ${n}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return at(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let s=t*r*i,n=Math.ceil(Math.sqrt(s));if(n>a){if(n=Math.ceil(Math.cbrt(s)),n>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[n,n,n]}else return[n,n,1]}}}),qm={};sr(qm,{WebGpuBackend:()=>jm});var lc,dc,cc,jm,pb=L(()=>{"use strict";Ke(),ae(),gt(),Zc(),$y(),db(),cb(),lc=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let s=e[i].dims.length;r.push(`${a};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${a};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},dc=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${lc(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},cc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},jm=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=u=>t.features.has(u)&&r.push(u)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let s=t,n=t.info??(typeof s.requestAdapterInfo=="function"?await s.requestAdapterInfo():void 0);this.adapterInfo=new cc(n),this.gpuDataManager=Jc(this),this.programManager=new Lm(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,yn(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;lt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],s=a.kernelId,n=this.kernels.get(s),u=n.kernelType,l=n.kernelName,c=a.programName,h=a.inputTensorViews,p=a.outputTensorViews,g=t[i*2],b=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let y=Number(g-this.queryTimeBase),$=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(y)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(k=>({dims:k.dims,dataType:ft(k.dataType)})),outputsMetadata:p.map(k=>({dims:k.dims,dataType:ft(k.dataType)})),kernelId:s,kernelType:u,kernelName:l,programName:c,startTime:y,endTime:$});else{let k="";h.forEach((_,T)=>{k+=`input[${T}]: [${_.dims}] | ${ft(_.dataType)}, `});let x="";p.forEach((_,T)=>{x+=`output[${T}]: [${_.dims}] | ${ft(_.dataType)}, `}),console.log(`[profiling] kernel "${s}|${u}|${l}|${c}" ${k}${x}start time: ${y} ns, execution time: ${$-y} ns`)}ui("GPU",`${c}::${g}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),at()}run(e,t,r,i,a,s){lt(e.name);let n=[];for(let _=0;_<t.length;++_){let T=t[_].data;if(T===0)continue;let S=this.gpuDataManager.get(T);if(!S)throw new Error(`no GPU data for input: ${T}`);n.push(S)}let{outputs:u,dispatchGroup:l,programUniforms:c}=e.getRunData(t),h=r.length===0?u.map((_,T)=>T):r;if(h.length!==u.length)throw new Error(`Output size ${h.length} must be equal to ${u.length}.`);let p=[],g=[];for(let _=0;_<u.length;++_){if(!Number.isInteger(h[_])||h[_]<-3||h[_]>=s)throw new Error(`Invalid output index: ${h[_]}`);if(h[_]===-3)continue;let T=h[_]===-1,S=h[_]===-2,E=T||S?a(u[_].dataType,u[_].dims):i(h[_],u[_].dataType,u[_].dims);if(p.push(E),E.data===0)continue;let z=this.gpuDataManager.get(E.data);if(!z)throw new Error(`no GPU data for output: ${E.data}`);if(T&&this.temporaryData.push(z),S){let N=this.kernelPersistentData.get(this.currentKernelId);N||(N=[],this.kernelPersistentData.set(this.currentKernelId,N)),N.push(z)}g.push(z)}if(n.length!==t.length||g.length!==p.length){if(g.length===0)return at(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let b;if(c){let _=0,T=[];c.forEach(N=>{let w=typeof N.data=="number"?[N.data]:N.data;if(w.length===0)return;let U=N.type===10?2:4,q,Z;N.type===10?(Z=w.length>4?16:w.length>2?8:w.length*U,q=w.length>4?16:U*w.length):(Z=w.length<=2?w.length*U:16,q=16),_=Math.ceil(_/Z)*Z,T.push(_);let G=N.type===10?8:4;_+=w.length>4?Math.ceil(w.length/G)*q:w.length*U});let S=16;_=Math.ceil(_/S)*S;let E=new ArrayBuffer(_);c.forEach((N,w)=>{let U=T[w],q=typeof N.data=="number"?[N.data]:N.data;if(N.type===6)new Int32Array(E,U,q.length).set(q);else if(N.type===12)new Uint32Array(E,U,q.length).set(q);else if(N.type===10)new Uint16Array(E,U,q.length).set(q);else if(N.type===1)new Float32Array(E,U,q.length).set(q);else throw new Error(`Unsupported uniform type: ${ft(N.type)}`)});let z=this.gpuDataManager.create(_,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(z.buffer,0,E,0,_),this.gpuDataManager.release(z.id),b={offset:0,size:_,buffer:z.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),$=y[1]===1&&y[2]===1,k=dc(e,t,$),x=this.programManager.getArtifact(k);if(x||(x=this.programManager.build(e,y),this.programManager.setArtifact(k,x),fe("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),c&&x.uniformVariablesInfo){if(c.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${c.length} in program "${x.programInfo.name}".`);for(let _=0;_<c.length;_++){let T=c[_],S=T.type,E=typeof T.data=="number"?1:T.data.length,[z,N]=x.uniformVariablesInfo[_];if(S!==z||E!==N)throw new Error(`Uniform variable ${_} mismatch: expect type ${z} with size ${N}, got type ${S} with size ${E} in program "${x.programInfo.name}".`)}}if(fe("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let _={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(_),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(_)}return this.programManager.run(x,n,g,y,b),at(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Pm.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,s=i.kernelName,n=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),fe("info",()=>`[WebGPU] Start to run kernel "[${a}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),n(t,u[1]),0}catch(c){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${s}" failed. ${c}`)),1}finally{l&&r.push(this.device.popErrorScope().then(c=>c?`GPU validation error for kernel "[${a}] ${s}": ${c.message}`:null));for(let c of this.temporaryData)this.gpuDataManager.release(c.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let s=a.get(t),n=this.gpuDataManager.registerExternalBuffer(r,i,s);return a.set(t,[n,r]),n}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Ha(this,e,t);return bn(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){fe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){fe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){fe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(s.computePipeline),a.setBindGroup(0,s.bindGroup),a.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Wm={};sr(Wm,{init:()=>Vm});var ii,pc,Vm,hb=L(()=>{"use strict";ae(),gt(),se(),wy(),ii=class Gm{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new Gm(this.module,this.dataType,this.data,t)}},pc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,s));let n=Number(e.getValue(i*a++,s));this.outputCount=Number(e.getValue(i*a++,s)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,s));let u=[];for(let l=0;l<n;l++){let c=Number(e.getValue(i*a++,s)),h=Number(e.getValue(i*a++,"*")),p=Number(e.getValue(i*a++,s)),g=[];for(let b=0;b<p;b++)g.push(Number(e.getValue(i*a++,s)));u.push(new ii(e,c,h,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(n=>typeof n=="number"?this.inputs[n]:n)??this.inputs,i=t?.outputs??[],a=(n,u,l)=>new ii(this.module,u,this.output(n,l),l),s=(n,u)=>{let l=Wt(n,u);if(!l)throw new Error(`Unsupported data type: ${n}`);let c=l>0?this.backend.gpuDataManager.create(l).id:0;return new ii(this.module,n,c,u)};return this.backend.run(e,r,i,a,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*i);this.module.setValue(s,t.length,a);for(let n=0;n<t.length;n++)this.module.setValue(s+i*(n+1),t[n],a);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Vm=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(pb(),Cr(qm)).WebGpuBackend,n=new s;await n.initialize(r,i),a("webgpu",[n,u=>n.alloc(Number(u)),u=>n.free(u),(u,l,c,h=!1)=>{if(h)fe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(c)}`),n.memcpy(Number(u),Number(l));else{fe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(c)}`);let p=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(c));n.upload(Number(l),p)}},async(u,l,c)=>{fe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${c}`),await n.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+c)>>>0))},(u,l,c)=>n.createKernel(u,Number(l),c,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>n.releaseKernel(u),(u,l,c,h)=>{fe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${c}, kernel=${u}, contextDataOffset=${l}`);let p=new pc(t,n,Number(l));return n.computeKernel(Number(u),p,h)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else{let s=new Qc(r);a("webnn",[s,()=>s.reserveTensorId(),n=>s.releaseTensorId(n),async(n,u,l,c,h)=>s.ensureTensor(n,u,l,c,h),(n,u)=>{s.uploadTensor(n,u)},async(n,u)=>s.downloadTensor(n,u),(n,u)=>s.registerMLContext(n,u),!!r.trace])}}}),hc,zn,Cn,Et,mc,Pa,fi,Nn,An,La,On,Rn,Dn,Hm=L(()=>{"use strict";Ke(),yy(),by(),ae(),Xt(),hn(),Hc(),hc=(e,t)=>{ke()._OrtInit(e,t)!==0&&we("Can't initialize onnxruntime.")},zn=async e=>{hc(e.wasm.numThreads,di(e.logLevel))},Cn=async(e,t)=>{ke().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(hb(),Cr(Wm)).init;t==="webgpu"&&await i("webgpu",ke(),e,r),t==="webnn"&&await i("webnn",ke(),e)}},Et=new Map,mc=e=>{let t=ke(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&we("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(t.getValue(a,s)),Number(t.getValue(a+i,s))]}finally{t.stackRestore(r)}},Pa=(e,t)=>{let r=ke(),i=r.stackSave(),a=0;try{let s=r.PTR_SIZE,n=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,n,n+s)!==0&&we("Can't get session input/output metadata.");let u=Number(r.getValue(n,"*"));a=Number(r.getValue(n+s,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let c=r.HEAPU32[a/4+1],h=[];for(let p=0;p<c;p++){let g=Number(r.getValue(a+8+p*s,"*"));h.push(g!==0?r.UTF8ToString(g):Number(r.getValue(a+8+(p+c)*s,"*")))}return[u,l,h]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},fi=e=>{let t=ke(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Nn=async(e,t)=>{let r,i,a=ke();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=fi(e);let s=0,n=0,u=0,l=[],c=[],h=[];try{if([n,l]=await Gc(t),t?.externalData&&a.mountExternalData){let S=[];for(let E of t.externalData){let z=typeof E=="string"?E:E.path,N=typeof E=="string"?E:E.data;S.push(gn(N).then(w=>{a.mountExternalData(z,w)}))}await Promise.all(S)}for(let S of t?.executionProviders??[])if((typeof S=="string"?S:S.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof S!="string"){let E=S,z=E?.context,N=E?.gpuDevice,w=E?.deviceType,U=E?.powerPreference;z?a.currentContext=z:N?a.currentContext=await a.webnnCreateMLContext(N):a.currentContext=await a.webnnCreateMLContext({deviceType:w,powerPreference:U})}else a.currentContext=await a.webnnCreateMLContext();break}s=await a._OrtCreateSession(r,i,n),a.webgpuOnCreateSession?.(s),s===0&&we("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(s,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[p,g]=mc(s),b=!!t?.enableGraphCapture,y=[],$=[],k=[],x=[],_=[];for(let S=0;S<p;S++){let[E,z,N]=Pa(s,S);E===0&&we("Can't get an input name."),c.push(E);let w=a.UTF8ToString(E);y.push(w),k.push(z===0?{name:w,isTensor:!1}:{name:w,isTensor:!0,type:ft(z),shape:N})}for(let S=0;S<g;S++){let[E,z,N]=Pa(s,S+p);E===0&&we("Can't get an output name."),h.push(E);let w=a.UTF8ToString(E);$.push(w),x.push(z===0?{name:w,isTensor:!1}:{name:w,isTensor:!0,type:ft(z),shape:N});{if(b&&t?.preferredOutputLocation===void 0){_.push("gpu-buffer");continue}let U=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[w]??"cpu",q=a.webnnIsGraphOutput;if(U==="cpu"&&q&&q(s,w)){_.push("ml-tensor-cpu-output");continue}if(U!=="cpu"&&U!=="cpu-pinned"&&U!=="gpu-buffer"&&U!=="ml-tensor")throw new Error(`Not supported preferred output location: ${U}.`);if(b&&U!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${U}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(U)}}let T=null;return _.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(s),u===0&&we("Can't create IO binding."),T={handle:u,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>Ga(S))}),Et.set(s,[s,c,h,T,b,!1]),[s,y,$,k,x]}catch(p){throw c.forEach(g=>a._OrtFree(g)),h.forEach(g=>a._OrtFree(g)),u!==0&&a._OrtReleaseBinding(u)!==0&&we("Can't release IO binding."),s!==0&&a._OrtReleaseSession(s)!==0&&we("Can't release session."),p}finally{a._free(r),n!==0&&a._OrtReleaseSessionOptions(n)!==0&&we("Can't release session options."),l.forEach(p=>a._free(p)),a.unmountExternalData?.()}},An=e=>{let t=ke(),r=Et.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,s,n,u]=r;n&&(u&&t._OrtClearBoundOutputs(n.handle)!==0&&we("Can't clear bound outputs."),t._OrtReleaseBinding(n.handle)!==0&&we("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(l=>t._OrtFree(l)),s.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&we("Can't release session."),Et.delete(e)},La=async(e,t,r,i,a,s,n=!1)=>{if(!e){t.push(0);return}let u=ke(),l=u.PTR_SIZE,c=e[0],h=e[1],p=e[3],g=p,b,y;if(c==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(n&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let x=e[2].gpuBuffer;y=Wt(jt(c),h);{let _=u.jsepRegisterBuffer;if(!_)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');b=_(i,s,x,y)}}else if(p==="ml-tensor"){let x=e[2].mlTensor;y=Wt(jt(c),h);let _=u.webnnRegisterMLTensor;if(!_)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');b=_(i,x,jt(c),h)}else{let x=e[2];if(Array.isArray(x)){y=l*x.length,b=u._malloc(y),r.push(b);for(let _=0;_<x.length;_++){if(typeof x[_]!="string")throw new TypeError(`tensor data at index ${_} is not a string`);u.setValue(b+_*l,rt(x[_],r),"*")}}else{let _=u.webnnIsGraphInput,T=u.webnnIsGraphOutput;if(c!=="string"&&_&&T){let S=u.UTF8ToString(a);if(_(i,S)||T(i,S)){let E=jt(c);y=Wt(E,h),g="ml-tensor";let z=u.webnnCreateTemporaryTensor,N=u.webnnUploadTensor;if(!z||!N)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let w=await z(i,E,h);N(w,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),b=w}else y=x.byteLength,b=u._malloc(y),r.push(b),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,y),b)}else y=x.byteLength,b=u._malloc(y),r.push(b),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,y),b)}}let $=u.stackSave(),k=u.stackAlloc(4*h.length);try{h.forEach((_,T)=>u.setValue(k+T*l,_,l===4?"i32":"i64"));let x=u._OrtCreateTensor(jt(c),b,y,k,h.length,Ga(g));x===0&&we(`Can't create tensor for input/output. session=${i}, index=${s}.`),t.push(x)}finally{u.stackRestore($)}},On=async(e,t,r,i,a,s)=>{let n=ke(),u=n.PTR_SIZE,l=Et.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let c=l[0],h=l[1],p=l[2],g=l[3],b=l[4],y=l[5],$=t.length,k=i.length,x=0,_=[],T=[],S=[],E=[],z=[],N=n.stackSave(),w=n.stackAlloc($*u),U=n.stackAlloc($*u),q=n.stackAlloc(k*u),Z=n.stackAlloc(k*u);try{[x,_]=Vc(s),Vt("wasm prepareInputOutputTensor");for(let M=0;M<$;M++)await La(r[M],T,E,e,h[t[M]],t[M],b);for(let M=0;M<k;M++)await La(a[M],S,E,e,p[i[M]],$+i[M],b);Gt("wasm prepareInputOutputTensor");for(let M=0;M<$;M++)n.setValue(w+M*u,T[M],"*"),n.setValue(U+M*u,h[t[M]],"*");for(let M=0;M<k;M++)n.setValue(q+M*u,S[M],"*"),n.setValue(Z+M*u,p[i[M]],"*");if(g&&!y){let{handle:M,outputPreferredLocations:F,outputPreferredLocationsEncoded:J}=g;if(h.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${h.length}).`);Vt("wasm bindInputsOutputs");for(let ie=0;ie<$;ie++){let re=t[ie];await n._OrtBindInput(M,h[re],T[ie])!==0&&we(`Can't bind input[${ie}] for session=${e}.`)}for(let ie=0;ie<k;ie++){let re=i[ie];a[ie]?.[3]?(z.push(S[ie]),n._OrtBindOutput(M,p[re],S[ie],0)!==0&&we(`Can't bind pre-allocated output[${ie}] for session=${e}.`)):n._OrtBindOutput(M,p[re],0,J[re])!==0&&we(`Can't bind output[${ie}] to ${F[ie]} for session=${e}.`)}Gt("wasm bindInputsOutputs"),Et.set(e,[c,h,p,g,b,!0])}n.jsepOnRunStart?.(c),n.webnnOnRunStart?.(c);let G;g?G=await n._OrtRunWithBinding(c,g.handle,k,q,x):G=await n._OrtRun(c,U,w,$,Z,k,q,x),G!==0&&we("failed to call OrtRun().");let K=[],R=[];Vt("wasm ProcessOutputTensor");for(let M=0;M<k;M++){let F=Number(n.getValue(q+M*u,"*"));if(F===S[M]||z.includes(S[M])){K.push(a[M]),F!==S[M]&&n._OrtReleaseTensor(F)!==0&&we("Can't release tensor.");continue}let J=n.stackSave(),ie=n.stackAlloc(4*u),re=!1,ne,P=0;try{n._OrtGetTensorData(F,ie,ie+u,ie+2*u,ie+3*u)!==0&&we(`Can't access output tensor data on index ${M}.`);let te=u===4?"i32":"i64",Q=Number(n.getValue(ie,te));P=n.getValue(ie+u,"*");let V=n.getValue(ie+u*2,"*"),ze=Number(n.getValue(ie+u*3,te)),Ne=[];for(let _e=0;_e<ze;_e++)Ne.push(Number(n.getValue(V+_e*u,te)));n._OrtFree(V)!==0&&we("Can't free memory for tensor dims.");let Se=Ne.reduce((_e,ve)=>_e*ve,1);ne=ft(Q);let Ae=g?.outputPreferredLocations[i[M]];if(ne==="string"){if(Ae==="gpu-buffer"||Ae==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let _e=[];for(let ve=0;ve<Se;ve++){let W=n.getValue(P+ve*u,"*"),me=n.getValue(P+(ve+1)*u,"*"),de=ve===Se-1?void 0:me-W;_e.push(n.UTF8ToString(W,de))}K.push([ne,Ne,_e,"cpu"])}else if(Ae==="gpu-buffer"&&Se>0){let _e=n.jsepGetBuffer;if(!_e)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ve=_e(P),W=Wt(Q,Se);if(W===void 0||!mn(ne))throw new Error(`Unsupported data type: ${ne}`);re=!0,K.push([ne,Ne,{gpuBuffer:ve,download:n.jsepCreateDownloader(ve,W,ne),dispose:()=>{n._OrtReleaseTensor(F)!==0&&we("Can't release tensor.")}},"gpu-buffer"])}else if(Ae==="ml-tensor"&&Se>0){let _e=n.webnnEnsureTensor,ve=n.webnnIsGraphInputOutputTypeSupported;if(!_e||!ve)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Wt(Q,Se)===void 0||!fn(ne))throw new Error(`Unsupported data type: ${ne}`);if(!ve(e,ne,!1))throw new Error(`preferredLocation "ml-tensor" for ${ne} output is not supported by current WebNN Context.`);let W=await _e(e,P,Q,Ne,!1);re=!0,K.push([ne,Ne,{mlTensor:W,download:n.webnnCreateMLTensorDownloader(P,ne),dispose:()=>{n.webnnReleaseTensorId(P),n._OrtReleaseTensor(F)}},"ml-tensor"])}else if(Ae==="ml-tensor-cpu-output"&&Se>0){let _e=n.webnnCreateMLTensorDownloader(P,ne)(),ve=K.length;re=!0,R.push((async()=>{let W=[ve,await _e];return n.webnnReleaseTensorId(P),n._OrtReleaseTensor(F),W})()),K.push([ne,Ne,[],"cpu"])}else{let _e=yi(ne),ve=new _e(Se);new Uint8Array(ve.buffer,ve.byteOffset,ve.byteLength).set(n.HEAPU8.subarray(P,P+ve.byteLength)),K.push([ne,Ne,ve,"cpu"])}}finally{n.stackRestore(J),ne==="string"&&P&&n._free(P),re||n._OrtReleaseTensor(F)}}g&&!b&&(n._OrtClearBoundOutputs(g.handle)!==0&&we("Can't clear bound outputs."),Et.set(e,[c,h,p,g,b,!1]));for(let[M,F]of await Promise.all(R))K[M][2]=F;return Gt("wasm ProcessOutputTensor"),K}finally{n.webnnOnRunEnd?.(c),n.stackRestore(N),T.forEach(G=>n._OrtReleaseTensor(G)),S.forEach(G=>n._OrtReleaseTensor(G)),E.forEach(G=>n._free(G)),x!==0&&n._OrtReleaseRunOptions(x),_.forEach(G=>n._free(G))}},Rn=e=>{let t=ke(),r=Et.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&we("Can't get an profile file name."),t._OrtFree(a)},Dn=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),zt,Fe,Jt,xr,kr,ai,qa,ni,Pt,Lt,fc,Fm,Km,Xm,Zm,Ym,Qm,Jm,ef=L(()=>{"use strict";Ke(),Hm(),Xt(),cn(),zt=()=>!!xe.wasm.proxy&&typeof document<"u",Jt=!1,xr=!1,kr=!1,ni=new Map,Pt=(e,t)=>{let r=ni.get(e);r?r.push(t):ni.set(e,[t])},Lt=()=>{if(Jt||!xr||kr||!Fe)throw new Error("worker not ready")},fc=e=>{switch(e.data.type){case"init-wasm":Jt=!1,e.data.err?(kr=!0,qa[1](e.data.err)):(xr=!0,qa[0]()),ai&&(URL.revokeObjectURL(ai),ai=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ni.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Fm=async()=>{if(!xr){if(Jt)throw new Error("multiple calls to 'initWasm()' detected.");if(kr)throw new Error("previous call to 'initWasm()' failed.");if(Jt=!0,zt())return new Promise((e,t)=>{Fe?.terminate(),jc().then(([r,i])=>{try{Fe=i,Fe.onerror=s=>t(s),Fe.onmessage=fc,qa=[e,t];let a={type:"init-wasm",in:xe};!a.in.wasm.wasmPaths&&(r||Va)&&(a.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-D-icqfN-.wasm",import.meta.url).href}),Fe.postMessage(a),ai=r}catch(a){t(a)}},t)});try{await pn(xe.wasm),await zn(xe),xr=!0}catch(e){throw kr=!0,e}finally{Jt=!1}}},Km=async e=>{if(zt())return Lt(),new Promise((t,r)=>{Pt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:xe}};Fe.postMessage(i)});await Cn(xe,e)},Xm=async e=>zt()?(Lt(),new Promise((t,r)=>{Pt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Fe.postMessage(i,[e.buffer])})):fi(e),Zm=async(e,t)=>{if(zt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Lt(),new Promise((r,i)=>{Pt("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Fe.postMessage(a,s)})}else return Nn(e,t)},Ym=async e=>{if(zt())return Lt(),new Promise((t,r)=>{Pt("release",[t,r]);let i={type:"release",in:e};Fe.postMessage(i)});An(e)},Qm=async(e,t,r,i,a,s)=>{if(zt()){if(r.some(n=>n[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(n=>n))throw new Error("pre-allocated output tensor is not supported for proxy.");return Lt(),new Promise((n,u)=>{Pt("run",[n,u]);let l=r,c={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:s}};Fe.postMessage(c,Dn(l))})}else return On(e,t,r,i,a,s)},Jm=async e=>{if(zt())return Lt(),new Promise((t,r)=>{Pt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Fe.postMessage(i)});Rn(e)}}),ja,gc,tf,mb=L(()=>{"use strict";Ke(),ef(),ae(),dn(),Hc(),ja=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},gc=e=>{switch(e[3]){case"cpu":return new it(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!mn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return it.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!fn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return it.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},tf=class{async fetchModelAndCopyToWasmMemory(e){return Xm(await gn(e))}async loadModel(e,t){lt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Zm(r,t),at()}async dispose(){return Ym(this.sessionId)}async run(e,t,r){lt();let i=[],a=[];Object.entries(e).forEach(p=>{let g=p[0],b=p[1],y=this.inputNames.indexOf(g);if(y===-1)throw new Error(`invalid input '${g}'`);i.push(b),a.push(y)});let s=[],n=[];Object.entries(t).forEach(p=>{let g=p[0],b=p[1],y=this.outputNames.indexOf(g);if(y===-1)throw new Error(`invalid output '${g}'`);s.push(b),n.push(y)});let u=i.map((p,g)=>ja(p,()=>`input "${this.inputNames[a[g]]}"`)),l=s.map((p,g)=>p?ja(p,()=>`output "${this.outputNames[n[g]]}"`):null),c=await Qm(this.sessionId,a,u,n,l,r),h={};for(let p=0;p<c.length;p++)h[this.outputNames[n[p]]]=s[p]??gc(c[p]);return at(),h}startProfiling(){}endProfiling(){Jm(this.sessionId)}}}),rf={};sr(rf,{OnnxruntimeWebAssemblyBackend:()=>nn,initializeFlags:()=>an,wasmBackend:()=>af});var an,nn,af,fb=L(()=>{"use strict";Ke(),ef(),mb(),an=()=>{(typeof xe.wasm.initTimeout!="number"||xe.wasm.initTimeout<0)&&(xe.wasm.initTimeout=0);let e=xe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),xe.wasm.simd=!1),typeof xe.wasm.proxy!="boolean"&&(xe.wasm.proxy=!1),typeof xe.wasm.trace!="boolean"&&(xe.wasm.trace=!1),typeof xe.wasm.numThreads!="number"||!Number.isInteger(xe.wasm.numThreads)||xe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)xe.wasm.numThreads=1;else{let t=typeof navigator>"u"?J0("node:os").cpus().length:navigator.hardwareConcurrency;xe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},nn=class{async init(e){an(),await Fm(),await Km(e)}async createInferenceSessionHandler(e,t){let r=new tf;return await r.loadModel(e,t),r}},af=new nn});Ke();Ke();Ke();var gb="1.29.0";{let e=(fb(),Cr(rf)).wasmBackend;er("webgpu",e,5),er("webnn",e,5),er("cpu",e,10),er("wasm",e,10)}Object.defineProperty(xe.versions,"web",{value:gb,enumerable:!0});const yb="infrisk-models",bb=1,ar="onnx-models";function nf(){return new Promise((e,t)=>{const r=indexedDB.open(yb,bb);r.onupgradeneeded=()=>{const i=r.result;i.objectStoreNames.contains(ar)||i.createObjectStore(ar,{keyPath:"id"})},r.onsuccess=()=>e(r.result),r.onerror=()=>t(r.error)})}async function _b(e){const t=await nf();return new Promise((r,i)=>{const n=t.transaction(ar,"readonly").objectStore(ar).get(e);n.onsuccess=()=>{t.close(),r(n.result??null)},n.onerror=()=>{t.close(),i(n.error)}})}async function sf(e){const t=await nf();return new Promise((r,i)=>{const n=t.transaction(ar,"readonly").objectStore(ar).count(e);n.onsuccess=()=>{t.close(),r(n.result>0)},n.onerror=()=>{t.close(),i(n.error)}})}const wb="road-yolov8",$b="bridge-yolov8",vb=["D00","D10","D20","D40"],of={D00:"Longitudinal Crack",D10:"Transverse Crack",D20:"Alligator Crack",D40:"Pothole"},uf={D00:"longitudinal_crack",D10:"transverse_crack",D20:"alligator_crack",D40:"pothole"},Nt={id:wb,bundledUrl:"/models/road-yolov8.onnx",classNames:vb,labels:of,internalNames:uf},Er={id:$b,bundledUrl:"/models/bridge-yolov8.onnx",classNames:["crack"],labels:{crack:"Crack"},internalNames:{crack:"crack"}},xb=640,kb=.15,Sb=.45,Tb=1280,gi=1024*1024;function yc(e){if(e.byteLength<gi)return!1;const t=new Uint8Array(e,0,2);return t[0]===8&&t[1]>=2&&t[1]<=10}async function lf(e){try{const t=await fetch(e,{headers:{Range:"bytes=0-15"}});if(!t.ok)return{valid:!1,reachable:!1,totalBytes:0};let r=0;const i=t.headers.get("content-range");if(i){const n=i.match(/\/(\d+)$/);n&&(r=parseInt(n[1],10))}else r=Number(t.headers.get("content-length")??"0");const a=t.body?.getReader();if(a)try{const{value:n}=await a.read();if(n&&n.length>=2)return!(n[0]===8&&n[1]>=2&&n[1]<=10)||r>0&&r<gi?{valid:!1,reachable:!0,totalBytes:r}:{valid:!0,reachable:!0,totalBytes:r}}finally{a.cancel().catch(()=>{})}return{valid:r>=gi,reachable:!0,totalBytes:r}}catch{return{valid:!1,reachable:!1,totalBytes:0}}}const Wa=new Map,sn=new Map;async function Ib(e){try{const t=await _b(e.id);if(t?.arrayBuffer)if(!yc(t.arrayBuffer))console.error(`[yolo-inference] Stored model "${e.id}" is not a valid ONNX file (${t.arrayBuffer.byteLength} bytes). Ignoring it.`);else return{bytes:t.arrayBuffer,source:"uploaded"}}catch{}try{const t=await fetch(e.bundledUrl);if(t.ok){const r=await t.arrayBuffer();if(!yc(r))console.error(`[yolo-inference] Bundled model at ${e.bundledUrl} is not a valid ONNX file (${r.byteLength} bytes) — placeholder or LFS pointer?`);else return{bytes:r,source:"bundled"}}}catch{}throw new Error("MODEL_NOT_CONNECTED")}async function Eb(e){const t=Wa.get(e.id);if(t)return t;const r=(async()=>{const{bytes:i,source:a}=await Ib(e);return sn.set(e.id,a),xe.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.29.0/dist/",xe.wasm.numThreads=1,await ln.create(i,{executionProviders:["wasm"],graphOptimizationLevel:"all"})})();return Wa.set(e.id,r),r.catch(()=>{Wa.delete(e.id),sn.delete(e.id)}),r}function zb(e,t){const r=e instanceof HTMLImageElement?e.naturalWidth:e.width,i=e instanceof HTMLImageElement?e.naturalHeight:e.height,a=Math.max(r,i);if(a<=t)return e;const s=t/a,n=Math.round(r*s),u=Math.round(i*s),l=document.createElement("canvas");return l.width=n,l.height=u,l.getContext("2d").drawImage(e,0,0,n,u),l}function Cb(e,t){const r=zb(e,Tb),i=document.createElement("canvas");i.width=t,i.height=t;const a=i.getContext("2d");a.fillStyle="#808080",a.fillRect(0,0,t,t);const s=r.width,n=r.height,u=Math.min(t/s,t/n),l=s*u,c=n*u,h=(t-l)/2,p=(t-c)/2;a.drawImage(r,h,p,l,c);const b=a.getImageData(0,0,t,t).data,y=new Float32Array(3*t*t);for(let k=0;k<t*t;k++){const x=b[k*4]/255,_=b[k*4+1]/255,T=b[k*4+2]/255;y[k]=x,y[t*t+k]=_,y[2*t*t+k]=T}return{tensor:new it("float32",y,[1,3,t,t]),pad:{padX:h,padY:p,scale:u},resizedW:s,resizedH:n}}function Nb(e,t){const r=Math.max(e.x,t.x),i=Math.max(e.y,t.y),a=Math.min(e.x+e.width,t.x+t.width),s=Math.min(e.y+e.height,t.y+t.height),n=Math.max(0,a-r)*Math.max(0,s-i),u=e.width*e.height,l=t.width*t.height,c=u+l-n;return c>0?n/c:0}function Ab(e,t){const r=[...e].sort((s,n)=>n.confidence-s.confidence),i=[],a=new Set;for(let s=0;s<r.length;s++)if(!a.has(s)){i.push(r[s]);for(let n=s+1;n<r.length;n++)a.has(n)||r[s].classId===r[n].classId&&Nb(r[s].bbox,r[n].bbox)>t&&a.add(n)}return i}function Ob(e,t,r,i,a,s,n){const u=e.data,l=e.dims,c=n.length,h=l[2],p=[];for(let g=0;g<h;g++){const b=u[0*h+g],y=u[1*h+g],$=u[2*h+g],k=u[3*h+g];let x=0,_=0;for(let Z=0;Z<c;Z++){const G=u[(4+Z)*h+g];G>_&&(_=G,x=Z)}if(_<a)continue;const T=(b-t.padX)/t.scale,S=(y-t.padY)/t.scale,E=$/t.scale,z=k/t.scale,N=Math.max(0,Math.min(T-E/2,r)),w=Math.max(0,Math.min(S-z/2,i)),U=Math.max(0,Math.min(T+E/2,r)),q=Math.max(0,Math.min(S+z/2,i));p.push({classId:x,className:n[x],confidence:_,bbox:{x:N,y:w,width:U-N,height:q-w}})}return Ab(p,s)}async function df(e){const t=e??Nt;try{if(await sf(t.id))return!0}catch{}return(await lf(t.bundledUrl)).valid}async function bc(e){const t=e??Nt;let r=!1;try{r=await sf(t.id)}catch{}if(r)return{available:!0,message:"AI model loaded (custom)",details:["YOLOv8 ONNX model loaded from browser storage",`Classes: ${Object.values(t.labels).join(", ")}`,"Runtime: ONNX Runtime Web (WASM)"]};const i=await lf(t.bundledUrl);return i.valid?{available:!0,message:"AI model loaded",details:[`YOLOv8 ONNX model (${t.classNames.length} class${t.classNames.length>1?"es":""})`,`Classes: ${Object.values(t.labels).join(", ")}`,"Runtime: ONNX Runtime Web (WASM)"]}:{available:!1,message:"AI model unavailable",details:i.reachable&&i.totalBytes>0&&i.totalBytes<gi?[`A file exists at ${t.bundledUrl} but it is only`,`${i.totalBytes} bytes — not a valid ONNX model.`,"","This is usually an un-materialized Git LFS pointer.","","Fix: pull the real model bytes into the repository, e.g.",`  git lfs pull --include ${t.bundledUrl}`,"so the full model file is served at that URL."]:["The defect detection model could not be loaded.","",`Expected location: ${t.bundledUrl}`,"","The model file must be present as a bundled application asset.","Contact the administrator to restore the model file."]}}async function cf(e,t){const r=t??Nt,i=await Eb(r),{tensor:a,pad:s,resizedW:n,resizedH:u}=Cb(e,xb),l=i.inputNames[0],c=await i.run({[l]:a}),h=i.outputNames[0],p=c[h];return{detections:Ob(p,s,n,u,kb,Sb,r.classNames),imageWidth:n,imageHeight:u}}function pf(e){const t=e??Nt;return sn.get(t.id)??"none"}const Rb={longitudinal_crack:"medium",transverse_crack:"medium",alligator_crack:"high",pothole:"high"};function Db(e,t,r,i){const a=["low","medium","high","critical"],s=Rb[e]??"medium";let n=a.indexOf(s);return t>.85&&(n=Math.min(n+1,3)),r/i>.08&&(n=Math.min(n+1,3)),a[n]}async function Bb(e){if(!await df(Nt))throw new Error("MODEL_NOT_CONNECTED");const{detections:r,imageWidth:i,imageHeight:a}=await cf(e,Nt),s=i*a,n=r.map(p=>{const g=uf[p.className]??p.className,b=p.bbox.width*p.bbox.height,y=of[p.className]??p.className;return{defectType:g,confidence:p.confidence,severity:Db(g,p.confidence,b,s),bboxX:Math.round(p.bbox.x),bboxY:Math.round(p.bbox.y),bboxWidth:Math.round(p.bbox.width),bboxHeight:Math.round(p.bbox.height),description:`${y} detected with ${(p.confidence*100).toFixed(1)}% confidence.`}}),u=[...new Set(n.map(p=>p.defectType))],h=["Model: YOLOv8s (RDD2022 road-damage, 4 classes)",`Source: ${pf(Nt)==="uploaded"?"Custom (browser storage)":"Bundled application asset"}`,`Input: ${e.naturalWidth}×${e.naturalHeight}px`,`Detections (post-NMS): ${r.length}`,`Classes detected: ${u.length>0?u.join(", "):"none"}`];return{defects:n,details:h}}function Mb(e,t,r){const i=["low","medium","high","critical"];let a=1;e>.8&&(a=Math.min(a+1,3)),e>.93&&(a=Math.min(a+1,3));const s=t/r;return s>.08&&(a=Math.min(a+1,3)),s>.2&&(a=Math.min(a+1,3)),i[Math.min(a,3)]}async function Ub(e){if(!await df(Er))throw new Error("MODEL_NOT_CONNECTED");const{detections:r,imageWidth:i,imageHeight:a}=await cf(e,Er),s=i*a,n=r.map(h=>{const p=h.bbox.width*h.bbox.height,g=Er.labels[h.className]??h.className;return{defectType:"crack",confidence:h.confidence,severity:Mb(h.confidence,p,s),bboxX:Math.round(h.bbox.x),bboxY:Math.round(h.bbox.y),bboxWidth:Math.round(h.bbox.width),bboxHeight:Math.round(h.bbox.height),description:`${g} detected with ${(h.confidence*100).toFixed(1)}% confidence.`}}),c=["Model: YOLOv8n (crack detection, 1 class)",`Source: ${pf(Er)==="uploaded"?"Custom (browser storage)":"Bundled application asset"}`,`Input: ${e.naturalWidth}×${e.naturalHeight}px`,`Detections (post-NMS): ${r.length}`,`Classes detected: ${n.length>0?"Crack":"none"}`];return{defects:n,details:c}}async function Pb(e,t,r=0){const i=Date.now();try{const a=await jb(t);if(e==="road"){const s=await Bb(a),n=s.defects.map(l=>({defectType:l.defectType,confidence:l.confidence,severity:l.severity})),u=qi(n,e,r);return{success:!0,defects:s.defects,risk:u,processingTimeMs:Date.now()-i,modelVersion:"yolov8s-rdd2022-v1",modelNote:"This analysis uses a YOLOv8s model trained on the RDD2022 road-damage dataset, running in the browser via ONNX Runtime Web. Results should be verified by a qualified infrastructure professional.",modelConnected:!0,inferenceDetails:s.details}}if(e==="bridge"){const s=await Ub(a),n=s.defects.map(l=>({defectType:l.defectType,confidence:l.confidence,severity:l.severity})),u=qi(n,e,r);return{success:!0,defects:s.defects,risk:u,processingTimeMs:Date.now()-i,modelVersion:"yolov8n-bridge-crack-v1",modelNote:"This analysis uses a YOLOv8n model for bridge crack detection, running in the browser via ONNX Runtime Web. Results should be verified by a qualified infrastructure professional.",modelConnected:!0,inferenceDetails:s.details}}throw new Error("MODULE_NOT_AVAILABLE")}catch(a){const s=qi([],e,r),n=a instanceof Error?a.message:"Unknown error";return{success:!1,defects:[],risk:s,processingTimeMs:Date.now()-i,modelVersion:"n/a",modelNote:n,modelConnected:!1,inferenceDetails:Lb(e,n)}}}function Lb(e,t){return e==="road"?t==="MODEL_NOT_CONNECTED"?["AI model unavailable.","","The road defect detection model could not be loaded.","","Expected location: /models/road-yolov8.onnx","","The ONNX model file must be present as a bundled application asset.","Contact the administrator to restore the model file."]:[`Road analysis error: ${t}`]:e==="bridge"?t==="MODEL_NOT_CONNECTED"?["AI model unavailable.","","The bridge crack detection model could not be loaded.","","Expected location: /models/bridge-yolov8.onnx","","The ONNX model file must be present as a bundled application asset.","Contact the administrator to restore the model file."]:[`Bridge analysis error: ${t}`]:[`The ${e} detection module is not yet supported.`,"","Currently supported infrastructure types:","  - Road: YOLOv8s (RDD2022-trained, ONNX model required)","  - Bridge: YOLOv8n (crack detection, ONNX model required)"]}async function qb(){const[e,t]=await Promise.all([bc(Nt),bc(Er)]);return{road:e,bridge:t}}function jb(e){return new Promise((t,r)=>{const i=new Image;i.onload=()=>t(i),i.onerror=()=>r(new Error("Failed to load image for inference")),i.src=e})}function a_(){const{user:e}=v0(),t=Me.useRef(null),r=vt(xt.upload.generateUploadUrl),i=vt(xt.assets.create),a=vt(xt.images.create),s=vt(xt.inspections.create),n=vt(xt.inspections.complete),u=vt(xt.inspections.fail),l=vt(xt.inspections.createDetection),c=vt(xt.inspections.createRiskAssessment),[h,p]=Me.useState(""),[g,b]=Me.useState(""),[y,$]=Me.useState(""),[k,x]=Me.useState(""),[_,T]=Me.useState(null),[S,E]=Me.useState(null),[z,N]=Me.useState(!1),[w,U]=Me.useState(null),[q,Z]=Me.useState(!1),[G,K]=Me.useState(""),[R,M]=Me.useState("idle"),[F,J]=Me.useState(null),[ie,re]=Me.useState(null),[ne,P]=Me.useState({road:null,bridge:null}),[te,Q]=Me.useState(!0);Me.useEffect(()=>{qb().then(W=>{P(W),Q(!1)})},[]);const V=h==="bridge"?ne.bridge:ne.road,ze=Me.useCallback(async W=>{const me=W.target.files?.[0];if(me){U(null),M("idle"),J(null),re(null);try{const de=await me.arrayBuffer(),le=me.type||Wb(me.name)||"application/octet-stream";E({bytes:de,fileName:me.name,fileSize:de.byteLength,mimeType:le});const qe=URL.createObjectURL(new Blob([de],{type:le}));T(qe)}catch(de){const le=de instanceof Error?de.message:String(de);console.error("[FileSelect] Failed to read selected file:",le),E(null),T(null),M("save_failed"),J(`[select] Could not read the selected image: ${le}`)}}},[]),Ne=async W=>{if(!e?._id||!S||!h)return;M("saving"),J(null);let me="init";try{me="1.upload",console.log("[Save] Step 1: generating upload URL...");let de;try{de=await r()}catch(Be){throw new Error(`generateUploadUrl failed: ${Be instanceof Error?Be.message:String(Be)}`)}if(!de||typeof de!="string")throw new Error(`generateUploadUrl returned invalid value: ${String(de)}`);if(console.log("[Save] Step 1: upload URL obtained, uploading file..."),S.bytes.byteLength===0)throw new Error("Captured image is empty");const le=new Blob([S.bytes],{type:S.mimeType});let qe;try{qe=await fetch(de,{method:"POST",headers:{"Content-Type":S.mimeType},body:le})}catch(Be){throw new Error(`fetch to upload URL failed: ${Be instanceof Error?Be.message:String(Be)}`)}if(!qe.ok){const Be=await qe.text().catch(()=>"<no body>");throw new Error(`Upload HTTP ${qe.status}: ${Be}`)}const{storageId:dt}=await qe.json();if(console.log("[Save] Step 1 OK: storageId =",dt),!dt)throw new Error("Upload returned empty storageId");me="2.createAsset",console.log("[Save] Step 2: creating asset...");const yt=await i({userId:e._id,assetId:g||`AUTO-${Date.now()}`,infraType:h,location:y||void 0,notes:k||void 0,status:"inspection_required"});console.log("[Save] Step 2 OK: assetId =",yt),me="3.createImage",console.log("[Save] Step 3: creating image record...");const Xe=await a({userId:e._id,assetId:yt,storageId:dt,fileName:S.fileName,fileSize:S.fileSize,mimeType:S.mimeType,infraType:h});console.log("[Save] Step 3 OK: imageRecordId =",Xe),me="4.createInspection",console.log("[Save] Step 4: creating inspection...");const Ge=await s({userId:e._id,assetId:yt,imageId:Xe,infraType:h,location:y||void 0,notes:k||void 0});console.log("[Save] Step 4 OK: inspectionId =",Ge),me="5.createDetections",console.log("[Save] Step 5: saving",W.defects.length,"detection(s)...");for(let Be=0;Be<W.defects.length;Be++){const Oe=W.defects[Be];console.log(`[Save] Step 5: saving detection ${Be+1}/${W.defects.length}:`,Oe.defectType,Oe.severity,Oe.confidence),await l({inspectionId:Ge,userId:e._id,defectType:Oe.defectType,confidence:Oe.confidence,severity:Oe.severity,bboxX:Oe.bboxX,bboxY:Oe.bboxY,bboxWidth:Oe.bboxWidth,bboxHeight:Oe.bboxHeight,description:Oe.description}),console.log(`[Save] Step 5: detection ${Be+1} saved`)}console.log("[Save] Step 5 OK: all detections saved"),me="6.createRiskAssessment",console.log("[Save] Step 6: saving risk assessment..."),console.log("[Save] Step 6: risk data =",{score:W.risk.riskScore,category:W.risk.riskCategory,priority:W.risk.priority,factorsCount:W.risk.factors.length}),await c({inspectionId:Ge,userId:e._id,assetId:yt,riskScore:W.risk.riskScore,riskCategory:W.risk.riskCategory,priority:W.risk.priority,explanation:W.risk.explanation,factors:W.risk.factors,recommendedAction:W.risk.recommendedAction,disclaimer:W.risk.disclaimer}),console.log("[Save] Step 6 OK: risk assessment saved"),me="7.completeInspection",console.log("[Save] Step 7: completing inspection..."),W.modelConnected?await n({id:Ge}):await u({id:Ge,reason:W.modelNote}),console.log("[Save] Step 7 OK: inspection completed"),re(Ge),M("saved"),J(null)}catch(de){const le=de instanceof Error?de.message:String(de);console.error(`[Save] FAILED at step ${me}:`,le,de),M("save_failed"),J(`[${me}] ${le}`)}},Se=async()=>{if(!(!h||!S)){N(!0),K("Reading image file..."),U(null),M("idle"),J(null),re(null);try{let W;try{W=await Vb(new Blob([S.bytes],{type:S.mimeType}))}catch(de){const le=de instanceof Error?de.message:String(de);U({success:!1,defects:[],risk:{riskScore:0,riskCategory:"LOW",priority:"P4",explanation:"",factors:[],recommendedAction:"",disclaimer:""},processingTimeMs:0,modelVersion:"n/a",modelNote:`Could not read the uploaded image file. ${le}`,modelConnected:!1,inferenceDetails:[le]});return}K("Running YOLOv8 inference...");const me=await Pb(h,W,0);U(me),e?._id&&(K("Saving results to database..."),await Ne(me))}catch(W){const me=W instanceof Error?W.message:"Unknown error";U({success:!1,defects:[],risk:{riskScore:0,riskCategory:"LOW",priority:"P4",explanation:"",factors:[],recommendedAction:"",disclaimer:""},processingTimeMs:0,modelVersion:"n/a",modelNote:me,modelConnected:!1,inferenceDetails:[`Error: ${me}`]})}finally{N(!1),K("")}}},Ae=()=>{p(""),b(""),$(""),x(""),T(null),E(null),U(null),Z(!1),M("idle"),re(null),t.current&&(t.current.value="")},ve=!!h&&!!S;return C.jsx(k0,{children:C.jsxs("div",{className:"p-4 md:p-8 max-w-[1400px] mx-auto pb-24 md:pb-8",children:[C.jsx("header",{className:"mb-6 md:mb-8",children:C.jsxs("div",{className:"flex items-center gap-3 mb-1",children:[C.jsx("div",{className:"flex size-9 items-center justify-center rounded-xl bg-primary/10",children:C.jsx(M0,{className:"size-5 text-primary"})}),C.jsxs("div",{children:[C.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-wider text-primary",children:"Analysis Pipeline"}),C.jsx("h1",{className:"text-xl md:text-2xl font-bold tracking-tight text-foreground",children:"AI Inspection"})]})]})}),C.jsxs("div",{className:"grid gap-5 md:gap-6 xl:grid-cols-[420px_1fr]",children:[C.jsxs("div",{className:"space-y-4 md:space-y-5",children:[te&&C.jsx("div",{className:"rounded-xl border border-border/60 bg-card p-4",children:C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx(Vr,{className:"size-4 text-muted-foreground animate-spin"}),C.jsx("p",{className:"text-sm text-muted-foreground",children:"Checking model status..."})]})}),!te&&[{key:"road",label:"Road",status:ne.road},{key:"bridge",label:"Bridge",status:ne.bridge}].map(({key:W,label:me,status:de})=>{if(!de)return null;const le=W===h;return C.jsx("div",{className:`rounded-xl border p-4 transition-all duration-200 ${de.available?le?"border-risk-low/40 bg-risk-low/5 shadow-[0_0_12px_oklch(0.65_0.15_145_/_0.1)]":"border-risk-low/20 bg-risk-low/[0.02]":"border-amber-500/20 bg-amber-500/5"}`,children:C.jsxs("div",{className:"flex items-start gap-3",children:[C.jsx("div",{className:`flex size-8 items-center justify-center rounded-lg shrink-0 mt-0.5 ${de.available?"bg-risk-low/10":"bg-amber-500/10"}`,children:de.available?C.jsx(Io,{className:"size-4 text-risk-low"}):C.jsx(Co,{className:"size-4 text-amber-400"})}),C.jsxs("div",{className:"flex-1 min-w-0",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsxs("p",{className:`text-sm font-semibold ${de.available?"text-risk-low":"text-amber-300"}`,children:[me,": ",de.message]}),le&&C.jsx(pr,{className:"text-[9px] bg-primary/10 text-primary border-0",children:"Active"})]}),C.jsx("div",{className:"mt-2 space-y-0.5",children:de.details.map((qe,dt)=>qe?C.jsx("p",{className:"text-[11px] text-muted-foreground leading-relaxed",children:qe},dt):C.jsx("div",{className:"h-1.5"},dt))})]})]})},W)}),C.jsxs(kt,{className:"bg-card border-border/60",children:[C.jsx(dr,{className:"pb-3",children:C.jsx(cr,{className:"text-sm font-semibold text-foreground",children:"Configuration"})}),C.jsxs(St,{className:"space-y-4",children:[C.jsxs("div",{className:"space-y-2",children:[C.jsx(Gr,{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:"Infrastructure Type"}),C.jsxs(I0,{value:h,onValueChange:W=>p(W),children:[C.jsx(E0,{className:"bg-surface-2 border-border/60",children:C.jsx(z0,{placeholder:"Select infrastructure type"})}),C.jsxs(C0,{children:[C.jsx(hr,{value:"road",children:"🛣️ Road"}),C.jsx(hr,{value:"bridge",children:"🌉 Bridge"}),C.jsx(hr,{value:"tunnel",children:"🚇 Tunnel"}),C.jsx(hr,{value:"water",children:"💧 Water Infrastructure"}),C.jsx(hr,{value:"power",children:"⚡ Power Infrastructure"})]})]})]}),C.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[C.jsxs("div",{className:"space-y-2",children:[C.jsx(Gr,{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:"Asset ID"}),C.jsx(Eo,{placeholder:"e.g., RD-001",value:g,onChange:W=>b(W.target.value),className:"bg-surface-2 border-border/60"})]}),C.jsxs("div",{className:"space-y-2",children:[C.jsx(Gr,{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:"Location"}),C.jsx(Eo,{placeholder:"e.g., Highway 101, MM 42",value:y,onChange:W=>$(W.target.value),className:"bg-surface-2 border-border/60"})]})]}),C.jsxs("div",{className:"space-y-2",children:[C.jsx(Gr,{className:"text-xs font-semibold uppercase tracking-wider text-muted-foreground",children:"Notes (optional)"}),C.jsx(X0,{placeholder:"Additional observations...",value:k,onChange:W=>x(W.target.value),rows:2,className:"bg-surface-2 border-border/60 resize-none"})]})]})]}),C.jsxs(kt,{className:"bg-card border-border/60",children:[C.jsx(dr,{className:"pb-3",children:C.jsx(cr,{className:"text-sm font-semibold text-foreground",children:"Image"})}),C.jsxs(St,{children:[C.jsx("input",{ref:t,type:"file",accept:"image/*",onChange:ze,className:"hidden"}),_?C.jsxs("div",{className:"relative group",children:[C.jsx("img",{src:_,alt:"Infrastructure preview",className:"w-full rounded-xl border border-border/60 object-cover max-h-72"}),C.jsx("div",{className:"absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center",children:C.jsx(Li,{size:"sm",variant:"secondary",onClick:()=>{T(null),E(null),U(null),M("idle"),re(null),t.current&&(t.current.value="")},className:"bg-surface-2/90 border-border/60",children:"Remove Image"})}),S&&C.jsx("div",{className:"absolute top-2 right-2",children:C.jsx(pr,{className:"bg-surface-2/90 text-foreground text-[10px] border-border/60",children:S.fileName})})]}):C.jsxs("button",{onClick:()=>t.current?.click(),className:"flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-border/60 bg-surface-2/50 p-8 md:p-10 text-center hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-200",children:[C.jsx("div",{className:"flex size-12 items-center justify-center rounded-xl bg-primary/10 mb-3",children:C.jsx(H0,{className:"size-5 text-primary"})}),C.jsx("p",{className:"text-sm font-medium text-foreground",children:"Upload infrastructure image"}),C.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"JPG, PNG, or WebP — Max 10MB"})]})]})]}),C.jsxs("div",{className:"flex gap-3",children:[C.jsx(Li,{onClick:Se,disabled:!ve||z,className:"flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_oklch(0.72_0.15_220_/_0.2)] hover:shadow-[0_0_24px_oklch(0.72_0.15_220_/_0.3)] transition-all duration-200",children:z?C.jsxs(C.Fragment,{children:[C.jsx(Vr,{className:"size-4 shrink-0 animate-spin"}),C.jsx("span",{className:"truncate",children:G||"Analyzing..."})]}):C.jsxs(C.Fragment,{children:[C.jsx(K0,{className:"size-4"}),"Analyze with AI"]})}),C.jsx(Li,{variant:"outline",onClick:Ae,className:"border-border/60 bg-surface-2 hover:bg-surface-3",children:"Clear"})]})]}),C.jsxs("div",{className:"space-y-4 md:space-y-5",children:[!w&&!z&&C.jsx(kt,{className:"bg-card border-border/60",children:C.jsxs(St,{className:"py-16 md:py-24 text-center",children:[C.jsx("div",{className:"mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-surface-3",children:C.jsx(q0,{className:"size-6 text-muted-foreground"})}),C.jsx("h3",{className:"font-semibold text-foreground",children:"No analysis results"}),C.jsx("p",{className:"mt-2 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed",children:V?.available?'Select infrastructure type, upload an image, and click "Analyze with AI" to run real inference.':"Upload an image and select infrastructure type. The AI model must be loaded before analysis can run."})]})}),z&&C.jsx(kt,{className:"bg-card border-border/60",children:C.jsxs(St,{className:"py-16 text-center",children:[C.jsx("div",{className:"mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10",children:C.jsx(Vr,{className:"size-6 text-primary animate-spin"})}),C.jsx("h3",{className:"font-semibold text-foreground",children:"Running inference..."}),C.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:G||"Loading model, preprocessing image, running detection"})]})}),w&&C.jsxs(C.Fragment,{children:[!w.modelConnected&&C.jsx("div",{className:"rounded-xl border border-amber-500/20 bg-amber-500/5 p-5",children:C.jsxs("div",{className:"flex items-start gap-3",children:[C.jsx("div",{className:"flex size-9 items-center justify-center rounded-lg bg-amber-500/10 shrink-0 mt-0.5",children:C.jsx(Co,{className:"size-4 text-amber-400"})}),C.jsxs("div",{className:"flex-1",children:[C.jsx("p",{className:"text-sm font-semibold text-amber-300",children:"AI model could not be loaded"}),C.jsx("p",{className:"text-xs text-amber-200/70 mt-1 leading-relaxed",children:w.modelNote}),w.inferenceDetails&&w.inferenceDetails.length>0&&C.jsx("div",{className:"mt-3 rounded-lg bg-amber-500/5 border border-amber-500/10 p-3",children:w.inferenceDetails.map((W,me)=>W?C.jsx("p",{className:"text-[11px] text-amber-200/60 font-mono leading-relaxed",children:W},me):C.jsx("div",{className:"h-1.5"},me))})]})]})}),C.jsx(kt,{className:"bg-card border-border/60",children:C.jsxs(St,{className:"p-3 md:p-4",children:[C.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[w.success?C.jsx("div",{className:"flex size-8 items-center justify-center rounded-lg bg-risk-low/10",children:C.jsx(Io,{className:"size-4 text-risk-low"})}):C.jsx("div",{className:"flex size-8 items-center justify-center rounded-lg bg-risk-critical/10",children:C.jsx(zo,{className:"size-4 text-risk-critical"})}),C.jsxs("div",{children:[C.jsx("p",{className:"text-sm font-semibold text-foreground",children:w.success?"Analysis Complete":"Analysis Failed"}),C.jsx("p",{className:"text-[11px] text-muted-foreground",children:w.modelConnected?`${w.defects.length} defect(s) detected`:"No real inference performed — model not connected"})]})]}),C.jsxs("div",{className:"flex items-center gap-3",children:[R==="saving"&&C.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-primary",children:[C.jsx(Vr,{className:"size-3 animate-spin"}),"Saving..."]}),R==="saved"&&C.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-risk-low",children:[C.jsx(T0,{className:"size-3"}),"Saved to database"]}),R==="save_failed"&&C.jsxs("div",{className:"flex flex-col gap-1 text-xs text-risk-critical",children:[C.jsxs("div",{className:"flex items-center gap-1.5",children:[C.jsx(zo,{className:"size-3 shrink-0"}),"Save failed"]}),F&&C.jsx("p",{className:"text-[10px] text-risk-critical/70 font-mono leading-relaxed",children:F})]}),C.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[C.jsx(U0,{className:"size-3"}),w.processingTimeMs,"ms"]})]})]}),w.inferenceDetails&&w.inferenceDetails.length>0&&w.modelConnected&&C.jsxs("div",{className:"mt-3 pt-3 border-t border-border/40",children:[C.jsx("p",{className:"text-[11px] font-semibold text-muted-foreground mb-1.5",children:"Inference Details"}),w.inferenceDetails.map((W,me)=>W?C.jsx("p",{className:"text-[11px] text-muted-foreground font-mono",children:W},me):C.jsx("div",{className:"h-1"},me))]})]})}),C.jsxs(kt,{className:"bg-card border-border/60",children:[C.jsx(dr,{className:"pb-3",children:C.jsxs(cr,{className:"text-sm font-semibold text-foreground",children:["Detected Objects",C.jsxs("span",{className:"ml-2 text-muted-foreground font-normal",children:["(",w.defects.length,")"]})]})}),C.jsx(St,{children:w.defects.length===0?C.jsx("div",{className:"py-8 text-center",children:C.jsx("p",{className:"text-sm text-muted-foreground",children:w.modelConnected?"No relevant objects detected in this image":"Load the AI model to see detections"})}):C.jsx("div",{className:"space-y-2.5",children:w.defects.map((W,me)=>C.jsxs("div",{className:"rounded-xl border border-border/50 bg-surface-2 p-4",children:[C.jsxs("div",{className:"flex items-start justify-between gap-3",children:[C.jsxs("div",{className:"flex-1",children:[C.jsx("p",{className:"font-semibold text-sm text-foreground",children:O0(W.defectType)}),C.jsxs("p",{className:"text-[11px] text-muted-foreground mt-0.5",children:["Confidence:"," ",(W.confidence*100).toFixed(1),"%"]}),W.description&&C.jsx("p",{className:"text-[11px] text-muted-foreground/60 mt-1 leading-relaxed",children:W.description})]}),C.jsx(pr,{variant:"outline",className:`text-[10px] font-semibold border-0 shrink-0 ${R0(W.severity)}`,children:W.severity.toUpperCase()})]}),W.bboxX!==void 0&&C.jsxs("div",{className:"mt-2.5 pt-2.5 border-t border-border/30",children:[C.jsxs("p",{className:"text-[11px] text-muted-foreground font-mono",children:["BBox: (",W.bboxX,", ",W.bboxY,") → (",W.bboxX+W.bboxWidth,","," ",W.bboxY+W.bboxHeight,")"]}),C.jsxs("p",{className:"text-[11px] text-muted-foreground/60 font-mono mt-0.5",children:["Size: ",W.bboxWidth,"×",W.bboxHeight,"px"]})]})]},me))})})]}),w.modelConnected&&w.defects.length>0&&C.jsxs(C.Fragment,{children:[C.jsxs(kt,{className:"bg-card border-border/60",children:[C.jsx(dr,{className:"pb-3",children:C.jsxs(cr,{className:"text-sm font-semibold text-foreground flex items-center gap-2",children:[C.jsx(V0,{className:"size-4 text-primary"}),"Risk Assessment"]})}),C.jsxs(St,{className:"space-y-5",children:[C.jsxs("div",{className:"grid grid-cols-3 gap-2 md:gap-3",children:[C.jsxs("div",{className:"col-span-1 rounded-xl bg-surface-2 p-3 md:p-4 text-center border border-border/30",children:[C.jsx("p",{className:"text-2xl md:text-4xl font-bold tracking-tight text-foreground",children:w.risk.riskScore}),C.jsx("p",{className:"text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mt-1",children:"Risk Score"})]}),C.jsxs("div",{className:"rounded-xl bg-surface-2 p-4 text-center border border-border/30 flex flex-col items-center justify-center",children:[C.jsx(pr,{variant:"outline",className:`text-sm font-bold border-0 ${D0(w.risk.riskCategory)}`,children:w.risk.riskCategory}),C.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mt-2",children:"Category"})]}),C.jsxs("div",{className:"rounded-xl bg-surface-2 p-4 text-center border border-border/30 flex flex-col items-center justify-center",children:[C.jsx(pr,{variant:"outline",className:`text-sm font-bold border-0 ${B0(w.risk.priority)}`,children:w.risk.priority}),C.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mt-2",children:"Priority"})]})]}),C.jsxs("div",{children:[C.jsxs("div",{className:"flex justify-between text-[11px] text-muted-foreground mb-1.5",children:[C.jsx("span",{children:"0"}),C.jsx("span",{className:"font-medium",children:"Risk Score"}),C.jsx("span",{children:"100"})]}),C.jsx("div",{className:"h-2.5 rounded-full bg-surface-3 overflow-hidden",children:C.jsx("div",{className:`h-full rounded-full transition-all duration-700 ${w.risk.riskScore>=75?"bg-risk-critical":w.risk.riskScore>=50?"bg-risk-high":w.risk.riskScore>=25?"bg-risk-moderate":"bg-risk-low"}`,style:{width:`${w.risk.riskScore}%`}})})]})]})]}),C.jsxs(kt,{className:"bg-card border-border/60",children:[C.jsx(dr,{className:"pb-3",children:C.jsxs(cr,{className:"text-sm font-semibold text-foreground flex items-center gap-2",children:[C.jsx(S0,{className:"size-4 text-primary"}),"AI Explanation"]})}),C.jsxs(St,{className:"space-y-4",children:[C.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:w.risk.explanation}),C.jsxs("div",{className:"rounded-xl bg-primary/5 border border-primary/15 p-4",children:[C.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-primary mb-1.5",children:"Recommended Action"}),C.jsx("p",{className:"text-sm text-foreground leading-relaxed",children:w.risk.recommendedAction})]}),w.risk.factors.length>0&&C.jsxs("div",{children:[C.jsxs("button",{onClick:()=>Z(!q),className:"flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors",children:["Why this risk?",q?C.jsx(N0,{className:"size-4"}):C.jsx(A0,{className:"size-4"})]}),q&&C.jsx("div",{className:"mt-3 space-y-2",children:w.risk.factors.map((W,me)=>C.jsxs("div",{className:"rounded-xl border border-border/50 bg-surface-2 p-3.5",children:[C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsx("p",{className:"text-sm font-medium text-foreground",children:W.name}),C.jsxs("span",{className:"text-[11px] font-semibold text-primary",children:["+",W.impact," pts"]})]}),C.jsx("p",{className:"text-xs text-muted-foreground mt-1 leading-relaxed",children:W.description})]},me))})]}),C.jsx("div",{className:"rounded-xl border border-amber-500/20 bg-amber-500/5 p-4",children:C.jsxs("div",{className:"flex items-start gap-2",children:[C.jsx(x0,{className:"size-3.5 mt-0.5 text-amber-400 shrink-0"}),C.jsx("p",{className:"text-xs text-amber-200/80 leading-relaxed",children:w.risk.disclaimer})]})})]})]})]}),C.jsx("p",{className:"text-[11px] text-muted-foreground/60 italic",children:w.modelNote})]})]})]})]})})}function Wb(e){switch(e.split(".").pop()?.toLowerCase()){case"jpg":case"jpeg":return"image/jpeg";case"png":return"image/png";case"webp":return"image/webp";case"gif":return"image/gif";case"bmp":return"image/bmp";default:return null}}function Vb(e){return new Promise((t,r)=>{const i=new FileReader;i.onload=()=>t(i.result),i.onerror=()=>{const a=i.error?.message||i.error?.name||"unknown error";r(new Error(`Failed to read file: ${a}`))},i.readAsDataURL(e)})}export{a_ as default};
