import{A as g,S as h,a as f,i as v}from"./assets/vendor-DTx6jgXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#about-me"),t=document.querySelector("#projects"),s=document.querySelector("#work-together");document.querySelectorAll(".nav-link").forEach(o=>{o.addEventListener("click",i=>{i.preventDefault(),o.textContent.includes("About Me")?e.scrollIntoView({behavior:"smooth"}):o.textContent.includes("Projects")?t.scrollIntoView({behavior:"smooth"}):o.textContent.includes("Contacts")&&s.scrollIntoView({behavior:"smooth"})})})});const j=document.querySelector(".hero-button");j.addEventListener("click",function(e){e.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const y="/portfolio2.0/assets/project-1-DDSEQAry.jpg",x="/portfolio2.0/assets/project-12x-CXqOLe9D.jpg",b="/portfolio2.0/assets/project-2-CnZ2isJx.jpg",w="/portfolio2.0/assets/project-22x-yOt2G9ZS.jpg",S="/portfolio2.0/assets/project-3-CBpo9lGd.jpg",E="/portfolio2.0/assets/project-32x-DzBqeYZt.jpg",k="/portfolio2.0/assets/project-4-8O6LE6YW.jpg",L="/portfolio2.0/assets/project-42x-CM03vmRJ.jpg",I="/portfolio2.0/assets/project-5-9d7B4pnA.jpg",q="/portfolio2.0/assets/project-52x-D2rCJnjo.jpg",C="/portfolio2.0/assets/project-6-C1hSzmeH.jpg",J="/portfolio2.0/assets/project-62x-DCrUwTXX.jpg",M="/portfolio2.0/assets/project-7-BGE4RsUG.jpg",A="/portfolio2.0/assets/project-72x-DCVLQ1gE.jpg",P="/portfolio2.0/assets/project-8-DOlwvTCj.jpg",D="/portfolio2.0/assets/project-82x-D-BoNZSb.jpg",G="/portfolio2.0/assets/project-9-C4ztqAgA.jpg",B="/portfolio2.0/assets/project-92x-DJRCm-Uy.jpg",O="/portfolio2.0/assets/project-10-7G_bG3ud.jpg",T="/portfolio2.0/assets/project-102x-BrUkPh2C.jpg",N="/portfolio2.0/assets/icons-CJvFrlhT.svg",l=[{title:"Wallet webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":I,"2x":q}},{title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":k,"2x":L}},{title:"English Exellence website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":G,"2x":B}},{title:"Power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":y,"2x":x}},{title:"Mimino website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":b,"2x":w}},{title:"Fruitbox online store",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":P,"2x":D}},{title:"Vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":S,"2x":E}},{title:"Сhego jewelry website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":C,"2x":J}},{title:"Energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":M,"2x":A}},{title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":O,"2x":T}}];let c=0;const R=3,$=document.getElementById("myProjectsList"),p=document.getElementById("load-more-btn");function H(e){return`
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
            <use href="${N}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `}function u(){const e=l.length-c,t=Math.min(R,e);for(let s=0;s<t;s++){const n=H(l[c]);$.insertAdjacentHTML("beforeend",n),c++}c>=l.length&&(p.style.display="none")}p.addEventListener("click",u);u();document.addEventListener("DOMContentLoaded",()=>{new g(".accordion-container",{duration:400,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".reviews-list");fetch("https://portfolio-js.b.goit.study/api/reviews").then(s=>{if(!s.ok)throw new Error("Not found");return s.json()}).then(s=>{e.insertAdjacentHTML("beforeend",t(s)),new h(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,slidesPerView:1,spaceBetween:32,slidesPerGroup:1,breakpoints:{1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},simulateTouch:!0,on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}}),d(),window.addEventListener("resize",d)}).catch(s=>{e.insertAdjacentHTML("beforeend",`<li>
      <p>${s}</p>
      </li>
      `),console.log(s)});function t(s){return s.map(({author:n,avatar_url:o,review:i})=>`
     <li class="swiper-slide reviews-list-item">
    <p class="reviews-item-text">${i}</p>
    <div class="img-title-wraper">
    <img class="reviews-item-img"
    src=${o}
    alt="image of ${n}"
    width="40"
    height="40">
    <h3 class="reviews-item-title">${n}</h3>
    </div>
    </li>
      `).join("")}});function d(){if(window.innerWidth>=1280){const e=document.querySelectorAll(".swiper-slide");let t=0;e.forEach(s=>{let n=s.offsetHeight;n>t&&(t=n)}),e.forEach(s=>{s.style.height=`${t}px`})}else document.querySelectorAll(".swiper-slide").forEach(t=>{t.style.height="auto"})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contactForm"),t=document.querySelector(".wt-popup"),s="https://portfolio-js.b.goit.study/api/requests";document.querySelector(".wt-close-btn").addEventListener("click",()=>{t.style.display="none"}),window.addEventListener("click",o=>{o.target===t&&(t.style.display="none")}),e.addEventListener("submit",async o=>{o.preventDefault();const i=document.getElementById("email").value,r=document.getElementById("message").value,m={email:i,comment:r};try{if((await f.post(s,m,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)t.style.display="flex",e.reset();else throw new Error("Unexpected response status")}catch(a){console.error("Error submitting form:",a),v.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const n=document.getElementById("email");n.addEventListener("input",()=>{const o=n.nextElementSibling.nextElementSibling;n.validity.valid?o.style.display="none":o.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),t=document.querySelector(".menu-icon-close"),s=document.querySelector(".mob-menu"),n=document.querySelectorAll(".mob-nav-link");function o(){s.classList.add("is-open"),e.hidden=!0,t.hidden=!1}function i(){s.classList.remove("is-open"),e.hidden=!1,t.hidden=!0}e==null||e.addEventListener("click",o),t==null||t.addEventListener("click",i),n.forEach(r=>{r.addEventListener("click",i)})});function V(){const e=document.documentElement;e.getAttribute("data-theme")==="light"?(e.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(e.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("theme"),t=document.documentElement;e?t.setAttribute("data-theme",e):t.setAttribute("data-theme","light")});document.querySelector("#themeToggleButton").addEventListener("click",V);
//# sourceMappingURL=index.js.map
