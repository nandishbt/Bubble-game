var timerr = 60;
var score = 0;
var rn = 0;
function bubblemake(){
var clutter = "";
for(var i = 1;i<=120;i++){
    var num = Math.floor(Math.random() * 10);
    clutter+=`<div class="bubble">
    <h3>${num}</h3>
</div>`; 
}
var bub = document.querySelector("#pbtm");
bub.innerHTML = clutter;
}

function timerint(){
    
    var t = setInterval(function(){
        if(timerr>0){
            timerr--;
            document.querySelector("#Timer").textContent = timerr;
        }
        else{
            clearInterval(t);
            var a = Number(document.querySelector("#target").textContent)
            if(score >= a){
                document.querySelector("#pbtm").innerHTML = `<h1 style = "color : green">YOU WON</h1>` 
            }
            else{
            document.querySelector("#pbtm").innerHTML = `<h1 style = "color : red">YOU LOST</h1>`

            
            }                                                  
            
        }
    },1000)
}
function hit(){
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;

    

}
function scoreincrease(){
    score+=1;
    document.querySelector("#score").textContent=score;

}
bubblemake();
timerint();
hit();
document.querySelector("#pbtm").addEventListener("click",function(dt){
    var clickednumber = Number(dt.target.textContent);
    if(clickednumber===rn){
        scoreincrease();
        hit();
        bubblemake();
    }
})

document.querySelector("#again").addEventListener('click',function(){
    
    bubblemake();
    document.querySelector("#Timer").textContent = 60;
    document.querySelector("#score").textContent=0;
    score = 0;
    timerr = 60;

    


})
