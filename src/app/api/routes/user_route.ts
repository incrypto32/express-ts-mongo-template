import { Router } from "express";
import { RouterFunction, Workers } from "../../../interfaces/workers";
import { Repositories } from "../../../logic/repositories/repositories";
import { UserController } from "../controllers/user_controller";

export const userRouter: RouterFunction = (workers: Workers): Router => {

  // utils
  const router = Router();
  const controller = new UserController(workers.repos);

  router.get("", controller.root)
  router.post("", controller.root)
  router.post("/register", controller.add) 
  router.put("/:id", controller.update)
  router.get("/all", controller.getAll)
  router.get("/id", controller.getOneById)
  router.get("/byEmail/:email", controller.getOneByEmail)
  
  router.post(
    "/uploadDP/:id",
    controller.dpStorage.fields([
      { name: "DP", maxCount: 1 },
    ]),
    controller.uploadDP
  );

  return router;
};