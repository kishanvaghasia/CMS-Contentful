import express from 'express'
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import bodyParser from 'body-parser'
import router from './routes/cmsroutes.js';

// settings
app.set("port", process.env.PORT || 8000);
app.use(bodyParser.json());

// routes
app.use('/',router)

// listening the Server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
