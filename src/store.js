import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export const history = createBrowserHistory();

export default createStore(
	rootReducer,
	compose(applyMiddleware(thunk, promiseMiddleware))
);
