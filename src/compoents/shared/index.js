import styled from 'styled-components'

export const DivColumn = styled.div`
display: flex;
flex-direction: column;
margin:10px;
padding: 20px;
width:30%;

`
export const Content = styled.div`
display: flex;
flex-direction: row;
margin:10px;
margin:auto;
justify-content:center;

`

export const Section = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`
export const SectionHeading = styled.h3`
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size:2em;
font-weight:bolder;
margin:2px;
`


export const P = styled.p`
font-family:'Times New Roman', Times, serif;
font-size: medium;
padding: 10px;
margin:5px;
`
export const Button = styled.button`
    background-color: limegreen;
    border-radius: 1em;
    width: 175px;
    height: 50px;
    color: whitesmoke;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight:bold;
    font-size: 1em;
`

export const Input = styled.input`
    max-width:200px;
    margin: 20px 0;
`

export const Label = styled.label`
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:black;
`