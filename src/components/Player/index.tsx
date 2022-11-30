import {useState, useEffect} from "react";
import axios from "axios";
import {YoutubeDataAPI} from "youtube-v3-api"
import  "youtube-video-js"  

const api_key = "AIzaSyBlAzpfx89n_7vzJ-Bs5XQu1ccQXfzqUpk"
const pesquisa = "lullaby nickelback"

// axios.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet,id&order=date&maxResults=${5}&q=${pesquisa}`)
// .then(function (response) {
//   // handle success
//   console.log(response.data.items);
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })

//////////////////////////////////////////////////////////////////////////////




export const Player = () => {

    // const api = new YoutubeDataAPI(api_key);

// api.searchAll("Node Js",25).then((data) => {
//   console.log(data);
// },(err) => {
//   console.error(err);
// })
 
return (
    <>
    </>
)
}

