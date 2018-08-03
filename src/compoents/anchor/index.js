import React from 'react'
import styled from 'styled-components'
import {Colours} from '../shared'

const Anc = styled.a`
color: ${Colours.link};
&:hover {
    color: lightblue;
} 
&:active {
    color: darkpink;
}
`

export default function({href, content}){
    return (<Anc href={href} target="_blank" rel="noopener noreferrer">{content}</Anc>)
}
