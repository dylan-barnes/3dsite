import*as i from"https://cdn.skypack.dev/three@0.129.0/build/three.module.js";import"https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";import{GLTFLoader as g}from"https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&f(a)}).observe(document,{childList:!0,subtree:!0});function h(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=h(e);fetch(e.href,t)}})();const d=new i.Scene,r=new i.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);let u=window.innerWidth/2,m=window.innerHeight/2,o,w="eye";const y=new g;y.load(`models/${w}/scene.gltf`,function(n){o=n.scene,d.add(o)},function(n){console.log(n.loaded/n.total*100+"% loaded")},function(n){console.error(n)});const s=new i.WebGLRenderer({alpha:!0});s.setSize(window.innerWidth,window.innerHeight);document.getElementById("container3D").appendChild(s.domElement);r.position.z=500;const l=new i.DirectionalLight(16777215,1);l.position.set(500,500,500);l.castShadow=!0;d.add(l);const L=new i.AmbientLight(3355443,1);d.add(L);function p(){requestAnimationFrame(p),o&&w==="eye"&&(o.rotation.y=-3+u/window.innerWidth*3,o.rotation.x=-1.2+m*2.5/window.innerHeight),s.render(d,r)}window.addEventListener("resize",function(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)});document.onmousemove=n=>{u=n.clientX,m=n.clientY};p();
