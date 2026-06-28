import axios from 'axios';
import type {
  AxiosInstance,
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import type { ApiResponse, PaginatedResponse } from '@/shared/types';

// ─── Configuration ───────────────────────────────────────────────────────────

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.lagunahuacarpay.org/v1';
const DEFAULT_TIMEOUT = 10_000;
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1_000;
const RETRYABLE_STATUS_CODES = new Set([408, 429, 500, 502, 503, 504]);

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isRetryable(status?: number): boolean {
  return status !== undefined && RETRYABLE_STATUS_CODES.has(status);
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ─── Client ──────────────────────────────────────────────────────────────────

class ApiClient {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: DEFAULT_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request: attach auth token
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('auth_token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: unknown) => Promise.reject(error),
    );

    // Response: handle 401
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: { response?: { status?: number } }) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('auth_token');
          window.dispatchEvent(new Event('unauthorized'));
        }
        return Promise.reject(error);
      },
    );
  }

  // ─── Retry wrapper ────────────────────────────────────────────────────────

  private async withRetry<T>(operation: () => Promise<T>): Promise<T> {
    let lastError: unknown;

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        const status = (error as { response?: { status?: number } }).response?.status;

        if (attempt < MAX_RETRIES && isRetryable(status)) {
          await delay(RETRY_DELAY_MS * (attempt + 1));
          continue;
        }

        throw error;
      }
    }

    throw lastError;
  }

  // ─── HTTP Methods ─────────────────────────────────────────────────────────

  async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.withRetry(async () => {
      const response = await this.client.get<ApiResponse<T>>(url, config);
      return response.data;
    });
  }

  async post<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await this.client.post<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  async put<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await this.client.put<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  async patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    const response = await this.client.patch<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.delete<ApiResponse<T>>(url, config);
    return response.data;
  }

  async uploadFile<T = unknown>(
    url: string,
    file: File,
    onProgress?: (progress: number) => void,
  ): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await this.client.post<ApiResponse<T>>(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        if (onProgress && progressEvent.total) {
          onProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100));
        }
      },
    });

    return response.data;
  }

  async getPaginated<T = unknown>(
    url: string,
    page = 1,
    limit = 10,
    config?: AxiosRequestConfig,
  ): Promise<PaginatedResponse<T>> {
    return this.withRetry(async () => {
      const params = { page, limit, ...config?.params } as Record<string, unknown>;
      const response = await this.client.get<PaginatedResponse<T>>(url, {
        ...config,
        params,
      });
      return response.data;
    });
  }

  // ─── Header Management ────────────────────────────────────────────────────

  setHeader(key: string, value: string): void {
    this.client.defaults.headers.common[key] = value;
  }

  removeHeader(key: string): void {
    delete this.client.defaults.headers.common[key];
  }
}

// ─── Singleton ───────────────────────────────────────────────────────────────

export const apiClient = new ApiClient();
export default apiClient;
