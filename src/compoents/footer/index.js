import React from 'react'
import styled from 'styled-components'
import {DivColumn, Content, P, Label} from '../shared'
import Anchor from '../anchor'
import {Colours} from '../shared'




const Foot = styled.div`
min-height:200px;
margin: 40px 0 0 0;
display:flex;
flex-direction:column;
`
const Border = styled.div`
min-height:30px;

background-color:${Colours.backgroundPrimary};
`

export default function(){
    return (<Foot>
            <Border />
            <Content>
                <DivColumn>
                    <P>This website uses a tool built by <Anchor href="https://troyhunt.com" content="Troy Hunt"/>. 
                    It callse the pwned passwords v2 API which references a data 
                    set of 500 million passwords that have been disclosed in data breaches. Troy collects the breaches and makes them
                    avalible at <Anchor content="have I been pwned" href="https://haveibeenpwned.com/" /> Go check out if you have been
                    in a data breach</P>
                </DivColumn>
                <DivColumn>
                    <Label >Useful resources </Label>
                    <ul>
                        <li><Anchor content="https://haveibeenpwned.com/" href="https://haveibeenpwned.com/" /></li>
                        <li><Anchor content="https://troyhunt.com" href="https://troyhunt.com" /></li>
                    </ul>
                    <Label >Source code of this project </Label>
                    <ul>
                        <li><Anchor content="https://github.com/Malachiain/pwned-pwd-example" href="https://github.com/Malachiain/pwned-pwd-example" /></li>
                    </ul>
                
   
                </DivColumn>
            </Content>
         </Foot>)
}