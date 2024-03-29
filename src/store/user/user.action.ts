import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES, User } from './user.types';

export type FetchUserDetialsStart = ActionWithPayload<
	USER_ACTION_TYPES.FETCH_USER_DETIALS_START,
	string
>;

export type FetchUserDetailsSuccess = ActionWithPayload<
	USER_ACTION_TYPES.FETCH_USER_DETAILS_SUCCESS,
	User
>;

export type FetchUserDetailsFailed = ActionWithPayload<
	USER_ACTION_TYPES.FETCH_USER_DETAILS_FAILED,
	Error
>;

export type UserAction =
	| FetchUserDetialsStart
	| FetchUserDetailsSuccess
	| FetchUserDetailsFailed;

export const fetchUserDetailsStart = withMatcher(
	(id: string): FetchUserDetialsStart =>
		createAction(USER_ACTION_TYPES.FETCH_USER_DETIALS_START, id)
);

export const fetchUserDetailsSuccess = withMatcher(
	(user: User): FetchUserDetailsSuccess =>
		createAction(USER_ACTION_TYPES.FETCH_USER_DETAILS_SUCCESS, user)
);

export const fetchUserDetailsFailed = withMatcher(
	(error: Error): FetchUserDetailsFailed =>
		createAction(USER_ACTION_TYPES.FETCH_USER_DETAILS_FAILED, error)
);
