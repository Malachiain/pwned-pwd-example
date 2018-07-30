export const ACTION_TYPE = {
    UPDATE_PASSWORD:'UPDATE_PASSWORD',
    UPDATE_HASH:'UPDATE_HASH',
    UPDATE_STATUS:'UPDATE_STATUS',
    CHECK_STATUS:'CHECK_STATUS',
    RESET:'SET_ENTER',
    ERROR: 'ERROR'
}



export function updatePassword(password){
    return {
        type: ACTION_TYPE.UPDATE_PASSWORD,
        password
    }
}

export function updateHash(hash){
    return {
        type: ACTION_TYPE.UPDATE_HASH,
        hash
    }
}

export function updateStatus(status){
    return {
        type: ACTION_TYPE.UPDATE_STATUS,
        status
    }
}

export function checkStatus(password){
    return {
        type: ACTION_TYPE.CHECK_STATUS,
        password
    }
}

export function reset(){
    return {
        type: ACTION_TYPE.RESET
    }
}

export function requestError(){
    return {
        type: ACTION_TYPE.ERROR
    }
}