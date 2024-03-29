const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);


const Schema = mongoose.Schema;

const Couses = new Schema({
  name: { type: String, require: true, },
  description: { type: String },
  image: { type: String },
  videoId: { type: String, require: true, },
  level: { type: String },
  slug: { type: String, slug: 'name', unique: true },
}, { timestamps: true, });

module.exports = mongoose.model('Course', Couses);