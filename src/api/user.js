/**
 * 用户接口
 */
import axios from './index';

// 根据用户id获取用户信息
export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data: {
      userId
    }
  });
};

// 登录认证
export const login = ({ userName, password }) => {
  return axios.request({
    url: '/index/login',
    method: 'post',
    data: {
      userName,
      password
    }
  });
};

export const authorization = () => {
  return axios.request({
    url: '/users/authorization',
    method: 'get'
  });
};
