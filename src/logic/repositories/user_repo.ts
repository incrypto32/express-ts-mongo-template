import { ErrorMessage } from "../../interfaces/error";
import { User, IUser } from "../../models/user";

export class UserRepository {
  
  async getAll(): Promise<IUser[]> {
    return await User.find();
  }

  async add(user: IUser): Promise<IUser> {
    const payload = new User(user);
    const result = await payload.save();
    return result;
  }

  async update(id: string, user: IUser): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, user);
  }

  async delete(id: string): Promise<IUser | null> {
    return await User.findByIdAndDelete(id);
  }

  async getOneById(id: string): Promise<IUser> {
    const result =  await User.findById(id);
    if (!result) {
      throw new ErrorMessage("NO_RESULTS");
    }
    return result;
  }

  async getOneByEmail(email: string): Promise<IUser | null> {
   const result= await User.findOne({ "email": email } );
   if(!result){
     throw new ErrorMessage("NO_RESULTS")
   }
   return result
  }
  async getWalletById(id: string): Promise<IUser> {
    const result =  await User.findById(id,'withdrawed earnings -_id');
    if (!result) {
      throw new ErrorMessage("NO_RESULTS");
    }
    return result;
  }





  async getAllPaginated() {}

  // async update(id: string, user: IUser): Promise<IUser> {
  //   const resultUser = await User.findByIdAndUpdate(id, user);

  //   if (!resultUser) {
  //     throw new ErrorMessage("CUSTOMER_NOT_FOUND");
  //   }
  //   return resultUser;
  // }

}
