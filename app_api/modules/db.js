var mongoose=require('mongoose');
var dbURI='mongodb+srv://berrakiris0307_db_user:03berra07@cluster0.fs0gfxo.mongodb.net/?appName=Cluster0';
mongoose.connect(dbURI);

mongoose.connection.on("connected",function(){
    console.log("Mongoose "+dbURI+" bağlantısı başarılı");
});

mongoose.connection.on("error",function(){
    console.log("Mongoose "+dbURI+" bağlantısı başarısız");
});

mongoose.connection.on("disconnected",function(){
    console.log("Mongoose "+dbURI+" bağlantısı kesildi");
});

//sigint kesmedir
process.on('SIGINT',function(){
    mongoose.connection.close();
    console.log("Mongoose bağlantısı kapatıldı");
    process.exit(0);
    
});
require('./venue');