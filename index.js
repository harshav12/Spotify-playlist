let songindex=0;
let audioElement=new Audio("songs/1.mp3");
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
// array of objects
let iconplay=Array.from(document.getElementsByClassName('songitemplay'));
let mastersong=document.getElementById("mastersongname");
let songs=[
    {songName: "Baby - Justinbeiber", filePath: "1.mp3", coverPath:"1.png"},
    {songName: "Let me Love You -DJ Snake", filePath: "2.mp3", coverPath:"2.jpg"},
    {songName: "Love me - Justinbeiber", filePath: "3.mp3", coverPath:"3.jpg"},
    {songName: "Memories - Maroon 5", filePath: "4.mp3", coverPath:"4.jpeg"},
    {songName: "Stay- Justinbeiber", filePath: "5.mp3", coverPath:"5.png"},
    {songName: "Love to Loose- Georgia Ku and Sandro Cavazza", filePath: "6.mp3", coverPath:"6.jpeg"},
    {songName: "Eeeni meeni mo - Sean Kingston and Justinbeiber", filePath: "7.mp3", coverPath:"7.jpg"},
    {songName: "Hymn for the weekend - Coldplay", filePath: "8.mp3", coverPath:"8.jpeg"},
    {songName: "Let me down Slowly - Alec Benjamin", filePath: "9.mp3", coverPath:"9.jpeg"},
    {songName: "Tie me down - Elley Duhe and Gryffin", filePath: "10.mp3", coverPath:"10.jpg"}         

]
songitems.forEach((element,i)=>{
        element.getElementsByTagName("img")[0].src=songs[i].coverPath;
})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime==0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        audioElement.pause();
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value)*(audioElement.duration)/100;
})
    // event object e
    //The target property returns the element where the event occured.
    //The target property is read-only.
function makeallplays(){
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}
iconplay.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        mastersong.innerText=songs[songindex-1].songName;
        audioElement.currentTime=0;
        audioElement.src=songs[songindex-1].filePath;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        audioElement.play();
        gif.style.opacity=1;
    })
})
document.getElementById("next").addEventListener('click',()=>{
    if(songindex==10){
        songindex=1;
        mastersong.innerText=songs[songindex-1].songName;
        audioElement.currentTime=0;
        audioElement.src=songs[songindex-1].filePath;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else{
        songindex++;
        mastersong.innerText=songs[songindex-1].songName;
        audioElement.currentTime=0;
        audioElement.src=songs[songindex-1].filePath;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
})
document.getElementById("previous").addEventListener('click',()=>{
    if(songindex==1){
        audioElement.currentTime=0;
        audioElement.src=songs[songindex-1].filePath;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else{
        songindex--;
        mastersong.innerText=songs[songindex-1].songName;
        audioElement.currentTime=0;
        audioElement.src=songs[songindex-1].filePath;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
})

