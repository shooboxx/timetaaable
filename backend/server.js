const express = require("express");
const cors = require("cors");
const morgan = require('morgan')
const app = express();
const businessRoutes  = require('./routes/business')
// const userRoutes  = require('./routes/user')

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//Routes
app.use('/api/v1/businesses', businessRoutes);
// app.use('/api/v1/users', userRoutes);

// DB Config
// const db = require("./config/keys").mongoURI;
// // Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));