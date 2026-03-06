const audio = document.getElementById("audio")
const playBtn = document.getElementById("playBtn")
const progress = document.getElementById("progress")
const time = document.getElementById("time")

playBtn.onclick = () => {

if(audio.paused){
audio.play()
playBtn.innerHTML="❚❚"
}else{
audio.pause()
playBtn.innerHTML="▶"
}

}

audio.addEventListener("timeupdate",()=>{

let percent = (audio.currentTime / audio.duration) * 100
progress.style.width = percent + "%"

let minutes = Math.floor(audio.currentTime / 60)
let seconds = Math.floor(audio.currentTime % 60)

if(seconds < 10){
seconds = "0"+seconds
}

time.innerText = minutes + ":" + seconds

})

const images = [
"foto1.jpg",
"foto2.jpg",
"foto3.jpg",
"foto4.jpg",
"foto5.jpg",
"foto6.jpg"
]

let i = 0

setInterval(()=>{

i++

if(i >= images.length){
i = 0
}

document.getElementById("slide").src = images[i]

},5000)
