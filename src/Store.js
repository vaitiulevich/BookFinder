import createStore from 'redux'
import createRootReducer from './reducers'

const preloadedState = {};
const store = createStore(  createRootReducer(), // root reducer with router state  
preloadedState)
export default store;