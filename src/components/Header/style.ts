import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 90px;
    
`
export const Title = styled.h1`
    color: #FFFFFF;
    font-family: 'YouTube Sans', sans-serif;
    
`

export const TitleRed = styled.h1 `
    font-family: 'youtube Sans';
    color: red;
    width: 20px;
    font-size: 35px;
    display: inline-block;
`

export const Input = styled.input `
    background-color: #282828;
    color: #FFFFFF;

    width: 500px;
    height:40px;

    border: 1px solid black;
    border-radius:15px;

    text-align:center;

    :hover {
    background: #3f3d3f;
}
    
`
export const Container = styled.form`
    width: 100%;
    max-width: 100%;
    height: 90px;
    
`
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
    width: 100%;
    height: 100%;
    
`
export const Button = styled.button`
border:none;
border-radius:20px;
width:40px ;
height: 40px;
background: red;

cursor: pointer;

 :hover{
    background: #dd0808;
    color:white
    
 }

`
export const InputContainer = styled.div`
   background: red;
   border-radius:40px;
    
`