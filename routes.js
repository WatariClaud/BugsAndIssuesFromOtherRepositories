import express from 'express';

import authAdmin from './auth';

import userController from './ctrl';

const router = express.Router();
// const app = express();

router.post('/api/v1/auth/create-user', authAdmin, userController.createUser);

export default router;
