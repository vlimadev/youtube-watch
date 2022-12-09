import React from 'react';
import { VideosConatiner, Thumbnail, TitlesVideos} from './style'

function selectedVideo(videoIdObj: { videoId: any; }, onVideoSelected: (arg0: any) => void){
    onVideoSelected(videoIdObj.videoId)
}

function getCss(imageUrl: any){
    const _styles = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        height: "100%",
        width:"450px",
        borderRadius:"20px", 
    };
    return _styles;
}

function constructVideoTitles(videosData: { snippet: any; id: any; }[], onVideoSelected: any){
    return videosData.map(({snippet, id}: any, index: React.Key | null | undefined) =>{
        return (
            <VideosConatiner key={index} onClick={() => selectedVideo(id, onVideoSelected)}>
                <Thumbnail style={getCss(snippet.thumbnails.high.url)} key={index}/>
                <TitlesVideos>{snippet.title}</TitlesVideos>
            </VideosConatiner>
        );
    });
}

export const Video = ({data, onVideoSelected}:any) => {
    return <>{constructVideoTitles(data, onVideoSelected)}</>
}