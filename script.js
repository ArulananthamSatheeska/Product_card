let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "image/pic1.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
        this.classList.add("active");
}

btn[1].onclick = function(){
    productImg.src = "image/pic2.jpg";
    for(bt of btn){
        bt.classList.remove("active");
     }

        this.classList.add("active");
}

btn[2].onclick = function(){
    productImg.src = "image/pic3.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }

    this.classList.add("active");
}

btn[3].onclick = function(){
     productImg.src = "image/pic4.jpg";
    for(bt of btn){
         bt.classList.remove("active");
    }

    this.classList.add("active");
}

let red = document.getElementById("red");
let green = document.getElementById("green");
let orange = document.getElementById("orange");
let yellow = document.getElementById("yellow");

red.addEventListener('click', function(){
    productImg.src = "image/pic1.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
        this.classList.add("active");
})

green.addEventListener('click', function(){
    productImg.src = "image/pic2.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
        this.classList.add("active");
})

orange.addEventListener('click', function(){
    productImg.src = "image/pic3.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
        this.classList.add("active");
})

yellow.addEventListener('click', function(){
    productImg.src = "image/pic4.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
        this.classList.add("active");
})