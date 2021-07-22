import { UserRepository } from "./user_repo";

import { PostRepository } from './post_repo';

export class Repositories{
    user: UserRepository
    post: PostRepository
  

    constructor(){
        this.user=new UserRepository();
        this.post=new PostRepository();
    }
}