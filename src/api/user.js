import axios from './index';

// get请求方式
export const getData = () => {
  return axios.request({
    url: '/api/seller',
    method: 'get'
  });
};

// post请求
export const postData = ({param1, param2}) => {
  return axios.request({
    url: '/api/goods',
    method: 'post',
    data: {
      param1,
      param2
    }
  });
};
