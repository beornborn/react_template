//@flow
import { takeEvery, call } from 'redux-saga/effects'
// import * as api from 'api'
import { SAGA_AUTHENTICATE } from 'reducers/Saga'
// import { magicLinkSent } from 'reducers/Ui'

function* perform(_a) {
  // const { formData } = a.payload

  try {
    yield call(() => 1 + 1)
    // yield api.sendMagicLink(formData)
    // yield put(magicLinkSent())
  } catch (err) { console.log(err) }
}

function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_AUTHENTICATE, perform)
}

export default watch
