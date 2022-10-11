url = window.location.href

console.log(url)

function showMenu(){
    var currentMenuState = document.getElementById("burgerMenu");
    if(currentMenuState.style.display == "block"){
        currentMenuState.style.display = "none";
    }
    else{//it must be none
        currentMenuState.style.display ="block"
    }
    
}
window.addEventListener("resize", function(resizeWindow){
    var currentMenuState = document.getElementById("burgerMenu");
    if(document.body.clientWidth >= 890){
        currentMenuState.style.display ="flex"
    }
    else{
        currentMenuState.style.display ="none"
    }
})