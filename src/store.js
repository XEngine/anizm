import {applyMiddleware, createStore, compose} from 'redux'
import {routerMiddleware, connectRouter} from 'connected-react-router'
import thunk from 'redux-thunk';
import rootReducer from './Reducers/Reducers'
import history from './history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
)

export default store