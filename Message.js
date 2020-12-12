const { Schema, model } = require("mongoose");

const MessageSchema = new Schema({
  name: String,
  message: String,
});

const Message = model("message", MessageSchema);

module.exports = Message;
