import React from 'react'
import {connect} from 'react-redux'
import {reset} from '../../actions'
import {Button, Section, SectionHeading} from '../shared'
import {bindActionCreators} from 'redux'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown'

export function Failure({reset}){
    return (
        <Section>
         <SectionHeading>Something went wrong.  </SectionHeading>
         <SectionHeading><FontAwesomeIcon icon={faFrown} size="2x"/>  </SectionHeading>
         <Button onClick={()=>{reset()}}>Try again?</Button>
        </Section>
    )
}

function mapState(){
    return {}
}

function mapDispatch(dipatch){
    return {
    reset: bindActionCreators(reset,dipatch),
    }
}

export default connect(mapState,mapDispatch)(Failure)