// Problem #5

// create an object that is a person================
function Person(fname, lname, age) {
  this.fname = fname
  this.lname = lname
  this.age = age
}
// ============================================================

// create a student object that extends from the person object===========
function Student(fname, lname, age, student_id) {
  this.student_id = student_id
  Person.apply(this, arguments)
}
Student.prototype = new Person()

var jesse = new Student("Jesse", "Hwang", "29", "678283")
var alex = new Student("Alex", "Pujol", "24", "372834")
var desi = new Student("Desi", "De Martiis", "25", "18356")

// ==============================================================================

// create a teacher object that extends fromthe person object===========
function Teacher(fname, lname, age, teaching_credentials) {
  this.teaching_credentials = "yes"
  Person.apply(this, arguments)
}
Teacher.prototype = new Person()

var orlando = new Teacher("Orlando", "Caraballo", "32")
var tolu = new Teacher("Tolu", "something", "23")
var jeremy = new Teacher("Jeremy", "Andaya", "27")

// ==============================================================================

// create a school object that can store instances of students and teachers========
// var school_list = []
// var teacher_list = []
// var student_list = []

function School(name) {
  this.name = name
  this.teacher_list = []
  this.student_list = []
  this.teacher = function(obj) {
      if (!('student_id' in obj) == true) {
        this.teacher_list.push(obj)
      }
  }

  this.student = function(obj) {
      if (!('teaching_credentials' in obj) == true) {
        this.student_list.push(obj)
      }
  }

}

var nycda = new School("NCYDA")
nycda.teacher(orlando)
nycda.teacher(tolu)
nycda.teacher(jeremy)
nycda.student(jesse)
nycda.student(alex)
nycda.student(desi)

console.log(nycda.teacher_list)
console.log(nycda.student_list)

