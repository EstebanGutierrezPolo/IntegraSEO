import { Router } from "express";
import GetAllUsersController from "../../controllers/users/getAllUsersController.js";
import GetOneUserController from "../../controllers/users/getOneUserController.js";
import UpdateOneUserController from "../../controllers/users/updateOneUserController.js";
import CreateOneUserController from "../../controllers/users/createOneUserController.js";


const router = Router();

/*****************/
/*******GET*******/
/*****************/
router.get("/", GetAllUsersController.getAllUser);
router.get("/:id", GetOneUserController.getOneUser);

/***************/
/*****POST******/
/***************/
router.post("/", CreateOneUserController.CreateOneUser);

/***************/
/*****PUT*******/
/***************/
router.put("/:id", UpdateOneUserController.updateOneUser);

/***************/
/****DELETE*****/
/***************/

export default router;