import WebSocketFactory from '../api/WebSocketApi'
import { SocketSendData, WebSocketEvents, WebSocketProps } from '../api/types'
import Store from '../services/Store'
import ChatController from './ChatController'

class MessagesController {
  private _api: WebSocketFactory = new WebSocketFactory({} as WebSocketProps, {} as WebSocketEvents)
  private _pingIntervalId: NodeJS.Timeout | undefined

  openSocketConnection(data: WebSocketProps) {
    if (this._api) {
      this.closeSocket()
    }
    this._api = new WebSocketFactory(data, {
      onOpen: this.handleSocketOpen.bind(this),
      onClose: this.handleSocketClose.bind(this),
      onError: this.handleSocketError.bind(this),
      onMessage: this.handleSocketMessage.bind(this)
    })
  }

  private _send(data: SocketSendData) {
    this._api.send(data)
  }

  public sendMessage(content: string) {
    this._send({
      content: content,
      type: 'message'
    })
  }

  public getOldMessages(offset = 0) {
    this._send({
      content: String(offset),
      type: 'get old'
    })
  }

  private _ping() {
    this._send({
      content: '',
      type: 'ping'
    })
  }

  closeSocket() {
    clearInterval(this._pingIntervalId)
    this._api.close()
  }

  handleSocketOpen() {
    console.log('Соединение установлено')
    this.setPing()
    this.getOldMessages()
  }

  handleSocketClose(e: CloseEvent) {
    if (e.wasClean) {
      console.log('Соединение закрыто чисто')
    } else {
      console.log('Обрыв соединения')
      console.log(`Код: ${e.code} | Причина: ${e.reason}`)
    }
  }

  handleSocketMessage(e: MessageEvent) {
    try {
      const data = JSON.parse(e.data)
      if (data.type === 'pong' || data.type === 'user connected') {
        return
      }

      let messagesState: Array<unknown> = []
      if (Store.getState().messages instanceof Array) {
        messagesState = messagesState.concat(Store.getState().messages)
      }

      if (Array.isArray(data)) {
        messagesState = messagesState.concat(data)
        if (data.length === 20) {
          const ids = data.map((item) => item.id)
          const maxId = Math.max(...ids)

          this.getOldMessages(maxId)
        }
      } else {
        messagesState.unshift(data)

        ChatController.getChats()
      }
      Store.setState('messages', messagesState)

      console.log(Store.getState().messages)
    } catch (e) {
      console.log(e)
    }
  }

  handleSocketError(e: Event) {
    if (e instanceof ErrorEvent) console.log('Ошибка', e.message)
  }

  setPing() {
    this._pingIntervalId = setInterval(() => {
      this._ping()
    }, 30000)
  }
}
export default new MessagesController()
