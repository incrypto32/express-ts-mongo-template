import { Router } from "express";
import { Repositories } from "../logic/repositories/repositories";
import { Services } from "../logic/services/services";

export interface Workers {
  repos: Repositories;
  services: Services;

}

export type RouterFunction = (worker: Workers) => Router;
