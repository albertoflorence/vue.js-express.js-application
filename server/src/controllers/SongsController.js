const {Song} = require('../models')

module.exports = {
  async index(req, res) {
    try {
      let songs = null
      search = req.query.search
      console.log(search)
      if(search) {
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs' + err
      })
    }

  },
	async post(req, res) {
		try {
      const song = await Song.create(req.body)
      res.send(song.toJSON())

		} catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the songs'
      })
		}
	},
  async show(req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the song'
      })
    }
  },
  async put(req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to get the song'
      })
    }
  },

}