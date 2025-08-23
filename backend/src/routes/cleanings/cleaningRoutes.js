import GetAllCleaningsController from "../../controllers/cleanings/getAllCleaningsController.js";
import GetOneCleaningController from "../../controllers/cleanings/getOneCleaningController.js"

import { Router } from "express";

const router = Router();

router.get("/", GetAllCleaningsController.getAllCleaning);
router.get("/:id", GetOneCleaningController.getOneCleaning);


export default router;