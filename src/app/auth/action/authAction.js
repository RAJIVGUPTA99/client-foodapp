import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  LOGIN_FAIL,
} from "../../../redux/types/userTypes";
import api from "../../../utils/api";
import { setAlert } from "../../core/actions/alertAction";

export const register = (formData, navigate) => async (dispatch) => {
  try {
    await api.post("/auth/register", formData);

    dispatch(setAlert("User successfully registered!", "success"));
    dispatch({ type: REGISTER_SUCCESS });
    navigate("/auth/login");
  } catch (err) {
    const subErrors = err.response.data.subErrors;
    if (subErrors) {
      subErrors.forEach((error) =>
        dispatch(setAlert(`${error.field} ${error.message}`, "danger"))
      );
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth/");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {}
};

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const res = await api.post("/auth/authenticate", formData);

    dispatch(setAlert("User successfully logged in!", "success"));

    const { id, email, tokenType, roles } = res.data;
    const token = "Bearer " + res.data.token;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token, user: { id, email, tokenType, roles } },
    });
    navigate("/");
    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert("Invalid Credentials!", "danger"));
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
