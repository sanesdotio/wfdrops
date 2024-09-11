import axios from 'axios';
import { itemsUrl } from '../../env';

export const getItems = async (query: string) => {
  try {
    const response = await axios.get(`${itemsUrl}/${query}`, {
      params: {
        only: 'name,category,components,location,drops,bpcost',
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch items');
  }
};
