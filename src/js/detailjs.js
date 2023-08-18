export function changeImage(imageClick){

    let showImage = document.getElementById("MainImage");

    console.log(showImage);

    showImage.src = imageClick;

    console.log(showImage);

    console.log(imageClick)
}

export function changeColorFav(){
    let icon = document.getElementById("icon");

    console.log(icon.style.color);

    if(icon.style.color == "black"){
        icon.style.color = "red";
        icon.style.transition = "1s linear";

    }else{
        icon.style.color = "black";
        icon.style.transition = "1s linear";

    }
}