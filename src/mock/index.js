import Mock from 'mockjs';
import { getAuthorization, login } from './response/user';

Mock.mock('/api/login', 'post', login);
Mock.mock('/api/authorization', 'get', getAuthorization);

// 设置超时时间
Mock.setup({
  timeout: 0
});
export default Mock;
