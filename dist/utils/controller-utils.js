"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePaginationResponse = exports.generateGeneralResponse = exports.parsePaginationQuery = void 0;
function parsePaginationQuery(query) {
    const page = parseInt(query.page) || 1;
    const length = parseInt(query.length) || 10;
    const search = query.search || '';
    return { page, length, search };
}
exports.parsePaginationQuery = parsePaginationQuery;
function generateGeneralResponse(success, message, data, error) {
    return {
        success,
        message,
        data,
        error,
    };
}
exports.generateGeneralResponse = generateGeneralResponse;
function generatePaginationResponse(query, result, totalData, message = 'Success') {
    const totalPage = Math.ceil(totalData / query.length);
    const paginationResponse = {
        result: result,
        page: query.page,
        length: result.length,
        total_page: totalPage,
    };
    return generateGeneralResponse(true, message, paginationResponse, null);
}
exports.generatePaginationResponse = generatePaginationResponse;
