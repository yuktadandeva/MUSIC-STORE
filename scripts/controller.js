
import { signInWithGoogle } from "./utils/oauth.js";
import { playlistOperations } from "./utils/playlist-service.js";

window.addEventListener('DOMContentLoaded', displaySongs);

function getValue(){
    const input = document.getElementById('searchInput').value;
    console.log(input);
    

    const title = document.querySelector('.title');
    const result = document.createElement('h2');
    result.innerText = "Result" 
    title.appendChild(result);

    document.querySelector('.song-items').innerHTML = '';
    getArtistSongs(input);


}

function displaySongs(){
    
    getArtistSongs("Lana Del Rey");
    getArtistSongs("Chappell Roan");

    const button = document.querySelector('.search-button');
    button.addEventListener('click', getValue);

    const loginButton = document.querySelector('#login');
    loginButton.addEventListener('click',login);

}

const login = async ()=>{
try{
    const user = await signInWithGoogle();
    
  
        document.querySelector("#login").innerText = "LOGOUT"
        const userDiv = document.querySelector(".user-info");
        const p = document.createElement('p');
        p.innerText = "Hi ," + user.displayName;
        userDiv.appendChild(p);

   
}catch{
    console.log("error")
}
   

}

async function getArtistSongs(artist){
    
    try{
    const songs = await playlistOperations.getSongsData(artist);
    printSongs(songs);
}catch(err){
        throw err;
    }
}


function printSongs(songs){
   
    for(let song of songs){
        printSongCard(song);
    }
}

function printSongCard(song){

playlistOperations.songs.push(song);

const mainDiv = document.querySelector('.song-items');

const songBody = document.createElement('div');
songBody.className = "song-item"

const imgDiv = document.createElement('div');
imgDiv.className = "imgDiv";

const songImg = document.createElement('img');
songImg.src = song.img;

const songName = document.createElement('h4');
songName.innerText = song.name;

const artistName = document.createElement('h5');
artistName.innerText = song.artist;

const play = document.createElement('button');
play.innerText = "play";
play.addEventListener('click', ()=>playMusic(song.audio, song.name, song.artist));



const btn = document.createElement('button');
btn.innerText = "add to playlist";
btn.setAttribute('songId',song.id);
btn.addEventListener('click', addToPlaylist);

imgDiv.appendChild(songImg);
songBody.appendChild(imgDiv);
songBody.appendChild(songName);
songBody.appendChild(artistName);
songBody.appendChild(play);
songBody.appendChild(btn);
mainDiv.appendChild(songBody);

}

function addToPlaylist(){
 const id = this.getAttribute('songId');

 playlistOperations.addToPlaylist(id);
 printPlaylist();

}


function removeFromPlaylist(){
    const deleteId = this.getAttribute('id');
    playlistOperations.deleteFromPlaylist(deleteId);

    printPlaylist();
}

function printPlaylist(){
    
    document.querySelector(".playlist-item").innerHTML = '';

    playlistOperations.playlist.forEach(song=>printCard(song));
}

function printCard(song){
    const playlist = document.querySelector(".playlist-item");

    const cartItem = document.createElement("div");
    cartItem.className = "playlist-item-song";

    const img = document.createElement('img');
    img.src = song.img;

    const songName = document.createElement('h5');
    songName.innerText = song.name;

    const artistName = document.createElement('h6');
    artistName.innerText = song.artist;
    
    const play = document.createElement('button');
    play.innerText = "play";
    play.addEventListener('click', ()=>playMusic(song.audio, song.name, song.artist));

    const remove = document.createElement('button');
    remove.innerText="remove";
    remove.setAttribute('id',song.id);
    remove.addEventListener('click', removeFromPlaylist);

    cartItem.appendChild(img);
    cartItem.appendChild(songName);
    cartItem.appendChild(artistName);
    cartItem.appendChild(play);
    cartItem.appendChild(remove);

    playlist.appendChild(cartItem);
    
}

function playMusic(url,name,artist){

    console.log('play called');

    console.log(url);
    const playDiv = document.querySelector('.audio');
    playDiv.innerHTML='';

    const label = document.createElement('label');
    label.innerText = name + " | " + artist;

    const audioTag = document.createElement('audio');
    audioTag.autoplay =true;
    audioTag.controls = true;

    const source = document.createElement('source');
    source.src = url;

    audioTag.appendChild(source);
    playDiv.appendChild(label);
    playDiv.appendChild(audioTag);
}
