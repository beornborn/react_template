//@flow
import type Action from 'Types'
import update from 'immutability-helper'
import { createAction } from 'redux-actions'

export const SET_SMTH = 'app/SET_SMTH'

export const setSMTH = () => createAction(SET_SMTH)()

const initialState = {
  smth: undefined,
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case SET_SMTH:
      return update(state, {smth: {$set: p.id}})
    default:
      return state
  }
}
