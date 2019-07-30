export default {
  async fetchArticles({ commit }) {
    const { data } = await this.$axios.get(
      'http://en.vo1ss.com/wp-json/wp/v2/posts?'
    )
    commit('ADD', data)
  }
}
