import { APICLIENT } from "./api-client.js";

export const playlistOperations = {
    songs:[],
    playlist: [],

    async getSongsData(artistName){

        try{
        const URL = `https://itunes.apple.com/search?term=${artistName}&limit=25`;
        const result = await APICLIENT.get(URL);
        return result.results;
        }catch(err){
            throw new Error(err.message.toString());
        }

    },

    addToPlaylist(id){

        const songInPlaylist = this.songs.find(song=> song.trackId == id);
        this.playlist.push(songInPlaylist);

    },

    deleteFromPlaylist(id){

        this.playlist = this.playlist.filter(song=>song.trackId != id);
        console.log(this.playlist);
    },

    viewAll(){
        
    }


}