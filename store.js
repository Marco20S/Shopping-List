import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./redux/reducers";


// Create the Redux store
 export const store = configureStore({reducer :rootReducer});