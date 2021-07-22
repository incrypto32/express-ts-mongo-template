import express, { Application } from "express";
import { DbControllers } from "../db/mongoose";
import { Workers } from "../interfaces/workers";
import { Repositories } from "../logic/repositories/repositories";
import { Services } from "../logic/services/services";
import { authorizedRouter, unAuthorizedRouter } from "./api/routes/authorized_route";

const cors = require('cors');


export class WyfenosServer {
  readonly port: string;
  readonly db: DbControllers;
  readonly workers: Workers;

  app: Application;

  constructor(port: string, dbURI: string) {
    this.port = port;
    this.app = express();
    this.db = new DbControllers(dbURI);
    this.workers = { repos: new Repositories(), services: new Services() };

  }

  async start() {
    try {
      console.log(process.env.NODE_ENV)

      this.app.use(cors())
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(express.json());
      this.app.use('/static', express.static("public"));

      this.app.listen(this.port, () => {
        console.log(`Listening on port : ${this.port}`);
      });

      // Initializing Mongo DB
      console.log("Initializing DB..");
      await this.db.intialize();
      console.log("DB Connected");

      this.registerRoutes();
    } catch (error) {
      console.error(error);
    }
  }

  registerRoutes() {
    this.app.use("/", unAuthorizedRouter(this.workers));
  }
}
