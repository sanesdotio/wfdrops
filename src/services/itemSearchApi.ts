import axios from 'axios';
import { itemsUrl } from '../../env';

export const getItems = async (query: string) => {
  try {
    const response = await axios.get(`${itemsUrl}/${query}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch items');
  }
};
