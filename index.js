
const play =document.getElementById("beg-play")

const mainAudio = document.getElementById("main-audio");
const buttonAudio = document.getElementById("button-audio");
    mainAudio.volume=0.5;
    mainAudio.play();

play.addEventListener("click",(e)=> {
    e.preventDefault();

    const nameval=document.getElementById("nickname-input").value
    const namevalue= document.getElementById("name-input").value

    

    console.log(nameval.length,namevalue)

    if(nameval.length===0 || namevalue.length===0){
        alert("Please Fill both section")
    }
    else{
        localStorage.setItem("nickname-input",nameval)
        window.location.href="./difficultypage.html"
        buttonAudio.play();
    }
});
