export interface ApiMeta {
  page?: number;
  limit?: number;
  total?: number;
  totalPages?: number;
}

export interface ApiResponse<T> {
  success?: boolean;
  message: string;
  data: T;
  meta?: ApiMeta;
}

export interface PaginatedQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  sort?: string;
}