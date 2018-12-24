import Vue from 'vue';
// 国际化
import VueI18n from 'vue-i18n';
// 解析语言
import Cookies from 'js-cookie';
import en from './locale/en';
import zh from './locale/zh';

Vue.use(VueI18n);

const messages = {
  zh: zh,
  en: en
};

export default new VueI18n({
  locale: Cookies('language') || 'zh',
  messages
});
