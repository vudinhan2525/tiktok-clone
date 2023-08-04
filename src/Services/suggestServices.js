import * as request from '~/utils/request';
const suggestService = async (page, per_page) => {
  try {
    const res = await request.get(`users/suggested`, {
      params: {
        page,
        per_page,
      },
    });
    return res.data;
  } catch (error) {}
};
export default suggestService;
