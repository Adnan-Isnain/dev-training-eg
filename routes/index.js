var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../public/fisika.json');
const fisikaFile = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(fisikaFile);


/* GET home page. */
let benar = 0;
let salah = 0
router.get('/', function (req, res, next) {
  const random_idx = Math.floor(Math.random() * data.length)
  res.render('index', { benar: benar, salah: salah, soal: data[random_idx] });
});

/* POST increase counter by 1. */
router.post("/increase-counter", function (req, res, next) {
  const { id_soal, option } = req.body
  if (option) {
    const idxChoice = parseInt(option)
    const idx = data.findIndex(o => (o['problem-id'] === id_soal))
    const answer = data[idx]['soal']['options'][idxChoice][0]

    if (answer) {
      benar += 1
    } else {
      salah += 1
    }
  }

  res.redirect("/");
});

module.exports = router;
