import axios, {AxiosResponse} from "axios";

export const getToken = async () => {
  try {
    const token: AxiosResponse = await axios.post(`${process.env.REACT_APP_BASE_API}/token`, {});
  
    sessionStorage.setItem("token", token.data.token);
    return true;
  } catch (e) {
    return false;
  }
}
