const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.disabled=!0;let d=null;function a(t,e){return t.disabled?(t.disabled=!1,e.disabled=!0):(t.disabled=!0,e.disabled=!1)}t.addEventListener("click",(function(){d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),a(t,e)})),e.addEventListener("click",(function(){clearInterval(d),a(t,e)}));
//# sourceMappingURL=01-color-switcher.756bac10.js.map