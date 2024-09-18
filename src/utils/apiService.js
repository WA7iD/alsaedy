import axios from "axios";
import { getToken } from "./token";

export const BASEURL = `http://127.0.0.1:8000/api/v1/w`;
const api = axios.create({
  baseURL: BASEURL,
});

// Axios Interceptor for Request
api.interceptors.request.use(
  (config) => {
    config.headers["Accept-Language"] = "ar";
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const FetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PostData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PostImageData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PutData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const PutImageData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const DeleteData = async (endpoint, id) => {
  try {
    const response = await api.delete(endpoint + "/" + id);
    return response.data;
  } catch (error) {
    throw error;
  }
};
