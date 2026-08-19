import axios from 'axios';

// Base URL de l'API pour le site RGE
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1/site';

export const API_INSTANCE = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000,
});

// Interceptor pour gérer les erreurs globales si besoin
API_INSTANCE.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erreur API (Site):', error);
    return Promise.reject(error);
  }
);

/**
 * Fonctions utilitaires pour faciliter les requêtes
 */
export const get = async <T>(url: string, params?: object): Promise<T> => {
  const response = await API_INSTANCE.get<T>(url, { params });
  return response.data;
};

export const post = async <T>(url: string, data?: object): Promise<T> => {
  const response = await API_INSTANCE.post<T>(url, data);
  return response.data;
};

// Alias pour compatibilité avec les services utilisant apiClient.get(), apiClient.post(), etc.
export const apiClient = API_INSTANCE;