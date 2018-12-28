import { getData } from 'src/api/user';

const state = {
  userName: 'Nathon'
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
  login ({ commit }) {
    return new Promise((resolve, reject) => {
      getData().then(res => {
        if (res.code === 200) {
          // 打印接收数据
          console.log(res.data);
          // 触发mutaion操作
          commit('SET_USER_NAME', 'success');
          resolve();
        } else {
          reject(new Error('错误'));
        }
      }).catch(error => {
        reject(error);
      });
    });
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
