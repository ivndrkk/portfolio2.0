import{A as h,S as f,a as v,i as j}from"./assets/vendor-D1x2inJp.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#about-me"),t=document.querySelector("#projects"),i=document.querySelector("#work-together");document.querySelectorAll(".nav-link").forEach(o=>{o.addEventListener("click",s=>{s.preventDefault(),o.textContent.includes("About Me")?e.scrollIntoView({behavior:"smooth"}):o.textContent.includes("Projects")?t.scrollIntoView({behavior:"smooth"}):o.textContent.includes("Contacts")&&i.scrollIntoView({behavior:"smooth"})})})});const w=document.querySelector(".hero-button");w.addEventListener("click",function(e){e.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const x="/portfolio2.0/assets/project-1-DDSEQAry.jpg",y="/portfolio2.0/assets/project-12x-CXqOLe9D.jpg",b="/portfolio2.0/assets/project-2-CnZ2isJx.jpg",E="/portfolio2.0/assets/project-22x-yOt2G9ZS.jpg",S="/portfolio2.0/assets/project-3-CBpo9lGd.jpg",L="/portfolio2.0/assets/project-32x-DzBqeYZt.jpg",k="/portfolio2.0/assets/project-4-8O6LE6YW.jpg",I="/portfolio2.0/assets/project-42x-CM03vmRJ.jpg",C="/portfolio2.0/assets/project-5-9d7B4pnA.jpg",M="/portfolio2.0/assets/project-52x-D2rCJnjo.jpg",q="/portfolio2.0/assets/project-6-C1hSzmeH.jpg",J="/portfolio2.0/assets/project-62x-DCrUwTXX.jpg",A="/portfolio2.0/assets/project-7-BGE4RsUG.jpg",B="/portfolio2.0/assets/project-72x-DCVLQ1gE.jpg",D="/portfolio2.0/assets/project-8-DOlwvTCj.jpg",G="/portfolio2.0/assets/project-82x-D-BoNZSb.jpg",P="/portfolio2.0/assets/project-9-C4ztqAgA.jpg",T="/portfolio2.0/assets/project-92x-DJRCm-Uy.jpg",O="/portfolio2.0/assets/project-10-7G_bG3ud.jpg",N="/portfolio2.0/assets/project-102x-BrUkPh2C.jpg",R="/portfolio2.0/assets/icons-CJvFrlhT.svg",l=[{title:"Wallet webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":C,"2x":M}},{title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":k,"2x":I}},{title:"English Exellence website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":P,"2x":T}},{title:"Power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":x,"2x":y}},{title:"Mimino website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":b,"2x":E}},{title:"Fruitbox online store",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":D,"2x":G}},{title:"Vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":S,"2x":L}},{title:"Сhego jewelry website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":q,"2x":J}},{title:"Energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":A,"2x":B}},{title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":O,"2x":N}}];let c=0;const $=3,H=document.getElementById("myProjectsList"),p=document.getElementById("load-more-btn");function V(e){return`
    <li class="my-projects-item">
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
      <p class="my-projects-technologies">${e.technologies}</p>
      <div class="my-projects-card-row">
        <h3 class="my-projects-names">${e.title}</h3>
        <a class="my-projects-link" href="${e.link}" target="_blank">
          Visit
          <svg class="icon-arrow" width="24" height="24">
            <use href="${R}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `}function u(){const e=l.length-c,t=Math.min($,e);for(let i=0;i<t;i++){const n=V(l[c]);H.insertAdjacentHTML("beforeend",n),c++}c>=l.length&&(p.style.display="none")}p.addEventListener("click",u);u();document.addEventListener("DOMContentLoaded",()=>{new h(".accordion-container",{duration:400,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".reviews-list");fetch("https://portfolio-js.b.goit.study/api/reviews").then(i=>{if(!i.ok)throw new Error("Not found");return i.json()}).then(i=>{e.insertAdjacentHTML("beforeend",t(i)),new f(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,slidesPerView:1,spaceBetween:32,slidesPerGroup:1,breakpoints:{1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},simulateTouch:!0,on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}}),d(),window.addEventListener("resize",d)}).catch(i=>{e.insertAdjacentHTML("beforeend",`<li>
      <p>${i}</p>
      </li>
      `),console.log(i)});function t(i){return i.map(({author:n,avatar_url:o,review:s})=>`
     <li class="swiper-slide reviews-list-item">
    <p class="reviews-item-text">${s}</p>
    <div class="img-title-wraper">
    <img class="reviews-item-img"
    src=${o}
    alt="image of ${n}"
    width="40"
    height="40">
    <h3 class="reviews-item-title">${n}</h3>
    </div>
    </li>
      `).join("")}});function d(){if(window.innerWidth>=1280){const e=document.querySelectorAll(".swiper-slide");let t=0;e.forEach(i=>{let n=i.offsetHeight;n>t&&(t=n)}),e.forEach(i=>{i.style.height=`${t}px`})}else document.querySelectorAll(".swiper-slide").forEach(t=>{t.style.height="auto"})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contactForm"),t=document.querySelector(".wt-popup"),i="https://portfolio-js.b.goit.study/api/requests";document.querySelector(".wt-close-btn").addEventListener("click",()=>{t.style.display="none"}),window.addEventListener("click",o=>{o.target===t&&(t.style.display="none")}),e.addEventListener("submit",async o=>{o.preventDefault();const s=document.getElementById("email").value,r=document.getElementById("message").value,g={email:s,comment:r};try{if((await v.post(i,g,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)t.style.display="flex",e.reset();else throw new Error("Unexpected response status")}catch(a){console.error("Error submitting form:",a),j.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const n=document.getElementById("email");n.addEventListener("input",()=>{const o=n.nextElementSibling.nextElementSibling;n.validity.valid?o.style.display="none":o.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),t=document.querySelector(".menu-icon-close"),i=document.querySelector(".mob-menu"),n=document.querySelectorAll(".mob-nav-link");function o(){i.classList.add("is-open"),e.hidden=!0,t.hidden=!1}function s(){i.classList.remove("is-open"),e.hidden=!1,t.hidden=!0}e==null||e.addEventListener("click",o),t==null||t.addEventListener("click",s),n.forEach(r=>{r.addEventListener("click",s)})});function U(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#E4E5E6"/>
      <circle cx="12" cy="12" r="10" fill="#00B068"/>
    </svg>
  `}function z(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#292929"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 21.1679C35.5318 19.6248 38 16.1006 38 12C38 7.89936 35.5318 4.3752 32 2.83209C33.2249 2.29689 34.5778 2 36 2C41.5228 2 46 6.47715 46 12C46 17.5228 41.5228 22 36 22C34.5778 22 33.2249 21.7031 32 21.1679Z" fill="#00B068"/>
    </svg>
  `}function m(){const e=document.documentElement.getAttribute("data-theme"),t=document.getElementById("themeIcon");t.innerHTML=e==="light"?U():z()}function F(){const e=document.documentElement;e.getAttribute("data-theme")==="light"?(e.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(e.setAttribute("data-theme","light"),localStorage.setItem("theme","light")),m()}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("theme"),t=document.documentElement;e?t.setAttribute("data-theme",e):t.setAttribute("data-theme","light"),m()});document.querySelector("#themeToggleButton").addEventListener("click",F);
//# sourceMappingURL=index.js.map
