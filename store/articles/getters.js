export default {
  recent(state) {
    return state.articles.slice(0, 3)
  }
}
