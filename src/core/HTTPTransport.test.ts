import { beforeEach, describe } from 'mocha'
import Sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon'
import { HTTPTransport } from './HTTPTransport'
import { expect } from 'chai'

describe('HTTPTransport', () => {
  const testUrl = 'testUrl'
  let xhr: SinonFakeXMLHttpRequestStatic
  let httpClient: HTTPTransport
  let requests: SinonFakeXMLHttpRequest[] = []

  beforeEach(() => {
    httpClient = new HTTPTransport(testUrl)
    xhr = Sinon.useFakeXMLHttpRequest()
    xhr.onCreate = (req) => {
      requests.push(req)
    }
  })

  afterEach(() => {
    requests = []
    xhr.restore()
  })

  it('should send get req', () => {
    httpClient.get('/')
    const [request] = requests
    expect(request.method).to.eq('GET')
  })
})
