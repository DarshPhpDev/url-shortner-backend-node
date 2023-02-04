import express from 'express';

// import controllers
import AppController from '../controllers/AppController.js';

const router = express.Router();

// Api Routes
router.get('/urls', AppController.index);
router.post('/urls', AppController.create);
router.get('/short-url/:shortUrl', AppController.redirect);
router.delete('/urls/delete/:shortUrl', AppController.delete);

export default router;
