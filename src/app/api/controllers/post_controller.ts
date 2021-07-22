import { RequestHandler } from "express";
import { PostRepository } from "../../../logic/repositories/post_repo";
import { Repositories } from "../../../logic/repositories/repositories";
import { Controller } from "./controller";
import * as path from "path";
import multer from "multer";
import fs from "fs-extra";


export class PostController extends Controller {
  repostories: Repositories;
  repo: PostRepository;

  constructor(repositories: Repositories) {
    super();
    this.repostories = repositories;
    this.repo = repositories.post;
  }

  postStorage = multer({
    storage: multer.diskStorage({
      destination: async (req, file, cb) => {
        var des = `public/posts`;
        await fs.mkdirp(des);
        cb(null, "public/posts/");
      },

      filename: (req, file, cb) => {
        cb(null, req.params.id );
      },
    }),
  });
  
  root: RequestHandler = this.handler(async (req, res) => {
    console.log(req.body);
    res.send("Welcome to post API");
  });

  uploadPost: RequestHandler = this.handler((req, res) => {
    res.send("SUCCESS"); 
   });

  
  add: RequestHandler = this.handler(async (req, res) => {
    console.log("-- addPost --");
    console.log(req.body);
    const post = await this.repo.add(req.body);
    return res.json({ success: true, result: post });
  });

  update: RequestHandler = this.handler(async (req, res) => {
    console.log("-- updatePost --");
    console.log(req.params.id);
    const post = await this.repo.update(req.params.id,req.body);
    console.log(post);
    return res.json({ success: true, result: post });
  });

  delete: RequestHandler = this.handler(async (req, res) => {
    console.log("-- deletePost --");
    console.log(req.params.id);
    const post = await this.repo.delete(req.params.id);
    console.log(post);
    return res.json({ success: true, result: post });
  });

  getAll: RequestHandler = this.handler(async (req, res) => {
    console.log("-- getAllPosts --");
    const allPosts = await this.repo.getAll();
    console.log(allPosts.length);
    return res.json({ success: true, result: allPosts });
  });
  getAllCustomer: RequestHandler = this.handler(async (req, res) => {
    console.log("-- getAllPostsCustomer --");
    const allPosts = await this.repo.getAllCustomer();
    console.log(allPosts.length);
    return res.json({ success: true, result: allPosts });
  });
  getAllOutlet: RequestHandler = this.handler(async (req, res) => {
    console.log("-- getAllPostsOutlet --");
    const allPosts = await this.repo.getAllOutlet();
    console.log(allPosts.length);
    return res.json({ success: true, result: allPosts });
  });

  getOneById: RequestHandler = this.handler(async (req, res) => {
    console.log("-- getOnePostsById --");
    console.log(req.params.id);
    const post  = await this.repo.getOneById(req.params.id);
    console.log(post);
    return res.json({ success: true, result: post });
  });
  
}


