import{A as f,S as v,a as w,i as j}from"./assets/vendor-D1x2inJp.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#about-me"),i=document.querySelector("#projects"),r=document.querySelector("#work-together");document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),e.textContent.includes("About Me")?t.scrollIntoView({behavior:"smooth"}):e.textContent.includes("Projects")?i.scrollIntoView({behavior:"smooth"}):e.textContent.includes("Contacts")&&r.scrollIntoView({behavior:"smooth"})})})});const x=document.querySelector(".hero-button");x.addEventListener("click",function(t){t.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const y="/portfolio2.0/assets/project-1-DDSEQAry.jpg",b="/portfolio2.0/assets/project-12x-CXqOLe9D.jpg",k="/portfolio2.0/assets/project-2-CnZ2isJx.jpg",E="/portfolio2.0/assets/project-22x-yOt2G9ZS.jpg",S="/portfolio2.0/assets/project-3-CBpo9lGd.jpg",L="/portfolio2.0/assets/project-32x-DzBqeYZt.jpg",I="/portfolio2.0/assets/project-4-8O6LE6YW.jpg",A="/portfolio2.0/assets/project-42x-CM03vmRJ.jpg",C="/portfolio2.0/assets/project-5-9d7B4pnA.jpg",M="/portfolio2.0/assets/project-52x-D2rCJnjo.jpg",B="/portfolio2.0/assets/project-6-C1hSzmeH.jpg",q="/portfolio2.0/assets/project-62x-DCrUwTXX.jpg",J="/portfolio2.0/assets/project-7-BGE4RsUG.jpg",T="/portfolio2.0/assets/project-72x-DCVLQ1gE.jpg",P="/portfolio2.0/assets/project-8-DOlwvTCj.jpg",D="/portfolio2.0/assets/project-82x-D-BoNZSb.jpg",G="/portfolio2.0/assets/project-9-C4ztqAgA.jpg",O="/portfolio2.0/assets/project-92x-DJRCm-Uy.jpg",N="/portfolio2.0/assets/project-10-7G_bG3ud.jpg",$="/portfolio2.0/assets/project-102x-BrUkPh2C.jpg",H="/portfolio2.0/assets/icons-CJvFrlhT.svg",l=[{title:"Wallet webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":C,"2x":M}},{title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":I,"2x":A}},{title:"English Exellence website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":G,"2x":O}},{title:"Power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":y,"2x":b}},{title:"Mimino website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":k,"2x":E}},{title:"Fruitbox online store",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":P,"2x":D}},{title:"Vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":S,"2x":L}},{title:"Сhego jewelry website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":B,"2x":q}},{title:"Energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":J,"2x":T}},{title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":N,"2x":$}}];let c=0;const R=3,V=document.getElementById("myProjectsList"),d=document.getElementById("load-more-btn");function F(t){return`
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
            <use href="${H}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `}function p(){const t=l.length-c,i=Math.min(R,t);for(let r=0;r<i;r++){const n=F(l[c]);V.insertAdjacentHTML("beforeend",n),c++}c>=l.length&&(d.style.display="none")}d.addEventListener("click",p);p();document.addEventListener("DOMContentLoaded",()=>{new f(".accordion-container",{duration:400,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".reviews-list");function i(n){return n.map(({author:e,avatar_url:o,review:s})=>`
        <li class="swiper-slide reviews-list-item">
          <p class="reviews-item-text">${s}</p>
          <div class="img-title-wraper">
            <img class="reviews-item-img"
                 src=${o}
                 alt="image of ${e}"
                 width="40"
                 height="40">
            <h3 class="reviews-item-title">${e}</h3>
          </div>
        </li>`).join("")}function r(){const n=document.querySelectorAll(".swiper-slide");if(window.innerWidth>=1280){let e=0;n.forEach(o=>{const s=o.offsetHeight;s>e&&(e=s)}),n.forEach(o=>{o.style.height=`${e}px`})}else n.forEach(e=>{e.style.height="auto"})}fetch("https://portfolio-js.b.goit.study/api/reviews").then(n=>{if(!n.ok)throw new Error("Not found");return n.json()}).then(n=>{t.insertAdjacentHTML("beforeend",i(n));const e=new v(".swiper-container",{slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},simulateTouch:!0,autoHeight:!0}),o=document.querySelector("#swiper-button-next"),s=document.querySelector("#swiper-button-prev");o.addEventListener("click",()=>{e.slideNext()}),s.addEventListener("click",()=>{e.slidePrev()}),r(),window.addEventListener("resize",r)}).catch(n=>{t.insertAdjacentHTML("beforeend",`<li>
          <p>${n.message}</p>
        </li>`)})});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("contactForm"),i=document.querySelector(".wt-popup"),r="https://portfolio-js.b.goit.study/api/requests";document.querySelector(".wt-close-btn").addEventListener("click",()=>{i.style.display="none"}),window.addEventListener("click",e=>{e.target===i&&(i.style.display="none")}),t.addEventListener("submit",async e=>{e.preventDefault();const o=document.getElementById("email").value,s=document.getElementById("message").value,h={email:o,comment:s};try{if((await w.post(r,h,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)i.style.display="flex",t.reset();else throw new Error("Unexpected response status")}catch(a){console.error("Error submitting form:",a),j.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const n=document.getElementById("email");n.addEventListener("input",()=>{const e=n.nextElementSibling.nextElementSibling;n.validity.valid?e.style.display="none":e.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".burger"),i=document.querySelector(".menu-icon-close"),r=document.querySelector(".mob-menu"),n=document.querySelectorAll(".mob-nav-link");function e(){r.classList.add("is-open"),t.hidden=!0,i.hidden=!1}function o(){r.classList.remove("is-open"),t.hidden=!1,i.hidden=!0}t==null||t.addEventListener("click",e),i==null||i.addEventListener("click",o),n.forEach(s=>{s.addEventListener("click",o)})});function U(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#E4E5E6"/>
      <circle cx="12" cy="12" r="10" fill="#00B068"/>
    </svg>
  `}function z(){return`
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="24" rx="12" fill="#292929"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32 21.1679C35.5318 19.6248 38 16.1006 38 12C38 7.89936 35.5318 4.3752 32 2.83209C33.2249 2.29689 34.5778 2 36 2C41.5228 2 46 6.47715 46 12C46 17.5228 41.5228 22 36 22C34.5778 22 33.2249 21.7031 32 21.1679Z" fill="#00B068"/>
    </svg>
  `}function u(){const t=document.documentElement.getAttribute("data-theme"),i=document.getElementById("themeIcon");i.innerHTML=t==="light"?U():z()}function Z(){const t=document.documentElement;t.getAttribute("data-theme")==="light"?(t.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(t.setAttribute("data-theme","light"),localStorage.setItem("theme","light")),u()}document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("theme"),i=document.documentElement;t?i.setAttribute("data-theme",t):i.setAttribute("data-theme","light"),u()});document.querySelector("#themeToggleButton").addEventListener("click",Z);const W=document.querySelectorAll(".ac-trigger");function m(t){W.forEach(i=>{const r=i.querySelector(".icon-1"),n=i.querySelector(".icon-2");r&&r.remove(),n&&n.remove();const e=t==="dark"?"#F0F0F0":"#292929",o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("class","icon-1"),o.setAttribute("width","24"),o.setAttribute("height","24"),o.setAttribute("viewBox","0 0 24 24"),o.setAttribute("fill","none"),o.innerHTML=`
      <path d="M18 9L12 15L6 9" stroke="${e}" stroke-width="2" stroke-linecap="round" />
    `;const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("class","icon-2"),s.setAttribute("width","24"),s.setAttribute("height","24"),s.setAttribute("viewBox","0 0 24 24"),s.setAttribute("fill","none"),s.innerHTML=`
      <path d="M18 15L12 9L6 15" stroke="${e}" stroke-width="2" stroke-linecap="round" />
    `,i.appendChild(o),i.appendChild(s)})}function g(){return document.documentElement.getAttribute("data-theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}const X=new MutationObserver(()=>{const t=g();m(t)});X.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});m(g());
//# sourceMappingURL=index.js.map
