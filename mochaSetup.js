import { JSDOM } from 'jsdom'
import Sinon from 'sinon'

const { window } = new JSDOM('<div id="app"></div>', {
  url: 'http://localhost:3000'
})

global.window = window
global.localStorage = window.localStorage
global.document = window.document
global.Node = window.Node
global.FormData = window.FormData
global.MouseEvent = window.MouseEvent
global.XMLHttpRequest = Sinon.useFakeXMLHttpRequest()
