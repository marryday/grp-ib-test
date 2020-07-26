var express = require("express");
var router = express.Router();
const Event = require("../models/event");
const Tag = require("../models/Tag");
const fetch = require("node-fetch");

router.get("/api", async (req, res, next) => {
  try {
    const events = await Event.find().populate("tag");
    res.json(events);
  } catch (e) {
    res.send(e.message);
  }
});

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const randomLocation = [
  "Парк горького",
  "Парк Победы",
  "Мясницкая",
  "Ботанический сад",
  "Новый арбат",
];
router.post("/api", async (req, res, next) => {
  let date = new Date();
  let day = date.getDate();
  day < 10 ? (day = "0" + day) : day;
  let month = date.getMonth();
  const ageLimit = randomNumber(0, 18).toString() + "+";
  const price = randomNumber(0, 10000);
  const location = randomLocation[randomNumber(0, 5)];
  month + 1 < 10 ? (month = "0" + (month + 1)) : month + 1;
  try {
    const img = await (
      await fetch("https://some-random-api.ml/img/red_panda")
    ).json();
    const description = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    const event = await new Event({
      title: description[randomNumber(0, 30)].title,
      img: img.link,
      date: day + "/" + month + "/" + date.getFullYear(),
      description: description[randomNumber(0, 30)].body,
      location,
    });
    const tags = await new Tag({
      ageLimit,
      duration: randomNumber(1, 20) + " часов",
      price,
      location,
    });
    await tags.save();
    event.tag = tags;
    await event.save();
    res.json(event);
  } catch (e) {
    console.error(e.message);
    res.status(500).send(e.message);
  }
});

router.put("/api", async (req, res, next) => {
  try {
    const event = await Event.findById(req.body.id);
    event.favorites = true;
    await event.save();
    res.status(200).json(null);
  } catch (e) {
    res.status(204).send(e.message);
  }
});

module.exports = router;
