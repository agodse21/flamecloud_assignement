import * as types from "./ActionTypes";

const initialState = {
  pending_task: [],
  doing_task: [],
  done_task: [],
  current_user: {},
  isLoading: false,
  isError: false,
  task: [],
  isAuth: false,
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TASK_REQUEST: {
      return {
        ...oldState,
        isLoading: true,
      };
    }
    case types.GET_LOGIN_USER_LOGOUT: {
      return {
        ...oldState,
        isLoading: true,
        current_user: {},
        isAuth: false,
      };
    }

    case types.GET_LOGIN_USER_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        current_user: payload,
        isError: false,
        isAuth: true,
      };
    }
    case types.GET_PENDING_TASK_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        pending_task: payload,
        isError: false,
      };
    }
    case types.GET_DOING_TASK_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        doing_task: payload,
        isError: false,
      };
    }
    case types.GET_ALL_TASK: {
      return {
        ...oldState,
        isLoading: false,
        task: payload,
        isError: false,
      };
    }
    case types.GET_DONE_TASK_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        done_task: payload,
        isError: false,
      };
    }
    case types.GET_TASK_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        pending_task: [],
        doing_task: [],
        done_task: [],
      };
    }
    default:
      return oldState;
  }
};
