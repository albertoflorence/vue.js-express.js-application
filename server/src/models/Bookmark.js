module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {})
  Bookmark.associete = function (models) {
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Song)
  }
  return Bookmark
}