import{S as g,a as h,i as f}from"./assets/vendor-DsTmQDBr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#about-me"),t=document.querySelector("#projects"),s=document.querySelector("#work-together");document.querySelectorAll(".nav-link").forEach(o=>{o.addEventListener("click",i=>{i.preventDefault(),o.textContent.includes("About Me")?e.scrollIntoView({behavior:"smooth"}):o.textContent.includes("Projects")?t.scrollIntoView({behavior:"smooth"}):o.textContent.includes("Contacts")&&s.scrollIntoView({behavior:"smooth"})})})});const v=document.querySelector(".hero-button");v.addEventListener("click",function(e){e.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const j="/portfolio2.0/assets/project-1-DDSEQAry.jpg",y="/portfolio2.0/assets/project-12x-CXqOLe9D.jpg",x="/portfolio2.0/assets/project-2-CnZ2isJx.jpg",b="/portfolio2.0/assets/project-22x-yOt2G9ZS.jpg",w="/portfolio2.0/assets/project-3-CBpo9lGd.jpg",S="/portfolio2.0/assets/project-32x-DzBqeYZt.jpg",E="/portfolio2.0/assets/project-4-8O6LE6YW.jpg",k="/portfolio2.0/assets/project-42x-CM03vmRJ.jpg",L="/portfolio2.0/assets/project-5-9d7B4pnA.jpg",I="/portfolio2.0/assets/project-52x-D2rCJnjo.jpg",q="/portfolio2.0/assets/project-6-C1hSzmeH.jpg",C="/portfolio2.0/assets/project-62x-DCrUwTXX.jpg",J="/portfolio2.0/assets/project-7-BGE4RsUG.jpg",M="/portfolio2.0/assets/project-72x-DCVLQ1gE.jpg",A="/portfolio2.0/assets/project-8-DOlwvTCj.jpg",P="/portfolio2.0/assets/project-82x-D-BoNZSb.jpg",D="/portfolio2.0/assets/project-9-C4ztqAgA.jpg",G="/portfolio2.0/assets/project-92x-DJRCm-Uy.jpg",B="/portfolio2.0/assets/project-10-7G_bG3ud.jpg",T="/portfolio2.0/assets/project-102x-BrUkPh2C.jpg",O="/portfolio2.0/assets/icons-CJvFrlhT.svg",l=[{title:"Wallet webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":L,"2x":I}},{title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":E,"2x":k}},{title:"English Exellence website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":D,"2x":G}},{title:"Power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":j,"2x":y}},{title:"Mimino website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":x,"2x":b}},{title:"Fruitbox online store",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":A,"2x":P}},{title:"Vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":w,"2x":S}},{title:"Сhego jewelry website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":q,"2x":C}},{title:"Energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":J,"2x":M}},{title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":B,"2x":T}}];let c=0;const N=3,R=document.getElementById("myProjectsList"),p=document.getElementById("load-more-btn");function $(e){return`
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
            <use href="${O}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `}function u(){const e=l.length-c,t=Math.min(N,e);for(let s=0;s<t;s++){const r=$(l[c]);R.insertAdjacentHTML("beforeend",r),c++}c>=l.length&&(p.style.display="none")}p.addEventListener("click",u);u();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".reviews-list");fetch("https://portfolio-js.b.goit.study/api/reviews").then(s=>{if(!s.ok)throw new Error("Not found");return s.json()}).then(s=>{e.insertAdjacentHTML("beforeend",t(s)),new g(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,slidesPerView:1,spaceBetween:32,slidesPerGroup:1,breakpoints:{1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},simulateTouch:!0,on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}}),d(),window.addEventListener("resize",d)}).catch(s=>{e.insertAdjacentHTML("beforeend",`<li>
      <p>${s}</p>
      </li>
      `),console.log(s)});function t(s){return s.map(({author:r,avatar_url:o,review:i})=>`
     <li class="swiper-slide reviews-list-item">
    <p class="reviews-item-text">${i}</p>
    <div class="img-title-wraper">
    <img class="reviews-item-img"
    src=${o}
    alt="image of ${r}"
    width="40"
    height="40">
    <h3 class="reviews-item-title">${r}</h3>
    </div>
    </li>
      `).join("")}});function d(){if(window.innerWidth>=1280){const e=document.querySelectorAll(".swiper-slide");let t=0;e.forEach(s=>{let r=s.offsetHeight;r>t&&(t=r)}),e.forEach(s=>{s.style.height=`${t}px`})}else document.querySelectorAll(".swiper-slide").forEach(t=>{t.style.height="auto"})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contactForm"),t=document.querySelector(".wt-popup"),s="https://portfolio-js.b.goit.study/api/requests";document.querySelector(".wt-close-btn").addEventListener("click",()=>{t.style.display="none"}),window.addEventListener("click",o=>{o.target===t&&(t.style.display="none")}),e.addEventListener("submit",async o=>{o.preventDefault();const i=document.getElementById("email").value,n=document.getElementById("message").value,m={email:i,comment:n};try{if((await h.post(s,m,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)t.style.display="flex",e.reset();else throw new Error("Unexpected response status")}catch(a){console.error("Error submitting form:",a),f.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const r=document.getElementById("email");r.addEventListener("input",()=>{const o=r.nextElementSibling.nextElementSibling;r.validity.valid?o.style.display="none":o.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),t=document.querySelector(".menu-icon-close"),s=document.querySelector(".mob-menu"),r=document.querySelectorAll(".mob-nav-link");function o(){s.classList.add("is-open"),e.hidden=!0,t.hidden=!1}function i(){s.classList.remove("is-open"),e.hidden=!1,t.hidden=!0}e==null||e.addEventListener("click",o),t==null||t.addEventListener("click",i),r.forEach(n=>{n.addEventListener("click",i)})});function H(){const e=document.documentElement;e.getAttribute("data-theme")==="light"?(e.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(e.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("theme"),t=document.documentElement;e?t.setAttribute("data-theme",e):t.setAttribute("data-theme","light")});document.querySelector("#themeToggleButton").addEventListener("click",H);
//# sourceMappingURL=index.js.map
