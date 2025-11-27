
var mongoose=require('mongoose');
var hour=new mongoose.Schema({//alt şema
    day:{type:String,required:true},
    open:{type:String,required:true},
    close:{type:String,required:true}
});
var comment=new mongoose.Schema({
    author:{type:String,required:true},
    rating:{type:Number,required:true,min:0,max:5}, 
    text:{type:String,required:true},
    date:{type:Date,default:Date.now}
});
var venue=new mongoose.Schema({
    name:{type:String,required:true},
    adress:{type:String,required:true},
    rating:{type:Number,default:0,min:0,max:5},
    foodanddrink:[String],
    coordinates:{
        type:[Number],
 
    },
    hours:[hour],
    comments:[comment]
});
mongoose.model('Venue',venue,"venues");


