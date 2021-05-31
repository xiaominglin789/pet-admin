/** 请求方法类型没见 */
export enum HttpMethodEnum {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

/** body参数格式 */
export enum HttpContentTypeEnum {
  /** json */
  JSON = 'application/json;charset=utf-8',
  /** 表单 */
  FORM = 'application/x-www-form-urlencoded',
  /** 上传 */
  MULTIPART = 'multipart/form-data'
}
