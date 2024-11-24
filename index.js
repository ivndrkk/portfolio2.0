import{A as v,S as w,a as b,i as j}from"./assets/vendor-D1x2inJp.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#about-me"),n=document.querySelector("#projects"),s=document.querySelector("#work-together");document.querySelectorAll(".nav-link").forEach(o=>{o.addEventListener("click",t=>{t.preventDefault(),o.textContent.includes("About Me")?e.scrollIntoView({behavior:"smooth"}):o.textContent.includes("Projects")?n.scrollIntoView({behavior:"smooth"}):o.textContent.includes("Contacts")&&s.scrollIntoView({behavior:"smooth"})})})});const x=document.querySelector(".hero-button");x.addEventListener("click",function(e){e.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const y="/portfolio2.0/assets/project-1-DDSEQAry.jpg",k="/portfolio2.0/assets/project-12x-CXqOLe9D.jpg",E="/portfolio2.0/assets/project-2-CnZ2isJx.jpg",L="/portfolio2.0/assets/project-22x-yOt2G9ZS.jpg",S="/portfolio2.0/assets/project-3-CBpo9lGd.jpg",I="/portfolio2.0/assets/project-32x-DzBqeYZt.jpg",A="/portfolio2.0/assets/project-4-8O6LE6YW.jpg",C="/portfolio2.0/assets/project-42x-CM03vmRJ.jpg",M="/portfolio2.0/assets/project-5-9d7B4pnA.jpg",q="/portfolio2.0/assets/project-52x-D2rCJnjo.jpg",B="/portfolio2.0/assets/project-6-C1hSzmeH.jpg",J="/portfolio2.0/assets/project-62x-DCrUwTXX.jpg",P="/portfolio2.0/assets/project-7-BGE4RsUG.jpg",T="/portfolio2.0/assets/project-72x-DCVLQ1gE.jpg",D="/portfolio2.0/assets/project-8-DOlwvTCj.jpg",G="/portfolio2.0/assets/project-82x-D-BoNZSb.jpg",O="/portfolio2.0/assets/project-9-C4ztqAgA.jpg",N="/portfolio2.0/assets/project-92x-DJRCm-Uy.jpg",$="/portfolio2.0/assets/project-10-7G_bG3ud.jpg",R="/portfolio2.0/assets/project-102x-BrUkPh2C.jpg",V="/portfolio2.0/assets/icons-CJvFrlhT.svg",l=[{title:"Wallet webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":M,"2x":q}},{title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":A,"2x":C}},{title:"English Exellence website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":O,"2x":N}},{title:"Power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":y,"2x":k}},{title:"Mimino website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":E,"2x":L}},{title:"Fruitbox online store",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":D,"2x":G}},{title:"Vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":S,"2x":I}},{title:"Сhego jewelry website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":B,"2x":J}},{title:"Energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":P,"2x":T}},{title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":$,"2x":R}}];let c=0;const H=3,F=document.getElementById("myProjectsList"),d=document.getElementById("load-more-btn");function U(e){return`
    <li class="my-projects-item">
      <div class="image-container">
        <picture>
        <source
          srcset="
            ${e.images["1x"]} 1x,
            ${e.images["2x"]} 2x
          "
          media="(min-width: 320px)"
        />
        <img
          class="my-projects-img"
          src="${e.images["1x"]}"
          alt="${e.title}"
        />
      </picture>
       </div>
      <p class="my-projects-technologies">${e.technologies}</p>
      <div class="my-projects-card-row">
        <h3 class="my-projects-names">${e.title}</h3>
        <a class="my-projects-link" href="${e.link}" target="_blank">
          Visit
          <svg class="icon-arrow" width="24" height="24">
            <use href="${V}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `}function p(){const e=l.length-c,n=Math.min(H,e);for(let s=0;s<n;s++){const i=U(l[c]);F.insertAdjacentHTML("beforeend",i),c++}c>=l.length&&(d.style.display="none")}d.addEventListener("click",p);p();document.addEventListener("DOMContentLoaded",()=>{new v(".accordion-container",{duration:400,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".reviews-list");function n(s){return s.map(({author:i,avatar_url:o,review:t})=>`
        <li class="swiper-slide" id="reviews-list-item">
          <p class="reviews-item-text">${t}</p>
          <div class="img-title-wraper">
            <img class="reviews-item-img"
                 src=${o}
                 alt="image of ${i}"
                 width="40"
                 height="40">
            <h3 class="reviews-item-title">${i}</h3>
          </div>
        </li>`).join("")}fetch("https://portfolio-js.b.goit.study/api/reviews").then(s=>{if(!s.ok)throw new Error("Not found");return s.json()}).then(s=>{e.insertAdjacentHTML("beforeend",n(s));const i=new w(".swiper-container",{slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},simulateTouch:!0,autoHeight:!1,on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}}),o=document.querySelector("#swiper-button-next"),t=document.querySelector("#swiper-button-prev");o.addEventListener("click",()=>{i.slideNext()}),t.addEventListener("click",()=>{i.slidePrev()})}).catch(s=>{e.insertAdjacentHTML("beforeend",`<li>
          <p>${s.message}</p>
        </li>`)})});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contactForm"),n=document.querySelector(".wt-popup"),s="https://portfolio-js.b.goit.study/api/requests",i=t=>{if(t){const r=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.setProperty("--scrollbar-width",`${r}px`),document.body.classList.add("wt-popup-open"),n.style.display="flex"}else document.body.classList.remove("wt-popup-open"),n.style.display="none",document.documentElement.style.setProperty("--scrollbar-width","0px")};document.querySelector(".wt-close-btn").addEventListener("click",()=>{i(!1)}),window.addEventListener("click",t=>{t.target===n&&i(!1)}),window.addEventListener("keydown",t=>{t.key==="Escape"&&i(!1)}),e.addEventListener("submit",async t=>{t.preventDefault();const r=document.getElementById("email").value,h=document.getElementById("message").value,f={email:r,comment:h};try{if((await b.post(s,f,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)i(!0),e.reset();else throw new Error("Unexpected response status")}catch(a){console.error("Error submitting form:",a),j.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const o=document.getElementById("email");o.addEventListener("input",()=>{const t=o.nextElementSibling.nextElementSibling;o.validity.valid?t.style.display="none":t.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),n=document.querySelector(".menu-icon-close"),s=document.querySelector(".mob-menu"),i=document.querySelectorAll(".mob-nav-link");function o(){s.classList.add("is-open"),e.hidden=!0,n.hidden=!1}function t(){s.classList.remove("is-open"),e.hidden=!1,n.hidden=!0}e==null||e.addEventListener("click",o),n==null||n.addEventListener("click",t),i.forEach(r=>{r.addEventListener("click",t)})});function W(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#E4E5E6"/>
      <circle cx="12" cy="12" r="10" fill="#00B068"/>
    </svg>
  `}function Z(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#292929"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 21.1679C35.5318 19.6248 38 16.1006 38 12C38 7.89936 35.5318 4.3752 32 2.83209C33.2249 2.29689 34.5778 2 36 2C41.5228 2 46 6.47715 46 12C46 17.5228 41.5228 22 36 22C34.5778 22 33.2249 21.7031 32 21.1679Z" fill="#00B068"/>
    </svg>
  `}function u(){const e=document.documentElement.getAttribute("data-theme"),n=document.getElementById("themeIcon");n.innerHTML=e==="light"?W():Z()}function z(){const e=document.documentElement;e.getAttribute("data-theme")==="light"?(e.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(e.setAttribute("data-theme","light"),localStorage.setItem("theme","light")),u()}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("theme"),n=document.documentElement;e?n.setAttribute("data-theme",e):n.setAttribute("data-theme","light"),u()});document.querySelector("#themeToggleButton").addEventListener("click",z);const X=document.querySelectorAll(".ac-trigger");function m(e){X.forEach(n=>{const s=n.querySelector(".icon-1"),i=n.querySelector(".icon-2");s&&s.remove(),i&&i.remove();const o=e==="dark"?"#F0F0F0":"#292929",t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("class","icon-1"),t.setAttribute("width","24"),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.innerHTML=`
      <path d="M18 9L12 15L6 9" stroke="${o}" stroke-width="2" stroke-linecap="round" />
    `;const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("class","icon-2"),r.setAttribute("width","24"),r.setAttribute("height","24"),r.setAttribute("viewBox","0 0 24 24"),r.setAttribute("fill","none"),r.innerHTML=`
      <path d="M18 15L12 9L6 15" stroke="${o}" stroke-width="2" stroke-linecap="round" />
    `,n.appendChild(t),n.appendChild(r)})}function g(){return document.documentElement.getAttribute("data-theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}const _=new MutationObserver(()=>{const e=g();m(e)});_.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});m(g());
//# sourceMappingURL=index.js.map
