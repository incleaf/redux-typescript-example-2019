import { createAction, ActionsUnion } from './utils';

export enum UserActionTypes {
  FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST',
  FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE',
  FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'
}

export const UserActions = {
  fetchProfileRequest: () => createAction(UserActionTypes.FETCH_PROFILE_REQUEST),
  fetchProfileFailure: () => createAction(UserActionTypes.FETCH_PROFILE_FAILURE),
  fetchProfileSuccess: (payload: { name: string }) =>
    createAction(UserActionTypes.FETCH_PROFILE_SUCCESS, payload)
};

export type UserActions = ActionsUnion<typeof UserActions>;
