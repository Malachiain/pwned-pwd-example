import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updatePassword, checkStatus} from '../../actions'
import {Div,Button,Input,Label} from '../shared'



function User({userName, password, updateUserName, updatePassword, hash, status, checkStatus}){
    return (
        <Div>
                <Label htmlFor="password">Password</Label>
                <Input  id="password" value={password} onChange={(event)=>{updatePassword(event.target.value)}}/>
                <Button onClick={()=>checkStatus(password)}>Check password</Button>
        </Div>
    )
}

function mapState(state){
    return {
        password: state.userReducer.password,
        hash: state.userReducer.hash,
    }
}

function mapDispatch(dipatch){
    return {
    updatePassword: bindActionCreators(updatePassword,dipatch),
    checkStatus: bindActionCreators(checkStatus,dipatch),
    }
}

export default connect(mapState,mapDispatch)(User)