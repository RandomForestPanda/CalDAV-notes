const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: String,
    start: Date,
    end: Date,
    notes: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Event", eventSchema);
