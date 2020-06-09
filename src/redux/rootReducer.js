import {combineReducers} from 'redux'
import postReducer from './reducers/postReducer'
import testReducer from './reducers/testReducer'

const rootReducers = combineReducers({
    post : postReducer,
    test : testReducer
})

export default rootReducers