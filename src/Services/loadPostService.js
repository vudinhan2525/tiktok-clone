import * as request from '~/utils/request';
const loadPostService = async (type = 'for-you', page) => {
  try {
    const res = await request.get(`videos?type=${type}&page${page}`);
    return res.data;
  } catch (error) {}
};
export default loadPostService;
