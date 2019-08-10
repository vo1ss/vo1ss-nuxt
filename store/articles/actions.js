export default {
  // FETCH MULTIPLE ARTICLES
  async fetchRecentArticles({ commit }) {
    const { data } = await this.$axios.get(
      'http://en.vo1ss.com/wp-json/wp/v2/posts?per_page=3'
    )
    commit('SET_ARTICLES', {
      category: 'recent',
      data
    })
  },
  async fetchFeaturedArticles({ commit }) {
    const { data } = await this.$axios.get(
      'http://en.vo1ss.com/wp-json/wp/v2/posts?categories=81'
    )
    commit('SET_ARTICLES', {
      category: 'featured',
      data
    })
  },
  async fetchStoriesArticles({ commit }) {
    const { data } = await this.$axios.get(
      'http://en.vo1ss.com/wp-json/wp/v2/posts?per_page=3&categories=42'
    )
    commit('SET_ARTICLES', {
      category: 'stories',
      data
    })
  },
  async fetchPicksArticles({ commit }) {
    const rand = Math.floor((Math.random() * 10) + 1)
    const { data } = await this.$axios.get(
      `http://en.vo1ss.com/wp-json/wp/v2/posts?page=${rand * 2}&per_page=6&categories_exclude=42,81`
    )
    commit('SET_ARTICLES', {
      category: 'picks',
      data
    })
  },
  // FETCH SINGLE ARTICLE
  async fetchArticle({ commit }, id) {
    const { data } = await this.$axios.get(
      'http://en.vo1ss.com/wp-json/wp/v2/posts?'
    )
    commit('CLEAR_ARTICLE')
    commit('SET_ARTICLE', data)
  }
}
