import express from 'express';

// import controllers
import AppController from '../controllers/AppController.js';

const router = express.Router();

// Api Routes
router.get('/urls', AppController.index);
router.post('/urls', AppController.create);

export default router;
