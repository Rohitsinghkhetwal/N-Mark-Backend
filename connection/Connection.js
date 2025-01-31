const mongoose = require("mongoose");

const ConnectDB = () => {
  try {
    const result = mongoose.connect(process.env.MONGODB_URI);
    if(result) {
      console.log("Connection is up and running !");
    }else {
      console.log("Somethinng went wrong while connecting")
    }

  }catch(err) {
    console.log("Something went wrong!")
  }
}

module.exports = ConnectDB;