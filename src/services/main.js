import Axios from "./";

import { getToken } from "../utils/tokenHandler";

const me = async () => {
  try {
    const response = await Axios.get("me", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const getDiscovery = async () => {
  try {
    const response = await Axios.get("quiz/discovery", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

export default { me, getDiscovery };
