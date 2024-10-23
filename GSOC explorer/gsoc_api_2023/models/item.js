const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    id:{
        type:Number,
        required :true,
    },
    organisation_name: {
    type: String,
    required: true,
  },
  organisations_href: {
    type: String,
    required: true,
  },
  organisations_tag: {
    type: String,
    required: true,
  },
  organisations_technologies: {
    type: String,
    required: true,
  },
  organisations_topics: {
    type: String,
    required: true,
  },
  organisation_website: {
    type: String,
    required: true,
  },
  organisation_description: {
    type: String,
    required: true,
  },
}, { collection: 'all' });

module.exports = mongoose.model('Item', ItemSchema);
