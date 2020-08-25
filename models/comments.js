const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const commentSchema=new Schema(
    {
        author:{
            required:true,
            type:String
        },
        message:{
            required:true,
            type:String
        },
        email:{
            required:true,
            type:String
        },
        date:{
            type:String,
            required:true
        }

    },{
        timestamps:false
    }
);

var Comments=mongoose.model('Comment',commentSchema);

module.exports=Comments;