import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { styles } from "./styles";

export class UserCard extends Component {
	render() {
		const { classes, user } = this.props;
		return (
			<Card className={classes.userCardContainer}>
				<CardContent>
					<Box width="100%" textAlign="center">
						<img className={classes.userCardImg} src={user.picture.medium} />
					</Box>
					<Typography align="center">{user.name.first} {user.name.last}</Typography>
					<Typography align="center">{user.email}</Typography>
					<Typography align="center">{user.phone}</Typography>
				</CardContent>
			</Card>
		);
	}
}

UserCard.propTypes = {
	/** Material UI */
	classes: PropTypes.object.isRequired,
	/** User data from parent array */
	user: PropTypes.shape({
		picture: PropTypes.shape({
			medium: PropTypes.string
		}),
		name: PropTypes.shape({
			first: PropTypes.string,
			last: PropTypes.string
		}),
		email: PropTypes.string,
		phone: PropTypes.string
	}).isRequired
};

export default withStyles(styles)(UserCard);
