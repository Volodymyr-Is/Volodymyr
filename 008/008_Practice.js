function createWarrior(name){
    return {
        Name: name,
        HP: 100,
        isDefend: false
    }
}

function attack(target){
    if(target.isDefend == false){
        target.HP -= 10;
    }
    else if (target.isDefend == true){
        target.HP -= 0;
    }
}

function defend(defender, target){
    target.HP -= 5;
    defender.isDefend = true;
}

function skip(warrior){
    alert(warrior.Name + " skipped Round");
}

function regen(warrior){
    warrior.HP += 5;
}

function ShowInfo(warrior1, a){
    alert("Warrior " + a + " info: " + warrior1.Name + " | " + warrior1.HP + " HP")
}

function clearDefendStatus(warrior1, warrior2){
    warrior1.isDefend = false;
    warrior2.isDefend = false;
}


function fight(warrior1, warrior2){
    let roundCount = 0;

    while(warrior1.HP > 0 && warrior2.HP > 0){
        alert("Round " + roundCount);

        let choiceW1 = prompt("Warrior 1: 1.Attack 2.Defend 3.Skip. 4.Regen", "Enter number to choice option");
       
        if(choiceW1 == "1"){
            attack(warrior2);
        }
        else if(choiceW1 == "2"){
            defend(warrior1, warrior2);
        }
        else if(choiceW1 == "3"){
            skip(warrior1);
        }
        else if(choiceW1 == "4"){
            regen(warrior1);
        }
        else{
            alert("Error! Wrong option!");
        }


        let choiceW2 = prompt("Warrior 2: 1.Attack 2.Defend 3.Skip. 4.Regen", "Enter number to choice option");
        if(choiceW2 == "1"){
            attack(warrior1);
        }
        else if(choiceW2 == "2"){
            defend(warrior2, warrior1);
        }
        else if(choiceW2 == "3"){
            skip(warrior2);
        }
        else if(choiceW2 == "4"){
            regen(warrior2);
        }
        else{
            alert("Error! Wrong option!");
        }

        ShowInfo(warrior1, 1);
        ShowInfo(warrior2, 2);
        clearDefendStatus(warrior1, warrior2);


        roundCount += 1;
    }
}



let warrior1 = createWarrior("Artur");
let warrior2 = createWarrior("Serhii");
fight(warrior1, warrior2);