"use strict";

class Bank {
    constructor() {
        this.accounts = [];
    }
    static nextNumber = 1;

    addAccount() {
        const account = new Account(Bank.nextNumber++);
        this.accounts.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        const savingAccount = new SavingsAccount(Bank.nextNumber++, interest);
        this.accounts.push(savingAccount);
        return savingAccount.getNumber();
    }

    addCheckingAccount(overdraft) {
        const checkingAccount = new CheckingAccount(Bank.nextNumber++, overdraft);
        this.accounts.push(checkingAccount);
        return checkingAccount.getNumber();
    }

    closeAccount(number) {
        return this.accounts = this.accounts.filter(account => account.number !== number);
    }

    accountReport() {
        return this.accounts.map(account => account.toString()).join('\n');
    }

    endOfMonth() {
        return this.accounts.map(acc => acc.endOfMonth()).filter(report => report !== '').join('\n');
    }
}
