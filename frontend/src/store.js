import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { allBooksReducer, bookDetailsReducer, deleteBookReducer, newBookReducer } from "./reducer/bookReducer";



const reducer = combineReducers({
      books : allBooksReducer,
      book : bookDetailsReducer,
      newbook : newBookReducer,
      deletebook : deleteBookReducer,
});



let initialState={};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;