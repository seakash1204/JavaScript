// Object => key-value pair
// creating an object

var details = ["Akash", 26, "Male", "delhi", false];
console.log(details[0]);


  var student = {
    Name : "Akash",
    Age : 26,
    Gender : "Male", 
    City : "Chennai",
    HasDL : false,
  }
  console.log(student);
  console.log(student["Name"]);

  console.log(student.Gender);

  student["Name"] = "Akki";
  console.log(student["Name"]);
  student.City = "Bangalore";
  console.log(student);
