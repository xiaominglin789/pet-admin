import { HttpContentTypeEnum, HttpMethodEnum } from "@/utils/emuns/http-enum";
import { ajax, get, post, put, del } from "@/utils/http/http-v1";

export const getTestGet = () => get("/api/test", { name: "apem", age: 18 });

export const getTestPost = () => post("/api/one", { msg: "send", name: "apem", age: 12 });

export const getTestPut = () => put("/api/put", { msg: "send", name: "apem", age: 12 });

export const getTestDelete = () => del("/api/del", { msg: "send", name: "apem", age: 12 });

export const getTest3 = () => ajax({
  url: "/api/one",
  method: HttpMethodEnum.POST,
  data: { msg: "send", name: "apem", age: 12 },
  dataType: HttpContentTypeEnum.FORM
});

/** 上传服务 */
export const getTest4 = (uploadName: string, files: any) => ajax({
  url: "/api/upload",
  method: HttpMethodEnum.POST,
  data: { uploadName, files },
  dataType: HttpContentTypeEnum.MULTIPART
});
