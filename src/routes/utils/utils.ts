import { PaginationQuery } from '../../service/models/utils';
import { GeneralResponse, PaginationResponseData } from '../models/models';

export function parsePaginationQuery(query: any): PaginationQuery {
  const page = parseInt(query.page) || 1;
  const length = parseInt(query.length) || 10;
  const search = query.search || '';

  return { page, length, search };
}

export function generateGeneralResponse<T>(
  success: boolean,
  message: string,
  data: T | null,
  error: string | null
): GeneralResponse<T> {
  return {
    success,
    message,
    data,
    error,
  };
}

export function generatePaginationResponse<T>(
  query: PaginationQuery,
  result: T[],
  totalData: number,
  message: string = 'Success'
): GeneralResponse<PaginationResponseData<T>> {
  const totalPage = Math.ceil(totalData / query.length);
  const paginationResponse: PaginationResponseData<T> = {
    result: result,
    page: query.page,
    length: query.length,
    total_page: totalPage,
  };
  return generateGeneralResponse<PaginationResponseData<T>>(
    true,
    message,
    paginationResponse,
    null
  );
}
