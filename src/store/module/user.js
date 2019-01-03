import { login, authorization } from 'src/api/user';
import { setToken } from 'src/lib/util';

const state = {
  userName: 'Lison'
};
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1);
  }
};
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params;
  }
};
const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    // rootState.appName
  },
  login ({ commit }, { userName, password }) {   // 登录请求
    return new Promise((resolve, reject) => {
      login({ userName, password }).then(res => {   //  放入promise中调用
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token);   // 保存后端token数据
          resolve();
        } else {
          reject(new Error('错误'));  // 返回错误信息
        }
      }).catch(error => {
        reject(error);
      });
    });
  },
  authorization ({ commit }, token) {   // 认证请求
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (parseInt(res.code) === 401) {  // 401 Unauthorized（未授权）
          reject(new Error('token error'));
        } else {
          setToken(res.data.token);
          resolve();
        }
      }).catch(error => {
        reject(error);
      });
    });
  },
  logout () {   // 退出登陆时用，清除token
    setToken('');
  }
};

export default {
  getters,
  state,
  mutations,
  actions,
  modules: {
    //
  }
};
