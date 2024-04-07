import express from 'express';
import sampleController from "../controllers/book.controller.js";
import authCtrl from '../controllers/auth.controller.js';
const router = express.Router();

router.post('/', authCtrl.requireSignin, sampleController.createBook);
router.get('/', authCtrl.requireSignin, sampleController.getAllBooks);


export default router;