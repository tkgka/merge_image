import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(
        process.env.NODE_ENV == "production" ? ".env" : ".env"
    ),
});
// console.log(process.env.token)
export default process.env;