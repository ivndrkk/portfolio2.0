import{a as d,i as a}from"./assets/vendor-DM1_jADJ.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=document.querySelector(".hero-button");u.addEventListener("click",function(o){o.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("contactForm"),n=document.querySelector(".wt-popup"),i="https://portfolio-js.b.goit.study/api/requests";document.querySelector(".wt-close-btn").addEventListener("click",()=>{n.style.display="none"}),window.addEventListener("click",e=>{e.target===n&&(n.style.display="none")}),o.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("email").value,s=document.getElementById("message").value,l={email:t,comment:s};try{if((await d.post(i,l,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)n.style.display="flex",o.reset();else throw new Error("Unexpected response status")}catch(c){console.error("Error submitting form:",c),a.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const r=document.getElementById("email");r.addEventListener("input",()=>{const e=r.nextElementSibling.nextElementSibling;r.validity.valid?e.style.display="none":e.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".burger-button"),n=document.querySelector(".menu-icon-close"),i=document.querySelector(".mob-menu"),r=document.querySelectorAll(".mob-nav-link");function e(){i.classList.add("is-open"),o.hidden=!0,n.hidden=!1}function t(){i.classList.remove("is-open"),o.hidden=!1,n.hidden=!0}o==null||o.addEventListener("click",e),n==null||n.addEventListener("click",t),r.forEach(s=>{s.addEventListener("click",t)})});
//# sourceMappingURL=index.js.map
