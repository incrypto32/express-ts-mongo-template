import { Post, IPost } from "../../models/post";

export class PostRepository { 
  
  async getAll(): Promise<IPost[]> {
    return await Post.find();
  }
  async getAllCustomer(): Promise<IPost[]> {
    return await Post.find({isForOutlet:false});
  }
  async getAllOutlet(): Promise<IPost[]> {
    return await Post.find({isForOutlet:true});
  }


  async add(post: IPost): Promise<IPost> {
    const payload = new Post(post);
    const result = await payload.save();
    return result;
  }

  async update(id: string, post: IPost): Promise<IPost | null> {
    return await Post.findByIdAndUpdate(id, post);
  }

  async delete(id: string): Promise<IPost | null> {
    return await Post.findByIdAndDelete(id);
  }

  async getOneById(id: string): Promise<IPost | null> {
    return await Post.findById(id);
  }



  // async update(id: string, post: IPost): Promise<IPost> {
  //   const resultPost = await Post.findByIdAndUpdate(id, post);

  //   if (!resultPost) {
  //     throw new ErrorMessage("Post_NOT_FOUND");
  //   }
  //   return resultPost;
  // }

}
