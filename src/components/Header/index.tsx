import React,{Component}from "react";
import { FaSearch} from 'react-icons/fa';

import {Input, Wrapper, Title,TitleRed, Container,Row, Button, InputContainer} from './style'

class Header  extends React.Component <{onSearch:any}>{
    state={title:""}

    onSearchChanged = (event:any) =>{

        const _title = event.target.value

        this.setState({title:_title})
    }

    onSubmit = (event:any) => {
        event.preventDefault()

        console.log(this.state.title)

        this.props.onSearch(this.state.title)
    }


    render() {
        return(<>
            <Wrapper>
            <Container onSubmit={this.onSubmit}>
                <Row>
                    <Title>Youtube Watch  <TitleRed>Party</TitleRed></Title>
                    <InputContainer>
                    <Input
                        value={this.state.title}
                        onChange={this.onSearchChanged} 
                        id="input-search" 
                        type="text" 
                        placeholder="Insira o que deseja buscar ou cole um link"/>
                        <Button onClick={this.onSubmit}><FaSearch/></Button>
                        </InputContainer>
                        
                                     
                </Row>
            </Container>   
        </Wrapper>

            </>
        )
    }
}

export default Header