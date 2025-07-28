let gamesq=[];
let usersq=[];
let highest=0;
let start=false;
let level=0;
let btns=['yellow','red','purple','green'];
document.addEventListener("keypress",function(){
if(start==false){
    console.log(":strted");
    start=true;
    
    levelup();
}
})
let h2=document.querySelector("h2");
function levelup(){
    usersq=[];
    level++;
    if(highest<level){
        highest=level;}
    h2.innerHTML=`Highest score is:${highest}<br>Level:${level}`;
    let randInd=Math.floor(Math.random()*3)+1;
    let randcolor=btns[randInd];
    let randbtn=document.querySelector(`.${randcolor}`);
    gamesq.push(randcolor);

    btnflash(randbtn);
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");}, 250)
}
function btnpress(){
    let btn=this;
    usercolor=btn.getAttribute("id");
    usersq.push(usercolor);
    checkAns(usersq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function checkAns(idx){
    if(usersq[idx]===gamesq[idx]){
        if(usersq.length==gamesq.length){
            setTimeout(levelup,500);
        }
    }else{
        h2.innerHTML=`Game Over your score was ${level}<br>press any key to start!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
        
    }
}
function reset(){
    start=false;
    usersq=[];
    gamesq=[];
    level=0;
}
