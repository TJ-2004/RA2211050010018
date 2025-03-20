import express from "express";
import { topUsers } from "../controllers/user.controller.js";
const router = express.Router();


router.get('/',topUsers);
export default router