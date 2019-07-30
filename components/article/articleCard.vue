<template>
  <v-card flat>
    <v-img
      height="300px"
      :src="article.jetpack_featured_media_url"
    />
    <v-card-text>
      <span class="card__category card__header">{{ category.toUpperCase() }}</span>
      <span class="card__date card__header">{{ ' - ' + dateFilter.toUpperCase() }}</span>
      <h2 class="card__title">{{ title }}</h2>
      <hr class="card__hr">
      <p class="card__excerpt">{{ excerpt }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    ...mapGetters({
      getCategoryName: 'categories/getCategoryName'
    }),
    dateFilter() {
      return this.$moment(this.article.date).format('LL')
    },
    category() {
      const categoryName = this.getCategoryName(this.article.categories[0])
      return categoryName.includes('&amp;') ? categoryName.replace('&amp;', '&') : categoryName
    },
    title() {
      return this.decode(this.article.title.rendered)
    },
    excerpt() {
      return `${this.article.excerpt.rendered.slice(3, 200)}...`
    }
  },
  methods: {
    decode(str) {
			return str.replace(/&#(\d+);/g, function(match, dec) {
				return String.fromCharCode(dec);
			});
		}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/global.scss';
.card {
  &__header {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
  }
  &__category {
    color: $pink;
  }
  &__date {
    color: grey;
  }
  &__hr {
    text-align: center;
    width: 15%;
    height: 1px;
    margin: 5% auto;
    border: none;
    background-color: $pink;
  }
  &__title {
    margin-top: 2.5%;
  }
  &__excerpt {
    line-height: 2;
  }
}
</style>
