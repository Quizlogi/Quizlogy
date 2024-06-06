import Axios from './';
import { getToken } from '../utils/tokenHandler';

const getCategories = async () => {
  try {
    const response = await Axios.get('/instructure/category', {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

export default {
  getCategories,
}