//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function isPrime(number) {

  
  
  if(number === 2)
    return true;
  
  for(let i=2;i<number;i++){
    if(number%i==0)
      return false;
  }
  return true;
}


export const prime = (number) => {

  if(number < 1){
    
    throw new Error('there is no zeroth prime');
  return false;
  }
  
let counter = 0,i=1;
  while(counter !== number){
     i++;
    if(isPrime(i)==true){
  counter++}
   
  }
  return i;
};
