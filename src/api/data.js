import axios from './index';

export const getTableData = () => {
  return axios.request({
    url: '/api/getTableData',
    method: 'get'
  });
};

export const getFolderList = () => {
  return axios.request({
    url: '/api/getFolderList',
    method: 'get'
  });
};

export const getFileList = () => {
  return axios.request({
    url: '/api/getFileList',
    method: 'get'
  });
};
