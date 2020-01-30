var express = require('express');
var router = express.Router();
var us_states = require('../us_state.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Find My Election', states: us_states });
});

/* GET API data */
$(document).ready(function() {
  const URL = "https://api.turbovote.org/elections/upcoming"
  $('.button').click(function(){
    $.get(URL, function(data, status){
      console.log(`${data}`)
    })
  })
})

module.exports = router;
