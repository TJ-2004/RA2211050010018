import express from 'express';
import { getComments } from '../controllers/comment.controller.js';

const router = express.Router();

router.get('/:postId/comments', getComments);

export default router;
