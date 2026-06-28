// ─── API Response Types ──────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
  status: number;
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T> {
  pagination: Readonly<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  }>;
}

// ─── Async State ─────────────────────────────────────────────────────────────

export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T = unknown> {
  data: T | null;
  status: AsyncStatus;
  error: string | null;
}
