import React from 'react'
import {connect} from 'react-redux'
import {reset} from '../../actions'
import {Div,Button,P} from '../shared'
import {bindActionCreators} from 'redux'

function result({status, reset}){
    return (
        <Div>
            <P>{status}</P>
            <Button onClick={()=>{reset()}}>Check another password</Button>
        </Div>
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