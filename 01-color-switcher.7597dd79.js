const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(()=>{timerId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled","disabled")})),e.addEventListener("click",(()=>{clearInterval(timerId),t.removeAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.7597dd79.js.map