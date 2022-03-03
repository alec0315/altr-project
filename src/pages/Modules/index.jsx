import React, { Component } from "react";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";

export class Modules extends Component {
	constructor(props) {
		super(props);

		this.state = {
			packages: [
				{
					name: "Lodash",
					downloads: "42,699,922",
					dependents: "131,503",
					version: "4.17.21",
					license: "MIT"
				},
				{
					name: "React",
					downloads: "10,008,762",
					dependents: "68,046",
					version: "17.0.1",
					license: "MIT"
				},
				{
					name: "Chalk",
					downloads: "78,473,065",
					dependents: "66,060",
					version: "4.1.0",
					license: "MIT"
				},
				{
					name: "tslib",
					downloads: "44,514,746",
					dependents: "53,107",
					version: "2.1.0",
					license: "0BSD"
				},
				{
					name: "request",
					downloads: "26,149,775",
					dependents: "51,672",
					version: "2.88.2",
					license: "Apache-2.0"
				}
			]
		};

		const validations = Yup.object({
			name: Yup.string(),
			downloads: Yup.number(),
			dependents: Yup.number(),
			version: Yup.string(),
			license: Yup.number(),
		});
	}

	addFormDataToState(payload) {
		this.setState((state) => ({
			...state,
			packages: [
				...state.packages,
				{
					...payload,
				},
			],
		}));

		console.log(this.state)
	};

	render() {
		const { classes } = this.props;
		return (
			<Grid className={classes.dashboardContainer} container direction="column" justify="flex-start" alignItems="stretch" spacing={2}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Most Depended Upon NPM Packages</TableCell>
								<TableCell align="right">Downloads (Weekly)</TableCell>
								<TableCell align="right">Dependents</TableCell>
								<TableCell align="right">Version</TableCell>
								<TableCell align="right">License</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.state.packages.map((pack) => (
								<TableRow key={pack.name}>
									<TableCell component="th" scope="row">
										{pack.name}
									</TableCell>
									<TableCell align="right">{pack.downloads}</TableCell>
									<TableCell align="right">{pack.dependents}</TableCell>
									<TableCell align="right">{pack.version}</TableCell>
									<TableCell align="right">{pack.license}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<h2>Add a package:</h2>
				<Formik
				 initialValues={{
					 name: '',
					 downloads: '',
					 dependents: '',
					 version: '',
					 license: '',
				 }}
				 validationSchema={this.validations}
				 onSubmit={(values) => {
					const payload = {
						name: values.name,
						download: values.downloads,
						version: values.version,
						license: values.license,
					};

					this.addFormDataToState(payload);
				 }}
			 >
				 <Form>
					 <label htmlFor="name">Name</label>
						<Field id="name" name="name" placeholder="axios" />

						<label htmlFor="downloads">Downloads</label>
						<Field id="downloads" name="downloads" placeholder="420" />

					 	<label htmlFor="dependents">Dependents</label>
						<Field
							id="dependents"
							name="dependents"
							placeholder="420,69"

						/>

					  <label htmlFor="email">Version</label>
						<Field
							id="version"
							name="version"
							placeholder="tildo"

						/>

						<label htmlFor="email">License</label>
						<Field
							id="license"
							name="license"
							placeholder="2.0"

						/>
					 <button type="submit">Submit</button>
				 </Form>
			 </Formik>
			</Grid>

		);
	}
}

export default withStyles(styles)(Modules);
