<template>
  <v-layout>
    <v-flex xs4 class="mr-2">
      <panel title="Song" >
        <v-text-field
          required 
          :rules="[required]"
          label="Title"
          v-model="song.title"
        ></v-text-field>
        <v-text-field
          required 
          :rules="[required]"
          label="Artist"
          v-model="song.artist"
        ></v-text-field>
        <v-text-field
          required 
          :rules="[required]"
          label="Genre"
          v-model="song.genre"
        ></v-text-field>
        <v-text-field
          required 
          :rules="[required]"
          label="Album"
          v-model="song.album"
        ></v-text-field>
        <v-text-field
          required 
          :rules="[required]"
          label="Album Imagem Url"
          v-model="song.albumImageUrl"
        ></v-text-field>
        <v-text-field
          required 
          :rules="[required]"
          label="YouTube ID"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Hm">
        <v-text-field
          required 
          :rules="[required]"
          multi-line
          label="Lyrics"
          v-model="song.lyrics"
        ></v-text-field>
        <v-text-field
          required 
          :rules="[required]"
          multi-line
          label="Tab"
          v-model="song.tab"
        ></v-text-field>
      </panel>
      <div class="red--text">
        {{error}}
      </div>
      <v-btn class="cyan" 
                dark
                @click="save">
                Save Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async save () {
      this.error = null
      const hasEmptyField = Object.keys(this.song).some(key => !this.song[key])
      if (hasEmptyField) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.edit(this.song.id, this.song).data
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
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

</style>