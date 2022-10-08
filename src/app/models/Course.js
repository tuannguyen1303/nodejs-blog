const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: String,
        image: String,
        slug: String,
        video_id: String,
        level: String,
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Course', Course);
