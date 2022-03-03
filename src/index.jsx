import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, { history } from "./store";

import Routes from "./routes";

const App = () => <div>Hello World</div>

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Routes />
		</Router>
	</Provider>,
	document.getElementById("root")
);
