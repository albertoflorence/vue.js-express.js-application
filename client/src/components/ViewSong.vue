<template>
  <v-layout>
      <v-flex xs6 class="mr-2">
        <panel title="Song">
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
            </v-flex>
            <v-flex xs6>
              <img 
                class='album-image'
                :src="song.albumImageUrl">
              <p 
              class="song-album">
                {{song.album}}
              </p>
            </v-flex>
          </v-layout>
        </panel>
      </v-flex>
      <v-flex xs6>
        <panel title="Tabs">
          <textarea
            class="song-tab"
            readonly
            v-model="song.tab"/>
        </panel>
      </v-flex>
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    const song = (await SongsService.show(songId)).data
    this.song = song
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
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
  width: 50%;
}
.song-album {
  margin-bottom: 0px;
}
.song-tab {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>