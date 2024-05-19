export type GeneralResponse<T> = {
  success: boolean;
  message: string;
  data: T | null;
  error: string | null;
};

export type PaginationResponseData<T> = {
  result: T[];
  page: number;
  length: number;
  total_page: number;
};

export type PaginationQuery = {
  length: number;
  page: number;
  search: string;
};
