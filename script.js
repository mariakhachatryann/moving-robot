"use strict";
/*
  HTMLում ստեղծեք մի հատ DIV , էդ դիվը ստացեք JS-ում, ու էնպես արեք, որ երբ որ սեղմեք 
  A տառի վրա դիվը գնա ՁԱԽ, եթե սեղմեք D տառի վրա, ապա DIV-ը գնա ԱՋ, սեղմեք S տառի վրա DI-ը իջնի 
  ներքև, իսկ եթե սեղմեք W տառի վրա DIV-ը բարձրանա վերև, պետք ա հստակ քայլ առ քայլ գնա առանց ա 
  կետից բ կետ թռնելու

Հուշում

Պետք է աշխատեք EVENT-ի հետ  
 */
const box = document.querySelector(".box");
const wrapper = document.querySelector(".wrapper");
//const p = document.createElement("p");

box.style.left = 0;
box.style.top = 0;

document.body.addEventListener("keydown", function(e){
  if(e.key === "A" || e.key === "a"){
    box.style.left = parseInt(box.style.left) - 10 + "px";
  }else if(e.key === "D" || e.key === "d"){
    box.style.left = parseInt(box.style.left) + 10 + "px";
  } else if (e.key === "S" || e.key === "s"){
    box.style.top = parseInt(box.style.top) + 10 + "px";
  } else if (e.key === "W" || e.key === "w") {
    box.style.top = parseInt(box.style.top) - 10 + "px";
  }
});

// box.addEventListener("click", function () {
//   box.after(p);
//   p.textContent = "Hello, how can I help you ?";
//   p.style.cssText = `
//     background: black;
//     color: cyan;
//     border-radius: 30px;
//   `;

// });