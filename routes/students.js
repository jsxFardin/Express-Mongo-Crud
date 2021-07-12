var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const studentModel = require('../models/Student');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('all student');
});


router.post('/new', function (req, res, next) {

  let newStudent = new studentModel({
    studentId: 1,
    firstName: 'Fardin',
    lastName: 'Ahsan',
    age: 24
  })

  newStudent.save((error, newStudent) =>{
    if(error) {
      res.send(error);
    } else {
      res.send({message: 'Students added successfully!', data: newStudent});
    }
  })

 
});

module.exports = router;
