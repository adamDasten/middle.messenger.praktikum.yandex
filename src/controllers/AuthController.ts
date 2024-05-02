import AuthApi from '../api/AuthApi'
import { ProfileResponseData, SignInRequest, SignUpRequest } from '../api/types'
import { Path } from '../consts/routes'
import Router from '../core/Router'
import Store from '../services/Store'
import { dataToSave } from '../utils/dataToSave'
import ChatController from './ChatController'

class AuthController {
  private _api: AuthApi

  constructor() {
    this._api = new AuthApi()
  }

  public async login(data: Record<string, string> | null, e: Event) {
    try {
      if (!data) {
        throw new Error('Нет валидно')
      }

      const transformToData: SignInRequest = {
        login: data.login,
        password: data.password
      }

      await this._api.signIn(transformToData)

      await this.getUser()
      await ChatController.getChats()

      // очищаем форму
      ;(e.target as HTMLFormElement).reset()

      Router.go('/chats')

      // Останавливаем крутилку
    } catch (error: unknown) {
      alert(error)

      try {
        if (JSON.parse(error as string).reason === 'User already in system') {
          await this.getUser()
          await ChatController.getChats()
          ;(e.target as HTMLFormElement).reset()

          Router.go('/chats')
        }
      } catch (e) {
        console.log('error parse')
      }
    }
  }

  public async register(data: Record<string, string> | null, e: Event) {
    try {
      if (!data) {
        throw new Error('Нет валидно')
      }

      const transformToData: SignUpRequest = {
        login: data.login,
        password: data.password,
        email: data.email,
        first_name: data.first_name,
        phone: data.phone,
        second_name: data.second_name
      }

      await this._api.signUp(transformToData)

      await this.getUser()

      await ChatController.getChats()

      // очищаем форму
      ;(e.target as HTMLFormElement).reset()

      Router.go('/chats')

      // Останавливаем крутилку
    } catch (error) {
      alert(error)
      // Логика обработки ошибок
    }
  }

  public async getUser() {
    try {
      const { response } = await this._api.getUser()
      const getData = JSON.parse(response) as ProfileResponseData
      dataToSave(getData)
    } catch (e) {
      alert(e)
    }
  }

  public async logout() {
    try {
      Store.clearState()
      Router.go(Path.MAIN)
      await this._api.logout()
    } catch (e) {
      alert(e)
    }
  }
}

export default new AuthController()
