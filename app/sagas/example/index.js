//@flow
import { fork } from 'redux-saga/effects'
import watchSagaExample from './Example'

const sagas = [
  fork(watchSagaExample),
]

export default sagas
