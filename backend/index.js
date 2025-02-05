require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Position = require("./models/positions.js");
const Holding = require("./models/holdings.js");
const Orders = require("./models/orders.js");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRoute = require('./Routes/AuthRoute.js');

const PORT = process.env._PORT || 3002;
const mongodbPass = process.env.MONGODB_PASSWORD;

const uri = `mongodb+srv://sumanbiswas6854:${mongodbPass}@zerodhaclonecluster.x9pui.mongodb.net/zerodhaClone?retryWrites=true&w=majority&appName=zerodhaclonecluster`;
// creating a mongodb client
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

//connecting to mongodb using mongoose
main(uri).catch((err) => console.log(err));
async function main(uri) {
  await mongoose.connect(uri);
}

app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(bodyParser.json());

app.get("/allpositions", async (req, res) => {
  const allPositions = await Position.find({});
  res.send(JSON.stringify(allPositions));
  
});

app.get("/allholdings", async (req, res) => {
  const allHoldings = await Holding.find({});
  res.send(JSON.stringify(allHoldings));
});

app.post("/newOrder", async(req,res)=>{
  const newOrder = await new Orders({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("order saved")
});

app.use(cookieParser());
app.use(express.json());
app.use("/", AuthRoute);


app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
