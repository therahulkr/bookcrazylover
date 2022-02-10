const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connected to MongoDB'));

db.once('open',()=>{
    console.log('successfully connected to the database');
})

module.exports = db;

// const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     })
//     .then((data) => {
//       console.log(`Mongodb connected with server: ${data.connection.host}`);
//     });
// };

// module.exports = connectDatabase;