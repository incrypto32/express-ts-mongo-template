import dotenv from "dotenv";

export interface IConfigData {
  port: string;
  mongoURI: string;
}

export const configure = () => {
  // LOAD ENVIROMENT VARIABLES FROM .env file
  dotenv.config();
  let port: string;
  let mongoURI: string;
  let isProduction = process.env.NODE_ENV == "production";
  console.log(`Running in ${process.env.NODE_ENV} mode`);

  if (isProduction) {
    port = process.env.PORT || "5000";
    mongoURI = process.env.MONGODB_URI!;
  } else {
    port = "5000";
    mongoURI = process.env.MONGODB_URI_DEV!;
  }

  return <IConfigData>{port:port,mongoURI:mongoURI};
};
