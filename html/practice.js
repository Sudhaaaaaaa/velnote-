{let sum= 0;
for (a=1;a<=5;a++) {
    sum = sum +a;
}
console.log("the sum is;",sum);
}

{
    let i = "sudha basnet";
    let size =  0;
    for ( let val of i) {
        console.log ("i=",i);
        size++;
    }
    console.log ("string size =",size);
}

{
    let math=["sum","difference","product","quotient"]
    for ( let idx =0; idx<math.length;idx++)
    {
        console.log(math[idx]);
    }
}

{
    let cities = ["ktm","pokhara","birtamod","itahari"]
    for (let city of cities) {
        console.log (city);
    }
}


{
    let marks =[ 10,20,30,40,50]
    sum = 0 ;
    for (let val of marks) {
        sum += val;
    }
    avg = sum / marks.length;
    console.log ("the avg is=",avg);
}


{
function sum (a,b){
let s = a+b;
return s;}
 val = sum (3,9);
 console.log ("sum =",val);

}

let arr = [1,2,3,4,5] ;
arr.forEach( (val) => {
    console.log (val);
});


{
    let num =[2,3,4];
    num.forEach((nums) => {
        console.log (nums**2);
    });
}


let nums = [2,3,4,5];
let newAr = nums.map((val) => {
    return val;
});
console.log (newAr);