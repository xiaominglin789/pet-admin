import { HttpContentTypeEnum, HttpMethodEnum } from "@/utils/emuns/http-enum";
import { ajax } from "@/utils/http/http-v1";
import { get, post } from "@/utils/http/index-v0";

export const getTest = (data?: Record<string, any>) => get(
  "/api/test", data
);

export const getTest1 = () => post(
  "/api/one", { msg: "send", name: "apem", age: 12 }, HttpContentTypeEnum.JSON
);

export const getTest3 = () => ajax({
  url: "/api/one",
  method: HttpMethodEnum.POST,
  data: { msg: "send", name: "apem", age: 12 },
  dataType: HttpContentTypeEnum.FORM
});
