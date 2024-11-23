import{a as m,i as u}from"./assets/vendor-DM1_jADJ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();document.querySelector(".burger");const f=document.querySelector(".hero-button");f.addEventListener("click",function(t){t.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});const j="/portfolio2.0/assets/project-1-DDSEQAry.jpg",h="/portfolio2.0/assets/project-12x-CXqOLe9D.jpg",x="/portfolio2.0/assets/project-2-CnZ2isJx.jpg",y="/portfolio2.0/assets/project-22x-yOt2G9ZS.jpg",v="/portfolio2.0/assets/project-3-CBpo9lGd.jpg",b="/portfolio2.0/assets/project-32x-DzBqeYZt.jpg",k="/portfolio2.0/assets/project-4-8O6LE6YW.jpg",S="/portfolio2.0/assets/project-42x-CM03vmRJ.jpg",E="/portfolio2.0/assets/project-5-9d7B4pnA.jpg",L="/portfolio2.0/assets/project-52x-D2rCJnjo.jpg",I="/portfolio2.0/assets/project-6-C1hSzmeH.jpg",w="/portfolio2.0/assets/project-62x-DCrUwTXX.jpg",J="/portfolio2.0/assets/project-7-BGE4RsUG.jpg",G="/portfolio2.0/assets/project-72x-DCVLQ1gE.jpg",C="/portfolio2.0/assets/project-8-DOlwvTCj.jpg",P="/portfolio2.0/assets/project-82x-D-BoNZSb.jpg",B="/portfolio2.0/assets/project-9-C4ztqAgA.jpg",M="/portfolio2.0/assets/project-92x-DJRCm-Uy.jpg",q="/portfolio2.0/assets/project-10-7G_bG3ud.jpg",D="/portfolio2.0/assets/project-102x-BrUkPh2C.jpg",N="/portfolio2.0/assets/icons-BuKU6G9K.svg",l=[{title:"Wallet webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":E,"2x":L}},{title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":k,"2x":S}},{title:"English Exellence website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":B,"2x":M}},{title:"Power pulse webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":j,"2x":h}},{title:"Mimino website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":x,"2x":y}},{title:"Fruitbox online store",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":C,"2x":P}},{title:"Vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":v,"2x":b}},{title:"Сhego jewelry website",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":I,"2x":w}},{title:"Energy flow webservice ",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":J,"2x":G}},{title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",link:"https://ivndrkk.github.io/portfolio2.0/",images:{"1x":q,"2x":D}}];let c=0;const R=3,O=document.getElementById("myProjectsList"),p=document.getElementById("load-more-btn");function A(t){return`
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
            <use href="${N}#icon-up-right-arrow"></use>
          </svg>
        </a>
      </div>
    </li>
  `}function d(){const t=l.length-c,o=Math.min(R,t);for(let r=0;r<o;r++){const i=A(l[c]);O.insertAdjacentHTML("beforeend",i),c++}c>=l.length&&(p.style.display="none")}p.addEventListener("click",d);d();document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("contactForm"),o=document.querySelector(".wt-popup"),r="https://portfolio-js.b.goit.study/api/requests";document.querySelector(".wt-close-btn").addEventListener("click",()=>{o.style.display="none"}),window.addEventListener("click",e=>{e.target===o&&(o.style.display="none")}),t.addEventListener("submit",async e=>{e.preventDefault();const s=document.getElementById("email").value,n=document.getElementById("message").value,g={email:s,comment:n};try{if((await m.post(r,g,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).status===201)o.style.display="flex",t.reset();else throw new Error("Unexpected response status")}catch(a){console.error("Error submitting form:",a),u.error({title:"Error",message:"Something went wrong. Please try again later.",backgroundColor:"#E74A3B",close:!1,closeOnClick:!0})}});const i=document.getElementById("email");i.addEventListener("input",()=>{const e=i.nextElementSibling.nextElementSibling;i.validity.valid?e.style.display="none":e.style.display="block"})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".burger-button"),o=document.querySelector(".menu-icon-close"),r=document.querySelector(".mob-menu"),i=document.querySelectorAll(".mob-nav-link");function e(){r.classList.add("is-open"),t.hidden=!0,o.hidden=!1}function s(){r.classList.remove("is-open"),t.hidden=!1,o.hidden=!0}t==null||t.addEventListener("click",e),o==null||o.addEventListener("click",s),i.forEach(n=>{n.addEventListener("click",s)})});
//# sourceMappingURL=index.js.map
