// export async function getSongsArtist01(){
//     const URL = "https://itunes.apple.com/search?term=lanadelrey&limit=5";

//     const response = await fetch(URL);
//     return response;
// }

// export async function getSongsArtist02(){
//     const URL = "https://itunes.apple.com/search?term=chappell roan&limit=5";

//     const response = await fetch(URL);
//     return response;
// }

// export async function getSongsArtist03(){
//     const URL = "https://itunes.apple.com/search?term=weeknd&limit=5";

//     const response = await fetch(URL);
//     return response;
// }

export const APICLIENT ={
    get: async (url)=>{
        try{
            const response = await fetch(url);
            const object = await response.json();
            return await object.results;

        }catch(err){
            throw new Error(err.message.toString());
        }
    },
    post:(data, url)=>{},

    update: (data, url, id)=>{},

    delete:(url, id)=>{}
}