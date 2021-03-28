import axios from 'axios';
import { signUp,login } from "./api";

export const customerSignUp = (data)=>
{
    console.log("customersignup",data);
return axios
  .post(signUp,data)
  .then(response =>response)
  .catch(error => {
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    }
  });
}

export const customerLogin = (data)=>
{
    console.log("login",data);
    console.log("login",login);
    return axios
    .post(login,data)
    // .then(response =>response)
    // .catch(error => error);
}
