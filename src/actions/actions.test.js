import {checkStatus,
    reset, 
    updateHash,
    updatePassword,
    updateStatus,
    ACTION_TYPE
} from './index'

describe('action creators',()=>{
    it('creates an update password action',()=>{
        expect(updatePassword('abc123'))
        .toEqual(
            {
                type: ACTION_TYPE.UPDATE_PASSWORD,
                password:'abc123'
            }
        )
    })
    it('creates an update hash action',()=>{
        expect(updateHash('#hash'))
        .toEqual(
            {
                type: ACTION_TYPE.UPDATE_HASH,
                hash:'#hash'
            }
        )
    })
    it('creates an update status action',()=>{
        expect(updateStatus('All good'))
        .toEqual(
            {
                type: ACTION_TYPE.UPDATE_STATUS,
                status:'All good'
            }
        )
    })
    it('creates a reset action',()=>{
        expect(reset())
        .toEqual(
            {
                type: ACTION_TYPE.RESET
            }
        )
    })
})