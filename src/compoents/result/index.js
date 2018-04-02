import React from 'react'
import {connect} from 'react-redux'
import {reset} from '../../actions'
import {DivColumn,Button,P, Section, SectionHeading} from '../shared'
import {bindActionCreators} from 'redux'

function result({status, reset}){
    return (
        <Section>
         <SectionHeading>The results are in!</SectionHeading>
        <DivColumn>
            <P>{status}</P>
            <Button onClick={()=>{reset()}}>Check another password</Button>
        </DivColumn>
        </Section>
    )
}

function mapState(state){
    return {
        status: state.userReducer.status,
    }
}

function mapDispatch(dipatch){
    return {
    reset: bindActionCreators(reset,dipatch),
    }
}

export default connect(mapState,mapDispatch)(result)