const { connect } = require("mongoose");
const Message = require("./Message");
const express = require("express");
const path = require("path");

const app = express();

connect("mongodb://localhost:27017/testing-ec-2", { useNewUrlParser: true })
  .then(() => console.log("\x1b[31m%s\x1b[0m", "mongoDB connected"))
  .catch((e) => console.log(e));

app.use(require("cors")());

app.get("/api", async (_, res) => {
  try {
    const obj = await Message.findOne({ name: "message" });
    if (!obj) return res.status(404).json({ error: "No message found" });
    res.status(200).json({ message: obj.message });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error });
  }
});

app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("*", (_, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

app.listen(5000, () => console.log("server started at 8080"));
1
2
3
4
