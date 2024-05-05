const headerEl = document.querySelector(".main-header");
const navToggleEl = document.querySelector(".menu-button");

navToggleEl.addEventListener("click", ()=>{
 headerEl.classList.toggle("open-nav");
})