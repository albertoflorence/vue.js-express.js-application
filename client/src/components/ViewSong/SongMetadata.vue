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
          :to="{
            name: 'songs-edit', 
            params() {
              return {
                songId: song.id
              }
            }
          }">edit
        </v-btn>
        <v-btn 
          v-if="isUserLoggedIn && !bookmark" 
          dark
          class="cyan"
          small
          @click="setBookmark"
        >Bookmark
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          small
          @click="unsetBookmark"
        >UnBookmark
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
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  data () {
    return {
      bookmark: null
    }
  },
  props: [
    'song'
  ],
  components: {
    Panel
  },
  methods: {
    async setBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    if (!this.isUserLoggedIn) {
      return
    }
    const songId = this.$store.state.route.params.songId
    const bookmark = (await BookmarksService.index({
      songId: songId,
      userId: this.user.id
    })).data
    this.bookmark = bookmark
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