import Axios from "axios";
import * as url from "./url";

export const initialCall = () =>
  Axios.get(url.initialCallURL).then((res) => res.data);
