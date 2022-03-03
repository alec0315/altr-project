import { actions } from "../actions/actionTypes";

export const defaultState = {
	users: [],
	usersLoading: false
};

export default function user(state = defaultState, action) {
	switch (action.type) {
		/**Get Random Users */
		case actions.GET_RANDOM_USERS_PENDING:
			return {
				...state,
				users: [],
				usersLoading: true
			};
		case actions.GET_RANDOM_USERS_FULFILLED:
			return {
				...state,
				users: action.payload.data.results,
				usersLoading: false
			};
		case actions.GET_RANDOM_USERS_REJECTED:
			return {
				...state,
				users: [],
				users_fetch_error: "There was an error getting users.",
				usersLoading: false
			};
		default:
			return state;
	}
}
