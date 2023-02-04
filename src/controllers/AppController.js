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
    await ShortUrl.create({
      fullUrl: req.body.fullUrl,
      shortUrl: Helpers.generateShortUrl(),
    });
    res.status(201).json({
      status: true,
      message: 'created',
      data: [],
    });
  },

  redirect: async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ shortUrl: req.params.shortUrl });

    if (shortUrl == null) return res.sendStatus(404);

    shortUrl.clicks++;
    shortUrl.save();

    res.redirect(shortUrl.fullUrl);
  },

  delete: async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ shortUrl: req.params.shortUrl });

    if (shortUrl == null) return res.sendStatus(404);
    shortUrl.delete();
    res.status(204).json({
      status: true,
      message: 'deleted',
      data: [],
    });
  },

};

export default AppController;
