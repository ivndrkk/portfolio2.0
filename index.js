import{A as f,S as v,a as j,i as y}from"./assets/vendor-D1x2inJp.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#about-me"),o=document.querySelector("#projects"),s=document.querySelector("#work-together");document.querySelectorAll(".nav-link").forEach(t=>{t.addEventListener("click",i=>{i.preventDefault(),t.textContent.includes("About Me")?e.scrollIntoView({behavior:"smooth"}):t.textContent.includes("Projects")?o.scrollIntoView({behavior:"smooth"}):t.textContent.includes("Contacts")&&s.scrollIntoView({behavior:"smooth"})})})});const x=document.querySelector(".hero-button");x.addEventListener("click",function(e){e.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const w="/portfolio2.0/assets/project-1-DDSEQAry.jpg",b="/portfolio2.0/assets/project-12x-CXqOLe9D.jpg",E="/portfolio2.0/assets/project-2-CnZ2isJx.jpg",L="/portfolio2.0/assets/project-22x-yOt2G9ZS.jpg",S="/portfolio2.0/assets/project-3-CBpo9lGd.jpg",k="/portfolio2.0/assets/project-32x-DzBqeYZt.jpg",I="/portfolio2.0/assets/project-4-8O6LE6YW.jpg",C="/portfolio2.0/assets/project-42x-CM03vmRJ.jpg",q="/portfolio2.0/assets/project-5-9d7B4pnA.jpg",J="/portfolio2.0/assets/project-52x-D2rCJnjo.jpg",M="/portfolio2.0/assets/project-6-C1hSzmeH.jpg",B="/portfolio2.0/assets/project-62x-DCrUwTXX.jpg",P="/portfolio2.0/assets/project-7-BGE4RsUG.jpg",T="/portfolio2.0/assets/project-72x-DCVLQ1gE.jpg",A="/portfolio2.0/assets/project-8-DOlwvTCj.jpg",D="/portfolio2.0/assets/project-82x-D-BoNZSb.jpg",G="/portfolio2.0/assets/project-9-C4ztqAgA.jpg",O="/portfolio2.0/assets/project-92x-DJRCm-Uy.jpg",N="/portfolio2.0/assets/project-10-7G_bG3ud.jpg",R="/portfolio2.0/assets/project-102x-BrUkPh2C.jpg",$="/portfolio2.0/assets/icons-CJvFrlhT.svg",a=[{title:"Wallet webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":q,"2x":J}},{title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":I,"2x":C}},{title:"English Exellence website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":G,"2x":O}},{title:"Power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":w,"2x":b}},{title:"Mimino website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":E,"2x":L}},{title:"Fruitbox online store",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":A,"2x":D}},{title:"Vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":S,"2x":k}},{title:"Сhego jewelry website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":M,"2x":B}},{title:"Energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":P,"2x":T}},{title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":N,"2x":R}}];let l=0;const H=3,V=document.getElementById("myProjectsList"),u=document.getElementById("load-more-btn");function U(e){return`
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
            <use href="${$}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `}function m(){const e=a.length-l,o=Math.min(H,e);for(let s=0;s<o;s++){const n=U(a[l]);V.insertAdjacentHTML("beforeend",n),l++}l>=a.length&&(u.style.display="none")}u.addEventListener("click",m);m();document.addEventListener("DOMContentLoaded",()=>{new f(".accordion-container",{duration:400,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".reviews-list");fetch("https://portfolio-js.b.goit.study/api/reviews").then(s=>{if(!s.ok)throw new Error("Not found");return s.json()}).then(s=>{e.insertAdjacentHTML("beforeend",o(s)),new v(".swiper-container",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0,slidesPerView:1,spaceBetween:32,slidesPerGroup:1,breakpoints:{1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},simulateTouch:!0,on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}}),p(),window.addEventListener("resize",p)}).catch(s=>{e.insertAdjacentHTML("beforeend",`<li>
      <p>${s}</p>
      </li>
      `),console.log(s)});function o(s){return s.map(({author:n,avatar_url:t,review:i})=>`
     <li class="swiper-slide reviews-list-item">
    <p class="reviews-item-text">${i}</p>
    <div class="img-title-wraper">
    <img class="reviews-item-img"
    src=${t}
    alt="image of ${n}"
    width="40"
    height="40">
    <h3 class="reviews-item-title">${n}</h3>
    </div>
    </li>
      `).join("")}});function p(){if(window.innerWidth>=1280){const e=document.querySelectorAll(".swiper-slide");let o=0;e.forEach(s=>{let n=s.offsetHeight;n>o&&(o=n)}),e.forEach(s=>{s.style.height=`${o}px`})}else document.querySelectorAll(".swiper-slide").forEach(o=>{o.style.height="auto"})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contactForm"),o=document.querySelector(".wt-popup"),s="https://portfolio-js.b.goit.study/api/requests";document.querySelector(".wt-close-btn").addEventListener("click",()=>{o.style.display="none"}),window.addEventListener("click",t=>{t.target===o&&(o.style.display="none")}),e.addEventListener("submit",async t=>{t.preventDefault();const i=document.getElementById("email").value,r=document.getElementById("message").value,h={email:i,comment:r};try{if((await j.post(s,h,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)o.style.display="flex",e.reset();else throw new Error("Unexpected response status")}catch(d){console.error("Error submitting form:",d),y.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const n=document.getElementById("email");n.addEventListener("input",()=>{const t=n.nextElementSibling.nextElementSibling;n.validity.valid?t.style.display="none":t.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".burger"),o=document.querySelector(".menu-icon-close"),s=document.querySelector(".mob-menu"),n=document.querySelectorAll(".mob-nav-link");function t(){s.classList.add("is-open"),e.hidden=!0,o.hidden=!1}function i(){s.classList.remove("is-open"),e.hidden=!1,o.hidden=!0}e==null||e.addEventListener("click",t),o==null||o.addEventListener("click",i),n.forEach(r=>{r.addEventListener("click",i)})});const z=document.getElementById("themeToggleButton"),c=document.getElementById("buttonIcon");function g(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e);const s=e==="light"?"../img/light-theme-btn.svg":"../img/dark-theme-btn.svg";c.classList.add("fade-out"),setTimeout(()=>{c.src=s,c.classList.remove("fade-out"),c.classList.add("fade-in"),setTimeout(()=>c.classList.remove("fade-in"),300)},300)}function F(){const o=document.documentElement.getAttribute("data-theme")==="light"?"dark":"light";g(o)}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("theme")||"light";g(e),z.addEventListener("click",F)});
//# sourceMappingURL=index.js.map
