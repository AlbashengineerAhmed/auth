import {Schema,model} from "mongoose"

const userSchema = new Schema({
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  age:{
    type:Number
  },
  confirmEmail:{
    type:Boolean,
    default:false,
  },
  salary:Number,
  gender:{
    type:String,
    default:"Male",
    enum:["Male", "Female"]
  }
},{
  timestamps:true
})

const userModel = model("User", userSchema)
export default userModel

