//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
var number = '';
export const isArmstrongNumber = (num) => {
 number = num.toString();
 let length = number.length,temp=0;
 for(let i=0;i<length;i++){
temp = temp + Math.pow(number[i],length)
   console.log(temp);
 }
 if(temp === num)
 return true;
  return false;
};