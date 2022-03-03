import { actions } from "./actionTypes";
import API from "./api";

export const getRandomUsers = (call) => {
	try {
		if (call && Math.random(5) > 5) {
			return {
				type: actions.GET_RANDOM_USERS,
				payload: API.get("https://randomuser.me/api/?results=50")
			};
		} else {
			return {
				type: actions.GET_RANDOM_USERS_REJECTED
			};
		}
	} catch (err) {
		console.error(`Error: ${err}`)
	}
}