// var num=Number(prompt("enter a number to check whether prime or not"));
// var flag=0;
// for(i=2;i<num;i++)
// {
//   if(num%i===0)
//   {
//     flag=1;
//   }
// }
// if (flag===0) 
// {
//     console.log(`${num} is a prime number`);
// }
// else
// {
//     console.log(`${num} is not a prime number`);  
// }

// f1=0;
// f2=1;
// var n = Number(prompt("enter a number to print fibonacci series"));
// if (n<=1)
// {
//     console.log(f1);
// }
// else 
// {
//   for(i=0;i<=n;i++)
//   {
//     console.log(f1);
//     sum=f1+f2;
//     f1=f2;
//     f2=sum;
//   }
// }

// var ln = Number(prompt("enter a year"));
// if (ln%400===0) {
//     console.log("It is a leap year");
// } else if (ln%4===0 && ln%100!=0) {
//     console.log("It is a leap year");
// } else {
//     console.log("Not a leap year");
// }

let a = Number(prompt("Enter a number"));
let temp = a;
let rev = 0;
while (temp != 0) {
    let id = temp % 10;
    rev = rev * 10 + id;
    temp = Math.floor(temp / 10);
}
console.log(rev);
