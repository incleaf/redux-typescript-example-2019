import { Reducer } from 'redux';
import { UserActions, UserActionTypes } from './userActions';

interface State {
  name?: string;
  isFetching: boolean;
}

const initialState: State = {
  isFetching: false
};

export const userReducer: Reducer<State, UserActions> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.FETCH_PROFILE_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case UserActionTypes.FETCH_PROFILE_FAILURE: {
      return {
        ...state,
        isFetching: false
      };
    }
    case UserActionTypes.FETCH_PROFILE_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        name: action.payload.name
      };
    }
    default: {
      return state;
    }
  }
};
