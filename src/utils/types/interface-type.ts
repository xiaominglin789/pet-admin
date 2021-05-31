import { HttpContentTypeEnum, HttpMethodEnum } from "../emuns/http-enum";

/** 登录类型 */
export interface SigninModelType {
  account: string
  password: string
}

/** 注册类型 */
export interface SignupModelType extends SigninModelType {
  code: string
  email: string
}

export interface GGType {
  count: number
}

/** ajax参数类型 */
export interface AjaxType {
  url: string
  data: Record<string, any>
  dataType: HttpContentTypeEnum
  method?: HttpMethodEnum
}