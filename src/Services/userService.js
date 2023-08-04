import * as request from '~/utils/request';
const userService = async (nickname) => {
  try {
    const res = await request.get(`users/${nickname}`);
    return res.data;
  } catch (error) {}
};
export default userService;
