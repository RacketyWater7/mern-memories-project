import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in the user
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    // navigating back to home page
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
// redux workflow of signIn: at first, a method is dispatched from the front-end,(this method is given the data to be
// processed and along with that, the history. then> it is referred in the actions, in actions,
// an API request is made, it goes and takes the specific url from the URLs js file,
//and fires it and fetched data is received with the specific type and passed over to the reducers
export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up the user
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    // navigating back to home page
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
