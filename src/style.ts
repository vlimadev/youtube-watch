import styled from "styled-components";

export const Container = styled.main `
    width: relative;
    
    margin: 20 auto;
    height: relative;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h1 `
    font-family: 'youtube Sans';
    font-style:normal;
    font-size:60px;
    width: 420px;
    margin-bottom:20px;
    margin-left: 50px;
    line-height:50px;

    color: #FFFFFF;
`

export const TextContent = styled.p `
    font-family: 'youtube Sans dark';
    font-style: normal;
    font-size: 16px;
    width: 420px;
    margin-bottom:20px;
    line-height:60px;

    color: #FFFFFF;
`

export const PlayerContainer = styled.div`
    width: 90%;
    height: 600px;
    margin:20px;
    background-image:"../../assets/3673211.jpg";
   
`

export const CharactersImage = styled.img`
width: 800px;
min-width:200px;
height: 600px;
min-height:300px

`
