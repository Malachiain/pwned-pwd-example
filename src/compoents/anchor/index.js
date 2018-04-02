import React from 'react'
import styled from 'styled-components'

const Anc = styled.a`
color: hotpink;
`

export default function({href, content}){
    return (<Anc href={href} target="_blank" rel="noopener noreferrer">{content}</Anc>)
}
