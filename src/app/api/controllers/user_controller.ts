import { RequestHandler } from "express";
import multer from "multer";
import { UserRepository } from "../../../logic/repositories/user_repo";
import { Repositories } from "../../../logic/repositories/repositories";
import * as bcrypt from "bcrypt";
import { Controller } from "./controller";
import * as jwt from 'jsonwebtoken';
import fs from "fs-extra";
import { ErrorMessage } from "../../../interfaces/error";

export class UserController extends Controller {
  repostories: Repositories;
  repo: UserRepository;

  aadharStorage = multer({
    storage: multer.diskStorage({
      destination: async (req, file, cb) => {
        var des = `public/users/${req.params.id}`;
        await fs.mkdirp(des);
        cb(null, "public/users/" + req.params.id);
      },

      filename: (req, file, cb) => {
        cb(null, file.fieldname + ".jpg");
      },
    }),
  });

  dpStorage = multer({
    storage: multer.diskStorage({
      destination: async (req, file, cb) => {
        var des = `public/userDP`;
        await fs.mkdirp(des);
        cb(null, "public/userDP/");
      },
      filename: (req, file, cb) => {
        cb(null, req.params.id);
      },
    }),
  });


  constructor(repositories: Repositories) {
    super();
    this.repostories = repositories;
    this.repo = repositories.user;
  }

  root: RequestHandler = this.handler(async (req, res) => {
    console.log(req.body);

    res.send("Welcome to user API");
  });

  add: RequestHandler = this.handler(async (req, res) => {
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const user = await this.repo.add(req.body);

    return res.json(user);
  });

  login: RequestHandler = this.handler(async (req, res) => {
    const user = await this.repo.getOneByEmail(req.body.email);
    const success = await bcrypt.compare(req.body.password, user?.password!)
    // Create token
    if (success) {
      const token = jwt.sign(
        {user},
        process.env.TOKEN_KEY!,
        {
          expiresIn: "2h",
        }
      );
      res.json(token);
    }

    res.status(401).json(new ErrorMessage("Wrong Password"));

  })


  uploadDP: RequestHandler = this.handler((req, res) => {
    res.send("SUCCESS");
  });


  update: RequestHandler = this.handler(async (req, res) => {
    const user = await this.repo.update(req.params.id, req.body);
    console.log(user);
    return res.json(user);
  });

  delete: RequestHandler = this.handler(async (req, res) => {

    const user = await this.repo.delete(req.params.id);
    console.log(user);
    return res.json({ success: true, result: user });
  });

  getAll: RequestHandler = this.handler(async (req, res) => {
    console.log("-- getAllCustomers --");
    const allCustomers = await this.repo.getAll();
    console.log(allCustomers.length);
    return res.json({ success: true, result: allCustomers });
  });

  getOneById: RequestHandler = this.handler(async (req, res) => {
    console.log("-- getOneCustomersById --");
    console.log(req.params.id);
    const user = await this.repo.getOneById(req.params.id);
    console.log(user);
    return res.json({ success: true, result: user });
  });


  getOneByEmail: RequestHandler = this.handler(async (req, res) => {
    console.log("-- getOneCustomersByEmail --");
    console.log(req.params.email);
    const user = await this.repo.getOneByEmail(req.params.email);
    console.log(user);
    return res.json({ success: true, result: user });
  });

}
