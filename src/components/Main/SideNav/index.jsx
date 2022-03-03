import React, { Component } from "react";
import PropTypes from "prop-types";
import { Drawer, MenuList, MenuItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

import ALTRlogo from "../../../images/ALTR";

import { withStyles } from "@material-ui/styles";
import { styles } from "../styles";

export class SideNav extends Component {
	getNavItems() {
		const { classes, routes } = this.props;
		return routes.map((item, idx) => {
			return (
				<MenuItem
					key={idx}
					component={Link}
					to={item.path}
					className={classes.navitem + " " + (window.location.pathname.includes(item.path) ? "navItemActive" : "")}
				>
					<ListItemText>
						<span>{item.title}</span>
					</ListItemText>
				</MenuItem>
			);
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<>
				<Drawer
					variant="permanent"
					anchor="left"
					className={classes.drawer}
					classes={{paper: classes.drawer}}
				>
					<ALTRlogo className={classes.logo} fillColor="rgb(254 254 254)" />
					<MenuList className={classes.menuList}>{this.getNavItems()}</MenuList>
				</Drawer>
			</>
		);
	}
}

SideNav.propTypes = {
	/** Material UI */
	classes: PropTypes.object.isRequired,
	/** Populates side navigation items */
	routes: PropTypes.array.isRequired
};

export default withStyles(styles)(SideNav);
