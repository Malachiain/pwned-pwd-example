import {combineReducers} from 'redux'
import {ACTION_TYPE } from '../actions'

export const initalUser = {
    password:'',
    hash:'',
    status: ''
}

export function userReducer(state = initalUser, action){
    switch(action.type){
        case ACTION_TYPE.UPDATE_PASSWORD:
        return Object.assign({}, state, {password:action.password})
        case ACTION_TYPE.UPDATE_HASH:
        return Object.assign({}, state, {hash:action.hash})
        case ACTION_TYPE.UPDATE_STATUS:
        return Object.assign({}, state, {status:action.status})
        case ACTION_TYPE.RESET:
        return initalUser
        default:
        return state
    }
}

export function progressReducer(state = PROGRESSION.ENTER, action){
    switch(action.type){
        case ACTION_TYPE.CHECK_STATUS:
        return PROGRESSION.LOADING
        case ACTION_TYPE.UPDATE_STATUS:
        return PROGRESSION.RESULT
        case ACTION_TYPE.RESET:
        return PROGRESSION.ENTER
        default:
        return state
    }
}

export const PROGRESSION = {
    ENTER:'E',
    LOADING:'L',
    RESULT:'R',
}

export default combineReducers({userReducer,progressReducer})