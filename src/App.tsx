import React from "react"
import axios from "axios"
import { initializeApp } from "firebase/app";
import { getDatabase,ref , set, get, child } from "firebase/database";

import Header from "./components/Header"
import { PlayerContainer, CharactersImage, Container ,Title, TextContent} from "./style"
import { VideoList } from "./components/VideoList/VideoList"
import ReactPlayer from 'react-player/youtube'
import characters from "./assets/characters.png"
import { VideoError } from "./components/videoError";



const api_key = "AIzaSyBlAzpfx89n_7vzJ-Bs5XQu1ccQXfzqUpk"


export default class App extends React.Component {

// estados iniciais

state = {
  videoMetaInfo:[],
  selectedVideoId:null,
  videoProgress:0,
  playAndPause:false,
  videoDone:false,
  wasSearch:false,
  er:false,

  // tudo que vem do firebase
  p:0,
  videoIdDb:null,
  playPauseDb:true,
  
  
}

//configs firebase
 firebaseConfig = {
    apiKey: "AIzaSyBlAzpfx89n_7vzJ-Bs5XQu1ccQXfzqUpk",
    authDomain: "watch-party-7a698.firebaseapp.com",
    databaseURL: "https://watch-party-7a698-default-rtdb.firebaseio.com",
    projectId: "watch-party-7a698",
    storageBucket: "watch-party-7a698.appspot.com",
    messagingSenderId: "490953233273",
    appId: "1:490953233273:web:ac0af7dc5f9b89bc9695a8"
};

 app = initializeApp(this.firebaseConfig);
 database = getDatabase(this.app);

// faz o envio de parametros obtidos para o firebase
 WriteUserData( videoId:any , videoProgress:any):any {
  const db = getDatabase();
    set(ref(db, 'videoId/' ),{
     
      videoId: videoId,
      progress: videoProgress,
      
    });  
}

//Retorna parametros salvos no firebase
 getData():any  {
  
  const dbRef = ref(getDatabase());
    
   get(child(dbRef, `videoId/videoId`)).then((snapshot) => {
     if (snapshot.exists()) {
       const item= Object.values( snapshot.val());
        this.setState({p:item[2]});
        this.setState({videoIdDb:item[1]});
        this.setState({playPauseDb:item[0]});       
     } 
     else {
       console.log("No data available");
     }
   }).catch((error) => {
        console.error(error);
   });  
}


//quando o video for selecionado enviar o videoId para o state selectedVideoId
onVideoSelected  = (videoId: any) => {
    this.setState({selectedVideoId:videoId});
    this.setState({videoIdDb:videoId});
    this.setState({er:false});  
}

// tempo atual do video
videoTime =(params:any) =>{
  var time = params.playedSeconds;
    this.setState({videoProgress:time});     
}

onReady = () =>{
  
}

onStart = () => {
  this.getData;
  this.setState({videoDone:true});
   
}

onPause = () =>{
  this.setState({playAndPause:false}); 
}

onEnded = () =>{
  setTimeout(() => {
    this.setState({videoProgress:0});
  },2000)
}

componentDidMount(){
  this.getData();
  
}

componentDidUpdate(prevProps:any, prevState:any, snapshot?: any): void {

  // if(prevState.videoProgress >= 5){
  //   if(prevState.playPauseDb!== this.state.playPauseDb && this.state.videoDone === true ){
  //     console.log("pausou")
  //     window.location.reload()      
  //   }
  // }  
};

// Funçao que chama a api do Youtube fazendo uma busca com os parametros determinados em params
onSearch = async (keyword:any) =>{
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`,{
        params : {
            key:api_key,
            part:"snippet,id",
            maxResults:20,
            q:keyword, // Pega o que ta escrito no input para realizar pesquisa
            enablejsapi:0,          
        }
    })
 
    // seta novos estados aos states
    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
      videoIdDb : response.data.items[0].id.videoId,
      wasSearch : true
  })

}
  render(){

    let {videoProgress} = this.state;
    let {p} = this.state;

    //Se não tiver nenhum video selecionado
    if (!this.state.videoIdDb) {
      
    return(
      <>
      <Header onSearch={this.onSearch}/> 
        <PlayerContainer>
          <Container>
            <Title>Assista a videos com quem quiser em tempo real.
                    <br/>
                    <TextContent>Pesquise um video e inicie a diversão.</TextContent>
            </Title>
            
          <CharactersImage src={characters}/>
          </Container>
        </PlayerContainer>
      </>
    )}
    // // se tiver
    return(
      
      <>
     
      <Header onSearch={this.onSearch}/> 
        <PlayerContainer>
          {!this.state.er && 
          
          <ReactPlayer        
          // url={`https://www.youtube.com/watch?v=${"AX1TvIglhno"}?t=${p}`}
          url={`http://www.youtube.com/embed/${this.state.videoIdDb}?t=${p}`} 
          controls={true}
          onProgress={this.videoTime}
          onStart={this.onStart}
          onPause={this.onPause }
          onReady={this.onReady}
          onPlay={() => this.setState({playAndPause:true}) }
          playing={this.state.playPauseDb}
          onError={() => this.setState({er:true})}
          onEnded={this.onEnded}

          width={"60%"}
          height={"600px"}
          style={{borderRadius:"20px",boxShadow:" 0px 6px 10px black", overflow: "hidden", marginLeft:"20%"}}
          />}
          
          {this.state.er && <VideoError></VideoError>}
          </PlayerContainer>
            <this.WriteUserData videoId={this.state.selectedVideoId} videoProgress={videoProgress} playause={this.state.playAndPause}></this.WriteUserData>
            {this.state.wasSearch && <VideoList onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo}/> }
              
      </>
    )

  }
}



