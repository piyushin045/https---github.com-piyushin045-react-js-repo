// to create a store first we have to do configure store

/*step1: configureStore()
  step2: createReducer()
  step3:createAction
  step:4 createSlice()
  step:5 createAsyncThink
  step5:createEntityAdapter
  step6: createSelector */


  /* OR 
  first: store
  second: reducer
  third: useDispatch
  fourth: useSelector */


import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer:todoReducer
})