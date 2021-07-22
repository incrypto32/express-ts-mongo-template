import { Router } from "express";
import { RouterFunction, Workers } from "../../../interfaces/workers";
import { UserController } from "../controllers/user_controller";
import { verifyToken } from "../middlewares/verify_token";

import { postRouter } from "./post_route";  
import { userRouter } from "./user_route";



export const authorizedRouter: RouterFunction = (workers: Workers): Router => {

  const router = Router();
  router.use("/post", postRouter(workers));
  return router;
};

export const unAuthorizedRouter: RouterFunction = (workers: Workers): Router => {
  const controller = new UserController(workers.repos);
  const router = Router();
  router.use("/register", controller.add);
  router.use("/login", controller.login);
  router.use("", verifyToken,(authorizedRouter(workers)))
  return router;
};
