import songModel from "../model/song-model.js";
import { APICLIENT } from "./api-client.js";

export const playlistOperations = {
    songs:[],
    playlist: [],

    async getSongsData(artistName){

        try{
        const URL = `https://itunes.apple.com/search?term=${artistName}&limit=25`;
        const songs = await APICLIENT.get(URL);
        const allSongs = songs.map((song)=> new songModel(song.trackId,song.trackName,song.collectionName, song.artworkUrl100,song.previewUrl))
        console.log(allSongs)
        return allSongs;
        }catch(err){
            throw new Error(err.message.toString());
        }

    },

    addToPlaylist(id){

        const songInPlaylist = this.songs.find(song=> song.id == id);
        this.playlist.push(songInPlaylist);

    },

    deleteFromPlaylist(id){

        this.playlist = this.playlist.filter(song=>song.id != id);
        console.log(this.playlist);
    },

    viewAll(){
        
    }


}