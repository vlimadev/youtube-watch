import React from "react";
import {ListContainer, ListVideosContainer, Subtitle} from './style'
import {Video} from "../Video/video"

export const VideoList = ({data, onVideoSelected}:any) => {
    return (
        <ListContainer>
            <Subtitle>
                Related Videos
            </Subtitle>
            <ListVideosContainer>            
                <Video data={data} onVideoSelected={onVideoSelected}/>
            </ListVideosContainer>
        </ListContainer>
    )

}