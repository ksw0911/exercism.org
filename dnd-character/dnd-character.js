//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function rolls (){
let arr = [3];
  let sum=0;

  for(let i=0;i<4;i++){
   arr[i] = Math.round(Math.random() * 5 +1);
  }

arr.sort();
arr.pop();

  arr.forEach(element => { sum += element;   
  });


  return sum;
}

export const abilityModifier = (roll) => {
   if(roll<3){
     throw new Error("Ability scores must be at least 3");
   }else if(roll>18){
       throw new Error("Ability scores can be at most 18");
}
    
  return Math.floor((roll-10)/2);
}

export class Character {
    static rollAbility() {
        
        return rolls();
    }
 constructor() {
        this.strength = Character.rollAbility();
        this.dexterity = Character.rollAbility();
        this.constitution = Character.rollAbility();
        this.intelligence = Character.rollAbility();
        this.wisdom = Character.rollAbility();
        this.charisma = Character.rollAbility();
        this.hitpoints = 10 + abilityModifier(this.constitution);
    }
}



