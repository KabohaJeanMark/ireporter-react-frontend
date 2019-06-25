import axios from 'axios';
import { toast } from 'react-toastify';
import { signupType } from './types';

export const postSignup = (signupUrl, signupDetails, props) => dispatch =>
  axios.post(signupUrl, signupDetails).then(response => {
    const { status } = response;
    if (status === 201) {
      dispatch({ type: signupType.SIGNUP_SUCCESS, payload: response.data });
      toast.dismiss();
      toast.success("You have signed up successfully", {
        hideProgressBar: false, autoClose: 3000
      });
      document.location.href = '/';
    }
  })
    .catch((error) => {
      if (error.response.status === 400) {
        dispatch({ type: signupType.SIGNUP_ERROR, payload: error.response.data });
        toast.dismiss();
        toast.error("This email, username and password cannot be used to sign up", {
          hideProgressBar: false, autoClose: 3000
        });
      }
    }
    );