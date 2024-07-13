function show(){
    console.log("shown")
    document.getElementById("form").style.display = "flex";
}

function hide(){
    document.getElementById("form").style.display = "none";
}

const activate = 0
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const image1 = document.getElementById("image2-1");
const image2 = document.getElementById("image2-2");
const image3 = document.getElementById("image2-3");
function row(activate){
    if(activate==1){
        row1.classList.add("activerow");
        image1.style.display = "flex";
        image2.style.display = "none";
        image3.style.display = "none";
        row2.classList.remove("activerow");
        row3.classList.remove("activerow");
    }else if(activate==2){
        row2.classList.add("activerow");
        image1.style.display = "none";
        image2.style.display = "flex";
        image3.style.display = "none";
        row1.classList.remove("activerow");
        row3.classList.remove("activerow");
    }else{
        row3.classList.add("activerow");
        image1.style.display = "none";
        image2.style.display = "none";
        image3.style.display = "flex";
        row1.classList.remove("activerow");
        row2.classList.remove("activerow");
    };
}