import{A as v,S as w,a as j,i as x}from"./assets/vendor-D1x2inJp.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("#about-me"),i=document.querySelector("#projects"),r=document.querySelector("#work-together");document.querySelectorAll(".nav-link").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),t.textContent.includes("About Me")?o.scrollIntoView({behavior:"smooth"}):t.textContent.includes("Projects")?i.scrollIntoView({behavior:"smooth"}):t.textContent.includes("Contacts")&&r.scrollIntoView({behavior:"smooth"})})})});const y=document.querySelector(".hero-button");y.addEventListener("click",function(o){o.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const b="/portfolio2.0/assets/project-1-DDSEQAry.jpg",E="/portfolio2.0/assets/project-12x-CXqOLe9D.jpg",k="/portfolio2.0/assets/project-2-CnZ2isJx.jpg",L="/portfolio2.0/assets/project-22x-yOt2G9ZS.jpg",S="/portfolio2.0/assets/project-3-CBpo9lGd.jpg",I="/portfolio2.0/assets/project-32x-DzBqeYZt.jpg",A="/portfolio2.0/assets/project-4-8O6LE6YW.jpg",C="/portfolio2.0/assets/project-42x-CM03vmRJ.jpg",M="/portfolio2.0/assets/project-5-9d7B4pnA.jpg",B="/portfolio2.0/assets/project-52x-D2rCJnjo.jpg",q="/portfolio2.0/assets/project-6-C1hSzmeH.jpg",J="/portfolio2.0/assets/project-62x-DCrUwTXX.jpg",P="/portfolio2.0/assets/project-7-BGE4RsUG.jpg",T="/portfolio2.0/assets/project-72x-DCVLQ1gE.jpg",D="/portfolio2.0/assets/project-8-DOlwvTCj.jpg",G="/portfolio2.0/assets/project-82x-D-BoNZSb.jpg",O="/portfolio2.0/assets/project-9-C4ztqAgA.jpg",N="/portfolio2.0/assets/project-92x-DJRCm-Uy.jpg",$="/portfolio2.0/assets/project-10-7G_bG3ud.jpg",H="/portfolio2.0/assets/project-102x-BrUkPh2C.jpg",R="/portfolio2.0/assets/icons-CJvFrlhT.svg",l=[{title:"Wallet webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":M,"2x":B}},{title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":A,"2x":C}},{title:"English Exellence website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":O,"2x":N}},{title:"Power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":b,"2x":E}},{title:"Mimino website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":k,"2x":L}},{title:"Fruitbox online store",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":D,"2x":G}},{title:"Vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":S,"2x":I}},{title:"Сhego jewelry website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":q,"2x":J}},{title:"Energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":P,"2x":T}},{title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":$,"2x":H}}];let c=0;const V=3,F=document.getElementById("myProjectsList"),d=document.getElementById("load-more-btn");function U(o){return`
    <li class="my-projects-item">
      <div class="image-container">
        <picture>
        <source
          srcset="
            ${o.images["1x"]} 1x,
            ${o.images["2x"]} 2x
          "
          media="(min-width: 320px)"
        />
        <img
          class="my-projects-img"
          src="${o.images["1x"]}"
          alt="${o.title}"
        />
      </picture>
       </div>
      <p class="my-projects-technologies">${o.technologies}</p>
      <div class="my-projects-card-row">
        <h3 class="my-projects-names">${o.title}</h3>
        <a class="my-projects-link" href="${o.link}" target="_blank">
          Visit
          <svg class="icon-arrow" width="24" height="24">
            <use href="${R}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `}function p(){const o=l.length-c,i=Math.min(V,o);for(let r=0;r<i;r++){const n=U(l[c]);F.insertAdjacentHTML("beforeend",n),c++}c>=l.length&&(d.style.display="none")}d.addEventListener("click",p);p();document.addEventListener("DOMContentLoaded",()=>{new v(".accordion-container",{duration:400,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".reviews-list");function i(n){return n.map(({author:t,avatar_url:e,review:s})=>`
        <li class="swiper-slide reviews-list-item">
          <p class="reviews-item-text">${s}</p>
          <div class="img-title-wraper">
            <img class="reviews-item-img"
                 src=${e}
                 alt="image of ${t}"
                 width="40"
                 height="40">
            <h3 class="reviews-item-title">${t}</h3>
          </div>
        </li>`).join("")}function r(){const n=document.querySelectorAll(".swiper-slide");if(window.innerWidth>=1280){let t=0;n.forEach(e=>{const s=e.offsetHeight;s>t&&(t=s)}),n.forEach(e=>{e.style.height=`${t}px`})}else n.forEach(t=>{t.style.height="auto"})}fetch("https://portfolio-js.b.goit.study/api/reviews").then(n=>{if(!n.ok)throw new Error("Not found");return n.json()}).then(n=>{o.insertAdjacentHTML("beforeend",i(n));const t=new w(".swiper-container",{slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},simulateTouch:!0,autoHeight:!0}),e=document.querySelector("#swiper-button-next"),s=document.querySelector("#swiper-button-prev");e.addEventListener("click",()=>{t.slideNext()}),s.addEventListener("click",()=>{t.slidePrev()}),r(),window.addEventListener("resize",r)}).catch(n=>{o.insertAdjacentHTML("beforeend",`<li>
          <p>${n.message}</p>
        </li>`)})});document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("contactForm"),i=document.querySelector(".wt-popup"),r="https://portfolio-js.b.goit.study/api/requests",n=e=>{if(e){const s=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.setProperty("--scrollbar-width",`${s}px`),document.body.classList.add("wt-popup-open"),i.style.display="flex"}else document.body.classList.remove("wt-popup-open"),i.style.display="none",document.documentElement.style.setProperty("--scrollbar-width","0px")};document.querySelector(".wt-close-btn").addEventListener("click",()=>{n(!1)}),window.addEventListener("click",e=>{e.target===i&&n(!1)}),window.addEventListener("keydown",e=>{e.key==="Escape"&&n(!1)}),o.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,h=document.getElementById("message").value,f={email:s,comment:h};try{if((await j.post(r,f,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)n(!0),o.reset();else throw new Error("Unexpected response status")}catch(a){console.error("Error submitting form:",a),x.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const t=document.getElementById("email");t.addEventListener("input",()=>{const e=t.nextElementSibling.nextElementSibling;t.validity.valid?e.style.display="none":e.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".burger"),i=document.querySelector(".menu-icon-close"),r=document.querySelector(".mob-menu"),n=document.querySelectorAll(".mob-nav-link");function t(){r.classList.add("is-open"),o.hidden=!0,i.hidden=!1}function e(){r.classList.remove("is-open"),o.hidden=!1,i.hidden=!0}o==null||o.addEventListener("click",t),i==null||i.addEventListener("click",e),n.forEach(s=>{s.addEventListener("click",e)})});function W(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#E4E5E6"/>
      <circle cx="12" cy="12" r="10" fill="#00B068"/>
    </svg>
  `}function z(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#292929"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 21.1679C35.5318 19.6248 38 16.1006 38 12C38 7.89936 35.5318 4.3752 32 2.83209C33.2249 2.29689 34.5778 2 36 2C41.5228 2 46 6.47715 46 12C46 17.5228 41.5228 22 36 22C34.5778 22 33.2249 21.7031 32 21.1679Z" fill="#00B068"/>
    </svg>
  `}function u(){const o=document.documentElement.getAttribute("data-theme"),i=document.getElementById("themeIcon");i.innerHTML=o==="light"?W():z()}function Z(){const o=document.documentElement;o.getAttribute("data-theme")==="light"?(o.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(o.setAttribute("data-theme","light"),localStorage.setItem("theme","light")),u()}document.addEventListener("DOMContentLoaded",()=>{const o=localStorage.getItem("theme"),i=document.documentElement;o?i.setAttribute("data-theme",o):i.setAttribute("data-theme","light"),u()});document.querySelector("#themeToggleButton").addEventListener("click",Z);const X=document.querySelectorAll(".ac-trigger");function m(o){X.forEach(i=>{const r=i.querySelector(".icon-1"),n=i.querySelector(".icon-2");r&&r.remove(),n&&n.remove();const t=o==="dark"?"#F0F0F0":"#292929",e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("class","icon-1"),e.setAttribute("width","24"),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.innerHTML=`
      <path d="M18 9L12 15L6 9" stroke="${t}" stroke-width="2" stroke-linecap="round" />
    `;const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("class","icon-2"),s.setAttribute("width","24"),s.setAttribute("height","24"),s.setAttribute("viewBox","0 0 24 24"),s.setAttribute("fill","none"),s.innerHTML=`
      <path d="M18 15L12 9L6 15" stroke="${t}" stroke-width="2" stroke-linecap="round" />
    `,i.appendChild(e),i.appendChild(s)})}function g(){return document.documentElement.getAttribute("data-theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}const _=new MutationObserver(()=>{const o=g();m(o)});_.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});m(g());
//# sourceMappingURL=index.js.map
