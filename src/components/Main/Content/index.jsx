import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { styles } from "../styles";

import { Switch, Route, Redirect } from "react-router-dom";

export class Content extends Component {
	getRoutes = () => {
		let { routes } = this.props;
		return Object.keys(routes).map(prop => {
			return <Route exact path={prop} component={routes[prop].component} key={routes[prop]} />;
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<main className={classes.content}>
				<Switch>
					{this.getRoutes()}
					<Redirect to="/dashboard" />
				</Switch>
			</main>
		);
	}
}

Content.propTypes = {
	/** Material UI */
	classes: PropTypes.object.isRequired,
	/** Gets data to render appropriate component for route */
	routes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
