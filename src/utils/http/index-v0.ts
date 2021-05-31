/**
 * XMLHttpRequest封装请求处理,返回 Promise
 * method  请求可写body
 * get:    none       
 * post:   body       
 * put:    body       
 * delete: body       
 */
import { HttpMethodEnum, HttpContentTypeEnum } from "@/utils/emuns/http-enum";

// es7+
let xhr = new XMLHttpRequest();

const _request = (url: string, data: any, method: HttpMethodEnum) => {
  console.log("url=", url);
  return new Promise((resolve, reject) => {
    // 配置
    xhr.open(HttpMethodEnum[method], url, true);
    // 处理毁掉
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
    xhr.onerror = function() {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    }
    // 发起
    xhr.send(data);
  })
}

const _formatUrl = (url: string, data: any, method: HttpMethodEnum) => {
  if (HttpMethodEnum.GET === HttpMethodEnum[method] && data !== null) {
    // get, params 参数
    
  }
  
  return url;
}

/** 处理data */
const _formatData = (data: Record<string, any>, dataType: HttpContentTypeEnum) => {
  
}

/** get请求 */
const get = (url:string, data: any) => {
  return _request(url, null, HttpMethodEnum.GET);
}

/** post请求 */
const post = (url:string, data: Record<string, any>) => {
  return _request(url, data, HttpMethodEnum.POST);
}

/** put请求 */
const put = (url:string, data: Record<string, any>) => {
  return _request(url, data, HttpMethodEnum.PUT);
}

/** _delete 请求删除, 无任何返回 */
const _delete = (url:string, data: Record<string, any>) => {
  return _request(url, data, HttpMethodEnum.DELETE);
}

export {
  get,
  post,
  put,
  _delete,
}
