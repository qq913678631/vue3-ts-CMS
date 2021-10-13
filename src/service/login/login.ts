import zcRequest from '..'
import { IUser, IDataType, ILoginResult } from './type'

enum LoginApi {
  UserLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function userLoginRequest(user: IUser) {
  return zcRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.UserLogin,
    data: user
  })
}

export function getUserInfoById(id: number) {
  return zcRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id
  })
}

export function getUserMenusById(id: number) {
  return zcRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu'
  })
}
