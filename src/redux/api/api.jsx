import axios from 'axios';

export const fetchAllCampers = async ({page=1,limit}) => {
  const response = await axios.get(`/adverts?page=${page}&limit=${limit}`);
  return response.data;
};