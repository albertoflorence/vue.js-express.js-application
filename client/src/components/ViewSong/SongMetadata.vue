<template>
  <panel title="Song">
    <v-layout class="size">
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
            name: 'songs-edit', 
            params: {
              songId: song.id
            }
          })">edit
        </v-btn>
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
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
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
  width: 350px;
  height: 350px;
}
.song-album {
  margin-bottom: 0px;
}
.size {
  height: 406px;
}
</style>