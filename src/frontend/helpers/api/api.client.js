// Dependencies
import getConfig from "next/config";
import axios from "axios";
import Cookies from "js-cookie";

import ApiError from "./api.error";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  responseType: "json",
});

const throwApiError = ({ data, status }) => {
  console.error("API: Error Ocurred", status, data); // eslint-disable-line no-console
  // TODO add here modal, loading components;
  throw new ApiError(data, status);
};

api.interceptors.request.use((req) => {
  // Set token Authorization in request header
  const token = Cookies.get("access_token");

  if (token) {
    req.headers.Authorization = token;
  }
  return req;
});

// Do not throw errors on 'bad' server response codes
api.interceptors.response.use(
  (axiosConfig) => axiosConfig,
  (error) => {
    const { config, status } = error.response;

    if (status === 404) {
      error.response.data = { message: `${config.url} not found` };
    }

    throwApiError(error.response);
  }
);

const ClientHttpRequest = (method) => async (url, data) => {
  let urlWithSlash = url;

  if (urlWithSlash[0] !== "/") {
    urlWithSlash = `/${urlWithSlash}`;
  }

  const options = {
    method,
    url: urlWithSlash,
  };

  if (data) {
    if (method === "get") {
      options.params = data;
    } else {
      options.data = data;
    }
  }

  const response = await api(options);

  if (response.status >= 200 && response.status < 300) {
    return response.data || {};
  }

  return null;
};

export const GetRequest = ClientHttpRequest("get");
export const PostRequest = ClientHttpRequest("post");
export const PutRequest = ClientHttpRequest("put");
export const DeleteRequest = ClientHttpRequest("delete");

const apiClient = {
  get: GetRequest,
  post: PostRequest,
  put: PutRequest,
  delete: DeleteRequest,
};

export default apiClient;
