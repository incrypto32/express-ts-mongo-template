import { RequestHandler } from "express";
import { ErrorMessage } from "../../../interfaces/error";

export class Controller {
  handler(handlerFunc: RequestHandler): RequestHandler {
    const errorHandler: RequestHandler = async (req, res, next) => {
      try {
        await handlerFunc(req, res, next);
      } catch (e) {
        console.error(e);
        if (e instanceof ErrorMessage) {
          return res.status(417).json(e);
        }
        return res.status(417).json(new ErrorMessage("ERROR"));
      }
    };
    return errorHandler;
  }
}
