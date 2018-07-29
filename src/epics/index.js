import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, switchMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable'
import { ACTION_TYPE, updateHash, updateStatus } from '../actions'
const sha1 = require('sha1');

function computeHashEpic(action$) {
    return action$.pipe(ofType(ACTION_TYPE.CHECK_STATUS)
        , switchMap((action) => {
            return of(updateHash(sha1(action.password)))
        })
    )
}


function checkPasswordsEpic(action$) {
    return action$.pipe(
        ofType(ACTION_TYPE.UPDATE_HASH),
        switchMap((action) => {
            const hashPrefix = action.hash.substring(0, 5)
            return ajax({
                url: `https://api.pwnedpasswords.com/range/${hashPrefix}`,
                method: 'GET',
                responseType: 'text',
                crossDomain: true
            }).pipe(
                map((e) => {
                    const hashOfHashes = parseResponse(e.response)
                    const comprimisedCount = hashOfHashes[action.hash.substring(5).toUpperCase()]
                    if (comprimisedCount) {
                        return updateStatus(`Oh no your password appears ${numberWithCommas(comprimisedCount)} times in the pwned password dataset. Probably time to change you password`)
                    } else {
                        return updateStatus('All good, your password does not apear on the pwned password dataset')
                    }

                })
            )
        })
    )
}

function parseResponse(data) {
    return data.split('\n')
        .reduce((acc, current) => {
            const keyValue = current.split(':')
            acc[keyValue[0]] = keyValue[1]
            return acc
        }, {})
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const rootEpic = combineEpics(computeHashEpic, checkPasswordsEpic)