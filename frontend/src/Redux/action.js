import axios from "axios";
import * as types from "./ActionTypes";

export const GetPendingTask = (payload) => (dispatch) => {
  const data = { status: "pending" };
  dispatch({ type: types.GET_TASK_REQUEST });
  return axios
    .get(
      `https://flamecloudbackend-production.up.railway.app/task/gettask/${payload}?status=${data.status}`
    )
    .then((res) => {
      return dispatch({
        type: types.GET_PENDING_TASK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) =>
      dispatch({
        type: types.GET_TASK_FAILURE,
        payload: e,
      })
    );
};
export const DeleteTask = (payload) => (dispatch) => {
  return axios
    .delete(`https://flamecloudbackend-production.up.railway.app/task/remove`, {
      data: payload,
    })
    .then((res) => {
      return res.data.msg;
    })
    .catch((e) =>
      dispatch({
        type: types.GET_TASK_FAILURE,
        payload: e,
      })
    );
};

export const AddNewTask = (payload) => (dispatch) => {
  return axios
    .post(
      `https://flamecloudbackend-production.up.railway.app/task/add`,
      payload
    )
    .then((res) => {
      return res.data.msg;
    })
    .catch((e) =>
      dispatch({
        type: types.GET_TASK_FAILURE,
        payload: e,
      })
    );
};
export const GetDoingTask = (payload) => (dispatch) => {
  const data = { status: "doing" };
  dispatch({ type: types.GET_TASK_REQUEST });
  return axios
    .get(
      `https://flamecloudbackend-production.up.railway.app/task/gettask/${payload}?status=${data.status}`
    )
    .then((res) => {
      return dispatch({
        type: types.GET_DOING_TASK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) =>
      dispatch({
        type: types.GET_TASK_FAILURE,
        payload: e,
      })
    );
};
export const UpdateTaskStatus = (payload) => (dispatch) => {
  return axios
    .patch(
      `https://flamecloudbackend-production.up.railway.app/task/updatestatus`,
      payload
    )
    .then((res) => {
      return res.data.msg;
    })

    .catch((e) =>
      dispatch({
        type: types.GET_TASK_FAILURE,
        payload: e,
      })
    );
};

export const GetDoneTask = (payload) => (dispatch) => {
  const data = { status: "done" };
  dispatch({ type: types.GET_TASK_REQUEST });
  return axios
    .get(
      `https://flamecloudbackend-production.up.railway.app/task/gettask/${payload}?status=${data.status}`
    )
    .then((res) => {
      return dispatch({ type: types.GET_DONE_TASK_SUCCESS, payload: res.data });
    })
    .catch((e) =>
      dispatch({
        type: types.GET_TASK_FAILURE,
        payload: e,
      })
    );
};
