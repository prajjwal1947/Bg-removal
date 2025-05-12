import 'dotenv/config'
import express from 'express'
import cors from'cors'
import connectDb from './configs/mongdb.js';


//App config

const PORT=process.env.PORT|| 4000;


const app=express();
await connectDb()

app.use(express.json())
app.use( cors())

//api routes


app.get('/',(req,res)=>{
    res.send("Api working")
})



app.listen(PORT,()=>{
console.log( `server running on ${PORT}`)}
)