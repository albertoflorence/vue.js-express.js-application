<template>
	<div>
    <v-layout>
      <v-flex xs6 class="mr-2" v-if="isUserLoggedIn">
        <songs-bookmarks class="mb-2" />
        <recently-viewed-songs />
      </v-flex>
      <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }">
        <songs-panel />
      </v-flex> 
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearch from './SongsSearch'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      songs: []
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    SongsPanel,
    SongsSearch,
    SongsBookmarks,
    RecentlyViewedSongs
  }
}
</script>

<style scoped>
</style>