export default {
  async fetchCategories({ commit }) {
    const { data } = await this.$axios.get(
      'http://en.vo1ss.com/wp-json/wp/v2/categories?per_page=40'
    )
    commit('ADD', data)
  }
}
