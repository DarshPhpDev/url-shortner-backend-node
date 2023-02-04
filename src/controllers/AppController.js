import ShortUrl from '../models/ShortUrl.js';
import Helpers from '../utils/helpers.js';

const AppController = {

  index: async (req, res) => {
    const data = await ShortUrl.find();
    res.status(200).json({
      status: true,
      message: 'success',
      data,
    });
  },

  create: async (req, res) => {
    const { fullUrl } = req.body;
    const shortUrl = Helpers.generateShortUrl();
    await ShortUrl.create({
      fullUrl: req.body.fullUrl,
      shortUrl,
    });
    res.status(201).json({
      status: true,
      message: 'created',
      data: [],
    });
  },

};

export default AppController;
