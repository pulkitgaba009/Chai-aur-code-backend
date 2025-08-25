import mongoose from "mongoose"

const orderItemsSchema = new mongoose.Schema(
    {
        productId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Product",
            required:true
        },
        quantity :{
            type :Number,
            required:true
        }
    }
)

const OrderSchema = new mongoose.Schema(
    {
        orderPrice:{
            type :Number,
            required : true
        },
        customer :{
            type:mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        orderItems:{
            type:[orderItemsSchema],
            required : true
        },
        address:{
            type:String,
            required:true,
        },
        status:{
            type : String,
            enum : ["PENDING","CANCELLED","DELIVERED"],
            default :"PENDING"
        }
    },
    {timestamps:true}
)

export const Order = mongoose.model("Order",CategorySchema) 