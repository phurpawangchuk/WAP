"use strict";

class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    setOverDraft(amount) {
        this._overdraft = amount;
    }

    getOverDraft() {
        return this._overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdraw amount has to be greater than zero');
        }
        if (amount > this._balance + this._overdraft) {
            throw new Error('Insufficient funds, overdraft limit reached');
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance + ", Withdraw: " + this._overdraft;
    }

    endOfMonth() {
        return `Warning, low balance ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraft}`;
    }
}