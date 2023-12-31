import { mockRequest, requestNew } from '../request';

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
  return mockRequest.post<boolean>('/getSmsCode', { phone });
}

/**
 * 登录
 * @param userName - 用户名
 * @param password - 密码
 */
export function fetchLogin(userName: string, password: string, isMock = false) {
  return isMock
    ? mockRequest.post<ApiAuth.Token>('/login', { userName, password })
    : requestNew.post<ApiAuth.Token>(
        '/api/system/login',
        { userName, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
}

/** 获取用户信息 */
export function fetchUserInfo(isMock = false) {
  return isMock
    ? mockRequest.get<ApiAuth.UserInfo>('/getUserInfo')
    : requestNew.get<ApiAuth.UserInfo>('/api/system/getInfo', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes(isMock = false) {
  return isMock
    ? mockRequest.get<ApiRoute.Route>('/getUserRoutes')
    : requestNew.get<ApiRoute.Route>('/api/system/menu/route', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
}

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
  return mockRequest.post<ApiAuth.Token>('/updateToken', { refreshToken });
}
