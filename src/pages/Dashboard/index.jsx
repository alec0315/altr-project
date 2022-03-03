import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

const sampleBlock = (<Grid className="sampleBlock" container justify="center" alignItems="center">Sample Text</Grid>);

export class Dashboard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes, ...rest } = this.props;
		return (
			<Grid className={classes.dashboardContainer} container direction="column" justify="flex-start" alignItems="stretch" spacing={2}>
				<Grid item>
					<Grid className={classes.smallHeight} container direction="row" wrap="nowrap" justify="flex-start" spacing={2}>
						<Grid item xs>{sampleBlock}</Grid>
						<Grid item xs={7}>{sampleBlock}</Grid>
						<Grid item xs>{sampleBlock}</Grid>
					</Grid>
				</Grid>

				<Grid item>
					<Grid className={classes.largeHeight} container direction="row" wrap="nowrap" spacing={2}>
						<Grid item xs={4}>{sampleBlock}</Grid>
						<Grid item xs={4}>{sampleBlock}</Grid>
						<Grid item xs={4}>{sampleBlock}</Grid>
					</Grid>
				</Grid>

				<Grid item>
					<Grid className={classes.medHeight} container direction="row" wrap="nowrap" spacing={2}>
						<Grid item xs={3}>{sampleBlock}</Grid>
						<Grid item xs={3}>{sampleBlock}</Grid>
						<Grid item xs={3}>{sampleBlock}</Grid>
						<Grid item xs={3}>{sampleBlock}</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Dashboard);
