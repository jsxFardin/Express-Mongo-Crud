const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    studentId: Number,
    firstName: String,
    lastName: String,
    age: Number
  })
  
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;