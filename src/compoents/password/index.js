import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updatePassword, checkStatus} from '../../actions'
import {DivColumn, Content, Button,Input,Label, P,Section} from '../shared'



export function Password({ password, updatePassword, checkStatus}){
    return (
        <Section>
        <Content>
        
        <DivColumn>
                <Label htmlFor="password">Password</Label>
                <Input  type="password" id="password" value={password} onChange={(event)=>{updatePassword(event.target.value)}}/>
                <Button onClick={()=>checkStatus(password)}>Check password</Button>
        </DivColumn>
        <DivColumn>
            <P>
            Enter a password that you want to check. The password will not be recorded. Only the first 5 characters of the sha1 hash
            of your password will be sent to the API. Trusting people on the internet is a dangerous game, 
            so it is problably not a good idea to a enter a real password that you use.
            </P>
        </DivColumn>
        </Content>
        </Section>
    )
}

function mapState(state){
    return {
        password: state.userReducer.password,
    }
}

function mapDispatch(dipatch){
    return {
    updatePassword: bindActionCreators(updatePassword,dipatch),
    checkStatus: bindActionCreators(checkStatus,dipatch),
    }
}

export default connect(mapState,mapDispatch)(Password)