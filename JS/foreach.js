var sweet = ["Rasgulla", "Barfi", "Kajkatli", "Gulab Jamun", "Ladoo", "Peda", "Rasmalai"];
// var sweet = [5, 10, 20, 54, 84];
for(var i = 0; i < sweet.length; i++){
    // console.log(sweet[i]);
}

//HOF => Higher Order Function
sweet.forEach(function(sweet, index, arr){
    console.log(sweet, index, arr);
})

//method        input       output     
//forEach       array       undefined
//map           array       array
//filter        array       array
//reduce        array       single value

//chaining