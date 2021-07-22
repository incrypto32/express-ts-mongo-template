import mongoose from "mongoose";

export class DbControllers {
  readonly uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  async intialize() {
    await mongoose.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }

  registerRoutes(){
    
  }
}
