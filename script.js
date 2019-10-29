

/*function spelaPiano(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
          key = document.querySelector(`.tangent[data-key="${e.keyCode}"]`);
           console.log(audio);
           console.log(key);
 if(!key) return;
audio.currentTime = 0;
key.classList.toggle("activ");

   audio.play();
}
window.addEventListener('keydown', spelaPiano());*/
var tangents = document.getElementsByClassName("tangent");

tangents[0].addEventListener("mouseover", function () {
    document.getElementById("ton_1").play();
  })
    
tangents[1].addEventListener("mouseover", function () {
    document.getElementById("ton_2").play();
})
tangents[2].addEventListener("mouseover", function () {
    document.getElementById("ton_3").play();                
        })   
tangents[3].addEventListener("mousover", function () {
    document.getElementById("ton_4").play();
})
tangents[4].addEventListener("mouseover", function () {
    document.getElementById("ton_5").play();
    
})
tangents[5].addEventListener("mouseover", function () {
    document.getElementById("ton_6").play();
    
})
tangents[6].addEventListener("mouseover", function () {
    document.getElementById("ton_7").play();
    
})

document.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.key) {
        case "a":
            document.getElementById("ton_1").play();
            break;
        case "s":
            document.getElementById("ton_2").play();
            break;
        case "d":
            document.getElementById("ton_3").play();
            break;
        case "f":
            document.getElementById("ton_4").play();
            break;
        case "g":
            document.getElementById("ton_5").play();
            break;
        case "h":
            document.getElementById("ton_6").play();
            break;
        case "j":
            document.getElementById("ton_7").play();
            break;
        default:
            return;
    }
    event.preventDefault();
}, true)







