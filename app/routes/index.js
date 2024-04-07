import express from 'express';
import authRouter from './auth.routes.js';
import sampleRouter from './sample.routes.js';

const router = express.Router();

// Mount routers
router.use('/auth', authRouter);
router.use('/api/sample', sampleRouter);

export default router;