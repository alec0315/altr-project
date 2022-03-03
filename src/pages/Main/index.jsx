import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

//Website Format
import Header from "../../components/Main/Header";
import Sidenav from "../../components/Main/SideNav";
import Content from "../../components/Main/Content";

import PageRoutes from "../../routes/pageRoutes";

export class MainPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes, ...rest } = this.props;
		return (
			<Grid container direction="row" wrap="nowrap" className={classes.root} >
				<Grid item className={classes.drawerWidth} >
					<Sidenav routes={Object.values(PageRoutes)} />
				</Grid>
				<Grid item className={classes.contentWidth} >
					<Header routes={PageRoutes} {...rest} />
					<Content routes={PageRoutes} />
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(MainPage);
