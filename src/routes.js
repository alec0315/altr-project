import React from "react";
import { Route, Switch } from "react-router-dom";

import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./globals/theme";

//Main Page
import MainPage from "./pages/Main";

const Routes = () => (
	<>
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Switch>
				<Route path="/" component={MainPage} />
			</Switch>
		</MuiThemeProvider>
	</>
);

export default Routes;
