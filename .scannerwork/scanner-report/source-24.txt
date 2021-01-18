const mongoose = require('mongoose')

const db_link = process.env.MONGO_URL 


// connecting database to our node Application
mongoose.connect(db_link,{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
},(err)=>{
    if (err) {
        console.error("Error in database connection !",err.message)
    }
    else{
        console.log("Database connection successfully established !");
    }
})