var date = new Date(2024,10,28,)
console.log(date);
var time = date.getHours()
console.log(time);

if(time >0 && time <12)
    console.log("good morning");
else if(time>=12 && time<16)
    console.log("good afternoon");
else if(time>=16 && time<19)
    console.log("good evening");
else if(time>=19 && time<=23)
    console.log("good night");
else
    console.log("invalid input");