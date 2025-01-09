function createBankAccount(initialBalance){
    let balance = initialBalance;
    
    return {
        disposit : function(amount){
            balance += amount;
            return balance;
        },
        withdraw(amount){
            if(amount <= balance){
                balance -= amount;
                return balance;
            }else {
                return "Insufficient funds";
            }
        },
        getBalance : function(){
            return balance;
        }
    }
}
const account = createBankAccount(100);

console.log(account.disposit(50)); // 150
console.log(account.withdraw(30)); // 120
console.log(account.getBalance()); // 120