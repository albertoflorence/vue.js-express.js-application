<template>
  <v-text-field class="song-search"
    label="search by song title, artist, album or genre"
    single-line
    dark
    v-model="query"
    @keyup.enter="search"
  />  
</template>

<script>
export default {
  data () {
    return {
      query: null
    }
  },
  methods: {
    search () {
      const search = this.query
      const route = {
        name: 'songs'
      }
      route.query = { search }
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.song-search {
  margin-top: 28px;
  max-width: 400px;
}

</style>