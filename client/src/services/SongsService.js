import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  create (song) {
    return Api().post('songs/create', song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  edit (songId, song) {
    return Api().put(`songs/${songId}`, song)
  }
}
