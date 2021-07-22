import { WyfenosServer } from "./app/server";
import { configure } from "./config/config";


const configs = configure();

console.log("========================== CONFIGS ==========================")
console.log(`${JSON.stringify(configs,null,4)}`);
console.log("=============================================================")


const server = new WyfenosServer(configs.port,configs.mongoURI);

server.start();
