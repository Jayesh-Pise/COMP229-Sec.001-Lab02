const mongoose = require("mongoose");

const dbURI = 'mongodb+srv://JayeshPise:GJXbNKn8ZjIzhZVo@cluster0.6vcdpqs.mongodb.net/Market_Place?retryWrites=true&w=majority';

async function connectToDatabase() {
    return mongoose.connect(dbURI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    });
  }

module.exports = connectToDatabase;



//GJXbNKn8ZjIzhZVo
//mongodb+srv://JayeshPise:GJXbNKn8ZjIzhZVo@cluster0.6vcdpqs.mongodb.net/Market_Place?retryWrites=true&w=majority