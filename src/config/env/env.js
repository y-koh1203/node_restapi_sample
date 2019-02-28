import { config } from 'dotenv';
import { resolve } from "path";

//Task
//用途別にexportを作ってもいいかもしれない

const env = config({ path: resolve(__dirname, "../../../.env") });

export default env.parsed;