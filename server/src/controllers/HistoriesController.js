const {History, Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ],
        group: 'Song.id'
      })
      res.send(histories)
    } catch (err) {
      res.send({
        error: "an error has occured trying to fetch the history"
      })
    }
  },
  async post (req, res) {
    try {
      const {songId} = req.body
      const userId = req.user.id
      const history = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      res.send({
        error: "an error has occured trying to create the history"
      })
    }
  }
}