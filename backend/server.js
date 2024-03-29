
const express = require("express");
const dotenv = require("dotenv");
const {chats} = require("./data/data");
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const {notFound, errorHandler}= require("./middleware/errorMiddleware")



dotenv.config();
connectDB();
const app = express();

app.use(express.json());  // to acept the json data

app.get("/", (req, res)=> {
    res.send("API is Running With health");
});

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)

// app.get('/api/chat', (req, res)=> {
//     res.send(chats);
// });
// app.get("/api/chat/:id", (req, res)=>{
//     // console.log(req);
//     const singlechat = chats.find((c) => c._id === req.params.id);
//     res.send(singlechat)
// });


// this two use for extra errors or if someone click different routes
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen((PORT), console.log(`Server Started on port ${PORT}`));