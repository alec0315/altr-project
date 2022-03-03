import theme from "../../globals/theme";

export const styles = {
	drawer: {
		width: "100%",
		height: "100%",
		position: "relative",
		color: "rgba(255, 255, 255, 0.7)",
		background: "#000"
	},
	logo: {
		height: "64px",
		width: "100%",
		padding: "12px 8px"
	},
	menuList: {
		width: "100%",
		height: "100%",
		position: "relative"
	},
	headerBar: {
		width: "calc(100% - 220px)",
		color: "rgba(255, 255, 255, .7)",
		backgroundColor: "rgba(33,33,33)"
	},
	headerLabel: {
		fontSize: "1.33rem",
		fontWeight: "bold",
		color: "#fff"
	},
	navitem: {
		transition: "all .3s ease 0s",
		background: "inherit",
		"&:hover": {
			background: "rgba(255, 255, 255, .4)"
		},
		"&.navItemActive": {
			background: "rgba(0, 150, 136, 1)"
		}
	},
	content: {
		height: "calc(100% - 64px)",
		marginTop: "64px",
		padding: "18px"
	}
};
