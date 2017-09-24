<template>
  <div>
    <v-layout>
      <v-flex class="mr-2" xs6>
        <song-metadata :song="song"/>
      </v-flex>
      <v-flex xs6>
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
    </v-layout>
    <v-layout class="mt-2">
    <v-flex class="mr-2" xs6>
      <lyrics :lyrics="song.lyrics"/>
    </v-flex>
    <v-flex xs6>
      <tab :tab="song.tab"/>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongHistoryService from '@/services/SongsHistoryService'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    const song = (await SongsService.show(songId)).data
    this.song = song

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Tab,
    Lyrics
  }
}
</script>

<style scoped>
</style>