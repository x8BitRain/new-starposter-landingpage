import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// @ts-ignore
export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en: require('~/assets/i18n/en.json'),
      fr: require('~/assets/i18n/fr.json'),
    },
  })
  app.i18n.path = (link: any) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
