import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/styles";
import { styles } from "../styles";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	getHeader() {
		const { classes, routes, location } = this.props;
		if (routes[location.pathname]) {
			return (
				<Typography variant="h3" className={classes.headerLabel}>
					{routes[location.pathname].title}
				</Typography>
			);
		} else {
			return null;
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<AppBar className={classes.headerBar}>
				<Toolbar>
					{this.getHeader()}
				</Toolbar>
			</AppBar>
		);
	}
}

Header.propTypes = {
	/** Material UI */
	classes: PropTypes.object.isRequired,
	/** Determines the Title to be displayed based on the page route */
	routes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);