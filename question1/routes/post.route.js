import express from "express";
import { topPosts } from "../controllers/post.controller.js";
const router = express.Router();


router.get('/',topPosts);
export default router