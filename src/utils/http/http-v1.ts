/**
 * XMLHttpRequest封装请求处理,返回 Promise
 * method  请求可写body
 * get:    none       
 * post:   body       
 * put:    body       
 * delete: body       
 */
import { stat } from "fs";
import { HttpContentTypeEnum, HttpMethodEnum } from "../emuns/http-enum";
import { AjaxType } from "../types/interface-type";
import qs from "qs";

let xhr:XMLHttpRequest;

const createXHR = () => {
  console.log("优先执行生成 xhr");
  if (xhr) {
    return xhr;
  }
  return new XMLHttpRequest();
}


const ajax = (options: AjaxType) => {
  if (!xhr) {
    xhr = createXHR();
  }

  return new Promise((resolve, reject) => {
    const { url, method = HttpMethodEnum.GET, data, dataType } = options;

    if (!url) { throw new Error("错误参数,请求地址为空"); }
    console.log("url: ", url);
    
    console.log("method: ", method);

    xhr?.open(method, url, true);

    // 数据类型
    switch (dataType) {
      case HttpContentTypeEnum.FORM:
        console.log("设置请求前数据解析类型...");
        xhr.setRequestHeader("Content-type", HttpContentTypeEnum.FORM);
        break;
      case HttpContentTypeEnum.JSON:
        console.log("设置请求前数据解析类型...");
        xhr.setRequestHeader("Content-type", HttpContentTypeEnum.JSON);
        break;
      case HttpContentTypeEnum.MULTIPART:
        console.log("设置请求前数据解析类型...");
        xhr.setRequestHeader("Content-type", HttpContentTypeEnum.MULTIPART);
        break;
      default:
        console.log("设置请求前数据解析类型 - 失败...");
        break;
    }
    console.log("method: ", method);

    /** body处理 */
    let body: Document | BodyInit | null | undefined; 
    if (method === HttpMethodEnum.GET || Object.entries(data).length === 0) {
      // get请求 或 data是没有实际项的数据
      body = null;
    }
    if (dataType === HttpContentTypeEnum.JSON) {
      // 转成 json字符串
      body = JSON.stringify(data);
    } else if (dataType === HttpContentTypeEnum.FORM) {
      // 手动讲数据转成: k=v&k1=v1&k2=v2 形式的字符串
      // const _data = qs.stringify(data);
      // 类似get-url的参数拼接可以封装到一起
      let temp = "";
      for (let [k,v] of Object.entries(data)) {
        temp += k+"="+v+"&"
      }
      body = temp.replace(/&?$/, "");
    } else if (dataType === HttpContentTypeEnum.MULTIPART) {
      // 转成数据流 blod
      // TODO
      const _data = data;
      console.log("即将转成数据流 blod.....");
    }

    xhr.send(body);

    /** 响应处理 */
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        // 请求完成
        const status = xhr.status;
        const statusText = xhr.statusText;
        console.log("参数 status ", status, " statusText ", statusText);
        if (String(status).startsWith("2")) {
          // 2xx
          console.log("拿到数据 ", JSON.parse(xhr.responseText));
          resolve(JSON.parse(xhr.responseText));
        } else {
          // 异常处理 4xx 5xx
          console.log("异常处理 4xx 5xx");
          reject("异常处理 4xx 5xx");
        }
      }
    }

    xhr.onerror = function() {
      console.error("报错了?", xhr.responseText);
      reject(JSON.parse(xhr.responseText));
    }
  });
}

export {
  ajax
};



