var u=Object.defineProperty;var m=(o,t,r)=>t in o?u(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;var d=(o,t,r)=>(m(o,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let a;const p={lat:41.85,lng:-87.65};class f{constructor(t,r,c){d(this,"map_");d(this,"center_");this.map_=r,this.center_=new google.maps.LatLng(c),t.style.clear="both";const e=document.createElement("button");e.id="goCenterUI",e.title="Click to recenter the map",t.appendChild(e);const n=document.createElement("div");n.id="goCenterText",n.innerHTML="Center Map",e.appendChild(n);const i=document.createElement("button");i.id="setCenterUI",i.title="Click to change the center of the map",t.appendChild(i);const l=document.createElement("div");l.id="setCenterText",l.innerHTML="Set Center",i.appendChild(l),e.addEventListener("click",()=>{const s=this.center_;this.map_.setCenter(s)}),i.addEventListener("click",()=>{const s=this.map_.getCenter();s&&(this.center_=s)})}}function g(){a=new google.maps.Map(document.getElementById("map"),{zoom:12,center:p});const o=document.createElement("div");new f(o,a,p),o.index=1,o.style.paddingTop="10px",a.controls[google.maps.ControlPosition.TOP_CENTER].push(o)}window.initMap=g;
