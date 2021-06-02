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
import { isArray } from "../util";

let xhr:XMLHttpRequest;

const createXHR = () => {
  console.log("优先执行生成 xhr");
  if (xhr) {
    return xhr;
  }
  return new XMLHttpRequest();
}


const ajax = <T extends any>(options: AjaxType): Promise<T> => {
  if (!xhr) {
    xhr = createXHR();
  }
  return new Promise((resolve, reject) => {
    const { url, method = HttpMethodEnum.GET, data, dataType, timeout = 3000 } = options;
    
    console.log(data);
    
    if (!url) { throw new Error("错误参数,请求地址为空"); }
    console.log("url: ", url);
    
    console.log("method: ", method);

    xhr.open(method, url, true);
    xhr.timeout = timeout;

    /** 设置请求数据配置类型 */
    _setCurrentContentType(xhr, dataType);
    console.log("method: ", method);

    /** body 数据处理处理 */
    let body = method === HttpMethodEnum.GET ? null : _setCurrentData(data, dataType); 
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

    /** 请求超时处理 */
    xhr.ontimeout = function(e) {
      console.error("请求超时: ", e);
      reject();
    }

    /** 请求错误处理 */
    xhr.onerror = function(e) {
      console.error("报错了? ", e, " - ", xhr.responseText);
      reject(JSON.parse(xhr.responseText));
    }
  });
}

/** get数据请求 */
const get = <T extends any>(url: string, params: Record<string, any>) => {
  const _url = url + _formatDataToString(params, "?", "=", "&");
  return ajax<T>({
    url: _url,
    method: HttpMethodEnum.GET,
    data: {},
    dataType: HttpContentTypeEnum.JSON
  })
}


/** post数据请求-json */
const post = <T extends any>(url: string, data: Record<string, any>) => {
  return ajax<T>({
    url,
    method: HttpMethodEnum.POST,
    data,
    dataType: HttpContentTypeEnum.JSON
  })
}


/** put数据请求-json */
const put = <T extends any>(url: string, data: Record<string, any>) => {
  return ajax<T>({
    url,
    method: HttpMethodEnum.PUT,
    data,
    dataType: HttpContentTypeEnum.JSON
  })
}


/** delete 数据请求-json */
const del = <T extends any>(url: string, data: Record<string, any>) => {
  return ajax<T>({
    url,
    method: HttpMethodEnum.DELETE,
    data,
    dataType: HttpContentTypeEnum.JSON
  })
}


/**
 * kv键值结构的数据 转换成 某种字符拼接的字符串
 * @param data k-v
 * @param startChar 起始的拼接字符串
 * @param connectChar k-v连接的字符串
 * @param linkChar 每组 k-v 之间的连接字符串
 * @returns 
 */
const _formatDataToString = (data: Record<string, any>, startChar?: string, connectChar?: string, linkChar?: string): string => {
  if (!Object.keys(data).length) {
    return "";
  }
  let temp = "" + startChar;
  for (let [k, v] of Object.entries(data)) {
    temp += k + connectChar + v + linkChar;
  }
  // 去除temp尾部的linkChar最后一个字符
  const regexp = new RegExp(`${linkChar}?$`);
  return temp.replace(regexp, "");
}

/** 设置请求的数据content类型 */
const _setCurrentContentType = (xhr: XMLHttpRequest, dataType: HttpContentTypeEnum) => {
  switch (dataType) {
    case HttpContentTypeEnum.FORM:
      // 设置请求前数据解析类型
      xhr.setRequestHeader("Content-type", HttpContentTypeEnum.FORM);
      break;
    case HttpContentTypeEnum.JSON:
      // 设置请求前数据解析类型
      xhr.setRequestHeader("Content-type", HttpContentTypeEnum.JSON);
      break;
    case HttpContentTypeEnum.MULTIPART:
      // 对于 multipart/formdata type 不需要手动设置
      // 浏览器有机制需要自动写入boundary的key值
      // 如果此处手动设置, 浏览器将无法正常写入boundary值
      // 会引起请求参数缺失 服务器500异常
      // xhr.setRequestHeader("Content-type", HttpContentTypeEnum.MULTIPART);
      break;
    default:
      break;
  }
}

/** 转换数据格式 */
const _setCurrentData = (data: Record<string, any>, dataType: HttpContentTypeEnum) => {
  if (!Object.keys(data).length) {
    return null;
  }

  let body: Document | BodyInit | null | undefined; 
  switch (dataType) {
    case HttpContentTypeEnum.JSON:
      // 转成 json字符串
      body = JSON.stringify(data);
      break;
    case HttpContentTypeEnum.FORM:
      // k-v-& 字符串, 数据转成: k=v&k1=v1&k2=v2 形式的字符串
      body = _formatDataToString(data, "", "=", "&");
      console.log(body);
      break;
    case HttpContentTypeEnum.MULTIPART:
      // files => File ... 
      const { uploadName, files } = data;

      const formData = new FormData();
      if (isArray(files)) {
        // 数组处理
        files.forEach((el: any) => {
          formData.append(uploadName, el);
        });
      } else {
        // 非数组处理
        // console.log(uploadName);
        // console.log(files);
        formData.append(uploadName, files);
      }
      body = formData;
      break;
    default:
      break;
  }
  return body;
}

export {
  ajax,
  get,
  post,
  put,
  del
};
