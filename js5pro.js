// Base class for Characters
function Character() {};
    // Constructor for survivor and Herd properties
    Character.prototype = {
    constructor(name, health, baseDamage) {
      this.name = name;
      this.health = health;
      this.baseDamage = baseDamage;

    }


}

Survivor.prototype = {
    constructor: Survivor 
}


zombieHerd.protype = {
    constructor: zombieHerd 
}


class survivorGroup {
    constructor(name) {
        this.name = name;
        this.survivor = [];
    }
    // Used to add new survivors to gameplay 
    addSurvivor(survivor) {
        if (survivor instanceof survivor) {
            this.survivor.push(survivor);
        } else{
          throw new Error(`You can only add a survivor.`);
        }
    }
    describe() {
        return `${this.name} plays ${this.position}.`;
    }
    
}
deleteSurvivor(); {
    let index = prompt('Enter the index of the survivor you wish to delete:');
    if (index > -1 && index < this.selected.survivorGroup.length) {
        this.selectedsurvivorGroup.Survivors.splice(index, 1);
    }
}

    // Attacking 
    attack(zombieHerd); {
        const totalDamage = this.baseDamage + Math.floor(Math.random() * 2);
        console.log(`${this.name} attacks ${target.name} for ${totalDamage} damage!`);
        target.takeDamage(totalDamage);
      }


      
    // Using a Weapon 
    useWeapon(target); {
        console.log(`${this.name} attacks ${target.name}`);
        target.takeDamage(this.baseDamage + 15);
      }
    // Receiving Damage
    takeDamage(damage); {
        this.health -= damage;
        console.log(`${this.name} takes ${damage} damage.`);
        if (this.health <= 0) {
          console.log(`${this.name} has been defeated.`);
        }
      }

       // Create instances of Zombies
  var zombie = new Zombie;
  
  console.log(zombie)
 

  
  // Gameplay 
  Survivor.attack(zombieHerd);
  Survivor.useWeapon(zombieHerd);
  Survivor.gainExp(50);

let menu = new Menu();
menu.start();

  

  