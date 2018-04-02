import React from 'react';
import {connect} from 'react-redux'
import Password from '../password'
import Result from '../result'
import {PROGRESSION} from '../../reducers'
import Header from '../header'
import Footer from '../footer'
import Loading from '../loading'

export function App ({progression}){
    return (
      <div >
        <Header/>
      {progressContent(progression)}
      <Footer />
      </div>
    )
}

function progressContent(progress){
  switch(progress){
    case PROGRESSION.ENTER:
    return <Password />
    case PROGRESSION.LOADING:
    return <Loading />
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
