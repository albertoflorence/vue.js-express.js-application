const {
  sequelize,
  Song,
  User,
  Bookmark
} = require('../src/models')

const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const Promise = require('bluebird')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all([
      songs.forEach(song => {
         Song.create(song)
      }), 
      users.forEach(user => {
         User.create(user)
      }),
      bookmarks.forEach(bookmark => {
         Bookmark.create(bookmark)
      })
    ])
  })