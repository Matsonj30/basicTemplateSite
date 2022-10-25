



function showPage(){ //for mainMenu Section
    url = window.location.href;
    console.log(url);
    switch(url){
        case "http://192.168.4.22:5500/templates/home.html":
            var currentPageTab = document.getElementById("homePage");
            currentPageTab.style.borderBottom = "3px solid #025b6d"
            break
        case "http://192.168.4.22:5500/templates/gallery.html":
            var currentPageTab = document.getElementById("galleryPage");
            currentPageTab.style.borderBottom = "3px solid #025b6d"
            break
        case "http://192.168.4.22:5500/templates/about.html":
            var currentPageTab = document.getElementById("aboutPage");
            currentPageTab.style.borderBottom = "3px solid #025b6d"
            break
    }
  {
     
    }
}

function showMenu(){ //for mainMenu section
    var currentMenuState = document.getElementById("burgerMenu");
    if(currentMenuState.style.display == "block"){
        currentMenuState.style.display = "none";
    }
    else{//it must be none
        currentMenuState.style.display ="block"
    }
    //this is def better to do by switching the class name isntead of styling in JS
}


function changePicture(pictureNumber){ //for gallery section
    var topImages = document.getElementsByClassName("picture")
   
    for(let i = 0; i < topImages.length; i++){
        topImages[i].style.display = "none";
    }
    if(pictureNumber == 11){
        var selectedImage = document.getElementById("img"+0)
    } //go to start
    else if(pictureNumber == -1){
        var selectedImage = document.getElementById("img"+10) 
    }
    else{
        var selectedImage = document.getElementById("img"+pictureNumber)
    }
    selectedImage.style.display = "block"
}

function arrowChange(directon){ //for gallery section
    var topImages = document.getElementsByClassName("picture")

    for(let i = 0; i < topImages.length; i++){
        if(topImages[i].style.display == "block"){
            changePicture(i + directon)
            break
        }
    }
}

showPage()
var firstImage = document.getElementById("img0")
firstImage.style.display = "block"
