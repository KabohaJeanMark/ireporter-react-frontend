import axios from 'axios';
import { toast } from 'react-toastify';
import { loginType } from './types';

export const postLogin = (loginUrl, loginDetails, props) => dispatch =>
  axios.post(loginUrl, loginDetails).then(response => {
    const { status } = response;
    if (status === 200) {
      dispatch({ type: loginType.LOGIN_SUCCESS, payload: response.data });
      toast.dismiss();
      toast.success("You have logged in successfully", {
        hideProgressBar: false, autoClose: 3000
      });
      document.location.href = '/profile';
    }
  })
    .catch((error) => {
      if (error.response.status === 400) {
        dispatch({ type: loginType.LOGIN_ERROR, payload: error.response.data });
        toast.dismiss();
        toast.error("The username or password is incorrect", {
          hideProgressBar: false, autoClose: 3000
        });
      }
    }
    );