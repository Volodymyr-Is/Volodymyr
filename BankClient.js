function createClient(){
    let newName = prompt("Enter your name:", "---");
    let newBal = prompt("Enter your balance:", "---");
    let client = {
        Name: newName,
        Balance: newBal
    }
    return client;
}

function withdraw(starterBalance, balanceToWithdraw){
    return starterBalance = starterBalance - balanceToWithdraw - (balanceToWithdraw * 1/20);
}

function getMoney(receiverBalance, balanceToReceive){
    return receiverBalance - ((-1) * balanceToReceive);
}

function sendMoney(starterBalance, balanceToReceive){
    return starterBalance = starterBalance - balanceToReceive - (balanceToReceive * 1/10);
}

let exit = false;
let client1 = createClient();
console.log("Created client 1!");

let client2 = createClient();
console.log("Created client 2!");

while(!exit){
    let choice = prompt("1.Withdraw 2.Show your balance 3.Send money 4. Exit. Choice option: ", "---");

    if(choice == "1"){
        let moneyToWithdraw = prompt("Enter your money to withdraw:", "---");
        client1.Balance = withdraw(client1.Balance, moneyToWithdraw);
    }

    else if(choice == "2"){
        console.log("Hello,", client1.Name, "Your balance is:", client1.Balance);
    }

    else if(choice == "3"){
        let choiceReceiver = prompt("Enter receiver name:", "---");
        let moneyToSend = prompt("Enter money to send:", "---");

        if (choiceReceiver == client2.Name){
        client1.Balance = sendMoney(client1.Balance, moneyToSend);
        
        client2.Balance = getMoney(client2.Balance, moneyToSend);
        console.log(choiceReceiver, "balance is:", client2.Balance);
        }
        else{
            alert("There is no receiver with that name!");
        }
    }


    else if(choice == "4"){
        exit = true;
        break;
    }

    else{
        alert("Error! Wrong option!");
    }
}