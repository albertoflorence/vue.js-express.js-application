<template>
	<div>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <songs-panel />
      </v-flex> 
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearch from './SongsSearch'
export default {
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
    Panel,
    SongsPanel,
    SongsSearch
  }
}
</script>

<style scoped>
</style>