export interface ApiMeta {
  page?: number;
  limit?: number;
  total?: number;
}

export interface ApiResponse<T> {
  success?: boolean;
  message: string;
  data: T;
  meta?: ApiMeta;
}