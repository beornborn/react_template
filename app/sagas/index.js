//@flow
import { all } from 'redux-saga/effects'
import exampleSagas from 'sagas/example'

export default function* rootSaga(): Generator<any,any,any> {
  yield all([
    ...exampleSagas,
  ])
}
