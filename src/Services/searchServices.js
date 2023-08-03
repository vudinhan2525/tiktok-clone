import * as request from '~/utils/request';

const searchService = async (q, type) => {
  try {
    const res = await request.get(`users/search`, {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {}
};
export default searchService;
