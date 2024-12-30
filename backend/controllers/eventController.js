const Event = require("../models/Event");

const getEvents = async (req, res) => {
  try {
    const events = await Event.find({ userId: req.user.id });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
};

const addEvent = async (req, res) => {
  try {
    const { title, start, end, notes } = req.body;

    const event = new Event({
      title,
      start,
      end,
      notes,
      userId: req.user.id,
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: "Error creating event", error });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: "Error updating event", error });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error });
  }
};

module.exports = { getEvents, addEvent, updateEvent, deleteEvent };
