// base.service.ts

import axios, { CancelTokenStatic, CancelTokenSource } from "axios";
import { selectToken } from "../features/auth/auth.selector";
import { store } from "../../store/store";
// const Config = process.env.NEXT_PUBLIC_APP_BASE_URL;

const Config = "http://localhost:8081";
// const Config = "https://dotbrand-api.onrender.com";
// const Config = "https://dotbrand-api.onrender.com";
console.log(Config);
export class HttpService {
  CancelToken: CancelTokenStatic;
  source: CancelTokenSource;

  constructor() {
    this.CancelToken = axios.CancelToken;
    this.source = this.CancelToken.source();
    axios.interceptors.response.use(undefined, function (error) {
      if (error?.response?.status == 401) {
        localStorage.clear();
        window.location.reload();
      }
      return Promise.reject(error);
    });
  }

  /**
   * Set Token On Header
   * @param token
   */
  static setToken(token: string): void {
    axios.defaults!.headers!["Authorization"] = `Bearer ${token}`;
  }

  /**
   * Fetch data from server
   * @param url Endpoint link
   * @return Promise
   */
  protected get = async (url: string, params?: any): Promise<any> => {
    const res = await axios.get(`${Config}/${url}`, {
      params,
      withCredentials: true,
      cancelToken: this.source.token,
    });
    // console.log("base service response:", res);
    return res.data;
  };

  /**
   * Write data over server
   * @param url Endpoint link
   * @param body Data to send over server
   * @return Promise
   */
  protected post = async (
    url: string,
    body?: any,
    options = {}
  ): Promise<any> => {
    console.log(Config);
    const res = await axios.post(`${Config}/${url}`, body, {
      ...options,
      withCredentials: true,
      cancelToken: this.source.token,
    });
    return res.data;
  };

  /**
   * Delete Data From Server
   * @param url Endpoint link
   * @param params Embed as query params
   * @return Promise
   */
  protected delete = async (
    url: string,
    params?: any,
    data?: any
  ): Promise<any> => {
    const res = await axios.delete(`${Config}/${url}`, { params, data });
    return res.data;
  };

  /**
   * Update data on server
   * @param url Endpoint link
   * @param body Data to send over server
   * @param params Embed as query params
   * @return Promise
   */
  protected put = async (
    url: string,
    body?: any,
    params?: any
  ): Promise<any> => {
    const res = await axios.put(`${Config}/${url}`, body, {
      ...params,
      cancelToken: this.source.token,
    });
    return res.data;
  };

  private updateCancelToken() {
    this.source = this.CancelToken.source();
  }

  cancel = () => {
    this.source.cancel("Explicitly cancelled HTTP request");
    this.updateCancelToken();
  };
}
