import { OptionsToApi } from '../api/types'
import { BASE_URL } from '../consts/consts'

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

export type Options = {
  headers?: Record<string, string>
  timeout?: number
  method: METHODS
  payload: unknown
}

type HTTPMethod = (url: string, options?: OptionsToApi) => Promise<XMLHttpRequest>

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data: object) {
  // Можно делать трансформацию GET-параметров в отдельной функции
  let str = '?'

  Object.entries(data).forEach(([key, value]) => {
    str += `${key}=${value.toString()}&`
  })

  str = str.substring(0, str.length - 1)

  return str
}

function checkIfNeedQueries<T>(url: string, method: METHODS, data: T) {
  if (method === METHODS.GET && data) {
    return url + queryStringify(data)
  }
  return url
}

export class HTTPTransport {
  url: string

  constructor(url: string) {
    this.url = url
  }

  get: HTTPMethod = (url, options = {} as OptionsToApi) => {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout)
  }

  // PUT, POST, DELETE
  put: HTTPMethod = (url, options = {} as OptionsToApi) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout)
  }

  post: HTTPMethod = (url, options = {} as OptionsToApi) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout)
  }

  delete: HTTPMethod = (url, options = {} as OptionsToApi) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout)
  }

  request = (url: string, options: Options, timeout = 5000): Promise<XMLHttpRequest> => {
    const { method, payload, headers = {} } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key])
      })

      const newUrl = checkIfNeedQueries(this.url + url, method, payload)
      xhr.open(method, newUrl)

      xhr.timeout = timeout
      xhr.onerror = () => {
        reject()
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 400) resolve(xhr)
        else {
          reject(xhr.responseText)
        }
      }

      xhr.ontimeout = reject
      xhr.withCredentials = true

      if (method === METHODS.GET || !payload) {
        xhr.send()
        return
      } else if (payload instanceof FormData) {
        xhr.send(payload)
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(payload))
      }
    })
  }
}

export default new HTTPTransport(BASE_URL)
