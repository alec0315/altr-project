import axios from "axios";
import superagent from "superagent";

const API = axios.create();

const errResponseInterceptor = error => {
	return Promise.reject(error);
};

API.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return errResponseInterceptor(error);
	}
);

export default API;
