export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en',
})

export const mutations = {
  SET_LANG(state: { locales: string | any[]; locale: any }, locale: any) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
