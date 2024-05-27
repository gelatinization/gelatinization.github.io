let loading = document.createElement("div");
loading.id = "load";
loading.innerHTML = "Loading";
document.querySelector("body").appendChild(loading);
let laster = document.createElement("div");
laster.id= "laster"
for (i=0;i<3;i++) {
    laster.appendChild(document.createElement("div"))
}
loading.appendChild(laster);

let canvasEl = document.createElement("canvas");
canvasEl.setAttribute("id","idCanvas");
canvasEl.setAttribute("height","400px");
if (window.innerWidth <= 425) {
    canvasEl.setAttribute("height","150px");
}

document.querySelector("#head").insertBefore(canvasEl, document.querySelector("#index"));
let rakett = document.createElement("img");
document.querySelector("#head").appendChild(rakett);

rakett.src = "ressurser/sproket.png";
rakett.style.position = "absolute";
rakett.width = "0";
let ctx = canvasEl.getContext("2d");

ctx.canvas.width  = window.innerWidth;
addEventListener("resize",configure)

function drawStar(x,y,width=10, fill="yellow") {
    ctx.lineWidth=1
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+1.31*width,y+0.95*width);
    ctx.lineTo(x-0.31*width,y+0.95*width);
    ctx.lineTo(x+1*width,y)
    ctx.lineTo(x+0.5*width,y+1.54*width)
    ctx.closePath()
    ctx.stroke();
    ctx.fillStyle = fill;
    ctx.fill()
}


function overflow(slutt,verdi) {
    while (verdi > slutt) {
        verdi = verdi-slutt;
    }
    return verdi;
}
let x=0;
let colors = ["red","orange","yellow","green","blue","indigo","deeppink"]
function rainbow() {
    var grd = ctx.createLinearGradient(-100, 0, canvasEl.width+100, 0);
    
    grd.addColorStop(overflow(1,0+x), colors[0]);
    grd.addColorStop(overflow(1,1/7+x),colors[1]);
    grd.addColorStop(overflow(1,2/7+x),colors[2]);
    grd.addColorStop(overflow(1,3/7+x),colors[3]);
    grd.addColorStop(overflow(1,4/7+x),colors[4]);
    grd.addColorStop(overflow(1,5/7+x), colors[5]);
    grd.addColorStop(overflow(1,6/7+x), colors[6]);
    x+=0.01
    return grd;
}

function configure() {
    ctx.canvas.width  = window.innerWidth;
    canvasEl.setAttribute("height","400px");
    if (window.innerWidth <= 425) {
        canvasEl.setAttribute("height","150px");
    }
    mengde = 35;
    while ((canvasEl.width+buffer)/buffer < mengde) {
        mengde -=1;
    }
    xVerdier = tilfeldig(0,(canvasEl.width+buffer)/buffer,mengde,true)
    yVerdier = tilfeldig(0,(canvasEl.height+buffer),mengde)
    tempX = [];
    size = []
    for (i=0;i<mengde;i++) {
        tempX.push(xVerdier[i]*buffer);
        size.push(Math.random()*10+5);
    }
}

let a = 0;
let starmap = 0;
let antall = 0;
let degrees = 180;
let grader = 0;
let mengde = 35;
let buffer = 20;
while ((canvasEl.width+buffer)/buffer < mengde) {
    mengde -=1;
}
let xVerdier = tilfeldig(0,(canvasEl.width+buffer)/buffer,mengde,true)
let yVerdier = tilfeldig(0,(canvasEl.height+buffer),mengde)
let tempX = [];
let size = [];

for (i=0;i<mengde;i++) {
    tempX.push(xVerdier[i]*buffer);
    size.push(Math.random()*10+5);
}


function draw(tekst="HJEM") {
    let lengde = tekst.length
    if (lengde <=4) {
        lengde = 5
    }
    let str = window.innerWidth/lengde;
    let placement = canvasEl.height/2;
    if (placement < str) {
        placement = str;
    }
    ctx.clearRect(0,0,canvasEl.width,canvasEl.height);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvasEl.width,canvasEl.height)
    for (i=0;i<xVerdier.length;i++) {
        drawStar(overflow(canvasEl.width+buffer,tempX[i]+starmap/2)-buffer,overflow(canvasEl.height+buffer,yVerdier[i]+starmap/4)-buffer,size[i],"white")
    }
    ctx.fillStyle = rainbow();
    ctx.font = str+"px Generale"
    ctx.fillText(tekst,canvasEl.width/2-(tekst.length*str*100/140)/2,placement);
    drawRotated(degrees)
    if (a > canvasEl.height+15) {
        a=0;
        if (canvasEl.width/2-a-canvasEl.height*antall < -canvasEl.width/2) {
            grader += 180;
            antall=0;
        } else {
            antall++;
        }
        if (degrees%180===0) {
            degrees=+90;
            degrees+=grader;
        } else {
            degrees = 180;
            degrees+=grader
        }
    }
    a+=3;
    starmap++;
}

function drawRotated(degrees){
    ctx.save();
    ctx.translate(canvasEl.width/2,canvasEl.height/2);
    ctx.rotate(degrees*Math.PI/180);
    if (degrees%180===0) {
        ctx.drawImage(rakett,canvasEl.width/2-a-canvasEl.height*antall,canvasEl.height/2-a);
    } else {
        ctx.drawImage(rakett,canvasEl.height/2-a,canvasEl.width/2-a-canvasEl.height*antall);
    }
    ctx.restore();
}  


let menyEl = document.createElement("h1");
menyEl.innerHTML = "Meny";
menyEl.id = "menu";
document.querySelector("#head").appendChild(menyEl);
let headEl = document.querySelector("#head");
let linksEl = document.querySelector("#index");
menyEl.addEventListener("click",menyFunk);
function menyFunk() {
    if (headEl.style.height !== "600px") {
        headEl.style.height = "600px";
        linksEl.style.display = "flex";
    }
    else {
        headEl.style.height = "200px";
        linksEl.style.display = "none";
    }
}
