import React ,{ useState, useEffect } from 'react';
import {Wrapper, Title, Container, Column, Row} from './style';
import { Input } from '../Input';
import { Player } from '../Player';
import ReactPlayer from 'react-player'
import  "youtube-video-js"

export const Header = (props:any) => {

    return(<>
        <Wrapper>
            <Container>
                <Row>
                    <Title>Youtube Watch Party</Title>   
                    <Input/>          
                </Row>
            </Container>   
        </Wrapper>
        <ReactPlayer url="https://www.youtube.com/watch?v=co00VsMcOjg" width="100%" height="500px" />
        <Player></Player>
        

        {/* <youtube-video
    width="980"
    height="360"
    src="https://www.youtube.com/watch?v=co00VsMcOjg"
    autoplay
    controls
/> */}
        </>   
    )
}





