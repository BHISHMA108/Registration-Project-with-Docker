import express from "express";

import { register , fetchdata } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/register" , register);
router.get("/fetchdata" , fetchdata);

export default router;