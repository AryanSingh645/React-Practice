const mongoose = require('mongoose');


const uri = "mongodb+srv://singhjee30476:tyson123A@cluster0.wnplxf9.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri);

const productSchema = new mongoose.Schema({
    name: String,
    company: String,
    price: Number,
    colors: [String],
    image: String,
    category: String,
    isFeatured: Boolean
});

const Product = new mongoose.model('Product', productSchema);

const data1 = {
    name: 'Ergonomic Plastic Chicken_2',
    company: '64c23350e32f4a51b19b92484',
    price: 3466,
    colors: [ '#246c53' ],
    image: '/images/product-Small.png',
    category: '64c2342de32f4a51b19b9254',
    isFeatured: false,
  }
const data2 = {
    name: 'Plastic Body Iron Man toy',
    company: '64c23350e32f4a51b19b92484',
    price: 2999,
    colors: [ '#246c53' ],
    image: '/images/product-Small.png',
    category: '64c2342de32f4a51b19b9007',
    isFeatured: true,
  }

const main = async() => {
    try{
        // console.log("inside");
        // const data = await Product.find({price: {$eq: 39}});
        // console.log(data);
        // await Product.insertOne(data1);
        // await Product.insertMany([data1,data2]);
        const data_1_read = await Product.find({price: {$gt: 2450}});
        console.log(data_1_read);
    }
    catch(error){
        console.log(error);
    }
    finally{
        mongoose.connection.close();
    }
}

main();
// const mongoose = require('mongoose');


// const uri = "mongodb://127.0.0.1/shop";
// mongoose.connect(uri);

// const productSchema = new mongoose.Schema({
//     name: String,
//     company: String,
//     price: Number,
//     colors: [String],
//     image: String,
//     category: String,
//     isFeatured: Boolean
// });

// const Product = new mongoose.model('Product', productSchema);

// const data1 = {
//     name: 'Ergonomic Plastic Chicken_2',
//     company: '64c23350e32f4a51b19b92484',
//     price: 3466,
//     colors: [ '#246c53' ],
//     image: '/images/product-Small.png',
//     category: '64c2342de32f4a51b19b9254',
//     isFeatured: false,
//   }

// const main = async() => {
//     try{
//         // console.log("inside");
//         // const data = await Product.find({price: {$eq: 39}});
//         // console.log(data);
//         // await Product.insertOne(data1);
//         await Product.insertMany(data1);
//         const data_1_read = await Product.find({price: {$gt: 3450}});
//         console.log(data_1_read);
//     }
//     catch(error){
//         console.log(error);
//     }
//     finally{
//         mongoose.connection.close();
//     }
// }

// main();