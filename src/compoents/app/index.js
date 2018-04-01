import React from 'react';
import {connect} from 'react-redux'
import Password from '../password'
import Result from '../result'
import {PROGRESSION} from '../../reducers'

export function App ({progression}){
    return (
      <div >
      {progressContent(progression)}
      </div>
    )
}

function progressContent(progress){
  switch(progress){
    case PROGRESSION.ENTER:
    return <Password />
    case PROGRESSION.LOADING:
    return <p>Loading</p>
    case PROGRESSION.RESULT:
    return <Result />
    default:
    return <Password />
  }
}

function mapState(state){
  return {
    progression:state.progressReducer
  }
}

export default connect(mapState)(App);
