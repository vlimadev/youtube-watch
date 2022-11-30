import React from 'react'

import { FaPlay } from 'react-icons/fa';

import { InputContainer, InputText, SearchButton} from './style'

const  Input = ({props, name, ...rest}: any) => {



  const searchInput = (e: { keyCode: number; target: { value: any; }; }) => {
    if(e.keyCode === 13){
        const dataInput = e.target.value
        props = dataInput
        console.log(props)

        
    }
    
}


  return (
   
    <InputContainer>
        <InputText type="text" placeholder=" Inserir URL" onKeyDown={(e: any)=>searchInput(e)} {...Input}/>
        <SearchButton  type="submit" >      
           <FaPlay/>
        </SearchButton>
    </InputContainer>
    
  )
}

export { Input }