import{S as g,a as f,i as h}from"./assets/vendor-DsTmQDBr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#about-me"),o=document.querySelector("#projects"),s=document.querySelector("#work-together");document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",i=>{i.preventDefault(),e.textContent.includes("About Me")?t.scrollIntoView({behavior:"smooth"}):e.textContent.includes("Projects")?o.scrollIntoView({behavior:"smooth"}):e.textContent.includes("Contacts")&&s.scrollIntoView({behavior:"smooth"})})})});const j=document.querySelector(".hero-button");j.addEventListener("click",function(t){t.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const v="/portfolio2.0/assets/project-1-DDSEQAry.jpg",x="/portfolio2.0/assets/project-12x-CXqOLe9D.jpg",y="/portfolio2.0/assets/project-2-CnZ2isJx.jpg",w="/portfolio2.0/assets/project-22x-yOt2G9ZS.jpg",b="/portfolio2.0/assets/project-3-CBpo9lGd.jpg",S="/portfolio2.0/assets/project-32x-DzBqeYZt.jpg",E="/portfolio2.0/assets/project-4-8O6LE6YW.jpg",k="/portfolio2.0/assets/project-42x-CM03vmRJ.jpg",L="/portfolio2.0/assets/project-5-9d7B4pnA.jpg",I="/portfolio2.0/assets/project-52x-D2rCJnjo.jpg",q="/portfolio2.0/assets/project-6-C1hSzmeH.jpg",J="/portfolio2.0/assets/project-62x-DCrUwTXX.jpg",C="/portfolio2.0/assets/project-7-BGE4RsUG.jpg",M="/portfolio2.0/assets/project-72x-DCVLQ1gE.jpg",P="/portfolio2.0/assets/project-8-DOlwvTCj.jpg",G="/portfolio2.0/assets/project-82x-D-BoNZSb.jpg",B="/portfolio2.0/assets/project-9-C4ztqAgA.jpg",D="/portfolio2.0/assets/project-92x-DJRCm-Uy.jpg",A="/portfolio2.0/assets/project-10-7G_bG3ud.jpg",N="/portfolio2.0/assets/project-102x-BrUkPh2C.jpg",O="/portfolio2.0/assets/icons-BuKU6G9K.svg",l=[{title:"Wallet webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":L,"2x":I}},{title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":E,"2x":k}},{title:"English Exellence website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":B,"2x":D}},{title:"Power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":v,"2x":x}},{title:"Mimino website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":y,"2x":w}},{title:"Fruitbox online store",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":P,"2x":G}},{title:"Vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":b,"2x":S}},{title:"Сhego jewelry website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":q,"2x":J}},{title:"Energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":C,"2x":M}},{title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":A,"2x":N}}];let c=0;const R=3,$=document.getElementById("myProjectsList"),d=document.getElementById("load-more-btn");function H(t){return`
    <li class="my-projects-item">
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
      <p class="my-projects-technologies">${t.technologies}</p>
      <div class="my-projects-card-row">
        <h3 class="my-projects-names">${t.title}</h3>
        <a class="my-projects-link" href="${t.link}">
          Visit
          <svg class="icon-arrow" width="24" height="24">
            <use href="${O}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `}function u(){const t=l.length-c,o=Math.min(R,t);for(let s=0;s<o;s++){const r=H(l[c]);$.insertAdjacentHTML("beforeend",r),c++}c>=l.length&&(d.style.display="none")}d.addEventListener("click",u);u();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".reviews-list");fetch("https://portfolio-js.b.goit.study/api/reviews").then(s=>{if(!s.ok)throw new Error("Not found");return s.json()}).then(s=>{t.insertAdjacentHTML("beforeend",o(s)),new g(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,slidesPerView:1,spaceBetween:32,slidesPerGroup:1,breakpoints:{1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},simulateTouch:!0,on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}}),p(),window.addEventListener("resize",p)}).catch(s=>{t.insertAdjacentHTML("beforeend",`<li>
      <p>${s}</p>
      </li>
      `),console.log(s)});function o(s){return s.map(({author:r,avatar_url:e,review:i})=>`
     <li class="swiper-slide reviews-list-item">
    <p class="reviews-item-text">${i}</p>
    <div class="img-title-wraper">
    <img class="reviews-item-img"
    src=${e}
    alt="image of ${r}"
    width="40"
    height="40">
    <h3 class="reviews-item-title">${r}</h3>
    </div>
    </li>
      `).join("")}});function p(){if(window.innerWidth>=1280){const t=document.querySelectorAll(".swiper-slide");let o=0;t.forEach(s=>{let r=s.offsetHeight;r>o&&(o=r)}),t.forEach(s=>{s.style.height=`${o}px`})}else document.querySelectorAll(".swiper-slide").forEach(o=>{o.style.height="auto"})}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("contactForm"),o=document.querySelector(".wt-popup"),s="https://portfolio-js.b.goit.study/api/requests";document.querySelector(".wt-close-btn").addEventListener("click",()=>{o.style.display="none"}),window.addEventListener("click",e=>{e.target===o&&(o.style.display="none")}),t.addEventListener("submit",async e=>{e.preventDefault();const i=document.getElementById("email").value,n=document.getElementById("message").value,m={email:i,comment:n};try{if((await f.post(s,m,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)o.style.display="flex",t.reset();else throw new Error("Unexpected response status")}catch(a){console.error("Error submitting form:",a),h.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const r=document.getElementById("email");r.addEventListener("input",()=>{const e=r.nextElementSibling.nextElementSibling;r.validity.valid?e.style.display="none":e.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".burger"),o=document.querySelector(".menu-icon-close"),s=document.querySelector(".mob-menu"),r=document.querySelectorAll(".mob-nav-link");function e(){s.classList.add("is-open"),t.hidden=!0,o.hidden=!1}function i(){s.classList.remove("is-open"),t.hidden=!1,o.hidden=!0}t==null||t.addEventListener("click",e),o==null||o.addEventListener("click",i),r.forEach(n=>{n.addEventListener("click",i)})});
//# sourceMappingURL=index.js.map
