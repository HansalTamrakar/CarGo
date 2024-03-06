const express = require('express')
const app = express();
const router = require('./Routes/Routes')
const cors = require('cors')



const PORT = 4000;

//middleware needed to parse Json Body
app.use(cors())
app.use(express.json());
app.use(router)



app.listen(PORT, () => {
    console.log(`Server Stared at ${PORT}`)
})


//Connect the DAtabse
const dbConnect = require("./Config/database");
dbConnect();

