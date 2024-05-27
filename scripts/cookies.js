let yesEl = document.querySelector("#yes");
let noEl = document.querySelector("#no");            
yesEl.addEventListener("click", cookies);
noEl.addEventListener("click", noCookies);
let cookieEl = document.querySelector("#cookie");

function cookies() {
    localStorage.setItem("cookies","true");
    cookieEl.style.display = "none";
}
function noCookies() {
    localStorage.setItem("cookies","false");
    cookieEl.style.display = "none";
}
if (localStorage.getItem("cookies") === "true") {
    document.getElementById("cookie").style.display = "none";
    cookieEl.style.display = "none";
}
