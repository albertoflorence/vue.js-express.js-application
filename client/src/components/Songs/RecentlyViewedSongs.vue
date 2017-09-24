<template>
  <panel title="Recently Viewed Songs">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="histories">
      <template slot="items" scope="props">
        <td class="text-xs-right">
          {{props.item.Song.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.Song.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import SongHistoryService from '@/services/SongsHistoryService'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      histories: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.histories = (await SongHistoryService.index()).data
      console.log(this.histories)
    }
  }
}
</script>

<style scoped>

</style>