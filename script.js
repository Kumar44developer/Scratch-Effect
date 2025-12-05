document.addEventListener("mousemove",(e)=>{
 const body = document.querySelector("body");
 const scratcher = document.createElement("span");
  scratcher.style.left = -17 + e.offsetX + "px";
