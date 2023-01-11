//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function inner(x,y) {
  if(x*x + y*y - 1 <= 0){
    
console.log(x*x + y*y - 1);
  return true;
  }
return false;
}


function middle( x,y) {
  if(inner(x,y) == false && (x*x+y*y - 25 <= 0 )){
      console.log(x*x + y*y - 25);
      return true;
  }


return false;
}

function outer(x,y) {
    if(middle(x,y) == false && inner(x,y) == false && (x*x+y*y - 100 <= 0 )){
      
console.log(x*x + y*y - 100);
  return true;
    }
return false;
}



export const score = (x,y) => {
 let scores = 0;
if(inner(x,y) == true)
  scores = scores + 10;

  if(middle(x,y) == true)
  scores = scores + 5;

  if(outer(x,y) == true)
  scores = scores + 1;


   
  return scores;
};
