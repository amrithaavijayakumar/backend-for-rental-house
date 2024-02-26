const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
const cors=require("cors")

const authRoutes=require("./Routes/auth.js")

const listingRoutes=require("./Routes/listing.js")

const BookingRoutes=require("./Routes/booking.js")

const userRoutes=require("./Routes/user.js")

app.use(cors())
app.use(express.json())
app.use(express.static('public'))


app.use("/auth",authRoutes)

app.use("/properties",listingRoutes)

app.use("/bookings",BookingRoutes)

app.use("/users",userRoutes)


//mongoose setup

const PORT=3001
mongoose.connect(process.env.MONGO_URL,{
    dbName:"rent_houseonline",
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    app.listen(PORT,()=>console.log(`Server Listening : ${PORT}`))
})
.catch((err)=>console.log(`${err} didn't connect`));