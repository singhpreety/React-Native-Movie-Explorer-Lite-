import axios from 'axios';
import { TMDB_API_KEY } from '@env';

const baseURL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL,
  timeout: 10000,
});

export const fetchMovies = async (query) => {
  try {
    const response = await api.get('/search/movie', {
      params: {
        api_key: TMDB_API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
