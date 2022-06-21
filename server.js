const express = require("express");
const mongoose = require("mongoose");
const personModel = require("./personmodel");
const port = 4000;
const app = express();
//Connecting to DB
mongoose
  .connect(
    "mongodb+srv://takwa:Takwa@cluster0.twfkh.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("Something went wrong", e);
  });

//tretement
const person = new personModel({
  name: "takwa",
  adress: "adress",
  age: 23,
  favouretfood: ["pizza"],
});

const getall = async () => {
  try {
    const allppl = await personModel.find({});
    console.log(allppl);
  } catch (error) {
    console.log(error);
  }
};
// getall();
const findone = async () => {
try { 
     const oneperson = await personModel.findOneAndUpdate(
    { _id: "62a9bda22776002538cbda81" },
    { $set: { name: "test" } },
    { new: true }
  );
  await oneperson.save();
  console.log(oneperson)
    
} catch (error) {
    console.log(error)
}
};
findone();
// person
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((error) => console.log(error));

// personModel.create([
//   {
//     name: "samah",
//     adress: "adress2",
//     age: 24,
//     favouretfood: ["pizza", "pasta"],
//   },
//   {
//     name: "nidhal",
//     adress: "adress3",
//     age: 25,
//     favouretfood: ["pizza", "juse"],
//   },
// ],(err,data)=>err?console.log(err):console.log(data));

app.listen(port, (err) =>
  err ? console.log(err) : console.log("Server is running")
);
