import{A as g,S as h,a as f,i as v}from"./assets/vendor-D1x2inJp.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#about-me"),o=document.querySelector("#projects"),n=document.querySelector("#work-together");document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",i=>{i.preventDefault(),e.textContent.includes("About Me")?t.scrollIntoView({behavior:"smooth"}):e.textContent.includes("Projects")?o.scrollIntoView({behavior:"smooth"}):e.textContent.includes("Contacts")&&n.scrollIntoView({behavior:"smooth"})})})});const j=document.querySelector(".hero-button");j.addEventListener("click",function(t){t.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const x="/portfolio2.0/assets/project-1-DDSEQAry.jpg",w="/portfolio2.0/assets/project-12x-CXqOLe9D.jpg",y="/portfolio2.0/assets/project-2-CnZ2isJx.jpg",b="/portfolio2.0/assets/project-22x-yOt2G9ZS.jpg",E="/portfolio2.0/assets/project-3-CBpo9lGd.jpg",k="/portfolio2.0/assets/project-32x-DzBqeYZt.jpg",S="/portfolio2.0/assets/project-4-8O6LE6YW.jpg",L="/portfolio2.0/assets/project-42x-CM03vmRJ.jpg",I="/portfolio2.0/assets/project-5-9d7B4pnA.jpg",C="/portfolio2.0/assets/project-52x-D2rCJnjo.jpg",M="/portfolio2.0/assets/project-6-C1hSzmeH.jpg",B="/portfolio2.0/assets/project-62x-DCrUwTXX.jpg",J="/portfolio2.0/assets/project-7-BGE4RsUG.jpg",q="/portfolio2.0/assets/project-72x-DCVLQ1gE.jpg",A="/portfolio2.0/assets/project-8-DOlwvTCj.jpg",P="/portfolio2.0/assets/project-82x-D-BoNZSb.jpg",D="/portfolio2.0/assets/project-9-C4ztqAgA.jpg",G="/portfolio2.0/assets/project-92x-DJRCm-Uy.jpg",T="/portfolio2.0/assets/project-10-7G_bG3ud.jpg",O="/portfolio2.0/assets/project-102x-BrUkPh2C.jpg",N="/portfolio2.0/assets/icons-CJvFrlhT.svg",l=[{title:"Wallet webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":I,"2x":C}},{title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":S,"2x":L}},{title:"English Exellence website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":D,"2x":G}},{title:"Power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":x,"2x":w}},{title:"Mimino website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":y,"2x":b}},{title:"Fruitbox online store",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":A,"2x":P}},{title:"Vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":E,"2x":k}},{title:"Сhego jewelry website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":M,"2x":B}},{title:"Energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":J,"2x":q}},{title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":T,"2x":O}}];let c=0;const R=3,$=document.getElementById("myProjectsList"),d=document.getElementById("load-more-btn");function H(t){return`
    <li class="my-projects-item">
      <div class="image-container">
        <picture>
        <source
          srcset="
            ${t.images["1x"]} 1x,
            ${t.images["2x"]} 2x
          "
          media="(min-width: 320px)"
        />
        <img
          class="my-projects-img"
          src="${t.images["1x"]}"
          alt="${t.title}"
        />
      </picture>
       </div>
      <p class="my-projects-technologies">${t.technologies}</p>
      <div class="my-projects-card-row">
        <h3 class="my-projects-names">${t.title}</h3>
        <a class="my-projects-link" href="${t.link}" target="_blank">
          Visit
          <svg class="icon-arrow" width="24" height="24">
            <use href="${N}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `}function p(){const t=l.length-c,o=Math.min(R,t);for(let n=0;n<o;n++){const s=H(l[c]);$.insertAdjacentHTML("beforeend",s),c++}c>=l.length&&(d.style.display="none")}d.addEventListener("click",p);p();document.addEventListener("DOMContentLoaded",()=>{new g(".accordion-container",{duration:400,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".reviews-list");function o(s){return s.map(({author:e,avatar_url:i,review:r})=>`
        <li class="swiper-slide reviews-list-item">
          <p class="reviews-item-text">${r}</p>
          <div class="img-title-wraper">
            <img class="reviews-item-img"
                 src=${i}
                 alt="image of ${e}"
                 width="40"
                 height="40">
            <h3 class="reviews-item-title">${e}</h3>
          </div>
        </li>`).join("")}function n(){const s=document.querySelectorAll(".swiper-slide");if(window.innerWidth>=1280){let e=0;s.forEach(i=>{const r=i.offsetHeight;r>e&&(e=r)}),s.forEach(i=>{i.style.height=`${e}px`})}else s.forEach(e=>{e.style.height="auto"})}fetch("https://portfolio-js.b.goit.study/api/reviews").then(s=>{if(!s.ok)throw new Error("Not found");return s.json()}).then(s=>{t.insertAdjacentHTML("beforeend",o(s));const e=new h(".swiper-container",{slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},simulateTouch:!0,autoHeight:!0}),i=document.querySelector("#swiper-button-next"),r=document.querySelector("#swiper-button-prev");i.addEventListener("click",()=>{e.slideNext()}),r.addEventListener("click",()=>{e.slidePrev()}),n(),window.addEventListener("resize",n)}).catch(s=>{t.insertAdjacentHTML("beforeend",`<li>
          <p>${s.message}</p>
        </li>`)})});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("contactForm"),o=document.querySelector(".wt-popup"),n="https://portfolio-js.b.goit.study/api/requests";document.querySelector(".wt-close-btn").addEventListener("click",()=>{o.style.display="none"}),window.addEventListener("click",e=>{e.target===o&&(o.style.display="none")}),t.addEventListener("submit",async e=>{e.preventDefault();const i=document.getElementById("email").value,r=document.getElementById("message").value,u={email:i,comment:r};try{if((await f.post(n,u,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)o.style.display="flex",t.reset();else throw new Error("Unexpected response status")}catch(a){console.error("Error submitting form:",a),v.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const s=document.getElementById("email");s.addEventListener("input",()=>{const e=s.nextElementSibling.nextElementSibling;s.validity.valid?e.style.display="none":e.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".burger"),o=document.querySelector(".menu-icon-close"),n=document.querySelector(".mob-menu"),s=document.querySelectorAll(".mob-nav-link");function e(){n.classList.add("is-open"),t.hidden=!0,o.hidden=!1}function i(){n.classList.remove("is-open"),t.hidden=!1,o.hidden=!0}t==null||t.addEventListener("click",e),o==null||o.addEventListener("click",i),s.forEach(r=>{r.addEventListener("click",i)})});function V(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#E4E5E6"/>
      <circle cx="12" cy="12" r="10" fill="#00B068"/>
    </svg>
  `}function U(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#292929"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 21.1679C35.5318 19.6248 38 16.1006 38 12C38 7.89936 35.5318 4.3752 32 2.83209C33.2249 2.29689 34.5778 2 36 2C41.5228 2 46 6.47715 46 12C46 17.5228 41.5228 22 36 22C34.5778 22 33.2249 21.7031 32 21.1679Z" fill="#00B068"/>
    </svg>
  `}function m(){const t=document.documentElement.getAttribute("data-theme"),o=document.getElementById("themeIcon");o.innerHTML=t==="light"?V():U()}function z(){const t=document.documentElement;t.getAttribute("data-theme")==="light"?(t.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(t.setAttribute("data-theme","light"),localStorage.setItem("theme","light")),m()}document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("theme"),o=document.documentElement;t?o.setAttribute("data-theme",t):o.setAttribute("data-theme","light"),m()});document.querySelector("#themeToggleButton").addEventListener("click",z);
//# sourceMappingURL=index.js.map
