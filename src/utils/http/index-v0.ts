/**
 * XMLHttpRequest封装请求处理,返回 Promise
 * method  请求可写body
 * get:    none       
 * post:   body       
 * put:    body       
 * delete: body       
 */
import { HttpMethodEnum, HttpContentTypeEnum } from "@/utils/emuns/http-enum";
import { isObject } from "../util";

// es7+
let xhr = new XMLHttpRequest();

const _request = (url: string, data: any, method: HttpMethodEnum, dataType?: HttpContentTypeEnum) => {
  console.log("url=", url, " data=", data);
  return new Promise((resolve, reject) => {
    // 配置
    xhr.open(HttpMethodEnum[method], url, true);
    /** post/put/delete 处理 data 的cont-type方式, get-data=null */
    // if (data) {
    //   switch (dataType) {
    //     case HttpContentTypeEnum.FORM:
    //       xhr.setRequestHeader("Content-Type", 'application/json');
    //       break;
    //     case HttpContentTypeEnum.JSON:
    //       xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    //       break;
    //     default:
    //       break;
    //   }
    // }
    xhr.onreadystatechange = function() {
      console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        const codeStatus = xhr.status;
        if (codeStatus.toString().startsWith("2")) {
          // 成功响应
          console.log("success------------------------", xhr.responseText);
          console.log(JSON.parse(xhr.responseText));
          resolve(JSON.parse(xhr.responseText));
        } else {
          // 4xx 5xx 处理
          console.log("fail------------------------");
          console.log(JSON.parse(xhr.responseText));
          reject();
        }
      }
    }
    // 发起
    xhr.setRequestHeader("Content-Type", 'application/json;charset=utf-8');
    
    xhr.send(data);
  })
}

/** get-url-params参数拼接 */
const _formatGetUrl = (url: string, data: any) => {
    // get, params 参数
  if (isObject(data) && Object.keys(data).length > 0) {
    // 传入对象类型的参数,装成 ?k1=v1&k2=v2...
    let temp = "?";
    for(let [k, v] of Object.entries(data)) {
      temp += k + "=" + v + "&";
    }
    temp = temp.replace(/&?$/, '');
    url += temp;
  }
  return url;
}

/** get请求 */
const get = (url:string, data: Record<string, any>|undefined) => {
  return _request(_formatGetUrl(url, data), null, HttpMethodEnum.GET);
}

/** post请求 */
const post = (url:string, data: any, dataType?: HttpContentTypeEnum | undefined) => {
  return _request(url, data, HttpMethodEnum.POST, dataType);
}

/** put请求 */
const put = (url:string, data: Record<string, any>, dataType?: HttpContentTypeEnum | undefined) => {
  return _request(url, data, HttpMethodEnum.PUT, dataType);
}

/** _delete 请求删除, 无任何返回 */
const _delete = (url:string, data: Record<string, any>, dataType?: HttpContentTypeEnum | undefined) => {
  return _request(url, data, HttpMethodEnum.DELETE, dataType);
}

export {
  get,
  post,
  put,
  _delete,
}
