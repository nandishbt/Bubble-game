var clutter = "";
for(var i = 1;i<=120;i++){
    var num = Math.floor(Math.random() * 10);
    clutter+=`<div class="bubble">
    <h3>${num}</h3>
</div>`; 
}
var bub = document.querySelector("#pbtm");
bub.innerHTML = clutter;