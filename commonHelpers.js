import{S as m,i as l}from"./assets/vendor-3fe00192.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p={PIXABAY:{PATH:"https://pixabay.com/api/",KEY:"43768517-7da35ee1e4b58521b64ca0165"}},u=async(r,o)=>{const s=new URLSearchParams({key:p.PIXABAY.KEY,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(p.PIXABAY.PATH+"?"+s.toString())},f=r=>`
    <a href="${r.largeImageURL}" class="item">
      <img src="${r.webformatURL}" alt="" alt="${r.tags}"/>
      <div class="data">
        <p><b>Likes</b> <span>${r.likes}</span></p>
        <p><b>Views</b> <span>${r.views}</span></p>
        <p><b>Comments</b> <span>${r.comments}</span></p>
        <p><b>Downloads</b> <span>${r.downloads}</span></p>
      </div>
    </a>
  `;const i=document.querySelector("form.form-search"),a=document.querySelector(".gallery"),h=new m(".gallery a",{});i&&i.addEventListener("submit",r=>{r.preventDefault();const o=i.elements.search.value;o?(a.innerHTML="",a.classList.add("is-load"),u(o).catch(s=>{console.log(s)}).then(s=>s.json()).then(s=>{a.classList.remove("is-load");const n=[];s.total===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",class:"error",color:"white"}):(s.hits.forEach(e=>{n.push(f(e))}),a.innerHTML=n.join(""),h.refresh())}),i.reset()):l.error({message:"Please enter a search term",position:"topRight",class:"error",color:"white"})});
//# sourceMappingURL=commonHelpers.js.map
