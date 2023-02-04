import mongoose from 'mongoose';

const ShortUrl = mongoose.model('ShortUrl', new mongoose.Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
}));

export default ShortUrl;
