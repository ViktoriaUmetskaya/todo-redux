import {
    legacy_createStore as createStore,
    combineReducers,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import RegistrationReducer from './Reducers/RegistrationReducer'
import ListReducer from './Reducers/ListReducer'
import loginReducer from './Reducers/LoginReducer'
import TodoReducer from './Reducers/TodoReducer'

const rootReducer = combineReducers ({
    registration:RegistrationReducer,
    list:ListReducer,
    login: loginReducer,
    todo: TodoReducer,
})

const store = createStore(
    rootReducer,
    composeWithDevTools()
)

export default store