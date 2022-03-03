import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Modules from "../pages/Modules";
import NewPage from "../pages/NewPage";

let DASHBOARD = {
	"/dashboard": {
		path: "dashboard",
		component: Dashboard,
		title: "Dashboard"
	}
};

let USERS = {
	"/users": {
		path: "users",
		component: Users,
		title: "Users"
	}
};

let MODULES = {
	"/modules": {
		path: "modules",
		component: Modules,
		title: "NPM Modules"
	}
};

let NEWPAGE = {
	"/newpage": {
		path: "newpage",
		component: NewPage,
		title: "New Page "
	}
};
const PageRoutes = {
	...DASHBOARD,
	...USERS,
	...MODULES,
	...NEWPAGE
};

export default PageRoutes;