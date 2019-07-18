<template>
  <v-toolbar dense flat class="toolbar">
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  items: {
    languages: [
      {
        lang: 'KR'
      },
      {
        lang: 'JP'
      }
    ],
    sns: [
      {
        category: 'facebook',
        link: 'facebook'
      },
      {
        category: 'twitter',
        link: 'twitter'
      },
      {
        category: 'instagram',
        link: 'instagram'
      }
    ]
  }
}
</script>

<style lang="scss" scoped></style>
