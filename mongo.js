import { connect, Schema, model } from "mongoose";
connect("mongodb+srv://maurobarragan:Mauro2020@cluster0.1kzlker.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = model("collectionMernLogin",newSchema)

export default collection;
