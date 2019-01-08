import Mock from 'mockjs';
import { getAuthorization, login } from './response/user';
import { getTableData, getFileList, getFolderList } from './response/data';

Mock.mock('/api/login', 'post', login);
Mock.mock('/api/authorization', 'get', getAuthorization);
Mock.mock('/api/getTableData', 'get', getTableData);
Mock.mock('/api/getFileList', 'get', getFileList);
Mock.mock('/api/getFolderList', 'get', getFolderList);
// 设置超时时间
Mock.setup({
  timeout: 0
});
export default Mock;
