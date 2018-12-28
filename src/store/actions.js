import {getData} from 'src/api/user';

const actions = {
  updateAppName({commit}) {
    getData().then(res => {
      console.log(res);
      const appName = res.data.name;
      commit('SET_APP_NAME', appName);
    }).catch(err => {
      console.log(err);
    });
  }
};
export default actions;
