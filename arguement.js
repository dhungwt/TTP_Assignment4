let firstClick = false;

let firstArgue = document.createElement('p');
firstArgue.textContent = "I'm right!"

let argue = document.createElement('p');
argue.textContent = "No, I'm right!"

function buttonClick1(){
    if(!firstClick){
        document.querySelector(".b1").prepend(firstArgue);
        firstClick = true;
    }
    else{
        document.querySelector(".b2 > p").remove();
        document.querySelector(".b1").prepend(argue);
    }
}

function buttonClick2(){
    if(!firstClick){
        document.querySelector(".b2").prepend(firstArgue);
        firstClick = true;
    }
    else{
        document.querySelector(".b1 > p").remove();
        document.querySelector(".b2").prepend(argue);
    }
}