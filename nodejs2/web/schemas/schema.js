const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const SampleSchema = new Schema({
  color: {type:String,maxlength:6},
  object: String,
});

const MyModel = mongoose.model('color',SampleSchema);


module.exports= MyModel