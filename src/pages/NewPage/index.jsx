import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

import NewPageCard from "../../components/NewPageCard";

import { getRandomUsers } from "../../actions/apiActions";

export class NewPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			apiCall: true
		};

		props.getRandomUsers(this.state.apiCall);
		const response = props.getRandomUsers(this.state.apiCall);
	};

	displayResults = () => {
		if (this.props.usersLoading) {
			return "Loading..."
		}
		if (this.props.usersLoading === false && this.props.users.length === 0) {

			return "There was an error getting users."
		}

		return this.props.users.map((user, idx) => {
			return (
				<NewPageCard
					key={"userCard_" + idx}
					user={user}
				/>
			);
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.dashboardContainer}>
				{/* // add the fc for state here */}
				{this.displayResults()}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getRandomUsers
		},
		dispatch
	);

const mapStateToProps = state => ({
	users: state.user.users,
	usersLoading: state.user.usersLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewPage));