export default {
  SET_ARTICLES(state, payload) {
    state.articles = [
      ...state.articles,
      payload
    ]
  },
  SET_ARTICLE(state, payload) {
    state.article = payload
  },
  CLEAR_ARTICLES(state) {
    state.articles = []
  },
  CLEAR_ARTICLE(state) {
    state.article = null
  }
}
