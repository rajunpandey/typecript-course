class BankAccount {
    private balance: number; 
    constructor(initialBalance: number) {
       this.balance = initialBalance;
    } 
    private calculateInterest(): number {
       const interestRate = 0.05;
       return this.balance * interestRate;
    } 
 }  

 const account = new BankAccount(1000); 
 

 console.log(account.balance); 
 console.log(account.calculateInterest());