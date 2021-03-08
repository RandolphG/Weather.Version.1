import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

// -- reducers
import reducers from "./reducers/reducers";
// -- middleware
const middleware = applyMiddleware(thunk);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// -- store
const store = createStore(reducers, composeEnhancer(middleware));
export default store;
