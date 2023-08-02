import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (path, option = {}) => {
  try {
    const response = await request.get(path, option);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default request;
