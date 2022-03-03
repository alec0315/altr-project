import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Box, Card, Button, CardContent, Typography } from "@material-ui/core";
import { styles } from "./styles";

export class NewPageCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			disableUser: false,
		}
	}

	componentDiDUpdate() {}

	disableUser() {
		console.log(this.state.disableUser)
		this.state = {
			disableUser: !this.state.disableUser,
		};
	}

	render() {
		const { classes, user } = this.props;

		return (
			<Card className={classes.NewPageCardContainer}>
				<CardContent>
					<Box width="100%" textAlign="center">
						<img className={classes.NewPageCardImg} src={user.picture.medium} />
					</Box>
					<Typography align="center">{user.name.first} {user.name.last}</Typography>
					<Typography align="center">{user.email}</Typography>
					<Typography align="center">{user.phone}</Typography>
					<Typography align="center">User Disabled: {this.state.disableUser}</Typography>
					<Button
								onClick={() => this.disableUser()}
					>
						Disable User
					</Button>
				</CardContent>
			</Card>
		);
	}
}

NewPageCard.propTypes = {
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

export default withStyles(styles)(NewPageCard);
