import styled from "styled-components";

export const ListContainer = styled.div `
    margin:10px;
    height:600px;
    

`
export const Subtitle = styled.h3 `
    text-align:center;
    font-family:monospace;
    padding: 20px;

`

export const ListVideosContainer = styled.div`
    margin:10px;
    height:350px;
    border-radius:20px;
    background: #262526;
    overflow:  auto;
    ::-webkit-scrollbar {
            width: 2px;
            
        }
      
        /* Track */
        ::-webkit-scrollbar-track {
            border-radius: 5px;

            
        }
      
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #FF0000;
            border-radius: 20px;
        }
      
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
            
        }
    display: flex;
`