(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"svg/ny1-fb7840b87a437bba6d59.svg",n=((e="Hello world")=>{const n=document.createElement("div");n.textContent="red",n.className="rounded bg-red-100 border max-w-md m-4 p-4";const c=document.createElement("div");c.textContent="green",c.className="green";const o=document.createElement("div");o.textContent="blue",o.className="blue";const r=document.createElement("div");r.textContent="cyan",r.className="cyan";const a=document.createElement("div");a.textContent="margenta",a.className="margenta";const d=document.createElement("div");d.textContent="cat",d.className="cat";const m=document.createElement("img");m.className="img-ny1",m.src=t;const i=document.createElement("div");return i.className="div-copy-left",i.textContent="div-copy-left",{red:n,green:c,blue:o,cyan:r,margenta:a,cat:d,imgCopyLeft:i,imgNy1:m}})();console.log(n),document.body.appendChild(n.red),document.body.appendChild(n.green),document.body.appendChild(n.cat),document.body.appendChild(n.imgCopyLeft),document.body.appendChild(n.imgNy1)})();