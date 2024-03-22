const express =  require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const routes = require('./routes');
dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
const Port = process.env.PORT;
const dbUrl = process.env.DB_URL
//connectDb
connectDB(dbUrl)
//router
routes(app)
app.listen(Port,()=>{
    console.log("Server is running")
})