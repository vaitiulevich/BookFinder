import axios from 'axios';

import { BASE_URL, MAX_RESULTS } from '../constants/api';

export const googleBooksApi = {
  async getBooks({ searchTerm, category = '', page = 0, sort = 'relevance' }) {
    const startIndex = MAX_RESULTS * page;

    const response = await axios.get(
      `${BASE_URL}?q=${searchTerm}+subject:${category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sort}&key=AIzaSyBoPPEYw_brfW_DvaqYmSW5f-gwnoXlkUc`,
    );

    return response.data;
  },
};
