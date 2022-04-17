import {createStore, combineReducers} from "redux";
import {dataReducer} from "../Data/reducer";


const rootReducer = combineReducers({
    data : dataReducer,
})

export const store = createStore(rootReducer);