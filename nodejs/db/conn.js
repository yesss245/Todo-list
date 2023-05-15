const mongoose = require("mongoose");

//mongoose.connect("mongodb+srv://yesss245:622002Yes@@cluster0.ilvqq6a.mongodb.net/retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://yesss245:622002Yes%40@cluster0.ilvqq6a.mongodb.net/retryWrites=true&w=majority")
.then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log("not connected");
});
