const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  through: {
    model: User
  }
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Comment.belongsToMany(User, {
  through: {
    model: User
  }
})

module.exports = {
  User,
  Post,
  Comment,
};