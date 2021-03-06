import Vue from 'vue';
// 国际化
import VueI18n from 'vue-i18n';
// 解析语言
import Cookies from 'js-cookie';
// iview 国际化支持
import iviewEn from 'iview/dist/locale/en-US';
import iviewZh from 'iview/dist/locale/zh-CN';
// 自定义组件国际化支持
import en from './locale/en';
import zh from './locale/zh';

Vue.use(VueI18n);

// 这里要进行覆盖，否则有时候会报错
Vue.locale = () => {
};

// 把业务中的语言包和iview的语言包进行合并
const messages = {
  en: Object.assign(en, iviewEn),
  zh: Object.assign(zh, iviewZh)
};

export default new VueI18n({
  locale: Cookies('language') || 'zh',
  messages
});
