let starterBudget = 10;
let lose = false;
let count = 0;

while(!lose){
    alert("Your budget is: " + starterBudget)
    let choice1 = prompt("You want to start or continue game?", "-");
    alert(choice1);
    if(choice1 == "yes" || choice1 == "Yes"){
        if(count == 0){
            starterBudget -= 2;
        }
        else{
            starterBudget -= 0;
        }
        let choice2 = prompt("Enter number: ", "-")

        if(choice2 == 1){
            alert("Wrong! Good luck next time!");
            count++;
            continue;
        }

        else if(choice2 == 2){
            alert("Well done!")
            if(count == 0){
                starterBudget += 5; 
            }
            else if(count == 1){
                starterBudget += 3; 
            }
            if(count == 2){
                starterBudget += 1; 
            }
            if(count > 2){
                starterBudget += 0;
                lose = true;
            }
            count = 0;
            continue;
        }
        else if(choice2 == 3){
            alert("Wrong! Good luck next time!");
            count++;
            continue;
        }

        else if(choice2 == 4){
            alert("Wrong! Good luck next time!");
            count++;
            continue;
        }

        else{
            alert("Error! Wrong option!");
            continue;
        }
    }

    else if(choice1 == "no" || choice1 == "No"){
        lose = true;
    }

    else{
        alert("Error! Wrong option!");
    }
}