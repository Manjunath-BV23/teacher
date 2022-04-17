
import {ADD_DATA} from "./action"
import {FILTER_DATA} from "./action"
import {SORT_AGE} from "./action"


const initState = {
 data: JSON.parse(localStorage.getItem("data")) || [],
}

// reducer function
export const dataReducer = (store = initState, {type, payload}) => {
    switch (type) {
        case ADD_DATA:
            localStorage.setItem("data", JSON.stringify([...payload]))
            return {...store, data: JSON.parse(localStorage.getItem("data"))}

        default: 
        return store;
    }
}
