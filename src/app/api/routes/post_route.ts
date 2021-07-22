import { Router } from "express";
import { RouterFunction, Workers } from "../../../interfaces/workers";import { PostController } from '../controllers/post_controller';

export const postRouter: RouterFunction = (workers: Workers): Router => {
    // utils
    const router = Router();
    const controller = new PostController(workers.repos);
  
    router.get("",controller.root)
    router.post("",controller.root)
    router.post("/add",controller.add)
    router.post("/update/:id",controller.update) 
    router.delete("/:id",controller.delete)
    router.get("/all",controller.getAll)
    router.get("/byId/:id",controller.getOneById)
    router.post(
        "/uploadPost/:id",
        controller.postStorage.fields([
          { name: "post", maxCount: 1 },
        ]),
        controller.uploadPost
      );
    return router;
}
