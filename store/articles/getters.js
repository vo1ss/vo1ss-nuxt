export default {
  // GETTERS TO CHECK IF VUEX STATE HAS BEEN POPULATED
  isArticlesEmpty(state) {
    return state.articles.length === 0
  },
  // GETTERS FOR LANDING PAGE
  getArticles: state => category => {
    return state.articles.filter(child => child.category === category)[0]
  },
  getStories(state) {},
  getEditorPicks(state) {},

  // GETTERS FOR ARTICLE PAGE
  getArticle(state) {
    return state.article
  }
}
