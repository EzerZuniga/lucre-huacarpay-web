import axios from 'axios';
import type {
  AxiosInstance,
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.lagunahuacarpay.org/v1';

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
  status: number;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('auth_token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: unknown) => {
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: { response?: { status?: number } }) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('auth_token');
          window.dispatchEvent(new Event('unauthorized'));
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.get<ApiResponse<T>>(url, config);
    return response.data;
  }

  async post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.post<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  async put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.put<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  async patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.patch<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.delete<ApiResponse<T>>(url, config);
    return response.data;
  }

  async uploadFile<T = unknown>(url: string, file: File, onProgress?: (progress: number) => void): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await this.client.post<ApiResponse<T>>(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          onProgress(Math.round(progress));
        }
      },
    });

    return response.data;
  }

  async getPaginated<T = unknown>(
    url: string, 
    page: number = 1, 
    limit: number = 10,
    config?: AxiosRequestConfig
  ): Promise<PaginatedResponse<T>> {
    const params = { page, limit, ...config?.params };
    const response = await this.client.get<PaginatedResponse<T>>(url, {
      ...config,
      params,
    });
    return response.data;
  }

  setHeader(key: string, value: string): void {
    this.client.defaults.headers.common[key] = value;
  }

  removeHeader(key: string): void {
    delete this.client.defaults.headers.common[key];
  }

  getAxiosInstance(): AxiosInstance {
    return this.client;
  }
}

export const apiClient = new ApiClient();
export const useApiClient = () => {
  return apiClient;
};

export default apiClient;
