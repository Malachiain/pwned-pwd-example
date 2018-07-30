import {progressReducer, userReducer,PROGRESSION, initalUser} from './index'
import {ACTION_TYPE} from '../actions'
describe('progress reducer',()=>{
    it('Should start with password entry',()=>{
        expect(progressReducer(undefined,{})).toEqual(PROGRESSION.ENTER)
    })
    it('Should start loading when we do a check', ()=>{
        expect(progressReducer(undefined,{type:ACTION_TYPE.CHECK_STATUS}))
        .toEqual(PROGRESSION.LOADING)
    })
    it('Should start loading when we do a check', ()=>{
        expect(progressReducer(undefined,{type:ACTION_TYPE.UPDATE_STATUS}))
        .toEqual(PROGRESSION.RESULT)
    })
    it('Should start loading when we do a check', ()=>{
        expect(progressReducer(undefined,{type:ACTION_TYPE.RESET}))
        .toEqual(PROGRESSION.ENTER)
    })  
    it('Should set the progression to failure if there is an Error', ()=>{
        expect(progressReducer(undefined,{type:ACTION_TYPE.ERROR}))
        .toEqual(PROGRESSION.FAIL)
    })  
})

describe('user reducer', ()=>{
    it('Should start with the inital user',()=>{
        expect(userReducer(undefined,{})).toEqual(initalUser)
    })
    it('Should update the users password',()=>{
        expect(userReducer(undefined,{
            type:ACTION_TYPE.UPDATE_PASSWORD,
            password:'abc123'}))
            .toEqual({
                password:'abc123',
                hash:'',
                status: ''
            })
    })
    it('Should update the hash',()=>{
        expect(userReducer(undefined,{
            type:ACTION_TYPE.UPDATE_HASH,
            hash:'#hash'}))
            .toEqual({
                password:'',
                hash:'#hash',
                status: ''
            })
    })
    it('Should update the status',()=>{
        expect(userReducer(undefined,{
            type:ACTION_TYPE.UPDATE_STATUS,
            status:'All good'}))
            .toEqual({
                password:'',
                hash:'',
                status: 'All good'
            })
    })
    it('Should reset back to the inital user',()=>{
        expect(userReducer({
            password:'abc123',
            hash:'#hash',
            status: 'All good'
        },{
            type:ACTION_TYPE.RESET}))
            .toEqual(initalUser)
    })

})