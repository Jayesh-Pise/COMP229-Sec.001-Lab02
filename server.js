const express = require('express');
const connectToDatabase = require(`./config/DBconnect`);
const product_route = require('./routes/productRoutes');
const category_route = require('./routes/categoriesRoutes')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/api/products/', product_route);
app.use('/api/categories/', category_route); 


connectToDatabase()
  .then(() => {
    console.log('Connected to MongoDB...');
  })
  .catch((error) => {
    console.log('Error connecting to the database');
  });


app.listen(2000, () => {

    app.get('/', (req, res) => {
        res.json(
          {"message": "Welcome to DressStore Application"});
    });

    console.log('Server is running... http://localhost:2000');
});