var student = {
    name : "Akash",
    age : 26,
    gender : "Male",
    address : {
        landmark : ["Aggarwal", "Barat Ghar"],
        city : "Delhi",
        state : "Delhi",
        pincode : 110076,
    },
    organization : {
        name : "Masai School",
        course : "FSWD",
    }
}
// console.log(student); 
// console.log(student.address);
// console.log(student.organization);
// console.log(student.name);
// console.log(student.organization.name);


//array of object
var classroom = [
    {name : "Akash", age : 32, gender : "Male"},
    {name : "akki", age : 22, gender : "Male"},
    {name : "ajay", age : 28, gender : "Male"},
];

// console.log(classroom[1].age);
var sum = 0;
for(var i=0; i<classroom.length; i++){
    // console.log(classroom[i]);
    // console.log(classroom[i].name, classroom[i].age)
    // console.log(classroom[i].age)
    sum += classroom[i].age;
}
console.log(sum / classroom.length);



//function in object
var details = {
    name : "Akash",
    age : 27,
    print : function(){
        console.log("I am a funtion");
    }
}
details.print();
