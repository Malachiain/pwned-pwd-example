import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
margin-bottom:0;
`

const Head = styled.div`
display:flex;
background-color:chartreuse;
flex-direction:column;
min-height:200px;
align-items:center;
justify-content:center;
margin: 0 0 40px 0;

`
export default function(){
    return (<Head>
    <Title>Databreach Password Checker</Title>
    </Head>)
}
