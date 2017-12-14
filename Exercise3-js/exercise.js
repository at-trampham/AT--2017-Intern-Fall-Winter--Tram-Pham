//1. addEventListener()
var idEl=document.getElementById("btn-1");
idEl.addEventListener ("click",addEventLs);
function addEventLs() {
  alert ("Example about addEventListener");
}
//2. removeEventListener()
var idEl2=document.getElementById("btn-2");
idEl2.addEventListener("click",rmListener);
idEl2.removeEventListener("dbclick",rmListener);
function rmListener() {
  alert ("Example about removeEventListener");
}
//3&4. createElement() and appendChild()
function createEl() {
  var btn=document.createElement("BUTTON");
  document.getElementById("btn-3").appendChild(btn);
}
//5. removeChild()
function rmChild() {
  var list=document.getElementById("btn-5");
  list.removeChild(list.childNodes[2]);
}
//6. replaceChild()
function rplChild() {
  var newelm = document.createElement("li");
  var textnode = document.createTextNode("Water");
  newelm.appendChild(textnode);
  var item = document.getElementById("btn-5");
  item.replaceChild(newelm, item.childNodes[1]);
}
//7. cloneNode()
function clnNode() {
  var itm = document.getElementById ("btn-6");
  var cln = itm.cloneNode (true);
  document.getElementById("btn-5").appendChild(cln);
}
//9. setAttribute()
function setAttr() {
  var tagEl=document.getElementsByTagName("h2")[0];
  tagEl.setAttribute("class","democlass");
}
//10. getAttribute()
function getAttr() {
  var x=document.getElementById("btn-7").getAttribute("href");
  document.getElementById("result").innerHTML = x;
}

//11. removeAttribute()
function rmAttr() {
  document.getElementsByTagName("h2")[0].removeAttribute("class");
} 
 