const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    userNewUrlParser: true,
    userUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("Connected to database successfully")
  } catch (error) {
    console.log(error);
    console.log("couldn't connect to the database!")
  }
};
