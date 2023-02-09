//FOR CONNECTING MONGODATABASE
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@cluster0.ez75xfb.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Error occured");
      console.log("Sorry we got error" + err);
    } else {
      console.log("CONNECTED");
    }
  }
);
