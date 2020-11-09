import {createStore,combineReducers} from 'redux';
import { userReducer } from './reducer/userReducer';
import { loadState, saveState } from './storeService';

const rootReducer = combineReducers({
    user : userReducer
})

const persisState = loadState()

const store = createStore(rootReducer,persisState)


store.subscribe(()=>{
      saveState(store.getState())
})


export default store


