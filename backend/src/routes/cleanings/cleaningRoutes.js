import GetAllCleaningsController from "../../controllers/cleanings/getAllCleaningsController.js";
import GetOneCleaningController from "../../controllers/cleanings/getOneCleaningController.js"
import CreateOneCleaningController from "../../controllers/cleanings/CreateOneCleaningController.js"
import UpdateOneCleaningController from "../../controllers/cleanings/updateOneCleaningController.js"
import DeleteOneCleaningController from "../../controllers/cleanings/deleteOneCleaningController.js"



import { Router } from "express";

const router = Router();

/*****************/
/*******GET*******/
/*****************/
router.get("/", GetAllCleaningsController.getAllCleaning);
router.get("/:id", GetOneCleaningController.getOneCleaning);

/***************/
/*****POST******/
/***************/
router.post("/", CreateOneCleaningController.createOneCleaning);

/***************/
/*****PUT*******/
/***************/
router.put("/:id", UpdateOneCleaningController.updateOneCleaning);

/***************/
/****DELETE*****/
/***************/
router.delete("/:id", DeleteOneCleaningController.deleteOneCleaning);


export default router;