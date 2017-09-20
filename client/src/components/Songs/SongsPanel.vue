<template>
  <panel title="Songs">
    <v-btn
      slot="action"
      @click="navigateTo({name: 'songs-create'})"
      class="cyan accent-2"
      light
      small
      absolute
      right
      middle
      fab
      >
      <v-icon>add</v-icon>
    </v-btn>
    <div 
      v-for="song in songs"
      class="song"
      :key="song.id">
      <v-layout>
        <v-flex xs6>
          <div 
            class="song-title">
            {{song.title}}
          </div>
          <div 
            class="song-artist">
            {{song.artist}}
          </div>
          <div 
            class="song-genre">
            {{song.genre}}
          </div>
          <v-btn 
            dark
            class="cyan"
            small
            @click="navigateTo({
            name: 'song', 
            params: {
              songId: song.id
            }
          })">View
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <img
            class='album-image'
            :src="song.albumImageUrl"/>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    if (this.songs) {
      this.songs = (await SongsService.index()).data
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 200px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 300px;
  height: 150px;
}
</style>