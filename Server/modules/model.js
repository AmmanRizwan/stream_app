const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema(
  {
    rank: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please Enter the Title"],
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    big_image: {
      type: String,
      required: true,
    },
    genre: {
      type: Array,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    id: {
      type: String,
    },
    year: {
      type: Number,
      required: true,
    },
    imdbid: {
      type: String,
      required: true,
    },
    imdb_link: {
      type: String,
      required: true,
    },
    youtube_link: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

const UserSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshtoken: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true,
  }
)

const Movie = mongoose.model('movie', MovieSchema);
const User = mongoose.model('user', UserSchema);

module.exports = Movie;
module.exports = User;
