export default {
  getCategoryName: state => id => {
    return state.categories.find(category => category.id === id).name
  }
}
