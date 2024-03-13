import axios from "axios";
import{baseurl,imgUrl} from './constants/constants'
const instance = axios.create({
    baseURL: baseurl,
    imgURL : imgUrl,
  });

  export default instance