const mongoose = require('mongoose')
const mongoURL =
  'mongodb+srv://lalitsharma2001jsr:lalit123@cluster0.ybmd1zf.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB = async () => {
  await mongoose.connect(mongoURL, { useNewUrlParser: true }, (err, result) => {
    if (err) console.log('---', err)
    else {
      console.log('connect')
      const fetched_data =  mongoose.connection.db.collection('food_items')
      fetched_data.find({}).toArray( async function (err, data) {
      const foodCategory=  mongoose.connection.db.collection('foodCategory');
      foodCategory.find({}).toArray(function (err,catData)
      {
        if (err) console.log(err)
        else {
          global.food_items = data;
          global.foodCategory = catData;
          console.log(global.foodCategory)
        } 
      })
       /*  if (err) console.log(err)
        else {
          global.food_items=data;
          console.log(global.food_items)
        } */
      })
    }
  })
}
module.exports = mongoDB;
