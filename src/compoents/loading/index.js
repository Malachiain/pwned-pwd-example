import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faSpinner'
import styled from 'styled-components' 
import {Colours} from '../shared'

const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
color: ${Colours.backgroundPrimary};
`

const Loading = () => (
    <Wrapper>
        <FontAwesomeIcon icon={faCoffee} size="10x"  spin/>
    </Wrapper>
)
 
export default Loading