



function showPage(){
    url = window.location.href;
    console.log(url);
    
    if(url == "http://192.168.4.22:5500/templates/home.html"){
        var currentPageTab = document.getElementById("homePage");
        console.log(currentPageTab)
        currentPageTab.style.borderBottom = "3px solid #74A57F"
        
    }
}

function showMenu(){
    var currentMenuState = document.getElementById("burgerMenu");
    if(currentMenuState.style.display == "block"){
        currentMenuState.style.display = "none";
    }
    else{//it must be none
        currentMenuState.style.display ="block"
    }
    //this is def better to do by switching the class name isntead of styling in JS
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

showPage()