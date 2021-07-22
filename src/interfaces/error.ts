import { UserController } from "../app/api/controllers/user_controller";


  

 export interface IErrorMessage {
    success: boolean;
    message: string;
    code: number;
  }
  
  export class ErrorMessage implements IErrorMessage {
    success: boolean;
    message: string;
    code: number;
  
    constructor(message: string,code=0) {
      this.success = false;
      this.message = message;
      this.code=code;
    }
  }

  
  