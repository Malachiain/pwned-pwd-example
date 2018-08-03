import React from 'react'
import styled from 'styled-components'
import {Colours} from '../shared'


const Title = styled.h1`
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
margin-bottom:0;
font-size: 12px;
color: ${Colours.backgroundSecondary};
@media (min-width: 700px) {
    font-size: 32px;
  }
`

const Head = styled.div`
display:flex;
background-color:${Colours.backgroundPrimary};
flex-direction:column;
min-height:50px;
align-items:center;

justify-content:center;
margin: 0 0 40px 0;
@media (min-width: 700px) {
    min-height:150px;
  }

`
export default function(){
    return (<Head>
    <Title>Databreach Password Checker</Title>
    </Head>)
}
